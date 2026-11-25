'use client';

import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    void error.digest;
  }, [error]);

  return (
    <section className="min-h-[82dvh] flex items-center justify-center safe-x py-24">
      <div className="max-w-xl w-full glass-panel p-8 md:p-12 text-center">
        <p className="mono-meta text-xs uppercase tracking-[0.22em] text-danger mb-4">
          RUNTIME_EXCEPTION // RECOVERABLE
        </p>
        <h1 className="section-display text-3xl md:text-4xl text-ink-primary mb-4">
          Unexpected Interface Fault
        </h1>
        <p className="text-ink-secondary text-sm md:text-base leading-relaxed mb-8">
          Something went wrong while rendering this view. You can safely reset and retry.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="min-h-[44px] inline-flex items-center gap-2.5 px-6 py-3 rounded-[12px] bg-accent text-accent-ink mono-meta text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors cursor-pointer"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Retry View
        </button>
      </div>
    </section>
  );
}
