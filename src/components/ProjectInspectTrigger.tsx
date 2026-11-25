'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectCaseStudy } from '@/data/portfolio';

const ProjectDrawer = dynamic(() => import('./ProjectDrawer'), {
  ssr: false,
});

export default function ProjectInspectTrigger({ project }: { project: ProjectCaseStudy }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        style={{
          backgroundColor: 'var(--card-accent)',
          color: 'var(--card-accent-ink)',
        }}
        className="min-h-[44px] min-w-[44px] shrink-0 self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] mono-meta text-xs font-semibold uppercase tracking-[0.12em] hover:opacity-90 transition-opacity cursor-pointer"
      >
        <span>Inspect Case</span>
        <ArrowUpRight size={15} aria-hidden="true" />
      </button>

      {open && (
        <ProjectDrawer
          project={project}
          onClose={() => setOpen(false)}
          triggerRef={triggerRef}
        />
      )}
    </>
  );
}
