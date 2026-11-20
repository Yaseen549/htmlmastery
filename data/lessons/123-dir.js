export const dirLesson = {
  slug: 'dir',
  number: '123',
  title: '<dir>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated directory listing element; obsolete in HTML5, replaced with <ul>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <dir> (Directory List) HTML element was designed in HTML 2.0 to represent a directory list of file names or paths, intended to be rendered in multi-column compact format.',
        'In practice, browsers rendered it identically to an unordered list (`<ul>`), and authors rarely used it.',
        'It was deprecated in HTML 4 and made completely obsolete in HTML5. Use `<ul>` (unordered list) for all directory or file listings.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 2.0 Directory List -->\n<dir>\n  <li>file1.txt</li>\n  <li>file2.txt</li>\n</dir>\n\n<!-- Standard Modern HTML5 Replacement -->\n<ul>\n  <li>file1.txt</li>\n  <li>file2.txt</li>\n</ul>',
      syntaxNote: 'Obsolete element. Replaced completely by <ul>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Historical Purpose', 'Status', 'Modern Equivalent'],
      rows: [
        ['compact', 'Boolean hint for compact list', 'Obsolete', 'CSS padding and line-height'],
        ['Global attributes', 'Supported', 'Obsolete', 'Use on <ul>'],
      ],
    },
    {
      id: 'code-example',
      title: 'Historical Directory Rendering',
      type: 'code-example',
      codeTitle: 'Directory List in Modern Browser User-Agent',
      code: `<!-- Historical <dir> rendered as a bulleted list in modern browsers -->
<p>Directory contents:</p>
<dir>
  <li>documents/</li>
  <li>images/</li>
  <li>index.html</li>
</dir>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>Directory contents:</p>
<dir>
  <li>documents/</li>
  <li>images/</li>
  <li>index.html</li>
</dir>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Standard List Semantics',
      type: 'list',
      items: [
        'Modern browsers map `<dir>` to the exact same user-agent stylesheet rule as `<ul>`: `dir { display: block; list-style-type: disc; margin: 1em 0; padding-left: 40px; }`.',
        'Always author `<ul>` instead to ensure standard HTML5 validation compliance.',
      ],
      callout: {
        type: 'tip',
        title: 'Use <ul>',
        content: 'Replace any legacy `<dir>` tags with standard `<ul>` list elements.',
      },
    },
  ],
};
