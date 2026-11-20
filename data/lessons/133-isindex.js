export const isindexLesson = {
  slug: 'isindex',
  number: '133',
  title: '<isindex>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated single-line search prompt from HTML 2.0; obsolete, replaced by <form> and <input>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <isindex> HTML element was an early HTML 2.0 element used to send a search query string to the server.',
        'It displayed a single-line text input prompt with the default label "This is a searchable index. Enter search keywords:". When submitted, it appended the query keywords to the document URL.',
        'It was deprecated in HTML 4 and removed completely in HTML5. Modern websites use a standard `<form>` with `<input type="search">` or the HTML5 `<search>` landmark element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 2.0 Search Prompt -->\n<isindex prompt="Search our index: ">\n\n<!-- Modern Standard HTML5 Search Form -->\n<search>\n  <form action="/search" method="get">\n    <label for="q">Search keywords:</label>\n    <input type="search" id="q" name="q">\n    <button type="submit">Search</button>\n  </form>\n</search>',
      syntaxNote: 'Obsolete void element. Not supported in modern HTML documents.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Modern Alternative'],
      rows: [
        ['prompt', 'String', 'Obsolete', 'label element text or placeholder attribute'],
        ['action', 'URL', 'Obsolete', 'action attribute on <form>'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern HTML5 Search Form',
      type: 'code-example',
      codeTitle: 'Accessible HTML5 Search Control',
      code: `<!-- Modern accessible search structure -->
<form action="#" method="get">
  <label for="search-box">Enter search keywords:</label><br>
  <input type="search" id="search-box" name="q" placeholder="Type here...">
  <button type="submit">Search</button>
</form>`,
      demo: {
        title: 'Native Browser Output',
        html: `<form action="#" method="get">
  <label for="search-box">Enter search keywords:</label><br>
  <input type="search" id="search-box" name="q" placeholder="Type here...">
  <button type="submit">Search</button>
</form>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'From <isindex> to <search>',
      type: 'list',
      items: [
        'HTML5 introduced the dedicated `<search>` landmark element for semantic search UI.',
        'Always combine with `<label>` for full assistive technology accessibility.',
      ],
      callout: {
        type: 'tip',
        title: 'Native HTML5 <search>',
        content: 'Use the modern HTML5 `<search>` landmark element to wrap your search form for ideal accessibility and semantic structure.',
      },
    },
  ],
};
