import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TopicPagination({ prev, next }) {
  if (!prev && !next) return null;

  return (
    <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
      {prev ? (
        <Link
          href={`/topics/${prev.slug}`}
          className="group flex flex-1 items-center gap-3.5 rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-brand-300 hover:bg-orange-50/30 hover:shadow-xs dark:border-zinc-800 dark:bg-surface-darkSurface dark:hover:border-brand-700/60 dark:hover:bg-zinc-900/60"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300">
            <ArrowLeft className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-400">
              Previous · Lesson {prev.number}
            </div>
            <div className="truncate text-sm font-semibold text-zinc-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
              {prev.title}
            </div>
          </div>
        </Link>
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}

      {next ? (
        <Link
          href={`/topics/${next.slug}`}
          className="group flex flex-1 items-center justify-end gap-3.5 rounded-xl border border-zinc-200 bg-white p-4 text-right transition-all hover:border-brand-300 hover:bg-orange-50/30 hover:shadow-xs dark:border-zinc-800 dark:bg-surface-darkSurface dark:hover:border-brand-700/60 dark:hover:bg-zinc-900/60"
        >
          <div className="min-w-0 flex-1">
            <div className="text-xs font-medium uppercase tracking-wider text-zinc-400 group-hover:text-brand-600 dark:group-hover:text-brand-400">
              Next · Lesson {next.number}
            </div>
            <div className="truncate text-sm font-semibold text-zinc-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
              {next.title}
            </div>
          </div>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300">
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      ) : (
        <div className="hidden flex-1 sm:block" />
      )}
    </div>
  );
}
