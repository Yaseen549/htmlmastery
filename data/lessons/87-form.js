export const formLesson = {
  slug: 'form',
  number: '87',
  title: '<form>',
  category: 'Forms & Input Controls',
  subtitle: 'Document section containing interactive controls for submitting data to a web server',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Form Container',
      paragraphs: [
        'The <form> HTML element represents a document section containing interactive controls for submitting information to a web server.',
        'It binds input elements (<input>, <textarea>, <select>, <button>) together. When submitted via a submit button or Enter key press, the browser collects all named controls into an HTTP request payload.',
        'The method attribute defines whether data is submitted via HTTP GET (appended as query parameters in the URL) or HTTP POST (enclosed in the request body). The action attribute specifies the destination endpoint URL.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<form action="/api/submit" method="post" enctype="multipart/form-data">\n  <label for="name">Name:</label>\n  <input id="name" name="name" type="text" required>\n  <button type="submit">Submit</button>\n</form>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains form controls, fieldsets, and labels.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['action', 'URL', 'Current URL', 'The URL that processes the form submission.'],
        ['method', 'get | post | dialog', 'get', 'HTTP method to submit the form with.'],
        ['enctype', 'application/x-www-form-urlencoded | multipart/form-data | text/plain', 'application/x-www-form-urlencoded', 'MIME type of the submitted payload (multipart required for file uploads).'],
        ['novalidate', 'Boolean', 'false', 'Bypasses native HTML5 client-side form validation.'],
        ['target', '_self | _blank | _parent | _top', '_self', 'Where to display the response received after submitting.'],
        ['autocomplete', 'on | off', 'on', 'Controls browser autofill behavior for child inputs.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Browser Form Rendering',
      type: 'code-example',
      codeTitle: 'Basic Native HTML Form Controls',
      code: `<!-- Native HTML Form with pure user-agent rendering -->
<form action="#" method="get">
  <p>
    <label for="username">Username:</label><br>
    <input id="username" name="username" type="text" required>
  </p>
  
  <p>
    <label for="useremail">Email Address:</label><br>
    <input id="useremail" name="useremail" type="email" required>
  </p>
  
  <p>
    <label for="inquiry">Department:</label><br>
    <select id="inquiry" name="inquiry">
      <option value="sales">Sales</option>
      <option value="support">Technical Support</option>
      <option value="billing">Billing</option>
    </select>
  </p>
  
  <p>
    <button type="submit">Send Inquiry</button>
    <button type="reset">Reset Form</button>
  </p>
</form>`,
      demo: {
        title: 'Native Browser Output',
        html: `<form action="#" method="get">
  <p>
    <label for="username">Username:</label><br>
    <input id="username" name="username" type="text" required>
  </p>
  
  <p>
    <label for="useremail">Email Address:</label><br>
    <input id="useremail" name="useremail" type="email" required>
  </p>
  
  <p>
    <label for="inquiry">Department:</label><br>
    <select id="inquiry" name="inquiry">
      <option value="sales">Sales</option>
      <option value="support">Technical Support</option>
      <option value="billing">Billing</option>
    </select>
  </p>
  
  <p>
    <button type="submit">Send Inquiry</button>
    <button type="reset">Reset Form</button>
  </p>
</form>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Keyboard Submission',
      type: 'list',
      items: [
        'Forms must include an explicit <button type="submit"> or <input type="submit"> so screen readers and keyboard users can trigger submission unambiguously.',
        'Never nest a <form> element inside another <form>; nested forms are strictly illegal in HTML5.',
        'Always assign a unique name attribute to every input, as controls without a name attribute cannot submit data in HTTP payloads.',
      ],
      callout: {
        type: 'warning',
        title: 'No Nested Forms',
        content: 'Writing `<form><form></form></form>` is completely forbidden by the WHATWG standard and causes the HTML parser to discard the inner form entirely.',
      },
    },
  ],
};
