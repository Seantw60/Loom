'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Color palette per ribbon type
const RIBBON_CONFIG = [
  { type: 'Character', color: '#e74c3c', label: 'Characters' },
  { type: 'Monster',   color: '#9b59b6', label: 'Monsters'   },
  { type: 'Item',      color: '#f39c12', label: 'Items'       },
  { type: 'Power',     color: '#3498db', label: 'Power Systems' },
  { type: 'Location',  color: '#1abc9c', label: 'Locations'  },
];

// Placeholder nodes per ribbon
const PLACEHOLDER_NODES = [
  ['Chapter I', 'Chapter III', 'Chapter V', 'Chapter VIII'],
  ['Chapter II', 'Chapter IV', 'Chapter VI'],
  ['Chapter I', 'Chapter V', 'Chapter IX'],
  ['Chapter II', 'Chapter III', 'Chapter VII'],
  ['Chapter I', 'Chapter IV', 'Chapter VI', 'Chapter X'],
];

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
  const [unfurled, setUnfurled] = useState(false);
  const [hoveredRibbon, setHoveredRibbon] = useState<number | null>(null);
  const [focusedRibbon, setFocusedRibbon] = useState<number | null>(null);
  const [selectedNode, setSelectedNode] = useState<{ ribbon: string; node: string } | null>(null);
  const [hoveredNode, setHoveredNode] = useState<{ ribbon: number; node: string } | null>(null);

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
            {unfurled ? 'The Loom — ribbons unfurled' : 'The Braid — story destiny collapsed'}
          </p>
        </div>
        <div className="flex items-center gap-4">
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

          {/* Braid label */}
          <motion.div
            animate={{ opacity: unfurled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 -top-6 pointer-events-none"
          >
            <span className="text-xs text-gray-600 block tracking-[0.18em] uppercase">Click The Braid To Unfurl</span>
          </motion.div>

          {/* Braid glow */}
          <motion.div
            animate={{ opacity: unfurled ? 0 : 1, scaleX: unfurled ? 0.9 : 1 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-20"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(148,163,184,0.12) 0%, rgba(15,23,42,0) 75%)',
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
              }
            }}
          >
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
                  const braidPhaseOffset =
                    (i / RIBBON_CONFIG.length) * Math.PI * 2 + i * 0.22;
                  const braidCenterY = 24 + (i - (RIBBON_CONFIG.length - 1) / 2) * 1.25;
                  const strandAmp = unfurled ? 4.6 : 6.1;
                  const glowAmp = unfurled ? 5.4 : 6.9;
                  const shineAmp = unfurled ? 3.2 : 3.9;
                  const glowFrames = buildSwirlFrames(braidPhaseOffset, braidCenterY, glowAmp);
                  const mainFrames = buildSwirlFrames(braidPhaseOffset, braidCenterY, strandAmp);
                  const shineFrames = buildSwirlFrames(
                    braidPhaseOffset + Math.PI * 0.42,
                    braidCenterY,
                    shineAmp,
                  );

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
                          stroke={ribbon.color}
                          strokeWidth="9"
                          strokeLinecap="round"
                          opacity={unfurled ? 0.1 : 0.13}
                          style={{ filter: 'blur(4px)' }}
                          initial={!unfurled ? { strokeDasharray: BRAID_PATH_WIDTH, strokeDashoffset: BRAID_PATH_WIDTH } : false}
                          animate={{
                            d: glowFrames,
                            strokeDashoffset: !unfurled ? 0 : undefined,
                          }}
                          transition={{
                            strokeDashoffset: !unfurled ? { duration: 1.2, ease: 'easeInOut', delay: i * 0.08 } : undefined,
                            d: {
                              duration: 2.35,
                              ease: 'linear',
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: !unfurled ? 1.2 + i * 0.05 : i * 0.05,
                            },
                          }}
                        />
                        <motion.path
                          fill="none"
                          stroke={ribbon.color}
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            filter: unfurled
                              ? `drop-shadow(0 0 2px ${ribbon.color}) drop-shadow(0 0 5px ${ribbon.color})`
                              : `drop-shadow(0 0 4px ${ribbon.color}) drop-shadow(0 0 7px ${ribbon.color})`,
                          }}
                          initial={!unfurled ? { strokeDasharray: BRAID_PATH_WIDTH, strokeDashoffset: BRAID_PATH_WIDTH } : false}
                          animate={{
                            d: mainFrames,
                            strokeDashoffset: !unfurled ? 0 : undefined,
                            opacity: unfurled ? [0.78, 0.88, 0.78] : [0.84, 0.93, 0.84],
                          }}
                          transition={{
                            strokeDashoffset: !unfurled ? { duration: 1.2, ease: 'easeInOut', delay: i * 0.08 } : undefined,
                            d: {
                              duration: 2.35,
                              ease: 'linear',
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: !unfurled ? 1.2 + i * 0.05 : i * 0.05,
                            },
                            opacity: {
                              duration: 2.35,
                              ease: 'linear',
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: !unfurled ? 1.2 + i * 0.05 : i * 0.05,
                            },
                          }}
                        />
                        <motion.path
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.1"
                          strokeLinecap="round"
                          opacity={unfurled ? 0.1 : 0.14}
                          initial={!unfurled ? { strokeDasharray: BRAID_PATH_WIDTH, strokeDashoffset: BRAID_PATH_WIDTH } : false}
                          animate={{
                            d: shineFrames,
                            strokeDashoffset: !unfurled ? 0 : undefined,
                          }}
                          transition={{
                            strokeDashoffset: !unfurled ? { duration: 1.2, ease: 'easeInOut', delay: i * 0.08 } : undefined,
                            d: {
                              duration: 2.35,
                              ease: 'linear',
                              repeat: Infinity,
                              repeatType: 'loop',
                              delay: !unfurled ? 1.2 + i * 0.05 : i * 0.05,
                            },
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
                          background: `linear-gradient(90deg, transparent, ${ribbon.color}, transparent)`,
                          filter: `blur(1.6px) drop-shadow(0 0 5px ${ribbon.color})`,
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
                          color: ribbon.color,
                          textShadow: `
                            -1px -1px 0 rgba(0,0,0,0.8),
                            1px -1px 0 rgba(0,0,0,0.8),
                            -1px 1px 0 rgba(0,0,0,0.8),
                            1px 1px 0 rgba(0,0,0,0.8),
                            0 0 8px ${ribbon.color}, 
                            0 0 16px ${ribbon.color}
                          `,
                        }}
                      >
                        {ribbon.label}
                      </motion.button>
                    </>
                  )}

                  {/* Nodes */}
                  {PLACEHOLDER_NODES[i].map((node, j) => {
                    const pct = (j + 1) / (PLACEHOLDER_NODES[i].length + 1);
                    const isSelected = selectedNode?.ribbon === ribbon.type && selectedNode?.node === node;
                    const isHovered = hoveredNode?.ribbon === i && hoveredNode?.node === node;
                    return (
                      <div key={node} className="absolute -translate-y-1/2 top-1/2" style={{ left: `${pct * 100}%` }}>
                        <motion.button
                          custom={j}
                          variants={nodeVariants}
                          initial="hidden"
                          animate={unfurled && focusedRibbon === i ? 'visible' : 'hidden'}
                          whileHover={{ scale: 1.5 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(event) => {
                            event.stopPropagation();
                            setSelectedNode(isSelected ? null : { ribbon: ribbon.type, node });
                          }}
                          onMouseEnter={() => setHoveredNode({ ribbon: i, node })}
                          onMouseLeave={() => setHoveredNode((current) => (current?.ribbon === i && current?.node === node ? null : current))}
                          className="w-3 h-3 rounded-full border-2 cursor-pointer transition-shadow"
                          style={{
                            backgroundColor: isSelected ? ribbon.color : '#1e293b',
                            borderColor: ribbon.color,
                            boxShadow: isSelected ? `0 0 10px ${ribbon.color}` : undefined,
                          }}
                          title={`${ribbon.label} — ${node}`}
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
                              setSelectedNode(isSelected ? null : { ribbon: ribbon.type, node });
                            }}
                            className="absolute left-1/2 top-0 -translate-x-1/2 px-2 py-1 text-xs font-semibold tracking-[0.12em] uppercase whitespace-nowrap pointer-events-none"
                            style={{
                              color: ribbon.color,
                              textShadow: `
                                -1px -1px 0 rgba(0,0,0,0.8),
                                1px -1px 0 rgba(0,0,0,0.8),
                                -1px 1px 0 rgba(0,0,0,0.8),
                                1px 1px 0 rgba(0,0,0,0.8),
                                0 0 8px ${ribbon.color}, 
                                0 0 16px ${ribbon.color}
                              `,
                            }}
                          >
                            {node}
                          </motion.button>
                        )}
                      </div>
                    );
                  })}

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
