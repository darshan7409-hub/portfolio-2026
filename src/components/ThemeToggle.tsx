'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, m } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = !mounted || resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="group glass-panel min-h-[44px] min-w-[44px] !rounded-[12px] inline-flex items-center justify-center text-ink-primary hover:text-accent cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ rotate: -180, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 180, scale: 0.6, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.4 }}
          className="inline-flex items-center justify-center"
        >
          {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
        </m.span>
      </AnimatePresence>
    </button>
  );
}
