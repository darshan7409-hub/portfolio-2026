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

  if (isSimplified) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M15 13H32C42.5 13 50 20.4 50 31.5C50 34 49.5 36.2 48.6 38.2M45 43.8C41.8 48 37.2 50.5 32 50.5H15V13Z"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M15 13H32C42.5 13 50 20.4 50 31.5C50 34 49.5 36.2 48.6 38.2M45 43.8C41.8 48 37.2 50.5 32 50.5H15V13Z"
        stroke={color}
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'brandmark-draw-d' : undefined}
      />
      <path
        d="M29 33L35.5 39.5L51 24"
        stroke={notchColor}
        strokeWidth="4.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? 'brandmark-draw-check' : undefined}
      />
    </svg>
  );
}

