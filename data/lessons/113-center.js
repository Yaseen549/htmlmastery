export const centerLesson = {
  slug: 'center',
  number: '113',
  title: '<center>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated block centering element; obsolete in HTML5, replaced with CSS text-align or margin: auto',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <center> HTML element was a block-level element that displayed its contents centered horizontally within its containing block.',
        'It was deprecated in HTML 4 and made completely obsolete in HTML5. HTML is designed for document structure and semantics, while visual alignment belongs exclusively in CSS.',
        'Modern replacements include `text-align: center` for inline content, `margin-inline: auto` for block containers, or flexbox/grid centering (`justify-content: center`).',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 4 -->\n<center><p>Centered content</p></center>\n\n/* Modern CSS Equivalent */\n.centered-block {\n  text-align: center;\n  /* or for block elements */\n  margin-inline: auto;\n}',
      syntaxNote: 'Obsolete element. While modern browsers still center its contents via default user-agent CSS rules, authors must not use it.',
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
      title: 'Historical Centering Demonstration',
      type: 'code-example',
      codeTitle: 'Native Browser Centering of Obsolete <center>',
      code: `<!-- Historical <center> rendered via user-agent stylesheet -->
<center>
  <h3>Centered Headline</h3>
  <p>This text is centered using the obsolete &lt;center&gt; tag.</p>
</center>`,
      demo: {
        title: 'Native Browser Output',
        html: `<center>
  <h3>Centered Headline</h3>
  <p>This text is centered using the obsolete &lt;center&gt; tag.</p>
</center>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Separation of Concerns',
      type: 'list',
      items: [
        'HTML represents the semantic structure of information (headings, paragraphs, lists, forms).',
        'CSS controls visual presentation, typography, alignment, and layout.',
        'Use CSS `text-align: center` for centering text and inline elements.',
      ],
      callout: {
        type: 'note',
        title: 'User-Agent Rule',
        content: 'Browsers internally implement `<center>` with the default CSS rule: `center { display: block; text-align: -webkit-center; text-align: center; }`.',
      },
    },
  ],
};
