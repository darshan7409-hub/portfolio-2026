'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import {
  LazyMotion,
  m,
  useScroll,
  useTransform,
} from 'framer-motion';

const loadFeatures = () => import('framer-motion').then((mod) => mod.domAnimation);

type RevealCallback = (revealed: boolean) => void;
const revealCallbacks = new WeakMap<Element, RevealCallback>();
let sharedObserver: IntersectionObserver | null = null;

function observeOnce(el: Element, cb: RevealCallback) {
  revealCallbacks.set(el, cb);
  if (!sharedObserver && typeof IntersectionObserver !== 'undefined') {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const fn = revealCallbacks.get(entry.target);
            if (fn) {
              fn(true);
              revealCallbacks.delete(entry.target);
            }
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 }
    );
  }
  sharedObserver?.observe(el);
  return () => {
    revealCallbacks.delete(el);
    sharedObserver?.unobserve(el);
  };
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.setAttribute('data-revealed', 'true');
      return;
    }
    return observeOnce(el, () => {
      el.setAttribute('data-revealed', 'true');
    });
  }, []);

  return (
    <div
      ref={ref}
      data-revealed="false"
      style={delay ? { transitionDelay: `${Math.round(delay * 1000)}ms` } : undefined}
      className={`reveal-section ${className}`}
    >
      {children}
    </div>
  );
}

export function TypeInEyebrow({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.setAttribute('data-revealed', 'true');
      return;
    }
    return observeOnce(el, () => {
      el.setAttribute('data-revealed', 'true');
    });
  }, []);

  return (
    <p
      ref={ref}
      data-revealed="false"
      className={`eyebrow-reveal mono-meta text-xs uppercase tracking-[0.18em] text-accent ${className}`}
    >
      {text}
    </p>
  );
}

export function StatCounter({
  end,
  suffix = '',
  padZero = false,
  label,
}: {
  end: number;
  suffix?: string;
  padZero?: boolean;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const finalFormatted = `${padZero && end < 10 ? `0${end}` : end}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !numRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    const unobserve = observeOnce(el, () => {
      const duration = 1100;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const rounded = Math.round(end * eased);
        const formatted = padZero && rounded < 10 ? `0${rounded}` : `${rounded}`;
        if (numRef.current) {
          numRef.current.textContent = `${formatted}${suffix}`;
        }
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    });

    return () => {
      unobserve();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [end, padZero, suffix]);

  return (
    <div ref={ref} className="glass-panel px-4 py-3.5 rounded-[14px]">
      <dt className="mono-meta text-[10px] uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </dt>
      <dd className="font-serif tabular-nums text-3xl sm:text-4xl text-ink-primary mt-1 leading-none">
        <span className="relative inline-block">
          <span className="invisible" aria-hidden="true">
            {finalFormatted}
          </span>
          <span className="sr-only">{finalFormatted}</span>
          <span ref={numRef} aria-hidden="true" className="absolute inset-0">
            {finalFormatted}
          </span>
        </span>
      </dd>
    </div>
  );
}

export function HeroTextReveal({
  lines,
  highlightWord,
}: {
  lines: string[];
  highlightWord: string;
}) {
  let wordIndex = 0;

  return (
    <h1 className="hero-display text-ink-primary">
      {lines.map((line, lineIdx) => (
        <span key={line} className="block">
          {line.split(' ').map((word, wIdx) => {
            const isHighlighted = word.toLowerCase().includes(highlightWord.toLowerCase());
            const delayMs = Math.min(320, wordIndex * 36);
            wordIndex++;
            return (
              <span
                key={`${lineIdx}-${wIdx}-${word}`}
                style={{ animationDelay: `${delayMs}ms` }}
                className={`hero-word-in inline-block whitespace-nowrap mr-[0.26em] ${
                  isHighlighted ? 'italic text-accent' : ''
                }`}
              >
                {word}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

function DesktopParallaxInner({
  targetRef,
  range,
  children,
}: {
  targetRef: React.RefObject<HTMLDivElement | null>;
  range: [number, number];
  children: ReactNode;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <LazyMotion features={loadFeatures} strict>
      <m.div style={{ y, position: 'relative' }}>{children}</m.div>
    </LazyMotion>
  );
}

export function ParallaxFrame({
  children,
  range = [0, 40],
  className = '',
}: {
  children: ReactNode;
  range?: [number, number];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`} style={{ position: 'relative' }}>
      {isDesktop ? (
        <DesktopParallaxInner targetRef={ref} range={range}>
          {children}
        </DesktopParallaxInner>
      ) : (
        <div style={{ position: 'relative' }}>{children}</div>
      )}
    </div>
  );
}
