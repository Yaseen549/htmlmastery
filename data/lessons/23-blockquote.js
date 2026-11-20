export const blockquoteLesson = {
  slug: 'blockquote',
  number: '23',
  title: '<blockquote>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents an extended quotation section cited from an external source',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Extended Quotation',
      paragraphs: [
        'The <blockquote> HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation.',
        'A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using a <cite> element inside or adjacent to the quotation.',
        'For short, inline quotations within a paragraph, use the <q> element instead.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<blockquote cite="https://example.com/quote-source">\n  <p>Quotation text...</p>\n</blockquote>',
      syntaxNote: 'Normal element requiring both opening and closing tags. Encloses block-level content like <p>, <header>, or <footer>.',
    },
    {
      id: 'attributes',
      title: 'Attributes Reference',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Purpose', 'Accessibility Note'],
      rows: [
        ['cite', 'URL', 'A URL that designates a source document or message for the information quoted.', 'Not read aloud by screen readers; purely machine-readable metadata.'],
        ['Global attributes', 'Supported', 'Supports id, class, style, etc.', 'Standard'],
      ],
    },
    {
      id: 'code-example',
      title: 'Attributed Blockquote Blueprint',
      type: 'code-example',
      codeTitle: 'Blockquote with Citation and Attribution',
      code: `<figure>
  <blockquote cite="https://www.w3.org/TR/html52/">
    <p>
      HTML is the World Wide Web's core markup language. Originally designed as
      a language for describing scientific documents, its general-purpose adaptability
      has enabled it to describe dynamic applications.
    </p>
  </blockquote>
  <figcaption>
    — <cite>W3C HTML5 Specification</cite>
  </figcaption>
</figure>`,
      demo: {
        title: 'Native Browser Output',
        html: `<figure>
  <blockquote cite="https://www.w3.org/TR/html52/">
    <p>
      HTML is the World Wide Web's core markup language. Originally designed as
      a language for describing scientific documents, its general-purpose adaptability
      has enabled it to describe dynamic applications.
    </p>
  </blockquote>
  <figcaption>
    — <cite>W3C HTML5 Specification</cite>
  </figcaption>
</figure>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Best Practices',
      type: 'list',
      items: [
        'Screen readers announce blockquotes explicitly (e.g., "Blockquote start... Blockquote end"), informing users that words are quoted.',
        'Because screen readers do not read the cite attribute URL aloud, always include visible text attribution (e.g. using <figcaption> or <cite>) for user clarity.',
        'Do not use <blockquote> solely to indent arbitrary text; use CSS margins instead.',
      ],
      callout: {
        type: 'tip',
        title: 'Pairing with <figure> and <figcaption>',
        content: 'The W3C recommends wrapping <blockquote> inside <figure> and placing the author/attribution inside <figcaption> for the cleanest semantic citation pattern.',
      },
    },
  ],
};
