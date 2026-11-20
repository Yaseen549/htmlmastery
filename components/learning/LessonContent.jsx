import React from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle } from 'lucide-react';
import CodeBlock from './CodeBlock';
import EducationalTable from './EducationalTable';
import Callout from './Callout';
import TopicPagination from './TopicPagination';
import HtmlDemoSandbox from './HtmlDemoSandbox';

export default function LessonContent({
  lesson,
  highlightedCodes = {},
  prevTopic = null,
  nextTopic = null,
}) {
  if (!lesson) return null;

  return (
    <article className="min-w-0 flex-1 px-4 py-8 sm:px-8 sm:py-10 lg:px-12 max-w-4xl xl:max-w-5xl mx-auto w-full">
      {/* Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center space-x-1.5 text-xs text-zinc-400">
        <Link href="/" className="hover:text-brand-600 dark:hover:text-brand-400">
          Home
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/topics" className="hover:text-brand-600 dark:hover:text-brand-400">
          Elements
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="font-medium text-zinc-700 dark:text-zinc-200">
          Lesson {lesson.number}: {lesson.title}
        </span>
      </nav>

      {/* Lesson Header */}
      <header className="mb-8 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <div className="flex items-center space-x-2 text-xs font-semibold text-brand-600 dark:text-brand-400">
          <span>Element #{lesson.number}</span>
          <span>·</span>
          <span>{lesson.category}</span>
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl font-mono dark:text-white">
          {lesson.title}
        </h1>
        {lesson.subtitle && (
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {lesson.subtitle}
          </p>
        )}
      </header>

      {/* Lesson Sections */}
      <div className="space-y-10">
        {lesson.sections.map((section, sIdx) => {
          return (
            <section
              key={section.id || sIdx}
              id={section.id}
              className="scroll-mt-20 space-y-4"
            >
              {/* Section Heading */}
              <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center space-x-2">
                <span>{section.title}</span>
              </h2>

              {/* Lead Text */}
              {section.lead && (
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  {section.lead}
                </p>
              )}

              {/* Paragraphs */}
              {section.paragraphs && (
                <div className="space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Syntax Card */}
              {section.syntax && (
                <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <div className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    Syntax
                  </div>
                  <code className="font-mono text-sm font-bold text-brand-700 dark:text-brand-400">
                    {section.syntax}
                  </code>
                  {section.syntaxNote && (
                    <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
                      {section.syntaxNote}
                    </p>
                  )}
                </div>
              )}

              {/* Attributes Table */}
              {section.type === 'attributes-table' && section.rows && (
                <EducationalTable
                  headers={section.headers || ['Attribute', 'Type', 'Default', 'Description']}
                  rows={section.rows}
                  highlightCol={0}
                />
              )}

              {/* Standard List Items */}
              {section.items && (
                <ul className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50/50 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300">
                  {section.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start space-x-2.5">
                      <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Checklists / Rules */}
              {section.rules && (
                <div className="rounded-lg border border-orange-200/80 bg-orange-50/30 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                  {section.ruleTitle && (
                    <div className="mb-2 font-semibold text-brand-900 dark:text-brand-300">
                      {section.ruleTitle}
                    </div>
                  )}
                  <ul className="space-y-1.5">
                    {section.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2 text-zinc-700 dark:text-zinc-300">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Callouts */}
              {section.callout && (
                <Callout type={section.callout.type} title={section.callout.title}>
                  {section.callout.content}
                </Callout>
              )}

              {/* Code Snippet (HTML SOURCE) */}
              {section.code && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Code Example
                    </span>
                  </div>
                  <CodeBlock
                    code={section.code}
                    highlightedHtml={highlightedCodes[section.id]}
                    language="html"
                    title={section.codeTitle || `${lesson.title} Markup`}
                  />
                </div>
              )}

              {/* Native Browser Output (UNSTYLED HTML PREVIEW) */}
              {section.demo && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      Live Output
                    </span>
                  </div>
                  <HtmlDemoSandbox demo={section.demo} slug={lesson.slug} />
                </div>
              )}
            </section>
          );
        })}
      </div>

      {/* Pagination (Previous / Next Lesson) */}
      <TopicPagination prev={prevTopic} next={nextTopic} />
    </article>
  );
}
