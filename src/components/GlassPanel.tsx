'use client';

import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  interactive?: boolean;
  tilt?: boolean;
  as?: 'div' | 'article';
}

export default function GlassPanel({
  children,
  className = '',
  style,
  interactive = true,
  tilt = false,
  as = 'div',
}: GlassPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const canHoverRef = useRef(false);

  useEffect(() => {
    const hoverFine =
      window.matchMedia('(hover: hover)').matches &&
      window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    canHoverRef.current = hoverFine && !reduced;

    let timer: ReturnType<typeof setTimeout> | null = null;
    const invalidate = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        rectRef.current = null;
      }, 150);
    };

    const observer =
      typeof ResizeObserver !== 'undefined' && ref.current
        ? new ResizeObserver(invalidate)
        : null;
    if (observer && ref.current) observer.observe(ref.current);

    return () => {
      if (timer) clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  const handleMouseEnter = () => {
    const el = ref.current;
    if (!canHoverRef.current || !el) return;
    rectRef.current = el.getBoundingClientRect();
    if (tilt) {
      el.style.transition = 'border-color 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1)';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!canHoverRef.current || !el) return;
    if (!rectRef.current) {
      rectRef.current = el.getBoundingClientRect();
    }
    const rect = rectRef.current;

    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${px}px`);
    el.style.setProperty('--mouse-y', `${py}px`);

    if (tilt) {
      const nx = (px / rect.width - 0.5) * 2;
      const ny = (py / rect.height - 0.5) * 2;
      const rx = (-ny * 5.5).toFixed(3);
      const ry = (nx * 5.5).toFixed(3);
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    rectRef.current = null;
    if (tilt && el) {
      el.style.transition =
        'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = '';
    }
  };

  const combinedClass = `glass-panel ${interactive ? 'glass-interactive' : ''} ${tilt ? 'glass-tilt' : ''} ${className}`.trim();
  const Tag = as;

  const node = (
    <Tag
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { ...style, transformStyle: 'preserve-3d' } : style}
      className={combinedClass}
    >
      {children}
    </Tag>
  );

  if (tilt) {
    return <div style={{ perspective: '1000px' }}>{node}</div>;
  }

  return node;
}
