'use client';

import { useEffect, useRef } from 'react';
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

export default function ProjectDrawer({ project, onClose, triggerRef }: ProjectDrawerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const triggerEl = triggerRef.current;
    document.body.style.overflow = 'hidden';

    // Focus the close button on mount
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
      className="fixed inset-0 z-[90] flex justify-end bg-canvas/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`drawer-title-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: project.theme.bg,
          color: project.theme.ink,
          borderColor: project.theme.divider,
        }}
        className="relative w-full max-w-2xl h-full overflow-y-auto border-l p-6 sm:p-10 shadow-2xl flex flex-col gap-7"
      >
        <div
          className="flex items-start justify-between gap-4 pb-6 border-b"
          style={{ borderColor: project.theme.divider }}
        >
          <div className="space-y-1.5">
            <p
              className="font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: project.theme.accent }}
            >
              {project.index} · {project.domain}
            </p>
            <h2
              id={`drawer-title-${project.id}`}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
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
              backgroundColor: project.theme.surface,
              borderColor: project.theme.divider,
              color: project.theme.ink,
            }}
            className="shrink-0 w-10 h-10 rounded-full border inline-flex items-center justify-center hover:opacity-85 transition-opacity cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div
          className="rounded-2xl p-6 sm:p-8 flex items-center justify-center border"
          style={{
            backgroundColor: project.theme.plateBg,
            borderColor: project.theme.divider,
          }}
        >
          <Image
            src={project.imageSrc}
            alt={`${project.title} brand visual`}
            width={project.imageWidth}
            height={project.imageHeight}
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            sizes="(max-width: 640px) 82vw, 480px"
            className="max-h-28 w-auto object-contain"
          />
        </div>

        <dl
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y font-mono text-xs"
          style={{ borderColor: project.theme.divider }}
        >
          <div>
            <dt style={{ color: project.theme.muted }}>ROLE</dt>
            <dd className="mt-1 font-semibold">{project.role}</dd>
          </div>
          <div>
            <dt style={{ color: project.theme.muted }}>YEAR</dt>
            <dd className="mt-1 font-semibold">{project.year}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt style={{ color: project.theme.muted }}>DOMAIN</dt>
            <dd className="mt-1 font-semibold">{project.domain}</dd>
          </div>
        </dl>

        <div className="space-y-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: project.theme.accent }}>
            Case Study Overview
          </h3>
          <p className="text-base leading-relaxed" style={{ color: project.theme.muted }}>
            {project.longDescription}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: project.theme.accent }}>
            Key QA Deliverables
          </h3>
          <ul className="space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed">
                <CheckCircle2
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 mt-1"
                  style={{ color: project.theme.accent }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: project.theme.accent }}>
            Verification Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: project.theme.surface,
                  borderColor: project.theme.divider,
                  color: project.theme.ink,
                }}
                className="px-3 py-1.5 rounded-full border font-mono text-xs"
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
                backgroundColor: project.theme.accent,
                color: project.theme.accentInk,
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Visit Live Product <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            style={{
              backgroundColor: project.theme.surface,
              borderColor: project.theme.divider,
              color: project.theme.ink,
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border font-mono text-xs uppercase tracking-wider hover:opacity-85 transition-opacity cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

