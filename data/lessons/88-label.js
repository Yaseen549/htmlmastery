export const labelLesson = {
  slug: 'label',
  number: '88',
  title: '<label>',
  category: 'Forms & Input Controls',
  subtitle: 'Provides an accessible caption or label for a form control element',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Form Label',
      paragraphs: [
        'The <label> HTML element represents a caption for an item in a user interface.',
        'Associating a <label> with a form control (<input>, <textarea>, <select>, <progress>, <meter>) provides major usability advantages: clicking anywhere on the label text transfers focus directly to the control, and toggles checkboxes and radio buttons.',
        'Crucially, assistive technologies (screen readers) speak the label text when the associated control receives keyboard focus.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<!-- Explicit association via for and id -->\n<label for="user-age">Age in years:</label>\n<input id="user-age" name="age" type="number">\n\n<!-- Implicit nesting association -->\n<label><input type="checkbox" name="agree"> I agree to the terms</label>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['for', 'ID string', 'none', 'The id of a labelable form-related element in the same document.'],
        ['form', 'ID string', 'none', 'The id of a <form> element that the label belongs to (if outside the form).'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Explicit and Nested Label Association',
      type: 'code-example',
      codeTitle: 'Clickable Labels for Text Inputs and Radio Buttons',
      code: `<!-- Explicit label matching input id (Recommended) -->
<p>
  <label for="first_name">First Name:</label>
  <input id="first_name" name="first_name" type="text">
</p>

<!-- Clickable radio options via labels -->
<p>Preferred Contact Method:</p>
<p>
  <label>
    <input type="radio" name="contact" value="email" checked>
    Email
  </label>
  <br>
  <label>
    <input type="radio" name="contact" value="phone">
    Phone
  </label>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  <label for="first_name">First Name:</label>
  <input id="first_name" name="first_name" type="text">
</p>
<p>Preferred Contact Method:</p>
<p>
  <label>
    <input type="radio" name="contact" value="email" checked>
    Email
  </label>
  <br>
  <label>
    <input type="radio" name="contact" value="phone">
    Phone
  </label>
</p>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Touch Target Sizing',
      type: 'list',
      items: [
        'On mobile touchscreens, small checkboxes and radio buttons are difficult to tap accurately. Wrapping the label text enlarges the clickable touch hit target.',
        'Never replace <label> with a placeholder attribute. Placeholders disappear when users type and fail accessibility contrast requirements.',
        'A single <label> element can be associated with at most one form control.',
      ],
      callout: {
        type: 'important',
        title: 'Placeholders are NOT Labels',
        content: '`placeholder="..."` is only a hint, not an accessible label. Screen readers and users with cognitive impairments require a permanent, visible `<label>` element.',
      },
    },
  ],
};
