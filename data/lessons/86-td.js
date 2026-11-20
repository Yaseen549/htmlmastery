export const tdLesson = {
  slug: 'td',
  number: '86',
  title: '<td>',
  category: 'Tables & Tabular Data',
  subtitle: 'Defines a standard data cell containing content within a table row',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Data Cell',
      paragraphs: [
        'The <td> HTML element defines a cell of a table that contains data. It participates in the table model.',
        'User-agent stylesheets render <td> cells with standard font-weight and left-aligned text (or right-aligned in RTL languages).',
        'Using the colspan and rowspan attributes, a data cell can span multiple columns or rows to represent merged cells.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<td colspan="2" rowspan="1">Merged Data Cell</td>',
      syntaxNote: 'Normal element requiring opening and closing tags. Must be a child of <tr>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['colspan', 'Non-negative integer', '1', 'Number of columns the data cell spans across.'],
        ['rowspan', 'Non-negative integer', '1', 'Number of rows the data cell spans down.'],
        ['headers', 'Space-separated list of IDs', 'none', 'List of header cell IDs that provide context for this cell.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Data Cells with Rowspan and Colspan',
      type: 'code-example',
      codeTitle: 'Complex Merged Data Cells',
      code: `<table border="1">
  <caption>Scoreboard</caption>
  <thead>
    <tr>
      <th scope="col">Player</th>
      <th scope="col">Round 1</th>
      <th scope="col">Round 2</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alex</td>
      <td>25</td>
      <td>30</td>
      <td>55</td>
    </tr>
    <tr>
      <td>Jordan</td>
      <td>28</td>
      <td>22</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Status</td>
      <td colspan="3" align="center">Alex advances to finals</td>
    </tr>
  </tbody>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <caption>Scoreboard</caption>
  <thead>
    <tr>
      <th scope="col">Player</th>
      <th scope="col">Round 1</th>
      <th scope="col">Round 2</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alex</td>
      <td>25</td>
      <td>30</td>
      <td>55</td>
    </tr>
    <tr>
      <td>Jordan</td>
      <td>28</td>
      <td>22</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Status</td>
      <td colspan="3" align="center">Alex advances to finals</td>
    </tr>
  </tbody>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Flow Content Inside Data Cells',
      type: 'list',
      items: [
        'A <td> element can contain any flow content: paragraphs, lists, images, buttons, code blocks, or nested tables.',
        'For complex multi-header tables, use headers="id1 id2" on <td> to link cells to their corresponding <th> identifiers.',
      ],
      callout: {
        type: 'tip',
        title: 'The headers Attribute',
        content: 'When tables have irregular grids or multi-level headers where `scope` is insufficient, the `headers="..."` attribute on `<td>` links directly to `<th id="...">` elements.',
      },
    },
  ],
};
