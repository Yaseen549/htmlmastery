export const theadLesson = {
  slug: 'thead',
  number: '81',
  title: '<thead>',
  category: 'Tables & Tabular Data',
  subtitle: 'Groups the header rows of a table containing column titles and scope definitions',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Table Head',
      paragraphs: [
        'The <thead> HTML element defines a set of rows defining the head of the columns of the table.',
        'Along with <tbody> and <tfoot>, it provides semantic structure separating column titles from the dataset and summary calculations.',
        'When printing multi-page documents, browser print engines can repeat the <thead> at the top of each printed page.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<table>\n  <thead>\n    <tr>\n      <th scope="col">Name</th>\n      <th scope="col">Email</th>\n    </tr>\n  </thead>\n  <tbody>...</tbody>\n</table>',
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
      title: 'Table Headers in Action',
      type: 'code-example',
      codeTitle: 'Table with Header Row Group',
      code: `<table border="1">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EMP-001</td>
      <td>Jane Doe</td>
      <td>Engineering</td>
    </tr>
    <tr>
      <td>EMP-002</td>
      <td>John Smith</td>
      <td>Design</td>
    </tr>
  </tbody>
</table>`,
      demo: {
        title: 'Native Browser Output',
        html: `<table border="1">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EMP-001</td>
      <td>Jane Doe</td>
      <td>Engineering</td>
    </tr>
    <tr>
      <td>EMP-002</td>
      <td>John Smith</td>
      <td>Design</td>
    </tr>
  </tbody>
</table>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Print Benefits',
      type: 'list',
      items: [
        'Screen readers identify rows inside <thead> as structural headers for the remainder of the table.',
        'Always place header cells (<th>) inside <thead> with scope="col" for full accessibility compliance.',
        'Only one <thead> element is permitted per table.',
      ],
      callout: {
        type: 'tip',
        title: 'HTML5 Ordering',
        content: 'In HTML 4, `<tfoot>` could be placed before `<tbody>`. In HTML5, `<thead>` must come first, followed by `<tbody>`, followed by `<tfoot>`.',
      },
    },
  ],
};
