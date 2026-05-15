'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface LoomProject {
  id: string;
  name: string;
  description?: string;
  genre?: string;
  createdAt: string;
}

const GENRES = [
  'Fantasy', 'Science Fiction', 'Horror', 'Mystery',
  'Romance', 'Thriller', 'Historical Fiction', 'Other',
];

export default function DashboardPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<LoomProject[]>([]);
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ name: '', description: '', genre: 'Fantasy' });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    void fetch('/api/projects')
      .then((r) => r.json())
      .then((data: LoomProject[]) => setProjects(data))
      .catch(() => {})
      .finally(() => setFetching(false));
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setLoading(true);
    const res = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const project = await res.json() as LoomProject;
    setLoading(false);
    if (!res.ok) return;
    setShowCreate(false);
    setForm({ name: '', description: '', genre: 'Fantasy' });
    router.push(`/continuum?projectId=${project.id}`);
  }

  if (fetching) return <div className="min-h-screen bg-slate-900" />;

  return (
    <main className="min-h-screen bg-slate-900 px-6 py-10 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto w-full max-w-5xl"
      >
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-white">Projects</h1>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowCreate(true)}
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Create a New Project
          </motion.button>
        </div>
      </motion.div>

      <div className="mx-auto mt-8 w-full max-w-5xl">
        <AnimatePresence mode="wait">
          {projects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-10 text-center"
            >
              <h2 className="text-2xl font-semibold text-slate-200">No projects yet</h2>
              <p className="mx-auto mt-3 max-w-md text-slate-400">
                Create a New Project to start building your Continuum and add your first lore node.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowCreate(true)}
                className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                Create a New Project
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                All Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, idx) => (
                  <motion.button
                    key={project.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06, duration: 0.35 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(`/continuum?projectId=${project.id}`)}
                    className="text-left rounded-xl border border-slate-700 bg-slate-800/60 p-6 hover:border-slate-600 hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-white font-semibold text-lg leading-tight">{project.name}</h3>
                      {project.genre && (
                        <span className="shrink-0 text-xs text-slate-400 border border-slate-700 rounded px-2 py-0.5">
                          {project.genre}
                        </span>
                      )}
                    </div>
                    {project.description && (
                      <p className="text-slate-400 text-sm line-clamp-2">{project.description}</p>
                    )}
                    <p className="text-slate-600 text-xs mt-3">
                      Created {new Date(project.createdAt).toLocaleDateString()}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showCreate && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setShowCreate(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div className="pointer-events-auto w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-7">
                  <h2 className="text-xl font-bold text-white">Create a New Project</h2>
                  <button
                    onClick={() => setShowCreate(false)}
                    className="text-slate-500 hover:text-slate-300 text-2xl leading-none transition-colors"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleCreate} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">
                      Project Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="The name of your world…"
                      required
                      autoFocus
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">
                      Description
                    </label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                      placeholder="A brief summary of your story or world…"
                      rows={3}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5">
                      Genre
                    </label>
                    <select
                      value={form.genre}
                      onChange={(e) => setForm((f) => ({ ...f, genre: e.target.value }))}
                      className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      {GENRES.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!form.name.trim() || loading}
                    className="mt-2 w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold transition-colors"
                  >
                    {loading ? 'Creating…' : 'Submit Project Details'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
