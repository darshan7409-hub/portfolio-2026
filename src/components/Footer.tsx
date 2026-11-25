import { ArrowUp } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-1 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-7xl mx-auto safe-x py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="mono-meta text-xs uppercase tracking-[0.16em] text-ink-primary">
              {PROFILE.name} — {PROFILE.role}
            </p>
            <p className="mono-meta text-xs text-ink-muted">
              © {year} · Built with Next.js, OKLCH Design Tokens &amp; Tailwind CSS v4.
            </p>
          </div>
          <SocialLinks variant="footer" />
        </div>

        <a
          href="#top"
          className="min-h-[44px] min-w-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-border bg-surface-2 mono-meta text-xs uppercase tracking-wider text-ink-primary hover:border-border-strong hover:text-accent-text transition-colors shrink-0"
        >
          <span>Top</span>
          <ArrowUp size={13} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
