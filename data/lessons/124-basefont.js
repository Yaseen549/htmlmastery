export const basefontLesson = {
  slug: 'basefont',
  number: '124',
  title: '<basefont>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated document default font element; obsolete in HTML5, replaced with CSS styles on <body>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <basefont> HTML element established a document-wide default font face, size, and color for all subsequent text on the page.',
        'It was deprecated in HTML 4 and is completely obsolete in HTML5. All major browser engines have removed support for it.',
        'Document default typography is defined in CSS on the `body` or `html` selector: `body { font-family: sans-serif; font-size: 16px; color: #333; }`.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML Tag -->\n<basefont face="Helvetica" size="3" color="#000000">\n\n/* Modern CSS Standard Equivalent */\nbody {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  color: #000000;\n}',
      syntaxNote: 'Obsolete void element. Has no effect in modern browsers.',
    },
    {
      id: 'attributes',
      title: 'Obsolete Attributes Matrix',
      type: 'attributes-table',
      headers: ['Attribute', 'Historical Purpose', 'Status', 'Modern CSS Replacement'],
      rows: [
        ['face', 'Default font family', 'Obsolete', 'CSS font-family on body'],
        ['size', 'Default font size (1-7)', 'Obsolete', 'CSS font-size on body'],
        ['color', 'Default text color', 'Obsolete', 'CSS color on body'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern CSS Typography Best Practice',
      type: 'code-example',
      codeTitle: 'Standard Global Typography Definition',
      code: `<!-- Modern CSS standard for setting global base font -->
<p>
  In modern web development, global font styling is defined in CSS:
</p>
<pre><code>body {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #18181b;
}</code></pre>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  In modern web development, global font styling is defined in CSS:
</p>
<pre><code>body {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #18181b;
}</code></pre>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Cascading Inheritance in CSS',
      type: 'list',
      items: [
        'Setting `font-family` and `color` on `body` cascades naturally to all children elements.',
        'Users can override body styles via browser user stylesheets or high-contrast settings.',
      ],
      callout: {
        type: 'important',
        title: 'Zero Support',
        content: 'Modern browsers completely ignore `<basefont>`. Always set base typography in your global CSS stylesheet.',
      },
    },
  ],
};
