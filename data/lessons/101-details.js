export const detailsLesson = {
  slug: 'details',
  number: '101',
  title: '<details>',
  category: 'Interactive & Web Components',
  subtitle: 'Native disclosure widget toggle from which users can reveal additional details or controls',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Disclosure Widget',
      paragraphs: [
        'The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.',
        'A summary or label must be provided using the <summary> element as the immediate first child. When omitted, browsers provide a default localized label (such as "Details").',
        'Native user-agent behavior includes an interactive disclosure triangle icon that rotates when toggled, full keyboard accessibility (Space/Enter to toggle), and complete native accordions without JavaScript.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<details open>\n  <summary>Frequently Asked Questions</summary>\n  <p>Here is the detailed answer to the question...</p>\n</details>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains an optional <summary> first child followed by flow content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['open', 'Boolean', 'false', 'Indicates whether the details are currently visible (open) on page load.'],
        ['name', 'String', 'none', 'Modern HTML5 attribute allowing multiple <details> to form an exclusive accordion group (only one open at a time).'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Accordions and Disclosures',
      type: 'code-example',
      codeTitle: 'FAQ Toggles with Pure Native HTML',
      code: `<!-- Single native disclosure widget -->
<details>
  <summary>What is HTML5?</summary>
  <p>
    HTML5 is the latest evolution of the standard that defines HTML. 
    It introduces new semantic elements, native media tags, forms 2.0, and canvas APIs.
  </p>
</details>

<!-- Pre-opened disclosure -->
<details open>
  <summary>Is JavaScript required for this toggle?</summary>
  <p>
    No! The &lt;details&gt; and &lt;summary&gt; elements are completely native to the browser engine. 
    No JavaScript or CSS frameworks are required.
  </p>
</details>`,
      demo: {
        title: 'Native Browser Output',
        html: `<details>
  <summary>What is HTML5?</summary>
  <p>
    HTML5 is the latest evolution of the standard that defines HTML. 
    It introduces new semantic elements, native media tags, forms 2.0, and canvas APIs.
  </p>
</details>
<br>
<details open>
  <summary>Is JavaScript required for this toggle?</summary>
  <p>
    No! The &lt;details&gt; and &lt;summary&gt; elements are completely native to the browser engine. 
    No JavaScript or CSS frameworks are required.
  </p>
</details>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Keyboard Navigation',
      type: 'list',
      items: [
        'The <summary> element is natively focusable via Tab, and screen readers announce "expanded" or "collapsed" state.',
        'Pressing Space or Enter while focused on <summary> toggles the open attribute.',
        'Modern browsers support `name="faq"` on <details> elements to create native accordions where opening one automatically closes the others.',
      ],
      callout: {
        type: 'tip',
        title: 'Exclusive Accordions via name="..."',
        content: 'In modern HTML5, adding the same `name="my-group"` attribute to multiple `<details>` elements creates a native exclusive accordion with zero JavaScript!',
      },
    },
  ],
};
