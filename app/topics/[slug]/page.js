import { notFound } from 'next/navigation';
import { getLessonData, getAllLessonSlugs } from '../../../data/lessons';
import { getTopicBySlug, getAdjacentTopics } from '../../../data/topics';
import { highlightCode } from '../../../lib/shiki';
import Sidebar from '../../../components/layout/Sidebar';
import TableOfContents from '../../../components/layout/TableOfContents';
import LessonContent from '../../../components/learning/LessonContent';
import Footer from '../../../components/layout/Footer';
import DocShell from '../../../components/layout/DocShell';

export async function generateStaticParams() {
  const slugs = getAllLessonSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const topic = getTopicBySlug(slug);
  if (!topic) return { title: 'Element Not Found — HTML5 Reference' };

  const title = `${topic.title} (${topic.number}) — HTML5 Complete Reference & Native Browser Demo`;
  const description =
    topic.shortDesc ||
    `Learn ${topic.title} in HTML5 with syntax rules, attributes table, accessibility guidelines, and unstyled native browser output.`;

  return {
    title,
    description,
    keywords: [topic.title, 'HTML5', 'HTML tags', 'web development', 'syntax', 'native HTML'],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/topics/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function TopicPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const lesson = getLessonData(slug);
  const topic = getTopicBySlug(slug);

  if (!lesson || !topic) {
    notFound();
  }

  // Pre-highlight all code blocks on the server using Shiki
  const highlightedCodes = {};
  for (const section of lesson.sections) {
    if (section.code) {
      highlightedCodes[section.id] = await highlightCode(section.code, 'html');
    }
  }

  const { prev, next } = getAdjacentTopics(slug);

  return (
    <DocShell fixedLayout>
      <div className="flex-1 w-full flex min-h-0 h-full overflow-hidden">
        {/* Left Column: Navigation Sidebar */}
        <Sidebar className="hidden lg:flex shrink-0 h-full border-r border-zinc-200 dark:border-zinc-800" />

        {/* Center Column: Reading Canvas (the only scroll container) */}
        <main
          id="reading-canvas"
          className="flex-1 min-w-0 h-full overflow-y-auto flex flex-col"
        >
          <div className="min-h-full flex flex-col justify-between">
            <div className="flex-1 w-full">
              <LessonContent
                lesson={lesson}
                highlightedCodes={highlightedCodes}
                prevTopic={prev}
                nextTopic={next}
              />
            </div>
            <Footer />
          </div>
        </main>

        {/* Right Column: Table of Contents */}
        {lesson.sections && lesson.sections.length > 0 && (
          <aside className="hidden xl:block w-56 2xl:w-64 shrink-0 p-6 h-full overflow-y-auto border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <TableOfContents sections={lesson.sections} />
          </aside>
        )}
      </div>
    </DocShell>
  );
}
