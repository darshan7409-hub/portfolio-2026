'use client';

import { LazyMotion, AnimatePresence, m, useScroll } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const loadFeatures = () => import('framer-motion').then((mod) => mod.domAnimation);

export function NavbarScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <LazyMotion features={loadFeatures} strict>
      <m.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
        className="fixed top-0 inset-x-0 h-[2px] bg-accent z-[60] pointer-events-none"
      />
    </LazyMotion>
  );
}

export function NavActivePill() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <m.span
        layoutId="nav-active-pill"
        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        className="absolute inset-x-1 inset-y-1.5 rounded-[8px] bg-surface-2 border border-border -z-10"
      />
    </LazyMotion>
  );
}

export function ThemeIconMorph({ isDark }: { isDark: boolean }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ rotate: -45, scale: 0.65, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 45, scale: 0.65, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="inline-flex items-center justify-center"
        >
          {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
        </m.span>
      </AnimatePresence>
    </LazyMotion>
  );
}

