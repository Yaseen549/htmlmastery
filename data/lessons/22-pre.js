export const preLesson = {
  slug: 'pre',
  number: '22',
  title: '<pre>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents preformatted text where whitespace, tabs, and line breaks are preserved exactly',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Preformatted',
      paragraphs: [
        'The <pre> HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional ("monospace") font.',
        'Whitespace, indentations, and line breaks inside <pre> are preserved verbatim by the browser, unlike normal HTML elements which collapse consecutive spaces and line breaks into a single space.',
        'It is commonly used to present computer code snippets, ASCII art, or structured tabular data.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<pre>Line 1\n  Indented Line 2\nLine 3</pre>',
      syntaxNote: 'Normal element requiring both start and closing tags. Frequently combined with <code> as <pre><code>...</code></pre>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['wrap', 'soft | hard | off', 'Non-standard', 'Historical attribute. Use CSS white-space: pre-wrap instead.'],
        ['width', 'Integer', 'Obsolete in HTML5', 'Historical attribute specifying character width.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, style, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Preserved Whitespace & Code Example',
      type: 'code-example',
      codeTitle: 'Exact Whitespace and Monospace Display',
      code: `<pre>
  Function: calculateArea
  =======================
  Input:  radius = 5
  Output: area   = 78.54

  Formula: π * r²
</pre>`,
      demo: {
        title: 'Native Browser Output',
        html: `<pre>
  Function: calculateArea
  =======================
  Input:  radius = 5
  Output: area   = 78.54

  Formula: π * r²
</pre>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Best Practices',
      type: 'list',
      items: [
        'Screen readers read text inside <pre> sequentially. When displaying ASCII art, provide an aria-label or accessible text description for blind users.',
        'Remember that HTML entity characters (<, >, &) must still be escaped inside <pre> as &lt;, &gt;, and &amp;.',
        'By default, long lines inside <pre> do not wrap and may cause horizontal overflow unless CSS white-space: pre-wrap is applied.',
      ],
      callout: {
        type: 'tip',
        title: 'Combining <pre> and <code>',
        content: 'To represent a multi-line block of computer source code, standard HTML semantics mandate nesting <code> inside <pre>: <pre><code>function hello() {}</code></pre>.',
      },
    },
  ],
};
