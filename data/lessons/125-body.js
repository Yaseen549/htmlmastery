export const bodyLesson = {
  slug: 'body',
  number: '125',
  title: '<body>',
  category: 'Document Metadata & Root',
  subtitle: 'Represents the main content body of an HTML document enclosing all visible content',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Document Body',
      paragraphs: [
        'The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document.',
        'It contains all visible elements: headings, paragraphs, images, hyperlinks, tables, lists, and forms.',
        'User-agent stylesheets apply a default margin of 8px (margin: 8px) to the body element in all major browsers.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<!DOCTYPE html>\n<html lang="en">\n  <head><title>Title</title></head>\n  <body>\n    <!-- All document content goes here -->\n  </body>\n</html>',
      syntaxNote: 'Normal element requiring opening and closing tags. Exactly one <body> per HTML document.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['onafterprint', 'Event handler', 'Standard', 'Fired after the user has printed or closed print dialog.'],
        ['onbeforeprint', 'Event handler', 'Standard', 'Fired before document is about to be printed.'],
        ['onbeforeunload', 'Event handler', 'Standard', 'Fired before window/document is unloaded.'],
        ['ononline / onoffline', 'Event handler', 'Standard', 'Fired when network connectivity changes.'],
        ['bgcolor / text / link', 'Color string', 'Obsolete in HTML5', 'Obsolete; use CSS background-color and color.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Document Body Structure',
      type: 'code-example',
      codeTitle: 'Top-Level Document Hierarchy',
      code: `<!-- <body> contains all visible HTML structure -->
<header>
  <h1>Document Title Inside Body</h1>
</header>
<main>
  <p>All human-visible markup resides exclusively inside the &lt;body&gt; tag.</p>
</main>
<footer>
  <p>&copy; 2026 Example Corp.</p>
</footer>`,
      demo: {
        title: 'Native Browser Output',
        html: `<header>
  <h1>Document Title Inside Body</h1>
</header>
<main>
  <p>All human-visible markup resides exclusively inside the &lt;body&gt; tag.</p>
</main>
<footer>
  <p>&copy; 2026 Example Corp.</p>
</footer>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Document Root Semantics',
      type: 'list',
      items: [
        'Screen readers begin reading page content at the top of <body>.',
        'Always structure the direct children of <body> with accessible landmark tags (<header>, <nav>, <main>, <footer>).',
        'Only one <body> tag is permitted in any HTML document.',
      ],
      callout: {
        type: 'important',
        title: 'Only One <body>',
        content: 'Having multiple `<body>` elements is invalid HTML and causes HTML parsers to ignore the second body tag.',
      },
    },
  ],
};
