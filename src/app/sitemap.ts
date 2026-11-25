import type { MetadataRoute } from 'next';
import { PROFILE } from '@/data/portfolio';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || PROFILE.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
