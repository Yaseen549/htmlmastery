export const headerLesson = {
  slug: 'header',
  number: '09',
  title: '<header>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Represents introductory content, branding, navigational aids, and heading groupings',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Landmark',
      paragraphs: [
        'The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements, but can also contain a logo, a search form, an author name, and other elements.',
        'A document can contain multiple <header> elements. When placed directly inside <body>, it represents the primary site-wide header. When placed inside an <article> or <section>, it represents the header specific to that section.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<header> <h1>Site Title</h1> <nav>...</nav> </header>',
      syntaxNote: 'Normal element requiring both start and closing tags. Cannot be a descendant of an <address>, <footer>, or another <header>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & ARIA Roles',
      type: 'attributes-table',
      headers: ['Context / Property', 'Implicit ARIA Role', 'Behavior', 'Guidelines'],
      rows: [
        ['Direct child of <body>', 'banner', 'Acts as the primary landmark header for the entire web page.', 'Should only occur once per page as the banner.'],
        ['Inside <article> / <section>', 'generic', 'Represents introductory content for that specific container.', 'Does not create a top-level banner landmark.'],
        ['Global attributes', 'Supported', 'All global attributes (id, class, style) apply.', 'Often styled with sticky or fixed positions.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Header Markup Structure',
      type: 'code-example',
      codeTitle: 'Top-Level Site Header with Branding & Navigation',
      code: `<header>
  <h1>Acme Corporation</h1>
  <p>Building the modern web.</p>
  <nav aria-label="Main Navigation">
    <a href="#">Home</a> |
    <a href="#">Features</a> |
    <a href="#">Pricing</a> |
    <a href="#">Contact</a>
  </nav>
</header>
<hr>
<main>
  <p>Main page content begins here.</p>
</main>`,
      demo: {
        title: 'Native Browser Output',
        html: `<header>
  <h1>Acme Corporation</h1>
  <p>Building the modern web.</p>
  <nav aria-label="Main Navigation">
    <a href="#">Home</a> |
    <a href="#">Features</a> |
    <a href="#">Pricing</a> |
    <a href="#">Contact</a>
  </nav>
</header>
<hr>
<main>
  <p>Main page content begins here.</p>
</main>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Best Practices',
      type: 'list',
      items: [
        'When <header> is a direct child of <body>, screen readers expose it with the landmark role="banner", allowing blind users to jump directly to or past it using landmark shortcut keys.',
        'Do not add explicit role="banner" to <header> inside <article> or <section>, as that violates HTML-ARIA mappings.',
        'Ensure the header includes skip-to-content links (<a href="#main-content">Skip to content</a>) for keyboard navigation efficiency.',
      ],
      callout: {
        type: 'tip',
        title: 'Sectional Header Usage',
        content: 'Use <header> inside an <article> to enclose the article <h1>, publication date (<time>), and author info (<address>) to cleanly segregate metadata from the article body.',
      },
    },
  ],
};
