export const legendLesson = {
  slug: 'legend',
  number: '100',
  title: '<legend>',
  category: 'Forms & Input Controls',
  subtitle: 'Provides an accessible title caption for its parent <fieldset> container',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Legend Caption',
      paragraphs: [
        'The <legend> HTML element represents a caption for the content of its parent <fieldset>.',
        'It must be the first child element of a <fieldset>.',
        'User-agent stylesheets position <legend> embedded directly within the top border of the fieldset box, creating the classic inset frame title effect.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<fieldset>\n  <legend>Newsletter Subscription Preferences</legend>\n  <!-- Controls -->\n</fieldset>',
      syntaxNote: 'Normal element requiring opening and closing tags. Must be the immediate first child of a <fieldset>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['align', 'top | bottom | left | right', 'Obsolete in HTML5', 'Positions legend; obsolete, use CSS instead.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Legend Inset Border Placement',
      type: 'code-example',
      codeTitle: 'Fieldset Legend with Radio Button Choices',
      code: `<form action="#" method="get">
  <fieldset>
    <legend>Select Notification Frequency</legend>
    <p>
      <label>
        <input type="radio" name="freq" value="daily" checked>
        Daily Digest
      </label>
      <br>
      <label>
        <input type="radio" name="freq" value="weekly">
        Weekly Summary
      </label>
      <br>
      <label>
        <input type="radio" name="freq" value="never">
        Never (Unsubscribe)
      </label>
    </p>
  </fieldset>
</form>`,
      demo: {
        title: 'Native Browser Output',
        html: `<form action="#" method="get">
  <fieldset>
    <legend>Select Notification Frequency</legend>
    <p>
      <label>
        <input type="radio" name="freq" value="daily" checked>
        Daily Digest
      </label>
      <br>
      <label>
        <input type="radio" name="freq" value="weekly">
        Weekly Summary
      </label>
      <br>
      <label>
        <input type="radio" name="freq" value="never">
        Never (Unsubscribe)
      </label>
    </p>
  </fieldset>
</form>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility Best Practices',
      type: 'list',
      items: [
        'Keep legend text concise and informative.',
        'Screen readers prefix every radio button or checkbox inside the fieldset with the legend text.',
        'Only one <legend> element is permitted per <fieldset>.',
      ],
      callout: {
        type: 'note',
        title: 'First Child Requirement',
        content: 'The `<legend>` must be the first element child of the `<fieldset>`. If placed after other elements, browsers will not render it inset into the border.',
      },
    },
  ],
};
