'use client';

import React, { useEffect, useState } from 'react';
import HtmlDemoSandbox from '../learning/HtmlDemoSandbox';
import { Eye, Bookmark, Sparkles } from 'lucide-react';

export default function RightWorkbench({
  demo,
  slug,
  sections = [],
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');
  const [tab, setTab] = useState('demo'); // demo | toc

  // Intersection observer for table of contents scroll-spy
  useEffect(() => {
    if (sections.length === 0) return;

    const scrollContainer = document.getElementById('reading-canvas');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: scrollContainer || null,
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden xl:flex flex-col w-80 2xl:w-[420px] shrink-0 border-l border-zinc-200/80 bg-zinc-50/40 dark:border-zinc-800 dark:bg-surface-darkSurface/30 h-full min-h-0">
      {/* Workbench Header Tabs */}
      <div className="flex items-center justify-between border-b border-zinc-200/80 bg-white/90 px-4 py-2.5 dark:border-zinc-800 dark:bg-surface-darkSurface/90">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setTab('demo')}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
              tab === 'demo'
                ? 'bg-brand-50 text-brand-700 shadow-2xs dark:bg-brand-950/60 dark:text-brand-300'
                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <Eye className="h-3.5 w-3.5 text-brand-500" />
            <span>Live Demo</span>
          </button>
          <button
            onClick={() => setTab('toc')}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
              tab === 'toc'
                ? 'bg-brand-50 text-brand-700 shadow-2xs dark:bg-brand-950/60 dark:text-brand-300'
                : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5 text-brand-500" />
            <span>On This Page</span>
          </button>
        </div>

        <span className="flex items-center space-x-1 text-[10px] font-mono font-bold text-zinc-400 uppercase">
          <Sparkles className="h-3 w-3 text-brand-500" />
          <span>Workbench</span>
        </span>
      </div>

      {/* Workbench Content Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Sticky Live Demo Sandbox Panel */}
        {tab === 'demo' || tab === 'both' ? (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Interactive Preview
              </span>
              <span className="text-[10px] font-mono text-brand-600 dark:text-brand-400">
                Real-time DOM
              </span>
            </div>
            <HtmlDemoSandbox demo={demo} slug={slug} />
          </div>
        ) : null}

        {/* Table of Contents Section */}
        {(tab === 'toc' || tab === 'both') && sections.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Sections in Lesson
            </h4>
            <nav className="space-y-1 text-xs">
              {sections.map((sec) => {
                const isActive = activeId === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(sec.id);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        setActiveId(sec.id);
                      }
                    }}
                    className={`block py-1.5 px-2.5 transition-all truncate rounded-lg ${
                      isActive
                        ? 'border-l-2 border-brand-500 bg-brand-50/80 font-semibold text-brand-700 dark:bg-brand-950/50 dark:text-brand-300'
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/40'
                    }`}
                  >
                    {sec.title}
                  </a>
                );
              })}
            </nav>
          </div>
        )}

        {/* When in Demo tab, also show minimal TOC below sandbox */}
        {tab === 'demo' && sections.length > 0 && (
          <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Quick Navigation
            </h4>
            <div className="space-y-1 text-xs">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(sec.id);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setActiveId(sec.id);
                    }
                  }}
                  className={`block py-1 px-2 rounded text-[11.5px] truncate transition ${
                    activeId === sec.id
                      ? 'text-brand-600 font-semibold dark:text-brand-400'
                      : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  • {sec.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
