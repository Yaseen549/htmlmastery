export const codeLesson = {
  slug: 'code',
  number: '42',
  title: '<code>',
  category: 'Inline Text Semantics',
  subtitle: 'Displays inline computer code, function names, file paths, or shell commands',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Code Fragment',
      paragraphs: [
        'The <code> HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.',
        'By default, user-agent stylesheets display the content text in the browser\'s default monospace font (such as Courier or Consolas).',
        'To represent multiple lines of code, wrap the <code> element inside a <pre> element to preserve line breaks and indentation: `<pre><code>...</code></pre>`.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>Use the <code>document.getElementById()</code> method to look up a DOM node.</p>',
      syntaxNote: 'Normal inline element requiring opening and closing tags. Contains phrasing content representing code.',
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
      title: 'Inline Code and Function References',
      type: 'code-example',
      codeTitle: 'Code in Paragraph Sentences',
      code: `<p>
  To install dependencies, run <code>npm install</code> in your project root.
</p>

<p>
  The function <code>calculateTax(amount, rate)</code> returns the total calculated tax.
</p>

<p>
  In Python, write <code>import math</code> to access <code>math.pi</code> and <code>math.sqrt()</code>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  To install dependencies, run <code>npm install</code> in your project root.
</p>
<p>
  The function <code>calculateTax(amount, rate)</code> returns the total calculated tax.
</p>
<p>
  In Python, write <code>import math</code> to access <code>math.pi</code> and <code>math.sqrt()</code>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Encoding Special Characters',
      type: 'list',
      items: [
        'Special HTML characters like < and > must be escaped as &lt; and &gt; inside <code> blocks.',
        'Screen readers announce monospace code fragments, often pausing or spelling out variable identifiers.',
        'Combine with <kbd> for keyboard shortcuts or <samp> for sample program output when appropriate.',
      ],
      callout: {
        type: 'tip',
        title: 'Multi-line Code',
        content: 'Inline `<code>` does not preserve whitespace or line breaks. For multi-line code listings, always nest inside `<pre>`: `<pre><code>const x = 10;\\nconsole.log(x);</code></pre>`.',
      },
    },
  ],
};
