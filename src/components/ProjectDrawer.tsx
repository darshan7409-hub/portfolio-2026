'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { ProjectCaseStudy } from '@/data/portfolio';

interface ProjectDrawerProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getDrawerVars(project: ProjectCaseStudy): CSSProperties {
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

export default function ProjectDrawer({ project, onClose, triggerRef }: ProjectDrawerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const triggerEl = triggerRef.current;
    document.body.style.overflow = 'hidden';

    const frameId = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter((el) => el.offsetParent !== null);

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first || !dialogRef.current.contains(document.activeElement)) {
            e.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last || !dialogRef.current.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      triggerEl?.focus();
    };
  }, [project, onClose, triggerRef]);

  if (!project || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[90] flex justify-end bg-canvas/80 nav-blur"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`drawer-title-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          ...getDrawerVars(project),
          backgroundColor: 'var(--card-bg)',
          color: 'var(--card-ink)',
          borderColor: 'var(--card-divider)',
          boxShadow: 'var(--shadow-elevated)',
        }}
        className="project-themed relative w-screen sm:w-full sm:max-w-2xl h-full overflow-y-auto sm:border-l p-6 sm:p-10 flex flex-col gap-7"
      >
        <div
          className="flex items-start justify-between gap-4 pb-6 border-b"
          style={{ borderColor: 'var(--card-divider)' }}
        >
          <div className="space-y-1.5">
            <p
              className="mono-meta text-xs uppercase tracking-[0.18em]"
              style={{ color: 'var(--card-accent)' }}
            >
              {project.index} · {project.domain}
            </p>
            <h2
              id={`drawer-title-${project.id}`}
              className="heading-sub text-3xl sm:text-4xl font-bold"
            >
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={`Close ${project.title} case study`}
            style={{
              backgroundColor: 'var(--card-surface)',
              borderColor: 'var(--card-divider)',
              color: 'var(--card-ink)',
            }}
            className="shrink-0 min-h-[44px] min-w-[44px] rounded-[8px] border inline-flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div
          className="rounded-[16px] p-6 sm:p-8 flex items-center justify-center border"
          style={{
            backgroundColor: 'var(--card-plate)',
            borderColor: 'var(--card-divider)',
          }}
        >
          <Image
            src={project.imageSrc}
            alt={`${project.title} case study brand visual`}
            width={project.imageWidth}
            height={project.imageHeight}
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            sizes="(max-width: 640px) 86vw, 480px"
            className="max-h-28 w-auto object-contain"
          />
        </div>

        <dl
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y mono-meta text-xs"
          style={{ borderColor: 'var(--card-divider)' }}
        >
          <div>
            <dt style={{ color: 'var(--card-muted)' }}>ROLE</dt>
            <dd className="mt-1 font-semibold">{project.role}</dd>
          </div>
          <div>
            <dt style={{ color: 'var(--card-muted)' }}>YEAR</dt>
            <dd className="mt-1 font-semibold">{project.year}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt style={{ color: 'var(--card-muted)' }}>DOMAIN</dt>
            <dd className="mt-1 font-semibold">{project.domain}</dd>
          </div>
        </dl>

        <div className="space-y-3">
          <h3 className="mono-meta text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--card-accent)' }}>
            Case Study Overview
          </h3>
          <p className="text-base leading-relaxed" style={{ color: 'var(--card-muted)' }}>
            {project.longDescription}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="mono-meta text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--card-accent)' }}>
            Key QA Deliverables
          </h3>
          <ul className="space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed">
                <CheckCircle2
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 mt-1"
                  style={{ color: 'var(--card-accent)' }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="mono-meta text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--card-accent)' }}>
            Verification Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: 'var(--card-surface)',
                  borderColor: 'var(--card-divider)',
                  color: 'var(--card-ink)',
                }}
                className="px-3 py-1.5 rounded-[8px] border mono-meta text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--card-accent)',
                color: 'var(--card-accent-ink)',
              }}
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] mono-meta text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Visit Live Product <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            style={{
              backgroundColor: 'var(--card-surface)',
              borderColor: 'var(--card-divider)',
              color: 'var(--card-ink)',
            }}
            className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] border mono-meta text-xs uppercase tracking-wider hover:opacity-85 transition-opacity cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
