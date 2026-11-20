'use client';

import { useState, useEffect } from 'react';

export function usePlatformShortcut() {
  const [isMac, setIsMac] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      const p = (
        navigator?.userAgentData?.platform ||
        navigator?.platform ||
        navigator?.userAgent ||
        ''
      ).toLowerCase();
      setIsMac(p.includes('mac') || p.includes('iphone') || p.includes('ipad'));
    }
  }, []);

  return {
    isMac,
    mounted,
    shortcutKey: mounted ? (isMac ? '⌘K' : 'Ctrl+K') : 'Ctrl+K',
    shortcutLabel: mounted ? (isMac ? 'Cmd+K' : 'Ctrl+K') : 'Ctrl+K',
  };
}
