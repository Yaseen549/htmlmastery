export const optionLesson = {
  slug: 'option',
  number: '94',
  title: '<option>',
  category: 'Forms & Input Controls',
  subtitle: 'Defines an individual selectable choice in a <select>, <optgroup>, or <datalist>',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Option Item',
      paragraphs: [
        'The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element.',
        'As such, <option> can represent menu items in popups and other lists of items in an HTML document.',
        'The value attribute specifies the value to be submitted to the server. If value is omitted, the text content inside the <option> tag is submitted instead.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<option value="mercury" selected>Mercury</option>',
      syntaxNote: 'Normal element. While HTML permits omitting </option> if immediately followed by another option or close tag, explicit closing tags are standard practice.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['value', 'String', 'Text content', 'The value to be submitted with the form when this option is selected.'],
        ['selected', 'Boolean', 'false', 'Specifies that the option should be pre-selected on page load.'],
        ['disabled', 'Boolean', 'false', 'Disables the option, preventing user selection.'],
        ['label', 'String', 'Text content', 'Shorter label for the option (used in some mobile pickers).'],
      ],
    },
    {
      id: 'code-example',
      title: 'Options in Select and Datalist',
      type: 'code-example',
      codeTitle: 'Pre-Selected and Disabled Options',
      code: `<label for="theme-choice">Select Color Theme:</label><br>
<select id="theme-choice" name="theme">
  <option value="system">System Default</option>
  <option value="light">Light Theme</option>
  <option value="dark" selected>Dark Theme (Selected)</option>
  <option value="contrast" disabled>High Contrast (Coming Soon)</option>
</select>`,
      demo: {
        title: 'Native Browser Output',
        html: `<label for="theme-choice">Select Color Theme:</label><br>
<select id="theme-choice" name="theme">
  <option value="system">System Default</option>
  <option value="light">Light Theme</option>
  <option value="dark" selected>Dark Theme (Selected)</option>
  <option value="contrast" disabled>High Contrast (Coming Soon)</option>
</select>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Value vs Display Text',
      type: 'list',
      items: [
        'Always provide an explicit value attribute so database keys remain stable even if the user-facing display label changes.',
        'Disabled options are announced as unavailable by screen readers.',
      ],
      callout: {
        type: 'tip',
        title: 'selected vs checked',
        content: 'Use `selected` on `<option>` tags, and `checked` on `<input type="checkbox">` or `<input type="radio">` tags.',
      },
    },
  ],
};
