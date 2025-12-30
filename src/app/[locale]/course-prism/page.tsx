import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.Product.course_prism;
  const meta = messages.Metadata;

  return {
    title: `${t.title} | ${meta.title}`,
    description: t.description,
    alternates: {
      canonical: `/${locale}/course-prism`,
    },
  };
}

export default async function CoursePrismPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.Product.course_prism;
  const common = messages.Product;
  const bento = messages.BentoGrid.course_prism;

  return (
    <>
      <Header />
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
              <Link href="https://github.com/kaixuebang/Course-Prism" target="_blank" className="btn-primary">
                {common.view_source}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t" style={{ borderColor: 'var(--card-border)' }}>
               <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>透明评价</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>打破课程信息茧房，通过真实的选课与学习反馈，辅助学生做出更明智的学术决策。</p>
               </div>
               <div>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>学术社区</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>不仅是评价，更是交流。构建基于课程的学术共同体，促进教学质量的持续改进。</p>
               </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

