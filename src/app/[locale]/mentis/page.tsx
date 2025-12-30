import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.Product.textbook_help;
  const meta = messages.Metadata;

  return {
    title: `${t.title} | ${meta.title}`,
    description: t.description,
    alternates: {
      canonical: `/${locale}/mentis`,
    },
  };
}

export default async function MentisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default;
  const t = messages.Product.textbook_help;
  const common = messages.Product;
  const bento = messages.BentoGrid.textbook_help;
  const isZh = locale === 'zh';

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <Link href="/" locale={locale as any} className="inline-flex items-center gap-2 text-sm mb-12 hover:opacity-70 transition-opacity" style={{ color: 'var(--text-tertiary)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              {common.back_to_home}
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                    style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)', color: 'var(--accent-purple)' }}>
                    {bento.tag}
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                    style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                    {bento.status}
                </span>
            </div>
            
            <h1 className="heading-xl mb-6" style={{ color: 'var(--text-primary)' }}>{t.title}</h1>
            <p className="text-2xl font-medium mb-8 text-gradient-green">
              {t.vision}
            </p>
            <p className="text-xl mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {bento.description}
            </p>

            {/* Problem & Solution Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="p-8 rounded-3xl glass border border-[var(--card-border)]">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center text-sm">!</span>
                  {t.problem_title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {t.problem}
                </p>
                <ul className="space-y-4 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  <li className="flex gap-3">
                    <span className="text-red-500">•</span>
                    {t.problem_p1}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">•</span>
                    {t.problem_p2}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500">•</span>
                    {t.problem_p3}
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl glass border border-[var(--accent-green)]/20" style={{ backgroundColor: 'rgba(16, 185, 129, 0.02)' }}>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <span className="w-8 h-8 rounded-lg bg-[var(--accent-green)]/10 text-[var(--accent-green)] flex items-center justify-center text-sm">✓</span>
                  {t.solution_title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {t.solution}
                </p>
                <ul className="space-y-4 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent-green)]">•</span>
                    {t.solution_p1}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent-green)]">•</span>
                    {t.solution_p2}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent-green)]">•</span>
                    {t.solution_p3}
                  </li>
                </ul>
              </div>
            </div>

            <div className="py-12 border-t text-center" style={{ borderColor: 'var(--card-border)' }}>
              <p className="text-sm italic" style={{ color: 'var(--text-tertiary)' }}>{bento.footer}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
