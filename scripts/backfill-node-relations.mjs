import 'dotenv/config';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import { PrismaClient } from '../prisma/generated/index.js';
import ws from 'ws';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required to run relation backfill.');
}

neonConfig.webSocketConstructor = ws;
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

const NODE_LINK_PATTERN = /href=["']node:([^"']+)["']/gi;

function stripHtml(content) {
  return content
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractLinkedNodeIds(content) {
  if (!content) return [];

  const ids = new Set();
  for (const match of content.matchAll(NODE_LINK_PATTERN)) {
    const id = match[1]?.trim();
    if (id) ids.add(id);
  }

  return Array.from(ids);
}

async function backfillProject(projectId) {
  const nodes = await prisma.loreNode.findMany({
    where: { projectId },
    select: {
      id: true,
      name: true,
      content: true,
    },
  });

  if (nodes.length === 0) {
    return { projectId, nodes: 0, created: 0 };
  }

  const relationRows = [];
  const nodeIdSet = new Set(nodes.map((node) => node.id));

  for (const sourceNode of nodes) {
    const targets = new Set();

    const explicitIds = extractLinkedNodeIds(sourceNode.content ?? '');
    for (const explicitId of explicitIds) {
      if (explicitId !== sourceNode.id && nodeIdSet.has(explicitId)) {
        targets.add(explicitId);
      }
    }

    if (targets.size === 0) {
      const text = stripHtml(sourceNode.content ?? '').toLowerCase();
      if (text) {
        for (const targetNode of nodes) {
          if (targetNode.id === sourceNode.id) continue;
          const targetName = targetNode.name.trim().toLowerCase();
          if (!targetName) continue;
          if (text.includes(targetName)) {
            targets.add(targetNode.id);
          }
        }
      }
    }

    for (const targetNodeId of targets) {
      relationRows.push({
        projectId,
        sourceNodeId: sourceNode.id,
        targetNodeId,
      });
    }
  }

  if (relationRows.length > 0) {
    await prisma.nodeRelation.createMany({
      data: relationRows,
      skipDuplicates: true,
    });
  }

  return { projectId, nodes: nodes.length, created: relationRows.length };
}

async function main() {
  const projects = await prisma.project.findMany({
    select: { id: true },
  });

  let totalCandidates = 0;
  for (const project of projects) {
    const result = await backfillProject(project.id);
    totalCandidates += result.created;
    console.log(
      `[backfill-node-relations] project=${result.projectId} nodes=${result.nodes} relationCandidates=${result.created}`,
    );
  }

  console.log(`[backfill-node-relations] complete relationCandidates=${totalCandidates}`);
}

main()
  .catch((error) => {
    console.error('[backfill-node-relations] failed', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
