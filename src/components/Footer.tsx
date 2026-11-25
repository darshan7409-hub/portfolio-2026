import { ArrowUp } from 'lucide-react';
import { PROFILE } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-1/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-primary">
            {PROFILE.name} — {PROFILE.role}
          </p>
          <p className="font-mono text-xs text-ink-muted">
            © {year} · Built with Next.js, OKLCH Tokens &amp; Tailwind CSS v4.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          {PROFILE.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-ink-secondary hover:text-accent transition-colors"
            >
              {social.label}
            </a>
          ))}
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-border-strong bg-surface-2 font-mono text-xs uppercase tracking-wider text-ink-primary hover:border-accent hover:text-accent transition-colors"
          >
            Top <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

