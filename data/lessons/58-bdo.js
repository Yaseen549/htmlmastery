export const bdoLesson = {
  slug: 'bdo',
  number: '58',
  title: '<bdo>',
  category: 'Inline Text Semantics',
  subtitle: 'Overrides the current directionality of text to render it explicitly LTR or RTL',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'BiDi Override',
      paragraphs: [
        'The <bdo> (Bidirectional Override) HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.',
        'Unlike <bdi> (which isolates text to let the algorithm decide), <bdo> strictly forces characters to render in the direction specified by its required dir attribute.',
        'If dir="rtl", characters are written right-to-left. If dir="ltr", characters are written left-to-right.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p><bdo dir="rtl">This English text is displayed backwards.</bdo></p>',
      syntaxNote: 'Normal inline element requiring opening and closing tags. The dir attribute is required.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['dir', 'ltr | rtl', 'Required', 'The directionality of text inside the element: ltr (left-to-right) or rtl (right-to-left).'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Bidirectional Text Overrides',
      type: 'code-example',
      codeTitle: 'Forcing Directionality Inversions',
      code: `<!-- Normal left-to-right text -->
<p>
  Standard text: Hello, World!
</p>

<!-- Overriding direction to right-to-left -->
<p>
  RTL Override: <bdo dir="rtl">Hello, World!</bdo>
</p>

<!-- Overriding LTR inside an RTL context -->
<p dir="rtl">
  Hebrew or Arabic paragraph containing: 
  <bdo dir="ltr">CODE-1234-XYZ</bdo>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Standard text: Hello, World!
</p>
<p>
  RTL Override: <bdo dir="rtl">Hello, World!</bdo>
</p>
<p dir="rtl">
  Hebrew or Arabic paragraph containing: 
  <bdo dir="ltr">CODE-1234-XYZ</bdo>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & Usage Warnings',
      type: 'list',
      items: [
        'Screen readers may attempt to read characters in reverse sequence when <bdo dir="rtl"> is applied to LTR text.',
        'Do not use <bdo> for simple language changes; use `<span lang="..." dir="...">` instead.',
        'Use <bdo> only when you explicitly need visual character order reversal (e.g. specialized linguistic or cryptographic display).',
      ],
      callout: {
        type: 'warning',
        title: 'Required dir Attribute',
        content: 'Omitting the `dir` attribute on `<bdo>` is invalid HTML and causes the element to have no effect.',
      },
    },
  ],
};
