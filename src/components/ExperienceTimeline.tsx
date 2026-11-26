'use client';

import { useState } from 'react';
import { ChevronDown, GraduationCap } from 'lucide-react';
import GlassPanel from './GlassPanel';
import SectionHeader from './SectionHeader';
import { ScrollReveal } from './MotionPrimitives';
import { EDUCATION, EXPERIENCES } from '@/data/portfolio';

export default function ExperienceTimeline() {
  const [showEarlier, setShowEarlier] = useState(false);

  const primaryRoles = EXPERIENCES.filter((e) => e.current);
  const earlierRoles = EXPERIENCES.filter((e) => !e.current);

  const renderRoleCard = (exp: (typeof EXPERIENCES)[number]) => (
    <div key={exp.id} className="relative pl-7 sm:pl-10">
      {/* Timeline rail node */}
      <span
        aria-hidden="true"
        className={`absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full border ${
          exp.current
            ? 'bg-accent border-accent shadow-[0_0_12px_var(--token-accent)]'
            : 'bg-surface-2 border-border-strong'
        }`}
      />

      <GlassPanel as="article" className="p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3 className="font-serif text-2xl sm:text-3xl text-ink-primary">{exp.role}</h3>
              {exp.current && (
                <span className="px-2.5 py-0.5 rounded-full bg-accent-muted border border-accent/35 mono-meta text-[10px] uppercase tracking-wider text-accent">
                  Current
                </span>
              )}
            </div>
            {/* Typographic company wordmark inside Experience Timeline only */}
            <p className="mono-meta text-xs sm:text-sm uppercase tracking-[0.14em] text-ink-secondary">
              {exp.company} · <span className="text-ink-muted">{exp.location}</span>
            </p>
          </div>

          <span className="mono-meta text-xs text-accent shrink-0">{exp.duration}</span>
        </div>

        <ul className="space-y-2.5 text-sm sm:text-base text-ink-secondary leading-relaxed">
          {exp.responsibilities.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5">
              <span aria-hidden="true" className="text-accent mt-1.5 text-xs">
                ◆
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-[8px] border border-border bg-surface-2/60 mono-meta text-[11px] text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </GlassPanel>
    </div>
  );

  return (
    <section id="experience" className="py-24 sm:py-32 safe-x max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="02 // Career Timeline"
        title="Experience & Education"
        description={
          <>
            8+ years validating production software releases across QA teams — open to discussing full-time QA roles via{' '}
            <a
              href="#contact"
              className="link-draw text-accent hover:text-accent-hover transition-colors"
            >
              direct contact
            </a>
            .
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Vertical Experience Rail */}
        <div className="lg:col-span-8">
          <ScrollReveal>
            <div className="border-l border-accent/40 space-y-6 ml-2">
              {primaryRoles.map(renderRoleCard)}

              {earlierRoles.length > 0 && (
                <div className="pl-7 sm:pl-10">
                  <button
                    type="button"
                    onClick={() => setShowEarlier((prev) => !prev)}
                    aria-expanded={showEarlier}
                    className="glass-panel glass-interactive min-h-[44px] !rounded-[12px] px-4 py-2 inline-flex items-center gap-2 mono-meta text-xs uppercase tracking-[0.14em] text-ink-primary hover:text-accent cursor-pointer"
                  >
                    <span>{showEarlier ? 'Hide earlier roles' : `Earlier roles (${earlierRoles.length})`}</span>
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${showEarlier ? 'rotate-180' : 'animate-bounce'}`}
                    />
                  </button>
                </div>
              )}

              {showEarlier && earlierRoles.map(renderRoleCard)}
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Academic Background */}
        <div className="lg:col-span-4">
          <ScrollReveal delay={0.08}>
            <GlassPanel as="article" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 mono-meta text-xs uppercase tracking-[0.16em] text-accent">
                <GraduationCap size={15} aria-hidden="true" />
                <span>Academic Foundation</span>
              </div>
              <div className="space-y-5">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.id}
                    className="pb-5 last:pb-0 border-b last:border-b-0 border-border space-y-1.5"
                  >
                    <span className="mono-meta text-[11px] text-accent">{edu.duration}</span>
                    <h3 className="font-serif text-xl text-ink-primary leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="mono-meta text-xs text-ink-secondary">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

