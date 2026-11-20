export const kbdLesson = {
  slug: 'kbd',
  number: '45',
  title: '<kbd>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents user textual input such as keyboard keys, hotkeys, or voice command entries',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'User Input',
      paragraphs: [
        'The <kbd> HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.',
        'User-agent stylesheets render <kbd> in a monospace font by default.',
        'By convention, multiple keystrokes in a shortcut are represented by nesting individual <kbd> keys inside an outer <kbd> wrapper: `<kbd><kbd>Ctrl</kbd> + <kbd>S</kbd></kbd>`.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>Press <kbd><kbd>Ctrl</kbd> + <kbd>C</kbd></kbd> to copy selected text.</p>',
      syntaxNote: 'Normal inline element requiring opening and closing tags. Contains phrasing content.',
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
      title: 'Keyboard Shortcuts and Menus',
      type: 'code-example',
      codeTitle: 'Keystrokes and Voice Input Commands',
      code: `<!-- Nested keystroke combination -->
<p>
  To open developer tools, press 
  <kbd><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd></kbd> 
  (or <kbd><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>I</kbd></kbd> on macOS).
</p>

<!-- Voice command input -->
<p>
  To start listening, say <kbd>Hey Google</kbd> or <kbd>Alexa</kbd>.
</p>

<!-- Input entered into a prompt -->
<p>
  At the shell prompt, type <kbd>exit</kbd> and press <kbd>Enter</kbd>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  To open developer tools, press 
  <kbd><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd></kbd> 
  (or <kbd><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>I</kbd></kbd> on macOS).
</p>
<p>
  To start listening, say <kbd>Hey Google</kbd> or <kbd>Alexa</kbd>.
</p>
<p>
  At the shell prompt, type <kbd>exit</kbd> and press <kbd>Enter</kbd>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility Best Practices',
      type: 'list',
      items: [
        'Screen readers recognize <kbd> as keyboard or voice input.',
        'Always write out full modifier key names (Ctrl, Shift, Alt, Cmd, Option) rather than obscure symbols (⌃, ⌥, ⌘) alone to ensure screen readers speak them clearly.',
        'When nesting keys, the outer <kbd> signifies the complete gesture, while each inner <kbd> designates an individual key.',
      ],
      callout: {
        type: 'tip',
        title: 'Nesting Pattern',
        content: 'Writing `<kbd><kbd>Ctrl</kbd> + <kbd>Z</kbd></kbd>` is the standard semantic pattern recommended by the WHATWG HTML specification.',
      },
    },
  ],
};
