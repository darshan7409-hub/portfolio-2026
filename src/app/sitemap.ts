import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/portfolio';

const siteUrl = 'https://www.darshanpatelqa.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const allImages = [
    `${siteUrl}/darshan-patel-qa-lead.png`,
    `${siteUrl}/darshan-patel.png`,
    `${siteUrl}/My_image.png`,
    ...PROJECTS.map((p) => `${siteUrl}${p.imageSrc}`),
  ];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: allImages,
    },
    {
      url: `${siteUrl}/Darshan_Patel_CV.pdf`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
