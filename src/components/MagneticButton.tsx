'use client';

import {
  useRef,
  useEffect,
  useState,
  type ReactNode,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
} from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

type BaseProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

type AnchorMagneticProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: 'a';
    href: string;
  };

type ButtonMagneticProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

export type MagneticButtonProps = AnchorMagneticProps | ButtonMagneticProps;

export default function MagneticButton(props: MagneticButtonProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const canMagnetRef = useRef(false);
  const [hovered, setHovered] = useState(false);

  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);
  const x = useSpring(xRaw, { stiffness: 165, damping: 16 });
  const y = useSpring(yRaw, { stiffness: 165, damping: 16 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    canMagnetRef.current = finePointer && !reducedMotion;

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const invalidate = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        rectRef.current = null;
      }, 150);
    };

    const observer =
      typeof ResizeObserver !== 'undefined' && wrapperRef.current
        ? new ResizeObserver(invalidate)
        : null;
    if (observer && wrapperRef.current) observer.observe(wrapperRef.current);

    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      observer?.disconnect();
    };
  }, []);

  const strength = props.strength ?? 0.25;

  const handleMouseEnter = () => {
    if (!canMagnetRef.current || !wrapperRef.current) return;
    rectRef.current = wrapperRef.current.getBoundingClientRect();
    setHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current;
    if (!canMagnetRef.current || !rect) return;
    xRaw.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    yRaw.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rectRef.current = null;
    xRaw.set(0);
    yRaw.set(0);
  };

  const innerElement =
    props.as === 'a' || 'href' in props
      ? (() => {
          const { children, className = '', ...rest } = props as AnchorMagneticProps;
          const anchorProps = { ...rest };
          delete anchorProps.strength;
          delete anchorProps.as;
          return (
            <a className={`group ${className}`} {...anchorProps}>
              {children}
            </a>
          );
        })()
      : (() => {
          const { children, className = '', ...rest } = props as ButtonMagneticProps;
          const buttonProps = { ...rest };
          delete buttonProps.strength;
          delete buttonProps.as;
          return (
            <button className={`group ${className}`} {...buttonProps}>
              {children}
            </button>
          );
        })();

  return (
    <m.div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        hovered
          ? { x, y, transform: 'translateZ(0)', willChange: 'transform' }
          : { x, y }
      }
      className="inline-flex"
    >
      {innerElement}
    </m.div>
  );
}
