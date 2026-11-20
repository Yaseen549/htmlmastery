export const scriptLesson = {
  slug: 'script',
  number: '109',
  title: '<script>',
  category: 'Edits & Scripting',
  subtitle: 'Embeds executable JavaScript code or data blocks with async, defer, and module attributes',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Executable Script',
      paragraphs: [
        'The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.',
        'The <script> element can also be used with other languages, such as WebGL GLSL shader programming language, or JSON-LD structured data via `type="application/ld+json"`.',
        'In modern HTML5, script loading is optimized using `defer` (downloads in background without blocking HTML parsing, runs in order when parsing finishes) and `async` (runs immediately upon download).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<!-- External ES module script -->\n<script type="module" src="app.js"></script>\n\n<!-- External deferred script -->\n<script src="analytics.js" defer></script>\n\n<!-- Inline JSON-LD data -->\n<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "WebSite",\n  "name": "HTML5 Reference"\n}\n</script>',
      syntaxNote: 'Normal element requiring opening and closing tags. Never use self-closing <script />.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['src', 'URL', 'none', 'The URL of an external script file.'],
        ['type', 'MIME type / "module"', 'text/javascript', 'Identifies the script type: standard JS, "module" (ES modules), or data formats.'],
        ['async', 'Boolean', 'false', 'Executes script asynchronously as soon as it downloads.'],
        ['defer', 'Boolean', 'false', 'Executes script in order after the document has been completely parsed.'],
        ['nomodule', 'Boolean', 'false', 'Prevents execution in browsers that support ES modules (fallback for legacy browsers).'],
        ['integrity', 'Subresource integrity hash', 'none', 'Cryptographic hash ensuring the fetched script has not been tampered with.'],
        ['crossorigin', 'anonymous | use-credentials', 'none', 'Configures CORS credentials handling for cross-origin script requests.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Script Execution Demonstrations',
      type: 'code-example',
      codeTitle: 'Inline Interactive Script Execution',
      code: `<!-- Interactive script updating the DOM -->
<p id="scriptMsg">Click the button to execute client-side JavaScript:</p>
<button type="button" onclick="runScriptDemo()">Execute Script</button>

<script>
  function runScriptDemo() {
    const el = document.getElementById('scriptMsg');
    el.textContent = 'JavaScript executed successfully! Current time: ' + new Date().toLocaleTimeString();
    el.style.color = '#ea580c';
    el.style.fontWeight = 'bold';
  }
</script>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p id="scriptMsg">Click the button to execute client-side JavaScript:</p>
<button type="button" onclick="runScriptDemo()">Execute Script</button>
<script>
  function runScriptDemo() {
    const el = document.getElementById('scriptMsg');
    el.textContent = 'JavaScript executed successfully! Current time: ' + new Date().toLocaleTimeString();
    el.style.color = '#ea580c';
    el.style.fontWeight = 'bold';
  }
</script>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'defer vs async Performance',
      type: 'list',
      items: [
        'defer: Script downloads in parallel without blocking HTML parsing. Guaranteed to execute in document order before DOMContentLoaded.',
        'async: Script downloads in parallel, but pauses HTML parsing immediately when download finishes to execute. Execution order is unpredictable.',
        'For almost all web applications and dependencies, `defer` or `type="module"` (which is deferred by default) is the recommended best practice.',
      ],
      callout: {
        type: 'tip',
        title: 'Modules are Deferred Automatically',
        content: 'Scripts marked with `type="module"` are automatically executed in deferred mode by default; adding `defer` manually is unnecessary.',
      },
    },
  ],
};
