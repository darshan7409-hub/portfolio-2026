import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Darshan Patel — QA Lead & Analyst Portfolio',
    short_name: 'Darshan Patel QA',
    description:
      'Official portfolio of Darshan Patel, QA Lead & Analyst with 8+ years experience leading quality strategy, test automation, and release governance across 30+ web and mobile projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0c0b',
    theme_color: '#d85d0d',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/darshan-patel-qa-lead.png',
        sizes: '1000x1250',
        type: 'image/png',
      },
    ],
  };
}
