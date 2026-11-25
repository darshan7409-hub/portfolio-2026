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
      dark: '#0a0b0e',
      light: '#f5f6f8',
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
          backgroundColor: 'rgb(10, 11, 14)',
          color: 'rgb(245, 246, 248)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(245, 246, 248, 0.14)',
            paddingBottom: '22px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '999px',
                backgroundColor: 'rgb(59, 130, 246)',
              }}
            />
            <span
              style={{
                fontSize: 20,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgb(176, 180, 192)',
              }}
            >
              DARSHAN PATEL // PORTFOLIO 2026
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              color: 'rgb(96, 165, 250)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {PROFILE.role}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '820px' }}>
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
              }}
            >
              Precision In Quality.
            </div>
            <div
              style={{
                fontSize: 26,
                color: 'rgb(176, 180, 192)',
                lineHeight: 1.4,
              }}
            >
              Structured QA automation, test strategy, Selenium, Katalon, and Postman API validation for reliable production releases.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              padding: '14px',
              borderRadius: '16px',
              border: '1px solid rgba(245, 246, 248, 0.14)',
              backgroundColor: 'rgb(18, 20, 26)',
            }}
          >
            <img
              src={qrDataUrl}
              width={140}
              height={140}
              alt="QR code linking to darshanpatel.com"
              style={{ borderRadius: '8px' }}
            />
            <span style={{ fontSize: 13, color: 'rgb(148, 154, 168)', letterSpacing: '0.08em' }}>
              DARSHANPATEL.COM
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(245, 246, 248, 0.14)',
            paddingTop: '22px',
            fontSize: 18,
            color: 'rgb(138, 144, 158)',
          }}
        >
          <span>AHMEDABAD, GUJARAT, INDIA</span>
          <span style={{ color: 'rgb(96, 165, 250)' }}>2+ YRS EXP · 20+ RELEASES VALIDATED</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
