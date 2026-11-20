'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import SearchModal from '../ui/SearchModal';
import MobileDrawer from './MobileDrawer';

export default function DocShell({ children, fixedLayout = false }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileDrawerOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 ${
        fixedLayout ? 'h-screen overflow-hidden' : 'min-h-screen'
      }`}
    >
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onToggleMobileMenu={() => setMobileDrawerOpen(true)}
      />

      <div
        className={`flex-1 flex flex-col min-h-0 ${
          fixedLayout ? 'h-[calc(100vh-3.5rem)] overflow-hidden' : ''
        }`}
      >
        {children}
      </div>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        onOpenSearch={() => {
          setMobileDrawerOpen(false);
          setSearchOpen(true);
        }}
      />
    </div>
  );
}
