'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Play,
  RotateCw,
  Copy,
  Check,
  Download,
  Smartphone,
  Monitor,
  Maximize2,
  Minimize2,
  Code2,
  Sparkles,
  FileCode,
  Sliders,
} from 'lucide-react';
import DocShell from '../../components/layout/DocShell';
import Footer from '../../components/layout/Footer';

const PLAYGROUND_TEMPLATES = [
  {
    name: 'Basic HTML5 Document',
    description: 'Clean standard document skeleton with heading, paragraph, and list',
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Native HTML Document</title>
</head>
<body>
  <h1>Welcome to Pure HTML5</h1>
  <p>This document is rendered entirely using your browser's native user-agent stylesheet.</p>
  
  <h2>Features of Standard HTML</h2>
  <ul>
    <li>Zero injected author CSS</li>
    <li>Authentic default margins and typography</li>
    <li>Native form controls and semantics</li>
  </ul>
</body>
</html>`,
  },
  {
    name: 'Semantic Landmarks Layout',
    description: 'Structural page markup using HTML5 sectioning elements',
    code: `<header>
  <h1>TechGazette</h1>
  <nav>
    <a href="#news">Latest News</a> |
    <a href="#reviews">Reviews</a> |
    <a href="#contact">Contact</a>
  </nav>
</header>
<hr>

<main>
  <article id="news">
    <h2>WHATWG Releases HTML Living Standard Updates</h2>
    <p><time datetime="2026-11-20">November 20, 2026</time> — By Senior Web Architect</p>
    <p>Semantic HTML improves accessibility, machine readability, and search engine optimization.</p>
    
    <blockquote>
      "HTML is the backbone of the decentralized, accessible World Wide Web."
    </blockquote>
  </article>

  <aside>
    <h3>Related Stories</h3>
    <ul>
      <li><a href="#">The Evolution of Web Accessibility</a></li>
      <li><a href="#">Pure Native UI in Modern Browsers</a></li>
    </ul>
  </aside>
</main>
<hr>

<footer>
  <p>&copy; 2026 TechGazette. All rights reserved.</p>
</footer>`,
  },
  {
    name: 'HTML5 Form Controls & Validation',
    description: 'Rich native input controls, datalist, fieldsets, and buttons',
    code: `<form action="#" method="get">
  <fieldset>
    <legend>Personal Information</legend>
    
    <p>
      <label for="full-name">Full Name (required):</label><br>
      <input type="text" id="full-name" name="name" required placeholder="John Doe">
    </p>

    <p>
      <label for="email">Email Address:</label><br>
      <input type="email" id="email" name="email" required placeholder="name@example.com">
    </p>

    <p>
      <label for="bday">Date of Birth:</label><br>
      <input type="date" id="bday" name="bday">
    </p>

    <p>
      <label for="fav-color">Favorite Color:</label><br>
      <input type="color" id="fav-color" name="color" value="#f97316">
    </p>
  </fieldset>

  <fieldset>
    <legend>Preferences & Range</legend>
    
    <p>
      <label for="level">Skill Level (Range 1-10):</label><br>
      <input type="range" id="level" name="level" min="1" max="10" value="7">
    </p>

    <p>
      <label for="browser-choice">Preferred Browser (Datalist):</label><br>
      <input list="browsers" id="browser-choice" name="browser" placeholder="Type or pick...">
      <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Safari">
        <option value="Edge">
        <option value="Opera">
      </datalist>
    </p>

    <p>
      <label>
        <input type="checkbox" name="newsletter" checked> Subscribe to weekly HTML digest
      </label>
    </p>
  </fieldset>

  <p>
    <button type="submit">Submit Form</button>
    <button type="reset">Reset Fields</button>
  </p>
</form>`,
  },
  {
    name: 'Native Popover & Dialog',
    description: 'Modern top-layer interactive dialog and popovers without JavaScript',
    code: `<h2>Native HTML5 Top-Layer Elements</h2>
<p>Modern HTML can open modals and tooltips natively with zero custom scripts!</p>

<!-- 1. Native Popover API (Chrome 114+, Safari 17+, Firefox 125+) -->
<section>
  <h3>1. Native Popover (Zero JS)</h3>
  <button type="button" popovertarget="my-popover">Toggle Popover Menu</button>

  <div id="my-popover" popover style="border: 2px solid #333; padding: 15px; background: #fff;">
    <h4>Native Browser Popover</h4>
    <p>This renders in the native top-layer. Click outside or press Esc to close.</p>
    <button type="button" popovertarget="my-popover" popovertargetaction="hide">Dismiss</button>
  </div>
</section>
<hr>

<!-- 2. Native Interactive Details & Summary -->
<section>
  <h3>2. Native Accordion (&lt;details&gt;)</h3>
  <details>
    <summary>Click to view hidden specifications</summary>
    <p>The details and summary elements create accessible collapsible accordions built right into HTML.</p>
  </details>
</section>`,
  },
  {
    name: 'Tabular Data Matrix',
    description: 'Properly structured HTML table with thead, tbody, tfoot, and caption',
    code: `<table border="1" cellpadding="6" cellspacing="0">
  <caption>Quarterly Financial Performance (Fiscal Year 2026)</caption>
  <thead>
    <tr>
      <th scope="col">Department</th>
      <th scope="col">Q1 Budget</th>
      <th scope="col">Q2 Budget</th>
      <th scope="col">Actual Spend</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Engineering</th>
      <td>$120,000</td>
      <td>$135,000</td>
      <td>$128,400</td>
      <td>Under Budget</td>
    </tr>
    <tr>
      <th scope="row">Documentation</th>
      <td>$45,000</td>
      <td>$50,000</td>
      <td>$48,100</td>
      <td>On Track</td>
    </tr>
    <tr>
      <th scope="row">Quality Assurance</th>
      <td>$60,000</td>
      <td>$65,000</td>
      <td>$64,900</td>
      <td>On Track</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$225,000</td>
      <td>$250,000</td>
      <td>$241,400</td>
      <td><strong>Healthy</strong></td>
    </tr>
  </tfoot>
</table>`,
  },
];

export default function PlaygroundPage() {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const [code, setCode] = useState(PLAYGROUND_TEMPLATES[0].code);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const textareaRef = useRef(null);

  const handleTemplateChange = (e) => {
    const idx = parseInt(e.target.value, 10);
    setSelectedTemplateIndex(idx);
    setCode(PLAYGROUND_TEMPLATES[idx].code);
  };

  const handleReset = () => {
    setCode(PLAYGROUND_TEMPLATES[selectedTemplateIndex].code);
    setReloadKey((k) => k + 1);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'playground.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Support Tab key indentation inside textarea
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd, value } = textareaRef.current;
      const newValue =
        value.substring(0, selectionStart) + '  ' + value.substring(selectionEnd);
      setCode(newValue);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = selectionStart + 2;
          textareaRef.current.selectionEnd = selectionStart + 2;
        }
      }, 0);
    }
  };

  /**
   * PURE NATIVE BROWSER HTML DOCUMENT WITH MULTI-LAYER DEFENSIVE SECURITY
   * 
   * Strict Security Directives:
   * 1. Injected CSP (script-src 'none'; object-src 'none'; base-uri 'none')
   * 2. Iframe sandbox WITHOUT allow-scripts and WITHOUT allow-same-origin
   * 3. Completely isolates sandbox from parent window, cookies, and localStorage (origin: null)
   */
  const securityCspMeta = `<meta http-equiv="Content-Security-Policy" content="script-src 'none'; object-src 'none'; base-uri 'none';">`;

  let nativeSrcDoc = '';
  if (code.includes('<!DOCTYPE html>') || code.includes('<html')) {
    if (code.includes('<head>')) {
      nativeSrcDoc = code.replace('<head>', `<head>\n  ${securityCspMeta}`);
    } else if (code.includes('<head ')) {
      nativeSrcDoc = code.replace(/<head[^>]*>/, `$& \n  ${securityCspMeta}`);
    } else {
      nativeSrcDoc = `${securityCspMeta}\n${code}`;
    }
  } else {
    nativeSrcDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  ${securityCspMeta}
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Native HTML Preview</title>
</head>
<body style="background-color: #ffffff; color: #000000;">
${code}
</body>
</html>`;
  }

  return (
    <DocShell>
      <main className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              HTML Playground
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Write HTML on the left and see the live browser preview on the right.
            </p>
          </div>

          {/* Template Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
              Template:
            </span>
            <select
              value={selectedTemplateIndex}
              onChange={handleTemplateChange}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-800 focus:border-brand-500 focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            >
              {PLAYGROUND_TEMPLATES.map((tpl, i) => (
                <option key={i} value={i}>
                  {tpl.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Playground Split Interface */}
        <div
          className={`mt-6 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 ${
            isFullscreen ? 'fixed inset-2 z-50 bg-white p-4 dark:bg-zinc-950 shadow-2xl' : ''
          }`}
          style={{ minHeight: isFullscreen ? '96vh' : '650px' }}
        >
          {/* LEFT: HTML Editor Panel */}
          <div className="flex flex-col rounded-lg border border-zinc-200 bg-zinc-950 overflow-hidden dark:border-zinc-800 shadow-xs">
            {/* Editor Toolbar */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-4 py-2 text-xs text-zinc-400">
              <div className="flex items-center space-x-2">
                <Code2 className="h-4 w-4 text-brand-500" />
                <span className="font-semibold text-zinc-200">HTML Source Code</span>
                <span className="text-[11px] text-zinc-500 hidden sm:inline">(Tab key indents)</span>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center space-x-1 rounded px-2 py-1 hover:bg-zinc-800 text-zinc-300 transition"
                  title="Copy HTML"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      <span className="text-green-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="text-[11px] hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center space-x-1 rounded px-2 py-1 hover:bg-zinc-800 text-zinc-300 transition"
                  title="Download .html file"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span className="text-[11px] hidden sm:inline">Export</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center space-x-1 rounded px-2 py-1 hover:bg-zinc-800 text-zinc-300 transition"
                  title="Reset to template default"
                >
                  <RotateCw className="h-3.5 w-3.5" />
                  <span className="text-[11px] hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>

            {/* Code Textarea */}
            <div className="relative flex-1 p-2">
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck="false"
                placeholder="Type or paste HTML here..."
                className="h-full w-full resize-none border-0 bg-transparent p-2 font-mono text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-hidden leading-relaxed"
              />
            </div>
          </div>

          {/* RIGHT: Live Native Preview Panel */}
          <div className="flex flex-col rounded-lg border border-zinc-200 bg-zinc-50 overflow-hidden dark:border-zinc-800 dark:bg-zinc-900/60 shadow-xs">
            {/* Preview Toolbar */}
            <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-2 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                <span className="font-semibold text-zinc-900 dark:text-white">
                  Live Preview
                </span>
                <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  Default HTML
                </span>
              </div>

              {/* Viewport & Fullscreen Controls */}
              <div className="flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={() => setIsMobileView(!isMobileView)}
                  className={`flex items-center space-x-1 rounded px-2 py-1 text-xs transition ${
                    isMobileView
                      ? 'bg-brand-500 text-white font-medium'
                      : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                  title={isMobileView ? 'Full Width Viewport' : 'Mobile Viewport (375px)'}
                >
                  {isMobileView ? (
                    <Smartphone className="h-3.5 w-3.5" />
                  ) : (
                    <Monitor className="h-3.5 w-3.5" />
                  )}
                  <span className="text-[11px] hidden sm:inline">
                    {isMobileView ? 'Mobile (375px)' : 'Full View'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setReloadKey((k) => k + 1)}
                  className="rounded p-1 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  title="Reload preview"
                >
                  <RotateCw className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="rounded p-1 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Expand Fullscreen'}
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-3.5 w-3.5" />
                  ) : (
                    <Maximize2 className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Isolated Iframe Container */}
            <div className="flex-1 relative flex items-center justify-center p-3 bg-zinc-200/50 dark:bg-zinc-950/70 overflow-auto">
              <iframe
                key={reloadKey}
                title="Native HTML Sandbox Preview"
                srcDoc={nativeSrcDoc}
                sandbox="allow-forms allow-modals"
                className={`h-full border border-zinc-300 bg-white transition-all shadow-xs dark:border-zinc-700 ${
                  isMobileView ? 'w-[375px] max-w-full rounded-md shadow-md' : 'w-full rounded-sm'
                }`}
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </DocShell>
  );
}
