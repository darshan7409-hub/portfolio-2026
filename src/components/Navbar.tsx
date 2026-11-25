'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';
import { PROFILE } from '@/data/portfolio';

const NavbarScrollProgress = dynamic(
  () => import('./NavbarMotionExtras').then((mod) => mod.NavbarScrollProgress),
  { ssr: false }
);

const NavActivePill = dynamic(
  () => import('./NavbarMotionExtras').then((mod) => mod.NavActivePill),
  {
    ssr: false,
    loading: () => (
      <span className="absolute inset-x-1 inset-y-1.5 rounded-[8px] bg-surface-2 border border-border -z-10" />
    ),
  }
);

const MobileNavDrawer = dynamic(() => import('./MobileNavDrawer'), {
  ssr: false,
});

const navLinks = [
  { id: 'projects', label: 'Work', href: '#projects' },
  { id: 'profile', label: 'Profile', href: '#profile' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'stack', label: 'Stack', href: '#stack' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const observedSectionIds = ['top', 'projects', 'profile', 'experience', 'stack', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('top');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 768) {
          setMobileOpen(false);
        }
      }, 150);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    const elements = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-28% 0px -52% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 pointer-events-none pt-[env(safe-area-inset-top)]">
      <NavbarScrollProgress />

      <div
        className={`pointer-events-auto transition-[height,background-color,border-color] duration-200 border-b ${
          scrolled
            ? 'h-14 bg-surface-1/90 nav-blur border-border'
            : 'h-16 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full safe-x flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            className="min-h-[44px] min-w-[44px] inline-flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.04]"
          >
            <span
              aria-hidden="true"
              className="relative w-8 h-8 rounded-[8px] bg-accent text-accent-ink mono-meta font-semibold text-xs inline-flex items-center justify-center"
            >
              {PROFILE.initials}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--token-accent)]" />
            </span>
            <span className="mono-meta text-xs tracking-[0.14em] uppercase text-ink-primary">
              {PROFILE.name}
              <span className="sr-only"> — Back to top</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative min-h-[44px] px-3.5 inline-flex items-center mono-meta text-xs uppercase tracking-[0.12em] transition-colors ${
                    isActive ? 'text-ink-primary' : 'text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  {isActive && <NavActivePill />}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Controls */}
          <div className="hidden md:flex items-center gap-2">
            <SocialLinks variant="header" compactIds={['github', 'linkedin', 'whatsapp']} />
            <ThemeToggle />
            <MagneticButton
              as="a"
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-1.5 px-4 rounded-[8px] border border-border bg-surface-1 hover:border-border-strong text-ink-primary mono-meta text-xs uppercase tracking-[0.12em] transition-colors"
            >
              <span>CV</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </MagneticButton>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-[8px] border border-border bg-surface-1 text-ink-primary hover:border-border-strong transition-colors cursor-pointer"
            >
              {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <MobileNavDrawer
        open={mobileOpen}
        links={navLinks}
        activeId={activeId}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
