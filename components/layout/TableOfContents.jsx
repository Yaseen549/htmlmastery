'use client';

import React, { useEffect, useState } from 'react';

export default function TableOfContents({ sections = [], className = '' }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '');

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

  if (!sections || sections.length === 0) return null;

  return (
    <div className={`space-y-2 text-xs ${className}`}>
      <div className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider text-[11px] uppercase">
        On this page
      </div>
      <nav className="space-y-1">
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
              className={`block py-1 px-2 rounded truncate transition-colors ${
                isActive
                  ? 'border-l-2 border-brand-500 font-semibold text-brand-600 dark:text-brand-400 bg-brand-50/50 dark:bg-brand-950/30'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
              }`}
            >
              {sec.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
