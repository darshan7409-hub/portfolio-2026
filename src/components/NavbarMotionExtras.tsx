'use client';

import { m, useScroll } from 'framer-motion';

export function NavbarScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <m.div
      aria-hidden="true"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0% 50%',
        background: 'linear-gradient(90deg, var(--token-accent), var(--token-accent-hover))',
      }}
      className="fixed top-0 inset-x-0 h-[2px] z-[60] pointer-events-none"
    />
  );
}

export function NavActivePill() {
  return (
    <m.span
      layoutId="nav-active-pill"
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="absolute inset-x-1 inset-y-1.5 rounded-[10px] bg-accent-muted border border-accent/25 -z-10"
    />
  );
}
