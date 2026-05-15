import { auth } from '@/auth';
import { prisma } from '@/lib/db/prisma';
import { buildArcPrefix, readArcFromTitle } from '@/lib/story-arcs';
import { NextResponse } from 'next/server';

// GET /api/arcs?projectId=xxx
export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('projectId');
  if (!projectId) return NextResponse.json({ error: 'projectId required' }, { status: 400 });

  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const chapters = await prisma.chapter.findMany({
    where: { projectId },
    orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
  });

  const arcCounts = new Map<string, number>();
  for (const chapter of chapters) {
    const arc = readArcFromTitle(chapter.title);
    if (arc) {
      arcCounts.set(arc, (arcCounts.get(arc) ?? 0) + 1);
    }
  }

  return NextResponse.json(
    [...arcCounts.entries()]
      .map(([name, chapterCount]) => ({ name, chapterCount }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })),
  );
}

// POST /api/arcs
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { projectId, name } = await req.json() as {
    projectId: string;
    name: string;
  };

  if (!projectId || !name?.trim()) {
    return NextResponse.json({ error: 'projectId and name are required.' }, { status: 400 });
  }

  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const normalizedName = name.trim();
  const chapters = await prisma.chapter.findMany({ where: { projectId } });
  const exists = chapters.some((chapter) => readArcFromTitle(chapter.title) === normalizedName);
  if (exists) {
    return NextResponse.json({ name: normalizedName, chapterCount: chapters.filter((chapter) => readArcFromTitle(chapter.title) === normalizedName).length });
  }

  const order = await prisma.chapter.count({ where: { projectId } });
  const created = await prisma.chapter.create({
    data: {
      projectId,
      order: order + 1,
      title: `[ARC:${normalizedName}] Chapter 1`,
      content: '',
    },
  });

  return NextResponse.json({ name: normalizedName, chapterCount: 1, chapterId: created.id }, { status: 201 });
}

// DELETE /api/arcs
export async function DELETE(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { projectId, name } = await req.json() as {
    projectId: string;
    name: string;
  };

  if (!projectId || !name?.trim()) {
    return NextResponse.json({ error: 'projectId and name are required.' }, { status: 400 });
  }

  const project = await prisma.project.findUnique({ where: { id: projectId } });
  if (!project || project.userId !== session.user.id) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const arcName = name.trim();
  const arcPrefix = buildArcPrefix(arcName);

  const arcChapters = await prisma.chapter.findMany({
    where: {
      projectId,
      title: { startsWith: arcPrefix },
    },
    select: { id: true },
  });

  if (arcChapters.length === 0) {
    return NextResponse.json({ error: 'Arc not found or already empty.' }, { status: 404 });
  }

  const deleted = await prisma.chapter.deleteMany({
    where: { id: { in: arcChapters.map((chapter) => chapter.id) } },
  });

  return NextResponse.json({ ok: true, name: arcName, deletedChapters: deleted.count });
}
