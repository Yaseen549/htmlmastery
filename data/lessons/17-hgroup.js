export const hgroupLesson = {
  slug: 'hgroup',
  number: '17',
  title: '<hgroup>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Groups a heading with secondary subtitles, taglines, and explanatory paragraphs',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Modern HTML5',
      paragraphs: [
        'The <hgroup> HTML element represents a heading and related content. It is used to group an <h1>–<h6> element with one or more secondary elements, such as subheadings, alternative titles, or taglines.',
        'In the updated WHATWG HTML Living Standard specification, <hgroup> was modernized: it now explicitly permits one or more <p> elements alongside the primary heading element, providing a dedicated semantic wrapper for titles paired with subtitles.',
        'This resolves a decade-long web design dilemma where subtitles had to be marked up with meaningless <span> tags or incorrect heading levels.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<hgroup> <h1>Main Title</h1> <p>Descriptive Subtitle</p> </hgroup>',
      syntaxNote: 'Normal element requiring both opening and closing tags. Contains exactly one <h1>-<h6> element plus zero or more <p> elements.',
    },
    {
      id: 'attributes',
      title: 'Content Model & Allowed Children',
      type: 'attributes-table',
      headers: ['Allowed Element', 'Quantity', 'Role in <hgroup>', 'Standards Status'],
      rows: [
        ['<h1> - <h6>', 'Exactly 1', 'The primary section heading.', 'Standard'],
        ['<p>', 'Zero or more', 'Subtitles, taglines, alternative titles.', 'Living Standard (Modern)'],
        ['Global attributes', 'Supported', 'id, class, style, etc.', 'Standard'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Heading Group Rendering',
      type: 'code-example',
      codeTitle: 'Semantic Subtitle Grouping with <hgroup>',
      code: `<hgroup>
  <h1>The HTML5 Living Reference</h1>
  <p>A comprehensive guide covering every element with zero compromises.</p>
</hgroup>
<p>Subsequent standard body paragraph continues here.</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<hgroup>
  <h1>The HTML5 Living Reference</h1>
  <p>A comprehensive guide covering every element with zero compromises.</p>
</hgroup>
<p>Subsequent standard body paragraph continues here.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Impact',
      type: 'list',
      items: [
        'By wrapping subtitles inside <p> inside <hgroup>, the subtitle does NOT generate an extra false heading in the document outline.',
        'Screen readers announce the main heading level, and then read the subtitle in context as part of the header block.',
        'Never place two <h1> or <h2> elements together inside <hgroup> just to style them; use <p> for the secondary text according to modern standards.',
      ],
      callout: {
        type: 'modern',
        title: 'HTML Living Standard Update',
        content: 'Older HTML5 tutorials warned against <hgroup> because it only allowed headings. The WHATWG specification officially updated <hgroup> in 2023 to support <p> subtitles, making it the official standard for title/subtitle pairs.',
      },
    },
  ],
};
