import React from 'react';
import Link from 'next/link';
import Footer from '../components/layout/Footer';
import DocShell from '../components/layout/DocShell';

export const metadata = {
  title: 'Page Not Found — HTML5 Reference',
};

export default function NotFound() {
  return (
    <DocShell>
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white sm:text-5xl">
          404
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          The requested HTML5 element was not found in the index.
        </p>
        <div className="mt-6 flex items-center space-x-3">
          <Link
            href="/"
            className="rounded-lg bg-brand-500 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-600 transition"
          >
            Return Home
          </Link>
          <Link
            href="/topics"
            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 transition"
          >
            All Elements
          </Link>
        </div>
      </main>

      <Footer />
    </DocShell>
  );
}
