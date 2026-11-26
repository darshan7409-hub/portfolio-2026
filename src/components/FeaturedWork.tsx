'use client';

import { useState, useRef, useEffect, useCallback, type CSSProperties } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import GlassPanel from './GlassPanel';
import SectionHeader from './SectionHeader';
import { ScrollReveal } from './MotionPrimitives';
import { type ProjectCaseStudy } from '@/data/portfolio';

const ProjectDrawer = dynamic(() => import('./ProjectDrawer'), { ssr: false });

export default function FeaturedWork({ projects }: { projects: ProjectCaseStudy[] }) {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleClose = useCallback(() => {
    setActiveProject(null);
  }, []);

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollButtons();

    let timer: ReturnType<typeof setTimeout> | null = null;
    const ro = new ResizeObserver(() => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(updateScrollButtons, 150);
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [updateScrollButtons, projects.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 24 : 380;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section id="work" className="py-20 sm:py-28 safe-x max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <SectionHeader
          eyebrow="01 // Featured Projects"
          title="Featured Projects"
          description="A robust portfolio of scalable QA architectures and automation solutions. Swipe through to discover case studies."
          className="!mb-0"
        />

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll projects left"
            className={`glass-panel !rounded-full min-h-[44px] min-w-[44px] inline-flex items-center justify-center transition-colors ${
              canScrollLeft
                ? 'text-ink-primary hover:text-accent cursor-pointer'
                : 'text-ink-muted/40 opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Scroll projects right"
            className={`glass-panel !rounded-full min-h-[44px] min-w-[44px] inline-flex items-center justify-center transition-colors ${
              canScrollRight
                ? 'text-ink-primary hover:text-accent cursor-pointer'
                : 'text-ink-muted/40 opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ScrollReveal>
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollButtons}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, idx) => {
            const accentVars = {
              '--ca-dark': project.accent.dark,
              '--ca-light': project.accent.light,
            } as CSSProperties;

            return (
              <GlassPanel
                key={project.id}
                as="article"
                tilt
                style={accentVars}
                className="card-accent-scope group snap-center shrink-0 w-[85vw] sm:w-[22rem] md:w-[24rem] lg:w-[26rem] min-h-[27.5rem] flex flex-col overflow-hidden max-md:!backdrop-blur-none"
              >
                {/* Compact Visual Header */}
                <div
                  className="h-40 w-full shrink-0 relative overflow-hidden flex items-center justify-center border-b border-border p-5"
                  style={{
                    backgroundColor:
                      project.plateMode === 'dark'
                        ? 'oklch(0.155 0.008 60)'
                        : 'oklch(0.955 0.005 60)',
                  }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={`${project.title} project visual`}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    priority={idx === 0}
                    placeholder="blur"
                    blurDataURL={project.blurDataURL}
                    sizes="(max-width: 640px) 80vw, 380px"
                    className="max-h-20 w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />

                  <span
                    className="absolute left-3.5 bottom-3 px-2.5 py-1 rounded-[8px] mono-meta text-[10px] uppercase tracking-wider border"
                    style={{
                      backgroundColor: 'oklch(0.14 0.006 60 / 0.84)',
                      borderColor: 'color-mix(in oklch, var(--card-accent) 40%, transparent)',
                      color: project.accent.dark,
                    }}
                  >
                    {project.domain}
                  </span>

                  <div className="absolute inset-0 bg-canvas/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="glass-panel !rounded-full px-4 py-1.5 mono-meta text-[11px] font-semibold uppercase tracking-wider text-ink-primary translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Compact Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-2xl leading-tight text-ink-primary group-hover:text-accent transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <span
                      className="mono-meta text-[11px] shrink-0"
                      style={{ color: 'var(--card-accent)' }}
                    >
                      {project.index}
                    </span>
                  </div>

                  <p className="text-sm text-ink-secondary leading-relaxed line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech / Scope Chips (max 3) */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-[8px] border mono-meta text-[11px]"
                        style={{
                          borderColor: 'color-mix(in oklch, var(--card-accent) 30%, transparent)',
                          color: 'var(--card-accent)',
                          backgroundColor: 'color-mix(in oklch, var(--card-accent) 9%, transparent)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-1 rounded-[8px] border border-border mono-meta text-[11px] text-ink-muted">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-2 border-t border-border flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        triggerRef.current = e.currentTarget;
                        setActiveProject(project);
                      }}
                      style={{ color: 'var(--card-accent)' }}
                      className="min-h-[44px] w-full inline-flex items-center justify-between mono-meta text-xs uppercase tracking-[0.14em] font-semibold cursor-pointer transition-colors"
                    >
                      <span>View details</span>
                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </button>
                  </div>
                </div>
              </GlassPanel>
            );
          })}
        </div>
      </ScrollReveal>

      <ProjectDrawer
        project={activeProject}
        onClose={handleClose}
        triggerRef={triggerRef}
      />
    </section>
  );
}
