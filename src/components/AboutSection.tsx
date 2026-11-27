import Image from 'next/image';
import GlassPanel from './GlassPanel';
import SectionHeader from './SectionHeader';
import { ScrollReveal } from './MotionPrimitives';
import { PORTRAIT_ASSET, PROFILE } from '@/data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-16 safe-x max-w-7xl mx-auto">
      <SectionHeader eyebrow="04 // Philosophy" title="How I Think About Quality" />

      <ScrollReveal>
        <GlassPanel as="article" className="p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-9 space-y-6">
              <blockquote className="font-serif text-3xl sm:text-5xl leading-[1.1] text-ink-primary">
                “{PROFILE.aboutPullQuote}”
                <footer className="mono-meta text-xs uppercase tracking-[0.18em] text-accent mt-4">
                  — {PROFILE.name}
                </footer>
              </blockquote>

              <div className="space-y-4 pt-4 border-t border-border text-base sm:text-lg text-ink-secondary leading-relaxed max-w-3xl">
                {PROFILE.aboutParagraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
                <p className="text-sm sm:text-base text-ink-muted">
                  Explore how this approach translates into{' '}
                  <a href="#work" className="link-draw text-accent hover:text-accent-hover transition-colors">
                    featured QA projects
                  </a>{' '}
                  and our{' '}
                  <a href="#skills" className="link-draw text-accent hover:text-accent-hover transition-colors">
                    verification matrix
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end">
              <div className="glass-panel !rounded-[16px] p-2 w-32 sm:w-36">
                <div className="aspect-[4/5] rounded-[12px] overflow-hidden bg-surface-2">
                  <Image
                    src={PORTRAIT_ASSET.src}
                    alt={`${PROFILE.name} small editorial portrait`}
                    width={PORTRAIT_ASSET.width}
                    height={PORTRAIT_ASSET.height}
                    placeholder="blur"
                    blurDataURL={PORTRAIT_ASSET.blurDataURL}
                    sizes="144px"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </ScrollReveal>
    </section>
  );
}

