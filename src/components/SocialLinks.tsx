import { PROFILE } from '@/data/portfolio';

type SocialVariant = 'header' | 'hero' | 'footer';

interface SocialItem {
  id: 'github' | 'linkedin' | 'instagram' | 'email' | 'phone' | 'whatsapp';
  label: string;
  shortLabel: string;
  href: string;
  external: boolean;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: 'github',
    label: 'GitHub profile',
    shortLabel: 'GitHub',
    href: PROFILE.socials.find((s) => s.id === 'github')?.href || 'https://github.com/darshan7409-hub',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn profile',
    shortLabel: 'LinkedIn',
    href: PROFILE.socials.find((s) => s.id === 'linkedin')?.href || 'https://www.linkedin.com/in/darshanpatel',
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram profile',
    shortLabel: 'Instagram',
    href: PROFILE.socials.find((s) => s.id === 'instagram')?.href || 'https://www.instagram.com/darshanpatel',
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'Message on WhatsApp',
    shortLabel: 'WhatsApp',
    href: PROFILE.whatsappHref,
    external: true,
  },
  {
    id: 'email',
    label: `Email ${PROFILE.email}`,
    shortLabel: 'Email',
    href: `mailto:${PROFILE.email}`,
    external: false,
  },
  {
    id: 'phone',
    label: `Call ${PROFILE.phone}`,
    shortLabel: 'Call',
    href: PROFILE.phoneHref,
    external: false,
  },
];

function BrandIcon({ id }: { id: SocialItem['id'] }) {
  switch (id) {
    case 'github':
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.59 5.95L0 24l6.33-1.66a11.86 11.86 0 0 0 5.73 1.46h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42zM12.07 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.88-9.89 9.88zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
        </svg>
      );
    case 'email':
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'phone':
      return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <div className="flex items-center gap-1" aria-label="Social and contact links">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-[8px] text-ink-secondary hover:text-ink-primary hover:bg-surface-2 transition-colors"
          >
            <BrandIcon id={item.id} />
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="flex flex-wrap items-center gap-2 pt-2" aria-label="Connect directly">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-label={item.label}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group min-h-[44px] min-w-[44px] px-3 inline-flex items-center gap-2 rounded-[8px] border border-border bg-surface-1 text-ink-secondary hover:border-border-strong hover:text-ink-primary transition-colors"
          >
            <BrandIcon id={item.id} />
            <span className="mono-meta text-xs max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[90px] group-hover:opacity-100 group-focus-visible:max-w-[90px] group-focus-visible:opacity-100 transition-all duration-200">
              {item.shortLabel}
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Footer social and contact links">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={item.label}
          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="min-h-[44px] min-w-[44px] px-3 inline-flex items-center gap-2 rounded-[8px] border border-border bg-surface-2 text-ink-secondary hover:border-border-strong hover:text-ink-primary transition-colors mono-meta text-xs"
        >
          <BrandIcon id={item.id} />
          <span>{item.shortLabel}</span>
        </a>
      ))}
    </div>
  );
}

