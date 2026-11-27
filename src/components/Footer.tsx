import { Mail, Heart } from 'lucide-react';
import BrandMark from './BrandMark';
import SocialLinks from './SocialLinks';
import { PROFILE } from '@/data/portfolio';

const quickNav = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const builtWith = ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#090a14] text-stone-300 border-t border-white/10 overflow-hidden pb-[env(safe-area-inset-bottom)]">
      {/* Subtle ambient background glows matching reference footer (pure radial gradient, zero filter blur cost) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 w-[620px] h-[240px]"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.74 0.14 68 / 0.14), transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 w-[340px] h-[200px]"
        style={{
          background:
            'radial-gradient(closest-side, oklch(0.62 0.08 240 / 0.12), transparent 72%)',
        }}
      />

      {/* Top gradient hairline */}
      <div
        aria-hidden="true"
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, oklch(0.74 0.14 68 / 0.55), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto safe-x py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 — Darshan Identity & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center shrink-0">
                <BrandMark
                  size={28}
                  color="oklch(0.74 0.14 68)"
                  notchColor="#141210"
                  rimColor="rgba(255,255,255,0.22)"
                />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">{PROFILE.name}</p>
                <p
                  className="mono-meta text-xs tracking-widest uppercase mt-1"
                  style={{ color: 'oklch(0.76 0.14 68)' }}
                >
                  {PROFILE.role}
                </p>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Darshan Patel — Senior QA Lead &amp; Analyst delivering precision quality assurance, test strategy, and release governance across 30+ web and mobile software projects.
            </p>

            <SocialLinks
              variant="footer"
              compactIds={['github', 'linkedin', 'whatsapp']}
            />
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-4">
            <p className="text-white font-semibold text-sm uppercase tracking-widest">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {quickNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group text-stone-400 hover:text-[#f5b056] text-sm transition-colors duration-200 inline-flex items-center min-h-[32px]"
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Get In Touch */}
          <div className="space-y-4">
            <p className="text-white font-semibold text-sm uppercase tracking-widest">
              Get In Touch
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 text-stone-300 hover:text-[#f5b056] text-sm transition-colors duration-200 group min-h-[44px]"
              >
                <span className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center shrink-0 group-hover:border-[#f5b056]/60 transition-colors">
                  <Mail size={14} aria-hidden="true" />
                </span>
                <span className="break-all">{PROFILE.email}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 text-xs font-medium">
                  Available for opportunities
                </span>
              </div>

              <div className="pt-1">
                <p className="text-stone-400 text-xs uppercase tracking-widest mb-2.5">
                  Built With
                </p>
                <div className="flex flex-wrap gap-2">
                  {builtWith.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/15 text-stone-300 mono-meta"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div
          aria-hidden="true"
          className="h-px w-full mb-7"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)',
          }}
        />

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p className="flex items-center gap-1.5">
            <span>© {year}</span>
            <span className="text-white font-semibold">{PROFILE.name}</span>
            <span>· All rights reserved.</span>
          </p>
          <p className="flex items-center gap-1.5">
            <span>Crafted by</span>
            <span
              className="font-semibold uppercase tracking-wider"
              style={{ color: 'oklch(0.76 0.14 68)' }}
            >
              {PROFILE.name}
            </span>
            <Heart
              size={13}
              className="text-rose-500 fill-rose-500 animate-pulse"
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
