import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kaixuebang.com';
  const locales = ['en', 'zh'];
  const routes = ['', '/about'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      // 因为使用了 localePrefix: 'always'，所有语言版本（包括 zh）都应该带上前缀
      const url = `${baseUrl}/${locale}${route}`;
      
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

