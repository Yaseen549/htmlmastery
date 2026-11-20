export const divLesson = {
  slug: 'div',
  number: '32',
  title: '<div>',
  category: 'Text Content & Grouping',
  subtitle: 'Generic non-semantic flow content container for layout and grouping',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Container',
      paragraphs: [
        'The <div> HTML element is the generic container for flow content. It has no semantic meaning beyond what is given to it by its attributes (such as class, id, or lang).',
        'It is purely used to group elements for styling purposes (using class or id with CSS) or to bind JavaScript behaviors. It should be used only when no other semantic element (such as <article>, <section>, <nav>, or <header>) is appropriate.',
        'By default in user-agent stylesheets, <div> is rendered with display: block and takes up the full available width of its parent container.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<div class="content-group">\n  <!-- Flow content here -->\n</div>',
      syntaxNote: 'Normal element requiring both opening and closing tags. Can contain any flow content, including text, inline elements, and other block elements.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['align', 'left | center | right | justify', 'Obsolete in HTML5', 'Aligns contents horizontally; obsolete, use CSS text-align instead.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, data-*, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Grouping and Structuring Flow Content',
      type: 'code-example',
      codeTitle: 'Generic Flow Groups with Native Output',
      code: `<!-- <div> elements grouping paragraphs and links -->
<div>
  <h3>Chapter 1: The Beginning</h3>
  <p>The journey of a thousand miles begins with a single step.</p>
</div>

<div>
  <h3>Chapter 2: The Crossroads</h3>
  <p>Two roads diverged in a wood, and I took the one less traveled by.</p>
</div>`,
      demo: {
        title: 'Native Browser Output',
        html: `<div>
  <h3>Chapter 1: The Beginning</h3>
  <p>The journey of a thousand miles begins with a single step.</p>
</div>

<div>
  <h3>Chapter 2: The Crossroads</h3>
  <p>Two roads diverged in a wood, and I took the one less traveled by.</p>
</div>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Semantic HTML vs "Div Soup"',
      type: 'list',
      items: [
        '<div> conveys zero semantic meaning to screen readers or search engines.',
        'Avoid "div soup" (excessive nesting of redundant <div> tags) when native semantic tags (<main>, <nav>, <section>, <article>, <header>, <footer>) can be used instead.',
        'Use <div> when creating layout wrappers (such as flex containers or grid tracks) that exist purely for visual arrangement rather than document hierarchy.',
      ],
      callout: {
        type: 'note',
        title: 'Rule of Thumb',
        content: 'Ask: "Does this element define a landmark, article, section, or list item?" If yes, use the semantic HTML5 element. If it exists solely to apply a CSS background or flex layout, use <div>.',
      },
    },
  ],
};
