export const markLesson = {
  slug: 'mark',
  number: '51',
  title: '<mark>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents text that has been highlighted or marked for reference due to relevance in another context',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Highlight',
      paragraphs: [
        'The <mark> HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage\'s relevance in another context.',
        'A canonical example is highlighting search query terms within search results, or showing passages previously highlighted by a reader in a study document.',
        'User-agent stylesheets render <mark> with a yellow background and black text (background-color: yellow; color: black).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>Search results for "apple": We found several <mark>apple</mark> recipes.</p>',
      syntaxNote: 'Normal inline element requiring both opening and closing tags. Contains phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Search Term Highlights and Quotes',
      type: 'code-example',
      codeTitle: 'Search Hits and Contextual Annotations',
      code: `<!-- Search query matching -->
<p>
  Search results for query <em>"syntax"</em>:
</p>
<p>
  HTML <mark>syntax</mark> requires all elements to be properly closed or self-closing. 
  Learning proper <mark>syntax</mark> prevents rendering bugs.
</p>

<!-- User note highlight in a book passage -->
<p>
  From the report: "In Q3, the operating revenue increased by 
  <mark>42% year-over-year</mark>, surpassing all analysts' expectations."
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Search results for query <em>"syntax"</em>:
</p>
<p>
  HTML <mark>syntax</mark> requires all elements to be properly closed or self-closing. 
  Learning proper <mark>syntax</mark> prevents rendering bugs.
</p>
<p>
  From the report: "In Q3, the operating revenue increased by 
  <mark>42% year-over-year</mark>, surpassing all analysts' expectations."
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & Color Contrast Notes',
      type: 'list',
      items: [
        'Modern screen readers announce <mark> content with "highlighted" status when verbosity settings are configured.',
        'Do not use <mark> for stress emphasis (use <em>) or importance (use <strong>).',
        'In dark themes, ensure the default yellow highlight maintains accessible color contrast against both the text and background.',
      ],
      callout: {
        type: 'tip',
        title: '<mark> vs <strong>',
        content: '`<strong>` indicates inherent importance placed by the author. `<mark>` indicates contextual relevance to the reader (e.g. matching their search term or their personal highlight).',
      },
    },
  ],
};
