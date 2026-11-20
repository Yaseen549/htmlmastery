export const varLesson = {
  slug: 'var',
  number: '43',
  title: '<var>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents a variable in a mathematical expression or computer programming context',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Variable',
      paragraphs: [
        'The <var> HTML element represents the name of a variable in a mathematical expression or a programming context.',
        'User-agent stylesheets render <var> in italics by default (font-style: italic), adhering to traditional mathematical typesetting conventions.',
        'It is commonly used alongside <code>, <samp>, and <kbd> in technical documentation and scientific writing.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The volume of a sphere is given by 4/3 &pi; <var>r</var><sup>3</sup>.</p>',
      syntaxNote: 'Normal inline element requiring start and closing tags. Contains phrasing content representing the variable name.',
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
      title: 'Variables in Equations and Code',
      type: 'code-example',
      codeTitle: 'Mathematical and Programmatic Variables',
      code: `<!-- Mathematical formula -->
<p>
  Solve for <var>x</var> in the equation: 
  2<var>x</var> + 5 = 15.
</p>

<!-- Algorithm explanation -->
<p>
  In the loop, initialize counter <var>i</var> = 0, and increment 
  <var>i</var> until <var>i</var> &ge; <var>n</var>.
</p>

<!-- Physics formula -->
<p>
  Newton's Second Law: <var>F</var> = <var>m</var><var>a</var> 
  (Force = mass &times; acceleration).
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Solve for <var>x</var> in the equation: 
  2<var>x</var> + 5 = 15.
</p>
<p>
  In the loop, initialize counter <var>i</var> = 0, and increment 
  <var>i</var> until <var>i</var> &ge; <var>n</var>.
</p>
<p>
  Newton's Second Law: <var>F</var> = <var>m</var><var>a</var> 
  (Force = mass &times; acceleration).
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Typographic Semantics',
      type: 'list',
      items: [
        'Screen readers recognize <var> as a mathematical or programmatic variable entity.',
        'Use <var> instead of <i> or <em> when referring to variables; this preserves semantic clarity for document parsers.',
        'Can be combined with <sub> and <sup> for indexed mathematical variables like <var>x</var><sub>1</sub>.',
      ],
      callout: {
        type: 'tip',
        title: 'Mathematical Typesetting',
        content: 'While MathML exists for complex formulas, `<var>` paired with `<sub>` and `<sup>` provides a lightweight, universally supported way to format basic formulas directly in HTML.',
      },
    },
  ],
};
