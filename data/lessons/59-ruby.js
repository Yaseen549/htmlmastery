export const rubyLesson = {
  slug: 'ruby',
  number: '59',
  title: '<ruby>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents small annotations rendered above or next to East Asian base text for pronunciation',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Ruby',
      paragraphs: [
        'The <ruby> HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters (such as Japanese Furigana or Chinese Pinyin).',
        'It can also be used for annotating other kinds of text, but this usage is less common.',
        'The <ruby> element is the container that pairs the base text with <rt> (ruby text) and optional <rp> (fallback parenthesis) elements.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<ruby>\n  漢 <rp>(</rp><rt>kan</rt><rp>)</rp>\n  字 <rp>(</rp><rt>ji</rt><rp>)</rp>\n</ruby>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains base phrasing text, <rt>, and optional <rp> elements.',
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
      title: 'Japanese Furigana and Chinese Pinyin',
      type: 'code-example',
      codeTitle: 'Kanji and Hanzi Pronunciation Glosses',
      code: `<!-- Japanese Kanji with Furigana (hiragana) -->
<p>
  Japanese word: 
  <ruby>
    漢 <rp>(</rp><rt>かん</rt><rp>)</rp>
    字 <rp>(</rp><rt>じ</rt><rp>)</rp>
  </ruby> (Kanji)
</p>

<!-- Chinese Hanzi with Pinyin tone marks -->
<p>
  Chinese greeting: 
  <ruby>
    你 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
    好 <rp>(</rp><rt>hǎo</rt><rp>)</rp>
  </ruby> (Nǐ hǎo)
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Japanese word: 
  <ruby>
    漢 <rp>(</rp><rt>かん</rt><rp>)</rp>
    字 <rp>(</rp><rt>じ</rt><rp>)</rp>
  </ruby> (Kanji)
</p>
<p>
  Chinese greeting: 
  <ruby>
    你 <rp>(</rp><rt>nǐ</rt><rp>)</rp>
    好 <rp>(</rp><rt>hǎo</rt><rp>)</rp>
  </ruby> (Nǐ hǎo)
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & Typography Features',
      type: 'list',
      items: [
        'User-agent stylesheets render <ruby> with display: ruby, placing <rt> text centered above the base characters in smaller font.',
        'Screen readers typically read the base characters, and some read the phonetic pronunciation provided in <rt>.',
        'Always include <rp> parentheses so legacy browsers without ruby support display "漢字 (kanji)" cleanly inline.',
      ],
      callout: {
        type: 'tip',
        title: 'Name Origin',
        content: 'The term "ruby" originates from a British printing term for a 5.5-point font size historically used for small annotations in printed books.',
      },
    },
  ],
};
