interface BrandMarkProps {
  size?: number;
  color?: string;
  notchColor?: string;
  animated?: boolean;
  className?: string;
}

export default function BrandMark({
  size = 48,
  color = 'currentColor',
  notchColor = 'var(--token-ink-primary)',
  animated = false,
  className = '',
}: BrandMarkProps) {
  const isSimplified = size <= 20;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Letter D — architectural outer spine and arc */}
      <path
        d="M10 14H22C33 14 39 21 39 32C39 43 33 50 22 50H10V14Z"
        stroke={color}
        strokeWidth={isSimplified ? 6 : 4.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'brandmark-draw-d' : undefined}
      />
      {/* Letter P — interlocking crisp stem and upper bowl */}
      <path
        d="M27 50V14H42C50 14 55 18.8 55 26C55 33.2 50 38 42 38H27"
        stroke={notchColor}
        strokeWidth={isSimplified ? 6 : 4.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'brandmark-draw-check' : undefined}
      />
    </svg>
  );
}
