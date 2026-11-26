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
          backgroundColor: 'rgb(24, 23, 22)',
          borderRadius: '8px',
        }}
      >
        <svg width="26" height="26" viewBox="0 0 64 64" fill="none">
          <path
            d="M17.5 48H13V11H32.5C45.5 11 53.5 19 53.5 29.5C53.5 40 45.5 48 32.5 48H28.5"
            stroke="rgb(216, 93, 13)"
            strokeWidth="5.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 56V17.5H33C40.2 17.5 44.5 21.8 44.5 27.75C44.5 33.7 40.2 38 33 38H17.5"
            stroke="rgb(60, 56, 52)"
            strokeWidth="7.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 56V17.5H33C40.2 17.5 44.5 21.8 44.5 27.75C44.5 33.7 40.2 38 33 38H17.5"
            stroke="rgb(12, 11, 10)"
            strokeWidth="5.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
