import GlassPanel from './GlassPanel';
import { ScrollReveal, TypeInEyebrow } from './MotionPrimitives';
import { PROFILE } from '@/data/portfolio';

export default function RecentProjectsStrip() {
  return (
    <section
      id="recent-projects"
      aria-label="Recent projects overview"
      className="py-12 sm:py-16 border-y border-border bg-surface-1/50 safe-x"
    >
      <ScrollReveal className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <TypeInEyebrow text="Recent Projects" className="shrink-0 text-ink-muted" />

        <ul className="flex flex-wrap items-center gap-3">
          {PROFILE.recentProjectChips.map((chip) => (
            <li key={chip.targetId}>
              <a
                href="#work"
                className="inline-flex"
                title={`View ${chip.label} case study in Featured Projects`}
                aria-label={`View ${chip.label} case study in Featured Projects`}
              >
                <GlassPanel className="!rounded-[12px] px-4 py-2.5 min-h-[44px] inline-flex items-center mono-meta text-xs sm:text-sm text-ink-secondary hover:text-accent transition-colors">
                  {chip.label}
                </GlassPanel>
              </a>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}

