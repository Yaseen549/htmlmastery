export const dfnLesson = {
  slug: 'dfn',
  number: '40',
  title: '<dfn>',
  category: 'Inline Text Semantics',
  subtitle: 'Indicates the defining instance of a term introduced within the sentence or paragraph',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Definition',
      paragraphs: [
        'The <dfn> HTML element is used to indicate the term being defined within the context of a definition phrase or sentence.',
        'The ancestor <p>, <section>, or <dl> container element should contain the definition or explanation of the term.',
        'User-agent stylesheets render <dfn> with italic styling (font-style: italic) by default.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>A <dfn id="html-def">HyperText Markup Language (HTML)</dfn> is the standard language for documents designed to be displayed in a web browser.</p>',
      syntaxNote: 'Normal inline element requiring both start and closing tags. Contains phrasing content representing the term being defined.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['title', 'String', 'none', 'Explicit definition term value if different from text content.'],
        ['id', 'String', 'none', 'Anchor identifier allowing subsequent links (<a href="#term">) to point back to the term\'s original definition.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Defining Technical Terms',
      type: 'code-example',
      codeTitle: 'Defining Instances with Back-Reference Anchors',
      code: `<p>
  A <dfn id="def-api">Application Programming Interface (API)</dfn> is a set of defined rules that enable different applications to communicate with each other.
</p>

<p>
  Later in the document, we can refer to this <a href="#def-api">API</a> with a direct hyperlink pointing back to the initial definition.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  A <dfn id="def-api">Application Programming Interface (API)</dfn> is a set of defined rules that enable different applications to communicate with each other.
</p>
<p>
  Later in the document, we can refer to this <a href="#def-api">API</a> with a direct hyperlink pointing back to the initial definition.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Semantic Lookup in Search and Accessibility',
      type: 'list',
      items: [
        'Search engines and indexing tools identify <dfn> to build automated glossaries and definition popups.',
        'Screen readers notify the user that a formal definition instance is being encountered.',
        'Always provide the actual explanation of the term in the surrounding paragraph containing the <dfn>.',
      ],
      callout: {
        type: 'tip',
        title: 'Combination with <abbr>',
        content: 'You can nest `<abbr>` inside `<dfn>`: `<dfn><abbr title="World Wide Web Consortium">W3C</abbr></dfn>` to establish both the acronym expansion and its formal introductory definition.',
      },
    },
  ],
};
