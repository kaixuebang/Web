import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/navigation";
import Script from "next/script";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.Product.grader;
  const meta = messages.Metadata;

  return {
    title: `${t.title} | ${meta.title}`,
    description: t.description,
    alternates: {
      canonical: `/${locale}/grader`,
    },
  };
}

export default async function GraderPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.Product.grader;
  const common = messages.Product;
  const bento = messages.BentoGrid.grader;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Grader",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "description": bento.description,
    "publisher": {
      "@type": "Organization",
      "name": "Kaixuebang"
    },
    "url": `https://kaixuebang.com/${locale}/grader`
  };

  return (
    <>
      <Header />
      <Script
        id="product-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <main className="pt-32 pb-24">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-sm mb-12 hover:opacity-70 transition-opacity" style={{ color: 'var(--text-tertiary)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              {common.back_to_home}
            </Link>
            
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-6"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)' }}>
                {bento.tag}
            </span>
            
            <h1 className="heading-xl mb-6" style={{ color: 'var(--text-primary)' }}>{t.title}</h1>
            <p className="text-xl mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {bento.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-20">
              <Link href="https://grader.kaixuebang.com" target="_blank" className="btn-primary">
                {common.visit_site}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t" style={{ borderColor: 'var(--card-border)' }}>
               <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>产品定位</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>构建全场景教育智能化基础设施的核心组件，专注于提升作业批改与教学反馈效率。</p>
               </div>
               <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>技术特色</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>AI 驱动的自动化评估系统，支持多学科知识点对齐与个性化反馈生成。</p>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

