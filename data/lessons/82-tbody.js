export const tbodyLesson = {
  slug: 'tbody',
  number: '82',
  title: '<tbody>',
  category: 'Tables & Tabular Data',
  subtitle: 'Encloses the main body rows containing tabular data cells in a table',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Table Body',
      paragraphs: [
        'The <tbody> HTML element encapsulates a set of table rows (<tr> elements), creating the body of the table.',
        'A table can contain multiple <tbody> elements if the dataset is divided into distinct thematic sections (e.g., separating sales data by region or department within the same table).',
        'If an author writes <tr> elements directly child to <table> without a <tbody>, the browser parser automatically synthesizes an implicit <tbody> wrapper in the DOM tree.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<table>\n  <tbody>\n    <tr><td>Row 1 Data</td></tr>\n    <tr><td>Row 2 Data</td></tr>\n  </tbody>\n</table>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains one or more <tr> rows.',
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
      title: 'Multiple Body Sections in One Table',
      type: 'code-example',
      codeTitle: 'Two Thematic Tbody Row Groups',
      code: `<table border="1">
  <thead>
    <tr>
      <th>Region</th>
      <th>Representative</th>
      <th>Sales</th>
    </tr>
  </thead>
  <!-- Section 1: North America -->
  <tbody>
    <tr>
      <td>North America</td>
      <td>Sara Connor</td>
      <td>$85,000</td>
    </tr>
  </tbody>
  <!-- Section 2: Europe -->
  <tbody>
    <tr>
      <td>Europe</td>
      <td>Pierre Dubois</td>
      <td>$72,000</td>
    </tr>
  </tbody>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <thead>
    <tr>
      <th>Region</th>
      <th>Representative</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>North America</td>
      <td>Sara Connor</td>
      <td>$85,000</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Europe</td>
      <td>Pierre Dubois</td>
      <td>$72,000</td>
    </tr>
  </tbody>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'DOM Synthesis Behavior',
      type: 'list',
      items: [
        'JavaScript DOM queries like `table.children` will expose the synthesized `<tbody>` even if omitted in raw HTML markup.',
        'Explicitly writing `<tbody>` prevents subtle JavaScript query selector bugs.',
        'Screen readers navigate seamlessly through sequential `<tbody>` row groups.',
      ],
      callout: {
        type: 'note',
        title: 'Multiple <tbody> Elements',
        content: 'Having multiple `<tbody>` tags in a single table is completely valid and standard HTML5, ideal for sectioned tables without creating separate table containers.',
      },
    },
  ],
};
