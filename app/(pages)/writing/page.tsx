'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import RichTextEditor from '@/components/Shared/RichTextEditor';
import { getArcColor } from '@/lib/story-arcs';

interface StoryArcSummary {
  name: string;
  chapterCount: number;
}

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

const ARC_GRAY = '#6b7280';
const NODE_TYPES = ['Character', 'Monster', 'Item', 'Power', 'Location'] as const;

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

export default function WritingPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get('projectId');
  const requestedArc = searchParams.get('arc');

  const [arcs, setArcs] = useState<StoryArcSummary[]>([]);
  const [selectedArc, setSelectedArc] = useState<string | null>(requestedArc || null);
  const [chapters, setChapters] = useState<ChapterRecord[]>([]);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [draftTitle, setDraftTitle] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [showArcPanel, setShowArcPanel] = useState(true);
  const [showNodePanel, setShowNodePanel] = useState(true);
  const [minimalView, setMinimalView] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [saving, setSaving] = useState(false);
  const [creatingChapter, setCreatingChapter] = useState(false);
  const [creatingArc, setCreatingArc] = useState(false);
  const [droppingNode, setDroppingNode] = useState(false);
  const [newArcName, setNewArcName] = useState('');
  const [nodeDraft, setNodeDraft] = useState({ type: 'Character', name: '', content: '', position: 0.5 });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadArcs() {
      if (!projectId) return;
      try {
        const res = await fetch(`/api/arcs?projectId=${encodeURIComponent(projectId)}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Unable to load arcs.');
        const data = await res.json() as StoryArcSummary[];
        if (cancelled) return;
        setArcs(data);
        if (!requestedArc && data.length > 0 && !selectedArc) {
          setSelectedArc(data[0].name);
        }
      } catch {}
    }

    void loadArcs();
    return () => { cancelled = true; };
  }, [projectId, requestedArc]);

  useEffect(() => {
    let cancelled = false;

    async function loadChapters() {
      if (!projectId || !selectedArc) return;
      setFetching(true);

      try {
        const res = await fetch(`/api/chapters?projectId=${encodeURIComponent(projectId)}&arc=${encodeURIComponent(selectedArc)}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Unable to load chapters.');
        const data = await res.json() as ChapterRecord[];
        if (cancelled) return;
        const ordered = [...data].sort((a, b) => a.order - b.order);
        setChapters(ordered);
        setSelectedChapterId((current) => {
          if (current && ordered.some((chapter) => chapter.id === current)) return current;
          return ordered[0]?.id ?? null;
        });
        setError(null);
      } catch (loadError) {
        if (!cancelled) {
          const message = loadError instanceof Error ? loadError.message : 'Unable to load chapters.';
          setError(message);
        }
      } finally {
        if (!cancelled) setFetching(false);
      }
    }

    void loadChapters();
    return () => { cancelled = true; };
  }, [projectId, selectedArc]);

  const selectedChapter = useMemo(
    () => chapters.find((chapter) => chapter.id === selectedChapterId) ?? null,
    [chapters, selectedChapterId],
  );

  useEffect(() => {
    setDraftTitle(selectedChapter?.title ?? '');
    setDraftContent(selectedChapter?.content ?? '');
  }, [selectedChapter]);

  const selectedArcColor = selectedArc ? mixHexColors(ARC_GRAY, getArcColor(selectedArc), 1) : ARC_GRAY;
  const displayArcPanel = !minimalView && showArcPanel;
  const displayNodePanel = !minimalView && showNodePanel;

  async function handleCreateArc(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!projectId || !newArcName.trim()) return;

    setCreatingArc(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/arcs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, name: newArcName }),
      });
      const payload = await res.json() as { error?: string; name?: string; chapterCount?: number };
      if (!res.ok) throw new Error(payload.error || 'Unable to create arc.');

      const createdName = payload.name || newArcName.trim();
      setArcs((current) => [...current.filter((arc) => arc.name !== createdName), { name: createdName, chapterCount: payload.chapterCount || 1 }].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })));
      setSelectedArc(createdName);
      setNewArcName('');
      setSuccess(`${createdName} is ready for writing.`);
    } catch (createError) {
      const message = createError instanceof Error ? createError.message : 'Unable to create arc.';
      setError(message);
    } finally {
      setCreatingArc(false);
    }
  }

  async function handleCreateChapter() {
    if (!projectId || !selectedArc) return;

    setCreatingChapter(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/chapters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, arc: selectedArc === 'Arc 1' ? undefined : selectedArc, title: `Chapter ${chapters.length + 1}`, content: '', order: chapters.length + 1 }),
      });
      const payload = await res.json() as ChapterRecord | { error?: string };
      if (!res.ok) throw new Error('error' in payload && payload.error ? payload.error : 'Unable to create chapter.');

      const created = payload as ChapterRecord;
      setChapters((current) => [...current, created].sort((a, b) => a.order - b.order));
      setSelectedChapterId(created.id);
      setArcs((current) => {
        const existing = current.find((arc) => arc.name === selectedArc);
        if (existing) {
          return current.map((arc) => arc.name === selectedArc ? { ...arc, chapterCount: arc.chapterCount + 1 } : arc);
        }
        return [...current, { name: selectedArc, chapterCount: 1 }].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
      });
      setSuccess(`New chapter opened in ${selectedArc}.`);
    } catch (createError) {
      const message = createError instanceof Error ? createError.message : 'Unable to create chapter.';
      setError(message);
    } finally {
      setCreatingChapter(false);
    }
  }

  async function handleSaveChapter() {
    if (!projectId || !selectedChapter) return;

    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/chapters', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedChapter.id, projectId, arc: selectedArc === 'Arc 1' ? undefined : selectedArc, title: draftTitle, content: draftContent, order: selectedChapter.order }),
      });
      const payload = await res.json() as ChapterRecord | { error?: string };
      if (!res.ok) throw new Error('error' in payload && payload.error ? payload.error : 'Unable to save chapter.');

      const saved = payload as ChapterRecord;
      setChapters((current) => current.map((chapter) => chapter.id === saved.id ? saved : chapter));
      setSuccess(`Saved ${saved.title}.`);
    } catch (saveError) {
      const message = saveError instanceof Error ? saveError.message : 'Unable to save chapter.';
      setError(message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDropNode(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!projectId || !nodeDraft.name.trim()) return;

    setDroppingNode(true);
    setError(null);
    setSuccess(null);

    try {
      const detailFromChapter = selectedChapter ? `<p><strong>Source Chapter:</strong> ${selectedChapter.title}</p>${nodeDraft.content}` : nodeDraft.content;
      const res = await fetch('/api/nodes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, type: nodeDraft.type, name: nodeDraft.name, content: detailFromChapter || undefined, position: nodeDraft.position }),
      });
      const payload = await res.json() as { error?: string };
      if (!res.ok) throw new Error(payload.error || 'Unable to drop node onto the continuum.');

      setNodeDraft({ type: 'Character', name: '', content: '', position: Math.min(0.95, nodeDraft.position + 0.08) });
      setSuccess('Node dropped onto the continuum. Switch back any time to see the braid react.');
    } catch (dropError) {
      const message = dropError instanceof Error ? dropError.message : 'Unable to drop node onto the continuum.';
      setError(message);
    } finally {
      setDroppingNode(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 px-4 py-6 md:px-6 xl:px-8">
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mx-auto flex w-full max-w-[120rem] flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Main Writing Page</p>
            <h1 className="mt-1 text-2xl font-bold text-white">Writing Studio</h1>
            {!minimalView && (
              <p className="mt-1 text-sm text-slate-400">Start in Arc 1, build chapters, and drop story concepts straight onto the Continuum as you draft.</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setMinimalView((current) => !current)}
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300"
            >
              {minimalView ? 'Exit Minimal View' : 'Minimal View'}
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowArcPanel((current) => !current)}
              disabled={minimalView}
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300"
            >
              {showArcPanel ? 'Hide Arcs' : 'Show Arcs'}
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowNodePanel((current) => !current)}
              disabled={minimalView}
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300"
            >
              {showNodePanel ? 'Hide Node Drop' : 'Show Node Drop'}
            </motion.button>
            <Link href={projectId ? `/arcs?projectId=${encodeURIComponent(projectId)}` : '/arcs'} className="rounded-lg border border-cyan-500/60 px-4 py-2 text-sm text-cyan-100">View Arc Braid</Link>
            <Link href={projectId ? `/continuum?projectId=${encodeURIComponent(projectId)}` : '/continuum'} className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-300">Back to Continuum</Link>
          </div>
        </div>

        <div
          className={`mt-6 grid gap-6 ${displayArcPanel && displayNodePanel
            ? 'xl:grid-cols-[280px_minmax(0,1fr)_320px]'
            : displayArcPanel
              ? 'xl:grid-cols-[280px_minmax(0,1fr)]'
              : displayNodePanel
                ? 'xl:grid-cols-[minmax(0,1fr)_320px]'
                : 'xl:grid-cols-[minmax(0,1fr)]'}`}
        >
          {displayArcPanel && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 xl:max-h-[calc(100vh-10rem)] xl:overflow-auto">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Story Arcs</p>
            <form onSubmit={handleCreateArc} className="mt-4 flex gap-2">
              <input type="text" value={newArcName} onChange={(event) => setNewArcName(event.target.value)} placeholder="Arc 2" className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white" />
              <motion.button type="submit" whileHover={{ scale: creatingArc ? 1 : 1.03 }} whileTap={{ scale: creatingArc ? 1 : 0.97 }} disabled={!newArcName.trim() || creatingArc || !projectId} className="rounded-lg border border-cyan-500/60 bg-cyan-600/20 px-3 py-2 text-sm text-cyan-100 disabled:opacity-50">{creatingArc ? '...' : '+'}</motion.button>
            </form>
            <div className="mt-4 space-y-2">
              {arcs.length === 0 ? (
                <div className="rounded-lg border border-slate-600 bg-slate-800/40 p-4 text-center">
                  <p className="text-sm text-slate-400">No arcs yet. Create your first arc to begin.</p>
                </div>
              ) : (
                arcs.map((arc) => {
                  const active = arc.name === selectedArc;
                  const tone = mixHexColors(ARC_GRAY, getArcColor(arc.name), 1);
                  return (
                    <button key={arc.name} type="button" onClick={() => setSelectedArc(arc.name)} className={`w-full rounded-lg border px-3 py-2.5 text-left ${active ? 'border-cyan-500/60 bg-cyan-600/10' : 'border-slate-700 bg-slate-800/60 hover:border-slate-600'}`}>
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Arc</p>
                      <p className="mt-1 text-sm font-semibold" style={{ color: tone }}>{arc.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{arc.chapterCount} chapter{arc.chapterCount === 1 ? '' : 's'}</p>
                    </button>
                  );
                })
              )}
            </div>
          </section>
          )}

          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 xl:min-h-[calc(100vh-10rem)] xl:overflow-hidden">
            <div className="flex h-full flex-col">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Current Arc</p>
                <h2 className="mt-1 text-2xl font-semibold" style={{ color: selectedArcColor }}>{selectedArc || 'Select or create an arc'}</h2>
              </div>
              <motion.button type="button" whileHover={{ scale: creatingChapter ? 1 : 1.03 }} whileTap={{ scale: creatingChapter ? 1 : 0.97 }} onClick={handleCreateChapter} disabled={!projectId || creatingChapter} className="rounded-lg border border-cyan-500/60 bg-cyan-600/20 px-4 py-2 text-sm text-cyan-100 disabled:opacity-50">{creatingChapter ? 'Creating...' : '+ Chapter'}</motion.button>
            </div>

            {!minimalView && (
              <div className="mt-5 flex flex-wrap gap-2">
                {fetching && chapters.length === 0 && <p className="text-sm text-slate-500">Loading chapters...</p>}
                {!fetching && chapters.length === 0 && <p className="text-sm text-slate-500">No chapters yet. Create the first chapter in this arc.</p>}
                {chapters.map((chapter) => (
                  <button key={chapter.id} type="button" onClick={() => setSelectedChapterId(chapter.id)} className={`rounded-full border px-3 py-1.5 text-sm ${selectedChapterId === chapter.id ? 'border-cyan-500/60 bg-cyan-600/10 text-white' : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600'}`}>
                    {chapter.title}
                  </button>
                ))}
              </div>
            )}

            {selectedChapter ? (
              <>
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Chapter Title</p>
                  <input
                    type="text"
                    value={draftTitle}
                    onChange={(event) => setDraftTitle(event.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-lg normal-case tracking-normal text-white"
                    placeholder="Give this chapter a real title..."
                  />
                </div>
                <div className="mt-4 flex-1 overflow-hidden">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Chapter Draft</p>
                  <RichTextEditor
                    value={draftContent}
                    onChange={setDraftContent}
                    placeholder="Write the chapter here, then drop major concepts onto the Continuum as nodes..."
                    minHeightClassName={minimalView ? 'min-h-[calc(100vh-18rem)]' : 'min-h-[32rem] xl:min-h-[calc(100vh-24rem)]'}
                  />
                </div>
                <div className="mt-5 flex justify-end border-t border-slate-800/80 pt-4">
                  <motion.button type="button" whileHover={{ scale: saving ? 1 : 1.03 }} whileTap={{ scale: saving ? 1 : 0.97 }} onClick={handleSaveChapter} disabled={saving || !draftTitle.trim()} className="rounded-lg border border-cyan-500/60 bg-cyan-600/20 px-4 py-2 text-sm text-cyan-100 disabled:opacity-50">{saving ? 'Saving...' : 'Save Chapter'}</motion.button>
                </div>
              </>
            ) : (
              <div className="mt-6 flex min-h-[50vh] flex-1 items-center justify-center text-slate-500">Create a chapter to start writing in {selectedArc}.</div>
            )}
            </div>
          </section>

          {displayNodePanel && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 xl:max-h-[calc(100vh-10rem)] xl:overflow-auto">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Drop-In Continuum Node</p>
            <p className="mt-1 text-sm text-slate-400">Capture a story concept while drafting and send it straight onto the main Continuum.</p>
            <form onSubmit={handleDropNode} className="mt-4 space-y-4">
              <label className="block text-xs uppercase tracking-[0.12em] text-slate-400">
                Node Type
                <select value={nodeDraft.type} onChange={(event) => setNodeDraft((current) => ({ ...current, type: event.target.value }))} className="mt-1.5 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white">
                  {NODE_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
              <label className="block text-xs uppercase tracking-[0.12em] text-slate-400">
                Node Name
                <input type="text" value={nodeDraft.name} onChange={(event) => setNodeDraft((current) => ({ ...current, name: event.target.value }))} placeholder="Relic of Dawn" className="mt-1.5 w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white" />
              </label>
              <label className="block text-xs uppercase tracking-[0.12em] text-slate-400">
                Timeline Position ({Math.round(nodeDraft.position * 100)}%)
                <input type="range" min={0.05} max={0.95} step={0.01} value={nodeDraft.position} onChange={(event) => setNodeDraft((current) => ({ ...current, position: Number(event.target.value) }))} className="mt-3 w-full" />
              </label>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Node Detail</p>
                <RichTextEditor
                  value={nodeDraft.content}
                  onChange={(html) => setNodeDraft((current) => ({ ...current, content: html }))}
                  placeholder="Why does this matter to the story?"
                  minHeightClassName="min-h-[18rem]"
                />
              </div>
              <motion.button type="submit" whileHover={{ scale: droppingNode ? 1 : 1.03 }} whileTap={{ scale: droppingNode ? 1 : 0.97 }} disabled={!projectId || !nodeDraft.name.trim() || droppingNode} className="w-full rounded-lg border border-cyan-500/60 bg-cyan-600/20 px-4 py-2 text-sm text-cyan-100 disabled:opacity-50">{droppingNode ? 'Dropping...' : 'Drop onto Continuum'}</motion.button>
            </form>
          </section>
          )}
        </div>

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
