interface BrandMarkProps {
  size?: number;
  color?: string;
  notchColor?: string;
  rimColor?: string;
  animated?: boolean;
  className?: string;
}

export default function BrandMark({
  size = 48,
  color = 'var(--token-accent)',
  notchColor = 'var(--token-ink-primary)',
  rimColor = 'var(--token-canvas)',
  animated = false,
  className = '',
}: BrandMarkProps) {
  const isSmall = size <= 20;
  const dWidth = isSmall ? 6 : 4.9;
  const pWidth = isSmall ? 5.6 : 4.7;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Letter D — copper/amber outer frame with clean bottom gap for P descender */}
      <path
        d="M17.5 48H13V11H32.5C45.5 11 53.5 19 53.5 29.5C53.5 40 45.5 48 32.5 48H28.5"
        stroke={color}
        strokeWidth={dWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'brandmark-draw-d' : undefined}
      />
      {/* Letter P subtle separator rim so stem & crossbar separate crisply on any surface */}
      <path
        d="M23 56V17.5H33C40.2 17.5 44.5 21.8 44.5 27.75C44.5 33.7 40.2 38 33 38H17.5"
        stroke={rimColor}
        strokeWidth={pWidth + 2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Letter P — stem through bottom gap + extended left crossbar tip */}
      <path
        d="M23 56V17.5H33C40.2 17.5 44.5 21.8 44.5 27.75C44.5 33.7 40.2 38 33 38H17.5"
        stroke={notchColor}
        strokeWidth={pWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'brandmark-draw-check' : undefined}
      />
    </svg>
  );
}
