'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Sparkles,
  Copy,
  Check,
  Info,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { htmlEntities, entityCategories } from '../../data/entities';
import DocShell from '../../components/layout/DocShell';
import Footer from '../../components/layout/Footer';

export default function EntitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedKey, setCopiedKey] = useState(null);

  const filteredEntities = useMemo(() => {
    return htmlEntities.filter((item) => {
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        searchTerm === '' ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.character.toLowerCase().includes(q) ||
        item.numberDec.toLowerCase().includes(q) ||
        item.numberHex.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleCopy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <DocShell>
      <main className="flex-1 px-4 py-10 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full">
        {/* Header */}
        <header className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            HTML Character Entities
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            Special characters like <code>&lt;</code> and <code>&gt;</code> have special meaning in HTML. Use entity codes to display them safely without breaking your page layout.
          </p>
        </header>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search entities (e.g. &amp;copy;, euro, &lt;, &gt;, arrow)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white pl-10 pr-4 py-2 text-xs text-zinc-800 placeholder-zinc-400 focus:border-brand-500 focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:placeholder-zinc-500"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {entityCategories.map((cat) => {
              const count =
                cat === 'All'
                  ? htmlEntities.length
                  : htmlEntities.filter((e) => e.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-brand-500 text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span>
            Showing {filteredEntities.length} of {htmlEntities.length} entities
          </span>
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="text-brand-600 hover:underline dark:text-brand-400"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Entities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEntities.length === 0 ? (
            <div className="col-span-full rounded-lg border border-dashed border-zinc-200 p-8 text-center text-zinc-500 dark:border-zinc-800">
              No character entities match &ldquo;{searchTerm}&rdquo;. Try another search keyword.
            </div>
          ) : (
            filteredEntities.map((item, idx) => {
              const nameKey = `${item.name}-${idx}`;
              const charKey = `char-${idx}`;

              return (
                <div
                  key={idx}
                  className="rounded-lg border border-zinc-200 bg-white p-4 transition hover:border-brand-500 dark:border-zinc-800 dark:bg-zinc-900 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Glyph + Category */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 font-serif text-2xl text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
                        {item.character || <span className="text-zinc-400 text-xs">space</span>}
                      </div>
                      <span className="rounded bg-orange-50 px-2 py-0.5 text-[10px] font-medium text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                        {item.category}
                      </span>
                    </div>

                    {/* Entity Name */}
                    <div className="mt-3">
                      <div className="font-mono text-sm font-bold text-brand-600 dark:text-brand-400">
                        {item.name}
                      </div>
                      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Codes */}
                    <div className="mt-3 flex items-center space-x-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                      <span>Dec: {item.numberDec}</span>
                      <span>·</span>
                      <span>Hex: {item.numberHex}</span>
                    </div>
                  </div>

                  {/* Copy Action Buttons */}
                  <div className="mt-4 flex items-center gap-2 border-t border-zinc-100 pt-3 dark:border-zinc-800/80">
                    <button
                      type="button"
                      onClick={() => handleCopy(item.name, nameKey)}
                      className="flex-1 inline-flex items-center justify-center space-x-1 rounded bg-zinc-100 py-1 px-2 text-xs font-mono text-zinc-700 hover:bg-brand-50 hover:text-brand-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 transition"
                      title="Copy entity code (e.g. &amp;copy;)"
                    >
                      {copiedKey === nameKey ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-500" />
                          <span className="text-green-600 dark:text-green-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>{item.name}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.character, charKey)}
                      className="inline-flex items-center justify-center rounded border border-zinc-200 py-1 px-2 text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition"
                      title="Copy raw character glyph"
                    >
                      {copiedKey === charKey ? (
                        <Check className="h-3.5 w-3.5 text-green-500" />
                      ) : (
                        <span>Glyph</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Note */}
        <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50/50 p-5 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400">
          <div className="flex items-center space-x-2 text-zinc-900 dark:text-white font-semibold mb-2">
            <Info className="h-4 w-4 text-brand-500" />
            <span>When to use HTML entities</span>
          </div>
          <p className="leading-relaxed">
            Browsers treat <code>&lt;</code> and <code>&gt;</code> as tag delimiters. To display <code>&lt;p&gt;</code> as visible text instead of starting a paragraph, use <code>&amp;lt;p&amp;gt;</code>. Entities also let you display symbols not present on standard keyboards, such as copyright (<code>&amp;copy;</code>) or currency signs (<code>&amp;euro;</code>).
          </p>
        </div>
      </main>

      <Footer />
    </DocShell>
  );
}
