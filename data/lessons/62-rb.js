export const rbLesson = {
  slug: 'rb',
  number: '62',
  title: '<rb>',
  category: 'Inline Text Semantics',
  subtitle: 'Explicitly marks the ruby base text component within a <ruby> container',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Ruby Base',
      paragraphs: [
        'The <rb> HTML element is used to delimit the base text component of a <ruby> annotation.',
        'While simple ruby annotations can place base text directly inside <ruby> without a wrapper, <rb> is used in complex tabular ruby markups where multiple base characters map to multiple annotations.',
        'It was standardized in the W3C Ruby Annotation specification and WHATWG HTML Living Standard.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<ruby><rb>東</rb><rb>京</rb><rt>とう</rt><rt>きょう</rt></ruby>',
      syntaxNote: 'Normal element requiring opening and closing tags. Must be a direct child of <ruby>.',
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
      title: 'Tabular Ruby Base Markup',
      type: 'code-example',
      codeTitle: 'Complex Multi-Base Ruby Structure',
      code: `<!-- Explicit base elements matching multiple rt annotations -->
<p>
  Complex ruby structure:
  <ruby>
    <rb>日</rb>
    <rb>本</rb>
    <rt>に</rt>
    <rt>ほん</rt>
  </ruby> (Japan)
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Complex ruby structure:
  <ruby>
    <rb>日</rb>
    <rb>本</rb>
    <rt>に</rt>
    <rt>ほん</rt>
  </ruby> (Japan)
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Specification Notes',
      type: 'list',
      items: [
        'User-agent stylesheets render <rb> with `display: ruby-base`.',
        'For simple single-character ruby, `<rb>` is optional, but it provides explicit structural grouping for automated linguistic analyzers.',
      ],
      callout: {
        type: 'note',
        title: 'W3C Standard Status',
        content: '`<rb>` is part of the WHATWG HTML standard, ensuring full compatibility across Chrome, Safari, Firefox, and Edge.',
      },
    },
  ],
};
