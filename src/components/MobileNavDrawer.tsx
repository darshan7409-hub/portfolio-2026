'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import SocialLinks from './SocialLinks';

interface NavLink {
  id: string;
  label: string;
  href: string;
}

export default function MobileNavDrawer({
  open,
  links,
  activeId,
  onClose,
}: {
  open: boolean;
  links: NavLink[];
  activeId: string;
  onClose: () => void;
}) {
  // Body scroll-lock when drawer is open
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="md:hidden fixed inset-0 z-[100] flex flex-col bg-canvas/95 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Row with Title and Close Button */}
      <div
        className="h-16 px-6 flex items-center justify-between border-b border-border/60 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="mono-meta text-xs font-bold uppercase tracking-[0.16em] text-accent">
          Navigation Menu
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="glass-panel min-h-[44px] min-w-[44px] !rounded-[12px] inline-flex items-center justify-center text-ink-primary hover:text-accent transition-colors cursor-pointer"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Main Drawer Content */}
      <div
        className="flex-1 overflow-y-auto p-5 flex flex-col justify-between max-w-lg mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <nav id="mobile-nav-drawer" aria-label="Mobile primary navigation" className="space-y-2 pt-2">
          {links.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={onClose}
                className={`min-h-[52px] px-5 rounded-[16px] mono-meta text-sm font-semibold uppercase tracking-[0.12em] flex items-center justify-between transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-accent-ink shadow-md font-bold'
                    : 'text-ink-primary bg-surface-1/70 hover:bg-surface-2 border border-border/50'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`text-xs mono-meta tracking-widest ${
                    isActive ? 'text-accent-ink/80' : 'text-ink-muted'
                  }`}
                >
                  0{index + 1}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Footer info & Social Links */}
        <div className="pt-6 pb-4 border-t border-border/60 mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="mono-meta text-[11px] uppercase tracking-wider text-ink-muted">
              Connect & Profiles
            </span>
          </div>
          <div className="flex justify-start">
            <SocialLinks variant="hero" />
          </div>
          <p className="mono-meta text-[11px] text-ink-muted">
            Ahmedabad, India · QA Lead & Analyst
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
