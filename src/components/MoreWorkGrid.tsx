'use client';

import type { CSSProperties } from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GlassPanel from './GlassPanel';
import type { ProjectCaseStudy } from '@/data/portfolio';

export default function MoreWorkGrid({
  projects,
  onSelect,
}: {
  projects: ProjectCaseStudy[];
  onSelect: (project: ProjectCaseStudy, trigger: HTMLButtonElement) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, idx) => {
        const accentVars = {
          '--ca-dark': project.accent.dark,
          '--ca-light': project.accent.light,
        } as CSSProperties;

        return (
          <m.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassPanel
              as="article"
              tilt
              style={accentVars}
              className="card-accent-scope group p-6 h-full flex flex-col justify-between gap-5"
            >
              <div
                className="rounded-[14px] p-6 border border-border flex items-center justify-center min-h-[9.5rem]"
                style={{
                  backgroundColor:
                    project.plateMode === 'dark'
                      ? 'oklch(0.155 0.008 60)'
                      : 'oklch(0.955 0.005 60)',
                }}
              >
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} logo`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  placeholder="blur"
                  blurDataURL={project.blurDataURL}
                  sizes="(max-width: 768px) 84vw, 42vw"
                  className="max-h-20 w-auto object-contain transition-transform duration-400 group-hover:scale-[1.04]"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between mono-meta text-xs">
                  <span style={{ color: 'var(--card-accent)' }}>{project.index}</span>
                  <span className="text-ink-muted">{project.year}</span>
                </div>
                <h3 className="font-serif text-3xl text-ink-primary transition-transform duration-300 group-hover:translate-x-1">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <span
                  className="px-3 py-1 rounded-[8px] border mono-meta text-[11px]"
                  style={{
                    borderColor: 'color-mix(in oklch, var(--card-accent) 32%, transparent)',
                    color: 'var(--card-accent)',
                    backgroundColor: 'color-mix(in oklch, var(--card-accent) 10%, transparent)',
                  }}
                >
                  {project.metricPills[0]}
                </span>

                <button
                  type="button"
                  onClick={(e) => onSelect(project, e.currentTarget)}
                  style={{ color: 'var(--card-accent)' }}
                  className="min-h-[44px] inline-flex items-center gap-1.5 mono-meta text-xs uppercase tracking-[0.12em] font-semibold cursor-pointer"
                >
                  <span>Inspect case</span>
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </button>
              </div>
            </GlassPanel>
          </m.div>
        );
      })}
    </div>
  );
}

