import Image from 'next/image';
import { PROJECTS } from '@/data/portfolio';
import ProjectInspectTrigger from './ProjectInspectTrigger';

export default function ProjectsDeck() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18 scroll-reveal">
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            01 // Selected Case Studies
          </p>
          <h2 className="section-display font-bold uppercase text-ink-primary">
            Quality In Action
          </h2>
        </div>
        <p className="text-sm sm:text-base text-ink-secondary max-w-md leading-relaxed">
          Seven production platforms audited across SaaS gamification, live trivia, retail audio, AI safety, and bilingual commerce.
        </p>
      </div>

      {/* Scroll-Stacking Sticky Card Deck */}
      <div className="relative flex flex-col gap-8 sm:gap-10 pb-8">
        {PROJECTS.map((project, idx) => {
          const stickyTop = `calc(5.25rem + ${Math.min(idx, 5) * 14}px)`;

          return (
            <article
              key={project.id}
              style={{
                top: stickyTop,
                backgroundColor: project.theme.bg,
                color: project.theme.ink,
                borderColor: project.theme.divider,
              }}
              className="sticky stack-card-motion rounded-3xl border overflow-hidden shadow-[0_-18px_48px_-22px_oklch(0_0_0/0.8)] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual showcase column */}
                <div
                  className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r"
                  style={{ borderColor: project.theme.divider }}
                >
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em]">
                    <span style={{ color: project.theme.accent }}>{project.index}</span>
                    <span style={{ color: project.theme.muted }}>{project.year}</span>
                  </div>

                  <div
                    className="group/media my-6 rounded-2xl p-6 sm:p-8 flex items-center justify-center overflow-hidden border min-h-[10.5rem]"
                    style={{
                      backgroundColor: project.theme.plateBg,
                      borderColor: project.theme.divider,
                    }}
                  >
                    <Image
                      src={project.imageSrc}
                      alt={`${project.title} logo`}
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
                    className="flex items-center justify-between font-mono text-xs"
                    style={{ color: project.theme.muted }}
                  >
                    <span>{project.domain}</span>
                    <span>{project.role}</span>
                  </div>
                </div>

                {/* Editorial summary column */}
                <div className="lg:col-span-7 p-6 sm:p-9 lg:p-11 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
                      style={{ color: project.theme.muted }}
                    >
                      {project.shortDescription}
                    </p>
                  </div>

                  <div
                    className="pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                    style={{ borderColor: project.theme.divider }}
                  >
                    <ul className="flex flex-wrap gap-2" aria-label={`${project.title} QA focus`}>
                      {project.techStack.slice(0, 4).map((tag) => (
                        <li
                          key={tag}
                          style={{
                            backgroundColor: project.theme.surface,
                            borderColor: project.theme.divider,
                            color: project.theme.ink,
                          }}
                          className="px-3 py-1 rounded-full border font-mono text-[11px]"
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
