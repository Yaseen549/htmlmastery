export const textareaLesson = {
  slug: 'textarea',
  number: '95',
  title: '<textarea>',
  category: 'Forms & Input Controls',
  subtitle: 'Multi-line plain-text editing control for paragraphs, comments, and messages',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Text Area',
      paragraphs: [
        'The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.',
        'Unlike <input type="text"> (which accepts a value attribute), the initial text content of a <textarea> is placed between the opening <textarea> and closing </textarea> tags.',
        'Browsers render <textarea> with a monospace or system font and a native drag handle in the lower-right corner for interactive resizing.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<textarea name="feedback" id="feedback-txt" rows="5" cols="40" placeholder="Enter comments here...">Initial text...</textarea>',
      syntaxNote: 'Normal element requiring both opening and closing tags. Never use self-closing <textarea />.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['rows', 'Positive integer', '2', 'The number of visible text lines for the control.'],
        ['cols', 'Positive integer', '20', 'The visible width of the text control, in average character widths.'],
        ['maxlength', 'Non-negative integer', 'none', 'Maximum number of characters the user can enter.'],
        ['minlength', 'Non-negative integer', 'none', 'Minimum number of characters required for valid submission.'],
        ['placeholder', 'String', 'none', 'Hint text displayed when the textarea is empty.'],
        ['wrap', 'soft | hard', 'soft', 'Controls how text wraps upon submission (hard wraps include newlines).'],
        ['readonly', 'Boolean', 'false', 'Prevents editing while still allowing text selection and submission.'],
        ['disabled', 'Boolean', 'false', 'Disables the control completely.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Multi-Line Text Control',
      type: 'code-example',
      codeTitle: 'Feedback Form with Textarea',
      code: `<!-- Multi-line text editing control -->
<p>
  <label for="review">Product Review (Max 200 characters):</label><br>
  <textarea 
    id="review" 
    name="review" 
    rows="4" 
    cols="40" 
    maxlength="200" 
    placeholder="Write your detailed product feedback here..."
  >Great product! Exactly as described.</textarea>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  <label for="review">Product Review (Max 200 characters):</label><br>
  <textarea 
    id="review" 
    name="review" 
    rows="4" 
    cols="40" 
    maxlength="200" 
    placeholder="Write your detailed product feedback here..."
  >Great product! Exactly as described.</textarea>
</p>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'No Value Attribute Gotcha',
      type: 'list',
      items: [
        'Do NOT write `<textarea value="...">`; textarea does NOT have an HTML value attribute. Text must be placed between the tags.',
        'Always associate with a <label for="..."> so screen readers speak the purpose of the field upon focus.',
        'Users can tab into <textarea>, edit with standard cursor keys, and tab out normally.',
      ],
      callout: {
        type: 'warning',
        title: 'Closing Tag is Mandatory',
        content: 'Failing to include `</textarea>` will cause all subsequent HTML in the document to be parsed as raw plain text inside the text area!',
      },
    },
  ],
};
