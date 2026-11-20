export const uLesson = {
  slug: 'u',
  number: '50',
  title: '<u>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents an unarticulated, non-textual annotation such as spelling errors or proper nouns',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Annotation',
      paragraphs: [
        'The <u> HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.',
        'By default in user-agent stylesheets, it renders with an underline (text-decoration: underline).',
        'Typical standard use cases include marking spelling errors, labeling proper names in Chinese text (proper name mark), or indicating family names.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>You made a typographical error in the word <u>definately</u>.</p>',
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
      title: 'Spelling Errors and Annotated Names',
      type: 'code-example',
      codeTitle: 'Misspellings and Proper Name Marks',
      code: `<!-- Marking spelling mistakes -->
<p>
  The applicant wrote: "I am <u>exited</u> to apply for this role" (spelled incorrectly; should be "excited").
</p>

<!-- Proper name mark in Chinese typography -->
<p lang="zh">
  我的朋友<u>张伟</u>住在中国北京。
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  The applicant wrote: "I am <u>exited</u> to apply for this role" (spelled incorrectly; should be "excited").
</p>
<p lang="zh">
  我的朋友<u>张伟</u>住在中国北京。
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'CRITICAL WARNING: Confusion with Hyperlinks',
      type: 'list',
      items: [
        'Web users universally associate underlined text with clickable hyperlinks.',
        'Using <u> for generic emphasis or decoration creates severe usability confusion.',
        'Screen readers do not automatically announce underlines; always provide textual explanation alongside misspellings.',
      ],
      callout: {
        type: 'warning',
        title: 'Avoid Link Confusion',
        content: 'Never use `<u>` purely to underline text for visual emphasis. Users will attempt to click it expecting a hyperlink. Use CSS text-decoration or proper semantic tags instead.',
      },
    },
  ],
};
