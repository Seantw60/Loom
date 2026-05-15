'use client';

import { useState, useEffect } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';

const PROVIDER_META: Record<string, { label: string; icon: string }> = {
  github: { label: 'GitHub', icon: '⌥' },
  google: { label: 'Google', icon: '⊕' },
};

function LoginContent() {
  const router      = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/dashboard';
  const defaultTab  = searchParams.get('tab') === 'register' ? 'register' : 'login';

  const [tab,     setTab]     = useState<'login' | 'register'>(defaultTab as 'login' | 'register');
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [password, setPassword] = useState('');
  const [error,   setError]   = useState('');
  const [loading, setLoading] = useState(false);
  const [oauthProviders, setOauthProviders] = useState<Array<{ id: string; label: string; icon: string }>>([]);

  useEffect(() => {
    setError('');
  }, [tab]);

  useEffect(() => {
    void getProviders().then((providers) => {
      const mapped = Object.values(providers ?? {})
        .filter((provider) => provider.type === 'oauth')
        .map((provider) => ({
          id: provider.id,
          label: PROVIDER_META[provider.id]?.label ?? provider.name,
          icon: PROVIDER_META[provider.id]?.icon ?? '•',
        }));
      setOauthProviders(mapped);
    });
  }, []);

  async function handleOAuth(provider: string) {
    setLoading(true);
    await signIn(provider, { callbackUrl });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (tab === 'register') {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json() as { error?: string };
      if (!res.ok) {
        setError(data.error ?? 'Registration failed.');
        setLoading(false);
        return;
      }
    }

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    if (result?.error) {
      setError('Invalid email or password.');
      setLoading(false);
      return;
    }

    router.push(callbackUrl);
  }

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center"
      >
        <span className="text-4xl text-slate-600 select-none">∿</span>
        <p className="text-sm text-slate-500 mt-1 tracking-widest uppercase">Loom</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
      >
        {/* Tabs */}
        <div className="flex mb-7 gap-1 bg-slate-800 rounded-lg p-1">
          {(['login', 'register'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-all capitalize ${
                tab === t
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t === 'login' ? 'Sign In' : 'Register'}
            </button>
          ))}
        </div>

        {oauthProviders.length > 0 ? (
          <div className="flex flex-col gap-2 mb-5">
            {oauthProviders.map((p) => (
              <motion.button
                key={p.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOAuth(p.id)}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-500 hover:text-white text-sm font-medium transition-all disabled:opacity-50"
              >
                <span>{p.icon}</span>
                Continue with {p.label}
              </motion.button>
            ))}
          </div>
        ) : (
          <p className="mb-5 text-center text-xs text-slate-500">
            OAuth providers are not configured yet. Add GitHub/Google client ID and secret in your environment.
          </p>
        )}

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-xs text-slate-600">or</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {/* Credentials form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AnimatePresence>
            {tab === 'register' && (
              <motion.div
                key="name"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoFocus
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={8}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-red-400 text-center"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-semibold transition-colors"
          >
            {loading
              ? 'Please wait…'
              : tab === 'login'
                ? 'Sign In'
                : 'Create Account'}
          </motion.button>
        </form>
      </motion.div>

      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-xs text-slate-600 hover:text-slate-400 transition-colors"
      >
        ← Back to home
      </motion.a>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900" />}>
      <LoginContent />
    </Suspense>
  );
}
