'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import RichTextEditor from '@/components/Shared/RichTextEditor';
import { getArcColor } from '@/lib/story-arcs';

interface ChapterRecord {
  id: string;
  projectId: string;
  order: number;
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
  arc?: string | null;
}

const MAX_ARC_VITALITY_CHAPTERS = 8;
const ARC_GRAY = '#6b7280';

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

function buildArcPath(phase: number, width = 1400, centerY = 36, amplitude = 9, segments = 36) {
  const points: string[] = [];
  for (let step = 0; step <= segments; step += 1) {
    const t = step / segments;
    const x = t * width;
    const y = centerY + Math.sin(t * Math.PI * 8 + phase) * amplitude;
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `M ${points.join(' L ')}`;
}

export default function ChapterEditorPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');
  const arcParam = searchParams.get('arc');
  const arc = arcParam || '';

  const [chapters, setChapters] = useState<ChapterRecord[]>([]);
  const [fetching, setFetching] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [draftTitle, setDraftTitle] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [editorDirty, setEditorDirty] = useState(false);
  const [hydratedChapterId, setHydratedChapterId] = useState<string | null>(null);
  const [showBraidView, setShowBraidView] = useState(true);
  const [showChapterList, setShowChapterList] = useState(true);
  const [_expandedGroups, _setExpandedGroups] = useState<Set<number>>(new Set());

  useEffect(() => {
    let cancelled = false;

    async function loadChapters(showLoader: boolean) {
      if (!projectId) return;
      if (showLoader && !cancelled) setFetching(true);

      try {
        const res = await fetch(`/api/chapters?projectId=${encodeURIComponent(projectId)}&arc=${encodeURIComponent(arc)}`, {
          cache: 'no-store',
        });

        if (!res.ok) throw new Error('Unable to fetch chapters.');

        const data = await res.json() as ChapterRecord[];
        if (cancelled) return;

        const ordered = [...data].sort((a, b) => a.order - b.order);
        setChapters(ordered);
        setError(null);

        if (!selectedChapterId && ordered.length > 0) {
          setSelectedChapterId(ordered[0].id);
        } else if (selectedChapterId && !ordered.some((chapter) => chapter.id === selectedChapterId)) {
          setSelectedChapterId(ordered[0]?.id ?? null);
        }
      } catch (loadError) {
        if (!cancelled) {
          const message = loadError instanceof Error ? loadError.message : 'Unable to fetch chapters.';
          setError(message);
        }
      } finally {
        if (!cancelled && showLoader) setFetching(false);
      }
    }

    void loadChapters(true);

    if (!projectId) return;
    const pollId = window.setInterval(() => {
      void loadChapters(false);
    }, 5000);

    return () => {
      cancelled = true;
      window.clearInterval(pollId);
    };
  }, [projectId, arc, selectedChapterId]);

  const selectedChapter = useMemo(
    () => chapters.find((chapter) => chapter.id === selectedChapterId) ?? null,
    [chapters, selectedChapterId],
  );

  useEffect(() => {
    if (!selectedChapter) {
      setDraftTitle('');
      setDraftContent('');
      setEditorDirty(false);
      setHydratedChapterId(null);
      return;
    }

    const switchedChapter = hydratedChapterId !== selectedChapter.id;
    if (switchedChapter || !editorDirty) {
      setDraftTitle(selectedChapter.title ?? '');
      setDraftContent(selectedChapter.content ?? '');
      setEditorDirty(false);
      setHydratedChapterId(selectedChapter.id);
    }
  }, [selectedChapter, editorDirty, hydratedChapterId]);

  const arcVitality = Math.min(chapters.length / MAX_ARC_VITALITY_CHAPTERS, 1);
  const arcVibrance = Math.min(1, arcVitality / 0.5);
  const arcColor = arc ? mixHexColors(ARC_GRAY, getArcColor(arc), arcVibrance) : ARC_GRAY;

  async function handleCreateChapter() {
    if (!projectId) return;
    setLoadingCreate(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/chapters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId,
          arc,
          title: `Chapter ${chapters.length + 1}`,
          content: '',
          order: chapters.length + 1,
        }),
      });

      const payload = await res.json() as ChapterRecord | { error?: string };
      if (!res.ok) {
        throw new Error('error' in payload && payload.error ? payload.error : 'Unable to create chapter.');
      }

      const created = payload as ChapterRecord;
      const next = [...chapters, created].sort((a, b) => a.order - b.order);
      setChapters(next);
      setSelectedChapterId(created.id);
      setSuccess(`${created.title} created.`);
    } catch (createError) {
      const message = createError instanceof Error ? createError.message : 'Unable to create chapter.';
      setError(message);
    } finally {
      setLoadingCreate(false);
    }
  }

  async function handleSaveChapter() {
    if (!projectId || !selectedChapter) return;
    setLoadingSave(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/chapters', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedChapter.id,
          projectId,
          arc,
          title: draftTitle,
          content: draftContent,
          order: selectedChapter.order,
        }),
      });

      const payload = await res.json() as ChapterRecord | { error?: string };
      if (!res.ok) {
        throw new Error('error' in payload && payload.error ? payload.error : 'Unable to save chapter.');
      }

      const saved = payload as ChapterRecord;
      setChapters((current) => current.map((chapter) => (chapter.id === saved.id ? saved : chapter)));
      setEditorDirty(false);
      setSuccess(`${saved.title} saved.`);
    } catch (saveError) {
      const message = saveError instanceof Error ? saveError.message : 'Unable to save chapter.';
      setError(message);
    } finally {
      setLoadingSave(false);
    }
  }

  async function handleDeleteChapter() {
    if (!projectId || !selectedChapter || loadingDelete) return;
    setShowDeleteConfirm(true);
  }

  async function confirmDeleteChapter() {
    if (!projectId || !selectedChapter) return;

    setLoadingDelete(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/chapters', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedChapter.id, projectId }),
      });

      const payload = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok) {
        throw new Error(payload.error || 'Unable to delete chapter.');
      }

      const remaining = chapters.filter((chapter) => chapter.id !== selectedChapter.id);
      setChapters(remaining);
      setSelectedChapterId(remaining[0]?.id ?? null);
      setShowDeleteConfirm(false);
      setSuccess(`Deleted ${selectedChapter.title}.`);
    } catch (deleteError) {
      const message = deleteError instanceof Error ? deleteError.message : 'Unable to delete chapter.';
      setError(message);
    } finally {
      setLoadingDelete(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32 }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="flex flex-col gap-4 border-b border-slate-800 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Chapter Arc</p>
            <h1 className="mt-1 text-2xl font-bold text-white">{arc || 'Select an arc'}</h1>
            <p className="mt-1 text-sm text-slate-400">
              Arc vitality: {Math.round(arcVitality * 100)}% - {chapters.length} chapter{chapters.length === 1 ? '' : 's'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowBraidView(!showBraidView)}
              className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-slate-300 hover:border-slate-500"
            >
              {showBraidView ? '▼ Hide Braid' : '▶ Show Braid'}
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowChapterList(!showChapterList)}
              className="rounded-lg border border-slate-600 px-3 py-2 text-sm text-slate-300 hover:border-slate-500"
            >
              {showChapterList ? '◄ Hide Sidebar' : '► Show Sidebar'}
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: loadingCreate ? 1 : 1.03 }}
              whileTap={{ scale: loadingCreate ? 1 : 0.97 }}
              onClick={handleCreateChapter}
              disabled={!projectId || loadingCreate}
              className="rounded-lg border border-cyan-500/60 bg-cyan-600/20 px-4 py-2 text-sm text-cyan-100 disabled:opacity-50"
            >
              {loadingCreate ? 'Creating...' : '+ New Chapter'}
            </motion.button>
            <Link
              href={projectId ? `/continuum?projectId=${encodeURIComponent(projectId)}` : '/continuum'}
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300"
            >
              Back to Continuum
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {showDeleteConfirm && selectedChapter && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  if (!loadingDelete) setShowDeleteConfirm(false);
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
                  <p className="text-xs uppercase tracking-[0.14em] text-rose-300">Confirm Deletion</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">Delete this chapter?</h3>
                  <p className="mt-2 text-sm text-slate-300">"{selectedChapter.title}" will be permanently removed from this arc.</p>
                  <div className="mt-6 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowDeleteConfirm(false)}
                      disabled={loadingDelete}
                      className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300 disabled:opacity-50"
                    >
                      Keep Chapter
                    </button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: loadingDelete ? 1 : 1.03 }}
                      whileTap={{ scale: loadingDelete ? 1 : 0.97 }}
                      onClick={confirmDeleteChapter}
                      disabled={loadingDelete}
                      className="rounded-lg border border-rose-500/70 bg-rose-600/20 px-4 py-2 text-sm text-rose-100 disabled:opacity-60"
                    >
                      {loadingDelete ? 'Deleting...' : 'Delete Permanently'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="relative mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 overflow-hidden"
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(ellipse at center, ${arcColor}24 0%, rgba(15,23,42,0) 72%)`,
              filter: `blur(${10 - arcVibrance * 3}px) saturate(${0.25 + arcVibrance})`,
              opacity: 0.3 + arcVibrance * 0.5,
            }}
          />

          <motion.div
            className="relative"
            animate={{ height: showBraidView ? 'auto' : '60px' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">Arc Braid</p>
            
            <motion.div
              animate={{ opacity: showBraidView ? 1 : 0.5 }}
              transition={{ duration: 0.25 }}
              className={showBraidView ? 'visible' : 'invisible absolute'}
            >
              <div className="relative h-20 overflow-visible">
                <motion.svg viewBox="0 0 1400 72" preserveAspectRatio="none" className="h-full w-full">
                  <motion.path
                    fill="none"
                    stroke={arcColor}
                    strokeWidth="8"
                    strokeLinecap="round"
                    style={{ filter: `blur(${2 + arcVibrance * 3}px)` }}
                    animate={{ d: [buildArcPath(0, 1400, 36, 1 + arcVitality * 7), buildArcPath(-Math.PI, 1400, 36, 1 + arcVitality * 7), buildArcPath(-Math.PI * 2, 1400, 36, 1 + arcVitality * 7)] }}
                    transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
                    opacity={0.18 + arcVitality * 0.25}
                  />
                  <motion.path
                    fill="none"
                    stroke={arcColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    animate={{ d: [buildArcPath(0, 1400, 36, 1 + arcVitality * 6), buildArcPath(-Math.PI, 1400, 36, 1 + arcVitality * 6), buildArcPath(-Math.PI * 2, 1400, 36, 1 + arcVitality * 6)] }}
                    transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
                    style={{ filter: `drop-shadow(0 0 ${1 + arcVitality * 5}px ${arcColor})` }}
                    opacity={0.58 + arcVitality * 0.34}
                  />
                </motion.svg>

                {chapters.map((chapter, index) => {
                  const left = ((index + 1) / (chapters.length + 1)) * 100;
                  const selected = selectedChapterId === chapter.id;
                  return (
                    <motion.button
                      key={chapter.id}
                      type="button"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.04 }}
                      whileHover={{ scale: 1.22 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => setSelectedChapterId(chapter.id)}
                      title={chapter.title || `Chapter ${chapter.order}`}
                      className="absolute top-1/2 h-4 w-4 -translate-y-1/2 -translate-x-1/2 rounded-full border-2"
                      style={{
                        left: `${left}%`,
                        borderColor: arcColor,
                        backgroundColor: selected ? arcColor : '#0f172a',
                        boxShadow: selected ? `0 0 12px ${arcColor}` : 'none',
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>

            {!showBraidView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="relative h-12 overflow-visible flex items-center"
              >
                <motion.svg viewBox="0 0 1400 72" preserveAspectRatio="none" className="h-full w-full">
                  <motion.path
                    fill="none"
                    stroke={arcColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ d: [buildArcPath(0, 1400, 36, 0.5 + arcVitality * 2), buildArcPath(-Math.PI, 1400, 36, 0.5 + arcVitality * 2), buildArcPath(-Math.PI * 2, 1400, 36, 0.5 + arcVitality * 2)] }}
                    transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
                    style={{ filter: `drop-shadow(0 0 ${0.5 + arcVitality * 2}px ${arcColor})` }}
                    opacity={0.4 + arcVitality * 0.2}
                  />
                </motion.svg>
              </motion.div>
            )}
          </motion.div>
        </motion.section>

        <motion.div 
          layout
          className="mt-6 grid gap-6 grid-cols-1"
          style={{
            gridTemplateColumns: showChapterList ? '320px minmax(0, 1fr)' : '1fr',
          }}
          animate={{
            gridTemplateColumns: showChapterList ? '320px minmax(0, 1fr)' : '1fr',
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <motion.section
            initial={false}
            animate={{ 
              opacity: showChapterList ? 1 : 0,
              width: showChapterList ? '100%' : 0,
            }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 overflow-hidden"
            style={{
              display: showChapterList ? 'block' : 'none',
            }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-500">Chapters in Arc</p>
            <div className="space-y-2 max-h-[520px] overflow-auto pr-1">
              {fetching && chapters.length === 0 && (
                <p className="text-sm text-slate-500">Loading chapters...</p>
              )}
              {!fetching && chapters.length === 0 && (
                <p className="text-sm text-slate-500">No chapters yet. Create one to start this arc braid.</p>
              )}
              {chapters.map((chapter) => {
                const selected = chapter.id === selectedChapterId;
                return (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => setSelectedChapterId(chapter.id)}
                    className={`w-full rounded-lg border px-3 py-2.5 text-left transition-colors ${selected ? 'border-cyan-500/60 bg-cyan-600/10' : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'}`}
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Chapter {chapter.order}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{chapter.title || `Untitled ${chapter.order}`}</p>
                  </button>
                );
              })}
            </div>
          </motion.section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            {selectedChapter ? (
              <>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Chapter Editor</p>
                  <AnimatePresence>
                    {editorDirty && (
                      <motion.span
                        initial={{ opacity: 0, y: -4, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="rounded-full border border-amber-400/50 bg-amber-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-amber-200"
                      >
                        Unsaved Changes
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Title</p>
                  <input
                    type="text"
                    value={draftTitle}
                    onChange={(event) => {
                      setDraftTitle(event.target.value);
                      setEditorDirty(true);
                    }}
                    className="mt-1.5 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-lg normal-case tracking-normal text-white"
                    placeholder="Name this chapter..."
                  />
                </div>

                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Chapter Content</p>
                  <RichTextEditor
                    value={draftContent}
                    onChange={(value) => {
                      setDraftContent(value);
                      setEditorDirty(true);
                    }}
                    placeholder="Write your chapter. Link lore, shape scenes, and build this arc braid..."
                    minHeightClassName="min-h-[30rem]"
                  />
                </div>

                <div className="mt-5 flex items-center justify-end gap-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: loadingDelete ? 1 : 1.03 }}
                    whileTap={{ scale: loadingDelete ? 1 : 0.97 }}
                    onClick={handleDeleteChapter}
                    disabled={loadingDelete}
                    className="rounded-lg border border-rose-500/60 px-4 py-2 text-sm text-rose-200 disabled:opacity-50"
                  >
                    {loadingDelete ? 'Deleting...' : 'Delete Chapter'}
                  </motion.button>
                  <motion.button
                    type="button"
                    whileHover={{ scale: loadingSave ? 1 : 1.03 }}
                    whileTap={{ scale: loadingSave ? 1 : 0.97 }}
                    onClick={handleSaveChapter}
                    disabled={loadingSave || !draftTitle.trim()}
                    className="rounded-lg border border-cyan-500/70 bg-cyan-600/20 px-4 py-2 text-sm text-cyan-100 disabled:opacity-50"
                  >
                    {loadingSave ? 'Saving...' : 'Save Chapter'}
                  </motion.button>
                </div>
              </>
            ) : (
              <div className="flex min-h-[320px] items-center justify-center text-slate-500">
                Select or create a chapter to begin editing this arc.
              </div>
            )}
          </section>
        </motion.div>

        <AnimatePresence>
          {(error || success) && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`mt-4 rounded-lg px-4 py-2 text-sm ${error ? 'border border-rose-500/30 bg-rose-950/70 text-rose-200' : 'border border-emerald-500/30 bg-emerald-950/70 text-emerald-200'}`}
            >
              {error || success}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
