import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import DocShell from '../../components/layout/DocShell';

export const metadata = {
  title: 'About HTML Reference',
  description: 'A clean, straightforward reference for learning HTML with live browser output.',
};

export default function AboutPage() {
  return (
    <DocShell>
      <main className="flex-1 px-4 py-10 sm:px-8 lg:px-12 max-w-4xl mx-auto w-full">
        <header className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            About HTML Reference
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            A clean and simple reference guide for learning HTML.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              Why Default Browser Output Matters
            </h2>
            <p>
              Many learning websites add heavy CSS libraries and custom styles to their code examples. While this looks modern, it makes it hard to tell what the HTML is actually doing on its own.
            </p>
            <p>
              Every preview on this site shows the browser&apos;s true default appearance with zero added styles. You see exactly what each element looks like out of the box before any CSS is applied.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              Official Standards
            </h2>
            <p>
              This reference covers elements defined in official web standards:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://html.spec.whatwg.org/multipage/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-zinc-200 p-4 transition hover:border-brand-500 dark:border-zinc-800 dark:hover:border-brand-500"
              >
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">HTML Living Standard</div>
                  <div className="text-xs text-zinc-500">The authoritative specification for HTML</div>
                </div>
                <ExternalLink className="h-4 w-4 text-brand-500 shrink-0 ml-2" />
              </a>
              <a
                href="https://www.w3.org/WAI/ARIA/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-zinc-200 p-4 transition hover:border-brand-500 dark:border-zinc-800 dark:hover:border-brand-500"
              >
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">W3C WAI-ARIA</div>
                  <div className="text-xs text-zinc-500">Guidelines for web accessibility and screen readers</div>
                </div>
                <ExternalLink className="h-4 w-4 text-brand-500 shrink-0 ml-2" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </DocShell>
  );
}
