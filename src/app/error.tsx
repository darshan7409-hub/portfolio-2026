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
    console.error('Application route error:', error);
  }, [error]);

  return (
    <section className="min-h-[82vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full bento-glass rounded-3xl p-8 md:p-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-danger mb-4">
          RUNTIME_EXCEPTION // RECOVERABLE
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink-primary mb-4">
          Unexpected Interface Fault
        </h1>
        <p className="text-ink-secondary text-sm md:text-base leading-relaxed mb-8">
          Something went wrong while rendering this view. You can safely reset and retry.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-accent-ink font-mono text-sm font-semibold uppercase tracking-wider hover:bg-accent-hover transition-colors cursor-pointer"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Retry View
        </button>
      </div>
    </section>
  );
}

