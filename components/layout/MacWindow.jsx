'use client';

// Clean passthrough wrapper to maintain backward compatibility without floating Mac card / wallpaper decoration
export default function MacWindow({ children }) {
  return <div className="w-full flex-1 flex flex-col min-h-screen">{children}</div>;
}
