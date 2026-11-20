export const baseLesson = {
  slug: 'base',
  number: '08',
  title: '<base>',
  category: 'Document Metadata & Root',
  subtitle: 'Specifies the base URL and target frame for all relative URLs in a document',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'URL Resolution',
      paragraphs: [
        'The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one single <base> element in a document, and it must be inside the <head> element.',
        'When present, relative links (e.g., <a href="about.html">, <img src="logo.png">) are resolved relative to the <base href> URL rather than the current address in the browser bar.',
        'Additionally, <base target="_blank"> causes all links on the entire page to open in a new tab by default unless overridden locally.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<base href="https://example.com/assets/" target="_blank">',
      syntaxNote: 'Void element with no closing tag. Must precede any elements that have attributes with URLs (e.g., before <link> or <script>).',
    },
    {
      id: 'attributes',
      title: 'Attributes Reference Table',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Default', 'Description'],
      rows: [
        ['href', 'Absolute / Relative URL', 'Document URL', 'The base URL for relative URLs throughout the document. Trailing slash is critical.'],
        ['target', '_self | _blank | _parent | _top', '_self', 'Default browsing context name where hyperlinked documents and forms will open.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Base URL Resolution Example',
      type: 'code-example',
      codeTitle: 'Configuring Global Path and Link Targets',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <base href="https://example.com/" target="_blank">
  <title>Base URL Demonstration</title>
</head>
<body>
  <h1>Base URL Navigation</h1>
  <p>Clicking the link below resolves relative to https://example.com/ and opens in a new tab:</p>
  <p><a href="docs/manual.html">View Documentation Manual</a></p>
</body>
</html>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h1>Base URL Navigation</h1>
<p>Clicking the link below resolves relative to https://example.com/ and opens in a new tab:</p>
<p><a href="https://example.com/docs/manual.html" target="_blank">View Documentation Manual</a></p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Potential Pitfalls & Best Practices',
      type: 'list',
      items: [
        'Only exactly ONE <base> element is permitted per document. Multiple <base> tags are ignored.',
        'Beware of in-page fragment identifiers (<a href="#section-1">). If <base href="https://example.com/sub/"> is set, clicking #section-1 will navigate to https://example.com/sub/#section-1 rather than scrolling the current view.',
        'Must appear in <head> BEFORE any element that uses a relative URL (such as external stylesheets or scripts).',
      ],
      callout: {
        type: 'warning',
        title: 'Anchor Hash Navigation Conflict',
        content: '<base href="..."> alters internal anchor links like <a href="#heading">. Modern single-page applications generally avoid <base> to prevent breaking hash-based navigation.',
      },
    },
  ],
};
