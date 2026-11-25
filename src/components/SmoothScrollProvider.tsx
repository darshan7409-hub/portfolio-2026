'use client';

import { useEffect } from 'react';

export default function SmoothScrollClient() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let lenisInstance: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId = 0;
    let cancelled = false;

    const initLenis = async () => {
      const { default: Lenis } = await import('lenis');
      if (cancelled) return;

      lenisInstance = new Lenis({
        duration: 1.05,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.5,
      });

      const raf = (time: number) => {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    void initLenis();

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        cancelAnimationFrame(rafId);
        lenisInstance?.destroy();
        lenisInstance = null;
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      cancelled = true;
      mediaQuery.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  return null;
}
