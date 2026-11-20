export const summaryLesson = {
  slug: 'summary',
  number: '102',
  title: '<summary>',
  category: 'Interactive & Web Components',
  subtitle: 'Specifies the visible summary, caption, or handle for a <details> disclosure element',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Summary Caption',
      paragraphs: [
        'The <summary> HTML element specifies a summary, caption, or legend for a <details> element\'s disclosure box.',
        'Clicking the <summary> element toggles the state of the parent <details> element open and closed.',
        'It must be the first child element of a <details> tag.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<details>\n  <summary>Click to view system requirements</summary>\n  <ul><li>4 GB RAM</li><li>2.0 GHz Processor</li></ul>\n</details>',
      syntaxNote: 'Normal element requiring opening and closing tags. Must be the immediate first child of <details>.',
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
      title: 'Custom Summary Headings',
      type: 'code-example',
      codeTitle: 'Rich Content Inside Summary Element',
      code: `<details>
  <summary><strong>Advanced Settings</strong> (Click to configure)</summary>
  <p>
    Configure port numbers, proxy routing, and SSL certificate expiration thresholds.
  </p>
</details>`,
      demo: {
        title: 'Native Browser Output',
        html: `<details>
  <summary><strong>Advanced Settings</strong> (Click to configure)</summary>
  <p>
    Configure port numbers, proxy routing, and SSL certificate expiration thresholds.
  </p>
</details>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader Mapping',
      type: 'list',
      items: [
        'Screen readers map <summary> to a button role with an aria-expanded state corresponding to the parent <details open> state.',
        'Can contain phrasing text, strong emphasis, or badges, but must not contain interactive elements like links or buttons.',
      ],
      callout: {
        type: 'warning',
        title: 'No Nested Interactive Tags',
        content: 'Do not put `<a>` links or `<button>` elements inside `<summary>`. Clicking them triggers the disclosure toggle instead of the child action.',
      },
    },
  ],
};
