export const ttLesson = {
  slug: 'tt',
  number: '117',
  title: '<tt>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated teletype monospace element; obsolete in HTML5, replaced with <code>, <samp>, or <kbd>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <tt> (Teletype Text) HTML element created inline text which was presented using the user agent\'s default monospace font face.',
        'It was created in the earliest days of HTML to mimic physical teletype terminals and typewriters. It is obsolete in HTML5.',
        'HTML5 replaces <tt> with semantic elements: `<code>` for computer code, `<kbd>` for user input/keystrokes, `<samp>` for program output, or `<var>` for mathematical variables.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Presentational Element -->\n<tt>print("Hello")</tt>\n\n<!-- Standard Modern HTML5 Replacements -->\n<code>const x = 10;</code>\n<kbd>Ctrl + C</kbd>\n<samp>Error: Not Found</samp>',
      syntaxNote: 'Obsolete element. Fails HTML5 validation.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Obsolete', 'Only global attributes applied.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Historical Teletype Rendering',
      type: 'code-example',
      codeTitle: 'Monospace Teletype in Modern Browsers',
      code: `<p>
  Standard text next to <tt>teletype monospace text</tt>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Standard text next to <tt>teletype monospace text</tt>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Semantic Monospace Elements',
      type: 'list',
      items: [
        '<code>: Represents programming source code.',
        '<kbd>: Represents user keyboard/voice input.',
        '<samp>: Represents computer/terminal output.',
        'CSS `font-family: monospace`: For purely aesthetic monospace styling.',
      ],
      callout: {
        type: 'tip',
        title: 'True Semantics',
        content: 'Modern screen readers give distinct pronunciation cues to `<code>`, `<kbd>`, and `<samp>` that generic `<tt>` could never convey.',
      },
    },
  ],
};
