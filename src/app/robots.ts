import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.darshanpatelqa.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/',
          '/My_image.png',
          '/darshan-patel-qa-lead.png',
          '/darshan-patel.png',
          '/projects/',
          '/tech/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
