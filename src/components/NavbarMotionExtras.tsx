'use client';

import { useEffect, useRef } from 'react';

export function NavbarScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let rafId = 0;
    let max = document.documentElement.scrollHeight - window.innerHeight;

    const onResize = () => {
      max = document.documentElement.scrollHeight - window.innerHeight;
    };

    const update = () => {
      rafId = 0;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${progress.toFixed(4)})`;
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      style={{
        transform: 'scaleX(0)',
        transformOrigin: '0% 50%',
        background: 'linear-gradient(90deg, var(--token-accent), var(--token-accent-hover))',
      }}
      className="fixed top-0 inset-x-0 h-[2px] z-[60] pointer-events-none"
    />
  );
}

export function NavActivePill() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-x-1 inset-y-1.5 rounded-[10px] bg-accent-muted border border-accent/25 -z-10 transition-all duration-250"
    />
  );
}
