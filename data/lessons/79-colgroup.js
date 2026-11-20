export const colgroupLesson = {
  slug: 'colgroup',
  number: '79',
  title: '<colgroup>',
  category: 'Tables & Tabular Data',
  subtitle: 'Defines a structural group of one or more columns in a table for bulk column properties',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Column Group',
      paragraphs: [
        'The <colgroup> HTML element defines a group of columns within a table.',
        'It allows web authors to apply structural grouping or styling across entire columns at once, rather than having to repeat properties or classes on every single <td> in every row.',
        'If present, <colgroup> must appear after any <caption> and before any <thead>, <tbody>, <tfoot>, or <tr> elements.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<table>\n  <colgroup span="2" class="highlight-cols"></colgroup>\n  <colgroup>\n    <col class="col-a">\n    <col class="col-b">\n  </colgroup>\n  <!-- Rows follow -->\n</table>',
      syntaxNote: 'Normal element requiring opening and closing tags. Can contain zero or more <col> elements, or use the span attribute.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['span', 'Positive integer', '1', 'Number of consecutive columns the group encompasses (ignored if child <col> elements exist).'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Grouping Table Columns',
      type: 'code-example',
      codeTitle: 'Column Groups Structuring Demographic Data',
      code: `<table border="1">
  <caption>Student Demographics</caption>
  <colgroup span="1"></colgroup>
  <colgroup span="2"></colgroup>
  <thead>
    <tr>
      <th>Student Name</th>
      <th>Grade Level</th>
      <th>Major</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Johnson</td>
      <td>Senior</td>
      <td>Computer Science</td>
    </tr>
    <tr>
      <td>Bob Smith</td>
      <td>Junior</td>
      <td>Mathematics</td>
    </tr>
  </tbody>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <caption>Student Demographics</caption>
  <colgroup span="1"></colgroup>
  <colgroup span="2"></colgroup>
  <thead>
    <tr>
      <th>Student Name</th>
      <th>Grade Level</th>
      <th>Major</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice Johnson</td>
      <td>Senior</td>
      <td>Computer Science</td>
    </tr>
    <tr>
      <td>Bob Smith</td>
      <td>Junior</td>
      <td>Mathematics</td>
    </tr>
  </tbody>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'CSS Column Properties Limitation',
      type: 'list',
      items: [
        'By CSS specification, only four CSS properties apply to <colgroup> and <col>: border, background, width, and visibility.',
        'Other properties (like font-weight or color) must be set on cell elements (th/td).',
      ],
      callout: {
        type: 'note',
        title: 'Child <col> Precedence',
        content: 'If `<colgroup>` contains child `<col>` tags, the `span` attribute on `<colgroup>` is ignored by standard HTML parsers.',
      },
    },
  ],
};
