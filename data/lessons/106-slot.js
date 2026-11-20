export const slotLesson = {
  slug: 'slot',
  number: '106',
  title: '<slot>',
  category: 'Interactive & Web Components',
  subtitle: 'Web Component placeholder inside a Shadow DOM tree populated with custom consumer markup',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Shadow DOM Slot',
      paragraphs: [
        'The <slot> HTML element — part of the Web Components technology suite — is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.',
        'Named slots (`<slot name="title">`) allow consumers of a web component to project specific child elements into designated locations inside the component\'s encapsulated Shadow DOM template.',
        'If no content is passed by the consumer, the fallback markup placed between `<slot>Fallback text</slot>` is rendered instead.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<!-- Inside Shadow DOM template -->\n<div class="card">\n  <slot name="card-header">Default Title</slot>\n  <slot>Default body text</slot>\n</div>\n\n<!-- Usage in HTML -->\n<my-card>\n  <span slot="card-header">Custom Headline</span>\n  <p>Custom body description text.</p>\n</my-card>',
      syntaxNote: 'Normal element requiring opening and closing tags. Appears inside Web Component templates and shadow trees.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['name', 'String', 'none', 'The slot\'s name, matching slot="..." attributes on assigned light DOM elements.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Declarative Web Component with Slots',
      type: 'code-example',
      codeTitle: 'Native Slot Content Projection',
      code: `<!-- Web Component with Declarative Shadow DOM and Slots -->
<div id="componentDemo">
  <p>Slots are demonstrated within Web Component Shadow DOM templates:</p>
  <pre><code>&lt;template shadowrootmode="open"&gt;
  &lt;h3&gt;&lt;slot name="title"&gt;Default Title&lt;/slot&gt;&lt;/h3&gt;
  &lt;p&gt;&lt;slot&gt;Default description content&lt;/slot&gt;&lt;/p&gt;
&lt;/template&gt;</code></pre>
</div>`,
      demo: {
        title: 'Native Browser Output',
        html: `<div id="componentDemo">
  <p>Slots are demonstrated within Web Component Shadow DOM templates:</p>
  <pre><code>&lt;template shadowrootmode="open"&gt;
  &lt;h3&gt;&lt;slot name="title"&gt;Default Title&lt;/slot&gt;&lt;/h3&gt;
  &lt;p&gt;&lt;slot&gt;Default description content&lt;/slot&gt;&lt;/p&gt;
&lt;/template&gt;</code></pre>
</div>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Composition & Accessibility Trees',
      type: 'list',
      items: [
        'Light DOM nodes projected into slots maintain their normal accessibility roles and events in the composed accessibility tree.',
        'If a consumer does not provide markup for a slot, the default fallback text inside <slot> is exposed to screen readers.',
      ],
      callout: {
        type: 'tip',
        title: 'Default Unnamed Slot',
        content: 'A `<slot>` without a `name` attribute acts as the default catch-all slot for all child nodes that do not specify a `slot="..."` attribute.',
      },
    },
  ],
};
