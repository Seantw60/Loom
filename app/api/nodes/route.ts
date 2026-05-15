import { auth } from '@/auth';
import { prisma } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';

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
    orderBy: { createdAt: 'asc' },
  });

  return NextResponse.json(nodes);
}

// POST /api/nodes
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { projectId, type, name, content, position } = await req.json() as {
    projectId: string;
    type: string;
    name: string;
    content?: string;
    position: number;
  };

  if (!projectId || !type || !name?.trim()) {
    return NextResponse.json({ error: 'projectId, type and name are required.' }, { status: 400 });
  }

  // Verify ownership
  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const node = await prisma.loreNode.create({
    data: { projectId, type, name: name.trim(), content: content?.trim(), position },
  });

  return NextResponse.json(node, { status: 201 });
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

  const node = await prisma.loreNode.update({
    where: { id },
    data: {
      type,
      name: name.trim(),
      content: content?.trim(),
      position,
    },
  });

  return NextResponse.json(node);
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
