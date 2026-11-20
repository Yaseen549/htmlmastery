export const menuLesson = {
  slug: 'menu',
  number: '104',
  title: '<menu>',
  category: 'Interactive & Web Components',
  subtitle: 'Semantic list of interactive action items, command buttons, or toolbar options',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Interactive Menu',
      paragraphs: [
        'The <menu> HTML element is a semantic alternative to the <ul> element, designed specifically to represent an unordered list of interactive items (such as commands, buttons, or toolbars).',
        'While <ul> is used for general bulleted lists of items or articles, <menu> specifically signifies that its children are actions or commands the user can execute.',
        'In user-agent stylesheets, <menu> renders with bulleted styling and indentation identical to <ul>.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<menu>\n  <li><button type="button">Copy</button></li>\n  <li><button type="button">Paste</button></li>\n</menu>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains <li> and <button> elements.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['type', 'context | toolbar', 'Obsolete in HTML5', 'Obsolete attribute from older drafts; omitted in modern HTML5.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Action Command Toolbar',
      type: 'code-example',
      codeTitle: 'Editor Action Menu with Native Buttons',
      code: `<!-- Semantic action command menu -->
<p>Document Actions Toolbar:</p>
<menu>
  <li><button type="button">New File</button></li>
  <li><button type="button">Save Changes</button></li>
  <li><button type="button">Print Document</button></li>
</menu>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>Document Actions Toolbar:</p>
<menu>
  <li><button type="button">New File</button></li>
  <li><button type="button">Save Changes</button></li>
  <li><button type="button">Print Document</button></li>
</menu>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: '<menu> vs <ul> Semantic Intent',
      type: 'list',
      items: [
        'Use <menu> when the list items represent commands or actions that a user performs.',
        'Use <ul> for static content, navigation links (<nav><ul>), or reading lists.',
        'Assistive technologies treat <menu> as a list with list items, providing native item counts.',
      ],
      callout: {
        type: 'note',
        title: 'HTML5 Modern Definition',
        content: 'In HTML5, `<menu>` was redefined simply as a semantic alias for `<ul>` specifically intended for interactive user interface commands.',
      },
    },
  ],
};
