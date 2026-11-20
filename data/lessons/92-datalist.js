export const datalistLesson = {
  slug: 'datalist',
  number: '92',
  title: '<datalist>',
  category: 'Forms & Input Controls',
  subtitle: 'Predefined set of recommended autocomplete options for <input> controls',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Autocomplete',
      paragraphs: [
        'The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to other controls.',
        'To bind a <datalist> to an <input> element, set the input\'s list attribute to match the datalist\'s id attribute: `<input list="browsers">`.',
        'Unlike <select> (which forces users to pick only from the provided list), a <datalist> provides a hybrid autocomplete: users can pick a recommended suggestion OR type any arbitrary custom value freely.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<label for="ice-cream-choice">Choose a flavor:</label>\n<input list="ice-cream-flavors" id="ice-cream-choice" name="flavor">\n<datalist id="ice-cream-flavors">\n  <option value="Chocolate">\n  <option value="Vanilla">\n  <option value="Strawberry">\n</datalist>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains one or more <option> elements.',
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
      title: 'Autocomplete Search Inputs',
      type: 'code-example',
      codeTitle: 'Input with Datalist Suggestions',
      code: `<!-- Autocomplete input with datalist -->
<label for="browser-input">Choose or type your web browser:</label><br>
<input list="browsers" id="browser-input" name="browser" placeholder="Type a letter (e.g. C or F)...">

<datalist id="browsers">
  <option value="Google Chrome">
  <option value="Mozilla Firefox">
  <option value="Apple Safari">
  <option value="Microsoft Edge">
  <option value="Opera">
  <option value="Brave">
</datalist>`,
      demo: {
        title: 'Native Browser Output',
        html: `<label for="browser-input">Choose or type your web browser:</label><br>
<input list="browsers" id="browser-input" name="browser" placeholder="Type a letter (e.g. C or F)...">
<datalist id="browsers">
  <option value="Google Chrome">
  <option value="Mozilla Firefox">
  <option value="Apple Safari">
  <option value="Microsoft Edge">
  <option value="Opera">
  <option value="Brave">
</datalist>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Datalist Autocomplete Features',
      type: 'list',
      items: [
        'The <datalist> itself is completely invisible until the user focuses or types into the associated <input>.',
        'As the user types, the browser automatically filters matching options based on substring matching.',
        'Screen readers announce that an input has an autocomplete suggestions list available.',
      ],
      callout: {
        type: 'tip',
        title: 'No JavaScript Needed',
        content: '`<datalist>` implements full autocomplete filtering natively in the browser engine without requiring external auto-suggest JavaScript libraries.',
      },
    },
  ],
};
