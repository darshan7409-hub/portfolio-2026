'use client';

import { useEffect } from 'react';

export default function SmoothScrollClient() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let lenisInstance: { destroy: () => void } | null = null;
    let cancelled = false;

    const initLenis = async () => {
      const { default: Lenis } = await import('lenis');
      if (cancelled) return;

      lenisInstance = new Lenis({
        lerp: 0.09,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
      });
    };

    void initLenis();

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        lenisInstance?.destroy();
        lenisInstance = null;
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      cancelled = true;
      mediaQuery.removeEventListener('change', handleMotionChange);
      lenisInstance?.destroy();
    };
  }, []);

  return null;
}
