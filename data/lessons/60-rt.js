export const rtLesson = {
  slug: 'rt',
  number: '60',
  title: '<rt>',
  category: 'Inline Text Semantics',
  subtitle: 'Specifies the ruby text component providing pronunciation or translation annotation',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Ruby Text',
      paragraphs: [
        'The <rt> HTML element specifies the ruby text component of a ruby annotation.',
        'It is used to provide pronunciation, translation, or transliteration information for East Asian typography (such as Japanese furigana or Chinese pinyin).',
        'An <rt> element must always be contained within a <ruby> element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<ruby>明 <rt>めい</rt> 日 <rt>にち</rt></ruby>',
      syntaxNote: 'Normal element. While HTML permits omitting </rt> when followed by another <rt> or <rp>, explicitly closing it is recommended.',
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
      title: 'Ruby Pronunciation Glosses',
      type: 'code-example',
      codeTitle: 'Pronunciation Guide for Kanji Words',
      code: `<p>
  Tokyo in Japanese: 
  <ruby>
    東 <rt>とう</rt>
    京 <rt>きょう</rt>
  </ruby>
</p>

<p>
  Beijing in Chinese: 
  <ruby>
    北 <rt>Běi</rt>
    京 <rt>jīng</rt>
  </ruby>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Tokyo in Japanese: 
  <ruby>
    東 <rt>とう</rt>
    京 <rt>きょう</rt>
  </ruby>
</p>
<p>
  Beijing in Chinese: 
  <ruby>
    北 <rt>Běi</rt>
    京 <rt>jīng</rt>
  </ruby>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader Support',
      type: 'list',
      items: [
        'User-agent stylesheets apply display: ruby-text and font-size: 50% to <rt>.',
        'Assistive technologies recognize <rt> as phonetic pronunciation annotations for the base character.',
      ],
      callout: {
        type: 'note',
        title: 'Positioning',
        content: 'Browsers position `<rt>` above the base text in horizontal writing modes, and to the right of base text in vertical writing modes.',
      },
    },
  ],
};
