'use client';

import { useState, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';
import type { ProjectCaseStudy } from '@/data/portfolio';

const MoreWorkGrid = dynamic(() => import('./MoreWorkGrid'), { ssr: false });
const ProjectDrawer = dynamic(() => import('./ProjectDrawer'), { ssr: false });

export default function MoreWorkSection({ projects }: { projects: ProjectCaseStudy[] }) {
  const [expanded, setExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const handleClose = useCallback(() => setActiveProject(null), []);

  return (
    <section id="more-work" className="py-24 sm:py-32 safe-x max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="05 // Archive"
        title="More QA Engagements"
        description="Additional production web and mobile platforms validated across live events, retail audio, AI safety, and scholarly archives."
      />

      <div className="mb-8">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="glass-panel glass-interactive min-h-[44px] !rounded-[12px] px-6 py-3 inline-flex items-center gap-2.5 mono-meta text-xs sm:text-sm uppercase tracking-[0.14em] text-ink-primary hover:text-accent cursor-pointer"
        >
          <span>{expanded ? 'Hide additional case studies' : `See ${projects.length} more case studies`}</span>
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {expanded && (
        <MoreWorkGrid
          projects={projects}
          onSelect={(project, btn) => {
            triggerRef.current = btn;
            setActiveProject(project);
          }}
        />
      )}

      <ProjectDrawer
        project={activeProject}
        onClose={handleClose}
        triggerRef={triggerRef}
      />
    </section>
  );
}
