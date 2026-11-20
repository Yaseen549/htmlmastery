import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'HTML5 Reference — Complete Educational Guide & Native Browser Preview';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#09090b',
          padding: '60px 70px',
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#f97316',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '28px',
                marginRight: '16px',
              }}
            >
              5
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff' }}>
                HTML5 Reference
              </span>
              <span style={{ fontSize: '14px', color: '#a1a1aa' }}>
                Complete Educational Platform
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#27272a',
              border: '1px solid #3f3f46',
              borderRadius: '9999px',
              padding: '8px 20px',
            }}
          >
            <span style={{ color: '#fb923c', fontSize: '13px', fontWeight: 700 }}>
              100% WHATWG SPECIFICATION
            </span>
          </div>
        </div>

        {/* Center Main Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: '56px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Every HTML Tag & Attribute,</span>
            <span style={{ color: '#f97316' }}>Documented & Demonstrated.</span>
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#a1a1aa',
              lineHeight: 1.4,
              marginTop: '16px',
              display: 'flex',
            }}
          >
            Comprehensive reference covering all 134 elements, 26 global attributes, character entities, and authentic unstyled native browser output.
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #27272a',
            paddingTop: '24px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '32px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: '#f97316', marginRight: '8px' }}>
                134
              </span>
              <span style={{ fontSize: '15px', color: '#71717a' }}>HTML Tags</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '32px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: '#f97316', marginRight: '8px' }}>
                26
              </span>
              <span style={{ fontSize: '15px', color: '#71717a' }}>Global Attributes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '32px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: '#f97316', marginRight: '8px' }}>
                130
              </span>
              <span style={{ fontSize: '15px', color: '#71717a' }}>Entities</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: '#f97316', marginRight: '8px' }}>
                100%
              </span>
              <span style={{ fontSize: '15px', color: '#71717a' }}>Native Previews</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', color: '#a1a1aa' }}>
              Made with 🧡 by Yaseen
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
