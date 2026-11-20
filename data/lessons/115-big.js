export const bigLesson = {
  slug: 'big',
  number: '115',
  title: '<big>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated enlarged font sizing element; obsolete in HTML5, replaced with CSS font-size',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <big> HTML element rendered the enclosed text in one font size larger than the surrounding text (such as from medium to large).',
        'While <small> was retained in HTML5 and given a clear semantic definition (for side comments, legal disclaimers, and fine print), <big> had no semantic meaning and was made completely obsolete.',
        'Modern development uses CSS font-size (e.g., `font-size: 1.2em` or `font-size: larger`) for visual enlargement.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML -->\n<p>Regular text with <big>larger text</big>.</p>\n\n/* Modern CSS Alternative */\n.large-text { font-size: larger; }',
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
      title: 'Historical <big> Rendering',
      type: 'code-example',
      codeTitle: 'Enlarged Text Demonstration',
      code: `<p>
  Normal paragraph text alongside <big>enlarged text using &lt;big&gt;</big>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Normal paragraph text alongside <big>enlarged text using &lt;big&gt;</big>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: '<small> vs <big> Status',
      type: 'list',
      items: [
        '<small> is STANDARD HTML5 (semantic fine print/disclaimers).',
        '<big> is OBSOLETE HTML5 (purely presentational; use CSS).',
      ],
      callout: {
        type: 'tip',
        title: 'Semantic Hierarchy',
        content: 'If text is physically larger because it represents a document heading or section title, use `<h1>`-`<h6>` instead of styling text to look large.',
      },
    },
  ],
};
