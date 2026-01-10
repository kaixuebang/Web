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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
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
            <p className="text-2xl font-medium mb-4 text-gradient-green">
              {t.vision}
            </p>
            <p className="text-lg font-medium mb-8" style={{ color: 'var(--accent-purple)' }}>
              {t.core_mission}
            </p>
            <p className="text-xl mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t.intro}
            </p>

            {/* Three-Layer Architecture Section */}
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Tool Layer */}
                <div className="p-6 rounded-2xl glass border border-[var(--card-border)] hover:border-[var(--accent-green)]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {t.layer_tool_title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t.layer_tool_desc}
                  </p>
                </div>

                {/* Platform Layer */}
                <div className="p-6 rounded-2xl glass border border-[var(--card-border)] hover:border-[var(--accent-purple)]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {t.layer_platform_title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t.layer_platform_desc}
                  </p>
                </div>

                {/* Service Layer */}
                <div className="p-6 rounded-2xl glass border border-[var(--card-border)] hover:border-[var(--accent-green)]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {t.layer_service_title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {t.layer_service_desc}
                  </p>
                </div>
              </div>

              {/* Architecture Flow Visual */}
              <div className="mt-8 flex items-center justify-center gap-4 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)' }}>
                  {t.layer_tool_title}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)', color: 'var(--accent-purple)' }}>
                  {t.layer_platform_title}
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className="px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)' }}>
                  {t.layer_service_title}
                </span>
              </div>
            </div>

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
