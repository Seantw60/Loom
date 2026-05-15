import { auth } from '@/auth';
import { prisma } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('projectId');

  if (projectId) {
    const project = await prisma.project.findFirst({
      where: {
        id: projectId,
        userId: session.user.id,
      },
    });

    if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(project);
  }

  const projects = await prisma.project.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { name, description, genre } = await req.json() as {
    name: string;
    description?: string;
    genre?: string;
  };

  if (!name?.trim()) return NextResponse.json({ error: 'Name is required.' }, { status: 400 });

  const project = await prisma.project.create({
    data: {
      userId: session.user.id,
      name: name.trim(),
      description: description?.trim(),
      genre: genre?.trim(),
    },
  });

  return NextResponse.json(project, { status: 201 });
}
