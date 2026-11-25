'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="group glass-panel min-h-[44px] min-w-[44px] !rounded-[12px] inline-flex items-center justify-center text-ink-primary hover:text-accent cursor-pointer transition-colors duration-200"
    >
      <span
        key={isDark ? 'sun' : 'moon'}
        className="inline-flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-12 group-active:scale-90"
      >
        {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
      </span>
    </button>
  );
}
