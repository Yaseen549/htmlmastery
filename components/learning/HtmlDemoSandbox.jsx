'use client';

import React, { useState, useRef } from 'react';
import {
  RotateCw,
  Copy,
  Check,
  Smartphone,
  Monitor,
  Maximize2,
  Minimize2,
} from 'lucide-react';

export default function HtmlDemoSandbox({
  demo,
  slug = 'html5',
  className = '',
}) {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const iframeRef = useRef(null);

  if (!demo) return null;

  const rawHtml = demo.html || '<!-- No demo provided -->';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(rawHtml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy HTML: ', err);
    }
  };

  /**
   * PURE NATIVE BROWSER HTML DOCUMENT
   * 
   * Strict Rule:
   * NO injected author CSS, NO Tailwind, NO CSS reset, NO font overrides,
   * NO custom margin/padding removal, NO custom button/table/input styles.
   * Rendered 100% via the browser's native User-Agent stylesheet.
   * The inline background & text color ensures contrast even in dark mode parent themes.
   */
  const nativeSrcDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="script-src 'none'; object-src 'none'; base-uri 'none';">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Native HTML Preview — ${slug}</title>
</head>
<body style="background-color: #ffffff; color: #000000;">
${rawHtml}
</body>
</html>`;

  return (
    <div
      className={`my-6 overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all dark:border-zinc-800 dark:bg-zinc-900 ${
        isExpanded ? 'fixed inset-4 z-50 flex flex-col shadow-2xl' : 'flex flex-col'
      } ${className}`}
    >
      {/* Sandbox Header Toolbar */}
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50/80 px-4 py-2 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-brand-500" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            {demo.title || 'Live Output'}
          </span>
          <span className="rounded bg-zinc-200/70 px-1.5 py-0.5 text-[10px] font-mono text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            Default HTML
          </span>
        </div>

        {/* Viewport & Action Controls */}
        <div className="flex items-center space-x-1.5">
          {/* Viewport Mode Toggle: Full vs Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileView(!isMobileView)}
            title={isMobileView ? 'Switch to Full Width' : 'Switch to Mobile View (375px)'}
            className={`flex items-center space-x-1 rounded px-2 py-1 text-xs transition ${
              isMobileView
                ? 'bg-brand-500 text-white font-medium'
                : 'hover:bg-zinc-200/60 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
            }`}
          >
            {isMobileView ? <Smartphone className="h-3.5 w-3.5" /> : <Monitor className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{isMobileView ? 'Mobile (375px)' : 'Full View'}</span>
          </button>

          {/* Reload Button */}
          <button
            type="button"
            onClick={() => setReloadKey((k) => k + 1)}
            title="Reset native preview"
            aria-label="Reset native preview"
            className="rounded p-1 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </button>

          {/* Copy HTML Source */}
          <button
            type="button"
            onClick={handleCopy}
            title="Copy native HTML markup"
            className="flex items-center space-x-1 rounded px-2 py-1 text-xs hover:bg-zinc-200/60 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy HTML'}</span>
          </button>

          {/* Expand/Collapse preview */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Exit full screen' : 'Expand preview'}
            className="rounded p-1 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
          >
            {isExpanded ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      {/* Sandboxed Native HTML Rendering Viewport */}
      <div className="relative flex-1 bg-zinc-100 p-2 overflow-auto flex items-start justify-center dark:bg-zinc-950">
        <div
          className={`h-full w-full bg-white transition-all duration-200 rounded border border-zinc-200 dark:border-zinc-800 ${
            isMobileView ? 'max-w-[375px] shadow-md' : 'max-w-full'
          }`}
        >
          <iframe
            key={reloadKey}
            ref={iframeRef}
            srcDoc={nativeSrcDoc}
            title={`Native browser rendering for <${slug}>`}
            sandbox="allow-forms allow-modals allow-scripts"
            className="h-full w-full min-h-[180px] border-none block"
            style={{ minHeight: isExpanded ? 'calc(100vh - 120px)' : '200px' }}
          />
        </div>
      </div>

      {/* Footer Informational Bar */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11px] text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 flex items-center justify-between">
        <span>Rendered directly by the browser's User-Agent stylesheet with 0 injected CSS.</span>
        <span className="font-mono text-[10px] text-brand-600 dark:text-brand-400">WHATWG Native DOM</span>
      </div>
    </div>
  );
}
