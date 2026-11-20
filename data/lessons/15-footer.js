export const footerLesson = {
  slug: 'footer',
  number: '15',
  title: '<footer>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Represents a footer for its nearest sectioning content or whole document body',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Contentinfo Landmark',
      paragraphs: [
        'The <footer> HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element (<article>, <aside>, <nav>, <section>, or <body>).',
        'A <footer> typically contains information about the author of the section, copyright data, links to related documents, terms of service, privacy policies, or back-to-top navigation controls.',
        'Like <header>, a page can contain multiple <footer> elements: one at the page level, and individual footers inside articles or cards.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<footer> <p>&copy; 2026 Acme Corp. All rights reserved.</p> </footer>',
      syntaxNote: 'Normal element requiring opening and closing tags. Cannot be a descendant of an <address> or <header>.',
    },
    {
      id: 'attributes',
      title: 'Contextual Roles & Behaviors',
      type: 'attributes-table',
      headers: ['Placement Context', 'Implicit ARIA Role', 'Semantic Scope', 'Typical Content'],
      rows: [
        ['Direct child of <body>', 'contentinfo', 'Applies to the entire web page', 'Copyright notices, legal links, site-wide sitemap, contact links.'],
        ['Inside <article> / <section>', 'generic', 'Applies only to that specific element', 'Publication timestamp, tags, author bio, social share links.'],
        ['Global attributes', 'Supported', 'Applies all standard global attributes', 'id, class, style, data-*.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Document Footer',
      type: 'code-example',
      codeTitle: 'Semantic Footer Element in Browser',
      code: `<footer>
  <p>&copy; 2026 Acme Corporation. All rights reserved.</p>
  <nav aria-label="Footer Links">
    <a href="#">Privacy Policy</a> |
    <a href="#">Terms of Use</a> |
    <a href="#">Support</a>
  </nav>
</footer>`,
      demo: {
        title: 'Native Browser Output',
        html: `<footer>
  <p>&copy; 2026 Acme Corporation. All rights reserved.</p>
  <nav aria-label="Footer Links">
    <a href="#">Privacy Policy</a> |
    <a href="#">Terms of Use</a> |
    <a href="#">Support</a>
  </nav>
</footer>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Contentinfo Rules',
      type: 'list',
      items: [
        'When <footer> is a direct child of <body>, screen readers announce it as the landmark role="contentinfo".',
        'There should only be one top-level contentinfo landmark per document.',
        'Do not add explicit role="contentinfo" to footers inside <article> or <section>, as that violates accessibility validators.',
      ],
      callout: {
        type: 'tip',
        title: 'Back-to-top Navigation',
        content: 'Placing a back-to-top anchor link (<a href="#top">Back to top</a>) inside the <footer> gives keyboard and mobile users an effortless way to return to the beginning of long articles.',
      },
    },
  ],
};
