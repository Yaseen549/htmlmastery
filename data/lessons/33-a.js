export const aLesson = {
  slug: 'a',
  number: '33',
  title: '<a>',
  category: 'Inline Text Semantics',
  subtitle: 'The Anchor element creates hyperlinks to web pages, files, email addresses, or document anchors',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Hyperlink',
      paragraphs: [
        'The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations within the same page, or anything else a URL can address.',
        'Content within each <a> should indicate the link\'s destination. If the href attribute is present, pressing the enter key while focusing on the <a> element will activate it.',
        'If the href attribute is omitted, the <a> element acts as a placeholder for where a link had once existed or might be placed in the future.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>',
      syntaxNote: 'Normal element requiring opening and closing tags. Can wrap phrasing content or entire flow content blocks (such as heading + paragraph + image).',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['href', 'URL', 'none', 'The URL that the hyperlink points to. Supports http(s), mailto:, tel:, #hash, etc.'],
        ['target', '_self | _blank | _parent | _top', '_self', 'Where to display the linked URL.'],
        ['download', 'Filename string / Boolean', 'none', 'Prompts the browser to download the linked URL instead of navigating to it.'],
        ['rel', 'Relationship tokens (noopener, noreferrer, nofollow, author)', 'none', 'Specifies the relationship of the target object to the link object.'],
        ['type', 'MIME type string', 'none', 'Hints at the MIME type of the linked resource.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Hyperlink Types & Targets',
      type: 'code-example',
      codeTitle: 'Web Link, In-Page Anchor, Email, and Phone',
      code: `<!-- External link opening in new tab -->
<p>
  Read the official documentation at
  <a href="https://www.w3.org" target="_blank" rel="noopener noreferrer">W3C Website</a>.
</p>

<!-- Email and telephone protocol links -->
<p>
  Contact support at <a href="mailto:support@example.com">support@example.com</a> or
  call <a href="tel:+18005550199">+1 (800) 555-0199</a>.
</p>

<!-- In-page jump link -->
<p>
  Skip ahead to the <a href="#conclusion">Conclusion section</a>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Read the official documentation at
  <a href="https://www.w3.org" target="_blank" rel="noopener noreferrer">W3C Website</a>.
</p>

<p>
  Contact support at <a href="mailto:support@example.com">support@example.com</a> or
  call <a href="tel:+18005550199">+1 (800) 555-0199</a>.
</p>

<p>
  Skip ahead to the <a href="#conclusion">Conclusion section</a>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Security Best Practices',
      type: 'list',
      items: [
        'Always use meaningful link text. Never use generic phrases like "click here" or "read more" out of context.',
        'When target="_blank" is used, modern browsers automatically apply rel="noopener" to prevent reverse tabnabbing security vulnerabilities.',
        'Links receive native keyboard focus (Tab) and trigger navigation on Enter.',
      ],
      callout: {
        type: 'warning',
        title: 'Do Not Use Links as Buttons',
        content: 'Do not use `<a href="#">` or `<a href="javascript:void(0)">` for actions that do not change URLs or navigate. Use `<button type="button">` for JavaScript triggers.',
      },
    },
  ],
};
