export const sampLesson = {
  slug: 'samp',
  number: '44',
  title: '<samp>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents sample or quoted output from a computer program, script, or system',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Sample Output',
      paragraphs: [
        'The <samp> HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program, script, or normal operating system.',
        'Like the <code> element, user-agent stylesheets render <samp> using the browser\'s default monospace font.',
        'To display multi-line terminal or console output, nest <samp> inside a <pre> element: `<pre><samp>...</samp></pre>`.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The server responded with <samp>404 Not Found</samp>.</p>',
      syntaxNote: 'Normal inline element requiring both start and closing tags. Contains phrasing content.',
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
      title: 'Computer Output Messages',
      type: 'code-example',
      codeTitle: 'Inline Output and Terminal Log Blocks',
      code: `<!-- Inline system notification -->
<p>
  When the file does not exist, the program prints: 
  <samp>Error: File 'config.json' not found.</samp>
</p>

<!-- Multi-line console output -->
<pre><samp>git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean</samp></pre>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  When the file does not exist, the program prints: 
  <samp>Error: File 'config.json' not found.</samp>
</p>
<pre><samp>git status
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean</samp></pre>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Distinction from <code> and <kbd>',
      type: 'list',
      items: [
        '<code> represents the source code instructions written by a programmer.',
        '<kbd> represents the keystrokes entered by the human user.',
        '<samp> represents the resulting output emitted by the machine.',
      ],
      callout: {
        type: 'note',
        title: 'The Semantic Trio',
        content: 'Remember the sequence: The user inputs `<kbd>`, the system executes `<code>`, and the screen displays `<samp>`.',
      },
    },
  ],
};
