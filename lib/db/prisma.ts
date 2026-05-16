import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import { PrismaClient } from '@/prisma/generated';
import generatedPackage from '@/prisma/generated/package.json';
import ws from 'ws';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required to initialize Prisma.');
}

neonConfig.webSocketConstructor = ws;
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });

const generatedClientFingerprint = generatedPackage.name;

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  prismaFingerprint?: string;
};

const shouldReuseCachedClient =
  !!globalForPrisma.prisma &&
  globalForPrisma.prismaFingerprint === generatedClientFingerprint;

export const prisma =
  (shouldReuseCachedClient ? globalForPrisma.prisma : undefined) ??
  new PrismaClient({
    adapter,
    log: ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
  globalForPrisma.prismaFingerprint = generatedClientFingerprint;
}
