'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-300 ${
        scrolled
          ? 'bg-surface-1/90 backdrop-blur-xl border-b border-border-strong py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="inline-flex items-center gap-3 group"
        >
          <span
            aria-hidden="true"
            className="w-8 h-8 rounded-lg bg-accent text-accent-ink font-mono font-bold text-sm inline-flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
          >
            KC
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-[0.14em] uppercase text-ink-primary">
            Krunal Chaudhari
            <span className="sr-only"> — Back to top</span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.14em] text-ink-secondary hover:text-accent transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <MagneticButton
            as="a"
            href="/Krunal_Chaudhari_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border-strong bg-surface-2/80 hover:border-accent text-ink-primary font-mono text-xs uppercase tracking-wider transition-colors"
          >
            CV <ArrowUpRight size={14} aria-hidden="true" />
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-strong bg-surface-2/90 text-ink-primary hover:border-accent transition-colors cursor-pointer"
        >
          {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="md:hidden mt-3 mx-4 rounded-2xl bg-surface-1/95 backdrop-blur-2xl border border-border-strong p-4 flex flex-col gap-1 shadow-2xl"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl font-mono text-sm uppercase tracking-widest text-ink-secondary hover:text-accent hover:bg-surface-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Krunal_Chaudhari_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl bg-accent text-accent-ink font-mono text-sm font-semibold uppercase tracking-widest inline-flex items-center justify-between"
          >
            <span>Open CV (PDF)</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  );
}

