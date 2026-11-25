'use client';

import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

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

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 20 });

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
    if (!canHoverRef.current || !ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
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
      rotateXRaw.set(-ny * 5.5);
      rotateYRaw.set(nx * 5.5);
    }
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    if (tilt) {
      rotateXRaw.set(0);
      rotateYRaw.set(0);
    }
  };

  const combinedClass = `glass-panel ${interactive ? 'glass-interactive' : ''} ${tilt ? 'glass-tilt' : ''} ${className}`.trim();

  if (tilt) {
    const MotionTag = as === 'article' ? m.article : m.div;
    return (
      <div style={{ perspective: '1000px' }}>
        <MotionTag
          ref={ref}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ ...style, rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
          className={combinedClass}
        >
          {children}
        </MotionTag>
      </div>
    );
  }

  const Tag = as;
  return (
    <Tag
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={combinedClass}
    >
      {children}
    </Tag>
  );
}

