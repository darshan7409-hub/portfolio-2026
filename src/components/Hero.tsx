import Image from 'next/image';
import { ArrowUpRight, ChevronDown, FileText, Mail } from 'lucide-react';
import GlassPanel from './GlassPanel';
import HeroSpotlight from './HeroSpotlight';
import MagneticButton from './MagneticButton';
import SocialLinks from './SocialLinks';
import { HeroTextReveal, ParallaxFrame, StatCounter } from './MotionPrimitives';
import { PORTRAIT_ASSET, PROFILE } from '@/data/portfolio';

export default function Hero({ hasRealCv }: { hasRealCv: boolean }) {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 pb-10 sm:pt-28 sm:pb-12 safe-x overflow-hidden"
    >
      <HeroSpotlight />

      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
        {/* Left Editorial Column */}
        <div className="lg:col-span-8 space-y-6 relative z-10 pt-6 lg:pt-4">
          <HeroTextReveal
            lines={['Leading quality assurance', 'and precision testing', 'for release confidence.']}
            highlightWord="confidence."
          />

          <p className="mono-meta text-xs sm:text-sm uppercase tracking-[0.16em] text-accent">
            {PROFILE.name} · {PROFILE.role}
          </p>

          <p className="text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed [text-wrap:pretty]">
            {PROFILE.subpositioning}
          </p>

          {/* Clean balanced Hero CTAs (View Projects + Get in Touch / Download CV when >50KB) */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {hasRealCv ? (
              <>
                <MagneticButton
                  as="a"
                  href={PROFILE.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[12px] bg-accent text-accent-ink mono-meta text-xs sm:text-sm font-bold uppercase tracking-[0.12em] transition-[background-color,transform,box-shadow] duration-200 hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_0_4px_var(--token-accent-muted),0_12px_28px_-8px_var(--token-accent)]"
                >
                  <FileText size={16} aria-hidden="true" />
                  <span>Download CV</span>
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#work"
                  className="glass-panel glass-interactive min-h-[44px] !rounded-[12px] inline-flex items-center gap-2.5 px-7 py-3.5 mono-meta text-xs sm:text-sm uppercase tracking-[0.12em] text-ink-primary"
                >
                  <span>View Projects</span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:rotate-45"
                  />
                </MagneticButton>
              </>
            ) : (
              <>
                <MagneticButton
                  as="a"
                  href="#work"
                  className="min-h-[44px] inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[12px] bg-accent text-accent-ink mono-meta text-xs sm:text-sm font-bold uppercase tracking-[0.12em] transition-[background-color,transform,box-shadow] duration-200 hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_0_4px_var(--token-accent-muted),0_12px_28px_-8px_var(--token-accent)]"
                >
                  <span>View Projects</span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:rotate-45"
                  />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#contact"
                  className="glass-panel glass-interactive min-h-[44px] !rounded-[12px] inline-flex items-center gap-2.5 px-7 py-3.5 mono-meta text-xs sm:text-sm uppercase tracking-[0.12em] text-ink-primary"
                >
                  <Mail size={15} aria-hidden="true" className="text-accent" />
                  <span>Get in Touch</span>
                </MagneticButton>
              </>
            )}
          </div>

          <SocialLinks variant="hero" />

          <dl className="grid grid-cols-2 gap-4 pt-4 max-w-sm">
            {PROFILE.metrics.map((metric) => (
              <StatCounter
                key={metric.label}
                end={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </dl>
        </div>

        {/* Right Portrait with Glass Frame & Scroll Parallax */}
        <div className="lg:col-span-4 relative z-10">
          <ParallaxFrame range={[0, 40]}>
            <GlassPanel className="p-3 max-w-sm mx-auto lg:max-w-none" interactive>
              <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-surface-2">
                <Image
                  src={PORTRAIT_ASSET.src}
                  alt={PORTRAIT_ASSET.alt}
                  title="Darshan Patel — Senior QA Lead & Analyst (Official Portrait)"
                  width={PORTRAIT_ASSET.width}
                  height={PORTRAIT_ASSET.height}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 384px, 32vw"
                  className="w-full h-full object-cover object-top"
                />
                <figcaption
                  style={{
                    background:
                      'linear-gradient(135deg, oklch(0.16 0.006 60 / 0.92) 0%, oklch(0.12 0.005 60 / 0.92) 100%)',
                    color: 'oklch(0.97 0.005 60)',
                    borderColor: 'oklch(0.97 0.005 60 / 0.16)',
                  }}
                  className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-[12px] border"
                >
                  <div>
                    <p
                      className="mono-meta text-[10px] uppercase tracking-[0.16em]"
                      style={{ color: 'oklch(0.78 0.14 68)' }}
                    >
                      {PROFILE.role}
                    </p>
                    <p className="text-sm font-semibold">{PROFILE.name}</p>
                  </div>
                  <span className="mono-meta text-[11px] opacity-80">AHMEDABAD</span>
                </figcaption>
              </figure>
            </GlassPanel>
          </ParallaxFrame>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="max-w-7xl mx-auto w-full flex justify-center pt-6">
        <a
          href="#recent-projects"
          aria-label="Scroll to recent projects"
          className="min-h-[44px] min-w-[44px] inline-flex flex-col items-center justify-center gap-1 text-ink-muted hover:text-accent transition-colors"
        >
          <span className="mono-meta text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={18} aria-hidden="true" className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
