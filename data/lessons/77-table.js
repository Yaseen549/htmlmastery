export const tableLesson = {
  slug: 'table',
  number: '77',
  title: '<table>',
  category: 'Tables & Tabular Data',
  subtitle: 'Top-level container representing tabular data arranged in rows and columns',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Data Table',
      paragraphs: [
        'The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells.',
        'It must never be used for visual page layouts. In modern standards-compliant web development, <table> is reserved strictly for genuine tabular datasets (financial balances, comparison charts, schedules, scientific data).',
        'Valid direct children of <table> must appear in strict sequence: an optional <caption>, followed by optional <colgroup> elements, followed by an optional <thead>, followed by either zero or more <tbody> elements or one or more <tr> elements, followed by an optional <tfoot>.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<table border="1">\n  <caption>Financial Summary 2026</caption>\n  <thead>\n    <tr><th>Quarter</th><th>Revenue</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Q1</td><td>$24,000</td></tr>\n  </tbody>\n</table>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains table structural elements.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Status', 'Description'],
      rows: [
        ['border', '"1" or ""', 'Permitted in HTML5', 'Indicates that the table cells should have a border; only "1" or "" allowed in HTML5.'],
        ['cellpadding', 'Pixels', 'Obsolete in HTML5', 'Spacing within cells; obsolete, use CSS padding.'],
        ['cellspacing', 'Pixels', 'Obsolete in HTML5', 'Spacing between cells; obsolete, use CSS border-spacing.'],
        ['width', 'Pixels / percentage', 'Obsolete in HTML5', 'Width of table; obsolete, use CSS width.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Browser Table Rendering',
      type: 'code-example',
      codeTitle: 'Tabular Data with Native Browser User-Agent Styles',
      code: `<!-- Native table without CSS styling -->
<table border="1">
  <caption>Quarterly Sales Data</caption>
  <thead>
    <tr>
      <th>Product Category</th>
      <th>Units Sold</th>
      <th>Gross Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptops</td>
      <td>1,420</td>
      <td>$1,704,000</td>
    </tr>
    <tr>
      <td>Monitors</td>
      <td>890</td>
      <td>$267,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <th>2,310</th>
      <th>$1,971,000</th>
    </tr>
  </tfoot>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <caption>Quarterly Sales Data</caption>
  <thead>
    <tr>
      <th>Product Category</th>
      <th>Units Sold</th>
      <th>Gross Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptops</td>
      <td>1,420</td>
      <td>$1,704,000</td>
    </tr>
    <tr>
      <td>Monitors</td>
      <td>890</td>
      <td>$267,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <th>2,310</th>
      <th>$1,971,000</th>
    </tr>
  </tfoot>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Navigation',
      type: 'list',
      items: [
        'Screen readers announce table dimensions ("Table with 3 columns and 4 rows") and read row/column headers when users navigate from cell to cell.',
        'Never use tables for document layout; layout tables confuse screen readers and disrupt logical reading order.',
        'Always include <caption> and <th scope="..."> attributes for accessible tabular data.',
      ],
      callout: {
        type: 'important',
        title: 'Strictly No Layout Tables',
        content: 'Using `<table>` for page layouts destroys responsive mobile reflow and forces screen readers into tabular speech mode. Use CSS Grid or Flexbox for layout.',
      },
    },
  ],
};
