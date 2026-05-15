import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Loom
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          A Spatio-Temporal IDE for World-Builders and Fiction Architects
        </p>
        <div className="space-x-4">
          <Link
            href="/dashboard"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Enter Loom
          </Link>
          <Link
            href="/docs"
            className="inline-block px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Documentation
          </Link>
        </div>
      </div>
    </main>
  );
}
