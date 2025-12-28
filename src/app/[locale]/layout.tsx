import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = messages.Metadata;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords.split(', '),
    authors: [{ name: locale === 'zh' ? "上海凯学邦信息咨询有限公司" : "Shanghai Kaixuebang Information Consulting Co., Ltd." }],
    metadataBase: new URL("https://kaixuebang.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'zh': '/zh',
        'x-default': '/',
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: "https://kaixuebang.com",
      siteName: "凯学邦 Kaixuebang",
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "凯学邦 Kaixuebang",
    "url": "https://kaixuebang.com",
    "logo": "https://kaixuebang.com/Logo.png",
    "description": locale === 'zh' 
      ? "凯学邦致力于构建全场景教育智能化基础设施，连接学习、教学与评价的全链路。"
      : "Kaixuebang is committed to building full-scenario intelligent infrastructure for education.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locale === 'zh' ? "上海" : "Shanghai",
      "addressCountry": "CN"
    },
    "sameAs": [
      "https://github.com/kaixuebang"
    ]
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
