'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { topics } from '../../data/topics';
import { usePlatformShortcut } from '../../lib/usePlatformShortcut';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef(null);
  const { shortcutKey } = usePlatformShortcut();

  const filteredTopics = topics.filter((t) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      t.title.toLowerCase().includes(q) ||
      t.shortDesc.toLowerCase().includes(q) ||
      t.slug.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.number.includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredTopics.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredTopics.length - 1
      );
    } else if (e.key === 'Enter' && filteredTopics[selectedIndex]) {
      e.preventDefault();
      onClose();
      router.push(`/topics/${filteredTopics[selectedIndex].slug}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:p-20">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog Box */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search HTML5 tags"
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl transition-all dark:border-zinc-800 dark:bg-surface-dark"
      >
        {/* Search Header Input */}
        <div className="flex items-center border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <Search className="h-5 w-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search tags (e.g., <dialog>, input, form, ruby)..."
            className="ml-3 flex-1 bg-transparent text-sm text-zinc-900 placeholder-zinc-400 focus:outline-hidden dark:text-zinc-100"
          />
          <kbd className="hidden sm:inline-block rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-mono text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800">
            ESC
          </kbd>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="ml-2 rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 sm:hidden dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filteredTopics.length === 0 ? (
            <div className="py-12 text-center text-sm text-zinc-400">
              No HTML5 tags found matching "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              {filteredTopics.map((topic, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <Link
                    key={topic.slug}
                    href={`/topics/${topic.slug}`}
                    onClick={onClose}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs transition-all ${
                      isSelected
                        ? 'bg-brand-50 text-brand-900 dark:bg-brand-950/60 dark:text-brand-200'
                        : 'text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 font-mono text-[11px] font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {topic.number}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-bold text-brand-700 dark:text-brand-400">
                            {topic.title}
                          </span>
                          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                            {topic.category}
                          </span>
                        </div>
                        <p className="truncate text-[11px] text-zinc-500 dark:text-zinc-400">
                          {topic.shortDesc}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <ArrowRight className="h-4 w-4 text-brand-600 shrink-0 ml-2 dark:text-brand-400" />
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Shortcuts */}
        <div className="flex items-center justify-between border-t border-zinc-200 bg-zinc-50/70 px-4 py-2.5 text-[11px] text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex items-center space-x-3">
            <span>
              <kbd className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">
                ↑
              </kbd>{' '}
              <kbd className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">
                ↓
              </kbd>{' '}
              Navigate
            </span>
            <span>
              <kbd className="rounded border border-zinc-200 bg-white px-1 py-0.5 font-mono text-[10px] dark:border-zinc-700 dark:bg-zinc-800">
                ↵
              </kbd>{' '}
              Select
            </span>
          </div>
          <span>Showing {filteredTopics.length} of {topics.length} tags</span>
        </div>
      </div>
    </div>
  );
}
