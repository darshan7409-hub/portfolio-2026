import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: ReactNode;
}

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 scroll-reveal">
      <div className="space-y-3">
        <p className="mono-meta text-xs uppercase tracking-[0.2em] text-accent-text">
          {eyebrow}
        </p>
        <h2 className="section-display font-bold uppercase text-ink-primary">{title}</h2>
      </div>
      <p className="text-sm sm:text-base text-ink-secondary max-w-md leading-relaxed">
        {description}
      </p>
    </div>
  );
}

