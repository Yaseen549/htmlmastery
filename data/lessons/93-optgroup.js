export const optgroupLesson = {
  slug: 'optgroup',
  number: '93',
  title: '<optgroup>',
  category: 'Forms & Input Controls',
  subtitle: 'Creates a grouped subset of related options inside a <select> dropdown',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Option Group',
      paragraphs: [
        'The <optgroup> HTML element creates a grouping of options within a <select> element.',
        'It is used to organize long dropdown menus into logical, themed categories. The label attribute is mandatory and specifies the visible heading for the group.',
        'Group headings are rendered in bold or italic text by user-agent stylesheets and are not selectable by the user.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<select name="cuisine">\n  <optgroup label="Italian">\n    <option value="pizza">Pizza</option>\n    <option value="pasta">Pasta</option>\n  </optgroup>\n  <optgroup label="Japanese">\n    <option value="sushi">Sushi</option>\n    <option value="ramen">Ramen</option>\n  </optgroup>\n</select>',
      syntaxNote: 'Normal element requiring opening and closing tags. Must be a child of <select> and contain <option> elements.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['label', 'String', 'Required', 'The visible text label displayed for the group.'],
        ['disabled', 'Boolean', 'false', 'Disables all child <option> elements in this group simultaneously.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Categorized Option Groups',
      type: 'code-example',
      codeTitle: 'Grouped Dropdown Menu by Category',
      code: `<label for="food-menu">Select a dish:</label><br>
<select id="food-menu" name="food">
  <optgroup label="Appetizers">
    <option value="salad">Caesar Salad</option>
    <option value="soup">French Onion Soup</option>
    <option value="bruschetta">Bruschetta</option>
  </optgroup>
  
  <optgroup label="Main Courses">
    <option value="steak">Ribeye Steak</option>
    <option value="salmon">Grilled Salmon</option>
    <option value="risotto">Mushroom Risotto</option>
  </optgroup>
  
  <optgroup label="Desserts (Sold Out)" disabled>
    <option value="tiramisu">Tiramisu</option>
    <option value="cheesecake">Cheesecake</option>
  </optgroup>
</select>`,
      demo: {
        title: 'Native Browser Output',
        html: `<label for="food-menu">Select a dish:</label><br>
<select id="food-menu" name="food">
  <optgroup label="Appetizers">
    <option value="salad">Caesar Salad</option>
    <option value="soup">French Onion Soup</option>
    <option value="bruschetta">Bruschetta</option>
  </optgroup>
  <optgroup label="Main Courses">
    <option value="steak">Ribeye Steak</option>
    <option value="salmon">Grilled Salmon</option>
    <option value="risotto">Mushroom Risotto</option>
  </optgroup>
  <optgroup label="Desserts (Sold Out)" disabled>
    <option value="tiramisu">Tiramisu</option>
    <option value="cheesecake">Cheesecake</option>
  </optgroup>
</select>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader Categorization',
      type: 'list',
      items: [
        'Screen readers announce the group label before reading each option within the group (e.g., "Appetizers, Caesar Salad").',
        'Setting disabled on <optgroup> disables every child option in a single operation, keeping users from selecting unavailable items.',
        'Nesting <optgroup> elements inside another <optgroup> is not supported in HTML5.',
      ],
      callout: {
        type: 'note',
        title: 'Mandatory label Attribute',
        content: 'An `<optgroup>` without a `label` attribute renders an anonymous, unlabelled category which confuses screen readers. Always provide a clear, concise `label="..."`.',
      },
    },
  ],
};
