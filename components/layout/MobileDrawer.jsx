'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ExternalLink, Home, BookOpen, Info, Search, Sliders, Type, Code2 } from 'lucide-react';
import Logo from '../ui/Logo';
import Sidebar from './Sidebar';

export default function MobileDrawer({ isOpen, onClose, onOpenSearch }) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative z-10 flex w-72 max-w-[80vw] flex-col bg-white shadow-xl dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 h-full">
        {/* Drawer Header */}
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 px-4 dark:border-zinc-800">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Nav Links */}
        <div className="border-b border-zinc-200 p-3 space-y-1 text-xs font-medium dark:border-zinc-800">
          <Link
            href="/"
            onClick={onClose}
            className={`flex items-center space-x-2 rounded px-2.5 py-1.5 ${
              pathname === '/'
                ? 'bg-brand-50 text-brand-600 font-semibold dark:bg-brand-950/60 dark:text-brand-400'
                : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/topics"
            onClick={onClose}
            className={`flex items-center space-x-2 rounded px-2.5 py-1.5 ${
              pathname === '/topics'
                ? 'bg-brand-50 text-brand-600 font-semibold dark:bg-brand-950/60 dark:text-brand-400'
                : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>All Tags</span>
          </Link>
          <Link
            href="/attributes"
            onClick={onClose}
            className={`flex items-center space-x-2 rounded px-2.5 py-1.5 ${
              pathname === '/attributes'
                ? 'bg-brand-50 text-brand-600 font-semibold dark:bg-brand-950/60 dark:text-brand-400'
                : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
            }`}
          >
            <Sliders className="h-4 w-4" />
            <span>Global Attributes</span>
          </Link>
          <Link
            href="/entities"
            onClick={onClose}
            className={`flex items-center space-x-2 rounded px-2.5 py-1.5 ${
              pathname === '/entities'
                ? 'bg-brand-50 text-brand-600 font-semibold dark:bg-brand-950/60 dark:text-brand-400'
                : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
            }`}
          >
            <Type className="h-4 w-4" />
            <span>Character Entities</span>
          </Link>
          <Link
            href="/playground"
            onClick={onClose}
            className={`flex items-center space-x-2 rounded px-2.5 py-1.5 ${
              pathname === '/playground'
                ? 'bg-brand-50 text-brand-600 font-semibold dark:bg-brand-950/60 dark:text-brand-400'
                : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
            }`}
          >
            <Code2 className="h-4 w-4" />
            <span>Playground</span>
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className={`flex items-center space-x-2 rounded px-2.5 py-1.5 ${
              pathname === '/about'
                ? 'bg-brand-50 text-brand-600 font-semibold dark:bg-brand-950/60 dark:text-brand-400'
                : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900'
            }`}
          >
            <Info className="h-4 w-4" />
            <span>About</span>
          </Link>
        </div>

        {/* Categorized Elements */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <Sidebar onSelectTopic={onClose} className="border-r-0 w-full" />
        </div>
      </div>
    </div>
  );
}
