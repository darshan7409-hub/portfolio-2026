'use client';

import { LazyMotion, AnimatePresence, m } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { PROFILE } from '@/data/portfolio';

const loadFeatures = () => import('framer-motion').then((mod) => mod.domAnimation);

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
  return (
    <LazyMotion features={loadFeatures} strict>
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden pointer-events-auto fixed inset-x-0 top-14 bottom-0 bg-canvas/85 nav-blur p-4 overflow-y-auto"
            onClick={onClose}
          >
            <nav
              id="mobile-nav-drawer"
              aria-label="Mobile navigation"
              onClick={(e) => e.stopPropagation()}
              className="swiss-panel rounded-[16px] p-4 flex flex-col gap-1.5"
            >
              {links.map((item, index) => (
                <m.a
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: index * 0.04 }}
                  className={`min-h-[44px] px-4 rounded-[8px] mono-meta text-sm uppercase tracking-[0.12em] inline-flex items-center justify-between transition-colors ${
                    activeId === item.id
                      ? 'bg-surface-2 text-accent-text border border-border'
                      : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-2'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-ink-muted">0{index + 1}</span>
                </m.a>
              ))}

              <div className="my-2 border-t border-border" />

              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="min-h-[44px] px-4 rounded-[8px] bg-accent text-accent-ink mono-meta text-sm font-semibold uppercase tracking-[0.12em] inline-flex items-center justify-between"
              >
                <span>Open Resume (PDF)</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>

              <div className="pt-3">
                <SocialLinks variant="header" />
              </div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

