import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/50 py-6 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center space-x-1">
          <span>Made with</span>
          <span className="text-brand-500 font-bold">🧡</span>
          <span>by</span>
          <a
            href="https://iamyaseen.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-800 hover:text-brand-600 dark:text-zinc-200 dark:hover:text-brand-400 underline decoration-brand-500 underline-offset-2"
          >
            Yaseen
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link
            href="/about"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            About
          </Link>
          <span>·</span>
          <Link
            href="/topics"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            All Tags
          </Link>
          <span>·</span>
          <Link
            href="/attributes"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            Global Attributes
          </Link>
          <span>·</span>
          <Link
            href="/entities"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            Entities
          </Link>
          <span>·</span>
          <Link
            href="/playground"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            Playground
          </Link>
          <span>·</span>
          <a
            href="https://html.spec.whatwg.org/multipage/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <span>HTML Spec</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
        </div>
      </div>
    </footer>
  );
}
