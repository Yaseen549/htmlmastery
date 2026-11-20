'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ExternalLink, Menu } from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { usePlatformShortcut } from '../../lib/usePlatformShortcut';

export default function Header({ onToggleMobileMenu, onOpenSearch }) {
  const pathname = usePathname();
  const { shortcutKey } = usePlatformShortcut();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'All Tags', href: '/topics' },
    { label: 'Attributes', href: '/attributes' },
    { label: 'Entities', href: '/entities' },
    { label: 'Playground', href: '/playground' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 transition-colors">
      <div className="flex h-14 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Hamburger (mobile) + Official Logo */}
        <div className="flex items-center space-x-3 shrink-0">
          {onToggleMobileMenu && (
            <button
              type="button"
              onClick={onToggleMobileMenu}
              className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
          <Logo size="md" href="/" />
        </div>

        {/* Center: Search Trigger Pill */}
        <div className="hidden sm:flex flex-1 max-w-xs md:max-w-sm lg:max-w-md mx-3 sm:mx-6 lg:mx-8">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-500 transition hover:border-brand-500 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-brand-500 dark:hover:bg-zinc-900"
          >
            <div className="flex items-center space-x-2">
              <Search className="h-3.5 w-3.5 text-zinc-400" />
              <span>Search tags (e.g. &lt;dialog&gt;, form)...</span>
            </div>
            <kbd
              className="rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              suppressHydrationWarning
            >
              {shortcutKey}
            </kbd>
          </button>
        </div>

        {/* Right: Navigation Links + HTML Spec + Theme Toggle */}
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 shrink-0">
          <nav className="hidden md:flex items-center space-x-0.5 lg:space-x-1 text-xs font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-2.5 lg:px-3 py-1.5 transition-colors ${isActive
                    ? 'text-brand-600 font-semibold dark:text-brand-400'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href="https://html.spec.whatwg.org/multipage/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center space-x-1 text-xs font-medium text-zinc-500 hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400 transition-colors"
          >
            <span>HTML Spec</span>
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>

          {/* Search icon button for small mobile */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="sm:hidden p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>

          <div className="border-l border-zinc-200 dark:border-zinc-800 pl-2 sm:pl-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
