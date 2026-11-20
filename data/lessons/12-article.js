export const articleLesson = {
  slug: 'article',
  number: '12',
  title: '<article>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Represents a self-contained composition intended to be independently distributable or reusable',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Self-Contained Content',
      paragraphs: [
        'The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication).',
        'Examples include: a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.',
        'Each <article> should typically be identified with a heading (an <h2> - <h6> element) as a child of the <article> element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<article> <h2>Title</h2> <p>Body content...</p> </article>',
      syntaxNote: 'Normal element requiring both start and closing tags. Can be nested (e.g., a blog post <article> containing user comment <article> elements).',
    },
    {
      id: 'attributes',
      title: 'Semantic Structure & Nesting Guidelines',
      type: 'attributes-table',
      headers: ['Nesting Context', 'Semantic Meaning', 'Implicit ARIA Role', 'Best Practice'],
      rows: [
        ['Top-level article', 'Primary standalone post or story', 'article', 'Include author, publish date, and heading.'],
        ['Nested article', 'Sub-content related to outer article', 'article', 'Commonly used for user comments responding to a blog post.'],
        ['Inside <feed>', 'Syndicated content feed item', 'article', 'Pairs with RSS/Atom syndication.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Article Hierarchy',
      type: 'code-example',
      codeTitle: 'Self-Contained Post with Comment Article',
      code: `<article>
  <h2>Understanding Custom Elements</h2>
  <p>Published on November 20, 2026 by Sarah.</p>
  <p>Custom elements provide a way to create your own encapsulated HTML tags.</p>

  <article>
    <h3>Reader Comment</h3>
    <p>Great introductory explanation!</p>
  </article>
</article>`,
      demo: {
        title: 'Native Browser Output',
        html: `<article>
  <h2>Understanding Custom Elements</h2>
  <p>Published on November 20, 2026 by Sarah.</p>
  <p>Custom elements provide a way to create your own encapsulated HTML tags.</p>

  <article>
    <h3>Reader Comment</h3>
    <p>Great introductory explanation!</p>
  </article>
</article>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Reader Mode Benefits',
      type: 'list',
      items: [
        'Browser "Reader Mode" (Safari Reader, Firefox Reader View) specifically targets <article> elements to extract clean reading typography.',
        'Screen readers announce each <article> landmark, allowing users to navigate directly from article to article.',
        'Always include an explicit heading (<h2> or <h3>) so the screen reader document outline is correctly structured.',
      ],
      callout: {
        type: 'tip',
        title: 'Article vs Section Rule of Thumb',
        content: 'Ask yourself: "Would this content make complete sense on its own if read in an RSS reader or shared on Twitter?" If yes, use <article>. If no, use <section>.',
      },
    },
  ],
};
