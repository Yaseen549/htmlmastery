export const citeLesson = {
  slug: 'cite',
  number: '38',
  title: '<cite>',
  category: 'Inline Text Semantics',
  subtitle: 'Marks the title of a cited creative work (book, paper, song, movie, artwork, website)',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Citation',
      paragraphs: [
        'The <cite> HTML element is used to describe a reference to a cited creative work, and must include the title of that work.',
        'The reference may be in an abbreviated form along with such metadata as author name or publication date, but the element itself represents the title of the work.',
        'Creative works include: books, essays, research papers, poems, songs, films, TV series, games, paintings, sculptures, plays, operas, and websites.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>According to <cite>The C Programming Language</cite> by Kernighan and Ritchie...</p>',
      syntaxNote: 'Normal inline element requiring both start and closing tags. Contains phrasing content representing the title of a creative work.',
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
      title: 'Citing Creative Works',
      type: 'code-example',
      codeTitle: 'Book and Painting Citations',
      code: `<p>
  My favorite programming guide is <cite>The Mythical Man-Month</cite> by Fred Brooks.
</p>

<p>
  Leonardo da Vinci painted <cite>Mona Lisa</cite> between 1503 and 1519.
</p>

<blockquote>
  <p>"Stay hungry, stay foolish."</p>
  <footer>— Whole Earth Catalog, cited in <cite>Steve Jobs Stanford Commencement Address</cite></footer>
</blockquote>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  My favorite programming guide is <cite>The Mythical Man-Month</cite> by Fred Brooks.
</p>
<p>
  Leonardo da Vinci painted <cite>Mona Lisa</cite> between 1503 and 1519.
</p>
<blockquote>
  <p>"Stay hungry, stay foolish."</p>
  <footer>— Whole Earth Catalog, cited in <cite>Steve Jobs Stanford Commencement Address</cite></footer>
</blockquote>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'W3C Standard Compliance Directive',
      type: 'list',
      items: [
        'Browsers render <cite> in italics by default (font-style: italic).',
        'Under the WHATWG specification, <cite> MUST NOT be used to mark a person\'s name alone; it represents the title of the creative work.',
      ],
      callout: {
        type: 'warning',
        title: 'Not for Author Names Alone',
        content: 'Writing `<cite>Albert Einstein</cite> said...` is invalid according to WHATWG HTML specs. The element must contain the title of the work, e.g. `<cite>On the Electrodynamics of Moving Bodies</cite> by Albert Einstein`.',
      },
    },
  ],
};
