export const trLesson = {
  slug: 'tr',
  number: '84',
  title: '<tr>',
  category: 'Tables & Tabular Data',
  subtitle: 'Defines an individual horizontal row of cells within a table',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Table Row',
      paragraphs: [
        'The <tr> HTML element defines a row of cells in a table.',
        'The row\'s cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements.',
        'It is a child of <thead>, <tbody>, or <tfoot>, or a direct child of <table> if row groups are omitted.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<tr>\n  <th>Row Title</th>\n  <td>Data Value</td>\n</tr>',
      syntaxNote: 'Normal element. While HTML syntax permits omitting </tr> if followed by another <tr>, explicit closing tags are standard practice.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['align', 'left | center | right | justify', 'Obsolete in HTML5', 'Use CSS text-align instead.'],
        ['valign', 'top | middle | bottom | baseline', 'Obsolete in HTML5', 'Use CSS vertical-align instead.'],
        ['bgcolor', 'Color string', 'Obsolete in HTML5', 'Row background color; obsolete, use CSS background-color.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Rows with Headers and Data Cells',
      type: 'code-example',
      codeTitle: 'Consecutive Table Rows',
      code: `<table border="1">
  <tr>
    <th scope="col">Browser</th>
    <th scope="col">Engine</th>
    <th scope="col">Release Year</th>
  </tr>
  <tr>
    <td>Chrome</td>
    <td>Blink</td>
    <td>2008</td>
  </tr>
  <tr>
    <td>Firefox</td>
    <td>Gecko</td>
    <td>2004</td>
  </tr>
  <tr>
    <td>Safari</td>
    <td>WebKit</td>
    <td>2003</td>
  </tr>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <tr>
    <th scope="col">Browser</th>
    <th scope="col">Engine</th>
    <th scope="col">Release Year</th>
  </tr>
  <tr>
    <td>Chrome</td>
    <td>Blink</td>
    <td>2008</td>
  </tr>
  <tr>
    <td>Firefox</td>
    <td>Gecko</td>
    <td>2004</td>
  </tr>
  <tr>
    <td>Safari</td>
    <td>WebKit</td>
    <td>2003</td>
  </tr>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Navigation',
      type: 'list',
      items: [
        'Screen readers announce each row index (e.g. "Row 2 of 4") during tabular exploration.',
        'Never place text or other non-cell elements directly inside <tr>; only <td> and <th> are valid children.',
      ],
      callout: {
        type: 'tip',
        title: 'Cell Contents Only',
        content: '`<tr>` can ONLY contain `<th>` and `<td>` elements. Placing `<p>`, `<div>`, or plain text directly inside `<tr>` is invalid HTML.',
      },
    },
  ],
};
