import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();
  if (session) redirect('/dashboard');

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <span className="text-xl font-bold text-white tracking-tight">∿ Loom</span>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/login?tab=register"
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="mb-8 text-6xl select-none opacity-30">∿</div>
        <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight max-w-3xl leading-tight mb-6">
          Weave your world.<br />
          <span className="text-indigo-400">Thread by thread.</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-xl mb-10">
          Loom is a spatio-temporal IDE for world-builders and fiction architects.
          Visualize your narrative across a living, braided timeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/login?tab=register"
            className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-colors"
          >
            Start Weaving — It&apos;s Free
          </Link>
          <Link
            href="/login"
            className="px-7 py-3.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 font-medium text-base transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 py-5 border-t border-slate-800 text-center text-xs text-slate-600">
        Loom — A Spatio-Temporal IDE for Fiction Architects
      </footer>
    </main>
  );
}

