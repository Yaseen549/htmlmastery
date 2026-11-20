export const dtLesson = {
  slug: 'dt',
  number: '28',
  title: '<dt>',
  category: 'Text Content & Grouping',
  subtitle: 'Specifies a term or label in a description list (<dl>)',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Description Term',
      paragraphs: [
        'The <dt> HTML element specifies a term, name, or key in a description or definition list (<dl>).',
        'It must be a direct child of a <dl> element or a child of a <div> element that is itself a direct child of a <dl>. It is usually followed immediately by one or more <dd> (Description Details) elements.',
        'Multiple <dt> elements in a row indicate several terms or synonyms that share the subsequent definition.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<dt>Term to be defined</dt>',
      syntaxNote: 'Normal element. While HTML permits omitting the closing </dt> tag if immediately followed by another <dt> or <dd>, explicitly closing it is recommended.',
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
      title: 'Terms in Description Lists',
      type: 'code-example',
      codeTitle: 'Terms with Single and Multiple Definitions',
      code: `<dl>
  <dt>Author</dt>
  <dd>Tim Berners-Lee</dd>

  <dt>Protocol</dt>
  <dt>Scheme</dt>
  <dd>The initial component of a URI indicating how to access the resource (e.g., https://).</dd>
</dl>`,
      demo: {
        title: 'Native Browser Output',
        html: `<dl>
  <dt>Author</dt>
  <dd>Tim Berners-Lee</dd>

  <dt>Protocol</dt>
  <dt>Scheme</dt>
  <dd>The initial component of a URI indicating how to access the resource (e.g., https://).</dd>
</dl>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Semantic Guidelines',
      type: 'list',
      items: [
        'Screen readers recognize <dt> as a term and pair it with the corresponding <dd> definition.',
        'Do not place headings (<h1>-<h6>) inside <dt> unless explicitly necessary; <dt> is already a structural label.',
        'Always ensure every <dt> has at least one associated <dd> to maintain meaningful semantics.',
      ],
      callout: {
        type: 'note',
        title: 'Bold Rendering in User-Agent',
        content: 'By default, most browsers render <dt> as block elements with standard font-weight, relying on <dd> indentation to provide visual contrast.',
      },
    },
  ],
};
