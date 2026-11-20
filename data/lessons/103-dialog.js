export const dialogLesson = {
  slug: 'dialog',
  number: '103',
  title: '<dialog>',
  category: 'Interactive & Web Components',
  subtitle: 'Native modal dialog box or subwindow with backdrop overlay and top-layer focus trapping',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Modal Dialog',
      paragraphs: [
        'The <dialog> HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.',
        'When displayed via JavaScript using `dialog.showModal()`, the browser promotes the element to the browser\'s Top Layer (above all z-index stacks), renders a native `::backdrop` dimmed overlay behind it, and automatically traps keyboard focus inside the dialog.',
        'Pressing the Escape key automatically closes the modal dialog and restores keyboard focus to the button that opened it.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<dialog id="myModal">\n  <p>Are you sure you want to proceed?</p>\n  <form method="dialog">\n    <button value="cancel">Cancel</button>\n    <button value="confirm">Confirm</button>\n  </form>\n</dialog>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains flow content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['open', 'Boolean', 'false', 'Indicates that the dialog is active and can be interacted with (non-modal mode).'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Modal Dialog in Action',
      type: 'code-example',
      codeTitle: 'Dialog with method="dialog" Form Submission',
      code: `<!-- Trigger button -->
<button type="button" onclick="document.getElementById('nativeDialog').showModal()">
  Open Native Dialog
</button>

<!-- Native HTML5 Dialog -->
<dialog id="nativeDialog">
  <h3>Subscription Confirmation</h3>
  <p>Would you like to subscribe to the monthly developer digest?</p>
  
  <!-- Submitting form with method="dialog" closes the dialog automatically -->
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Yes, Subscribe</button>
  </form>
</dialog>`,
      demo: {
        title: 'Native Browser Output',
        html: `<button type="button" onclick="document.getElementById('nativeDialog').showModal()">
  Open Native Dialog
</button>
<dialog id="nativeDialog">
  <h3>Subscription Confirmation</h3>
  <p>Would you like to subscribe to the monthly developer digest?</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Yes, Subscribe</button>
  </form>
</dialog>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Top Layer & Accessibility Superpowers',
      type: 'list',
      items: [
        'showModal() automatically prevents background scrolling and interaction (inert background).',
        'Keyboard focus is trapped inside the dialog until closed.',
        'Pressing the Escape (Esc) key triggers the native cancel event and closes the dialog.',
      ],
      callout: {
        type: 'tip',
        title: 'method="dialog"',
        content: 'Forms inside `<dialog>` with `method="dialog"` automatically close the dialog upon button click and set `dialog.returnValue` to the button\'s `value` attribute, with zero JavaScript event listeners needed.',
      },
    },
  ],
};
