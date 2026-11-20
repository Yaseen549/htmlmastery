export const insLesson = {
  slug: 'ins',
  number: '108',
  title: '<ins>',
  category: 'Edits & Scripting',
  subtitle: 'Represents text that has been added or inserted into a document for editorial revision tracking',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Inserted Text',
      paragraphs: [
        'The <ins> HTML element represents a range of text that has been added to a document.',
        'It is commonly used to showcase tracked changes, amendments to legal statutes, or updates to technical documentation.',
        'User-agent stylesheets render <ins> with an underline by default (text-decoration: underline). It is typically paired with <del>.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The proposal was updated to include <ins datetime="2026-11-20">renewable energy incentives</ins>.</p>',
      syntaxNote: 'Normal element requiring opening and closing tags. Can wrap phrasing text or flow content blocks.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['cite', 'URL', 'none', 'A URL to a document or commit explaining why the text was inserted.'],
        ['datetime', 'ISO 8601 timestamp', 'none', 'The date and time of the modification.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Document Amendment Tracking',
      type: 'code-example',
      codeTitle: 'Tracked Insertions in Legal Terms',
      code: `<p>
  Standard terms: All subscriptions auto-renew annually, 
  <ins datetime="2026-11-20T00:00:00Z">with a 30-day email notification sent prior to renewal</ins>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Standard terms: All subscriptions auto-renew annually, 
  <ins datetime="2026-11-20T00:00:00Z">with a 30-day email notification sent prior to renewal</ins>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Link Confusion Caveat',
      type: 'list',
      items: [
        'Because <ins> renders with an underline, ensure the surrounding context makes it clear that the text is an editorial addition, not a clickable hyperlink.',
        'Screen readers announce "inserted" when tracking verbosity is enabled.',
      ],
      callout: {
        type: 'tip',
        title: 'Block and Inline Flexibility',
        content: 'Like `<del>`, `<ins>` is unique in HTML: if it contains only inline text, it acts as an inline element. If it wraps `<p>` tags, it acts as a block-level container.',
      },
    },
  ],
};
