import { Metadata } from "next";
import AboutContent from "./AboutContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.About;
  const meta = messages.Metadata;

  return {
    title: `${t.badge} | ${meta.title}`,
    description: t.desc1 + " " + t.desc2,
    keywords: meta.keywords.split(', '),
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'en': '/en/about',
        'zh': '/zh/about',
        'x-default': '/about',
      },
    },
    openGraph: {
      title: `${t.badge} | ${meta.title}`,
      description: t.desc1,
      url: `https://kaixuebang.com/${locale}/about`,
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
