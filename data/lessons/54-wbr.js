export const wbrLesson = {
  slug: 'wbr',
  number: '54',
  title: '<wbr>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents a word break opportunity where the browser may optionally break a long line',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Word Break',
      paragraphs: [
        'The <wbr> HTML element represents a word break opportunity — that is, a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that position.',
        'It is particularly useful for very long unbroken words, deep URL strings, long namespaces, or hexadecimal hashes that might otherwise overflow narrow viewports or table cells.',
        'It is a void element — it contains no children and requires no closing tag.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>https://www.example.com/<wbr>very/<wbr>long/<wbr>nested/<wbr>path/<wbr>resource</p>',
      syntaxNote: 'Void element. Has no closing tag. Does not render any visible character or hyphen when no break occurs.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Breaking Long URLs and Technical Identifiers',
      type: 'code-example',
      codeTitle: 'Deep Path and Long German Compound Word',
      code: `<!-- Long URL allowed to wrap at path segments -->
<p>
  Visit our repository at: 
  https://github.com/<wbr>facebook/<wbr>react/<wbr>releases/<wbr>tag/<wbr>v18.2.0
</p>

<!-- Long compound word in German (Donaudampfschifffahrt...) -->
<p>
  Donaudampfschiff<wbr>fahrtsgesellschafts<wbr>kapitän
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Visit our repository at: 
  https://github.com/<wbr>facebook/<wbr>react/<wbr>releases/<wbr>tag/<wbr>v18.2.0
</p>
<p>
  Donaudampfschiff<wbr>fahrtsgesellschafts<wbr>kapitän
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: '<wbr> vs &shy; (Soft Hyphen)',
      type: 'list',
      items: [
        '<wbr> creates an invisible break opportunity without adding a hyphen character.',
        '&shy; (soft hyphen) inserts an explicit hyphen "-" when and only when the line breaks.',
        'For URLs and programming tokens, <wbr> is preferred because a hyphen would alter the actual string or path.',
      ],
      callout: {
        type: 'tip',
        title: 'No Added Hyphen',
        content: 'Use `<wbr>` for code tokens and URLs so that copying the text or reading it does not inadvertently include unwanted hyphen characters.',
      },
    },
  ],
};
