export const mathLesson = {
  slug: 'math',
  number: '75',
  title: '<math>',
  category: 'Images & Multimedia',
  subtitle: 'Mathematical Markup Language (MathML) root element for rendering complex formulas natively',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'MathML Root',
      paragraphs: [
        'The <math> HTML element is the top-level element in MathML (Mathematical Markup Language). Every valid MathML mathematical formula must be enclosed in a <math> tag.',
        'Standardized as part of the WHATWG HTML and MathML Core standards, all modern browsers natively render MathML equations (fractions, roots, superscripts, matrices, integrals) without external JavaScript libraries or image fallbacks.',
        'MathML markup describes the semantic structure of mathematical expressions, enabling screen readers to speak equations accurately (e.g., "fraction with numerator a and denominator b").',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<math display="block">\n  <mrow>\n    <msup><mi>x</mi><mn>2</mn></msup>\n    <mo>+</mo>\n    <msup><mi>y</mi><mn>2</mn></msup>\n    <mo>=</mo>\n    <msup><mi>r</mi><mn>2</mn></msup>\n  </mrow>\n</math>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains MathML elements such as <mrow>, <mi>, <mn>, <mo>, <mfrac>, and <msqrt>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['display', 'inline | block', 'inline', 'Rendering style: inline (within text line) or block (centered on its own dedicated line).'],
        ['xmlns', 'MathML namespace URL', 'none', 'Namespace URL (optional in HTML5 documents, required in standalone XML).'],
      ],
    },
    {
      id: 'code-example',
      title: 'Fractions and Square Roots in MathML',
      type: 'code-example',
      codeTitle: 'The Quadratic Formula in Pure MathML',
      code: `<!-- Quadratic formula: x = (-b ± √(b² - 4ac)) / (2a) -->
<math display="block">
  <mi>x</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mo>−</mo>
      <mi>b</mi>
      <mo>±</mo>
      <msqrt>
        <mrow>
          <msup><mi>b</mi><mn>2</mn></msup>
          <mo>−</mo>
          <mn>4</mn><mi>a</mi><mi>c</mi>
        </mrow>
      </msqrt>
    </mrow>
    <mrow>
      <mn>2</mn><mi>a</mi>
    </mrow>
  </mfrac>
</math>`,
      demo: {
        title: 'Native Browser Output',
        html: `<math display="block">
  <mi>x</mi>
  <mo>=</mo>
  <mfrac>
    <mrow>
      <mo>−</mo>
      <mi>b</mi>
      <mo>±</mo>
      <msqrt>
        <mrow>
          <msup><mi>b</mi><mn>2</mn></msup>
          <mo>−</mo>
          <mn>4</mn><mi>a</mi><mi>c</mi>
        </mrow>
      </msqrt>
    </mrow>
    <mrow>
      <mn>2</mn><mi>a</mi>
    </mrow>
  </mfrac>
</math>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'MathML Tags Breakdown',
      type: 'list',
      items: [
        '<mi> represents an identifier (variable name like x, y, a).',
        '<mn> represents a numerical literal (number like 2, 4).',
        '<mo> represents an operator (+, -, =, ±).',
        '<mfrac> creates a stacked fraction with numerator and denominator.',
        '<msqrt> creates a radical square root symbol with radical line over its contents.',
      ],
      callout: {
        type: 'tip',
        title: 'Full Browser Support',
        content: 'As of 2023 with MathML Core in Chromium, Safari, and Firefox, MathML is natively supported across 100% of modern evergreen web browsers.',
      },
    },
  ],
};
