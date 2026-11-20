export const templateLesson = {
  slug: 'template',
  number: '105',
  title: '<template>',
  category: 'Interactive & Web Components',
  subtitle: 'Holds client-side HTML fragments inert on load, cloned and rendered dynamically via JavaScript',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'HTML Template',
      paragraphs: [
        'The <template> HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded, but may be instantiated subsequently during runtime using JavaScript.',
        'Crucially, content inside <template> is completely inert: images do not download, audio/video do not preload, styles do not apply, and scripts do not execute until the template content is cloned into the live document DOM.',
        'Accessing `template.content` returns a DocumentFragment that can be cloned with `cloneNode(true)`.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<template id="cardTemplate">\n  <div class="user-card">\n    <h3></h3>\n    <p></p>\n  </div>\n</template>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains inert flow content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['shadowrootmode', 'open | closed', 'Modern HTML5', 'Declarative Shadow DOM attribute turning the template into a shadow root.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Cloning Templates with JavaScript',
      type: 'code-example',
      codeTitle: 'Inert Template Instantiated by Button Click',
      code: `<!-- Target container where cloned items appear -->
<div id="targetContainer">
  <p><em>Click the button to clone items from the inert template:</em></p>
</div>

<button type="button" onclick="addCard()">Clone From Template</button>

<!-- Inert Template (Invisible on page load) -->
<template id="cardTpl">
  <div style="border: 1px solid #aaa; margin: 8px 0; padding: 8px;">
    <strong>Cloned Card Component</strong>
    <p>This markup was stored inert inside &lt;template&gt;.</p>
  </div>
</template>

<script>
  function addCard() {
    const tpl = document.getElementById('cardTpl');
    const clone = tpl.content.cloneNode(true);
    document.getElementById('targetContainer').appendChild(clone);
  }
</script>`,
      demo: {
        title: 'Native Browser Output',
        html: `<div id="targetContainer">
  <p><em>Click the button to clone items from the inert template:</em></p>
</div>
<button type="button" onclick="addCard()">Clone From Template</button>
<template id="cardTpl">
  <div style="border: 1px solid #aaa; margin: 8px 0; padding: 8px;">
    <strong>Cloned Card Component</strong>
    <p>This markup was stored inert inside &lt;template&gt;.</p>
  </div>
</template>
<script>
  function addCard() {
    const tpl = document.getElementById('cardTpl');
    const clone = tpl.content.cloneNode(true);
    document.getElementById('targetContainer').appendChild(clone);
  }
</script>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Declarative Shadow DOM Support',
      type: 'list',
      items: [
        'Modern HTML5 supports `<template shadowrootmode="open">` for Declarative Shadow DOM, allowing server-side rendering of Web Components.',
        'Screen readers ignore <template> contents until the cloned nodes are physically inserted into the visible document tree.',
      ],
      callout: {
        type: 'tip',
        title: 'Inert Execution Safety',
        content: 'Scripts inside a `<template>` do NOT run when the page loads. They only execute if and when an instance is created and appended to the active DOM.',
      },
    },
  ],
};
