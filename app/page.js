import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Layers,
  Sparkles,
  Sliders,
  Globe,
  Type,
  Code2,
} from 'lucide-react';
import { topics, categories } from '../data/topics';
import Footer from '../components/layout/Footer';
import DocShell from '../components/layout/DocShell';

export default function HomePage() {
  const featuredTopics = topics.slice(0, 8);

  const keyHighlights = [
    {
      title: 'All 134 HTML Tags',
      desc: 'Complete documentation for every HTML tag with syntax, attributes, and examples.',
      icon: Layers,
    },
    {
      title: 'Real Browser Previews',
      desc: 'See how elements look by default without extra CSS or frameworks.',
      icon: Sliders,
    },
    {
      title: 'Accessibility Guides',
      desc: 'Built-in ARIA roles, keyboard navigation, and screen reader tips.',
      icon: Globe,
    },
  ];

  return (
    <DocShell>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-zinc-200 bg-zinc-50/50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 dark:border-zinc-800 dark:bg-zinc-900/30">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-900/60 dark:bg-brand-950/40 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              <span>Complete HTML5 Reference</span>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-white">
              The Complete HTML5 <br />
              <span className="text-brand-500">
                Reference & Learning Guide
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
              A simple, clean reference covering every HTML tag, its attributes, accessibility rules, and real browser output.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/topics/doctype"
                className="inline-flex items-center space-x-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-brand-600 transition"
              >
                <span>Start with &lt;!DOCTYPE&gt;</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/topics"
                className="inline-flex items-center space-x-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 shadow-xs hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 transition"
              >
                <BookOpen className="h-4 w-4 text-zinc-500" />
                <span>Browse All Tags ({topics.length})</span>
              </Link>
            </div>

            {/* Minimal Stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-8 sm:grid-cols-4 dark:border-zinc-800">
              <div>
                <div className="text-2xl font-black text-brand-500">{topics.length}</div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">HTML Tags</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-500">22</div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Input Types</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-500">10</div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Categories</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-500">100%</div>
                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">Live Previews</div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Highlights */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {keyHighlights.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Elements Grid */}
        <section className="border-t border-zinc-200 bg-zinc-50/50 px-4 py-16 sm:px-6 lg:px-8 dark:border-zinc-800 dark:bg-zinc-900/20">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  Popular HTML Tags
                </h2>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Explore common tags with code examples and live browser output.
                </p>
              </div>
              <Link
                href="/topics"
                className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
              >
                <span>View all tags</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/topics/${topic.slug}`}
                  className="group rounded-lg border border-zinc-200 bg-white p-4 transition hover:border-brand-500 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                      {topic.title}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400">
                      #{topic.number}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs text-zinc-600 dark:text-zinc-400">
                    {topic.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Tools & Dedicated References */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Helpful Tools & Reference
            </h2>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Explore global attributes, character entities, and the interactive HTML playground.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/attributes"
              className="group rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-brand-500 dark:border-zinc-800 dark:bg-zinc-900 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400 mb-4">
                  <Sliders className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  Global Attributes
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Attributes you can use on any HTML tag, including <code>id</code>, <code>class</code>, <code>hidden</code>, and <code>popover</code>.
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                <span>Explore attributes</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            <Link
              href="/entities"
              className="group rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-brand-500 dark:border-zinc-800 dark:bg-zinc-900 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400 mb-4">
                  <Type className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  Character Entities
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Quick lookup and copy for special symbols, math signs, currency, and characters like &lt; and &gt;.
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                <span>Browse entities</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            <Link
              href="/playground"
              className="group rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-brand-500 dark:border-zinc-800 dark:bg-zinc-900 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400 mb-4">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  HTML Playground
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Write and preview HTML in a live sandbox with desktop and mobile views.
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
                <span>Launch playground</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </DocShell>
  );
}
