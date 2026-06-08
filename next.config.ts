import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Static HTML export for Cloudflare Pages
  output: 'export',
  // next/image optimization requires a server; disable it for static export
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
