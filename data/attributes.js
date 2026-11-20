/**
 * HTML5 Global Attributes Reference Data
 * Standards: WHATWG Living Standard & W3C HTML5 Specification
 * 
 * Global attributes are valid on every standard HTML element.
 */

export const globalAttributeCategories = [
  'Core Identification',
  'Text & Language',
  'Interaction & Accessibility',
  'Modern Capabilities & Popover',
  'Microdata & Custom Data',
  'Inline Presentation',
];

export const globalAttributes = [
  {
    name: 'id',
    syntax: 'id="identifier"',
    category: 'Core Identification',
    type: 'String (Unique Identifier)',
    defaultValue: 'None',
    description:
      'Defines a unique document-wide identifier for an element. Used for fragment URI linking (hash navigation), form label association (for="id"), ARIA referencing (aria-labelledby="id"), and script targeting (document.getElementById).',
    values: ['Must not contain whitespace characters', 'Must be unique across the entire DOM tree', 'Should begin with a letter or underscore for CSS compatibility'],
    example: `<section id="pricing">
  <h2>Our Pricing Plans</h2>
  <a href="#pricing">Back to Top of Section</a>
</section>`,
    interactive: false,
    notes: 'Duplicate IDs in a single document violate WHATWG standards and break accessibility trees and script querySelectors.',
  },
  {
    name: 'class',
    syntax: 'class="name1 name2"',
    category: 'Core Identification',
    type: 'Token list (space-separated)',
    defaultValue: 'None',
    description:
      'A space-separated list of classification names assigned to the element. Allows CSS styling rules and JavaScript (querySelectorAll, classList) to target groups of elements sharing semantic or visual roles.',
    values: ['Space-delimited tokens', 'Case-sensitive in standard HTML5 DOM APIs'],
    example: `<article class="post featured sponsored">
  <p class="summary lead">Important announcement text.</p>
</article>`,
    interactive: false,
    notes: 'Prefer semantic class naming over purely visual utility classes when writing accessible, maintainable HTML.',
  },
  {
    name: 'title',
    syntax: 'title="text"',
    category: 'Text & Language',
    type: 'String',
    defaultValue: 'None',
    description:
      'Contains advisory information related to the element. Native browsers typically display this value as a hovering tooltip when a mouse pointer rests over the element.',
    values: ['Any plain text string. Line breaks are preserved in many browser tooltips.'],
    example: `<p>Hover over this <abbr title="HyperText Markup Language">HTML</abbr> abbreviation to see the native tooltip.</p>
<button type="button" title="Closes this modal and discards drafts">Cancel</button>`,
    interactive: true,
    demoHtml: `<h3>Native Tooltip Demonstration</h3>
<p>Hover your cursor over the word below:</p>
<p>The standard format is <abbr title="World Wide Web Consortium">W3C</abbr> standard.</p>
<button type="button" title="This is a native browser advisory tooltip">Hover Over Me</button>`,
    notes: 'Do NOT rely on title for essential information: touch screen users on mobile and smartphone devices cannot hover, so they never see title tooltips.',
  },
  {
    name: 'lang',
    syntax: 'lang="bcp-47-code"',
    category: 'Text & Language',
    type: 'BCP 47 language tag',
    defaultValue: 'Inherits from parent / document root',
    description:
      'Specifies the primary human language of the element contents and attribute values. Vital for screen readers (correct speech synthesizer accent), search engines, spellcheckers, and font glyph rendering.',
    values: ['en (English)', 'es (Spanish)', 'fr (French)', 'de (German)', 'zh-CN (Simplified Chinese)', 'ar (Arabic)', 'ja (Japanese)', 'hi (Hindi)'],
    example: `<p>This sentence is in English, but contains a French quote:
  <q lang="fr">C'est la vie</q>.
</p>`,
    interactive: false,
    notes: 'Always specify lang on the root <html> element (e.g., <html lang="en">) to ensure screen readers speak with the proper pronunciation.',
  },
  {
    name: 'dir',
    syntax: 'dir="ltr|rtl|auto"',
    category: 'Text & Language',
    type: 'Enumerated',
    defaultValue: 'ltr (or inherits)',
    description:
      'Specifies the text directionality of the element content. Critical for bidirectional scripts such as Arabic, Hebrew, Persian, and Urdu.',
    values: [
      'ltr: Left-to-right (used in English, Latin, Cyrillic, Chinese, etc.)',
      'rtl: Right-to-left (used in Arabic, Hebrew, Farsi, Urdu)',
      'auto: Browser determines directionality using the first strongly typed directional character in the text',
    ],
    example: `<p dir="rtl">هذا النص مكتوب باللغة العربية من اليمين إلى اليسار.</p>
<p dir="ltr">This text is explicitly rendered left to right.</p>`,
    interactive: true,
    demoHtml: `<h3>Native Text Directionality</h3>
<p dir="rtl">هذا نص مكتوب باللغة العربية (Right-to-Left text direction).</p>
<p dir="ltr">This is standard Left-to-Right English text.</p>`,
    notes: 'Never use CSS direction property alone for textual directionality; always declare semantic dir in HTML to ensure accessibility APIs perceive correct text reading order.',
  },
  {
    name: 'hidden',
    syntax: 'hidden OR hidden="until-found"',
    category: 'Interaction & Accessibility',
    type: 'Boolean or Enumerated',
    defaultValue: 'Attribute absent (visible)',
    description:
      'Indicates that the element is not currently relevant to the user. User agents automatically hide the element with display: none. When set to "until-found", the element remains hidden until a browser in-page search (Ctrl+F) matches content inside it.',
    values: ['Boolean attribute (presence hides element)', 'until-found (hidden until in-page search matches)'],
    example: `<p>This content is visible to users.</p>
<p hidden>This content is hidden from all users, screen readers, and tab navigation.</p>
<div hidden="until-found">
  <p>Hidden until user searches for this secret keyword with Ctrl+F!</p>
</div>`,
    interactive: true,
    demoHtml: `<h3>Native Hidden Attribute</h3>
<p>Notice the paragraph between these two lines is completely hidden by native user-agent stylesheet:</p>
<hr>
<p hidden>YOU CANNOT SEE THIS PARAGRAPH BECAUSE OF hidden ATTRIBUTE.</p>
<hr>
<p>The native browser applies display: none !important to elements with the hidden attribute.</p>`,
    notes: 'Do not use hidden to hide elements temporarily if they are visually offscreen but still meant for screen readers (use an accessible sr-only technique instead).',
  },
  {
    name: 'tabindex',
    syntax: 'tabindex="integer"',
    category: 'Interaction & Accessibility',
    type: 'Integer',
    defaultValue: 'Element-dependent (0 for links/buttons, -1 for static elements)',
    description:
      'Controls whether an element participates in sequential keyboard focus navigation via the Tab key, and determines its order.',
    values: [
      '0: Makes non-interactive elements (like <div> or <span>) focusable in natural DOM order',
      '-1: Focusable programmatically via JavaScript (.focus()), but excluded from Tab key order',
      'Positive integer (>0): Enforces explicit focus ordering (strongly discouraged in modern web engineering)',
    ],
    example: `<!-- Focusable custom component in natural DOM order -->
<div tabindex="0" role="button">Keyboard Focusable Item</div>

<!-- Excluded from Tab cycle, but can be focused via JS -->
<div id="modal-heading" tabindex="-1">Modal Heading</div>`,
    interactive: false,
    notes: 'Avoid tabindex > 0. Positive tabindex disrupts natural DOM tab order and creates disorienting navigation jumps for keyboard and screen reader users.',
  },
  {
    name: 'accesskey',
    syntax: 'accesskey="character"',
    category: 'Interaction & Accessibility',
    type: 'Character token',
    defaultValue: 'None',
    description:
      'Provides a hint for generating a keyboard shortcut for the current element. Activated via Alt + key (Windows/Linux) or Control + Option + key (macOS).',
    values: ['Single printable character (e.g. s, c, h)'],
    example: `<button type="submit" accesskey="s">Save (Alt+S)</button>
<a href="/" accesskey="h">Home (Alt+H)</a>`,
    interactive: false,
    notes: 'Use with extreme caution. Access keys often clash with built-in browser shortcuts, operating system hotkeys, and screen reader navigation commands.',
  },
  {
    name: 'contenteditable',
    syntax: 'contenteditable="true|false|plaintext-only"',
    category: 'Modern Capabilities & Popover',
    type: 'Enumerated',
    defaultValue: 'inherit (or false)',
    description:
      'Enables direct user editing of the element text and rich HTML content right inside the browser window. Powers in-browser rich text editors.',
    values: [
      'true: Element content is editable',
      'false: Element content is read-only',
      'plaintext-only: User can edit text, but rich markup/formatting is stripped',
    ],
    example: `<div contenteditable="true" style="border: 1px dashed #999; padding: 8px;">
  Click here and start typing directly into this HTML element!
</div>`,
    interactive: true,
    demoHtml: `<h3>Native contenteditable Demonstration</h3>
<p>Click inside the box below and type or delete words natively:</p>
<div contenteditable="true" style="border: 2px solid #888; padding: 10px; min-height: 60px;">
  <b>This text is editable!</b> Click here to edit, replace, or format this text directly inside your browser without any JavaScript libraries.
</div>`,
    notes: 'Content edited via contenteditable is not automatically saved or submitted with forms; capture user edits via JavaScript oninput or input events.',
  },
  {
    name: 'spellcheck',
    syntax: 'spellcheck="true|false"',
    category: 'Text & Language',
    type: 'Enumerated',
    defaultValue: 'Element-dependent',
    description:
      'Specifies whether the browser should perform spell checking and grammar checking on editable text elements (<input>, <textarea>, or contenteditable elements).',
    values: ['true: Check spelling', 'false: Disable red squiggly spellcheck lines'],
    example: `<textarea spellcheck="true">This texxt will have squiggly red lines under missspelled wrds.</textarea>
<input type="text" name="code" spellcheck="false" placeholder="API Key (no spellcheck)">`,
    interactive: true,
    demoHtml: `<h3>Native Spellcheck Demonstration</h3>
<p>Look at the deliberate typo in the textarea below (red squiggly line rendered by browser):</p>
<textarea rows="3" cols="40" spellcheck="true">Thiss contains misspeled words that the browser natively flags.</textarea>`,
    notes: 'Always disable spellcheck="false" on email fields, usernames, code editors, and cryptographic keys to prevent noisy false positives.',
  },
  {
    name: 'draggable',
    syntax: 'draggable="true|false"',
    category: 'Modern Capabilities & Popover',
    type: 'Enumerated',
    defaultValue: 'auto (true for <a> with href and <img>, false for others)',
    description:
      'Specifies whether an element can be dragged by the user using the HTML5 Drag and Drop API.',
    values: ['true: Element is draggable', 'false: Element cannot be dragged'],
    example: `<div draggable="true" id="drag-item">
  Drag me into a drop target!
</div>`,
    interactive: true,
    demoHtml: `<h3>Native Draggable Element</h3>
<p>Click and hold to drag the element below:</p>
<div draggable="true" style="border: 1px dashed black; padding: 8px; cursor: move; display: inline-block;">
  📦 Drag Me! (Native Browser Ghost will follow pointer)
</div>`,
    notes: 'Images and links with href are draggable="true" by default in all web browsers.',
  },
  {
    name: 'autofocus',
    syntax: 'autofocus',
    category: 'Interaction & Accessibility',
    type: 'Boolean',
    defaultValue: 'Absent (false)',
    description:
      'Specifies that the element should automatically receive keyboard focus as soon as the page finishes loading or the parent dialog opens.',
    values: ['Boolean attribute (presence activates autofocus)'],
    example: `<form action="/search">
  <input type="search" name="q" placeholder="Search documentation..." autofocus>
  <button type="submit">Search</button>
</form>`,
    interactive: false,
    notes: 'Only one element per page should ever have autofocus. Automatically moving focus on page load can disorient visually impaired screen reader users.',
  },
  {
    name: 'inert',
    syntax: 'inert',
    category: 'Interaction & Accessibility',
    type: 'Boolean',
    defaultValue: 'Absent (interactive)',
    description:
      'A powerful modern HTML5 attribute that tells the browser to completely ignore user interactions (clicks, keyboard focus, selections) on the element and all of its descendants, and hide them from accessibility trees. Essential for background content when a modal dialog is open.',
    values: ['Boolean attribute (presence activates inert mode)'],
    example: `<!-- When modal is open, inert freezes background page -->
<main inert>
  <h2>Background Page</h2>
  <button type="button">You cannot click or tab to me!</button>
</main>

<dialog open>
  <h2>Active Modal</h2>
  <button type="button">Active Button</button>
</dialog>`,
    interactive: true,
    demoHtml: `<h3>Native inert Demonstration</h3>
<p>The buttons below are in an inert container — try clicking or focusing them:</p>
<div inert style="opacity: 0.5; border: 1px dashed gray; padding: 8px;">
  <p>This entire box is marked with the <code>inert</code> attribute:</p>
  <button type="button">Cannot Click Me</button>
  <input type="text" value="Cannot edit me" />
</div>
<p style="margin-top: 10px;">
  <button type="button">Normal Interactive Button Outside</button>
</p>`,
    notes: 'Standardized in all modern browsers since 2023. Eliminates complex focus-trapping JavaScript hacks for modals.',
  },
  {
    name: 'popover',
    syntax: 'popover="auto|manual"',
    category: 'Modern Capabilities & Popover',
    type: 'Enumerated / Boolean',
    defaultValue: 'None (regular element)',
    description:
      'Modern HTML Living Standard attribute that turns any HTML element into a native top-layer popover. Can be opened, closed, and toggled by buttons using popovertarget without writing any JavaScript!',
    values: [
      'auto: Default. Dismisses automatically when user clicks outside (light dismiss) or presses Escape, and closes other open auto popovers.',
      'manual: Requires explicit action to close; does not light dismiss.',
    ],
    example: `<!-- Trigger Button (Zero JS required!) -->
<button type="button" popovertarget="my-popover">Toggle Popover</button>

<!-- Popover Container -->
<div id="my-popover" popover>
  <h4>Native Popover</h4>
  <p>This content renders in the browser native top layer!</p>
</div>`,
    interactive: true,
    demoHtml: `<h3>Native Popover API (No JavaScript!)</h3>
<p>Click the button below to display the native browser popover:</p>

<button type="button" popovertarget="demo-popover">Open Native Popover</button>

<div id="demo-popover" popover style="border: 2px solid #333; padding: 15px; background: #fff;">
  <h4 style="margin-top: 0;">Native Browser Popover</h4>
  <p>Rendered natively in the top layer. Click outside or press Escape to close!</p>
  <button type="button" popovertarget="demo-popover" popovertargetaction="hide">Close Popover</button>
</div>`,
    notes: 'Supported in all modern browsers (Chrome 114+, Safari 17+, Firefox 125+, Edge 114+). Fully accessible with automatic Esc key handling.',
  },
  {
    name: 'data-*',
    syntax: 'data-name="value"',
    category: 'Microdata & Custom Data',
    type: 'Custom String',
    defaultValue: 'None',
    description:
      'Prefix for author-defined custom data attributes. Allows private data to be embedded into HTML elements for access via JavaScript DOM dataset (element.dataset.name) or CSS attribute selectors.',
    values: ['Must begin with data-', 'Must contain only lowercase letters, digits, dashes, and underscores in HTML markup'],
    example: `<article data-post-id="1042" data-author-id="88" data-category="tutorials">
  <h3>How to write clean HTML</h3>
</article>

<script>
  const article = document.querySelector('article');
  console.log(article.dataset.postId); // "1042"
  console.log(article.dataset.category); // "tutorials"
</script>`,
    interactive: false,
    notes: 'Data attributes should never be used as a replacement for semantic HTML elements and ARIA accessibility roles.',
  },
  {
    name: 'translate',
    syntax: 'translate="yes|no"',
    category: 'Text & Language',
    type: 'Enumerated',
    defaultValue: 'yes (or inherits)',
    description:
      'Informs automated translation services (such as Google Translate, browser built-in page translators) whether an element text content and attribute values should be translated.',
    values: ['yes: Translate this content', 'no: Keep content in original language (e.g. brand names, code, addresses)'],
    example: `<p>Welcome to our platform!</p>
<!-- Prevent translation of brand trademark -->
<p translate="no">Acme SuperSonic Cloud Engine™</p>`,
    interactive: false,
    notes: 'Vital for preventing automated machine translation from mangling brand names, programming code, company taglines, or product serial codes.',
  },
  {
    name: 'enterkeyhint',
    syntax: 'enterkeyhint="enter|done|go|next|previous|search|send"',
    category: 'Interaction & Accessibility',
    type: 'Enumerated',
    defaultValue: 'None',
    description:
      'Customizes the action label or icon displayed on the Enter / Return key of virtual on-screen touch keyboards on smartphones and tablets.',
    values: [
      'enter: Standard Enter key',
      'done: Signals completion of input',
      'go: Directs user to target',
      'next: Moves focus to next input field',
      'previous: Moves focus to prior input',
      'search: Displays a magnifying glass search icon',
      'send: Displays a paper airplane or "Send" icon for messages',
    ],
    example: `<input type="text" enterkeyhint="send" placeholder="Type a message...">
<input type="search" enterkeyhint="search" placeholder="Search catalog...">`,
    interactive: false,
    notes: 'Significantly improves the mobile UX by presenting intuitive action cues directly on virtual keyboards.',
  },
  {
    name: 'inputmode',
    syntax: 'inputmode="none|text|decimal|numeric|tel|search|email|url"',
    category: 'Interaction & Accessibility',
    type: 'Enumerated',
    defaultValue: 'text',
    description:
      'Hints to mobile and touch devices which specific virtual keyboard layout to display when the user focuses the element, without changing the input validation type.',
    values: [
      'none: Do not display a virtual keyboard (e.g. when app has custom keypad)',
      'text: Standard text keyboard',
      'decimal: Numeric keyboard with decimal separator (. or ,)',
      'numeric: Digits 0-9 keyboard (great for PIN codes or credit cards)',
      'tel: Telephone keypad with # and *',
      'search: Keyboard optimized for search inputs',
      'email: Keyboard with @ and . shortcut keys',
      'url: Keyboard with / and .com shortcut keys',
    ],
    example: `<!-- Digits keyboard for 2-factor authentication PIN code -->
<input type="text" inputmode="numeric" pattern="[0-9]*" maxlength="6" placeholder="123456">`,
    interactive: false,
    notes: 'Allows showing numeric keyboards on standard <input type="text"> without the browser number-stepper arrows or auto-formatting quirks of <input type="number">.',
  },
  {
    name: 'itemscope / itemtype / itemprop',
    syntax: 'itemscope itemtype="https://schema.org/..." itemprop="..."',
    category: 'Microdata & Custom Data',
    type: 'Microdata syntax tokens',
    defaultValue: 'None',
    description:
      'HTML5 Microdata attributes used to embed structured metadata into web pages for search engines (Google Rich Snippets) and crawlers.',
    values: ['itemscope: Creates a new metadata item', 'itemtype: URL of the vocabulary schema (e.g. https://schema.org/Movie)', 'itemprop: Property name within the schema (e.g. name, director)'],
    example: `<div itemscope itemtype="https://schema.org/Book">
  <h3 itemprop="name">The C Programming Language</h3>
  <p>Author: <span itemprop="author">Brian Kernighan & Dennis Ritchie</span></p>
</div>`,
    interactive: false,
    notes: 'Supported by search engines to parse rich results, product ratings, recipes, events, and reviews directly from semantic HTML markup.',
  },
  {
    name: 'style',
    syntax: 'style="css-declarations"',
    category: 'Inline Presentation',
    type: 'CSS string',
    defaultValue: 'None',
    description:
      'Specifies inline CSS style rules directly on an individual HTML element. Overrides external stylesheets due to high CSS specificity.',
    values: ['Valid CSS property: value declarations separated by semicolons'],
    example: `<p style="color: #c2410c; font-weight: bold;">
  This text has inline styles applied.
</p>`,
    interactive: true,
    demoHtml: `<h3>Native Inline Style Demonstration</h3>
<p style="color: #c2410c; font-size: 18px; border: 1px solid #c2410c; padding: 10px;">
  This element has inline styling applied directly via the <code>style</code> attribute.
</p>`,
    notes: 'Best engineering practice is to keep styling in external stylesheets or design systems. Inline styles increase HTML payload size and bypass Content Security Policy (CSP) when unsafe-inline is disabled.',
  },
  {
    name: 'is',
    syntax: 'is="custom-element-name"',
    category: 'Modern Capabilities & Popover',
    type: 'Custom Element Name',
    defaultValue: 'None',
    description:
      'Allows standard built-in HTML elements to behave as customized built-in Web Components while retaining all native semantic and accessibility behaviors (e.g., keyboard focus on buttons, form submission on forms).',
    values: ['Must contain a hyphen (e.g. word-count, fancy-button)', 'Must match a registered custom element defined via customElements.define()'],
    example: `<button is="fancy-button">Accessible Customized Button</button>
<p is="word-count">This paragraph is enhanced by a custom Web Component class.</p>`,
    interactive: false,
    notes: 'Customized built-in elements extend standard HTML classes (like HTMLButtonElement) rather than HTMLElement.',
  },
  {
    name: 'nonce',
    syntax: 'nonce="cryptographic-token"',
    category: 'Core Identification',
    type: 'Base64 Token',
    defaultValue: 'None',
    description:
      'A cryptographic one-time token ("number used once") used by Content Security Policy (CSP) to allow specific inline scripts and stylesheets to execute without allowing arbitrary untrusted scripts.',
    values: ['Must match the server-generated base64 nonce declared in the HTTP Content-Security-Policy header'],
    example: `<script nonce="EDNnf03nceIOfn39fn3e9h3sdfa">
  console.log("This trusted script runs because its nonce matches CSP!");
</script>`,
    interactive: false,
    notes: 'For security, browsers automatically remove the nonce value from the DOM attribute inspector to prevent attacker scripts from reading it.',
  },
  {
    name: 'part',
    syntax: 'part="partname1 partname2"',
    category: 'Modern Capabilities & Popover',
    type: 'Space-separated token list',
    defaultValue: 'None',
    description:
      'Exposes an element inside a Web Component Shadow DOM tree so it can be styled from the outside document using the CSS ::part() pseudo-element selector without piercing shadow encapsulation.',
    values: ['Space-separated list of part names'],
    example: `<template id="user-card-template">
  <div class="card">
    <h3 part="card-title">User Name</h3>
    <button part="action-btn">Follow</button>
  </div>
</template>

<style>
  user-card::part(card-title) { color: #f97316; }
  user-card::part(action-btn) { background: #000; color: #fff; }
</style>`,
    interactive: false,
    notes: 'Standardized in modern CSS Shadow Parts (CSS Shadow-DOM Level 1).',
  },
  {
    name: 'exportparts',
    syntax: 'exportparts="inner-part: outer-name"',
    category: 'Modern Capabilities & Popover',
    type: 'Comma-separated part mappings',
    defaultValue: 'None',
    description:
      'Used on custom elements containing nested shadow trees to re-export inner shadow parts so they can be styled by ancestors further up the DOM hierarchy.',
    values: ['inner-part: outer-name mappings separated by commas'],
    example: `<nested-component exportparts="button: main-btn, header: card-header"></nested-component>`,
    interactive: false,
    notes: 'Allows multi-level component composition while keeping internal styling controlled.',
  },
  {
    name: 'slot',
    syntax: 'slot="slot-name"',
    category: 'Modern Capabilities & Popover',
    type: 'String (Slot Identifier)',
    defaultValue: 'None (default slot)',
    description:
      'Assigns a child element to a specific named <slot> inside a Web Component shadow tree. Enables composition and projection of light DOM content into shadow DOM templates.',
    values: ['Must match the name attribute of a <slot name="..."> element inside the shadow root'],
    example: `<my-card>
  <span slot="card-title">Card Headline</span>
  <p slot="card-body">This body text is projected into the named slot.</p>
</my-card>`,
    interactive: false,
    notes: 'Elements without a slot attribute are automatically projected into the default unnamed <slot>.',
  },
  {
    name: 'writingsuggestions',
    syntax: 'writingsuggestions="true|false"',
    category: 'Text & Language',
    type: 'Enumerated',
    defaultValue: 'true (or inherits)',
    description:
      'WHATWG standard attribute that indicates whether the browser or operating system is allowed to provide writing suggestions (such as AI autocomplete, grammar prediction, or text completion) while editing the element.',
    values: [
      'true: Browser writing suggestions are enabled',
      'false: Writing suggestions are disabled (useful for passwords, codes, sensitive fields, or creative writing)',
    ],
    example: `<textarea writingsuggestions="false" placeholder="Sensitive text input (no AI suggestions)..."></textarea>`,
    interactive: false,
    notes: 'Added to the WHATWG HTML Living Standard in 2024 to give web developers explicit control over automated browser writing assistants.',
  },
];
