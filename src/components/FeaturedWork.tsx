'use client';

import { useState, useRef, type CSSProperties } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import GlassPanel from './GlassPanel';
import SectionHeader from './SectionHeader';
import { ParallaxFrame, ScrollReveal } from './MotionPrimitives';
import { type ProjectCaseStudy } from '@/data/portfolio';

const ProjectDrawer = dynamic(() => import('./ProjectDrawer'), { ssr: false });

export default function FeaturedWork({ projects }: { projects: ProjectCaseStudy[] }) {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 safe-x max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="01 // Featured Work"
        title="Editorial Case Studies"
        description={
          <>
            Three flagship QA engagements framed around risk, scope, and measurable release gates — supported by a{' '}
            <a
              href="#skills"
              className="link-draw text-accent hover:text-accent-hover transition-colors"
            >
              four-pillar verification matrix
            </a>
            .
          </>
        }
      />

      <div className="space-y-12 sm:space-y-16">
        {projects.map((project, idx) => {
          const isReversed = idx % 2 === 1;
          const accentVars = {
            '--ca-dark': project.accent.dark,
            '--ca-light': project.accent.light,
          } as CSSProperties;

          return (
            <ScrollReveal key={project.id} delay={idx * 0.06}>
              <GlassPanel
                as="article"
                tilt
                style={accentVars}
                className="card-accent-scope group p-6 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* 60% Image Stage with 1.1x Scroll Parallax */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div
                      className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-border flex items-center justify-center p-8 sm:p-12"
                      style={{
                        backgroundColor:
                          project.plateMode === 'dark'
                            ? 'oklch(0.155 0.008 60)'
                            : 'oklch(0.955 0.005 60)',
                      }}
                    >
                      <ParallaxFrame range={[-16, 16]} className="w-full flex items-center justify-center">
                        <Image
                          src={project.imageSrc}
                          alt={`${project.title} featured case study visual`}
                          width={project.imageWidth}
                          height={project.imageHeight}
                          priority={idx === 0}
                          placeholder="blur"
                          blurDataURL={project.blurDataURL}
                          sizes="(max-width: 1024px) 88vw, 52vw"
                          className="max-h-36 sm:max-h-44 w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        />
                      </ParallaxFrame>

                      <span
                        className="absolute left-4 bottom-4 px-3 py-1.5 rounded-[10px] mono-meta text-[11px] uppercase tracking-wider border"
                        style={{
                          backgroundColor: 'oklch(0.14 0.006 60 / 0.84)',
                          borderColor: 'color-mix(in oklch, var(--card-accent) 40%, transparent)',
                          color: project.accent.dark,
                        }}
                      >
                        {project.domain}
                      </span>
                    </div>
                  </div>

                  {/* 40% Editorial Copy */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <p
                      className="mono-meta text-xs uppercase tracking-[0.18em]"
                      style={{ color: 'var(--card-accent)' }}
                    >
                      {project.featuredIndex} · {project.year}
                    </p>

                    <h3 className="font-serif text-4xl sm:text-5xl leading-[1.06] text-ink-primary transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      {project.title}
                    </h3>

                    <p className="italic text-ink-secondary text-sm sm:text-base leading-relaxed">
                      {project.problemStatement}
                    </p>

                    <p className="text-sm text-ink-muted leading-relaxed">
                      <strong className="text-ink-primary font-semibold">Role &amp; Approach:</strong>{' '}
                      {project.roleScope} — {project.approach}
                    </p>

                    {/* 3 Metric Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.metricPills.map((pill) => (
                        <span
                          key={pill}
                          className="px-3 py-1.5 rounded-[10px] border mono-meta text-xs"
                          style={{
                            borderColor: 'color-mix(in oklch, var(--card-accent) 32%, transparent)',
                            color: 'var(--card-accent)',
                            backgroundColor: 'color-mix(in oklch, var(--card-accent) 10%, transparent)',
                          }}
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          triggerRef.current = e.currentTarget;
                          setActiveProject(project);
                        }}
                        style={{ color: 'var(--card-accent)' }}
                        className="min-h-[44px] inline-flex items-center gap-2 mono-meta text-xs uppercase tracking-[0.14em] font-semibold cursor-pointer transition-colors"
                      >
                        <span>Read the case study</span>
                        <ArrowRight
                          size={15}
                          aria-hidden="true"
                          className="transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </ScrollReveal>
          );
        })}
      </div>

      <ProjectDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
        triggerRef={triggerRef}
      />
    </section>
  );
}
