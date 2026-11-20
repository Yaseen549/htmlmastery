export const dlLesson = {
  slug: 'dl',
  number: '27',
  title: '<dl>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents a description list containing groups of terms (<dt>) and descriptions (<dd>)',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Description List',
      paragraphs: [
        'The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements).',
        'Common uses for this element are to implement a glossary, display key-value pairs (metadata), or showcase question-and-answer FAQ sections.',
        'In HTML5, it is explicitly valid to wrap term-description groups inside <div> elements directly child to the <dl> for styling or microdata purposes.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<dl>\n  <dt>Term</dt>\n  <dd>Description or definition</dd>\n</dl>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains zero or more groups of <dt> and <dd> elements, optionally wrapped in <div> tags.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
        ['compact', 'Boolean', 'Obsolete in HTML5', 'Deprecated hint to render the list in a compact format; use CSS instead.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Description List Usage Examples',
      type: 'code-example',
      codeTitle: 'Glossary and Multi-Term Pairs',
      code: `<!-- Basic glossary -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard document format for web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used for presenting and styling documents.</dd>

  <!-- Multiple terms sharing a single description -->
  <dt>Firefox</dt>
  <dt>Chrome</dt>
  <dt>Safari</dt>
  <dd>Modern standards-compliant web browsers.</dd>
</dl>`,
      demo: {
        title: 'Native Browser Output',
        html: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard document format for web pages.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used for presenting and styling documents.</dd>

  <dt>Firefox</dt>
  <dt>Chrome</dt>
  <dt>Safari</dt>
  <dd>Modern standards-compliant web browsers.</dd>
</dl>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Semantics',
      type: 'list',
      items: [
        'Screen readers announce description lists by reading the total number of items and distinct term/definition pairs.',
        'Avoid using <dl> purely for indentation. Browsers indent <dd> by default (margin-left: 40px), but indentation should be achieved via CSS.',
        'Terms (<dt>) and descriptions (<dd>) must be direct children of <dl> or direct children of <div> wrapper elements inside <dl>.',
      ],
      callout: {
        type: 'tip',
        title: 'HTML5 <div> Wrappers in <dl>',
        content: 'HTML5 standard permits `<dl><div><dt>Key</dt><dd>Value</dd></div></dl>`. This allows convenient flexbox or grid layouts in CSS without breaking semantic accessibility.',
      },
    },
  ],
};
