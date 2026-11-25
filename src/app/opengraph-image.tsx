import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          backgroundColor: 'rgb(10, 10, 10)',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(112, 140, 255, 0.22), transparent 45%), radial-gradient(circle at 15% 85%, rgba(198, 249, 68, 0.16), transparent 50%)',
          color: 'rgb(245, 245, 243)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(245, 245, 245, 0.14)',
            paddingBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '999px',
                backgroundColor: 'rgb(198, 249, 68)',
              }}
            />
            <span style={{ fontSize: 22, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgb(184, 185, 193)' }}>
              KRUNAL CHAUDHARI // PORTFOLIO 2026
            </span>
          </div>
          <span style={{ fontSize: 20, color: 'rgb(112, 140, 255)', letterSpacing: '0.08em' }}>
            QA ANALYST &amp; AUTOMATION
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 0.96,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
            }}
          >
            PRECISION IN QUALITY.
          </div>
          <div
            style={{
              fontSize: 30,
              color: 'rgb(184, 185, 193)',
              maxWidth: '880px',
              lineHeight: 1.35,
            }}
          >
            Engineering reliable software releases through structured test architecture, API validation, and cross-platform QA.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(245, 245, 245, 0.14)',
            paddingTop: '24px',
            fontSize: 20,
            color: 'rgb(138, 140, 150)',
          }}
        >
          <span>AHMEDABAD, INDIA</span>
          <span style={{ color: 'rgb(198, 249, 68)' }}>2+ YRS EXP · 20+ RELEASES VALIDATED</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

