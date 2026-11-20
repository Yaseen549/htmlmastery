export const asideLesson = {
  slug: 'aside',
  number: '14',
  title: '<aside>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Represents a portion of a document whose content is only indirectly related to the main content',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Complementary Landmark',
      paragraphs: [
        'The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document\'s main content. Asides are frequently represented as sidebars or call-out boxes.',
        'Examples include sidebars, advertising banners, glossary entries, groups of related links, pull quotes, or author profile widgets.',
        'When placed inside an <article>, the aside content must be related specifically to that article (like a glossary of terms used in the article). When placed outside any article, it relates to the whole page (like a site-wide sidebar).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<aside aria-label="Related Topics"> ... complementary content ... </aside>',
      syntaxNote: 'Normal element requiring both opening <aside> and closing </aside> tags.',
    },
    {
      id: 'attributes',
      title: 'ARIA Roles & Placement Context',
      type: 'attributes-table',
      headers: ['Context / Property', 'Implicit Role', 'Relationship', 'Usage Examples'],
      rows: [
        ['Inside <article>', 'complementary', 'Indirectly related to the article topic', 'Glossary term definitions, author bio, pull quotes.'],
        ['Directly inside <body>', 'complementary', 'Indirectly related to the whole page', 'Site sidebar, related popular posts, ad banners.'],
        ['aria-label', 'Recommended', 'Labels the complementary landmark', 'Prevents confusion when multiple asides exist on one page.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Article with Complementary Aside',
      type: 'code-example',
      codeTitle: 'Article Content with Embedded Aside',
      code: `<article>
  <h2>Web Accessibility Fundamentals</h2>
  <p>Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.</p>

  <aside aria-label="Glossary">
    <h3>Glossary: Screen Reader</h3>
    <p>A software application that converts digital text into synthesized speech or Braille output.</p>
  </aside>

  <p>Following semantic structure ensures screen readers navigate cleanly.</p>
</article>`,
      demo: {
        title: 'Native Browser Output',
        html: `<article>
  <h2>Web Accessibility Fundamentals</h2>
  <p>Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.</p>

  <aside aria-label="Glossary">
    <h3>Glossary: Screen Reader</h3>
    <p>A software application that converts digital text into synthesized speech or Braille output.</p>
  </aside>

  <p>Following semantic structure ensures screen readers navigate cleanly.</p>
</article>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Landmark Guidelines',
      type: 'list',
      items: [
        'The <aside> element has an implicit ARIA role="complementary", exposing it as a distinct landmark to screen readers.',
        'Users can choose to read the main content first and jump to complementary content later using screen reader landmark commands.',
        'Never use <aside> for content that is crucial to understanding the main article text; if the content is required for the main argument, it belongs in the main flow.',
      ],
      callout: {
        type: 'tip',
        title: 'Pull Quotes in Aside',
        content: '<aside> is the ideal container for typographic pull quotes and callouts that visually emphasize an interesting excerpt from the text without interrupting the narrative flow.',
      },
    },
  ],
};
