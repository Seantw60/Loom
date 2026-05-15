import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Loom - The Narrative Continuum',
  description: 'A spatio-temporal IDE for world-builders and fiction architects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
