export const tfootLesson = {
  slug: 'tfoot',
  number: '83',
  title: '<tfoot>',
  category: 'Tables & Tabular Data',
  subtitle: 'Encapsulates the footer and summary rows at the bottom of a table',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Table Foot',
      paragraphs: [
        'The <tfoot> HTML element defines a set of rows summarizing the columns of the table.',
        'Typical contents include totals, averages, minimum/maximum aggregates, footnotes, or signature blocks related to the table data.',
        'In printed media, browser print engines can repeat the <tfoot> at the bottom of each printed page.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n  <tfoot>\n    <tr>\n      <th>Total Sum</th>\n      <td>$1,500.00</td>\n    </tr>\n  </tfoot>\n</table>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains one or more <tr> elements.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['align', 'left | center | right | justify', 'Obsolete in HTML5', 'Use CSS text-align instead.'],
        ['valign', 'top | middle | bottom | baseline', 'Obsolete in HTML5', 'Use CSS vertical-align instead.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Summary Rows with Totals',
      type: 'code-example',
      codeTitle: 'Invoice Calculation with Table Foot',
      code: `<table border="1">
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Web Hosting (Annual)</td>
      <td>1</td>
      <td>$120.00</td>
    </tr>
    <tr>
      <td>Domain Registration</td>
      <td>2</td>
      <td>$30.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="2">Total Due</th>
      <td><strong>$150.00</strong></td>
    </tr>
  </tfoot>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Web Hosting (Annual)</td>
      <td>1</td>
      <td>$120.00</td>
    </tr>
    <tr>
      <td>Domain Registration</td>
      <td>2</td>
      <td>$30.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="2">Total Due</th>
      <td><strong>$150.00</strong></td>
    </tr>
  </tfoot>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'HTML5 Position Ordering',
      type: 'list',
      items: [
        'In HTML5, <tfoot> MUST appear after <tbody>; placing it before <tbody> is no longer valid.',
        'Screen readers identify cells inside <tfoot> as table footer/summary cells.',
        'Combine with colspan to span aggregate descriptions across multiple columns.',
      ],
      callout: {
        type: 'warning',
        title: 'HTML5 Placement Rule',
        content: 'In HTML 4, authors were allowed to put `<tfoot>` before `<tbody>` so it rendered while body streamed. In HTML5 Living Standard, `<tfoot>` MUST be placed after all `<tbody>` elements.',
      },
    },
  ],
};
