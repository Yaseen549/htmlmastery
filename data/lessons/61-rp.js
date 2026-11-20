export const rpLesson = {
  slug: 'rp',
  number: '61',
  title: '<rp>',
  category: 'Inline Text Semantics',
  subtitle: 'Provides fallback parentheses around ruby text for browsers that do not support ruby annotations',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Fallback Parenthesis',
      paragraphs: [
        'The <rp> HTML element is used to provide parentheses around a ruby text component of a ruby annotation, to be shown by user agents that do not support display of ruby annotations.',
        'In browsers that support ruby (all modern browsers), the contents of <rp> are completely hidden from visual rendering.',
        'In legacy browsers or text-only browsers that do not support ruby, the parentheses are rendered inline, producing: "漢字 (kanji)".',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<ruby>漢 <rp>(</rp><rt>kan</rt><rp>)</rp></ruby>',
      syntaxNote: 'Normal element requiring opening and closing tags. Appears immediately before and after <rt> elements inside <ruby>.',
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
      title: 'Fallback Parentheses in Action',
      type: 'code-example',
      codeTitle: 'Standard Ruby with Fallback Delimiters',
      code: `<p>
  Learn the word: 
  <ruby>
    桜 <rp>(</rp><rt>さくら</rt><rp>)</rp>
  </ruby> (Cherry Blossom)
</p>

<p>
  In a modern browser, the parentheses inside &lt;rp&gt; are invisible. 
  In a browser without ruby support, it renders as "桜 (さくら)".
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Learn the word: 
  <ruby>
    桜 <rp>(</rp><rt>さくら</rt><rp>)</rp>
  </ruby> (Cherry Blossom)
</p>
<p>
  In a modern browser, the parentheses inside &lt;rp&gt; are invisible. 
  In a browser without ruby support, it renders as "桜 (さくら)".
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & Display Default',
      type: 'list',
      items: [
        'User-agent stylesheets define `display: none` on <rp> in browsers that support `<ruby>`.',
        'Text-mode browsers (like Lynx) render the contents of <rp> so text does not run into pronunciation glosses.',
        'Always place opening parenthesis in first <rp> and closing parenthesis in second <rp>.',
      ],
      callout: {
        type: 'tip',
        title: 'Graceful Degradation',
        content: 'Using `<rp>` ensures that your document degrades gracefully in any terminal reader or syndication feed that strips advanced CSS.',
      },
    },
  ],
};
