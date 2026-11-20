export const strikeLesson = {
  slug: 'strike',
  number: '116',
  title: '<strike>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated strikethrough element; obsolete in HTML5, replaced with <s> or <del>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <strike> HTML element was a presentational element that rendered text with a strikethrough or horizontal line through it.',
        'It was deprecated in HTML 4 and is completely obsolete in HTML5.',
        'HTML5 split strikethrough text into two distinct semantic elements: use `<s>` for information that is no longer accurate or relevant (such as discounted prices), and use `<del>` when recording tracked editorial changes in a document.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Presentational Element -->\n<strike>Old price: $99</strike>\n\n<!-- Standard Modern HTML5 Replacements -->\n<s>Sale: $49 (no longer accurate)</s>\n<del datetime="2026-11-20">Revoked contract clause (editorial change)</del>',
      syntaxNote: 'Obsolete element. Replaced by <s> and <del>.',
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
      title: 'Historical Strike Rendering',
      type: 'code-example',
      codeTitle: 'Strikethrough in Modern Browsers',
      code: `<p>
  Original price: <strike>$120.00</strike> <strong>Sale price: $79.00</strong>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Original price: <strike>$120.00</strike> <strong>Sale price: $79.00</strong>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Semantic Replacements',
      type: 'list',
      items: [
        'Use <s> for out-of-stock items, old prices, or expired deadlines.',
        'Use <del> for legal document revisions and audit trails.',
        'Use CSS `text-decoration: line-through` if the strikethrough is purely decorative.',
      ],
      callout: {
        type: 'note',
        title: 'Clear Semantics',
        content: 'Replacing `<strike>` with `<s>` or `<del>` ensures assistive technologies understand whether a strikethrough is an editorial edit or outdated data.',
      },
    },
  ],
};
