export const inputLesson = {
  slug: 'input',
  number: '89',
  title: '<input>',
  category: 'Forms & Input Controls',
  subtitle: 'Universal interactive form control supporting all 22 HTML5 input types and validations',
  sections: [
    {
      id: 'overview',
      title: 'Overview & The 22 HTML5 Input Types',
      type: 'text',
      badge: 'Input Control',
      paragraphs: [
        'The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user.',
        'How <input> works varies considerably depending on the value of its type attribute. HTML5 defines exactly 22 distinct standard input types, ranging from simple single-line text to specialized date pickers, color pickers, sliders, and file uploaders.',
        'On mobile devices, specialized input types (e.g., email, tel, number, url) trigger tailored virtual software keyboards with the correct symbol layouts.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<input type="text" name="user_query" id="query" required minlength="3" maxlength="50">',
      syntaxNote: 'Void element with no closing tag. Never write </input>.',
    },
    {
      id: 'attributes',
      title: 'All 22 Standard Input Types Matrix',
      type: 'attributes-table',
      headers: ['Type Value', 'Rendered Control', 'Mobile Keyboard / UI', 'HTML5 Validation Support'],
      rows: [
        ['text', 'Single-line text field', 'Standard QWERTY keyboard', 'pattern, minlength, maxlength'],
        ['password', 'Masked character field', 'Obscured bullet dots', 'minlength, maxlength'],
        ['email', 'Email input field', '@ and domain quick keys', 'Automatic RFC email regex validation'],
        ['tel', 'Telephone number input', 'Numeric telephone keypad', 'pattern for phone formats'],
        ['url', 'Web address input', '.com / and :// quick keys', 'Full URL scheme validation'],
        ['number', 'Numeric input with step spinners', 'Numeric number pad', 'min, max, step'],
        ['range', 'Horizontal slider thumb control', 'Touch-draggable slider bar', 'min, max, step'],
        ['checkbox', 'Binary toggle box (checked/unchecked)', 'Square checkbox control', 'required (mandatory checkbox)'],
        ['radio', 'Mutually exclusive selection dot', 'Circular radio button', 'required across radio group name'],
        ['date', 'Date picker (year, month, day)', 'Native OS calendar wheel/picker', 'min, max'],
        ['time', 'Time picker (hours, minutes)', 'Native clock time wheel', 'min, max, step'],
        ['datetime-local', 'Date and local time picker', 'Combined calendar and clock', 'min, max'],
        ['month', 'Year and month picker', 'Year/month scroll wheel', 'min, max'],
        ['week', 'Year and ISO 8601 week picker', 'Week number selector', 'min, max'],
        ['color', 'Color picker square', 'Native OS color swatch dialog', 'Hex color format (#rrggbb)'],
        ['file', 'File selector with Browse button', 'OS file manager / Camera dialog', 'accept (MIME types), multiple'],
        ['search', 'Search text input', 'Search magnifying icon and clear (x)', 'pattern, minlength'],
        ['hidden', 'Invisible data input', 'Not rendered visually', 'Carries programmatic form state'],
        ['submit', 'Form submission button', 'Native system button', 'Submits parent form'],
        ['reset', 'Form reset button', 'Native system button', 'Resets all fields to initial default'],
        ['button', 'Push button without default action', 'Native clickable button', 'Custom JavaScript event triggers'],
        ['image', 'Graphical image submit button', 'Renders image asset', 'Submits coordinates (x,y)'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Input Types Demonstration',
      type: 'code-example',
      codeTitle: 'Range of Native HTML5 Input Controls',
      code: `<form action="#" method="get">
  <!-- Text and Password -->
  <p>
    <label for="uname">Text:</label><br>
    <input type="text" id="uname" name="uname" value="John Doe">
  </p>
  
  <!-- Number with min/max/step -->
  <p>
    <label for="qty">Number (1-10):</label><br>
    <input type="number" id="qty" name="qty" min="1" max="10" value="5">
  </p>
  
  <!-- Slider Range -->
  <p>
    <label for="vol">Range Slider (0-100):</label><br>
    <input type="range" id="vol" name="vol" min="0" max="100" value="70">
  </p>
  
  <!-- Date Picker -->
  <p>
    <label for="bday">Date Picker:</label><br>
    <input type="date" id="bday" name="bday" value="2026-11-20">
  </p>
  
  <!-- Color Picker -->
  <p>
    <label for="favcolor">Color Picker:</label><br>
    <input type="color" id="favcolor" name="favcolor" value="#ea580c">
  </p>
  
  <!-- Checkbox -->
  <p>
    <label>
      <input type="checkbox" name="subscribe" checked>
      Subscribe to newsletter
    </label>
  </p>
  
  <!-- Submit button -->
  <p>
    <input type="submit" value="Submit Inputs">
  </p>
</form>`,
      demo: {
        title: 'Native Browser Output',
        html: `<form action="#" method="get">
  <p>
    <label for="uname">Text:</label><br>
    <input type="text" id="uname" name="uname" value="John Doe">
  </p>
  <p>
    <label for="qty">Number (1-10):</label><br>
    <input type="number" id="qty" name="qty" min="1" max="10" value="5">
  </p>
  <p>
    <label for="vol">Range Slider (0-100):</label><br>
    <input type="range" id="vol" name="vol" min="0" max="100" value="70">
  </p>
  <p>
    <label for="bday">Date Picker:</label><br>
    <input type="date" id="bday" name="bday" value="2026-11-20">
  </p>
  <p>
    <label for="favcolor">Color Picker:</label><br>
    <input type="color" id="favcolor" name="favcolor" value="#ea580c">
  </p>
  <p>
    <label>
      <input type="checkbox" name="subscribe" checked>
      Subscribe to newsletter
    </label>
  </p>
  <p>
    <input type="submit" value="Submit Inputs">
  </p>
</form>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'HTML5 Client-Side Validation',
      type: 'list',
      items: [
        'HTML5 inputs provide automatic constraint validation via required, pattern, min, max, minlength, and maxlength.',
        'When validation fails on form submission, modern browsers display native localized tooltip balloons pointing to the invalid input without requiring custom JavaScript.',
        'Always connect every <input> to a corresponding <label> via the id attribute.',
      ],
      callout: {
        type: 'tip',
        title: 'Mobile Virtual Keyboards',
        content: 'Using `type="email"`, `type="tel"`, and `type="number"` immediately shifts mobile keyboards into the appropriate numeric or email layout, vastly speeding up user checkout forms.',
      },
    },
  ],
};
