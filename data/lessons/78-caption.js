export const captionLesson = {
  slug: 'caption',
  number: '78',
  title: '<caption>',
  category: 'Tables & Tabular Data',
  subtitle: 'Specifies the accessible title, legend, or explanation of a data table',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Table Caption',
      paragraphs: [
        'The <caption> HTML element specifies the caption (or title) of a table.',
        'If used, it must always be the very first child of a <table> element, appearing before any <colgroup>, <thead>, or <tr> tags.',
        'User-agent stylesheets center the caption text horizontally above the table by default (caption-side: top; text-align: center).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<table>\n  <caption>Monthly Household Budget (in USD)</caption>\n  <tr><th>Category</th><th>Amount</th></tr>\n  <tr><td>Rent</td><td>$1,500</td></tr>\n</table>',
      syntaxNote: 'Normal element requiring opening and closing tags. Must be the immediate first child inside <table>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Status', 'Description'],
      rows: [
        ['align', 'top | bottom | left | right', 'Obsolete in HTML5', 'Positions the caption; obsolete, use CSS caption-side instead.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Descriptive Table Captions',
      type: 'code-example',
      codeTitle: 'Table Caption with Native Centered Placement',
      code: `<table border="1">
  <caption>Table 1: Planetary Diameters and Distances from Sun</caption>
  <thead>
    <tr>
      <th>Planet</th>
      <th>Diameter (km)</th>
      <th>Distance (AU)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mercury</td>
      <td>4,879</td>
      <td>0.39</td>
    </tr>
    <tr>
      <td>Venus</td>
      <td>12,104</td>
      <td>0.72</td>
    </tr>
    <tr>
      <td>Earth</td>
      <td>12,742</td>
      <td>1.00</td>
    </tr>
  </tbody>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <caption>Table 1: Planetary Diameters and Distances from Sun</caption>
  <thead>
    <tr>
      <th>Planet</th>
      <th>Diameter (km)</th>
      <th>Distance (AU)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mercury</td>
      <td>4,879</td>
      <td>0.39</td>
    </tr>
    <tr>
      <td>Venus</td>
      <td>12,104</td>
      <td>0.72</td>
    </tr>
    <tr>
      <td>Earth</td>
      <td>12,742</td>
      <td>1.00</td>
    </tr>
  </tbody>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader Table Exploration',
      type: 'list',
      items: [
        'Screen readers announce the <caption> as the accessible name of the table before reading any rows or columns.',
        'This allows blind users to quickly decide if they wish to inspect the table or skip past it.',
        'Only one <caption> element is permitted per table.',
      ],
      callout: {
        type: 'tip',
        title: 'First Child Requirement',
        content: 'Even if you want the caption visually placed at the bottom using `caption-side: bottom` in CSS, the `<caption>` tag MUST still be the first child inside the `<table>` in HTML markup.',
      },
    },
  ],
};
