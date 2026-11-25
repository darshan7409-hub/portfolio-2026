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
  const rectRef = useRef<DOMRect | null>(null);
  const canMagnetRef = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    canMagnetRef.current = finePointer && !reducedMotion;
  }, []);

  const strength = props.strength ?? 0.25;

  const handleMouseEnter = () => {
    const el = wrapperRef.current;
    if (!canMagnetRef.current || !el) return;
    rectRef.current = el.getBoundingClientRect();
    el.style.transition = 'transform 110ms cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!canMagnetRef.current || !el) return;
    if (!rectRef.current) {
      rectRef.current = el.getBoundingClientRect();
    }
    const rect = rectRef.current;
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
    el.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`;
  };

  const handleMouseLeave = () => {
    const el = wrapperRef.current;
    rectRef.current = null;
    if (el) {
      el.style.transition = 'transform 340ms cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = '';
    }
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
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      {innerElement}
    </div>
  );
}
