export const rtcLesson = {
  slug: 'rtc',
  number: '134',
  title: '<rtc>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated ruby text container; obsolete in HTML5, merged into standard <rt>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <rtc> (Ruby Text Container) HTML element was designed to embrace semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element, allowing complex bidirectional ruby annotations (such as both pinyin and English translation simultaneously).',
        'In practice, browsers did not implement separate container behavior for <rtc>, and the WHATWG HTML standard simplified ruby markup by making <rtc> obsolete.',
        'Modern development places multiple `<rt>` elements directly inside `<ruby>` without an `<rtc>` wrapper.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Ruby Text Container -->\n<ruby>\n  <rb>漢</rb><rb>字</rb>\n  <rtc><rt>kan</rt><rt>ji</rt></rtc>\n</ruby>\n\n<!-- Standard Modern HTML5 Ruby -->\n<ruby>\n  漢 <rt>kan</rt>\n  字 <rt>ji</rt>\n</ruby>',
      syntaxNote: 'Obsolete element. Omitted from modern WHATWG HTML standard.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Obsolete', 'Only global attributes applied.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern Standard Ruby Annotations',
      type: 'code-example',
      codeTitle: 'Standard Ruby Markup Without Container',
      code: `<!-- Standard modern HTML5 ruby markup -->
<p>
  Learn the characters: 
  <ruby>
    漢 <rp>(</rp><rt>かん</rt><rp>)</rp>
    字 <rp>(</rp><rt>じ</rt><rp>)</rp>
  </ruby>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Learn the characters: 
  <ruby>
    漢 <rp>(</rp><rt>かん</rt><rp>)</rp>
    字 <rp>(</rp><rt>じ</rt><rp>)</rp>
  </ruby>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Standard Ruby Support',
      type: 'list',
      items: [
        'Modern browsers support `<ruby>`, `<rt>`, `<rp>`, and `<rb>`.',
        '`<rtc>` is redundant and has been removed from the living standard.',
      ],
      callout: {
        type: 'tip',
        title: 'Simple Syntax',
        content: 'Stick to `<ruby>base<rt>ruby text</rt></ruby>` for clean, fully compatible pronunciation glosses.',
      },
    },
  ],
};
