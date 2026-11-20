export const noframesLesson = {
  slug: 'noframes',
  number: '122',
  title: '<noframes>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated fallback content for framesets; obsolete in HTML5',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <noframes> HTML element provided content to be presented to browsers that did not support <frame> or <frameset> elements, or had frames disabled.',
        'It was placed inside a <frameset> container and typically enclosed a <body> tag with text and links explaining that the user\'s browser was too old or lacked frame capabilities.',
        'Because <frameset> itself is obsolete in HTML5, <noframes> is obsolete as well.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 4 -->\n<frameset cols="50%,50%">\n  <frame src="left.html">\n  <frame src="right.html">\n  <noframes>\n    <p>Your browser does not support frames.</p>\n  </noframes>\n</frameset>',
      syntaxNote: 'Obsolete element. Fails HTML5 validation.',
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
      title: 'Historical Fallback Handling',
      type: 'code-example',
      codeTitle: 'Noframes in Modern Browsers',
      code: `<!-- In modern browsers, <noframes> content is ignored or hidden -->
<noframes>
  <p>This fallback text was shown to text browsers like Lynx in the 1990s.</p>
</noframes>
<p>Modern browsers natively support full HTML5 semantic layouts without frames.</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<noframes>
  <p>This fallback text was shown to text browsers like Lynx in the 1990s.</p>
</noframes>
<p>Modern browsers natively support full HTML5 semantic layouts without frames.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Historical Significance',
      type: 'list',
      items: [
        '<noframes> was the early web\'s equivalent of `<noscript>`.',
        'Search engine crawlers relied on `<noframes>` to discover hyperlinks across framed websites.',
      ],
      callout: {
        type: 'note',
        title: 'Obsolete',
        content: 'There is zero reason to ever use `<noframes>` in modern web engineering.',
      },
    },
  ],
};
