export const keygenLesson = {
  slug: 'keygen',
  number: '127',
  title: '<keygen>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated key-pair generator control; removed from modern HTML5 specifications',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <keygen> HTML element existed to facilitate generation of key pairs, and submission of the public key as part of an HTML form.',
        'It was designed to help web applications establish client-side SSL/TLS certificate authentication.',
        'However, it was plagued by implementation divergences, security concerns, and lack of cross-browser consensus. It was formally removed from the HTML specification in 2017 and replaced by the Web Cryptography API (WebCrypto).',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Tag (Removed from HTML5) -->\n<keygen name="security_key">\n\n// Modern Standard Web Cryptography API\nconst keyPair = await window.crypto.subtle.generateKey(\n  { name: "RSA-OAEP", modulusLength: 2048, ... },\n  true,\n  ["encrypt", "decrypt"]\n);',
      syntaxNote: 'Obsolete element. Removed from browser engines.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['name', 'String', 'Obsolete', 'Name of the keygen control submitted with form.'],
        ['keytype', 'rsa | dsa | ec', 'Obsolete', 'Type of key generated.'],
        ['challenge', 'String', 'Obsolete', 'Challenge string submitted along with public key.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Historical Keygen Demonstration',
      type: 'code-example',
      codeTitle: 'Obsolete Keygen Element in Modern Browsers',
      code: `<!-- Modern browsers ignore or drop <keygen> -->
<p>
  Historical keygen element: <keygen name="clientkey">
  (No longer renders in modern browser engines).
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Historical keygen element: <keygen name="clientkey">
  (No longer renders in modern browser engines).
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Modern WebCrypto API',
      type: 'list',
      items: [
        'Use `window.crypto.subtle` for secure key generation, encryption, hashing, and digital signing.',
        'Use WebAuthn (FIDO2) for modern passwordless authentication and security keys.',
      ],
      callout: {
        type: 'note',
        title: 'Permanently Deprecated',
        content: '`<keygen>` was officially deprecated in Chrome 49 and completely removed from all browser engines by 2018.',
      },
    },
  ],
};
