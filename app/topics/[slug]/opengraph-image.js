import { ImageResponse } from 'next/og';
import { getTopicBySlug } from '../../../data/topics';

export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function TopicOpenGraphImage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const topic = getTopicBySlug(slug) || {
    title: slug ? `<${slug}>` : 'HTML Element',
    number: '00',
    category: 'HTML5 Specification',
    shortDesc: 'Complete reference, attributes, and live browser demonstration.',
  };

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
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: '#f97316',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '24px',
                marginRight: '14px',
              }}
            >
              5
            </div>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>
              HTML5 Reference
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#27272a',
              border: '1px solid #3f3f46',
              borderRadius: '9999px',
              padding: '6px 18px',
            }}
          >
            <span style={{ color: '#fb923c', fontSize: '13px', fontWeight: 700, marginRight: '8px' }}>
              ELEMENT #{topic.number}
            </span>
            <span style={{ color: '#71717a', fontSize: '13px', marginRight: '8px' }}>·</span>
            <span style={{ color: '#e4e4e7', fontSize: '13px', fontWeight: 600 }}>
              {topic.category.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Center Tag Focus */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: '84px',
              fontWeight: 900,
              color: '#f97316',
              fontFamily: 'monospace',
              letterSpacing: '-2px',
              display: 'flex',
            }}
          >
            {topic.title}
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#e4e4e7',
              lineHeight: 1.4,
              marginTop: '16px',
              maxWidth: '920px',
              display: 'flex',
            }}
          >
            {topic.shortDesc}
          </div>
        </div>

        {/* Bottom Feature Badges */}
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
            <span style={{ fontSize: '14px', color: '#a1a1aa', marginRight: '24px' }}>
              ✓ Formal Syntax
            </span>
            <span style={{ fontSize: '14px', color: '#a1a1aa', marginRight: '24px' }}>
              ✓ Attributes Table
            </span>
            <span style={{ fontSize: '14px', color: '#a1a1aa', marginRight: '24px' }}>
              ✓ Native Browser Preview
            </span>
            <span style={{ fontSize: '14px', color: '#a1a1aa' }}>
              ✓ ARIA Accessibility
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#a1a1aa' }}>
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
