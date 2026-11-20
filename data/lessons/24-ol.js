export const olLesson = {
  slug: 'ol',
  number: '24',
  title: '<ol>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents an ordered list of items, typically rendered as a numbered sequence',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Ordered List',
      paragraphs: [
        'The <ol> HTML element represents an ordered list of items — typically rendered as a numbered list where the sequence of items is meaningful.',
        'Changing the order of items in an <ol> changes the meaning of the document (such as steps in a recipe or instructions in an algorithm). If order does not matter, use an unordered list (<ul>) instead.',
        'Its direct children must exclusively be <li> (list item) elements or <template> elements.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<ol start="1" type="1" reversed>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>',
      syntaxNote: 'Normal element requiring both start and closing tags. Contains one or more <li> elements.',
    },
    {
      id: 'attributes',
      title: 'Standard Attributes Matrix',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['type', '"1" | "a" | "A" | "i" | "I"', '"1"', 'Numbering style: decimal (1), lowercase letters (a), uppercase letters (A), lowercase Roman numerals (i), uppercase Roman numerals (I).'],
        ['start', 'Integer', '1', 'Initial numerical starting value for the list items.'],
        ['reversed', 'Boolean', 'false', 'Numbers the list in descending order (e.g., 3, 2, 1 countdown).'],
      ],
    },
    {
      id: 'code-example',
      title: 'Ordered List Numbering Variations',
      type: 'code-example',
      codeTitle: 'Ordered Lists with Type and Reversed Modifiers',
      code: `<!-- Standard decimal list -->
<ol>
  <li>Preheat oven to 350°F (175°C).</li>
  <li>Mix ingredients in a bowl.</li>
  <li>Bake for 25 minutes.</li>
</ol>

<!-- Uppercase Roman numerals starting at 5 -->
<ol type="I" start="5">
  <li>Section Five</li>
  <li>Section Six</li>
</ol>

<!-- Countdown list with reversed attribute -->
<ol reversed>
  <li>Three</li>
  <li>Two</li>
  <li>One</li>
</ol>`,
      demo: {
        title: 'Native Browser Output',
        html: `<ol>
  <li>Preheat oven to 350°F (175°C).</li>
  <li>Mix ingredients in a bowl.</li>
  <li>Bake for 25 minutes.</li>
</ol>

<ol type="I" start="5">
  <li>Section Five</li>
  <li>Section Six</li>
</ol>

<ol reversed>
  <li>Three</li>
  <li>Two</li>
  <li>One</li>
</ol>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & Accessibility Features',
      type: 'list',
      items: [
        'Screen readers announce ordered lists by stating the total item count (e.g. "List, 3 items") and read the item numbers automatically.',
        'Never manually type numbers inside list items (e.g. <li>1. First</li>); this causes screen readers to read the number twice.',
        'Do not place non-<li> tags (like <div> or <p>) as direct children of <ol>; all list content must reside inside <li>.',
      ],
      callout: {
        type: 'tip',
        title: 'The reversed Attribute',
        content: 'The reversed attribute is ideal for countdowns, top-10 rankings, and chronological timelines ordered from newest to oldest.',
      },
    },
  ],
};
