import type { CSSProperties } from 'react';
import Image from 'next/image';
import { PROJECTS, type ProjectCaseStudy } from '@/data/portfolio';
import ProjectInspectTrigger from './ProjectInspectTrigger';
import SectionHeader from './SectionHeader';

export function buildCardVars(project: ProjectCaseStudy): CSSProperties {
  return {
    '--cd-bg': project.darkTheme.bg,
    '--cd-surface': project.darkTheme.surface,
    '--cd-ink': project.darkTheme.ink,
    '--cd-muted': project.darkTheme.muted,
    '--cd-divider': project.darkTheme.divider,
    '--cd-accent': project.darkTheme.accent,
    '--cd-accent-ink': project.darkTheme.accentInk,
    '--cd-plate': project.darkTheme.plateBg,
    '--cl-bg': project.lightTheme.bg,
    '--cl-surface': project.lightTheme.surface,
    '--cl-ink': project.lightTheme.ink,
    '--cl-muted': project.lightTheme.muted,
    '--cl-divider': project.lightTheme.divider,
    '--cl-accent': project.lightTheme.accent,
    '--cl-accent-ink': project.lightTheme.accentInk,
    '--cl-plate': project.lightTheme.plateBg,
  } as CSSProperties;
}

export default function ProjectsDeck() {
  return (
    <section id="projects" className="py-24 sm:py-32 safe-x max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="01 // Selected Case Studies"
        title="Quality In Action"
        description={
          <>
            Seven production platforms audited across SaaS gamification, live trivia, retail audio, AI safety, and bilingual commerce — backed by our{' '}
            <a
              href="#stack"
              className="text-accent-text underline underline-offset-4 hover:text-accent-hover transition-colors"
            >
              verification tool stack
            </a>
            .
          </>
        }
      />

      {/* Scroll-Stacking Sticky Card Deck (static < 640px, sticky >= 640px) */}
      <div className="relative flex flex-col gap-8 pb-8">
        {PROJECTS.map((project, idx) => {
          const stickyTop = `calc(4.75rem + ${Math.min(idx, 5) * 14}px)`;

          return (
            <article
              key={project.id}
              style={{
                ...buildCardVars(project),
                top: stickyTop,
                backgroundColor: 'var(--card-bg)',
                color: 'var(--card-ink)',
                borderColor: 'var(--card-divider)',
                boxShadow: 'var(--shadow-medium)',
              }}
              className="project-themed sm:sticky stack-card-motion rounded-[16px] border overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual showcase column */}
                <div
                  className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r"
                  style={{ borderColor: 'var(--card-divider)' }}
                >
                  <div className="flex items-center justify-between mono-meta text-xs uppercase tracking-[0.16em]">
                    <span style={{ color: 'var(--card-accent)' }}>{project.index}</span>
                    <span style={{ color: 'var(--card-muted)' }}>{project.year}</span>
                  </div>

                  <div
                    className="group/media my-6 rounded-[16px] p-6 sm:p-8 flex items-center justify-center overflow-hidden border min-h-[10rem]"
                    style={{
                      backgroundColor: 'var(--card-plate)',
                      borderColor: 'var(--card-divider)',
                    }}
                  >
                    <Image
                      src={project.imageSrc}
                      alt={`${project.title} platform logo`}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      priority={idx === 0}
                      placeholder="blur"
                      blurDataURL={project.blurDataURL}
                      sizes="(max-width: 1024px) 80vw, 34vw"
                      className="max-h-24 w-auto object-contain transition-transform duration-500 ease-out group-hover/media:scale-[1.06]"
                    />
                  </div>

                  <div
                    className="flex items-center justify-between mono-meta text-xs"
                    style={{ color: 'var(--card-muted)' }}
                  >
                    <span>{project.domain}</span>
                    <span>{project.role}</span>
                  </div>
                </div>

                {/* Editorial column — strict hierarchy: index -> title -> description -> meta */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <p
                      className="mono-meta text-xs uppercase tracking-[0.16em]"
                      style={{ color: 'var(--card-muted)' }}
                    >
                      {project.domain}
                    </p>
                    <h3 className="heading-sub text-2xl sm:text-3xl font-bold">
                      {project.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base leading-relaxed max-w-2xl"
                      style={{ color: 'var(--card-muted)' }}
                    >
                      {project.shortDescription}
                    </p>
                  </div>

                  <div
                    className="pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    style={{ borderColor: 'var(--card-divider)' }}
                  >
                    <ul className="flex flex-wrap gap-2" aria-label={`${project.title} QA focus`}>
                      {project.techStack.slice(0, 4).map((tag) => (
                        <li
                          key={tag}
                          style={{
                            backgroundColor: 'var(--card-surface)',
                            borderColor: 'var(--card-divider)',
                            color: 'var(--card-ink)',
                          }}
                          className="px-3 py-1 rounded-[8px] border mono-meta text-[11px]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <ProjectInspectTrigger project={project} />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
