export const dataLesson = {
  slug: 'data',
  number: '55',
  title: '<data>',
  category: 'Inline Text Semantics',
  subtitle: 'Links human-readable content with a machine-readable translation value',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Machine Data',
      paragraphs: [
        'The <data> HTML element links a given piece of content with a machine-readable translation.',
        'If the content is time- or date-related, the <time> element must be used instead. For non-temporal identifiers (such as product SKUs, serial numbers, ISBNs, or internal database keys), <data> is the standard element.',
        'The machine-readable value is supplied via the required value attribute.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>New book in stock: <data value="978-0131103627">The C Programming Language (2nd Ed)</data></p>',
      syntaxNote: 'Normal inline element requiring opening and closing tags. Requires the value attribute.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['value', 'String', 'Required', 'Specifies the machine-readable translation or identifier of the element\'s contents.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Product SKUs and Catalog Identifiers',
      type: 'code-example',
      codeTitle: 'E-Commerce Product Listing with SKUs',
      code: `<ul>
  <li>
    <data value="SKU-84920">Wireless Noise-Canceling Headphones</data> 
    — Price: $199.99
  </li>
  <li>
    <data value="SKU-99214">Ergonomic Mechanical Keyboard</data> 
    — Price: $129.00
  </li>
  <li>
    <data value="SKU-10482">USB-C Fast Charging Hub</data> 
    — Price: $34.50
  </li>
</ul>`,
      demo: {
        title: 'Native Browser Output',
        html: `<ul>
  <li>
    <data value="SKU-84920">Wireless Noise-Canceling Headphones</data> 
    — Price: $199.99
  </li>
  <li>
    <data value="SKU-99214">Ergonomic Mechanical Keyboard</data> 
    — Price: $129.00
  </li>
  <li>
    <data value="SKU-10482">USB-C Fast Charging Hub</data> 
    — Price: $34.50
  </li>
</ul>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'SEO and Web Scraping Benefits',
      type: 'list',
      items: [
        'Web crawlers and automated bots extract structured product data accurately using the value attribute.',
        'By default, user-agent stylesheets render <data> as standard inline phrasing without altering visual appearance.',
        'Always provide human-friendly text between the opening and closing tags.',
      ],
      callout: {
        type: 'note',
        title: '<data> vs <time>',
        content: 'Never use `<data>` for dates or timestamps. WHATWG specifications require `<time datetime="...">` for any time- or date-related machine values.',
      },
    },
  ],
};
