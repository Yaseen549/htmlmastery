export const colLesson = {
  slug: 'col',
  number: '80',
  title: '<col>',
  category: 'Tables & Tabular Data',
  subtitle: 'Specifies column-level attributes and span parameters inside a <colgroup>',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Column',
      paragraphs: [
        'The <col> HTML element defines a column within a table and is used for defining common semantics or properties on all common cells in that column.',
        'It is found inside a <colgroup> element and is a void element (it contains no content and has no closing tag).',
        'By using the span attribute, a single <col> element can apply attributes across multiple consecutive columns.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<table>\n  <colgroup>\n    <col span="1">\n    <col span="2">\n  </colgroup>\n  <!-- Rows -->\n</table>',
      syntaxNote: 'Void element with no closing tag. Must be a direct child of a <colgroup> element.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['span', 'Positive integer', '1', 'The number of consecutive columns the <col> element spans.'],
        ['width', 'Pixels / percentage', 'Obsolete in HTML5', 'Column width; obsolete, use CSS width on col.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Column Definitions inside Colgroup',
      type: 'code-example',
      codeTitle: 'Explicit Column Mapping',
      code: `<table border="1">
  <caption>Inventory Status</caption>
  <colgroup>
    <col span="1">
    <col span="1">
    <col span="1">
  </colgroup>
  <thead>
    <tr>
      <th>SKU</th>
      <th>Item Description</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A-101</td>
      <td>Wireless Mouse</td>
      <td>45</td>
    </tr>
    <tr>
      <td>A-102</td>
      <td>USB-C Cable</td>
      <td>120</td>
    </tr>
  </tbody>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <caption>Inventory Status</caption>
  <colgroup>
    <col span="1">
    <col span="1">
    <col span="1">
  </colgroup>
  <thead>
    <tr>
      <th>SKU</th>
      <th>Item Description</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A-101</td>
      <td>Wireless Mouse</td>
      <td>45</td>
    </tr>
    <tr>
      <td>A-102</td>
      <td>USB-C Cable</td>
      <td>120</td>
    </tr>
  </tbody>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Structural Column Mapping',
      type: 'list',
      items: [
        'Assists browser table layout algorithms in pre-calculating column widths before downloading all rows.',
        'Does not alter the accessibility tree directly; column headers (<th>) remain required for accessible headings.',
      ],
      callout: {
        type: 'tip',
        title: 'Void Element',
        content: 'Never write `</col>`. `<col>` is an empty void element in HTML5.',
      },
    },
  ],
};
