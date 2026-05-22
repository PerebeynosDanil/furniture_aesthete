import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://furnitureaesthete.vercel.app/sitemap.xml',
    host: 'https://furnitureaesthete.vercel.app',
  };
}