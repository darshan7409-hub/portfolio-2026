import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgb(20, 18, 16)',
          borderRadius: '7px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
          <path
            d="M15 13H32C42.5 13 50 20.4 50 31.5C50 34 49.5 36.2 48.6 38.2M45 43.8C41.8 48 37.2 50.5 32 50.5H15V13Z"
            stroke="rgb(226, 154, 59)"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29 33L35.5 39.5L51 24"
            stroke="rgb(248, 245, 240)"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}

