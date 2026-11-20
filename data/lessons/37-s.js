export const sLesson = {
  slug: 's',
  number: '37',
  title: '<s>',
  category: 'Inline Text Semantics',
  subtitle: 'Renders text with a strikethrough to represent contents that are no longer accurate or relevant',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Strikethrough',
      paragraphs: [
        'The <s> HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate.',
        'However, <s> is not appropriate when indicating document edits; for that, use the <del> (deleted) and <ins> (inserted) elements, as appropriate.',
        'A common real-world use case is displaying original vs discounted pricing or out-of-stock items.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>Regular price: <s>$99.00</s> Sale price: $49.00</p>',
      syntaxNote: 'Normal inline element requiring opening and closing tags. Contains phrasing content.',
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
      title: 'Outdated Information and Struck Prices',
      type: 'code-example',
      codeTitle: 'Pricing Comparison and Deprecated Schedule',
      code: `<p>
  Available Colors: Red, Blue, <s>Green (Out of Stock)</s>, Yellow.
</p>

<p>
  Annual Subscription: <s>$120/year</s> <strong>Now $89/year!</strong>
</p>

<p>
  The keynote address will be held in <s>Room A</s> Room C.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Available Colors: Red, Blue, <s>Green (Out of Stock)</s>, Yellow.
</p>
<p>
  Annual Subscription: <s>$120/year</s> <strong>Now $89/year!</strong>
</p>
<p>
  The keynote address will be held in <s>Room A</s> Room C.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader Strikethrough Caveats',
      type: 'list',
      items: [
        'Most default screen reader profiles do not announce strikethrough styling automatically.',
        'When conveying critical changes (like price changes or cancellations), provide clarifying text (such as "Original price:" or "sold out") alongside <s>.',
        'If marking revisions to a legal or editorial document, use <del> instead of <s>.',
      ],
      callout: {
        type: 'warning',
        title: '<s> vs <del>',
        content: 'Use `<s>` for information that is no longer accurate or valid (like old prices). Use `<del>` when recording an editorial modification or tracked change in a document.',
      },
    },
  ],
};
