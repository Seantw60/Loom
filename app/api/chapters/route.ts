import { auth } from '@/auth';
import { prisma } from '@/lib/db/prisma';
import { buildArcPrefix, readArcFromTitle, stripArcPrefix, withArcPrefix } from '@/lib/story-arcs';
import { NextResponse } from 'next/server';

// GET /api/chapters?projectId=xxx&arc=Character
export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('projectId');
  const arc = searchParams.get('arc') ?? undefined;

  if (!projectId) return NextResponse.json({ error: 'projectId required' }, { status: 400 });

  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const chapters = await prisma.chapter.findMany({
    where: {
      projectId,
      ...(arc ? { title: { startsWith: buildArcPrefix(arc) } } : {}),
    },
    orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
  });

  return NextResponse.json(
    chapters.map((chapter) => ({
      ...chapter,
      arc: readArcFromTitle(chapter.title),
      title: stripArcPrefix(chapter.title),
    })),
  );
}

// POST /api/chapters
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { projectId, arc, title, content, order } = await req.json() as {
    projectId: string;
    arc?: string;
    title?: string;
    content?: string;
    order?: number;
  };

  if (!projectId) {
    return NextResponse.json({ error: 'projectId is required.' }, { status: 400 });
  }

  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  let resolvedOrder = order;
  if (typeof resolvedOrder !== 'number') {
    const count = await prisma.chapter.count({
      where: {
        projectId,
        ...(arc ? { title: { startsWith: buildArcPrefix(arc) } } : {}),
      },
    });
    resolvedOrder = count + 1;
  }

  const chapter = await prisma.chapter.create({
    data: {
      projectId,
      order: resolvedOrder,
      title: withArcPrefix(title ?? 'Untitled Chapter', arc),
      content: content?.trim() || '',
    },
  });

  return NextResponse.json(
    {
      ...chapter,
      arc: readArcFromTitle(chapter.title),
      title: stripArcPrefix(chapter.title),
    },
    { status: 201 },
  );
}

// PUT /api/chapters
export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id, projectId, arc, title, content, order } = await req.json() as {
    id: string;
    projectId: string;
    arc?: string;
    title: string;
    content?: string;
    order: number;
  };

  if (!id || !projectId || !title?.trim() || typeof order !== 'number') {
    return NextResponse.json({ error: 'id, projectId, title and order are required.' }, { status: 400 });
  }

  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const existingChapter = await prisma.chapter.findUnique({ where: { id } });
  if (!existingChapter || existingChapter.projectId !== projectId) {
    return NextResponse.json({ error: 'Chapter not found' }, { status: 404 });
  }

  const chapter = await prisma.chapter.update({
    where: { id },
    data: {
      title: withArcPrefix(title, arc),
      content: content?.trim() || '',
      order,
    },
  });

  return NextResponse.json({
    ...chapter,
    arc: readArcFromTitle(chapter.title),
    title: stripArcPrefix(chapter.title),
  });
}

// DELETE /api/chapters
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

  const existingChapter = await prisma.chapter.findUnique({ where: { id } });
  if (!existingChapter || existingChapter.projectId !== projectId) {
    return NextResponse.json({ error: 'Chapter not found' }, { status: 404 });
  }

  await prisma.chapter.delete({ where: { id } });

  return NextResponse.json({ ok: true });
}
