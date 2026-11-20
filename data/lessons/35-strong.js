export const strongLesson = {
  slug: 'strong',
  number: '35',
  title: '<strong>',
  category: 'Inline Text Semantics',
  subtitle: 'Indicates that its contents have strong importance, seriousness, or urgency',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Importance',
      paragraphs: [
        'The <strong> HTML element indicates that its contents have strong importance, seriousness, or urgency.',
        'Browsers typically render the contents in bold type (font-weight: bold). However, it should not simply be used to apply bold styling; use the <b> element for drawing attention without extra importance, or CSS font-weight for purely decorative styling.',
        'Nesting <strong> elements inside other <strong> elements increases the relative importance of the inner content.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p><strong>Warning:</strong> High voltage area. Do not enter.</p>',
      syntaxNote: 'Normal inline element requiring opening and closing tags. Contains phrasing content.',
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
      title: 'Urgent and Important Notices',
      type: 'code-example',
      codeTitle: 'Warning and Critical Instructions',
      code: `<p>
  <strong>Danger:</strong> Poisonous gases may be present. 
  A respirator is <strong>mandatory</strong> before entering this corridor.
</p>

<p>
  When submitting your application, 
  <strong>all documents must be received by 5:00 PM on Friday</strong>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  <strong>Danger:</strong> Poisonous gases may be present. 
  A respirator is <strong>mandatory</strong> before entering this corridor.
</p>
<p>
  When submitting your application, 
  <strong>all documents must be received by 5:00 PM on Friday</strong>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & Semantic Value',
      type: 'list',
      items: [
        'Screen readers announce text within <strong> with increased vocal emphasis or pitch change.',
        'Do not wrap whole paragraphs in <strong>; isolate the genuinely critical keywords or warning phrases.',
        '<strong> denotes importance or urgency, whereas <em> denotes conversational stress.',
      ],
      callout: {
        type: 'tip',
        title: '<strong> vs <b>',
        content: 'Use `<strong>` for warnings, critical instructions, or urgent conditions. Use `<b>` for keywords, product names, or lead sentences where no urgency or importance is implied.',
      },
    },
  ],
};
