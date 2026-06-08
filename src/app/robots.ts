import { MetadataRoute } from 'next';

// Evaluate at build time so it can be emitted as a static file under `output: 'export'`
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://kaixuebang.com/sitemap.xml',
  };
}




