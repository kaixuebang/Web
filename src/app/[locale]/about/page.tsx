import { Metadata } from "next";
import AboutContent from "./AboutContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.About;
  const meta = messages.Metadata;

  const companyName = locale === 'zh' ? '上海凯学邦信息咨询有限公司' : 'Shanghai Kaixuebang Information Consulting Co., Ltd.';

  return {
    title: `${t.badge} - ${companyName} | ${meta.title}`,
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
      title: `${t.badge} - ${companyName} | ${meta.title}`,
      description: t.desc1,
      url: `https://kaixuebang.com/${locale}/about`,
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
