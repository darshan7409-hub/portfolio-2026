'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';
import MobileNavDrawer from './MobileNavDrawer';
import { NavbarScrollProgress, NavActivePill } from './NavbarMotionExtras';
import { PROFILE } from '@/data/portfolio';

const navLinks = [
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const observedSectionIds = ['top', 'work', 'experience', 'skills', 'about', 'contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('top');
  const surfaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = surfaceRef.current;
      if (!el) return;
      const isScrolled = window.scrollY > 48;
      el.classList.toggle('h-14', isScrolled);
      el.classList.toggle('nav-surface-scrolled', isScrolled);
      el.classList.toggle('border-glass-border', isScrolled);
      el.classList.toggle('h-16', !isScrolled);
      el.classList.toggle('nav-surface-top', !isScrolled);
      el.classList.toggle('border-transparent', !isScrolled);
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
    if (window.innerWidth < 768) return;

    const elements = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    let cachedPositions: { id: string; top: number }[] = [];
    const recomputePositions = () => {
      cachedPositions = elements.map((el) => ({ id: el.id, top: el.offsetTop }));
    };
    recomputePositions();

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            if (resizeTimer) clearTimeout(resizeTimer);
            resizeTimer = setTimeout(recomputePositions, 150);
          })
        : null;
    resizeObserver?.observe(document.body);

    const updateActiveFromScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = cachedPositions[0]?.id || 'top';
      for (const sec of cachedPositions) {
        if (sec.top <= marker) {
          current = sec.id;
        }
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    updateActiveFromScroll();
    window.addEventListener('scroll', updateActiveFromScroll, { passive: true });
    return () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeObserver?.disconnect();
      window.removeEventListener('scroll', updateActiveFromScroll);
    };
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
        ref={surfaceRef}
        className="pointer-events-auto transition-[height,background-color,border-color,backdrop-filter] duration-300 border-b h-16 nav-surface-top border-transparent"
      >
        <div className="max-w-7xl mx-auto h-full safe-x flex items-center justify-between gap-4">
          {/* Brand Logo + Wordmark */}
          <a
            href="#top"
            className="min-h-[44px] min-w-[44px] inline-flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.04]"
          >
            <BrandMark
              size={38}
              color="var(--token-accent)"
              notchColor="var(--token-ink-primary)"
              className="shrink-0"
            />
            <span className="mono-meta font-bold text-[14px] tracking-[0.15em] uppercase text-ink-primary whitespace-nowrap">
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
                  onClick={() => setActiveId(item.id)}
                  data-active={isActive ? 'true' : 'false'}
                  className={`link-draw relative min-h-[44px] px-3.5 inline-flex items-center mono-meta text-xs uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive ? 'text-accent' : 'text-ink-secondary hover:text-accent'
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
              className="glass-panel min-h-[44px] min-w-[44px] !rounded-[12px] inline-flex items-center justify-center text-ink-primary hover:text-accent cursor-pointer"
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
