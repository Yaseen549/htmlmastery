'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
import { topics, categories } from '../../data/topics';

export default function Sidebar({ className = '', onSelectTopic = null }) {
  const pathname = usePathname();
  const [filterQuery, setFilterQuery] = useState('');

  // Group topics by category
  const filteredTopics = filterQuery.trim()
    ? topics.filter(
        (t) =>
          t.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
          t.slug.toLowerCase().includes(filterQuery.toLowerCase())
      )
    : topics;

  const grouped = categories.reduce((acc, cat) => {
    const matched = filteredTopics.filter((t) => t.category === cat);
    if (matched.length > 0) acc[cat] = matched;
    return acc;
  }, {});

  return (
    <aside
      className={`w-64 xl:w-72 shrink-0 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 flex flex-col h-full overflow-hidden ${className}`}
    >
      {/* Quick Filter Search - Sticky and pinned at top */}
      <div className="shrink-0 p-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 sticky top-0 z-10">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter tags..."
            className="w-full rounded-md border border-zinc-200 bg-zinc-50 pl-8 pr-3 py-1.5 text-xs text-zinc-900 placeholder-zinc-400 focus:border-brand-500 focus:bg-white focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-brand-500"
          />
        </div>
      </div>

      {/* Categorized List - Independent scroll container */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-5 text-xs">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="space-y-1">
            <div className="px-2 font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10.5px]">
              {category}
            </div>
            <div className="space-y-0.5">
              {items.map((topic) => {
                const href = `/topics/${topic.slug}`;
                const isActive = pathname === href;

                return (
                  <Link
                    key={topic.slug}
                    href={href}
                    onClick={() => onSelectTopic && onSelectTopic()}
                    className={`group flex items-center justify-between rounded-md px-2.5 py-1.5 transition-colors ${
                      isActive
                        ? 'bg-brand-50 font-bold text-brand-600 dark:bg-brand-950/60 dark:text-brand-400'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    <span className="font-mono font-medium truncate">{topic.title}</span>
                    <span
                      className={`font-mono text-[10px] ${
                        isActive ? 'text-brand-600 dark:text-brand-400' : 'text-zinc-400'
                      }`}
                    >
                      {topic.number}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
