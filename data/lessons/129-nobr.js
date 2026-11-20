export const nobrLesson = {
  slug: 'nobr',
  number: '129',
  title: '<nobr>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated non-breaking text element; obsolete in HTML5, replaced by CSS white-space: nowrap',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <nobr> (No Break) HTML element was a proprietary element introduced in early Netscape Navigator that prevented text from wrapping across multiple lines.',
        'It was never standardized and is obsolete in HTML5. Line wrapping behavior belongs strictly in CSS.',
        'Modern development uses the CSS declaration `white-space: nowrap` or the non-breaking space character `&nbsp;`.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Proprietary Tag -->\n<nobr>This long text string will never wrap.</nobr>\n\n/* Modern Standard CSS Alternative */\n.no-wrap {\n  white-space: nowrap;\n}',
      syntaxNote: 'Obsolete element. Fails HTML5 validation checks.',
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
      title: 'Historical No-Wrap Behavior',
      type: 'code-example',
      codeTitle: 'Unwrapped Text in Modern Browser Engines',
      code: `<!-- Historical <nobr> tag still handled by user-agent stylesheets -->
<p>
  Here is normal text followed by 
  <nobr>a-very-long-hyphenated-string-that-the-browser-keeps-on-one-line</nobr>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Here is normal text followed by 
  <nobr>a-very-long-hyphenated-string-that-the-browser-keeps-on-one-line</nobr>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Overflow Hazards on Mobile',
      type: 'list',
      items: [
        'Preventing text wrapping can force wide horizontal scrollbars on mobile devices, harming user experience.',
        'Use CSS `white-space: nowrap` intentionally, paired with `overflow: hidden` and `text-overflow: ellipsis` when truncation is required.',
      ],
      callout: {
        type: 'tip',
        title: 'CSS Standard Replacement',
        content: 'Apply `style="white-space: nowrap;"` to a `<span>` or other inline element instead of `<nobr>`.',
      },
    },
  ],
};
