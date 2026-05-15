'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
  createdAt?: string;
}

const MAX_VITALITY_NODES = 18;
const LIFeless_RIBBON_COLOR = '#6b7280';
const MAX_RIBBON_VITALITY_NODES = 4;

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

export default function ContinuumPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');

  const [unfurled, setUnfurled] = useState(false);
  const [hoveredRibbon, setHoveredRibbon] = useState<number | null>(null);
  const [focusedRibbon, setFocusedRibbon] = useState<number | null>(null);
  const [hoveredMainBraidEdge, setHoveredMainBraidEdge] = useState(false);
  const [selectedNode, setSelectedNode] = useState<{ ribbon: string; node: string; nodeId: string } | null>(null);
  const [hoveredNode, setHoveredNode] = useState<{ ribbon: number; nodeId: string } | null>(null);
  const [nodes, setNodes] = useState<LoreNode[]>([]);
  const [nodesLoading, setNodesLoading] = useState(false);
  const [nodesError, setNodesError] = useState<string | null>(null);
  const [showCreateNode, setShowCreateNode] = useState(false);
  const [nodeFormMode, setNodeFormMode] = useState<'create' | 'edit'>('create');
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

  const nodesByRibbon = useMemo(() => {
    return RIBBON_CONFIG.map((ribbon) => {
      return nodes
        .filter((node) => node.type === ribbon.type)
        .sort((a, b) => {
          if (a.position !== b.position) return a.position - b.position;
          return (a.createdAt ?? '').localeCompare(b.createdAt ?? '');
        });
    });
  }, [nodes]);

  const totalNodes = nodes.length;
  const vitality = Math.min(totalNodes / MAX_VITALITY_NODES, 1);
  const globalColorVibrance = Math.min(1, vitality / 0.5);
  const atmospherePrimary = mixHexColors('#4b5563', '#06b6d4', globalColorVibrance);
  const atmosphereSecondary = mixHexColors('#4b5563', '#9333ea', globalColorVibrance);
  const atmosphereTertiary = mixHexColors('#4b5563', '#f59e0b', globalColorVibrance);
  const atmosphereOpacity = 0.12 + globalColorVibrance * 0.58;
  const atmosphereSaturation = 0.18 + globalColorVibrance * 1.05;

  const selectedNodeRecord = useMemo(() => {
    if (!selectedNode) return null;
    return nodes.find((node) => node.id === selectedNode.nodeId) ?? null;
  }, [nodes, selectedNode]);

  function openCreateNodeModal() {
    setNodeFormMode('create');
    setEditingNodeId(null);
    setNewNode({
      type: RIBBON_CONFIG[0].type,
      name: '',
      content: '',
      position: 0.5,
    });
    setShowCreateNode(true);
  }

  function openEditNodeModal() {
    if (!selectedNodeRecord) return;
    setNodeFormMode('edit');
    setEditingNodeId(selectedNodeRecord.id);
    setNewNode({
      type: selectedNodeRecord.type,
      name: selectedNodeRecord.name,
      content: selectedNodeRecord.content ?? '',
      position: Math.max(0.05, Math.min(0.95, selectedNodeRecord.position)),
    });
    setShowCreateNode(true);
  }

  async function handleCreateNode(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!projectId || !newNode.name.trim()) return;

    setCreatingNode(true);
    setNodesError(null);

    try {
      const method = nodeFormMode === 'edit' ? 'PUT' : 'POST';
      const payload = {
        ...(nodeFormMode === 'edit' ? { id: editingNodeId } : {}),
        projectId,
        type: newNode.type,
        name: newNode.name,
        content: newNode.content || undefined,
        position: newNode.position,
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
      }

      setShowCreateNode(false);
      setNodeFormMode('create');
      setEditingNodeId(null);
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
    if (!projectId || !selectedNodeRecord || deletingNode) return;
    setShowDeleteConfirm(true);
  }

  async function confirmDeleteSelectedNode() {
    if (!projectId || !selectedNodeRecord) return;

    setDeletingNode(true);
    setNodesError(null);

    try {
      const res = await fetch('/api/nodes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedNodeRecord.id, projectId }),
      });

      const responsePayload = await res.json();
      if (!res.ok) {
        throw new Error(typeof responsePayload?.error === 'string' ? responsePayload.error : 'Unable to delete node.');
      }

      setNodes((current) => current.filter((node) => node.id !== selectedNodeRecord.id));
      setSelectedNode(null);
      setShowDeleteConfirm(false);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to delete node.';
      setNodesError(message);
    } finally {
      setDeletingNode(false);
    }
  }

  function openArcEditor() {
    if (!projectId) return;
    router.push(`/arcs?projectId=${encodeURIComponent(projectId)}`);
  }

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col">
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex items-center justify-between px-8 py-5 border-b border-slate-800"
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
      <div className={`flex-1 flex items-center justify-center px-8 py-10 ${unfurled ? 'overflow-auto' : 'overflow-hidden'}`}>
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
            style={{ height: unfurled ? RIBBON_CONFIG.length * 76 + 40 : 80 }}
            onClick={(event) => {
              if (unfurled && event.target === event.currentTarget) {
                setUnfurled(false);
                setHoveredRibbon(null);
                setFocusedRibbon(null);
                setSelectedNode(null);
                setHoveredMainBraidEdge(false);
              }
            }}
          >
            {!unfurled && (
              <motion.button
                type="button"
                onMouseEnter={() => setHoveredMainBraidEdge(true)}
                onMouseLeave={() => setHoveredMainBraidEdge(false)}
                onClick={(event) => {
                  event.stopPropagation();
                  openArcEditor();
                }}
                className="absolute right-0 top-1/2 z-20 flex h-16 w-48 -translate-y-1/2 items-center justify-end pr-3"
              >
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredMainBraidEdge ? 1 : 0,
                    x: hoveredMainBraidEdge ? 0 : 16,
                    scale: hoveredMainBraidEdge ? 1 : 0.92,
                  }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className="pointer-events-none flex items-center gap-3"
                  style={{ textShadow: '0 0 16px rgba(255,255,255,0.95)' }}
                >
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/90">Enter Arcs</span>
                  <span className="text-6xl leading-none text-white">→</span>
                </motion.div>
              </motion.button>
            )}

            {RIBBON_CONFIG.map((ribbon, i) => (
              <motion.div
                key={ribbon.type}
                animate={
                  !unfurled
                    ? ribbonVariants.braid(i)
                    : focusedRibbon === null
                      ? {
                          x: 0,
                          y: i * 76,
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
                            y: i * 76,
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
                className={`absolute left-0 right-0 flex items-center ${unfurled ? '' : 'cursor-pointer'}`}
                style={{ originX: 0 }}
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
                        className="absolute -left-[7%] -right-[7%] w-[114%] h-full"
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
                    const pct = Math.max(0.05, Math.min(0.95, node.position));
                    const isSelected = selectedNode?.ribbon === ribbon.type && selectedNode?.nodeId === node.id;
                    const isHovered = hoveredNode?.ribbon === i && hoveredNode?.nodeId === node.id;
                    return (
                      <div key={node.id} className="absolute -translate-y-1/2 top-1/2" style={{ left: `${pct * 100}%` }}>
                        <motion.button
                          custom={j}
                          variants={nodeVariants}
                          initial="hidden"
                          animate={unfurled && focusedRibbon === i ? 'visible' : 'hidden'}
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedNode(isSelected ? null : { ribbon: ribbon.type, node: node.name, nodeId: node.id });
                          }}
                          onMouseEnter={() => setHoveredNode({ ribbon: i, nodeId: node.id })}
                          onMouseLeave={() => setHoveredNode((current) => (current?.ribbon === i && current?.nodeId === node.id ? null : current))}
                          className="w-3 h-3 rounded-full border-2 cursor-pointer transition-shadow"
                          style={{
                            backgroundColor: isSelected ? ribbonDisplayColor : '#1e293b',
                            borderColor: ribbonDisplayColor,
                            boxShadow: isSelected ? `0 0 10px ${ribbonDisplayColor}` : undefined,
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
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
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
                      onChange={(event) => setNewNode((current) => ({ ...current, type: event.target.value }))}
                      className="mt-1.5 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white"
                    >
                      {RIBBON_CONFIG.map((ribbon) => (
                        <option key={ribbon.type} value={ribbon.type}>{ribbon.label}</option>
                      ))}
                    </select>
                  </label>

                  <label className="text-xs uppercase tracking-[0.12em] text-slate-400">
                    Position ({Math.round(newNode.position * 100)}%)
                    <input
                      type="range"
                      min={0.05}
                      max={0.95}
                      step={0.01}
                      value={newNode.position}
                      onChange={(event) => setNewNode((current) => ({ ...current, position: Number(event.target.value) }))}
                      className="mt-3 w-full"
                    />
                  </label>
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

                <label className="mt-4 block text-xs uppercase tracking-[0.12em] text-slate-400">
                  Detail (optional)
                  <RichTextEditor
                    value={newNode.content}
                    onChange={(html) => setNewNode((current) => ({ ...current, content: html }))}
                    placeholder="Describe this node with richer formatting..."
                  />
                </label>

                <div className="mt-5 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateNode(false);
                      setNodeFormMode('create');
                      setEditingNodeId(null);
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
        className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 px-8 py-5 flex items-center justify-between"
      >
        {selectedNode && (
          <>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                {selectedNode.ribbon} — Nexus Point
              </p>
              <p className="text-white font-semibold">{selectedNode.node}</p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={openEditNodeModal}
                disabled={!selectedNodeRecord}
                className="px-4 py-2 rounded-lg border border-cyan-600/60 text-sm text-cyan-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Edit Node
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleDeleteSelectedNode}
                disabled={!selectedNodeRecord || deletingNode}
                className="px-4 py-2 rounded-lg border border-rose-500/60 text-sm text-rose-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deletingNode ? 'Deleting...' : 'Delete Node'}
              </motion.button>
              <motion.a
                href="/lore"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-lg bg-slate-700 text-sm text-white hover:bg-slate-600 transition-colors"
              >
                Open in Lore Library →
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedNode(null)}
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
