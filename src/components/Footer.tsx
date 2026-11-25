'use client';

import { ArrowUp } from 'lucide-react';
import BrandMark from './BrandMark';
import MagneticButton from './MagneticButton';
import SocialLinks from './SocialLinks';
import { useSmoothScroll } from './SmoothScrollProvider';
import { PROFILE } from '@/data/portfolio';

const quickNav = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { scrollToTop } = useSmoothScroll();

  return (
    <footer className="relative border-t border-border bg-surface-1/70 overflow-hidden pb-[env(safe-area-inset-bottom)]">
      {/* Large subtle BrandMark watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -bottom-10 opacity-[0.05] select-none"
      >
        <BrandMark
          size={200}
          color="var(--token-accent)"
          notchColor="var(--token-ink-primary)"
        />
      </div>

      <div className="max-w-7xl mx-auto safe-x py-14 relative z-10 space-y-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <BrandMark
                size={36}
                color="var(--token-accent)"
                notchColor="var(--token-ink-primary)"
              />
              <span className="mono-meta font-bold text-[14px] tracking-[0.15em] uppercase text-ink-primary">
                {PROFILE.name}
              </span>
            </div>

            <SocialLinks variant="footer" />
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <nav aria-label="Footer quick navigation" className="flex flex-wrap items-center gap-5">
              {quickNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="link-draw min-h-[44px] inline-flex items-center mono-meta text-xs uppercase tracking-[0.14em] text-ink-secondary hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <MagneticButton
              as="button"
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="glass-panel glass-interactive min-h-[44px] min-w-[44px] !rounded-[12px] inline-flex items-center gap-2 px-4 py-2 mono-meta text-xs uppercase tracking-wider text-ink-primary hover:text-accent cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={14} aria-hidden="true" />
            </MagneticButton>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mono-meta text-xs text-ink-muted">
          <p>
            © {year} {PROFILE.name} — {PROFILE.role}
          </p>
          <p>Built with Next.js, OKLCH Design Tokens &amp; Lenis.</p>
        </div>
      </div>
    </footer>
  );
}
