import Image from 'next/image';
import { ArrowDownRight, FileText } from 'lucide-react';
import MagneticButton from './MagneticButton';
import SocialLinks from './SocialLinks';
import { PORTRAIT_ASSET, PROFILE } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center pt-24 pb-24 sm:pt-32 sm:pb-32 safe-x"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left editorial column */}
        <div className="lg:col-span-8 space-y-7">
          <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-[8px] border border-border bg-surface-1">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            <span className="mono-meta text-xs uppercase tracking-[0.14em] text-ink-secondary">
              {PROFILE.availability} · {PROFILE.location}
            </span>
          </div>

          <h1 className="hero-display font-bold text-ink-primary">
            Precision
            <br />
            In <span className="text-accent-text">Quality</span>.
          </h1>

          <p className="text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
            {PROFILE.tagline}
          </p>

          {/* Strict Button Hierarchy: 1 Primary + 1 Secondary + Socials */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <MagneticButton
              as="a"
              href="#projects"
              className="min-h-[44px] inline-flex items-center gap-2.5 px-6 py-3 rounded-[8px] bg-accent text-accent-ink mono-meta text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] hover:bg-accent-hover transition-colors"
            >
              <span>View Case Studies</span>
              <ArrowDownRight size={16} aria-hidden="true" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-2.5 px-6 py-3 rounded-[8px] border border-border bg-surface-1 text-ink-primary mono-meta text-xs sm:text-sm uppercase tracking-[0.12em] hover:border-border-strong hover:bg-surface-2 transition-colors"
            >
              <FileText size={15} aria-hidden="true" />
              <span>Open Resume (PDF)</span>
            </MagneticButton>
          </div>

          <SocialLinks variant="hero" />

          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border max-w-xl">
            {PROFILE.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="mono-meta text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  {metric.label}
                </dt>
                <dd className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-ink-primary mt-1">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right portrait LCP frame */}
        <div className="lg:col-span-4">
          <figure className="swiss-panel rounded-[24px] p-3 max-w-sm mx-auto lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-surface-2">
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
              <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-[8px] bg-surface-1/90 nav-blur border border-border">
                <div>
                  <p className="mono-meta text-[10px] uppercase tracking-[0.16em] text-accent-text">
                    QA Automation Lead
                  </p>
                  <p className="text-sm font-semibold text-ink-primary">{PROFILE.name}</p>
                </div>
                <span className="mono-meta text-[11px] text-ink-muted">2023—26</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
