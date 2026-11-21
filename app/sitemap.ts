import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://bnutfilloyev.uz', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://bnutfilloyev.uz/mlgap', changeFrequency: 'monthly', priority: 0.6 },
  ]
}
