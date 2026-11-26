import { PROFILE } from '@/data/portfolio';

type SocialVariant = 'header' | 'hero' | 'contact' | 'footer';

interface SocialItem {
  id: 'github' | 'linkedin' | 'whatsapp' | 'email' | 'phone';
  label: string;
  shortLabel: string;
  href: string;
  external: boolean;
  brandClass: string;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: 'github',
    label: 'GitHub profile',
    shortLabel: 'GitHub',
    href: PROFILE.socials.find((s) => s.id === 'github')?.href || 'https://github.com/darshan7409-hub',
    external: true,
    brandClass: 'social-brand-github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn profile',
    shortLabel: 'LinkedIn',
    href: PROFILE.socials.find((s) => s.id === 'linkedin')?.href || 'https://www.linkedin.com/in/darshan-patel-619901106',
    external: true,
    brandClass: 'social-brand-linkedin',
  },
  {
    id: 'whatsapp',
    label: 'Chat on WhatsApp',
    shortLabel: 'WhatsApp',
    href: PROFILE.whatsappHref,
    external: true,
    brandClass: 'social-brand-whatsapp',
  },
  {
    id: 'email',
    label: `Email ${PROFILE.email}`,
    shortLabel: 'Email',
    href: `mailto:${PROFILE.email}`,
    external: false,
    brandClass: 'social-brand-email',
  },
  {
    id: 'phone',
    label: `Call ${PROFILE.phone}`,
    shortLabel: 'Call',
    href: PROFILE.phoneHref,
    external: false,
    brandClass: 'social-brand-phone',
  },
];

function BrandIcon({ id }: { id: SocialItem['id'] }) {
  switch (id) {
    case 'github':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.375c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.172.109-1.891-.125-.438-.141-1-.328-1.719-.641-3.031-1.313-5-4.375-5.156-4.578-.156-.203-1.234-1.641-1.234-3.125s.781-2.219 1.063-2.516c.281-.297.609-.375.813-.375.203 0 .406 0 .578.016.188.016.438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.016.547-.109.203-.156.328-.313.516-.156.188-.328.406-.469.547-.156.156-.313.328-.141.641.172.313.781 1.281 1.672 2.078 1.156 1.031 2.125 1.344 2.438 1.5.313.156.484.125.672-.078.188-.203.781-.906.984-1.219.203-.313.406-.266.688-.156.281.109 1.797.844 2.109 1 .313.156.516.234.594.359.078.125.078.734-.172 1.438z" />
        </svg>
      );
    case 'email':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'phone':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
  }
}

export default function SocialLinks({
  variant,
  compactIds,
}: {
  variant: SocialVariant;
  compactIds?: SocialItem['id'][];
}) {
  const items = compactIds
    ? SOCIAL_ITEMS.filter((item) => compactIds.includes(item.id))
    : SOCIAL_ITEMS;

  if (variant === 'header') {
    return (
      <div className="flex items-center gap-1.5" aria-label="Social and contact links">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`group social-brand-link ${item.brandClass} glass-panel min-h-[44px] min-w-[44px] !rounded-[12px] inline-flex items-center justify-center text-ink-secondary`}
          >
            <span className="relative z-10 transition-transform duration-250 group-hover:scale-110 inline-flex">
              <BrandIcon id={item.id} />
            </span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className="flex items-center gap-3.5 pt-2" aria-label="Social links">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`group social-brand-link ${item.brandClass} w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-surface-2 border border-border-strong inline-flex items-center justify-center text-ink-secondary hover:-translate-y-0.5`}
          >
            <span className="relative z-10 transition-transform duration-200 group-hover:scale-110 inline-flex">
              <BrandIcon id={item.id} />
            </span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="flex flex-wrap items-center gap-2.5 pt-2" aria-label="Connect directly">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`group social-brand-link ${item.brandClass} glass-panel min-h-[44px] min-w-[44px] !rounded-[12px] px-3 inline-flex items-center gap-2 text-ink-secondary hover:-translate-y-0.5`}
          >
            <span className="relative z-10 transition-transform duration-250 group-hover:scale-110 inline-flex">
              <BrandIcon id={item.id} />
            </span>
            <span className="relative z-10 mono-meta text-xs max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[90px] group-hover:opacity-100 group-focus-visible:max-w-[90px] group-focus-visible:opacity-100 transition-all duration-250">
              {item.shortLabel}
            </span>
          </a>
        ))}
      </div>
    );
  }

  // Footer variant (rendered inside dark footer bar)
  return (
    <div className="flex flex-wrap items-center gap-3 pt-1" aria-label="Footer social links">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={item.label}
          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`group social-brand-link ${item.brandClass} w-11 h-11 min-h-[44px] min-w-[44px] rounded-[10px] bg-white/[0.06] border border-white/15 inline-flex items-center justify-center text-stone-300 hover:-translate-y-1`}
        >
          <span className="relative z-10 transition-transform duration-250 group-hover:scale-110 inline-flex">
            <BrandIcon id={item.id} />
          </span>
        </a>
      ))}
    </div>
  );
}
