'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getArcColor } from '@/lib/story-arcs';

interface StoryArcSummary {
  name: string;
  chapterCount: number;
  isSeed?: boolean;
}

const ARC_GRAY = '#6b7280';
const MAX_ARC_VITALITY_CHAPTERS = 8;
const BRAID_WIDTH = 1600;

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

function buildArcPath(phase: number, centerY: number, amplitude: number, segments = 40) {
  const points: string[] = [];
  for (let step = 0; step <= segments; step += 1) {
    const t = step / segments;
    const x = t * BRAID_WIDTH;
    const y = centerY + Math.sin(t * Math.PI * 8 + phase) * amplitude;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `M ${points.join(' L ')}`;
}

function ArcsPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');

  const [arcs, setArcs] = useState<StoryArcSummary[]>([]);
  const [fetching, setFetching] = useState(false);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [newArcName, setNewArcName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [arcToDelete, setArcToDelete] = useState<StoryArcSummary | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadArcs(showLoader: boolean) {
      if (!projectId) return;
      if (showLoader && !cancelled) setFetching(true);

      try {
        const res = await fetch(`/api/arcs?projectId=${encodeURIComponent(projectId)}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Unable to load arcs.');
        const data = await res.json() as StoryArcSummary[];
        if (!cancelled) {
          setArcs(data);
          setError(null);
        }
      } catch (loadError) {
        if (!cancelled) {
          const message = loadError instanceof Error ? loadError.message : 'Unable to load arcs.';
          setError(message);
        }
      } finally {
        if (!cancelled && showLoader) setFetching(false);
      }
    }

    void loadArcs(true);
    if (!projectId) return;

    const pollId = window.setInterval(() => {
      void loadArcs(false);
    }, 5000);

    return () => {
      cancelled = true;
      window.clearInterval(pollId);
    };
  }, [projectId]);

  const totalArcChapters = useMemo(
    () => arcs.reduce((sum, arc) => sum + arc.chapterCount, 0),
    [arcs],
  );

  async function handleCreateArc(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!projectId || !newArcName.trim()) return;

    setCreating(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/arcs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, name: newArcName }),
      });

      const payload = await res.json() as { error?: string; name?: string; chapterCount?: number };
      if (!res.ok) {
        throw new Error(payload.error || 'Unable to create arc.');
      }

      const createdArc = { name: payload.name || newArcName.trim(), chapterCount: payload.chapterCount || 1 };
      setArcs((current) => [...current.filter((arc) => arc.name !== createdArc.name), createdArc].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })));
      setNewArcName('');
      setSuccess(`${createdArc.name} created.`);
    } catch (createError) {
      const message = createError instanceof Error ? createError.message : 'Unable to create arc.';
      setError(message);
    } finally {
      setCreating(false);
    }
  }

  function requestDeleteArc(arc: StoryArcSummary) {
    setArcToDelete(arc);
    setShowDeleteConfirm(true);
    setError(null);
    setSuccess(null);
  }

  async function confirmDeleteArc() {
    if (!projectId || !arcToDelete) return;

    setDeleting(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/arcs', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, name: arcToDelete.name }),
      });

      const payload = await res.json() as { error?: string; deletedChapters?: number; name?: string };
      if (!res.ok) {
        throw new Error(payload.error || 'Unable to delete arc.');
      }

      setArcs((current) => {
        const remaining = current.filter((arc) => arc.name !== arcToDelete.name);
        if (!remaining.some((arc) => arc.name === 'Arc 1')) {
          remaining.push({ name: 'Arc 1', chapterCount: 0 });
        }
        return remaining.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
      });

      setShowDeleteConfirm(false);
      setArcToDelete(null);
      setSuccess(`${payload.name || 'Arc'} deleted with ${payload.deletedChapters ?? 0} chapter${(payload.deletedChapters ?? 0) === 1 ? '' : 's'}.`);
    } catch (deleteError) {
      const message = deleteError instanceof Error ? deleteError.message : 'Unable to delete arc.';
      setError(message);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-8 md:px-10">
      <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Story Arcs</p>
            <h1 className="mt-1 text-2xl font-bold text-white">Arc Braid Overview</h1>
            <p className="mt-1 text-sm text-slate-400">
              {arcs.length} arc{arcs.length === 1 ? '' : 's'} threaded through {totalArcChapters} chapter{totalArcChapters === 1 ? '' : 's'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href={projectId ? `/writing?projectId=${encodeURIComponent(projectId)}` : '/writing'} className="rounded-lg border border-cyan-500/60 px-4 py-2 text-sm text-cyan-100">
              Open Writing Page
            </Link>
            <Link href={projectId ? `/continuum?projectId=${encodeURIComponent(projectId)}` : '/continuum'} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300">
              Back to Continuum
            </Link>
          </div>
        </div>

        <motion.section initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }} className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Arc Braid</p>
              <p className="mt-1 text-sm text-slate-400">Each thread is one story arc. Open one to reach its chapter braid.</p>
            </div>
            {fetching && <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Syncing...</p>}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/50 px-2 py-4">
            <div className="relative" style={{ height: Math.max(120, arcs.length * 84) }}>
              {arcs.map((arc, index) => {
                const vitality = Math.min(arc.chapterCount / MAX_ARC_VITALITY_CHAPTERS, 1);
                const vibrance = Math.min(1, vitality / 0.5);
                const arcColor = mixHexColors(ARC_GRAY, getArcColor(arc.name), vibrance);
                const amplitude = 1.2 + vitality * 8;
                return (
                  <motion.button
                    key={arc.name}
                    type="button"
                    onClick={() => router.push(`/chapters?projectId=${encodeURIComponent(projectId ?? '')}&arc=${encodeURIComponent(arc.name)}`)}
                    whileHover={{ scale: 1.01, x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    className="absolute left-0 right-0 flex items-center rounded-xl"
                    style={{ top: `${index * 84}px` }}
                  >
                    <svg viewBox={`0 0 ${BRAID_WIDTH} 72`} preserveAspectRatio="none" className="h-[72px] w-full">
                      <path d={buildArcPath(0, 36, amplitude)} fill="none" stroke={arcColor} strokeWidth="8" strokeLinecap="round" style={{ filter: `blur(${2 + vitality * 3}px)` }} opacity={0.16 + vitality * 0.24} />
                      <path d={buildArcPath(0, 36, amplitude)} fill="none" stroke={arcColor} strokeWidth="3.2" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 ${1 + vitality * 5}px ${arcColor})` }} opacity={0.58 + vitality * 0.34} />
                    </svg>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-left">
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{arc.chapterCount} chapter{arc.chapterCount === 1 ? '' : 's'} | vitality {Math.round(vitality * 100)}%</p>
                      <p className="mt-1 text-lg font-semibold" style={{ color: arcColor }}>{arc.name}</p>
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-right">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/80">Open Arc Braid</p>
                      <p className="text-4xl leading-none text-white">→</p>
                    </div>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(event) => {
                        event.stopPropagation();
                        requestDeleteArc(arc);
                      }}
                      className="absolute right-24 top-1/2 -translate-y-1/2 rounded-md border border-rose-500/60 bg-rose-600/20 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-rose-100"
                    >
                      Delete
                    </motion.button>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.section>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Arc List</p>
              <p className="mt-1 text-sm text-slate-400">Create and manage your story arcs before drilling down into chapters.</p>
            </div>
            <form onSubmit={handleCreateArc} className="flex w-full max-w-md items-center gap-3">
              <input
                type="text"
                value={newArcName}
                onChange={(event) => setNewArcName(event.target.value)}
                placeholder="Arc 2"
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white"
              />
              <motion.button type="submit" whileHover={{ scale: creating ? 1 : 1.03 }} whileTap={{ scale: creating ? 1 : 0.97 }} disabled={!newArcName.trim() || creating || !projectId} className="rounded-lg border border-cyan-500/60 bg-cyan-600/20 px-4 py-2 text-sm text-cyan-100 disabled:opacity-50">
                {creating ? 'Creating...' : 'Add Arc'}
              </motion.button>
            </form>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {arcs.map((arc) => {
              const vitality = Math.min(arc.chapterCount / MAX_ARC_VITALITY_CHAPTERS, 1);
              const arcColor = mixHexColors(ARC_GRAY, getArcColor(arc.name), Math.min(1, vitality / 0.5));
              return (
                <div key={arc.name} className="rounded-xl border border-slate-700 bg-slate-800/55 p-4">
                  <button type="button" onClick={() => router.push(`/chapters?projectId=${encodeURIComponent(projectId ?? '')}&arc=${encodeURIComponent(arc.name)}`)} className="w-full text-left hover:opacity-95">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Story Arc</p>
                    <p className="mt-1 text-lg font-semibold" style={{ color: arcColor }}>{arc.name}</p>
                    <p className="mt-2 text-sm text-slate-400">{arc.chapterCount} chapter{arc.chapterCount === 1 ? '' : 's'} in this braid.</p>
                  </button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => requestDeleteArc(arc)}
                    className="mt-3 rounded-lg border border-rose-500/60 bg-rose-600/20 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-rose-100"
                  >
                    Delete Arc + Contents
                  </motion.button>
                </div>
              );
            })}
          </div>
        </section>

        <AnimatePresence>
          {showDeleteConfirm && arcToDelete && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  if (!deleting) {
                    setShowDeleteConfirm(false);
                    setArcToDelete(null);
                  }
                }}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[1px]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="fixed inset-0 z-[55] flex items-center justify-center p-6"
              >
                <div className="w-full max-w-md rounded-2xl border border-rose-500/40 bg-slate-900/95 p-6 shadow-[0_16px_70px_rgba(120,20,40,0.5)]">
                  <p className="text-xs uppercase tracking-[0.14em] text-rose-300">Delete Arc and Contents</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Delete {arcToDelete.name}?</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    This removes the arc braid and all {arcToDelete.chapterCount} chapter{arcToDelete.chapterCount === 1 ? '' : 's'} inside it.
                  </p>
                  <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowDeleteConfirm(false);
                        setArcToDelete(null);
                      }}
                      disabled={deleting}
                      className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 disabled:opacity-50"
                    >
                      Keep Arc
                    </button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: deleting ? 1 : 1.03 }}
                      whileTap={{ scale: deleting ? 1 : 0.97 }}
                      onClick={confirmDeleteArc}
                      disabled={deleting}
                      className="rounded-lg border border-rose-500/70 bg-rose-600/20 px-4 py-2 text-sm text-rose-100 disabled:opacity-60"
                    >
                      {deleting ? 'Deleting...' : 'Delete Arc'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(error || success) && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`mt-4 rounded-lg px-4 py-2 text-sm ${error ? 'border border-rose-500/30 bg-rose-950/80 text-rose-200' : 'border border-emerald-500/30 bg-emerald-950/70 text-emerald-200'}`}
            >
              {error || success}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}

export default function ArcsPage() {
  return (
    <Suspense>
      <ArcsPageInner />
    </Suspense>
  );
}
