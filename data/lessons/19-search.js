export const searchLesson = {
  slug: 'search',
  number: '19',
  title: '<search>',
  category: 'Sectioning & Landmarks',
  subtitle: 'The modern HTML5 landmark specifically designating search and filtering user interfaces',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Modern Landmark',
      paragraphs: [
        'The <search> HTML element is a container representing the parts of the document or application that are specifically used to conduct a search or filtering operation.',
        'Historically, developers had to use <form role="search"> or <div role="search"> to create an accessible search landmark for screen readers. The W3C and WHATWG officially introduced the native <search> element to replace ARIA workarounds with clean native markup.',
        'The <search> element has an implicit ARIA role of "search", providing an immediate navigation landmark for all modern screen readers.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<search> <form action="/search"> <input type="search" name="q"> </form> </search>',
      syntaxNote: 'Normal element requiring opening and closing tags. Encloses search forms, filter selectors, or query inputs.',
    },
    {
      id: 'attributes',
      title: 'ARIA Role & Support Matrix',
      type: 'attributes-table',
      headers: ['Feature / Browser', 'Implicit Role', 'Specification', 'Support'],
      rows: [
        ['Implicit ARIA role', 'search', 'WHATWG Living Standard', 'All modern browsers (Chrome 118+, Safari 17+, Firefox 118+)'],
        ['Enclosed content', 'Forms, inputs, buttons, filters', 'Semantic container', 'Standard'],
        ['Global attributes', 'Supported', 'id, class, style, etc.', 'Standard'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Unstyled Search Form',
      type: 'code-example',
      codeTitle: 'Browser Default Search Input & Button',
      code: `<search>
  <form action="/topics" method="get">
    <label for="q">Search tags: </label>
    <input type="search" id="q" name="q" placeholder="e.g. dialog, form">
    <button type="submit">Search</button>
  </form>
</search>`,
      demo: {
        title: 'Native Browser Output',
        html: `<search>
  <form action="#" method="get" onsubmit="event.preventDefault(); alert('Search input submitted natively');">
    <label for="q">Search tags: </label>
    <input type="search" id="q" name="q" placeholder="e.g. dialog, form">
    <button type="submit">Search</button>
  </form>
</search>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Benefits',
      type: 'list',
      items: [
        'The <search> element is announced as a search landmark by VoiceOver, NVDA, JAWS, and TalkBack.',
        'Users can use quick landmark navigation keys to jump directly to the search bar from anywhere on the page without tabbing through 50 links.',
        'Do NOT write <search role="search">. Adding an explicit role="search" is redundant and triggers accessibility linter warnings in modern toolchains.',
      ],
      callout: {
        type: 'modern',
        title: 'Replaces <form role="search">',
        content: '<search> is supported in all evergreen browsers. It eliminates the need to remember ARIA landmark roles for search and filter widgets.',
      },
    },
  ],
};
