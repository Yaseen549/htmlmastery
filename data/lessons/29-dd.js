export const ddLesson = {
  slug: 'dd',
  number: '29',
  title: '<dd>',
  category: 'Text Content & Grouping',
  subtitle: 'Provides the description, definition, or value for a preceding <dt> in a description list',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Description Details',
      paragraphs: [
        'The <dd> HTML element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>).',
        'A single term (<dt>) can have multiple <dd> elements describing different aspects, meanings, or values.',
        'User-agent stylesheets render <dd> with a default left indentation (margin-inline-start: 40px), visually grouping it under its term.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<dd>Explanation or details corresponding to the term</dd>',
      syntaxNote: 'Normal element. While HTML permits omitting </dd> if followed by another <dt>, <dd>, or parent close, explicit closing tags prevent parser ambiguity.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['nowrap', 'Boolean', 'Obsolete in HTML5', 'Disables automatic line wrapping; obsolete, use CSS white-space: nowrap instead.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Multiple Descriptions per Term',
      type: 'code-example',
      codeTitle: 'One Term with Multiple Contextual Definitions',
      code: `<dl>
  <dt>Java</dt>
  <dd>A class-based, object-oriented computer programming language developed by Sun Microsystems.</dd>
  <dd>An island in Indonesia situated between Sumatra and Bali.</dd>
  <dd>A colloquial slang term for brewed coffee.</dd>
</dl>`,
      demo: {
        title: 'Native Browser Output',
        html: `<dl>
  <dt>Java</dt>
  <dd>A class-based, object-oriented computer programming language developed by Sun Microsystems.</dd>
  <dd>An island in Indonesia situated between Sumatra and Bali.</dd>
  <dd>A colloquial slang term for brewed coffee.</dd>
</dl>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility Best Practices',
      type: 'list',
      items: [
        'Assisted technologies map the connection between <dt> and <dd>, announcing relationships like "Definition 1 of 3".',
        '<dd> can contain flow content: paragraphs, lists, images, blockquotes, or links.',
        'Never place a <dd> before any <dt> in the list without an introductory term.',
      ],
      callout: {
        type: 'tip',
        title: 'Flow Content Inside <dd>',
        content: 'Unlike <dt> which usually holds phrasing text, <dd> can contain complete block elements like <p>, <ul>, and <table> when detailed explanations require rich markup.',
      },
    },
  ],
};
