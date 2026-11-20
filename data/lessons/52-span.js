export const spanLesson = {
  slug: 'span',
  number: '52',
  title: '<span>',
  category: 'Inline Text Semantics',
  subtitle: 'Generic non-semantic inline phrasing container for styling or scripting hooks',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Inline Span',
      paragraphs: [
        'The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything.',
        'It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang.',
        'It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The word <span class="highlight">syntax</span> refers to the rules of grammar.</p>',
      syntaxNote: 'Normal inline element requiring both start and closing tags. Contains phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, data-*, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Language Marking and Inline Hooks',
      type: 'code-example',
      codeTitle: 'Language Switching and Inline Text Spans',
      code: `<!-- Language attribute switching inside a sentence -->
<p>
  My favorite French saying is <span lang="fr">c'est la vie</span>, which means "that's life".
</p>

<!-- Scripting or data attribute hooks -->
<p>
  Current balance: <span data-currency="USD">$1,250.00</span>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  My favorite French saying is <span lang="fr">c'est la vie</span>, which means "that's life".
</p>
<p>
  Current balance: <span data-currency="USD">$1,250.00</span>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Semantic Guidelines',
      type: 'list',
      items: [
        '<span> conveys no semantic meaning to screen readers or search engines.',
        'Always check if a dedicated semantic tag exists (such as <mark>, <em>, <strong>, <code>, <time>, or <dfn>) before resorting to <span>.',
        'When marking words in a foreign language within a sentence, wrap them in `<span lang="...">` so screen readers pronounce them with the correct speech synthesizer.',
      ],
      callout: {
        type: 'note',
        title: 'Inline Container',
        content: 'While `<div>` groups blocks, `<span>` groups inline words or phrases without forcing a line break.',
      },
    },
  ],
};
