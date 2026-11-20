export const smallLesson = {
  slug: 'small',
  number: '36',
  title: '<small>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents side-comments, fine print, legal disclaimers, and copyright statements',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Fine Print',
      paragraphs: [
        'The <small> HTML element represents side-comments and small print, such as copyright and legal text, independent of its styled presentation.',
        'By default in user-agent stylesheets, it renders text within it one font-size smaller (such as small, or 0.833em) than the surrounding parent element.',
        'It is an inline phrasing element and does not create a paragraph break.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>&copy; 2026 Example Corp. <small>All rights reserved.</small></p>',
      syntaxNote: 'Normal inline element requiring start and closing tags. Contains phrasing content.',
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
      title: 'Fine Print and Disclaimers',
      type: 'code-example',
      codeTitle: 'Copyright and Pricing Terms',
      code: `<p>
  Order today and get free two-day shipping!*
</p>
<p>
  <small>*Offer valid only for addresses in the continental United States. Terms and conditions apply.</small>
</p>
<p>
  <small>&copy; 2026 Acme Software Inc. All trademarks belong to their respective owners.</small>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Order today and get free two-day shipping!*
</p>
<p>
  <small>*Offer valid only for addresses in the continental United States. Terms and conditions apply.</small>
</p>
<p>
  <small>&copy; 2026 Acme Software Inc. All trademarks belong to their respective owners.</small>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility Considerations',
      type: 'list',
      items: [
        'Do not use <small> for large sections of text as reduced font size impairs readability for low-vision users.',
        'Ensure the resulting font size still meets minimum contrast and legibility thresholds.',
        'Do not use <small> purely for visual styling; use CSS font-size when text is not conceptually "fine print".',
      ],
      callout: {
        type: 'note',
        title: 'HTML5 Semantic Re-definition',
        content: 'In HTML 4, `<small>` was purely presentational. In HTML5, it was redefined semantically to represent side-comments, legal disclaimers, caveats, and copyright statements.',
      },
    },
  ],
};
