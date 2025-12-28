import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kaixuebang.com';
  const locales = ['en', 'zh'];
  const routes = ['', '/about'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      // For the default locale (zh), we might want to include both prefixed and non-prefixed
      // But since we use localePrefix: 'as-needed', zh is at root.
      const url = locale === 'zh' 
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`;
      
      sitemapEntries.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}

