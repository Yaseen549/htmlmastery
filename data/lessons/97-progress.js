export const progressLesson = {
  slug: 'progress',
  number: '97',
  title: '<progress>',
  category: 'Forms & Input Controls',
  subtitle: 'Displays a native visual progress bar indicating completion of a task',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Progress Bar',
      paragraphs: [
        'The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        'It has two modes: Determinate (when value and max are specified, showing an exact percentage of completion), and Indeterminate (when value is omitted, causing the browser to render an animated barber-pole or pulsing activity indicator).',
        'Unlike <meter> (which measures a scalar gauge like disk space), <progress> indicates task completion over time (like a file download or multi-step wizard).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<progress value="70" max="100">70%</progress>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains fallback text representing the percentage.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['value', 'Floating point number', 'none', 'Current progress value; must be between 0 and max. Omit for indeterminate state.'],
        ['max', 'Floating point number', '1.0', 'The total completion value of the task.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Determinate and Indeterminate Bars',
      type: 'code-example',
      codeTitle: 'Task Completion and Loading States',
      code: `<!-- Determinate progress (70% complete) -->
<p>
  <label for="download">File Download Progress (70%):</label><br>
  <progress id="download" max="100" value="70">70%</progress>
</p>

<!-- Indeterminate progress (loading without known duration) -->
<p>
  <label for="processing">Processing Request (Please wait...):</label><br>
  <progress id="processing">Loading...</progress>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  <label for="download">File Download Progress (70%):</label><br>
  <progress id="download" max="100" value="70">70%</progress>
</p>
<p>
  <label for="processing">Processing Request (Please wait...):</label><br>
  <progress id="processing">Loading...</progress>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: '<progress> vs <meter>',
      type: 'list',
      items: [
        'Use <progress> when a task has a beginning, progress, and end (e.g. downloading, file upload, form steps).',
        'Use <meter> for static scalar measurements (e.g. disk space, battery level, test score).',
        'Always provide text inside the tag (<progress ...>70%</progress>) for older browsers without HTML5 support.',
      ],
      callout: {
        type: 'important',
        title: 'Accessible Labeling',
        content: 'Always pair `<progress>` with a visible `<label for="...">` so screen readers describe what process the progress bar represents.',
      },
    },
  ],
};
