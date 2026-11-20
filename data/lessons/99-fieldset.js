export const fieldsetLesson = {
  slug: 'fieldset',
  number: '99',
  title: '<fieldset>',
  category: 'Forms & Input Controls',
  subtitle: 'Groups related form controls and labels with a distinct border and accessible grouping',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Fieldset Group',
      paragraphs: [
        'The <fieldset> HTML element is used to group several controls and labels (<label>) within a web form.',
        'User-agent stylesheets render <fieldset> with a native outer border box, interrupted at the top border by its child <legend> caption.',
        'Setting the disabled attribute on a <fieldset> automatically disables all descendant form controls at once, making it trivial to toggle entire sections of a form.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<fieldset disabled>\n  <legend>Personal Information</legend>\n  <label>Name: <input type="text"></label>\n</fieldset>',
      syntaxNote: 'Normal element requiring opening and closing tags. Can contain an optional <legend> as its first child.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['disabled', 'Boolean', 'false', 'Disables all descendant form controls simultaneously.'],
        ['form', 'ID string', 'none', 'Associates the fieldset with a form owner element by ID.'],
        ['name', 'String', 'none', 'Name of the fieldset element.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Grouped Contact and Shipping Information',
      type: 'code-example',
      codeTitle: 'Fieldsets with Native Border and Legend Inset',
      code: `<form action="#" method="get">
  <!-- Group 1: Shipping Address -->
  <fieldset>
    <legend>Shipping Address</legend>
    <p>
      <label for="street">Street Address:</label><br>
      <input type="text" id="street" name="street">
    </p>
    <p>
      <label for="city">City:</label><br>
      <input type="text" id="city" name="city">
    </p>
  </fieldset>
  
  <br>
  
  <!-- Group 2: Payment (Disabled) -->
  <fieldset disabled>
    <legend>Payment Details (Requires Verified Address)</legend>
    <p>
      <label for="card">Card Number:</label><br>
      <input type="text" id="card" name="card" placeholder="All inputs in fieldset disabled">
    </p>
  </fieldset>
</form>`,
      demo: {
        title: 'Native Browser Output',
        html: `<form action="#" method="get">
  <fieldset>
    <legend>Shipping Address</legend>
    <p>
      <label for="street">Street Address:</label><br>
      <input type="text" id="street" name="street">
    </p>
    <p>
      <label for="city">City:</label><br>
      <input type="text" id="city" name="city">
    </p>
  </fieldset>
  <br>
  <fieldset disabled>
    <legend>Payment Details (Requires Verified Address)</legend>
    <p>
      <label for="card">Card Number:</label><br>
      <input type="text" id="card" name="card" placeholder="All inputs in fieldset disabled">
    </p>
  </fieldset>
</form>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader Context Announcements',
      type: 'list',
      items: [
        'When a user tabs into any control inside a <fieldset>, screen readers announce the <legend> text first, providing critical context (e.g. "Shipping Address, Street Address, edit text").',
        'Radio button groups sharing a common name should always be enclosed in a <fieldset> with a <legend>.',
      ],
      callout: {
        type: 'tip',
        title: 'Bulk Disabling with fieldset',
        content: 'Rather than writing `disabled` on 20 individual inputs, adding `disabled` to their parent `<fieldset disabled>` instantly disables the entire group natively.',
      },
    },
  ],
};
