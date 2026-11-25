'use client';

import {
  useRef,
  useEffect,
  useState,
  type ReactNode,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
} from 'react';

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
  const animateFnRef = useRef<
    ((el: HTMLElement, keyframes: { x: number; y: number }, options: Record<string, unknown>) => void) | null
  >(null);
  const canMagnetRef = useRef(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    canMagnetRef.current = true;
    let active = true;

    import('framer-motion').then(({ animate }) => {
      if (active) {
        animateFnRef.current = animate as unknown as typeof animateFnRef.current;
      }
    });

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const invalidateRect = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        rectRef.current = null;
      }, 150);
    };

    const observer =
      typeof ResizeObserver !== 'undefined' && wrapperRef.current
        ? new ResizeObserver(invalidateRect)
        : null;

    if (observer && wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      active = false;
      if (resizeTimer) clearTimeout(resizeTimer);
      observer?.disconnect();
    };
  }, []);

  const strength = props.strength ?? 0.25;

  const handleMouseEnter = () => {
    if (!canMagnetRef.current || !wrapperRef.current) return;
    rectRef.current = wrapperRef.current.getBoundingClientRect();
    setIsActive(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    const animateFn = animateFnRef.current;
    const rect = rectRef.current;
    if (!canMagnetRef.current || !el || !animateFn || !rect) return;
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    animateFn(el, { x, y }, { type: 'spring', stiffness: 320, damping: 24, mass: 0.4 });
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    rectRef.current = null;
    const el = wrapperRef.current;
    const animateFn = animateFnRef.current;
    if (!el || !animateFn) return;
    animateFn(el, { x: 0, y: 0 }, { type: 'spring', stiffness: 280, damping: 22 });
  };

  const innerElement =
    props.as === 'a' || 'href' in props
      ? (() => {
          const { children, className = '', ...rest } = props as AnchorMagneticProps;
          const anchorProps = { ...rest };
          delete anchorProps.strength;
          delete anchorProps.as;
          return (
            <a className={className} {...anchorProps}>
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
            <button className={className} {...buttonProps}>
              {children}
            </button>
          );
        })();

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isActive ? { transform: 'translateZ(0)', willChange: 'transform' } : undefined}
      className="inline-flex"
    >
      {innerElement}
    </div>
  );
}
