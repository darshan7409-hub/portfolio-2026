'use client';

import { useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { Sun } from 'lucide-react';

const ThemeIconMorph = dynamic(
  () => import('./NavbarMotionExtras').then((mod) => mod.ThemeIconMorph),
  {
    ssr: false,
    loading: () => <Sun size={17} aria-hidden="true" />,
  }
);

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
      className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-[8px] border border-border bg-surface-1 text-ink-primary hover:border-border-strong hover:bg-surface-2 transition-colors cursor-pointer overflow-hidden"
    >
      <ThemeIconMorph isDark={isDark} />
    </button>
  );
}
