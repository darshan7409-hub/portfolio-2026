import type { ReactNode } from 'react';
import { TypeInEyebrow } from './MotionPrimitives';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

export default function SectionHeader({ eyebrow, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 ${className}`}>
      <div className="space-y-3">
        <TypeInEyebrow text={eyebrow} />
        <h2 className="section-display font-normal text-ink-primary">{title}</h2>
      </div>
      {description && (
        <p className="text-sm sm:text-base text-ink-secondary max-w-md leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
