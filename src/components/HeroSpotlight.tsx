'use client';

import { useRef, useEffect } from 'react';

export default function HeroSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const canSpotRef = useRef(false);

  useEffect(() => {
    const hoverFine =
      window.matchMedia('(hover: hover)').matches &&
      window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hoverFine || reduced) return;

    canSpotRef.current = true;
    const parent = spotRef.current?.parentElement;
    if (!parent) return;

    const onEnter = () => {
      rectRef.current = parent.getBoundingClientRect();
      if (spotRef.current) spotRef.current.style.opacity = '1';
    };
    const onMove = (e: MouseEvent) => {
      const rect = rectRef.current;
      const spot = spotRef.current;
      if (!rect || !spot) return;
      spot.style.background = `radial-gradient(400px circle at ${e.clientX - rect.left}px ${
        e.clientY - rect.top
      }px, oklch(0.74 0.14 68 / 0.045), transparent 70%)`;
    };
    const onLeave = () => {
      rectRef.current = null;
      if (spotRef.current) spotRef.current.style.opacity = '0';
    };

    let timer: ReturnType<typeof setTimeout> | null = null;
    const observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
              rectRef.current = null;
            }, 150);
          })
        : null;
    observer?.observe(parent);

    parent.addEventListener('mouseenter', onEnter, { passive: true });
    parent.addEventListener('mousemove', onMove, { passive: true });
    parent.addEventListener('mouseleave', onLeave, { passive: true });

    return () => {
      if (timer) clearTimeout(timer);
      observer?.disconnect();
      parent.removeEventListener('mouseenter', onEnter);
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
    />
  );
}

