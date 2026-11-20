export const figcaptionLesson = {
  slug: 'figcaption',
  number: '31',
  title: '<figcaption>',
  category: 'Text Content & Grouping',
  subtitle: 'Provides a caption or legend for the content of its parent <figure>',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Figure Caption',
      paragraphs: [
        'The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element.',
        'It serves as the formal label or accessible title for figures, diagrams, charts, code snippets, or illustrations.',
        'It must be placed as either the immediate first child or immediate last child inside a <figure> element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<figure>\n  <img src="diagram.svg" alt="Architecture flowchart">\n  <figcaption>Figure 1: Application architecture diagram</figcaption>\n</figure>',
      syntaxNote: 'Normal element requiring start and end tags. Must be the first or last direct child inside a <figure>. Only one <figcaption> is permitted per figure.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Caption Placement Patterns',
      type: 'code-example',
      codeTitle: 'Top and Bottom Figure Captions',
      code: `<!-- Caption positioned at the top of the figure -->
<figure>
  <figcaption><strong>Table 1.1:</strong> HTTP Response Status Codes</figcaption>
  <p>200 OK, 301 Moved Permanently, 404 Not Found, 500 Internal Server Error.</p>
</figure>

<!-- Caption positioned at the bottom of the figure -->
<figure>
  <p>The speed of light in vacuum (c) is exactly 299,792,458 metres per second.</p>
  <figcaption><em>Source: International System of Units (SI)</em></figcaption>
</figure>`,
      demo: {
        title: 'Native Browser Output',
        html: `<figure>
  <figcaption><strong>Table 1.1:</strong> HTTP Response Status Codes</figcaption>
  <p>200 OK, 301 Moved Permanently, 404 Not Found, 500 Internal Server Error.</p>
</figure>

<figure>
  <p>The speed of light in vacuum (c) is exactly 299,792,458 metres per second.</p>
  <figcaption><em>Source: International System of Units (SI)</em></figcaption>
</figure>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Behavior',
      type: 'list',
      items: [
        'Assistive technologies automatically use <figcaption> as the accessible label for the parent <figure>.',
        'When an <img> inside a <figure> has an alt attribute, the alt text should describe the visual appearance, while <figcaption> provides the context, source, or narrative explanation.',
        'Never use multiple <figcaption> elements within the same <figure>; having more than one is invalid HTML.',
      ],
      callout: {
        type: 'warning',
        title: 'Parent Restriction',
        content: '<figcaption> cannot be used outside of a <figure> element. If used elsewhere, it has no semantic meaning and fails HTML validator checks.',
      },
    },
  ],
};
