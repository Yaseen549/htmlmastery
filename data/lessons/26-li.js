export const liLesson = {
  slug: 'li',
  number: '26',
  title: '<li>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents an individual item in a list contained within <ol>, <ul>, or <menu>',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'List Item',
      paragraphs: [
        'The <li> HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>).',
        'In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<li>List item content</li>',
      syntaxNote: 'Normal element requiring both start and closing tags (closing </li> is optional if another <li> follows, but recommended).',
    },
    {
      id: 'attributes',
      title: 'Attributes Reference Table',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Allowed Parent', 'Description'],
      rows: [
        ['value', 'Integer', '<ol> only', 'Explicitly overrides the numerical sequence value of this item and subsequent items.'],
        ['type', 'String', 'Obsolete in HTML5', 'Historical attribute. Use CSS list-style-type.'],
        ['Global attributes', 'Supported', 'Any parent', 'id, class, style, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Custom Sequence Value Example',
      type: 'code-example',
      codeTitle: 'Overriding Ordered List Counter with value Attribute',
      code: `<ol>
  <li>First item (Number 1)</li>
  <li>Second item (Number 2)</li>
  <li value="100">Century Milestone (Jump to 100)</li>
  <li>Follow-up item (Number 101)</li>
  <li>Next item (Number 102)</li>
</ol>`,
      demo: {
        title: 'Native Browser Output',
        html: `<ol>
  <li>First item (Number 1)</li>
  <li>Second item (Number 2)</li>
  <li value="100">Century Milestone (Jump to 100)</li>
  <li>Follow-up item (Number 101)</li>
  <li>Next item (Number 102)</li>
</ol>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Parent Constraints',
      type: 'list',
      items: [
        'An <li> element MUST always be a direct child of <ol>, <ul>, or <menu>. Placing an <li> standalone inside a <div> or <body> is invalid HTML.',
        'Screen readers announce the current item index and total items (e.g. "Item 3 of 5") based on parent list metrics.',
        'When nesting lists, place the child <ul> or <ol> INSIDE the parent <li>, never directly between <li> tags.',
      ],
      callout: {
        type: 'warning',
        title: 'Proper List Nesting Rule',
        content: 'Correct: <ul><li>Item 1<ul><li>Subitem</li></ul></li></ul>\nIncorrect: <ul><li>Item 1</li><ul><li>Subitem</li></ul></ul>',
      },
    },
  ],
};
