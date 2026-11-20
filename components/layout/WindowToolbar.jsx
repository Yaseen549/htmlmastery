'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ExternalLink,
  Menu,
  Search,
  Sparkles,
} from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Logo from '../ui/Logo';
import { usePlatformShortcut } from '../../lib/usePlatformShortcut';

export default function WindowToolbar({ onToggleMobileMenu, onOpenSearch }) {
  const pathname = usePathname();
  const { shortcutKey } = usePlatformShortcut();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'All Tags', href: '/topics' },
    { label: 'About Standard', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200/80 bg-white/95 px-4 backdrop-blur-md dark:border-zinc-800 dark:bg-surface-darkSurface/95 sm:px-6 lg:px-8">
      {/* Left: Mobile hamburger + App Branding */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onToggleMobileMenu}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 lg:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
          aria-label="Open topics menu"
        >
          <Menu className="h-4 w-4" />
        </button>

        <Logo size="md" />
      </div>

      {/* Center: Search pill button */}
      <div className="hidden md:flex flex-1 max-w-xs mx-6">
        <button
          onClick={onOpenSearch}
          className="flex w-full items-center justify-between rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-3 py-1.5 text-xs text-zinc-500 transition hover:border-brand-300 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-zinc-700"
        >
          <div className="flex items-center space-x-2">
            <Search className="h-3.5 w-3.5 text-zinc-400" />
            <span>Search HTML5 tags...</span>
          </div>
          <kbd
            className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 shadow-2xs dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            suppressHydrationWarning
          >
            {shortcutKey}
          </kbd>
        </button>
      </div>

      {/* Right: Main Navigation Links + Specification Link + Theme Toggle */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        <nav className="hidden sm:flex items-center space-x-1 text-xs font-medium">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-2.5 py-1.5 transition-colors ${
                  isActive
                    ? 'bg-brand-50 font-semibold text-brand-600 dark:bg-brand-950/50 dark:text-brand-400'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* WHATWG Living Standard external link badge */}
        <a
          href="https://html.spec.whatwg.org/multipage/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center space-x-1 rounded-lg border border-brand-200/80 bg-brand-50/60 px-2.5 py-1 text-xs font-semibold text-brand-700 transition hover:bg-brand-100/80 dark:border-brand-900/80 dark:bg-brand-950/50 dark:text-brand-300"
        >
          <Sparkles className="h-3 w-3 text-brand-500" />
          <span>WHATWG Spec</span>
          <ExternalLink className="h-2.5 w-2.5 opacity-70" />
        </a>

        {/* Theme Toggle Button */}
        <ThemeToggle />
      </div>
    </header>
  );
}
