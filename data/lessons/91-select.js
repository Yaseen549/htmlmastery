export const selectLesson = {
  slug: 'select',
  number: '91',
  title: '<select>',
  category: 'Forms & Input Controls',
  subtitle: 'Dropdown selection menu providing a list of selectable option items',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Select Menu',
      paragraphs: [
        'The <select> HTML element represents a control that provides a menu of options.',
        'Options within the menu are represented by <option> elements, which can optionally be grouped into categorized sections using <optgroup> tags.',
        'By default, <select> renders as a single-line drop-down list. If the multiple attribute is specified, users can select multiple options simultaneously, and the control renders as a scrollable multi-line list box.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<select name="country" id="country-select" required>\n  <option value="">--Please choose an option--</option>\n  <option value="us">United States</option>\n  <option value="ca">Canada</option>\n</select>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains <option> and <optgroup> elements.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['name', 'String', 'none', 'Name of the control submitted with form data.'],
        ['multiple', 'Boolean', 'false', 'Allows multiple options to be selected.'],
        ['size', 'Positive integer', '1', 'Number of visible options in a scrollable list box.'],
        ['required', 'Boolean', 'false', 'Requires the user to select an option before submitting.'],
        ['disabled', 'Boolean', 'false', 'Disables the control from receiving focus or selection.'],
        ['autocomplete', 'Autofill token', 'none', 'Hints for browser autofill (e.g. "country", "bday-month").'],
      ],
    },
    {
      id: 'code-example',
      title: 'Single-Choice and Multiple-Choice Selects',
      type: 'code-example',
      codeTitle: 'Standard Dropdown and Multi-Select List Box',
      code: `<!-- Single-choice dropdown menu -->
<p>
  <label for="car-select">Choose a vehicle:</label><br>
  <select id="car-select" name="car">
    <option value="">--Select Car--</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</p>

<!-- Multiple-choice list box (size="4") -->
<p>
  <label for="toppings">Select Pizza Toppings (Hold Ctrl/Cmd to select multiple):</label><br>
  <select id="toppings" name="toppings" multiple size="4">
    <option value="mushrooms">Mushrooms</option>
    <option value="onions">Onions</option>
    <option value="peppers">Bell Peppers</option>
    <option value="olives">Black Olives</option>
  </select>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  <label for="car-select">Choose a vehicle:</label><br>
  <select id="car-select" name="car">
    <option value="">--Select Car--</option>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </select>
</p>
<p>
  <label for="toppings">Select Pizza Toppings (Hold Ctrl/Cmd to select multiple):</label><br>
  <select id="toppings" name="toppings" multiple size="4">
    <option value="mushrooms">Mushrooms</option>
    <option value="onions">Onions</option>
    <option value="peppers">Bell Peppers</option>
    <option value="olives">Black Olives</option>
  </select>
</p>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Placeholder Option Pattern',
      type: 'list',
      items: [
        'When a select control is required, provide a first placeholder option with value="" (e.g. <option value="">Select an option</option>).',
        'Users can open native select dropdowns via keyboard (Alt + Down Arrow or Spacebar) and navigate options with Up/Down Arrow keys.',
        'Screen readers announce the current selected option and total item count.',
      ],
      callout: {
        type: 'tip',
        title: 'Mobile OS Picker Menus',
        content: 'Native `<select>` elements on iOS and Android automatically trigger optimized system scroll wheels or full-screen modal sheets, providing vastly superior usability compared to custom JavaScript dropdowns.',
      },
    },
  ],
};
