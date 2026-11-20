'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Sliders,
  Code,
  Sparkles,
  Info,
  Layers,
  Check,
  Copy,
  AlertTriangle,
} from 'lucide-react';
import { globalAttributes, globalAttributeCategories } from '../../data/attributes';
import DocShell from '../../components/layout/DocShell';
import Footer from '../../components/layout/Footer';
import HtmlDemoSandbox from '../../components/learning/HtmlDemoSandbox';

export default function GlobalAttributesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedName, setCopiedName] = useState(null);

  const filteredAttributes = useMemo(() => {
    return globalAttributes.filter((attr) => {
      const matchesSearch =
        searchTerm === '' ||
        attr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attr.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attr.syntax.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || attr.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleCopy = async (text, name) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedName(name);
      setTimeout(() => setCopiedName(null), 2000);
    } catch (err) {
      console.error('Failed to copy attribute: ', err);
    }
  };

  return (
    <DocShell>
      <main className="flex-1 px-4 py-10 sm:px-8 lg:px-12 max-w-5xl mx-auto w-full">
        {/* Page Header */}
        <header className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Global HTML Attributes
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            Global attributes can be used on any HTML tag. They help identify elements, set language, control visibility, and configure keyboard focus.
          </p>
        </header>

        {/* Search & Filter Toolbar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search attributes (e.g. class, id, hidden, popover)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-zinc-200 bg-white pl-10 pr-4 py-2 text-xs text-zinc-800 placeholder-zinc-400 focus:border-brand-500 focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:placeholder-zinc-500"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`rounded-md px-3 py-1 text-xs font-medium transition ${
                selectedCategory === 'All'
                  ? 'bg-brand-500 text-white'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
              }`}
            >
              All ({globalAttributes.length})
            </button>
            {globalAttributeCategories.map((cat) => {
              const count = globalAttributes.filter((a) => a.category === cat).length;
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
          <span>Showing {filteredAttributes.length} of {globalAttributes.length} global attributes</span>
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

        {/* Attributes List */}
        <div className="space-y-8">
          {filteredAttributes.length === 0 ? (
            <div className="rounded-lg border border-dashed border-zinc-200 p-8 text-center text-zinc-500 dark:border-zinc-800">
              No global attributes match &ldquo;{searchTerm}&rdquo;. Try another search keyword.
            </div>
          ) : (
            filteredAttributes.map((attr) => (
              <article
                key={attr.name}
                id={attr.name}
                className="rounded-lg border border-zinc-200 bg-white p-5 sm:p-6 transition shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800/80">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-base font-bold text-brand-600 dark:text-brand-400">
                      {attr.name}
                    </span>
                    <span className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {attr.syntax}
                    </span>
                    <span className="rounded bg-orange-50 px-2 py-0.5 text-[11px] font-medium text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                      {attr.category}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(attr.syntax, attr.name)}
                    className="inline-flex items-center space-x-1 rounded px-2 py-1 text-xs text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition"
                    title="Copy attribute syntax"
                  >
                    {copiedName === attr.name ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green-500" />
                        <span className="text-green-600 dark:text-green-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {attr.description}
                </p>

                {/* Meta details */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs border-y border-zinc-100 py-3 dark:border-zinc-800/80">
                  <div>
                    <span className="font-semibold text-zinc-500 dark:text-zinc-400">Value Type: </span>
                    <span className="font-mono text-zinc-800 dark:text-zinc-200">{attr.type}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-500 dark:text-zinc-400">Default Value: </span>
                    <span className="font-mono text-zinc-800 dark:text-zinc-200">{attr.defaultValue}</span>
                  </div>
                </div>

                {/* Values accepted */}
                {attr.values && attr.values.length > 0 && (
                  <div className="mt-3">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Allowed Values
                    </h4>
                    <ul className="list-disc pl-5 space-y-0.5 text-xs text-zinc-600 dark:text-zinc-400">
                      {attr.values.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Code Example */}
                {attr.example && (
                  <div className="mt-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Example
                    </h4>
                    <div className="rounded-md border border-zinc-200 bg-zinc-950 p-3 font-mono text-xs text-zinc-100 overflow-x-auto dark:border-zinc-800">
                      <pre><code>{attr.example}</code></pre>
                    </div>
                  </div>
                )}

                {/* Interactive Native Live Demonstration if applicable */}
                {attr.interactive && attr.demoHtml && (
                  <div className="mt-4">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                      Live Preview
                    </h4>
                    <HtmlDemoSandbox
                      demo={{
                        title: `Preview: ${attr.name}`,
                        html: attr.demoHtml,
                      }}
                      slug={`attr-${attr.name}`}
                    />
                  </div>
                )}

                {/* Educational Notes / Tips */}
                {attr.notes && (
                  <div className="mt-4 flex items-start space-x-2 rounded-md bg-amber-50/70 p-3 text-xs text-amber-900 border border-amber-200/60 dark:bg-amber-950/20 dark:text-amber-200 dark:border-amber-900/40">
                    <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                    <div>
                      <strong className="font-semibold">Note: </strong>
                      <span>{attr.notes}</span>
                    </div>
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </main>

      <Footer />
    </DocShell>
  );
}
