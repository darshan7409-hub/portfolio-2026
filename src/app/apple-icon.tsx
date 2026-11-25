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
          borderRadius: '8px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
          <path
            d="M10 14H22C33 14 39 21 39 32C39 43 33 50 22 50H10V14Z"
            stroke="rgb(226, 154, 59)"
            strokeWidth="5.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27 50V14H42C50 14 55 18.8 55 26C55 33.2 50 38 42 38H27"
            stroke="rgb(247, 244, 239)"
            strokeWidth="5.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
