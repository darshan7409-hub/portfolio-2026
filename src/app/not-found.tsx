import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[82dvh] flex items-center justify-center safe-x py-24">
      <div className="max-w-2xl w-full swiss-panel rounded-[24px] p-8 md:p-12 text-center">
        <p className="mono-meta text-xs uppercase tracking-[0.22em] text-accent-text mb-4">
          ERR_404 // ROUTE_NOT_FOUND
        </p>
        <h1 className="section-display font-bold uppercase text-ink-primary mb-5">
          Signal Lost
        </h1>
        <p className="text-ink-secondary text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
          The route you requested could not be verified. Return to the main portfolio canvas to inspect case studies and capabilities.
        </p>
        <Link
          href="/"
          className="min-h-[44px] inline-flex items-center gap-2.5 px-6 py-3 rounded-[8px] bg-accent text-accent-ink mono-meta text-sm font-semibold uppercase tracking-wider hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
}
