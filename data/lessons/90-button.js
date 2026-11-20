export const buttonLesson = {
  slug: 'button',
  number: '90',
  title: '<button>',
  category: 'Forms & Input Controls',
  subtitle: 'Interactive clickable button element for submitting forms, resetting values, or scripting triggers',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Button Control',
      paragraphs: [
        'The <button> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology.',
        'Unlike <input type="button"> (which can only display plain text values), <button> can contain rich HTML content, including text, icons, images, and formatting tags.',
        'CRITICAL GOTCHA: The default type attribute for <button> inside a form is type="submit" (NOT type="button"). Forgetting to specify type="button" on custom action buttons will inadvertently submit the form!',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<button type="submit">Submit Order</button>\n<button type="button" onclick="handleAction()">Cancel</button>\n<button type="reset">Reset</button>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['type', 'submit | reset | button', 'submit', 'The behavior of the button when activated.'],
        ['disabled', 'Boolean', 'false', 'Prevents the user from interacting with the button and stops click events.'],
        ['name', 'String', 'none', 'Name of the button submitted as a pair with value.'],
        ['value', 'String', 'none', 'Defines the value associated with the button\'s name on submit.'],
        ['formaction', 'URL', 'none', 'Overrides the action attribute of the button\'s form owner.'],
        ['formmethod', 'get | post', 'none', 'Overrides the HTTP method of the button\'s form owner.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Browser Button Rendering',
      type: 'code-example',
      codeTitle: 'Standard Native Browser Buttons',
      code: `<!-- Native buttons without custom styling -->
<p>
  <button type="button">Standard Native Button</button>
  <button type="submit">Submit Button</button>
  <button type="reset">Reset Button</button>
  <button type="button" disabled>Disabled Button</button>
</p>

<!-- Form demonstrating button action -->
<form action="#" method="get">
  <label for="txt">Enter note:</label>
  <input type="text" id="txt" name="note" value="Important message">
  <button type="submit">Save Note</button>
</form>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  <button type="button">Standard Native Button</button>
  <button type="submit">Submit Button</button>
  <button type="reset">Reset Button</button>
  <button type="button" disabled>Disabled Button</button>
</p>
<form action="#" method="get">
  <label for="txt">Enter note:</label>
  <input type="text" id="txt" name="note" value="Important message">
  <button type="submit">Save Note</button>
</form>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Keyboard Accessibility & Focus',
      type: 'list',
      items: [
        'Native <button> elements are focusable via the Tab key and are activated by both the Spacebar and Enter keys.',
        'Do NOT attach click event handlers to <div> or <span> elements to simulate buttons. Always use native <button>.',
        'When disabled is present, the button is automatically excluded from tab order and announces its disabled state to screen readers.',
      ],
      callout: {
        type: 'warning',
        title: 'Always Specify type=""',
        content: 'Because the default type is `submit`, any `<button>` inside a `<form>` without an explicit `type="button"` will submit the form when clicked!',
      },
    },
  ],
};
