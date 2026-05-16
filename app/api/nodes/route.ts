import { auth } from '@/auth';
import { prisma } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';

const HREF_ATTR_PATTERN = /href=["']([^"']+)["']/gi;
const NODE_REF_PATTERN = /\bnode:([a-zA-Z0-9 _-]+)/gi;
const BRANCH_MARKER_PATTERN = /<!--\s*loom-branch-from:([a-z0-9]+)\s*-->/i;
const BRANCH_MARKER_STRIP_PATTERN = /<!--\s*loom-branch-from:[a-z0-9]+\s*-->/gi;

function normalizeReference(value: string) {
  return value.trim().toLowerCase().replace(/[\s_-]+/g, '');
}

function extractNodeToken(value?: string | null) {
  if (!value) return null;

  const decoded = decodeURIComponent(value).trim();
  const index = decoded.toLowerCase().indexOf('node:');
  if (index < 0) return null;

  const afterPrefix = decoded.slice(index + 5).replace(/^\/+/, '');
  const token = afterPrefix.split(/[?#&"'<>\s/]/)[0]?.trim();
  return token || null;
}

function extractNodeReferences(content?: string) {
  if (!content) return [];

  const references = new Set<string>();

  for (const match of content.matchAll(HREF_ATTR_PATTERN)) {
    const token = extractNodeToken(match[1]);
    if (token) references.add(token);
  }

  for (const match of content.matchAll(NODE_REF_PATTERN)) {
    const token = match[1]?.trim();
    if (token) references.add(token);
  }

  return Array.from(references);
}

function extractBranchOriginId(content?: string | null) {
  if (!content) return null;
  const match = content.match(BRANCH_MARKER_PATTERN);
  return match?.[1] ?? null;
}

function stripBranchMarker(content?: string | null) {
  if (!content) return content ?? null;
  return content.replace(BRANCH_MARKER_STRIP_PATTERN, '').trim();
}

function withBranchMarker(content: string | undefined, branchOriginId?: string | null) {
  const cleaned = stripBranchMarker(content)?.trim();
  if (!branchOriginId) {
    return cleaned || undefined;
  }

  const marker = `<!--loom-branch-from:${branchOriginId}-->`;
  return cleaned ? `${marker}${cleaned}` : marker;
}

async function resolveRelatedNodeIds(
  tx: Parameters<Parameters<typeof prisma.$transaction>[0]>[0],
  projectId: string,
  sourceNodeId: string,
  content?: string,
) {
  const references = extractNodeReferences(content);
  if (references.length === 0) return [];

  const projectNodes = await tx.loreNode.findMany({
    where: { projectId },
    select: { id: true, name: true },
  });

  const idsById = new Map(projectNodes.map((node) => [node.id.toLowerCase(), node.id]));
  const idsByName = new Map(projectNodes.map((node) => [normalizeReference(node.name), node.id]));

  const resolved = new Set<string>();
  for (const reference of references) {
    const normalizedReference = normalizeReference(reference);
    const matchedId = idsById.get(reference.toLowerCase()) ?? idsByName.get(normalizedReference);
    if (matchedId && matchedId !== sourceNodeId) {
      resolved.add(matchedId);
    }
  }

  return Array.from(resolved);
}

function formatNodeWithRelations(node: {
  id: string;
  projectId: string;
  type: string;
  name: string;
  content: string | null;
  position: number;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  outgoingRelations?: Array<{ targetNodeId: string }>;
}) {
  return {
    id: node.id,
    projectId: node.projectId,
    type: node.type,
    name: node.name,
    content: stripBranchMarker(node.content),
    position: node.position,
    color: node.color,
    createdAt: node.createdAt,
    updatedAt: node.updatedAt,
    branchFromNodeId: extractBranchOriginId(node.content),
    relatedNodeIds: node.outgoingRelations?.map((relation) => relation.targetNodeId) ?? [],
  };
}

// GET /api/nodes?projectId=xxx
export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('projectId');
  if (!projectId) return NextResponse.json({ error: 'projectId required' }, { status: 400 });

  // Verify ownership
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const nodes = await prisma.loreNode.findMany({
    where: { projectId },
    include: {
      outgoingRelations: {
        select: { targetNodeId: true },
      },
    },
    orderBy: { createdAt: 'asc' },
  });

  return NextResponse.json(nodes.map(formatNodeWithRelations));
}

// POST /api/nodes
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { projectId, type, name, content, position, connectFromNodeId } = await req.json() as {
    projectId: string;
    type: string;
    name: string;
    content?: string;
    position: number;
    connectFromNodeId?: string;
  };

  if (!projectId || !type || !name?.trim()) {
    return NextResponse.json({ error: 'projectId, type and name are required.' }, { status: 400 });
  }

  // Verify ownership
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const normalizedContent = withBranchMarker(content?.trim(), connectFromNodeId);

  const node = await prisma.$transaction(async (tx) => {
    const created = await tx.loreNode.create({
      data: { projectId, type, name: name.trim(), content: normalizedContent, position },
    });

    if (connectFromNodeId && connectFromNodeId !== created.id) {
      const sourceNode = await tx.loreNode.findFirst({
        where: {
          id: connectFromNodeId,
          projectId,
        },
        select: { id: true },
      });

      if (sourceNode) {
        await tx.nodeRelation.createMany({
          data: [
            {
              projectId,
              sourceNodeId: sourceNode.id,
              targetNodeId: created.id,
            },
          ],
          skipDuplicates: true,
        });
      }
    }

    const targetNodeIds = await resolveRelatedNodeIds(tx, projectId, created.id, normalizedContent);
    if (targetNodeIds.length > 0) {
      await tx.nodeRelation.createMany({
        data: targetNodeIds.map((targetNodeId) => ({
          projectId,
          sourceNodeId: created.id,
          targetNodeId,
        })),
        skipDuplicates: true,
      });
    }

    return tx.loreNode.findUniqueOrThrow({
      where: { id: created.id },
      include: {
        outgoingRelations: {
          select: { targetNodeId: true },
        },
      },
    });
  });

  return NextResponse.json(formatNodeWithRelations(node), { status: 201 });
}

// PUT /api/nodes
export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id, projectId, type, name, content, position } = await req.json() as {
    id: string;
    projectId: string;
    type: string;
    name: string;
    content?: string;
    position: number;
  };

  if (!id || !projectId || !type || !name?.trim()) {
    return NextResponse.json({ error: 'id, projectId, type and name are required.' }, { status: 400 });
  }

  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const existingNode = await prisma.loreNode.findUnique({ where: { id } });
  if (!existingNode || existingNode.projectId !== projectId) {
    return NextResponse.json({ error: 'Node not found' }, { status: 404 });
  }

  const normalizedContent = withBranchMarker(content?.trim(), extractBranchOriginId(existingNode.content));

  const node = await prisma.$transaction(async (tx) => {
    const updated = await tx.loreNode.update({
      where: { id },
      data: {
        type,
        name: name.trim(),
        content: normalizedContent,
        position,
      },
    });

    await tx.nodeRelation.deleteMany({ where: { sourceNodeId: updated.id } });

    const targetNodeIds = await resolveRelatedNodeIds(tx, projectId, updated.id, normalizedContent);
    if (targetNodeIds.length > 0) {
      await tx.nodeRelation.createMany({
        data: targetNodeIds.map((targetNodeId) => ({
          projectId,
          sourceNodeId: updated.id,
          targetNodeId,
        })),
        skipDuplicates: true,
      });
    }

    return tx.loreNode.findUniqueOrThrow({
      where: { id: updated.id },
      include: {
        outgoingRelations: {
          select: { targetNodeId: true },
        },
      },
    });
  });

  return NextResponse.json(formatNodeWithRelations(node));
}

// DELETE /api/nodes
export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id, projectId } = await req.json() as {
    id: string;
    projectId: string;
  };

  if (!id || !projectId) {
    return NextResponse.json({ error: 'id and projectId are required.' }, { status: 400 });
  }

  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const existingNode = await prisma.loreNode.findUnique({ where: { id } });
  if (!existingNode || existingNode.projectId !== projectId) {
    return NextResponse.json({ error: 'Node not found' }, { status: 404 });
  }

  await prisma.loreNode.delete({ where: { id } });

  return NextResponse.json({ ok: true });
}
