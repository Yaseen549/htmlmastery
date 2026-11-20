export const fontLesson = {
  slug: 'font',
  number: '114',
  title: '<font>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated font color, size, and face modifier; obsolete in HTML5, replaced with CSS typography',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <font> HTML element defined the font face, size, and color for its content in early web documents before CSS was widely adopted.',
        'It was deprecated in HTML 4 and is completely obsolete in HTML5. Mixing presentational styling attributes into HTML markup creates unmaintainable, bloated codebases.',
        'Modern web development styles typography exclusively with CSS properties: `font-family`, `font-size`, `color`, and `font-weight`.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML -->\n<font face="Arial" size="4" color="#ea580c">Styled text</font>\n\n/* Modern CSS Alternative */\n.styled-text {\n  font-family: Arial, sans-serif;\n  font-size: 1.25rem;\n  color: #ea580c;\n}',
      syntaxNote: 'Obsolete element. Fails modern W3C HTML5 validator checks.',
    },
    {
      id: 'attributes',
      title: 'Obsolete Attributes Matrix',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Status', 'Modern CSS Replacement'],
      rows: [
        ['face', 'Comma-separated font family names', 'Obsolete', 'CSS font-family'],
        ['size', 'Integer 1 through 7 or relative (+1, -2)', 'Obsolete', 'CSS font-size (rem, px, em)'],
        ['color', 'Hex color code or name', 'Obsolete', 'CSS color'],
      ],
    },
    {
      id: 'code-example',
      title: 'Historical Font Rendering',
      type: 'code-example',
      codeTitle: 'Font Tag in Modern Browser User-Agent',
      code: `<!-- Historical <font> tag with color and size -->
<p>
  Standard text followed by 
  <font face="sans-serif" size="5" color="#ea580c">Custom Font Tag Text</font>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Standard text followed by 
  <font face="sans-serif" size="5" color="#ea580c">Custom Font Tag Text</font>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Maintenance Drawbacks',
      type: 'list',
      items: [
        '<font> size numbers (1 to 7) do not scale proportionally with user browser zoom or accessibility text resize settings.',
        'Inline font tags prevent central theming (such as dynamic dark/light theme switching).',
      ],
      callout: {
        type: 'important',
        title: 'Use CSS Exclusively',
        content: 'All typographic styling in modern web development must be handled with CSS classes and custom properties.',
      },
    },
  ],
};
