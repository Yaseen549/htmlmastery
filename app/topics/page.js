import React from 'react';
import Link from 'next/link';
import { topics, categories } from '../../data/topics';
import Footer from '../../components/layout/Footer';
import DocShell from '../../components/layout/DocShell';

export const metadata = {
  title: 'All HTML Tags',
  description: 'Complete list of HTML tags organized by category.',
};

export default function TopicsPage() {
  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = topics.filter((t) => t.category === cat);
    return acc;
  }, {});

  return (
    <DocShell>
      <main className="flex-1 px-4 py-10 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full">
        <header className="mb-10 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            All HTML Tags
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            A complete list of HTML tags organized by category.
          </p>
        </header>

        <div className="space-y-12">
          {categories.map((cat) => {
            const items = grouped[cat] || [];
            if (items.length === 0) return null;

            return (
              <section key={cat} className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-2 dark:border-zinc-800">
                  <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                    {cat}
                  </h2>
                  <span className="text-xs font-mono text-zinc-400">
                    {items.length} tag{items.length > 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((topic) => (
                    <Link
                      key={topic.slug}
                      href={`/topics/${topic.slug}`}
                      className="group rounded-lg border border-zinc-200 bg-white p-3.5 transition hover:border-brand-500 dark:border-zinc-800 dark:bg-zinc-900"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                          {topic.title}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-400">
                          #{topic.number}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {topic.shortDesc}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </DocShell>
  );
}
