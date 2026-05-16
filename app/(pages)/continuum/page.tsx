'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import RichTextEditor from '@/components/Shared/RichTextEditor';

// Color palette per ribbon type
const RIBBON_CONFIG = [
  { type: 'Character', color: '#e74c3c', label: 'Characters' },
  { type: 'Monster',   color: '#9b59b6', label: 'Monsters'   },
  { type: 'Item',      color: '#f39c12', label: 'Items'       },
  { type: 'Power',     color: '#3498db', label: 'Power Systems' },
  { type: 'Location',  color: '#1abc9c', label: 'Locations'  },
];

interface LoreNode {
  id: string;
  type: string;
  name: string;
  content?: string | null;
  position: number;
  color?: string;
  createdAt?: string;
  branchFromNodeId?: string | null;
  relatedNodeIds?: string[];
}

const MAX_VITALITY_NODES = 18;
const LIFeless_RIBBON_COLOR = '#6b7280';
const MAX_RIBBON_VITALITY_NODES = 4;
const STANDARD_RIBBON_POSITION_MIN = 0.03;
const STANDARD_RIBBON_POSITION_MAX = 0.97;
const EXTENDED_RIBBON_POSITION_MIN = 0.005;
const EXTENDED_RIBBON_POSITION_MAX = 0.995;
const STANDARD_RIBBON_SVG_CLASS = 'absolute -left-[8%] -right-[8%] w-[116%] h-full';
const EXTENDED_RIBBON_SVG_CLASS = 'absolute -left-[20%] -right-[20%] w-[140%] h-full';
const UNFURLED_RIBBON_GAP = 132;
const UNFURLED_RIBBON_Y_OFFSET = 30;
const UNFURLED_VIEWBOX_HEIGHT = RIBBON_CONFIG.length * UNFURLED_RIBBON_GAP + 52;

const BRAID_PATH_WIDTH = 1900;

function buildStrandPath(phase: number, width = BRAID_PATH_WIDTH, centerY = 24, amplitude = 8, segments = 42) {
  const points: string[] = [];
  for (let step = 0; step <= segments; step += 1) {
    const t = step / segments;
    const x = t * width;
    const y = centerY + Math.sin(t * Math.PI * 9 + phase) * amplitude;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `M ${points.join(' L ')}`;
}

const SWIRL_PHASE_STEPS = [
  0,
  -Math.PI / 2,
  -Math.PI,
  -(Math.PI * 3) / 2,
  -(Math.PI * 2),
];

function buildSwirlFrames(basePhase: number, centerY: number, amplitude: number) {
  return SWIRL_PHASE_STEPS.map((step) =>
    buildStrandPath(basePhase + step, BRAID_PATH_WIDTH, centerY, amplitude),
  );
}

function mixHexColors(fromHex: string, toHex: string, amount: number) {
  const ratio = Math.max(0, Math.min(1, amount));
  const from = fromHex.replace('#', '');
  const to = toHex.replace('#', '');

  const fromR = Number.parseInt(from.slice(0, 2), 16);
  const fromG = Number.parseInt(from.slice(2, 4), 16);
  const fromB = Number.parseInt(from.slice(4, 6), 16);

  const toR = Number.parseInt(to.slice(0, 2), 16);
  const toG = Number.parseInt(to.slice(2, 4), 16);
  const toB = Number.parseInt(to.slice(4, 6), 16);

  const r = Math.round(fromR + (toR - fromR) * ratio);
  const g = Math.round(fromG + (toG - fromG) * ratio);
  const b = Math.round(fromB + (toB - fromB) * ratio);

  return `rgb(${r}, ${g}, ${b})`;
}

const ribbonVariants = {
  braid: (i: number) => ({
    x: 0,
    y: i * 2 - 4,
    scaleX: 1,
    opacity: 0.94,
    transition: { duration: 0.55, ease: 'easeInOut' },
  }),
};

const nodeVariants = {
  hidden:  { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4 + i * 0.06, duration: 0.25, ease: 'easeOut' },
  }),
};

interface SpaceStar {
  id: string;
  left: number;
  top: number;
  size: number;
  opacity: number;
  twinkle: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
}

function createSeededRandom(seed: string) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return () => {
    hash += hash << 13;
    hash ^= hash >>> 7;
    hash += hash << 3;
    hash ^= hash >>> 17;
    hash += hash << 5;

    return (hash >>> 0) / 4294967296;
  };
}

function buildSpaceScene(seed: string) {
  const random = createSeededRandom(seed);

  const stars: SpaceStar[] = Array.from({ length: 200 }, (_, index) => {
    const depth = random();
    return {
      id: `star-${index}`,
      left: random() * 100,
      top: random() * 100,
      size: 0.5 + depth * 2.6,
      opacity: 0.18 + depth * 0.72,
      twinkle: 0.82 + random() * 0.34,
      driftX: -28 + random() * 56,
      driftY: -22 + random() * 44,
      duration: 10 + random() * 18,
      delay: -random() * 14,
    };
  });

  return { stars };
}

function hashStringToUnit(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }

  return (Math.abs(hash) % 1000) / 1000;
}

function buildBranchRibbonPath(sourceX: number, sourceY: number, endX: number, endY: number, wave = 0) {
  const launchX = Math.min(98, sourceX + 6.4);
  const launchY = sourceY - 9.8 + wave * 0.32;
  const midX = launchX + (endX - launchX) * 0.36;
  const midY = Math.min(launchY, endY) - 8.6 + wave;

  return [
    `M ${sourceX.toFixed(2)} ${sourceY.toFixed(2)}`,
    `C ${(sourceX + 2.7).toFixed(2)} ${(sourceY + wave * 0.16).toFixed(2)} ${(launchX - 2.2).toFixed(2)} ${(launchY - wave * 0.2).toFixed(2)} ${launchX.toFixed(2)} ${launchY.toFixed(2)}`,
    `C ${midX.toFixed(2)} ${midY.toFixed(2)} ${(endX - 2.3).toFixed(2)} ${(endY - 1.6 + wave * 0.22).toFixed(2)} ${endX.toFixed(2)} ${endY.toFixed(2)}`,
  ].join(' ');
}

function ContinuumPageInner() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const parallaxX = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.5 });
  const parallaxY = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.5 });
  const nebulaX = useTransform(parallaxX, [-1, 0, 1], [-34, 0, 34]);
  const nebulaY = useTransform(parallaxY, [-1, 0, 1], [-24, 0, 24]);
  const starX = useTransform(parallaxX, [-1, 0, 1], [-18, 0, 18]);
  const starY = useTransform(parallaxY, [-1, 0, 1], [-14, 0, 14]);

  const [unfurled, setUnfurled] = useState(false);
  const [isExtendedRibbonLength, setIsExtendedRibbonLength] = useState(true);
  const ribbonPositionMin = isExtendedRibbonLength ? EXTENDED_RIBBON_POSITION_MIN : STANDARD_RIBBON_POSITION_MIN;
  const ribbonPositionMax = isExtendedRibbonLength ? EXTENDED_RIBBON_POSITION_MAX : STANDARD_RIBBON_POSITION_MAX;
  const ribbonSvgSpanClass = isExtendedRibbonLength ? EXTENDED_RIBBON_SVG_CLASS : STANDARD_RIBBON_SVG_CLASS;
  const [hoveredRibbon, setHoveredRibbon] = useState<number | null>(null);
  const [focusedRibbon, setFocusedRibbon] = useState<number | null>(null);
  const [hoveredMainBraidEdge, setHoveredMainBraidEdge] = useState(false);
  const [selectedNode, setSelectedNode] = useState<{ ribbon: string; node: string; nodeId: string } | null>(null);
  const [selectedNodeSnapshot, setSelectedNodeSnapshot] = useState<LoreNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<{ ribbon: number; nodeId: string } | null>(null);
  const [nodes, setNodes] = useState<LoreNode[]>([]);
  const [nodesLoading, setNodesLoading] = useState(false);
  const [nodesError, setNodesError] = useState<string | null>(null);
  const [showCreateNode, setShowCreateNode] = useState(false);
  const [nodeFormMode, setNodeFormMode] = useState<'create' | 'edit'>('create');
  const [branchOriginNodeId, setBranchOriginNodeId] = useState<string | null>(null);
  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);
  const [creatingNode, setCreatingNode] = useState(false);
  const [deletingNode, setDeletingNode] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [newNode, setNewNode] = useState({
    type: RIBBON_CONFIG[0].type,
    name: '',
    content: '',
    position: 0.5,
  });

  useEffect(() => {
    let cancelled = false;

    async function loadNodes(showLoader: boolean) {
      if (!projectId) {
        if (!cancelled) {
          setNodes([]);
          setNodesLoading(false);
          setNodesError(null);
        }
        return;
      }

      if (showLoader && !cancelled) {
        setNodesLoading(true);
      }

      try {
        const res = await fetch(`/api/nodes?projectId=${encodeURIComponent(projectId)}`, {
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error('Failed to load nodes');
        }

        const data = await res.json() as LoreNode[];
        if (!cancelled) {
          setNodes(data);
          setNodesError(null);
        }
      } catch {
        if (!cancelled) {
          setNodesError('Unable to load nodes for this project.');
        }
      } finally {
        if (!cancelled && showLoader) {
          setNodesLoading(false);
        }
      }
    }

    void loadNodes(true);
    if (!projectId) return;

    const pollId = window.setInterval(() => {
      void loadNodes(false);
    }, 4000);

    return () => {
      cancelled = true;
      window.clearInterval(pollId);
    };
  }, [projectId]);

  const branchOriginByNodeId = useMemo(() => {
    const map = new Map<string, string>();

    for (const node of nodes) {
      if (!node.branchFromNodeId) continue;
      map.set(node.id, node.branchFromNodeId);
    }

    return map;
  }, [nodes]);

  const nodesByRibbon = useMemo(() => {
    return RIBBON_CONFIG.map((ribbon) => {
      return nodes
        .filter((node) => node.type === ribbon.type && !branchOriginByNodeId.has(node.id))
        .sort((a, b) => {
          if (a.position !== b.position) return a.position - b.position;
          return (a.createdAt ?? '').localeCompare(b.createdAt ?? '');
        });
    });
  }, [branchOriginByNodeId, nodes]);

  const totalNodes = nodes.length;
  const vitality = Math.min(totalNodes / MAX_VITALITY_NODES, 1);
  const globalColorVibrance = Math.min(1, vitality / 0.5);
  const atmospherePrimary = mixHexColors('#4b5563', '#06b6d4', globalColorVibrance);
  const atmosphereSecondary = mixHexColors('#4b5563', '#9333ea', globalColorVibrance);
  const atmosphereTertiary = mixHexColors('#4b5563', '#f59e0b', globalColorVibrance);
  const atmosphereOpacity = 0.12 + globalColorVibrance * 0.58;
  const atmosphereSaturation = 0.18 + globalColorVibrance * 1.05;
  const spaceScene = useMemo(() => buildSpaceScene(projectId ?? 'continuum'), [projectId]);
  const nodeSuggestions = useMemo(
    () => nodes.map((node) => ({
      id: node.id,
      name: node.name,
      color: node.color,
      label: branchOriginByNodeId.has(node.id) ? `Branch: ${node.name}` : undefined,
    })),
    [branchOriginByNodeId, nodes],
  );
  const nodeRibbonIndex = useMemo(() => {
    const map = new Map<string, number>();
    RIBBON_CONFIG.forEach((_ribbon, ribbonIndex) => {
      nodesByRibbon[ribbonIndex]?.forEach((node) => {
        if (!map.has(node.id)) {
          map.set(node.id, ribbonIndex);
        }
      });
    });
    return map;
  }, [nodesByRibbon]);

  const selectedNodeRecord = useMemo(() => {
    if (!selectedNode) return null;
    return nodes.find((node) => node.id === selectedNode.nodeId) ?? null;
  }, [nodes, selectedNode]);

  const activeSelectedNode = selectedNodeRecord ?? selectedNodeSnapshot;

  function resolveSelectedNodeRecord() {
    return activeSelectedNode;
  }

  const selectedNodeReferences = useMemo(() => {
    if (!activeSelectedNode) return [];

    const relatedIds = activeSelectedNode.relatedNodeIds ?? [];
    if (relatedIds.length === 0) return [];

    return nodes.filter((node) => {
      if (!relatedIds.includes(node.id)) return false;
      return branchOriginByNodeId.get(node.id) !== activeSelectedNode.id;
    });
  }, [activeSelectedNode, branchOriginByNodeId, nodes]);

  // Build a map of branch node positions for cross-tier linking
  const branchNodePositions = useMemo(() => {
    const map = new Map<string, { endX: number; endY: number; ribbonIndex: number }>();
    const nodesById = new Map(nodes.map((node) => [node.id, node]));
    const branchLaneCount = new Map<string, number>();

    for (const branchNode of nodes) {
      const originNodeId = branchOriginByNodeId.get(branchNode.id);
      if (!originNodeId) continue;

      const originNode = nodesById.get(originNodeId);
      if (!originNode) continue;

      const ribbonIndex = nodeRibbonIndex.get(originNode.id);
      if (ribbonIndex === undefined) continue;

      const sourceX = Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, originNode.position)) * 100;
      const sourceY = ribbonIndex * UNFURLED_RIBBON_GAP + UNFURLED_RIBBON_Y_OFFSET;

      const laneKey = `${originNode.id}`;
      const lane = branchLaneCount.get(laneKey) ?? 0;
      branchLaneCount.set(laneKey, lane + 1);

      const endX = Math.max(sourceX + 20 + lane * 5, Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, branchNode.position)) * 100);
      const endY = Math.max(8, sourceY - 28 - lane * 18);

      map.set(branchNode.id, { endX, endY, ribbonIndex });
    }

    return map;
  }, [branchOriginByNodeId, nodeRibbonIndex, nodes]);

  const relationGraph = useMemo(() => {
    const paths: Array<{
      id: string;
      sourceNodeId: string;
      targetNodeId: string;
      sourceX: number;
      sourceY: number;
      targetX: number;
      targetY: number;
      color: string;
      sourceRibbonIndex: number;
      targetRibbonIndex: number;
    }> = [];
    const connectedNodeIds = new Set<string>();

    const nodesById = new Map(nodes.map((node) => [node.id, node]));

    for (const sourceNode of nodes) {
      const sourceRibbonIndex = nodeRibbonIndex.get(sourceNode.id);
      if (sourceRibbonIndex === undefined) continue;

      const relatedIds = sourceNode.relatedNodeIds ?? [];
      if (relatedIds.length === 0) continue;

      const sourcePct = Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, sourceNode.position)) * 100;
      const sourceY = sourceRibbonIndex * UNFURLED_RIBBON_GAP + UNFURLED_RIBBON_Y_OFFSET;

      for (const targetId of relatedIds) {
        if (targetId === sourceNode.id) continue;
        const targetNode = nodesById.get(targetId);
        if (!targetNode) continue;
        if (branchOriginByNodeId.get(targetNode.id) === sourceNode.id) continue;

        // Try main ribbon first
        let targetRibbonIndex = nodeRibbonIndex.get(targetNode.id);
        let targetPct: number;
        let targetY: number;

        if (targetRibbonIndex !== undefined) {
          // Target is a main ribbon node
          targetPct = Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, targetNode.position)) * 100;
          targetY = targetRibbonIndex * UNFURLED_RIBBON_GAP + UNFURLED_RIBBON_Y_OFFSET;
        } else {
          // Check if target is a branch node
          const branchPos = branchNodePositions.get(targetNode.id);
          if (!branchPos) continue;

          targetPct = branchPos.endX;
          targetY = branchPos.endY;
          targetRibbonIndex = branchPos.ribbonIndex;
        }

        connectedNodeIds.add(sourceNode.id);
        connectedNodeIds.add(targetNode.id);

        paths.push({
          id: `${sourceNode.id}-${targetNode.id}`,
          sourceNodeId: sourceNode.id,
          targetNodeId: targetNode.id,
          sourceX: sourcePct,
          sourceY,
          targetX: targetPct,
          targetY,
          color: RIBBON_CONFIG[sourceRibbonIndex]?.color ?? '#67e8f9',
          sourceRibbonIndex,
          targetRibbonIndex,
        });
      }
    }

    return { paths, connectedNodeIds };
  }, [branchNodePositions, branchOriginByNodeId, nodeRibbonIndex, nodes]);

  const branchGraph = useMemo(() => {
    const branches: Array<{
      id: string;
      originNodeId: string;
      branchNodeId: string;
      sourceX: number;
      sourceY: number;
      endX: number;
      endY: number;
      color: string;
      ribbonIndex: number;
      branchNode: LoreNode;
    }> = [];

    const nodesById = new Map(nodes.map((node) => [node.id, node]));
    const branchLaneCount = new Map<string, number>();

    for (const branchNode of nodes) {
      const originNodeId = branchOriginByNodeId.get(branchNode.id);
      if (!originNodeId) continue;

      const originNode = nodesById.get(originNodeId);
      if (!originNode) continue;

      const ribbonIndex = nodeRibbonIndex.get(originNode.id);
      if (ribbonIndex === undefined) continue;

      const sourceX = Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, originNode.position)) * 100;
      const sourceY = ribbonIndex * UNFURLED_RIBBON_GAP + UNFURLED_RIBBON_Y_OFFSET;

      const laneKey = `${originNode.id}`;
      const lane = branchLaneCount.get(laneKey) ?? 0;
      branchLaneCount.set(laneKey, lane + 1);

      const endX = Math.max(sourceX + 20 + lane * 5, Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, branchNode.position)) * 100);
      const endY = Math.max(8, sourceY - 28 - lane * 18);

      branches.push({
        id: `${originNode.id}-${branchNode.id}`,
        originNodeId: originNode.id,
        branchNodeId: branchNode.id,
        sourceX,
        sourceY,
        endX,
        endY,
        color: RIBBON_CONFIG[ribbonIndex]?.color ?? '#67e8f9',
        ribbonIndex,
        branchNode,
      });
    }

    return { branches };
  }, [branchOriginByNodeId, nodeRibbonIndex, nodes]);

  function generateRandomRibbonPosition(type: string, excludedNodeId?: string) {
    const occupiedPositions = nodes
      .filter((node) => node.type === type && node.id !== excludedNodeId)
      .map((node) => Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, node.position)));

    if (occupiedPositions.length === 0) {
      return ribbonPositionMin + Math.random() * (ribbonPositionMax - ribbonPositionMin);
    }

    const range = ribbonPositionMax - ribbonPositionMin;
    const maxPossibleGap = range / (occupiedPositions.length + 1);
    const minGap = Math.min(0.03, Math.max(0.008, maxPossibleGap * 0.72));

    let bestCandidate = ribbonPositionMin;
    let bestDistance = -1;

    for (let attempt = 0; attempt < 400; attempt += 1) {
      const candidate = ribbonPositionMin + Math.random() * range;
      let nearestDistance = Infinity;

      for (const occupied of occupiedPositions) {
        nearestDistance = Math.min(nearestDistance, Math.abs(candidate - occupied));
      }

      if (nearestDistance >= minGap) {
        return candidate;
      }

      if (nearestDistance > bestDistance) {
        bestDistance = nearestDistance;
        bestCandidate = candidate;
      }
    }

    return bestCandidate;
  }

  function openCreateNodeModal() {
    setNodeFormMode('create');
    setEditingNodeId(null);
    setBranchOriginNodeId(null);
    setNewNode({
      type: RIBBON_CONFIG[0].type,
      name: '',
      content: '',
      position: 0.5,
    });
    setShowCreateNode(true);
  }

  function openEditNodeModal() {
    const activeNode = resolveSelectedNodeRecord();
    if (!activeNode) return;
    setNodeFormMode('edit');
    setBranchOriginNodeId(null);
    setEditingNodeId(activeNode.id);
    setNewNode({
      type: activeNode.type,
      name: activeNode.name,
      content: activeNode.content ?? '',
      position: Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, activeNode.position)),
    });
    setShowCreateNode(true);
  }

  function openBranchNodeModal() {
    const originNode = resolveSelectedNodeRecord();
    if (!originNode || focusedRibbon === null) return;

    setNodeFormMode('create');
    setEditingNodeId(null);
    setBranchOriginNodeId(originNode.id);
    setNewNode({
      type: originNode.type,
      name: '',
      content: '',
      position: Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, originNode.position)),
    });
    setShowCreateNode(true);
  }

  function generateBranchRibbonPosition(originNode: LoreNode, excludedNodeId?: string) {
    const occupiedPositions = nodes
      .filter((node) => node.type === originNode.type && node.id !== excludedNodeId)
      .map((node) => Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, node.position)));

    const range = ribbonPositionMax - ribbonPositionMin;
    const originPosition = Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, originNode.position));
    const maxPossibleGap = range / (occupiedPositions.length + 1);
    const minGap = Math.min(0.03, Math.max(0.008, maxPossibleGap * 0.72));

    let bestCandidate = originPosition;
    let bestDistance = -1;

    for (let attempt = 0; attempt < 400; attempt += 1) {
      const direction = 1;
      const distance = 0.08 + Math.random() * 0.26;
      const candidate = Math.max(
        ribbonPositionMin,
        Math.min(ribbonPositionMax, originPosition + direction * distance),
      );

      let nearestDistance = Infinity;
      for (const occupied of occupiedPositions) {
        nearestDistance = Math.min(nearestDistance, Math.abs(candidate - occupied));
      }

      if (nearestDistance >= minGap) {
        return candidate;
      }

      if (nearestDistance > bestDistance) {
        bestDistance = nearestDistance;
        bestCandidate = candidate;
      }
    }

    return bestCandidate;
  }

  async function handleCreateNode(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!projectId || !newNode.name.trim()) return;

    setCreatingNode(true);
    setNodesError(null);

    try {
      const method = nodeFormMode === 'edit' ? 'PUT' : 'POST';
      const editingNode = nodeFormMode === 'edit' && editingNodeId
        ? nodes.find((node) => node.id === editingNodeId)
        : null;
      const shouldAutoPlace =
        nodeFormMode === 'create' ||
        (nodeFormMode === 'edit' && !!editingNode && editingNode.type !== newNode.type);
      const branchOriginNode = branchOriginNodeId
        ? nodes.find((node) => node.id === branchOriginNodeId)
        : null;
      const nodePosition = shouldAutoPlace
        ? branchOriginNode
          ? generateBranchRibbonPosition(branchOriginNode, editingNodeId ?? undefined)
          : generateRandomRibbonPosition(newNode.type, editingNodeId ?? undefined)
        : Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, newNode.position));

      const payload = {
        ...(nodeFormMode === 'edit' ? { id: editingNodeId } : {}),
        projectId,
        type: newNode.type,
        name: newNode.name,
        content: newNode.content || undefined,
        position: nodePosition,
        connectFromNodeId: nodeFormMode === 'create' ? branchOriginNodeId ?? undefined : undefined,
      };

      const res = await fetch('/api/nodes', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const responsePayload = await res.json();
      if (!res.ok) {
        throw new Error(typeof responsePayload?.error === 'string' ? responsePayload.error : 'Unable to save node.');
      }

      const saved = responsePayload as LoreNode;
      setNodes((current) => {
        const merged = nodeFormMode === 'edit'
          ? current.map((node) => (node.id === saved.id ? saved : node))
          : [...current, saved];
        return merged.sort((a, b) => {
          if (a.createdAt && b.createdAt && a.createdAt !== b.createdAt) {
            return a.createdAt.localeCompare(b.createdAt);
          }
          return a.position - b.position;
        });
      });

      if (selectedNode && selectedNode.nodeId === saved.id) {
        setSelectedNode({
          ribbon: saved.type,
          node: saved.name,
          nodeId: saved.id,
        });
        setSelectedNodeSnapshot(saved);
      }

      setShowCreateNode(false);
      setNodeFormMode('create');
      setEditingNodeId(null);
      setBranchOriginNodeId(null);
      setNewNode({
        type: RIBBON_CONFIG[0].type,
        name: '',
        content: '',
        position: 0.5,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to save node.';
      setNodesError(message);
    } finally {
      setCreatingNode(false);
    }
  }

  async function handleDeleteSelectedNode() {
    if (!projectId || deletingNode) return;
    if (!resolveSelectedNodeRecord()) return;
    setShowDeleteConfirm(true);
  }

  async function confirmDeleteSelectedNode() {
    const activeNode = resolveSelectedNodeRecord();
    if (!projectId || !activeNode) return;

    setDeletingNode(true);
    setNodesError(null);

    try {
      const res = await fetch('/api/nodes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: activeNode.id, projectId }),
      });

      const responsePayload = await res.json();
      if (!res.ok) {
        throw new Error(typeof responsePayload?.error === 'string' ? responsePayload.error : 'Unable to delete node.');
      }

      setNodes((current) => current.filter((node) => node.id !== activeNode.id));
      setSelectedNode(null);
      setSelectedNodeSnapshot(null);
      setSelectedNodeSnapshot(null);
      setShowDeleteConfirm(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to delete node.';
      setNodesError(message);
    } finally {
      setDeletingNode(false);
    }
  }

  function handleBackgroundMove(event: React.PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    pointerX.set(Math.max(-1, Math.min(1, x)));
    pointerY.set(Math.max(-1, Math.min(1, y)));
  }

  function resetBackgroundParallax() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-slate-950 flex flex-col"
      onPointerMove={handleBackgroundMove}
      onPointerLeave={resetBackgroundParallax}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.92, 1, 0.92], scale: [1, 1.02, 1] }}
          transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
          style={{
            x: nebulaX,
            y: nebulaY,
            background: [
              'radial-gradient(circle at 18% 18%, rgba(14,165,233,0.16) 0%, transparent 28%)',
              'radial-gradient(circle at 82% 24%, rgba(168,85,247,0.13) 0%, transparent 30%)',
              'radial-gradient(circle at 50% 78%, rgba(59,130,246,0.1) 0%, transparent 34%)',
              'linear-gradient(180deg, rgba(2,6,23,0.72) 0%, rgba(2,6,23,0.92) 100%)',
            ].join(', '),
          }}
        />

        <motion.div
          className="absolute -left-24 top-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
          animate={{ opacity: [0.28, 0.44, 0.28], scale: [1, 1.06, 1] }}
          transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity }}
          style={{
            x: nebulaX,
            y: nebulaY,
            background: 'radial-gradient(circle, rgba(14,165,233,0.34) 0%, rgba(14,165,233,0.08) 40%, transparent 72%)',
          }}
        />

        <motion.div
          className="absolute right-[-10%] top-[12%] h-[28rem] w-[28rem] rounded-full blur-3xl"
          animate={{ opacity: [0.2, 0.36, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 8.5, ease: 'easeInOut', repeat: Infinity }}
          style={{
            x: nebulaX,
            y: nebulaY,
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0.08) 42%, transparent 74%)',
          }}
        />

        <motion.div className="absolute inset-0 opacity-70" style={{ x: starX, y: starY }}>
          {spaceScene.stars.map((star) => (
            <motion.span
              key={star.id}
              aria-hidden="true"
              className="absolute rounded-full bg-white will-change-transform"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                boxShadow: `0 0 ${star.size * 3.2}px rgba(255,255,255,0.7)`,
              }}
              animate={{
                x: [0, star.driftX, 0],
                y: [0, star.driftY, 0],
                opacity: [star.opacity * 0.65, star.opacity, star.opacity * 0.72],
                scale: [1, star.twinkle, 1],
              }}
              transition={{ duration: star.duration, ease: 'linear', repeat: Infinity, delay: star.delay }}
            />
          ))}
        </motion.div>

      </div>
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 flex items-center justify-between border-b border-slate-800/70 bg-slate-950/55 px-8 py-5 backdrop-blur-md"
      >
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">The Continuum</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {unfurled
              ? 'The Loom - ribbons unfurled'
              : totalNodes === 0
                ? 'The Braid - dormant destiny, waiting for its first node'
                : 'The Braid - story destiny collapsed'}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsExtendedRibbonLength((current) => !current)}
            className={`px-4 py-2 rounded-lg border text-sm transition-colors ${isExtendedRibbonLength ? 'border-cyan-500/70 bg-cyan-600/15 text-cyan-100' : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'}`}
          >
            Ribbon Length: {isExtendedRibbonLength ? 'Long' : 'Standard'}
          </motion.button>
          <motion.button
            whileHover={{ scale: projectId ? 1.04 : 1 }}
            whileTap={{ scale: projectId ? 0.96 : 1 }}
            onClick={openCreateNodeModal}
            disabled={!projectId}
            className="px-4 py-2 rounded-lg border border-cyan-600/60 text-cyan-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            + Add Node
          </motion.button>
          <motion.a
            href="/dashboard"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 py-2 rounded-lg border border-slate-700 text-gray-400 text-sm hover:text-white hover:border-slate-500 transition-colors"
          >
            ← Dashboard
          </motion.a>
        </div>
      </motion.div>

      {/* Canvas */}
      <div className={`relative z-10 flex-1 flex items-center justify-center px-8 py-10 ${unfurled ? 'overflow-auto' : 'overflow-hidden'}`}>
        <div className="relative w-full max-w-[88rem]">

          {/* Atmosphere bloom */}
          <motion.div
            animate={{
              opacity: atmosphereOpacity,
              scale: 0.985 + globalColorVibrance * 0.03,
            }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pointer-events-none absolute -inset-x-6 -inset-y-10"
            style={{
              background: `
                radial-gradient(ellipse at 18% 42%, ${atmospherePrimary}33 0%, transparent 56%),
                radial-gradient(ellipse at 80% 62%, ${atmosphereSecondary}2e 0%, transparent 58%),
                radial-gradient(ellipse at 50% 18%, ${atmosphereTertiary}29 0%, transparent 54%),
                radial-gradient(ellipse at 50% 50%, rgba(148,163,184,0.08) 0%, rgba(15,23,42,0) 70%)
              `,
              filter: `blur(${9 - globalColorVibrance * 3.2}px) saturate(${atmosphereSaturation})`,
            }}
          />

          {/* Braid label */}
          <motion.div
            animate={{ opacity: unfurled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 -top-6 pointer-events-none"
          >
            <span className="text-xs text-gray-600 block tracking-[0.18em] uppercase">Click The Braid To Unfurl</span>
            <span className="text-[11px] text-gray-500 block mt-1 text-center tracking-[0.09em] uppercase">
              {nodesLoading
                ? 'Syncing nodes...'
                : `${totalNodes} node${totalNodes === 1 ? '' : 's'} | vitality ${Math.round(vitality * 100)}%`}
            </span>
          </motion.div>

          {/* Braid glow */}
          <motion.div
            animate={{
              opacity: unfurled ? 0 : 0.12 + vitality * 0.88,
              scaleX: unfurled ? 0.9 : 0.985 + vitality * 0.015,
            }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-20"
            style={{
              background:
                `radial-gradient(ellipse at center, rgba(148,163,184,${0.04 + vitality * 0.16}) 0%, rgba(15,23,42,0) 75%)`,
            }}
          />

          {/* Ribbons */}
          <div
            className="relative"
            style={{ height: unfurled ? UNFURLED_VIEWBOX_HEIGHT : 80 }}
            onClick={(event) => {
              if (unfurled && event.target === event.currentTarget) {
                setUnfurled(false);
                setHoveredRibbon(null);
                setFocusedRibbon(null);
                setSelectedNode(null);
                setSelectedNodeSnapshot(null);
                setHoveredMainBraidEdge(false);
              }
            }}
          >


            {unfurled && focusedRibbon === null && relationGraph.paths.length > 0 && (
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
                viewBox={`0 0 100 ${UNFURLED_VIEWBOX_HEIGHT}`}
                preserveAspectRatio="none"
              >
                {relationGraph.paths.map((path) => (
                  (() => {
                    const isConnectedToHoveredNode =
                      !!hoveredNode &&
                      (hoveredNode.nodeId === path.sourceNodeId || hoveredNode.nodeId === path.targetNodeId);
                    const lineSeed = hashStringToUnit(path.id);
                    const flowDuration = 3.8 + lineSeed * 2.3;
                    const pulseDuration = 2.2 + lineSeed * 1.7;
                    const revealDelay = 0.14 + path.sourceRibbonIndex * 0.06 + (path.sourceX / 100) * 0.22;
                    const midX = (path.sourceX + path.targetX) / 2;
                    const midY = (path.sourceY + path.targetY) / 2;
                    const bend = 10 + Math.abs(path.targetRibbonIndex - path.sourceRibbonIndex) * 6;
                    const linkPath = `M ${path.sourceX.toFixed(2)} ${path.sourceY.toFixed(2)} C ${midX.toFixed(2)} ${(midY - bend).toFixed(2)} ${midX.toFixed(2)} ${(midY + bend).toFixed(2)} ${path.targetX.toFixed(2)} ${path.targetY.toFixed(2)}`;

                    return (
                      <g key={path.id}>
                        <motion.path
                          d={linkPath}
                          fill="none"
                          stroke={path.color}
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            opacity: isConnectedToHoveredNode ? [0.52, 0.84, 0.52] : [0.14, 0.24, 0.14],
                            strokeWidth: isConnectedToHoveredNode ? 1.55 : 0.95,
                          }}
                          transition={{
                            pathLength: { duration: 0.38, ease: 'easeOut', delay: revealDelay },
                            opacity: { duration: pulseDuration, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                            strokeWidth: { duration: 0.28, ease: 'easeOut' },
                          }}
                          style={{
                            filter: isConnectedToHoveredNode
                              ? `drop-shadow(0 0 8px ${path.color})`
                              : `drop-shadow(0 0 2px ${path.color})`,
                          }}
                        />
                        <motion.path
                          d={linkPath}
                          fill="none"
                          stroke={path.color}
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            opacity: isConnectedToHoveredNode ? 0.96 : 0.58,
                            strokeWidth: isConnectedToHoveredNode ? 0.95 : 0.45,
                            strokeDashoffset: isConnectedToHoveredNode ? [-2, -26] : [0, -18],
                          }}
                          transition={{
                            pathLength: { duration: 0.35, ease: 'easeOut', delay: revealDelay + 0.03 },
                            opacity: { duration: 0.35, ease: 'easeOut' },
                            strokeWidth: { duration: 0.28, ease: 'easeOut' },
                            strokeDashoffset: { duration: flowDuration, ease: 'linear', repeat: Infinity },
                          }}
                          style={{
                            strokeDasharray: isConnectedToHoveredNode ? '0.8 3.4' : '1.25 5.5',
                            filter: isConnectedToHoveredNode
                              ? `drop-shadow(0 0 6px ${path.color}) drop-shadow(0 0 10px ${path.color})`
                              : `drop-shadow(0 0 1.5px ${path.color})`,
                          }}
                        />
                        <motion.path
                          d={linkPath}
                          fill="none"
                          stroke="rgba(255,255,255,0.7)"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            opacity: isConnectedToHoveredNode ? 0.52 : 0.2,
                            strokeWidth: isConnectedToHoveredNode ? 0.34 : 0.22,
                            strokeDashoffset: [0, -34],
                          }}
                          transition={{
                            pathLength: { duration: 0.35, ease: 'easeOut', delay: revealDelay + 0.06 },
                            opacity: { duration: 0.3, ease: 'easeOut' },
                            strokeWidth: { duration: 0.25, ease: 'easeOut' },
                            strokeDashoffset: { duration: flowDuration * 0.75, ease: 'linear', repeat: Infinity },
                          }}
                          style={{
                            strokeDasharray: isConnectedToHoveredNode ? '0.4 9.5' : '0.4 12',
                            mixBlendMode: 'screen',
                          }}
                        />
                      </g>
                    );
                  })()
                ))}
              </svg>
            )}

            {unfurled && focusedRibbon === null && branchGraph.branches.length > 0 && (
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[9] h-full w-full overflow-visible"
                viewBox={`0 0 100 ${UNFURLED_VIEWBOX_HEIGHT}`}
                preserveAspectRatio="none"
              >
                {branchGraph.branches.map((branch) => {
                  const flashSeed = hashStringToUnit(`flash-${branch.id}`);
                  const flashDelay = 0.5 + branch.ribbonIndex * 0.08 + (branch.sourceX / 100) * 0.24 + flashSeed * 0.12;
                  return (
                    <g key={`flash-${branch.id}`}>
                      <motion.circle
                        cx={branch.sourceX}
                        cy={branch.sourceY}
                        r={1.25}
                        fill={branch.color}
                        initial={{ opacity: 0, scale: 0.75 }}
                        animate={{
                          opacity: [0, 0, 0.95, 0],
                          scale: [0.72, 0.72, 1.45, 0.9],
                        }}
                        transition={{
                          duration: 0.95,
                          ease: 'easeOut',
                          delay: Math.max(0.08, flashDelay - 0.08),
                          repeat: Infinity,
                          repeatDelay: 6.8 + flashSeed * 2.6,
                        }}
                        style={{ filter: `drop-shadow(0 0 8px ${branch.color})` }}
                      />
                      <motion.circle
                        cx={branch.sourceX}
                        cy={branch.sourceY}
                        r={1.1}
                        fill="none"
                        stroke={branch.color}
                        strokeWidth={0.22}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{
                          opacity: [0, 0, 0.72, 0],
                          scale: [0.8, 0.8, 3.2, 4.5],
                        }}
                        transition={{
                          duration: 1.05,
                          ease: 'easeOut',
                          delay: Math.max(0.08, flashDelay - 0.06),
                          repeat: Infinity,
                          repeatDelay: 6.8 + flashSeed * 2.6,
                        }}
                        style={{ transformOrigin: `${branch.sourceX}px ${branch.sourceY}px` }}
                      />
                    </g>
                  );
                })}

                {branchGraph.branches.map((branch) => {
                  const isConnectedToHoveredNode =
                    !!hoveredNode &&
                    (hoveredNode.nodeId === branch.originNodeId || hoveredNode.nodeId === branch.branchNodeId);
                  const branchSeed = hashStringToUnit(branch.id);
                  const branchPulseDuration = 2.6 + branchSeed * 1.8;
                  const revealDelay = 0.5 + branch.ribbonIndex * 0.08 + (branch.sourceX / 100) * 0.24 + branchSeed * 0.12;
                  const waveA = 0;
                  const waveB = 0.9 + branchSeed * 1.4;
                  const waveC = -0.7 - branchSeed * 1.1;
                  const branchFrames = [
                    buildBranchRibbonPath(branch.sourceX, branch.sourceY, branch.endX, branch.endY, waveA),
                    buildBranchRibbonPath(branch.sourceX, branch.sourceY, branch.endX, branch.endY, waveB),
                    buildBranchRibbonPath(branch.sourceX, branch.sourceY, branch.endX, branch.endY, waveC),
                    buildBranchRibbonPath(branch.sourceX, branch.sourceY, branch.endX, branch.endY, waveA),
                  ];

                  return (
                    <g key={branch.id}>
                      <motion.path
                        d={`M ${(branch.sourceX - 1.2).toFixed(2)} ${branch.sourceY.toFixed(2)} L ${(branch.sourceX + 2.6).toFixed(2)} ${branch.sourceY.toFixed(2)}`}
                        fill="none"
                        stroke={branch.color}
                        strokeWidth={isConnectedToHoveredNode ? 3.8 : 3.2}
                        strokeLinecap="round"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isConnectedToHoveredNode ? 0.98 : 0.86 }}
                        transition={{ duration: 0.32, ease: 'easeOut', delay: revealDelay + 0.02 }}
                        style={{
                          filter: `drop-shadow(0 0 ${isConnectedToHoveredNode ? 8 : 5}px ${branch.color})`,
                        }}
                      />
                      <motion.circle
                        cx={branch.sourceX}
                        cy={branch.sourceY}
                        r={isConnectedToHoveredNode ? 1.12 : 0.96}
                        fill={branch.color}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isConnectedToHoveredNode ? [0.9, 1, 0.9] : [0.74, 0.88, 0.74],
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          opacity: { duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: revealDelay + 0.04 },
                          scale: { duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: revealDelay + 0.04 },
                        }}
                        style={{ filter: `drop-shadow(0 0 6px ${branch.color})` }}
                      />
                      <motion.path
                        d={branchFrames[0]}
                        fill="none"
                        stroke={branch.color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          d: branchFrames,
                          opacity: isConnectedToHoveredNode ? [0.1, 0.18, 0.1] : [0.06, 0.12, 0.06],
                          strokeWidth: isConnectedToHoveredNode ? [9.4, 10.2, 9.4] : [8.2, 9, 8.2],
                        }}
                        transition={{
                          pathLength: { duration: 0.5, ease: 'easeOut', delay: revealDelay },
                          d: {
                            duration: 2.35,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: revealDelay + 0.05,
                          },
                          opacity: { duration: branchPulseDuration, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                          strokeWidth: { duration: branchPulseDuration, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                        }}
                        style={{
                          filter: isConnectedToHoveredNode
                            ? `blur(3.1px) drop-shadow(0 0 14px ${branch.color})`
                            : `blur(2.6px) drop-shadow(0 0 9px ${branch.color})`,
                        }}
                      />
                      <motion.path
                        d={branchFrames[0]}
                        fill="none"
                        stroke={branch.color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          d: branchFrames,
                          opacity: isConnectedToHoveredNode ? [0.84, 0.98, 0.84] : [0.7, 0.86, 0.7],
                          strokeWidth: isConnectedToHoveredNode ? [3.4, 3.8, 3.4] : [3, 3.3, 3],
                        }}
                        transition={{
                          pathLength: { duration: 0.46, ease: 'easeOut', delay: revealDelay + 0.05 },
                          d: {
                            duration: 2.35,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: revealDelay + 0.05,
                          },
                          opacity: { duration: branchPulseDuration, ease: 'linear', repeat: Infinity, repeatType: 'loop', delay: revealDelay + 0.05 },
                          strokeWidth: { duration: branchPulseDuration, ease: 'linear', repeat: Infinity, repeatType: 'loop', delay: revealDelay + 0.05 },
                        }}
                        style={{
                          filter: isConnectedToHoveredNode
                            ? `drop-shadow(0 0 4.6px ${branch.color}) drop-shadow(0 0 10px ${branch.color})`
                            : `drop-shadow(0 0 2.6px ${branch.color}) drop-shadow(0 0 6px ${branch.color})`,
                        }}
                      />
                      <motion.path
                        d={branchFrames[0]}
                        fill="none"
                        stroke="rgba(255,255,255,0.5)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          d: branchFrames,
                          opacity: isConnectedToHoveredNode ? 0.2 : 0.13,
                          strokeWidth: isConnectedToHoveredNode ? 1.25 : 1.05,
                        }}
                        transition={{
                          pathLength: { duration: 0.46, ease: 'easeOut', delay: revealDelay + 0.09 },
                          d: {
                            duration: 2.35,
                            ease: 'linear',
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: revealDelay + 0.05,
                          },
                          opacity: { duration: 1.7, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: revealDelay + 0.1 },
                          strokeWidth: { duration: 1.7, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: revealDelay + 0.1 },
                        }}
                        style={{ mixBlendMode: 'screen' }}
                      />
                    </g>
                  );
                })}
              </svg>
            )}

            {unfurled && focusedRibbon === null && branchGraph.branches.map((branch) => {
              const isSelected = selectedNode?.nodeId === branch.branchNodeId;
              const isHovered = hoveredNode?.nodeId === branch.branchNodeId;
              const branchNodeSeed = hashStringToUnit(`branch-node-${branch.branchNodeId}`);
              const branchNodeRevealDelay = 0.72 + branch.ribbonIndex * 0.08 + (branch.sourceX / 100) * 0.18 + branchNodeSeed * 0.1;
              return (
                <div
                  key={`branch-node-${branch.branchNodeId}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-[15]"
                  style={{ left: `${branch.endX}%`, top: `${branch.endY}px` }}
                >
                  <motion.button
                    type="button"
                    initial={{ opacity: 0, scale: 0.6, y: 7 }}
                    animate={{
                      opacity: [0.9, 1, 0.9],
                      scale: isSelected ? [1.08, 1.17, 1.08] : [1, 1.04, 1],
                      y: [0, -0.8, 0],
                    }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      opacity: { duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: branchNodeRevealDelay },
                      scale: { duration: isSelected ? 1.2 : 1.9, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: branchNodeRevealDelay },
                      y: { duration: 2.1, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror', delay: branchNodeRevealDelay },
                    }}
                    onMouseEnter={() => setHoveredNode({ ribbon: branch.ribbonIndex, nodeId: branch.branchNodeId })}
                    onMouseLeave={() => setHoveredNode((current) => (current?.nodeId === branch.branchNodeId ? null : current))}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedNode(isSelected ? null : {
                        ribbon: branch.branchNode.type,
                        node: branch.branchNode.name,
                        nodeId: branch.branchNode.id,
                      });
                      setSelectedNodeSnapshot(isSelected ? null : branch.branchNode);
                    }}
                    className="w-3 h-3 rounded-full border-2 cursor-pointer transition-shadow"
                    style={{
                      backgroundColor: isSelected ? branch.color : '#1e293b',
                      borderColor: branch.color,
                      boxShadow: isSelected
                        ? `0 0 12px ${branch.color}`
                        : isHovered
                          ? `0 0 10px ${branch.color}`
                          : `0 0 7px ${branch.color}`,
                    }}
                    title={`Branch Node - ${branch.branchNode.name}`}
                  />
                </div>
              );
            })}

            {RIBBON_CONFIG.map((ribbon, i) => (
              <motion.div
                key={ribbon.type}
                animate={
                  !unfurled
                    ? ribbonVariants.braid(i)
                    : focusedRibbon === null
                      ? {
                          x: 0,
                          y: i * UNFURLED_RIBBON_GAP,
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.52, ease: 'easeOut', delay: i * 0.05 },
                        }
                      : focusedRibbon === i
                        ? {
                            x: 0,
                            y: 120,
                            scale: 1.16,
                            opacity: 1,
                            transition: { duration: 0.52, ease: 'easeOut' },
                          }
                        : {
                            x: 0,
                            y: i * UNFURLED_RIBBON_GAP,
                            scale: 0.95,
                            opacity: 0.1,
                            transition: { duration: 0.4, ease: 'easeOut' },
                          }
                }
                onClick={(event) => {
                  event.stopPropagation();
                  if (!unfurled) {
                    setUnfurled(true);
                    setSelectedNode(null);
                    setSelectedNodeSnapshot(null);
                  }
                }}
                onMouseEnter={() => {
                  if (unfurled && focusedRibbon === null) {
                    setHoveredRibbon(i);
                  }
                }}
                onMouseLeave={() => {
                  if (unfurled && focusedRibbon === null) {
                    setHoveredRibbon((current) => (current === i ? null : current));
                  }
                }}
                className={`absolute left-0 right-0 flex items-center ${unfurled ? '' : 'cursor-pointer'} ${focusedRibbon !== null && focusedRibbon !== i ? 'pointer-events-none' : ''}`}
                style={{
                  originX: 0,
                  zIndex:
                    focusedRibbon === i
                      ? 40
                      : focusedRibbon === null
                        ? 10
                        : 3,
                }}
              >
                {(() => {
                  const ribbonNodes = nodesByRibbon[i] ?? [];
                  const ribbonNodeCount = ribbonNodes.length;
                  const ribbonVitality = Math.min(ribbonNodeCount / MAX_RIBBON_VITALITY_NODES, 1);
                  const ribbonColorVibrance = Math.min(1, ribbonVitality / 0.5);
                  const ribbonDisplayColor = mixHexColors(LIFeless_RIBBON_COLOR, ribbon.color, ribbonColorVibrance);
                  const shouldAnimateRibbon = ribbonVitality > 0.08;
                  const braidPhaseOffset =
                    (i / RIBBON_CONFIG.length) * Math.PI * 2 + i * 0.22;
                  const braidCenterY = 24 + (i - (RIBBON_CONFIG.length - 1) / 2) * 1.25;
                  const strandAmp = (unfurled ? 0.9 : 1.1) + ribbonVitality * (unfurled ? 3.7 : 5);
                  const glowAmp = (unfurled ? 1.1 : 1.4) + ribbonVitality * (unfurled ? 4.3 : 5.6);
                  const shineAmp = (unfurled ? 0.7 : 0.9) + ribbonVitality * (unfurled ? 2.5 : 3.1);
                  const stillPath = buildStrandPath(braidPhaseOffset, BRAID_PATH_WIDTH, braidCenterY, 0.2);
                  const glowFrames = buildSwirlFrames(braidPhaseOffset, braidCenterY, glowAmp);
                  const mainFrames = buildSwirlFrames(braidPhaseOffset, braidCenterY, strandAmp);
                  const shineFrames = buildSwirlFrames(
                    braidPhaseOffset + Math.PI * 0.42,
                    braidCenterY,
                    shineAmp,
                  );
                  const aliveGlowOpacity = unfurled
                    ? 0.03 + ribbonVitality * 0.11
                    : 0.04 + ribbonVitality * 0.14;
                  const baseMainOpacity = unfurled
                    ? 0.5 + ribbonVitality * 0.36
                    : 0.56 + ribbonVitality * 0.38;
                  const baseShineOpacity = unfurled
                    ? 0.03 + ribbonVitality * 0.08
                    : 0.05 + ribbonVitality * 0.1;

                  return (
                    <>
                {/* Ribbon bar + nodes */}
                <div className="relative flex items-center w-full">
                  <div className="relative w-full h-12 overflow-visible">
                      <motion.svg
                        viewBox={`0 0 ${BRAID_PATH_WIDTH} 48`}
                        preserveAspectRatio="none"
                        className={ribbonSvgSpanClass}
                        style={{ pointerEvents: 'none' }}
                        initial={false}
                      >
                        <motion.path
                          fill="none"
                          stroke={ribbonDisplayColor}
                          strokeWidth="9"
                          strokeLinecap="round"
                          opacity={aliveGlowOpacity}
                          style={{ filter: `blur(${1.6 + ribbonVitality * 3.8}px)` }}
                          initial={!unfurled ? { strokeDasharray: BRAID_PATH_WIDTH, strokeDashoffset: BRAID_PATH_WIDTH } : false}
                          animate={{
                            d: shouldAnimateRibbon ? glowFrames : stillPath,
                            strokeDashoffset: !unfurled ? 0 : undefined,
                          }}
                          transition={{
                            strokeDashoffset: !unfurled ? { duration: 1.2, ease: 'easeInOut', delay: i * 0.08 } : undefined,
                            d: shouldAnimateRibbon
                              ? {
                                  duration: 2.35,
                                  ease: 'linear',
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  delay: !unfurled ? 1.2 + i * 0.05 : i * 0.05,
                                }
                              : { duration: 0.4, ease: 'linear' },
                          }}
                        />
                        <motion.path
                          fill="none"
                          stroke={ribbonDisplayColor}
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            filter: unfurled
                              ? `drop-shadow(0 0 ${0.9 + ribbonVitality * 2}px ${ribbonDisplayColor}) drop-shadow(0 0 ${2 + ribbonVitality * 6}px ${ribbonDisplayColor})`
                              : `drop-shadow(0 0 ${1.4 + ribbonVitality * 3.6}px ${ribbonDisplayColor}) drop-shadow(0 0 ${2.4 + ribbonVitality * 6.5}px ${ribbonDisplayColor})`,
                          }}
                          initial={!unfurled ? { strokeDasharray: BRAID_PATH_WIDTH, strokeDashoffset: BRAID_PATH_WIDTH } : false}
                          animate={{
                            d: shouldAnimateRibbon ? mainFrames : stillPath,
                            strokeDashoffset: !unfurled ? 0 : undefined,
                            opacity: shouldAnimateRibbon
                              ? [
                                  Math.max(0.1, baseMainOpacity - 0.06),
                                  Math.min(1, baseMainOpacity + 0.06),
                                  Math.max(0.1, baseMainOpacity - 0.06),
                                ]
                              : baseMainOpacity,
                          }}
                          transition={{
                            strokeDashoffset: !unfurled ? { duration: 1.2, ease: 'easeInOut', delay: i * 0.08 } : undefined,
                            d: shouldAnimateRibbon
                              ? {
                                  duration: 2.35,
                                  ease: 'linear',
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  delay: !unfurled ? 1.2 + i * 0.05 : i * 0.05,
                                }
                              : { duration: 0.4, ease: 'linear' },
                            opacity: shouldAnimateRibbon
                              ? {
                                  duration: 2.35,
                                  ease: 'linear',
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  delay: !unfurled ? 1.2 + i * 0.05 : i * 0.05,
                                }
                              : { duration: 0.2 },
                          }}
                        />
                        <motion.path
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.1"
                          strokeLinecap="round"
                          opacity={baseShineOpacity}
                          initial={!unfurled ? { strokeDasharray: BRAID_PATH_WIDTH, strokeDashoffset: BRAID_PATH_WIDTH } : false}
                          animate={{
                            d: shouldAnimateRibbon ? shineFrames : stillPath,
                            strokeDashoffset: !unfurled ? 0 : undefined,
                          }}
                          transition={{
                            strokeDashoffset: !unfurled ? { duration: 1.2, ease: 'easeInOut', delay: i * 0.08 } : undefined,
                            d: shouldAnimateRibbon
                              ? {
                                  duration: 2.35,
                                  ease: 'linear',
                                  repeat: Infinity,
                                  repeatType: 'loop',
                                  delay: !unfurled ? 1.2 + i * 0.05 : i * 0.05,
                                }
                              : { duration: 0.4, ease: 'linear' },
                          }}
                        />
                      </motion.svg>
                    </div>

                  {/* Center hover label (unfurled overview) */}
                  {unfurled && focusedRibbon === null && hoveredRibbon === i && (
                    <>
                      <motion.span
                        initial={{ opacity: 0, scaleX: 0.72 }}
                        animate={{ opacity: [0, 0.2, 0], scaleX: [0.72, 1.1, 1.25] }}
                        transition={{ duration: 0.42, ease: 'easeOut' }}
                        className="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-28 -translate-x-1/2"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${ribbonDisplayColor}, transparent)`,
                          filter: `blur(1.6px) drop-shadow(0 0 5px ${ribbonDisplayColor})`,
                        }}
                      />
                      <motion.button
                        initial={{ opacity: 0, y: 16, scale: 0.96, filter: 'blur(7px)' }}
                        animate={{
                          opacity: 1,
                          y: -10,
                          scale: 1,
                          filter: 'blur(0px)',
                        }}
                        exit={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                        whileHover={{ scale: 1.035, y: -12 }}
                        whileTap={{ scale: 0.97, y: -9 }}
                        transition={{ duration: 0.42, ease: 'easeOut' }}
                        onClick={(event) => {
                          event.stopPropagation();
                          setFocusedRibbon(i);
                          setSelectedNode(null);
                        }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-1 text-sm font-semibold tracking-[0.14em] uppercase"
                        style={{
                          color: ribbonDisplayColor,
                          textShadow: `
                            -1px -1px 0 rgba(0,0,0,0.8),
                            1px -1px 0 rgba(0,0,0,0.8),
                            -1px 1px 0 rgba(0,0,0,0.8),
                            1px 1px 0 rgba(0,0,0,0.8),
                            0 0 8px ${ribbonDisplayColor}, 
                            0 0 16px ${ribbonDisplayColor}
                          `,
                        }}
                      >
                        {ribbon.label}
                      </motion.button>
                    </>
                  )}

                  {/* Nodes */}
                  {ribbonNodes.map((node, j) => {
                    const pct = Math.max(ribbonPositionMin, Math.min(ribbonPositionMax, node.position));
                    const isSelected = selectedNode?.ribbon === ribbon.type && selectedNode?.nodeId === node.id;
                    const isHovered = hoveredNode?.ribbon === i && hoveredNode?.nodeId === node.id;
                    const showInOverview = focusedRibbon === null && relationGraph.connectedNodeIds.has(node.id);
                    const nodeSizeClass = focusedRibbon === i ? 'w-4 h-4' : 'w-3 h-3';
                    return (
                      <div key={node.id} className="absolute -translate-y-1/2 top-1/2" style={{ left: `${pct * 100}%` }}>
                        <motion.button
                          custom={j}
                          variants={nodeVariants}
                          initial="hidden"
                          animate={unfurled && (focusedRibbon === i || showInOverview) ? 'visible' : 'hidden'}
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedNode(isSelected ? null : { ribbon: ribbon.type, node: node.name, nodeId: node.id });
                            setSelectedNodeSnapshot(isSelected ? null : node);
                          }}
                          onMouseEnter={() => setHoveredNode({ ribbon: i, nodeId: node.id })}
                          onMouseLeave={() => setHoveredNode((current) => (current?.ribbon === i && current?.nodeId === node.id ? null : current))}
                          className={`${nodeSizeClass} rounded-full border-2 cursor-pointer transition-shadow`}
                          style={{
                            backgroundColor: isSelected ? ribbonDisplayColor : '#1e293b',
                            borderColor: ribbonDisplayColor,
                            boxShadow: isSelected
                              ? `0 0 10px ${ribbonDisplayColor}`
                              : selectedNodeReferences.some((reference) => reference.id === node.id)
                                ? `0 0 12px ${ribbonDisplayColor}`
                                : showInOverview
                                  ? `0 0 11px ${ribbonDisplayColor}`
                                : undefined,
                          }}
                          title={`${ribbon.label} - ${node.name}`}
                        />
                        {/* Node hover label */}
                        {isHovered && (
                          <motion.button
                            initial={{ opacity: 0, y: 16, scale: 0.96, filter: 'blur(7px)' }}
                            animate={{
                              opacity: 1,
                              y: -20,
                              scale: 1,
                              filter: 'blur(0px)',
                            }}
                            exit={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                            whileHover={{ scale: 1.035, y: -22 }}
                            transition={{ duration: 0.42, ease: 'easeOut' }}
                            onClick={(event) => {
                              event.stopPropagation();
                              setSelectedNode(isSelected ? null : { ribbon: ribbon.type, node: node.name, nodeId: node.id });
                              setSelectedNodeSnapshot(isSelected ? null : node);
                            }}
                            className="absolute left-1/2 top-0 -translate-x-1/2 px-2 py-1 text-xs font-semibold tracking-[0.12em] uppercase whitespace-nowrap pointer-events-none"
                            style={{
                              color: ribbonDisplayColor,
                              textShadow: `
                                -1px -1px 0 rgba(0,0,0,0.8),
                                1px -1px 0 rgba(0,0,0,0.8),
                                -1px 1px 0 rgba(0,0,0,0.8),
                                1px 1px 0 rgba(0,0,0,0.8),
                                0 0 8px ${ribbonDisplayColor}, 
                                0 0 16px ${ribbonDisplayColor}
                              `,
                            }}
                          >
                            {node.name}
                          </motion.button>
                        )}
                      </div>
                    );
                  })}

                  {unfurled && focusedRibbon === i && ribbonNodes.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 text-[11px] tracking-[0.12em] uppercase text-slate-500"
                    >
                      No nodes on this ribbon yet
                    </motion.div>
                  )}

                  {/* Exit focus hotspot */}
                  {unfurled && focusedRibbon === i && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      onClick={(event) => {
                        event.stopPropagation();
                        setFocusedRibbon(null);
                        setSelectedNode(null);
                          setSelectedNodeSnapshot(null);
                        setSelectedNodeSnapshot(null);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-[11px] text-gray-200"
                    >
                      Back to Unfurled
                    </motion.button>
                  )}

                </div>
                    </>
                  );
                })()}
              </motion.div>
            ))}
          </div>

          {/* Enter Arcs — below the braid, always visible */}
          {!unfurled && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mt-10 flex justify-center"
            >
              <Link
                href={projectId ? `/arcs?projectId=${encodeURIComponent(projectId)}` : '/arcs'}
                onMouseEnter={() => setHoveredMainBraidEdge(true)}
                onMouseLeave={() => setHoveredMainBraidEdge(false)}
                className="group relative flex items-center gap-5 rounded-2xl border border-cyan-500/40 bg-slate-900/80 px-10 py-5 transition-colors hover:border-cyan-400/70 hover:bg-slate-800/90"
                style={{ boxShadow: hoveredMainBraidEdge ? '0 0 40px rgba(103,232,249,0.22), 0 0 80px rgba(103,232,249,0.1)' : '0 0 22px rgba(103,232,249,0.1)' }}
              >
                {/* Background glow */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  animate={{ opacity: hoveredMainBraidEdge ? 0.7 : 0.35 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(103,232,249,0.12) 0%, transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                />

                {/* Left: icon + label stack */}
                <div className="relative flex flex-col gap-1">
                  <span
                    className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70"
                  >
                    Story Structure
                  </span>
                  <span
                    className="text-2xl font-bold tracking-wide text-white"
                    style={{ textShadow: '0 0 18px rgba(103,232,249,0.55)' }}
                  >
                    Enter Arcs
                  </span>
                  <div className="mt-1 flex items-center gap-1.5">
                    {[0, 0.18, 0.36].map((delay) => (
                      <motion.span
                        key={delay}
                        className="block h-1 w-5 rounded-full bg-cyan-400/60"
                        animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.35, 1, 0.35] }}
                        transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, delay }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: animated arrow */}
                <div className="relative ml-4 flex items-center">
                  <motion.span
                    animate={{ x: hoveredMainBraidEdge ? [0, 7, 0] : [0, 4, 0] }}
                    transition={{ duration: 0.9, ease: 'easeInOut', repeat: Infinity }}
                    className="text-5xl font-light leading-none text-cyan-300"
                    style={{ textShadow: '0 0 16px rgba(103,232,249,1), 0 0 36px rgba(103,232,249,0.5)' }}
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {nodesError && (
        <div className="fixed left-1/2 -translate-x-1/2 top-[5.6rem] z-40 rounded-lg border border-rose-500/30 bg-rose-950/80 px-4 py-2 text-xs text-rose-200">
          {nodesError}
        </div>
      )}

      <AnimatePresence>
        {showCreateNode && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setShowCreateNode(false)}
              className="fixed inset-0 z-[90] bg-black/55 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 z-[95] flex items-center justify-center p-6"
            >
              <form
                onSubmit={handleCreateNode}
                className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900/95 p-6 shadow-[0_18px_70px_rgba(8,20,40,0.65)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-white text-lg font-semibold tracking-tight">
                    {nodeFormMode === 'edit' ? 'Edit Node' : 'Forge a Node'}
                  </h2>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateNode(false);
                      setNodeFormMode('create');
                      setEditingNodeId(null);
                      setBranchOriginNodeId(null);
                    }}
                    className="rounded-md border border-slate-600 px-2 py-1 text-xs text-slate-300"
                  >
                    Close
                  </button>
                </div>

                {!projectId && (
                  <p className="mt-3 text-xs text-amber-300">
                    Open Continuum from a project first so this node has somewhere to live.
                  </p>
                )}

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="text-xs uppercase tracking-[0.12em] text-slate-400">
                    Ribbon Type
                    <select
                      value={newNode.type}
                      disabled={!!branchOriginNodeId}
                      onChange={(event) => setNewNode((current) => ({ ...current, type: event.target.value }))}
                      className="mt-1.5 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {RIBBON_CONFIG.map((ribbon) => (
                        <option key={ribbon.type} value={ribbon.type}>{ribbon.label}</option>
                      ))}
                    </select>
                    {branchOriginNodeId && (
                      <p className="mt-1 normal-case tracking-normal text-cyan-300">
                        Branch mode: ribbon follows the selected origin node.
                      </p>
                    )}
                  </label>

                  <div className="rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 text-xs uppercase tracking-[0.12em] text-slate-400">
                    Position
                    <p className="mt-1 normal-case tracking-normal text-slate-300">
                      Auto-randomized on this ribbon with collision avoidance.
                    </p>
                  </div>
                </div>

                <label className="mt-4 block text-xs uppercase tracking-[0.12em] text-slate-400">
                  Node Name
                  <input
                    type="text"
                    value={newNode.name}
                    onChange={(event) => setNewNode((current) => ({ ...current, name: event.target.value }))}
                    placeholder="The First Spark"
                    className="mt-1.5 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white"
                    required
                  />
                </label>

                <div className="mt-4 block text-xs uppercase tracking-[0.12em] text-slate-400">
                  <p>Detail (optional)</p>
                  <RichTextEditor
                    value={newNode.content}
                    onChange={(html) => setNewNode((current) => ({ ...current, content: html }))}
                    placeholder="Describe this node with richer formatting..."
                    nodeSuggestions={nodeSuggestions}
                  />
                </div>

                <div className="mt-5 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateNode(false);
                      setNodeFormMode('create');
                      setEditingNodeId(null);
                      setBranchOriginNodeId(null);
                    }}
                    className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300"
                  >
                    Cancel
                  </button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={!projectId || !newNode.name.trim() || creatingNode || (nodeFormMode === 'edit' && !editingNodeId)}
                    className="rounded-lg border border-cyan-500/70 bg-cyan-600/20 px-4 py-2 text-sm text-cyan-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {creatingNode
                      ? (nodeFormMode === 'edit' ? 'Saving...' : 'Forging...')
                      : (nodeFormMode === 'edit' ? 'Save Changes' : 'Create Node')}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDeleteConfirm && selectedNodeRecord && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                if (!deletingNode) setShowDeleteConfirm(false);
              }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[1px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="fixed inset-0 z-[55] flex items-center justify-center p-6"
            >
              <div className="w-full max-w-md rounded-2xl border border-rose-500/40 bg-slate-900/95 p-6 shadow-[0_16px_70px_rgba(120,20,40,0.5)]">
                <p className="text-xs tracking-[0.14em] uppercase text-rose-300">Confirm Deletion</p>
                <h3 className="mt-2 text-lg font-semibold text-white">Delete this node?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  "{selectedNodeRecord.name}" will be removed from the ribbon and cannot be recovered.
                </p>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(false)}
                    disabled={deletingNode}
                    className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 disabled:opacity-50"
                  >
                    Keep Node
                  </button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: deletingNode ? 1 : 1.03 }}
                    whileTap={{ scale: deletingNode ? 1 : 0.97 }}
                    onClick={confirmDeleteSelectedNode}
                    disabled={deletingNode}
                    className="rounded-lg border border-rose-500/70 bg-rose-600/20 px-4 py-2 text-sm text-rose-100 disabled:opacity-60"
                  >
                    {deletingNode ? 'Deleting...' : 'Delete Permanently'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Selected node detail panel */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: selectedNode ? 0 : 120, opacity: selectedNode ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={`fixed bottom-0 left-0 right-0 z-[70] border-t border-slate-700 bg-slate-800 px-8 py-5 flex items-center justify-between ${selectedNode && !showCreateNode && !showDeleteConfirm ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {selectedNode && (
          <>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                {selectedNode.ribbon} — Nexus Point
              </p>
              <p className="text-white font-semibold">{activeSelectedNode?.name ?? selectedNode.node}</p>
            </div>
            <div className="flex gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={openEditNodeModal}
                disabled={!activeSelectedNode}
                className="px-4 py-2 rounded-lg border border-cyan-600/60 text-sm text-cyan-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Edit Node
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={openBranchNodeModal}
                disabled={!activeSelectedNode || focusedRibbon === null}
                className="px-4 py-2 rounded-lg border border-fuchsia-500/60 text-sm text-fuchsia-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Branch Node
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleDeleteSelectedNode}
                disabled={!activeSelectedNode || deletingNode}
                className="px-4 py-2 rounded-lg border border-rose-500/60 text-sm text-rose-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deletingNode ? 'Deleting...' : 'Delete Node'}
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  setSelectedNode(null);
                  setSelectedNodeSnapshot(null);
                }}
                className="px-3 py-2 rounded-lg border border-slate-600 text-gray-400 text-sm hover:text-white transition-colors"
              >
                ✕
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </main>
  );
}

export default function ContinuumPage() {
  return (
    <Suspense>
      <ContinuumPageInner />
    </Suspense>
  );
}
