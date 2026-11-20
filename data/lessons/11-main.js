export const mainLesson = {
  slug: 'main',
  number: '11',
  title: '<main>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Represents the dominant, non-repeated central content of the document body',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Core Landmark',
      paragraphs: [
        'The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.',
        'Content that is repeated across a set of documents, such as sidebars, navigation links, copyright information, site logos, and search forms, must NOT be included within the <main> element (unless the search form is the main function of the page).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<main id="main-content"> ... unique core content ... </main>',
      syntaxNote: 'Normal element requiring opening and closing tags. Exactly one visible <main> element is permitted per document.',
    },
    {
      id: 'attributes',
      title: 'Structural Constraints & ARIA Mappings',
      type: 'attributes-table',
      headers: ['Rule / Attribute', 'Constraint', 'Impact', 'Explanation'],
      rows: [
        ['Uniqueness', 'Exactly 1 visible', 'Validity', 'No more than one visible <main> element allowed per document.'],
        ['Forbidden Parents', 'No ancestors: <article>, <aside>, <footer>, <header>, <nav>', 'Syntax error', '<main> cannot be nested inside other landmark elements.'],
        ['Implicit ARIA role', 'main', 'Landmark', 'Exposes the landmark boundary to screen readers.'],
        ['id="main-content"', 'Recommended', 'Keyboard access', 'Allows skip-links to target the main content directly.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Document Landmark Flow',
      type: 'code-example',
      codeTitle: 'Separation of Header, Main, and Footer',
      code: `<header>
  <p>Header: Global Site Logo and Navigation</p>
</header>
<hr>
<main id="main-content">
  <h1>Primary Article Title</h1>
  <p>This is the dominant central content of the document body.</p>
</main>
<hr>
<footer>
  <p>Footer: Copyright &copy; 2026 Acme Corp.</p>
</footer>`,
      demo: {
        title: 'Native Browser Output',
        html: `<header>
  <p>Header: Global Site Logo and Navigation</p>
</header>
<hr>
<main id="main-content">
  <h1>Primary Article Title</h1>
  <p>This is the dominant central content of the document body.</p>
</main>
<hr>
<footer>
  <p>Footer: Copyright &copy; 2026 Acme Corp.</p>
</footer>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Skip-To-Content Accessibility Rule',
      type: 'list',
      items: [
        'WCAG 2.1 Success Criterion 2.4.1 (Bypass Blocks) requires a mechanism to bypass repeated blocks of navigation content.',
        'Pairing an <a href="#main-content"> skip link with <main id="main-content"> is the industry standard pattern to fulfill this requirement.',
        'Screen readers allow users to press shortcut keys (like "M" in NVDA/JAWS) to jump directly to the <main> element.',
      ],
      callout: {
        type: 'important',
        title: 'Single Visible <main> Rule',
        content: 'While multiple <main> elements can exist in a document if all others have hidden attributes (e.g. in single-page apps), only one <main> can be visible at any given time.',
      },
    },
  ],
};
