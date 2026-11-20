export const brLesson = {
  slug: 'br',
  number: '53',
  title: '<br>',
  category: 'Inline Text Semantics',
  subtitle: 'Produces a line break in text (carriage return) where division of lines is meaningful',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Line Break',
      paragraphs: [
        'The <br> HTML element produces a line break in text (carriage-return). It is useful for writing poems, lyrics, or postal addresses, where the division of lines is significant to the meaning.',
        'It is a void element — it must not have a closing tag, and cannot contain any children or text content.',
        'Do not use <br> to create vertical spacing between paragraphs; use CSS margin properties or separate <p> elements instead.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>123 Main Street<br>Suite 400<br>Springfield, IL 62701</p>',
      syntaxNote: 'Void element. Never write </br>. Self-closing <br /> is valid for XML/XHTML compatibility but <br> is standard HTML5.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['clear', 'none | left | right | all', 'Obsolete in HTML5', 'Indicates where the next line should start relative to floating elements; obsolete, use CSS clear instead.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Postal Addresses and Poetry',
      type: 'code-example',
      codeTitle: 'Address Lines and Stanza Breaks',
      code: `<!-- Postal address with line breaks -->
<address>
  Acme Corporation<br>
  100 Technology Parkway<br>
  San Jose, CA 95110<br>
  United States
</address>

<!-- Poetry stanzas -->
<p>
  Roses are red,<br>
  Violets are blue,<br>
  HTML is semantic,<br>
  And CSS styles it too.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<address>
  Acme Corporation<br>
  100 Technology Parkway<br>
  San Jose, CA 95110<br>
  United States
</address>

<p>
  Roses are red,<br>
  Violets are blue,<br>
  HTML is semantic,<br>
  And CSS styles it too.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Warnings',
      type: 'list',
      items: [
        'Screen readers announce line breaks as pauses or discrete lines.',
        'Writing multiple consecutive `<br><br><br>` tags creates confusing blank pauses for screen reader users and violates accessibility guidelines.',
        'Always separate distinct paragraphs with `<p>` rather than double `<br>` tags.',
      ],
      callout: {
        type: 'warning',
        title: 'Do Not Use for Spacing',
        content: 'Using `<br>` for spacing is fragile and poor practice. Adjust margins via CSS (`margin-bottom: 1.5rem`) to maintain responsive spacing across different device viewports.',
      },
    },
  ],
};
