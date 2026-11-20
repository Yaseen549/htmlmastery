export const abbrLesson = {
  slug: 'abbr',
  number: '41',
  title: '<abbr>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents an abbreviation or acronym, optionally expanded via the title attribute',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Abbreviation',
      paragraphs: [
        'The <abbr> HTML element represents an abbreviation or acronym.',
        'When included, the optional title attribute can expand the abbreviation into its full textual description. Modern desktop browsers display this expanded text as a tooltip on hover.',
        'User-agent stylesheets typically apply a dotted underline (text-decoration: underline dotted) to <abbr> elements that have a title attribute.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The <abbr title="HyperText Markup Language">HTML</abbr> standard is maintained by WHATWG.</p>',
      syntaxNote: 'Normal inline element requiring both start and closing tags. Contains phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['title', 'String', 'none', 'The full human-readable expansion or description of the abbreviation or acronym.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Acronyms and Abbreviations',
      type: 'code-example',
      codeTitle: 'Standard Abbreviations with Hover Tooltips',
      code: `<p>
  The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
</p>

<p>
  NASA stands for <abbr title="National Aeronautics and Space Administration">NASA</abbr>.
</p>

<p>
  CSS stands for <abbr title="Cascading Style Sheets">CSS</abbr>, while 
  <abbr title="JavaScript">JS</abbr> provides browser logic.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.
</p>
<p>
  NASA stands for <abbr title="National Aeronautics and Space Administration">NASA</abbr>.
</p>
<p>
  CSS stands for <abbr title="Cascading Style Sheets">CSS</abbr>, while 
  <abbr title="JavaScript">JS</abbr> provides browser logic.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility Best Practices',
      type: 'list',
      items: [
        'Mobile touchscreens cannot hover to trigger the title tooltip; always spell out the full term on first occurrence in body text: "World Health Organization (WHO)".',
        'Screen readers can be configured to expand abbreviations with title attributes aloud during recitation.',
        'HTML5 obsolete <acronym> tag has been completely replaced by <abbr>.',
      ],
      callout: {
        type: 'note',
        title: '<acronym> is Obsolete',
        content: 'The old `<acronym>` tag from HTML 4 is deprecated and obsolete in HTML5. Use `<abbr>` exclusively for all abbreviations, acronyms, and initialisms.',
      },
    },
  ],
};
