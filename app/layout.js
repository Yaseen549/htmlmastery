import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://html5reference.dev'),
  title: {
    default: 'HTML5 Reference — Complete Educational Guide & Native Browser Preview',
    template: '%s | HTML5 Reference',
  },
  description:
    'A simple, clean reference covering every HTML tag, its attributes, accessibility rules, and real browser output.',
  applicationName: 'HTML5 Reference Platform',
  authors: [{ name: 'Yaseen', url: 'https://iamyaseen.vercel.app' }],
  creator: 'Yaseen',
  publisher: 'Yaseen',
  keywords: [
    'HTML',
    'HTML5',
    'HTML elements',
    'HTML tutorial',
    'WHATWG Living Standard',
    'semantic HTML',
    'web development',
    'native HTML preview',
    'HTML tags reference',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'HTML5 Reference — Complete Educational Guide & Native Browser Preview',
    description:
      'A simple, clean reference covering every HTML tag, its attributes, accessibility rules, and real browser output.',
    url: 'https://html5reference.dev',
    siteName: 'HTML5 Reference',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTML5 Reference — Complete Educational Guide & Native Browser Preview',
    description:
      'A simple, clean reference covering every HTML tag, its attributes, accessibility rules, and real browser output.',
    creator: '@iamyaseen',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-brand-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
