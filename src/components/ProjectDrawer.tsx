'use client';
'use client';

import { useEffect, useRef, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useSmoothScroll } from './SmoothScrollProvider';
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
  const storedScrollYRef = useRef(0);
  const { setScrollLocked } = useSmoothScroll();

  useEffect(() => {
    if (!project) return;

    const scrollY = window.scrollY;
    storedScrollYRef.current = scrollY;

    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPaddingRight = document.body.style.paddingRight;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.documentElement.style.overflow = 'hidden';
    setScrollLocked(true);

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
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.paddingRight = prevBodyPaddingRight;
      document.body.style.position = prevBodyPosition || 'static';
      document.body.style.top = prevBodyTop || '0';
      document.body.style.width = prevBodyWidth;
      document.documentElement.style.overflow = prevHtmlOverflow;
      setScrollLocked(false);
      window.scrollTo(0, storedScrollYRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      triggerRef.current?.focus();
    };
  }, [project, onClose, triggerRef, setScrollLocked]);

  if (!project || typeof document === 'undefined') return null;

  const accentVars = {
    '--ca-dark': project.accent.dark,
    '--ca-light': project.accent.light,
  } as CSSProperties;

  return createPortal(
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[90] flex justify-end bg-canvas/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-labelledby={`drawer-title-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          ...accentVars,
          backgroundColor: 'var(--token-surface-2)',
          color: 'var(--token-ink-primary)',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
        }}
        className="card-accent-scope glass-panel !rounded-none sm:!rounded-l-[24px] relative w-screen sm:w-full sm:max-w-2xl h-full !overflow-y-auto overscroll-contain p-6 sm:p-10 flex flex-col gap-7"
      >
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-border">
          <div className="space-y-1.5">
            <p
              className="mono-meta text-xs uppercase tracking-[0.18em]"
              style={{ color: 'var(--card-accent)' }}
            >
              {project.index} · {project.domain}
            </p>
            <h2
              id={`drawer-title-${project.id}`}
              className="font-serif text-3xl sm:text-4xl text-ink-primary"
            >
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={`Close ${project.title} case study`}
            className="glass-panel shrink-0 min-h-[44px] min-w-[44px] !rounded-[12px] inline-flex items-center justify-center text-ink-primary hover:text-accent cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div
          className="rounded-[16px] p-6 sm:p-8 flex items-center justify-center border border-border"
          style={{
            backgroundColor:
              project.plateMode === 'dark' ? 'oklch(0.15 0.006 60)' : 'oklch(0.96 0.004 60)',
          }}
        >
          {project.logoNeedsManual ? (
            <div
              aria-label={`${project.title} manual logo pending`}
              className="w-24 h-24 rounded-xl border border-border-strong bg-surface-2 flex items-center justify-center mono-meta text-[10px] uppercase tracking-wider text-ink-muted text-center p-2"
            >
              Logo Pending
            </div>
          ) : (
            <Image
              src={project.imageSrc}
              alt={`${project.title} — Verified Quality Assurance Case Study`}
              title={`${project.title} — QA Case Study`}
              width={project.imageWidth}
              height={project.imageHeight}
              priority
              loading="eager"
              unoptimized
              className="max-h-28 w-auto object-contain"
            />
          )}
        </div>

        <dl className="py-4 border-y border-border mono-meta text-xs">
          <div>
            <dt className="text-ink-muted">ROLE SCOPE</dt>
            <dd className="mt-1 text-ink-primary">{project.roleScope}</dd>
          </div>
        </dl>

        <div className="space-y-3">
          <h3 className="mono-meta text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--card-accent)' }}>
            Project Overview
          </h3>
          <p className="text-base italic text-ink-secondary leading-relaxed">
            {project.problemStatement}
          </p>
          <p className="text-base text-ink-secondary leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="mono-meta text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--card-accent)' }}>
            Impact Metrics
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.metricPills.map((metric) => (
              <span
                key={metric}
                className="px-3 py-1.5 rounded-[10px] border mono-meta text-xs"
                style={{
                  borderColor: 'color-mix(in oklch, var(--card-accent) 35%, transparent)',
                  color: 'var(--card-accent)',
                  backgroundColor: 'color-mix(in oklch, var(--card-accent) 10%, transparent)',
                }}
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="mono-meta text-xs uppercase tracking-[0.18em]" style={{ color: 'var(--card-accent)' }}>
            Key QA Deliverables
          </h3>
          <ul className="space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-ink-secondary leading-relaxed">
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

        <div className="mt-auto pt-4 flex flex-wrap items-center gap-3">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-accent text-accent-ink mono-meta text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors"
            >
              Visit Live Product <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="glass-panel min-h-[44px] !rounded-[12px] inline-flex items-center gap-2 px-5 py-2.5 mono-meta text-xs uppercase tracking-wider text-ink-primary hover:text-accent cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
