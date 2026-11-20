export const bgsoundLesson = {
  slug: 'bgsound',
  number: '128',
  title: '<bgsound>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated background sound element from early IE; obsolete in HTML5, replaced by <audio>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <bgsound> HTML element was a proprietary Internet Explorer element that played an audio file in the background when a page was loaded.',
        'It was never part of any standard HTML specification and was made completely obsolete. Automatic background music playback is intensely disruptive to users and consumes unnecessary bandwidth.',
        'HTML5 introduced the standard `<audio>` element with user controls and strict browser autoplay policies.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete IE Proprietary Tag -->\n<bgsound src="music.mid" loop="infinite">\n\n<!-- Standard Modern HTML5 Replacement -->\n<audio controls src="audio.mp3">\n  <p>Your browser does not support audio playback.</p>\n</audio>',
      syntaxNote: 'Obsolete proprietary void element. Not supported by modern web browsers.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Modern Alternative'],
      rows: [
        ['src', 'URL', 'Obsolete', 'src attribute on <audio>'],
        ['loop', 'Integer or "infinite"', 'Obsolete', 'loop attribute on <audio>'],
        ['balance', 'Integer (-10000 to +10000)', 'Obsolete', 'Web Audio API stereo panner'],
        ['volume', 'Integer (-10000 to 0)', 'Obsolete', 'HTMLAudioElement.volume property'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern Accessible Audio Replacement',
      type: 'code-example',
      codeTitle: 'Standard <audio> Element with User Controls',
      code: `<!-- Standard HTML5 audio with user playback controls -->
<p>Modern standard audio playback:</p>
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <p>Your browser does not support audio playback.</p>
</audio>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>Modern standard audio playback:</p>
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <p>Your browser does not support audio playback.</p>
</audio>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'User Autonomy and Sound',
      type: 'list',
      items: [
        'Unsolicited background audio can drown out screen reader speech synthesis, rendering the page entirely unusable for blind individuals.',
        'Always provide visible, user-controllable play/pause controls.',
      ],
      callout: {
        type: 'warning',
        title: 'Non-Standard Proprietary Tag',
        content: '`<bgsound>` was only supported by Internet Explorer and is completely ignored by modern browsers.',
      },
    },
  ],
};
