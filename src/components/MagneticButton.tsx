'use client';

import {
  useRef,
  useEffect,
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
  const animateFnRef = useRef<
    ((el: HTMLElement, keyframes: { x: number; y: number }, options: Record<string, unknown>) => void) | null
  >(null);
  const canMagnetRef = useRef(false);

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

    return () => {
      active = false;
    };
  }, []);

  const strength = props.strength ?? 0.28;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    const animateFn = animateFnRef.current;
    if (!canMagnetRef.current || !el || !animateFn) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    animateFn(el, { x, y }, { type: 'spring', stiffness: 320, damping: 24, mass: 0.4 });
  };

  const handleMouseLeave = () => {
    const el = wrapperRef.current;
    const animateFn = animateFnRef.current;
    if (!el || !animateFn) return;
    animateFn(el, { x: 0, y: 0 }, { type: 'spring', stiffness: 280, damping: 22 });
  };

  if (props.as === 'a' || 'href' in props) {
    const { children, className = '', ...rest } = props as AnchorMagneticProps;
    const anchorProps = { ...rest };
    delete anchorProps.strength;
    delete anchorProps.as;

    return (
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-flex will-change-transform"
      >
        <a className={className} {...anchorProps}>
          {children}
        </a>
      </div>
    );
  }

  const { children, className = '', ...rest } = props as ButtonMagneticProps;
  const buttonProps = { ...rest };
  delete buttonProps.strength;
  delete buttonProps.as;

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex will-change-transform"
    >
      <button className={className} {...buttonProps}>
        {children}
      </button>
    </div>
  );
}
