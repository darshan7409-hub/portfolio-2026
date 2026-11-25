'use client';

import { AnimatePresence, m } from 'framer-motion';
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
  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="md:hidden pointer-events-auto fixed inset-x-0 top-14 bottom-0 bg-canvas/80 backdrop-blur-xl p-4 overflow-y-auto"
          onClick={onClose}
        >
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
            className="glass-panel p-4 flex flex-col gap-1.5"
          >
            {links.map((item, index) => (
              <m.a
                key={item.id}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={`min-h-[44px] px-4 rounded-[12px] mono-meta text-sm uppercase tracking-[0.12em] inline-flex items-center justify-between transition-colors ${
                  activeId === item.id
                    ? 'bg-accent-muted text-accent border border-accent/30'
                    : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-2/60'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-ink-muted">0{index + 1}</span>
              </m.a>
            ))}

            <div className="my-2 border-t border-border" />

            <div className="pt-2">
              <SocialLinks variant="header" />
            </div>
          </nav>
        </m.div>
      )}
    </AnimatePresence>
  );
}
