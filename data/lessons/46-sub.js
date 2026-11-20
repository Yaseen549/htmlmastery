export const subLesson = {
  slug: 'sub',
  number: '46',
  title: '<sub>',
  category: 'Inline Text Semantics',
  subtitle: 'Specifies subscript text rendered lower and smaller for chemical formulas and math indices',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Subscript',
      paragraphs: [
        'The <sub> HTML element specifies inline text which should be displayed as subscript for solely typographical reasons.',
        'Subscripts are typically rendered with a lowered baseline using smaller text (vertical-align: sub; font-size: smaller).',
        'Common use cases include chemical formulas (like H₂O), mathematical subscript indices (such as x₁ or aᵢ), and linguistic phonetic representations.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>Water has the chemical formula H<sub>2</sub>O.</p>',
      syntaxNote: 'Normal inline element requiring both start and closing tags. Contains phrasing content.',
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
      title: 'Chemical Formulas and Coordinate Indices',
      type: 'code-example',
      codeTitle: 'Molecules and Subscript Index Notations',
      code: `<!-- Chemical formulas -->
<p>
  Glucose formula: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
</p>
<p>
  Carbon dioxide: CO<sub>2</sub>
</p>

<!-- Coordinate math indices -->
<p>
  Distance formula between points 
  (<var>x</var><sub>1</sub>, <var>y</var><sub>1</sub>) and 
  (<var>x</var><sub>2</sub>, <var>y</var><sub>2</sub>).
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Glucose formula: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
</p>
<p>
  Carbon dioxide: CO<sub>2</sub>
</p>
<p>
  Distance formula between points 
  (<var>x</var><sub>1</sub>, <var>y</var><sub>1</sub>) and 
  (<var>x</var><sub>2</sub>, <var>y</var><sub>2</sub>).
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility Considerations',
      type: 'list',
      items: [
        'Screen readers do not always announce "subscript" aloud by default; when critical, add an aria-label or textual clarification.',
        'Do not use <sub> purely for visual text positioning (e.g., lowering icons); use CSS vertical-align instead.',
        'Ensure line-height in surrounding paragraphs is sufficient so subscript text does not cause irregular baseline jumping.',
      ],
      callout: {
        type: 'note',
        title: 'Mathematical Variables',
        content: 'When typing formulas like x₁, combine `<var>` and `<sub>`: `<var>x</var><sub>1</sub>`.',
      },
    },
  ],
};
