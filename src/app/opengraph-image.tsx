import { ImageResponse } from 'next/og';
import QRCode from 'qrcode';
import { PROFILE } from '@/data/portfolio';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const qrDataUrl = await QRCode.toDataURL(PROFILE.siteUrl, {
    margin: 1,
    width: 152,
    color: {
      dark: '#141210',
      light: '#f7f4ef',
    },
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          backgroundColor: 'rgb(16, 14, 12)',
          backgroundImage:
            'radial-gradient(circle at 84% 16%, rgba(226, 154, 59, 0.22), transparent 46%), radial-gradient(circle at 18% 84%, rgba(110, 134, 178, 0.16), transparent 48%)',
          color: 'rgb(247, 244, 239)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(247, 244, 239, 0.12)',
            paddingBottom: '22px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
              <path
                d="M10 14H22C33 14 39 21 39 32C39 43 33 50 22 50H10V14Z"
                stroke="rgb(226, 154, 59)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27 50V14H42C50 14 55 18.8 55 26C55 33.2 50 38 42 38H27"
                stroke="rgb(247, 244, 239)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgb(247, 244, 239)',
              }}
            >
              DARSHAN PATEL
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              color: 'rgb(226, 154, 59)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            QA LEAD &amp; ANALYST
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '810px' }}>
            <div
              style={{
                fontSize: 70,
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: '-0.025em',
              }}
            >
              Turning ambiguous specs into bulletproof releases.
            </div>
            <div
              style={{
                fontSize: 25,
                color: 'rgb(184, 178, 170)',
                lineHeight: 1.4,
              }}
            >
              Test strategy, Selenium &amp; Katalon automation, and Postman API validation for reliable production software.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              padding: '14px',
              borderRadius: '18px',
              border: '1px solid rgba(247, 244, 239, 0.14)',
              backgroundColor: 'rgba(32, 29, 26, 0.82)',
            }}
          >
            <img
              src={qrDataUrl}
              width={140}
              height={140}
              alt="QR code linking to darshanpatel.com"
              style={{ borderRadius: '8px' }}
            />
            <span style={{ fontSize: 13, color: 'rgb(184, 178, 170)', letterSpacing: '0.1em' }}>
              DARSHANPATEL.COM
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(247, 244, 239, 0.12)',
            paddingTop: '22px',
            fontSize: 18,
            color: 'rgb(156, 150, 142)',
          }}
        >
          <span>AHMEDABAD, GUJARAT, INDIA</span>
          <span style={{ color: 'rgb(226, 154, 59)' }}>2+ YRS EXP · 20+ RELEASES VALIDATED</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
