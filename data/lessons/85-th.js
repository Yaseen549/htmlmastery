export const thLesson = {
  slug: 'th',
  number: '85',
  title: '<th>',
  category: 'Tables & Tabular Data',
  subtitle: 'Defines a header cell providing heading labels for a column or row of cells',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Header Cell',
      paragraphs: [
        'The <th> HTML element defines a cell as the header of a group of table cells.',
        'User-agent stylesheets render <th> cells in bold text, centered horizontally by default (font-weight: bold; text-align: center).',
        'The scope attribute is critical for accessibility: it explicitly defines whether the header applies to a column (scope="col"), a row (scope="row"), a group of columns (scope="colgroup"), or a group of rows (scope="rowgroup").',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<th scope="col" colspan="2">Consolidated Header</th>',
      syntaxNote: 'Normal element requiring opening and closing tags. Must be child of <tr>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['scope', 'col | row | colgroup | rowgroup', 'auto', 'Defines the cells that the header element relates to.'],
        ['colspan', 'Non-negative integer', '1', 'Number of columns the cell spans across.'],
        ['rowspan', 'Non-negative integer', '1', 'Number of rows the cell spans down.'],
        ['headers', 'Space-separated list of IDs', 'none', 'List of header cell IDs that provide context for this cell.'],
        ['abbr', 'String', 'none', 'Short abbreviated label for the header cell for screen readers.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Column and Row Headers with Scope',
      type: 'code-example',
      codeTitle: 'Two-Dimensional Header Grid with Colspan and Rowspan',
      code: `<table border="1">
  <caption>Weekly Class Schedule</caption>
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Monday</th>
      <th scope="col">Wednesday</th>
      <th scope="col">Friday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">09:00 AM</th>
      <td>Calculus I</td>
      <td>Calculus I</td>
      <td>Calculus I</td>
    </tr>
    <tr>
      <th scope="row">11:00 AM</th>
      <td colspan="3" align="center">Physics Lab (All Sections)</td>
    </tr>
  </tbody>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <caption>Weekly Class Schedule</caption>
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Monday</th>
      <th scope="col">Wednesday</th>
      <th scope="col">Friday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">09:00 AM</th>
      <td>Calculus I</td>
      <td>Calculus I</td>
      <td>Calculus I</td>
    </tr>
    <tr>
      <th scope="row">11:00 AM</th>
      <td colspan="3" align="center">Physics Lab (All Sections)</td>
    </tr>
  </tbody>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessible Heading Associations',
      type: 'list',
      items: [
        'Always provide the scope attribute on <th> to ensure screen readers unambiguously associate headers with data cells.',
        'When navigating a cell in a table, screen readers speak the row header and column header before speaking the cell data.',
        'Never use <td> with bold styling in place of <th>; semantic headers are required for accessibility compliance.',
      ],
      callout: {
        type: 'important',
        title: 'scope="col" and scope="row"',
        content: 'Without `scope`, screen readers must guess whether a header applies horizontally or vertically. Always specify `scope="col"` or `scope="row"` explicitly.',
      },
    },
  ],
};
