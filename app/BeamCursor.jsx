'use client';

import { useEffect, useRef } from 'react';

export default function BeamCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
    >
      <div className="w-5 h-5 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full animate-pulse blur-sm opacity-90" />
    </div>
  );
}
