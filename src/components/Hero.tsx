import Image from 'next/image';
import { ArrowDownRight, FileText } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { PORTRAIT_ASSET, PROFILE } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left editorial column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-border-strong bg-surface-2/80">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-ink-secondary">
              {PROFILE.availability} · {PROFILE.location}
            </span>
          </div>

          <h1 className="hero-display font-bold uppercase text-ink-primary">
            Precision
            <br />
            In <span className="text-accent">Quality</span>
            <span className="text-secondary">.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-ink-secondary max-w-2xl leading-relaxed">
            {PROFILE.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <MagneticButton
              as="a"
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent text-accent-ink font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] hover:bg-accent-hover transition-colors shadow-[0_12px_36px_-10px_oklch(0.88_0.21_128/0.45)]"
            >
              <span>View Case Studies</span>
              <ArrowDownRight size={16} aria-hidden="true" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border-strong bg-surface-2/70 text-ink-primary font-mono text-xs sm:text-sm uppercase tracking-[0.14em] hover:border-accent hover:text-accent transition-colors"
            >
              <FileText size={15} aria-hidden="true" />
              <span>Open Resume (PDF)</span>
            </MagneticButton>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border max-w-xl">
            {PROFILE.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  {metric.label}
                </dt>
                <dd className="text-3xl sm:text-4xl font-bold tracking-tight text-ink-primary mt-1">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right portrait LCP frame */}
        <div className="lg:col-span-4">
          <figure className="relative bento-glass rounded-3xl p-2.5 max-w-sm mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-2">
              <Image
                src={PORTRAIT_ASSET.src}
                alt={PORTRAIT_ASSET.alt}
                width={PORTRAIT_ASSET.width}
                height={PORTRAIT_ASSET.height}
                priority
                placeholder="blur"
                blurDataURL={PORTRAIT_ASSET.blurDataURL}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 384px, 32vw"
                className="w-full h-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-surface-1/85 backdrop-blur-md border border-border-strong">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    QA Lead Spec
                  </p>
                  <p className="text-sm font-semibold text-ink-primary">{PROFILE.name}</p>
                </div>
                <span className="font-mono text-[11px] text-ink-muted">2023—26</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

