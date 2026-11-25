import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[82vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full bento-glass rounded-3xl p-8 md:p-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
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
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent text-accent-ink font-mono text-sm font-semibold uppercase tracking-wider hover:bg-accent-hover transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Portfolio
        </Link>
      </div>
    </section>
  );
}

