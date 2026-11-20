export const listingLesson = {
  slug: 'listing',
  number: '132',
  title: '<listing>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated computer listing container; obsolete in HTML5, replaced by <pre><code>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <listing> HTML element was introduced in early HTML to render text in a monospace font with up to 132 characters per line, intended for wide computer printout listings.',
        'It was deprecated in HTML 3.2 and is completely obsolete in HTML5.',
        'Use `<pre><code>` with CSS styling for code listings.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete HTML 2.0 Tag -->\n<listing>PROGRAM HELLO\nWRITE(*,*) "HELLO WORLD"\nEND</listing>\n\n<!-- Standard Modern HTML5 Replacement -->\n<pre><code>PROGRAM HELLO\nWRITE(*,*) "HELLO WORLD"\nEND</code></pre>',
      syntaxNote: 'Obsolete element. Fails HTML5 validation.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Obsolete', 'Only global attributes applied.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Historical Listing in Modern Browsers',
      type: 'code-example',
      codeTitle: 'Listing Tag in Browser Engine',
      code: `<!-- Historical <listing> tag rendered in monospace by user-agent -->
<listing>
  // Sample code inside legacy listing tag
  int main(void) {
      return 0;
  }
</listing>`,
      demo: {
        title: 'Native Browser Output',
        html: `<listing>
  // Sample code inside legacy listing tag
  int main(void) {
      return 0;
  }
</listing>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Legacy Compatibility',
      type: 'list',
      items: [
        'User-agent stylesheets map <listing> to `display: block; font-family: monospace; white-space: pre;`.',
        'Replace with semantic `<pre><code>` in all modern codebases.',
      ],
      callout: {
        type: 'note',
        title: 'Obsolete',
        content: 'Like `<xmp>`, `<listing>` is an obsolete relic from the early 1990s.',
      },
    },
  ],
};
