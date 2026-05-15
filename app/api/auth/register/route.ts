import { prisma } from '@/lib/db/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, password } = await req.json() as {
    name: string;
    email: string;
    password: string;
  };

  if (!email || !password || !name) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: 'Email already in use.' }, { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { name, email, password: hashed },
    select: { id: true, name: true, email: true },
  });

  return NextResponse.json(user, { status: 201 });
}
