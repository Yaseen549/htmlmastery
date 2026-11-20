export const sectionLesson = {
  slug: 'section',
  number: '13',
  title: '<section>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Represents a generic standalone thematic grouping of content, typically introduced by a heading',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Thematic Grouping',
      paragraphs: [
        'The <section> HTML element represents a generic standalone section of a document, which doesn\'t have a more specific semantic element to represent it. Sections should always represent a thematic grouping of content, typically with a heading.',
        'A <section> should NOT be used simply as a wrapper container for styling purposes or scripting hooks. When a container is needed purely for CSS styling or layout positioning, use a generic <div> instead.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<section aria-labelledby="sec-title"> <h2 id="sec-title">Title</h2> ... </section>',
      syntaxNote: 'Normal element requiring both start and closing tags. Every section should almost always contain an <h2> - <h6> heading.',
    },
    {
      id: 'attributes',
      title: 'ARIA Landmark Behavior & Attributes',
      type: 'attributes-table',
      headers: ['Condition', 'Implicit Role', 'Screen Reader Landmark', 'Recommendation'],
      rows: [
        ['Without accessible name', 'generic', 'Not announced as landmark', 'Treated as an unlabelled container.'],
        ['With aria-labelledby or aria-label', 'region', 'Announced as region landmark', 'Screen reader users can jump to it directly.'],
        ['Global attributes', 'Supported', 'Applies standard global attributes', 'Use id for in-page anchor links.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Thematic Sectioning',
      type: 'code-example',
      codeTitle: 'Properly Labeled Region Landmark',
      code: `<section aria-labelledby="features-heading">
  <h2 id="features-heading">Platform Features</h2>
  <p>Sections group related thematic content.</p>

  <h3>Native Demonstrations</h3>
  <p>Unstyled browser rendering without author CSS.</p>

  <h3>Semantic Outlines</h3>
  <p>Clear heading trees for assistive technologies.</p>
</section>`,
      demo: {
        title: 'Native Browser Output',
        html: `<section aria-labelledby="features-heading">
  <h2 id="features-heading">Platform Features</h2>
  <p>Sections group related thematic content.</p>

  <h3>Native Demonstrations</h3>
  <p>Unstyled browser rendering without author CSS.</p>

  <h3>Semantic Outlines</h3>
  <p>Clear heading trees for assistive technologies.</p>
</section>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Thematic Rules',
      type: 'list',
      items: [
        'To expose <section> as an accessible landmark, you MUST provide an accessible name via aria-labelledby pointing to its heading, or using aria-label.',
        'Do not use <section> as a generic container for styling: W3C guidelines state "If an element is needed only for styling or scripting, authors are encouraged to use the div element instead."',
        'Each <section> should be listed in the natural document outline through its child heading.',
      ],
      callout: {
        type: 'warning',
        title: 'Section vs Div Misuse',
        content: 'Replacing every <div> with <section> is an anti-pattern. Only use <section> when the content naturally warrants an entry in the document table of contents.',
      },
    },
  ],
};
