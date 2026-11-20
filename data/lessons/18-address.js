export const addressLesson = {
  slug: 'address',
  number: '18',
  title: '<address>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Supplies contact information for the author or owner of the nearest article or whole document',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Contact Information',
      paragraphs: [
        'The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.',
        'When placed inside an <article>, it represents contact information for the author of that article. When placed directly inside the <body>, it applies to the author of the entire document.',
        'A common misconception is that <address> is meant for arbitrary postal addresses. It is strictly intended for contact information related to document authorship.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<address> Written by <a href="mailto:author@example.com">Author Name</a> </address>',
      syntaxNote: 'Normal element requiring both start and closing tags. Typically styled as italic by default browser user-agent stylesheets.',
    },
    {
      id: 'attributes',
      title: 'Valid Content & Rules Table',
      type: 'attributes-table',
      headers: ['Content Type', 'Allowed in <address>?', 'Purpose / Constraint'],
      rows: [
        ['Email hyperlink (<a href="mailto:...">)', 'Yes (Ideal)', 'Direct digital contact channel to author.'],
        ['Phone number (<a href="tel:...">)', 'Yes (Ideal)', 'Telephone contact method.'],
        ['Physical mailing address of author', 'Yes', 'Geographical contact details for author.'],
        ['Arbitrary physical address (not author)', 'No', 'Use plain <p> instead.'],
        ['Heading tags (<h1>-<h6>) / <article>', 'Forbidden', 'Cannot contain sectioning or heading elements.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Author Contact Presentation',
      type: 'code-example',
      codeTitle: 'Default Browser Italicized Address Element',
      code: `<article>
  <h2>Optimizing Web Performance</h2>
  <p>Article body content...</p>

  <footer>
    <address>
      Written by <a href="mailto:yaseen@example.com">Yaseen</a>.<br>
      Visit our office: 123 Web Standard Ave, Bangalore, India.<br>
      Tel: <a href="tel:+123456789">+1 (234) 567-89</a>
    </address>
  </footer>
</article>`,
      demo: {
        title: 'Native Browser Output',
        html: `<article>
  <h2>Optimizing Web Performance</h2>
  <p>Article body content...</p>

  <footer>
    <address>
      Written by <a href="mailto:yaseen@example.com">Yaseen</a>.<br>
      Visit our office: 123 Web Standard Ave, Bangalore, India.<br>
      Tel: <a href="tel:+123456789">+1 (234) 567-89</a>
    </address>
  </footer>
</article>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Typography Notes',
      type: 'list',
      items: [
        'Browser default user-agent stylesheets apply font-style: italic; to <address>.',
        'Screen readers announce address elements, signaling to assistive tech users that author contact points are reached.',
        'Include machine-readable microdata (e.g. itemscope itemtype="https://schema.org/Person") to maximize SEO authorship signals.',
      ],
      callout: {
        type: 'warning',
        title: 'Postal Address Misuse Warning',
        content: 'Do NOT use <address> to format a list of company store locations or shipping addresses in an e-commerce checkout. Use plain <p> tags with microdata instead.',
      },
    },
  ],
};
