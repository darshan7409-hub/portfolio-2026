'use client';
'use client';

import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from './SmoothScrollProvider';

export default function BackToTop() {
  const { scrollToTop } = useSmoothScroll();

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
        className="h-11 w-11 min-h-[44px] min-w-[44px] rounded-full glass-panel glass-interactive inline-flex items-center justify-center text-ink-primary hover:text-accent hover:border-accent/50 shadow-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
      >
        <ArrowUp size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
