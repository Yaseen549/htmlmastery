export const delLesson = {
  slug: 'del',
  number: '107',
  title: '<del>',
  category: 'Edits & Scripting',
  subtitle: 'Represents text that has been deleted from a document for legal or editorial revision tracking',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Deleted Text',
      paragraphs: [
        'The <del> HTML element represents a range of text that has been deleted from a document.',
        'This can be used when rendering "track changes" or source code diff information, or when updating legal documents and contracts where the historical record of what was removed must be documented.',
        'User-agent stylesheets render <del> with a line through the text (text-decoration: line-through). It is often paired with the <ins> (inserted) element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The meeting is on <del datetime="2026-11-19T10:00:00Z">Thursday</del> <ins datetime="2026-11-20T10:00:00Z">Friday</ins>.</p>',
      syntaxNote: 'Normal element requiring opening and closing tags. Can wrap phrasing text or flow content blocks.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['cite', 'URL', 'none', 'A URL to a resource explaining the rationale or authorization for the deletion.'],
        ['datetime', 'ISO 8601 timestamp', 'none', 'The date and time of the modification.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Tracked Editorial Modifications',
      type: 'code-example',
      codeTitle: 'Document Revisions with Timestamps and Citations',
      code: `<p>
  Original clause: The contractor shall deliver goods within 
  <del cite="https://example.com/amendment-1" datetime="2026-11-20">14 calendar days</del> 
  <ins cite="https://example.com/amendment-1" datetime="2026-11-20">30 business days</ins>.
</p>

<!-- Block-level deletion -->
<del>
  <p>This entire policy section was revoked on January 1, 2026.</p>
</del>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Original clause: The contractor shall deliver goods within 
  <del cite="https://example.com/amendment-1" datetime="2026-11-20">14 calendar days</del> 
  <ins cite="https://example.com/amendment-1" datetime="2026-11-20">30 business days</ins>.
</p>
<del>
  <p>This entire policy section was revoked on January 1, 2026.</p>
</del>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: '<del> vs <s> Distinction',
      type: 'list',
      items: [
        'Use <del> when tracking an editorial change or historical modification in a document.',
        'Use <s> when information is no longer accurate or relevant (such as outdated prices) without tracking document revision history.',
        'Screen readers can be configured to announce "deletion" and "insertion" when reading legal revisions.',
      ],
      callout: {
        type: 'important',
        title: 'The datetime Attribute',
        content: 'Always format `datetime` according to ISO 8601 (e.g. `datetime="2026-11-20T14:30:00Z"`). This provides an immutable audit trail for legal document revisions.',
      },
    },
  ],
};
