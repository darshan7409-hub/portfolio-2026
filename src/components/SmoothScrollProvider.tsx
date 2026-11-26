'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from 'react';

interface LenisLike {
  scrollTo: (target: number | string | HTMLElement, options?: { duration?: number }) => void;
  stop: () => void;
  start: () => void;
  destroy: () => void;
}

interface SmoothScrollContextValue {
  scrollToTop: () => void;
  scrollToTarget: (selector: string) => void;
  setScrollLocked: (locked: boolean) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  scrollToTarget: (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  },
  setScrollLocked: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisLike | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    if (mediaQuery.matches || !finePointer.matches || window.innerWidth < 768) return;

    let cancelled = false;
    let initTimer: ReturnType<typeof setTimeout> | null = null;

    const initLenis = async () => {
      const { default: Lenis } = await import('lenis');
      if (cancelled) return;

      lenisRef.current = new Lenis({
        lerp: 0.09,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
      }) as unknown as LenisLike;
    };

    initTimer = setTimeout(() => {
      void initLenis();
    }, 650);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        lenisRef.current?.destroy();
        lenisRef.current = null;
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      cancelled = true;
      if (initTimer) clearTimeout(initTimer);
      mediaQuery.removeEventListener('change', handleMotionChange);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToTop = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const scrollToTarget = useCallback((selector: string) => {
    const target = document.querySelector<HTMLElement>(selector);
    if (!target) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { duration: 0.8 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const setScrollLocked = useCallback((locked: boolean) => {
    if (locked) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ scrollToTop, scrollToTarget, setScrollLocked }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
