export const ulLesson = {
  slug: 'ul',
  number: '25',
  title: '<ul>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents an unordered collection of items, typically rendered as a bulleted list',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Unordered List',
      paragraphs: [
        'The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list. The order of items in this list does not change the core meaning of the document.',
        'Common uses include navigation menus, feature checklists, ingredient inventories, and product feature summaries.',
        'Like <ol>, its direct children must exclusively be <li> (list item) elements.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>',
      syntaxNote: 'Normal element requiring both start and closing tags. Encloses one or more <li> elements.',
    },
    {
      id: 'attributes',
      title: 'Attributes Reference Table',
      type: 'attributes-table',
      headers: ['Attribute', 'Historical Values', 'Status in HTML5', 'Modern CSS Replacement'],
      rows: [
        ['type', 'disc | circle | square', 'Obsolete in HTML5', 'Use CSS list-style-type instead.'],
        ['compact', 'Boolean', 'Obsolete in HTML5', 'Use CSS line-height and margin instead.'],
        ['Global attributes', 'Supported', 'Standard', 'id, class, style, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Nested Unordered List Example',
      type: 'code-example',
      codeTitle: 'Bulleted List with Nested Sub-List',
      code: `<ul>
  <li>Frontend Technologies
    <ul>
      <li>HTML5 Living Standard</li>
      <li>CSS3 Cascading Style Sheets</li>
      <li>Modern JavaScript (ECMAScript)</li>
    </ul>
  </li>
  <li>Backend Technologies
    <ul>
      <li>Node.js Runtime</li>
      <li>REST &amp; GraphQL APIs</li>
    </ul>
  </li>
  <li>Database Systems</li>
</ul>`,
      demo: {
        title: 'Native Browser Output',
        html: `<ul>
  <li>Frontend Technologies
    <ul>
      <li>HTML5 Living Standard</li>
      <li>CSS3 Cascading Style Sheets</li>
      <li>Modern JavaScript (ECMAScript)</li>
    </ul>
  </li>
  <li>Backend Technologies
    <ul>
      <li>Node.js Runtime</li>
      <li>REST &amp; GraphQL APIs</li>
    </ul>
  </li>
  <li>Database Systems</li>
</ul>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Best Practices',
      type: 'list',
      items: [
        'Screen readers announce "List with X items" when encountering a <ul>, enabling blind users to understand the scope of the collection.',
        'Nested <ul> elements are announced as sub-lists with their respective indentation level.',
        'If you remove bullets via CSS (list-style: none), Safari on VoiceOver historically treated it as plain text rather than a list; preserve semantics using role="list" if removing default bullets.',
      ],
      callout: {
        type: 'accessibility',
        title: 'Navigation Menus in <ul>',
        content: 'Grouping navigation hyperlinks inside <nav><ul><li><a href="..."> is the gold standard for accessible website headers and drawers.',
      },
    },
  ],
};
