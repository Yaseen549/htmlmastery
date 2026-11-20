export const supLesson = {
  slug: 'sup',
  number: '47',
  title: '<sup>',
  category: 'Inline Text Semantics',
  subtitle: 'Specifies superscript text rendered higher and smaller for exponents, footnotes, and ordinals',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Superscript',
      paragraphs: [
        'The <sup> HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons.',
        'Superscripts are typically rendered with an elevated baseline using smaller text (vertical-align: super; font-size: smaller).',
        'Common use cases include mathematical exponents (such as x² or E = mc²), footnote citations ([1] or [2]), ordinal numbers (1st, 2nd, 3rd in languages that use them), and registered trademark symbols (®).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>Einstein\'s mass-energy equation is <var>E</var> = <var>m</var><var>c</var><sup>2</sup>.</p>',
      syntaxNote: 'Normal inline element requiring both opening and closing tags. Contains phrasing content.',
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
      title: 'Mathematical Powers and Footnotes',
      type: 'code-example',
      codeTitle: 'Exponents, Ordinals, and Footnote Markers',
      code: `<!-- Mathematical power/exponent -->
<p>
  Pythagorean theorem: 
  <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup>.
</p>

<!-- Ordinal indicator -->
<p>
  She finished in 1<sup>st</sup> place at the tournament!
</p>

<!-- Footnote reference link -->
<p>
  The speed of light is constant in all inertial frames of reference.<sup><a href="#fn1">[1]</a></sup>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Pythagorean theorem: 
  <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup>.
</p>
<p>
  She finished in 1<sup>st</sup> place at the tournament!
</p>
<p>
  The speed of light is constant in all inertial frames of reference.<sup><a href="#fn1">[1]</a></sup>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Footnote Linking Best Practices',
      type: 'list',
      items: [
        'When using <sup> for footnote markers, wrap the inner marker with an <a> anchor tag pointing to the footnote section.',
        'Provide clear link labels (e.g. aria-label="Footnote 1") so screen readers distinguish exponents from citations.',
      ],
      callout: {
        type: 'tip',
        title: 'Exponents vs Ordinals',
        content: 'While French uses superscripts for ordinals (1<sup>er</sup>), English style guides frequently recommend regular inline text (1st) unless superscripting is explicitly requested.',
      },
    },
  ],
};
