'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const pillars = [
  {
    title: 'The Continuum',
    description: 'Helical timeline — scrub through your story, unfurl the ribbons.',
    color: 'from-blue-600 to-blue-800',
    icon: '∿',
    href: '/continuum',
  },
  {
    title: 'Lore Library',
    description: 'Browse Characters, Monsters, Items, Power Systems, and Locations.',
    color: 'from-purple-600 to-purple-800',
    icon: '⬡',
    href: '/lore',
  },
  {
    title: 'Manuscript',
    description: 'Distraction-free writing with real-time [[linking]] to your world.',
    color: 'from-emerald-600 to-emerald-800',
    icon: '✍',
    href: '/manuscript',
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-8 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            The Loom
          </h1>
          <p className="mt-2 text-gray-400 text-lg">
            Your narrative universe, at a glance.
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {pillars.map((pillar) => (
            <motion.a
              key={pillar.title}
              href={pillar.href}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className={`block rounded-xl bg-gradient-to-br ${pillar.color} p-6 cursor-pointer shadow-lg`}
            >
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h2 className="text-xl font-semibold text-white mb-1">{pillar.title}</h2>
              <p className="text-sm text-white/70">{pillar.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Recent Projects Placeholder */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-white mb-4">Recent Projects</h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="rounded-lg border border-slate-700 bg-slate-800 p-5"
              >
                <div className="h-4 w-2/3 bg-slate-700 rounded animate-pulse mb-2" />
                <div className="h-3 w-1/2 bg-slate-700 rounded animate-pulse" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
