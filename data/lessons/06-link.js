export const linkLesson = {
  slug: 'link',
  number: '06',
  title: '<link>',
  category: 'Document Metadata & Root',
  subtitle: 'Specifies relationships between the current document and external resources like stylesheets and icons',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Resource Linker',
      paragraphs: [
        'The <link> HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS stylesheets, but is also used to establish site icons (both favicon style icons and icons for the home screen and apps on mobile devices) among other things.',
        'It is a void element placed within the <head> of the document. Beyond styling, <link> supports vital performance directives like preconnect, preload, and dns-prefetch.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<link rel="stylesheet" href="/styles/main.css">',
      syntaxNote: 'Void element with no closing tag. Must contain at least a rel and href attribute.',
    },
    {
      id: 'attributes',
      title: 'Primary Attributes & Rel Types',
      type: 'attributes-table',
      headers: ['Attribute / Value', 'Type', 'Purpose', 'Impact'],
      rows: [
        ['rel="stylesheet"', 'Relationship', 'Imports external CSS stylesheet file.', 'Render-blocking by default'],
        ['rel="icon"', 'Relationship', 'Specifies website browser tab favicon.', 'Visual identifier'],
        ['rel="preload"', 'Performance Hint', 'Forces high-priority early download of critical assets (fonts, hero images).', 'Speeds up LCP'],
        ['rel="preconnect"', 'Performance Hint', 'Performs early DNS lookup, TCP handshake, and TLS negotiation to cross-origins.', 'Saves 100-300ms'],
        ['rel="canonical"', 'SEO Directive', 'Declares the authoritative original URL of duplicate/parameterized pages.', 'Prevents SEO duplication'],
        ['href', 'URL', 'Target destination address of the linked resource.', 'Required'],
        ['media', 'Media Query', 'Specifies media conditions (e.g., print, (min-width: 768px)) under which stylesheet applies.', 'Non-blocking if not matched'],
      ],
    },
    {
      id: 'code-example',
      title: 'High-Performance Link Declarations',
      type: 'code-example',
      codeTitle: 'Production Resource Linking Strategy',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <title>Resource Link Demonstration</title>
</head>
<body>
  <h1>External Resource Linking</h1>
  <p>The &lt;link&gt; element connects external assets to the document from within the &lt;head&gt;.</p>
</body>
</html>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h1>External Resource Linking</h1>
<p>The &lt;link&gt; element connects external assets to the document from within the &lt;head&gt;.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Performance & Architecture Guidelines',
      type: 'list',
      items: [
        'Place critical stylesheets high in the <head> to prevent the Flash of Unstyled Content (FOUC).',
        'When preloading fonts with rel="preload", you MUST include the crossorigin attribute, even if the font is hosted on the same origin (web fonts are always fetched with CORS).',
        'Use media queries on non-critical stylesheets (like media="print") so mobile browsers do not delay initial page render for printer styles.',
      ],
      callout: {
        type: 'tip',
        title: 'Modern SVG Favicons',
        content: '<link rel="icon" href="/icon.svg" type="image/svg+xml"> allows a single vector icon that automatically scales to any DPI screen and supports dark mode CSS directly inside the SVG!',
      },
    },
  ],
};
