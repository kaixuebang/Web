'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';
import KnowledgeGraph from '@/components/KnowledgeGraph';

export default function AboutPage() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <main ref={sectionRef} className="pt-24">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden border-b" style={{ borderColor: 'var(--card-border)' }}>
                    <KnowledgeGraph />
                    <div className="container-main relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8"
                                style={{ color: 'var(--accent-purple)' }}>
                                <span className="w-2 h-2 rounded-full bg-[var(--accent-purple)] animate-pulse" />
                                关于我们 · About Us
                            </div>
                            <h1 className="reveal reveal-delay-1 heading-xl mb-8" style={{ color: 'var(--text-primary)' }}>
                                连接教材与大模型的<br />
                                <span className="text-gradient-purple">知识桥梁</span>
                            </h1>
                            <div className="reveal reveal-delay-2 max-w-2xl mx-auto">
                                <p className="text-xl leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                                    凯学邦成立于上海，是一家深耕教育科技与知识工程的创新型企业。
                                </p>
                                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                                    我们不制造大模型，我们为大模型建造通往专业领域的“轨道”。致力于通过结构化的知识工程，重塑数字时代的知识流动路径。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-32 relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-green)]/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent-purple)]/5 rounded-full blur-[120px] pointer-events-none" />
                    
                    <div className="container-main relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="reveal bento-card flex flex-col items-start text-left group">
                                <div className="w-14 h-14 rounded-2xl bg-[var(--accent-green)]/10 flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>我们的使命</h2>
                                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    以智能基础设施，重塑知识的传递。我们致力于解决大模型在教育领域“幻觉”严重、知识不专业、缺乏深度等痛点，通过结构化的知识工程，让 AI 真正成为良师益友。
                                </p>
                            </div>
                            <div className="reveal reveal-delay-1 bento-card flex flex-col items-start text-left group">
                                <div className="w-14 h-14 rounded-2xl bg-[var(--accent-purple)]/10 flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>我们的愿景</h2>
                                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    构建全球领先的教育智能化底座。在未来，每一本教材都能被精准数字化，每一个知识点都能被智能检索与生成，让教育公平与效率通过技术真正实现。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Journey & Culture */}
                <section className="py-24 bg-[var(--background)]">
                    <div className="container-main">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="reveal heading-lg mb-16 text-center" style={{ color: 'var(--text-primary)' }}>
                                发展历程与技术基因
                            </h2>
                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-green)] via-[var(--accent-purple)] to-transparent opacity-20 hidden md:block" />
                                
                                <div className="space-y-20">
                                    {/* Item 1 */}
                                    <div className="reveal flex flex-col md:flex-row items-start md:items-center gap-8 relative">
                                        <div className="flex-1 text-left md:text-right">
                                            <div className="inline-block px-4 py-1 rounded-full bg-[var(--accent-green)]/10 text-[var(--accent-green)] text-sm font-bold mb-2">起源</div>
                                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>智慧校园导游起步</h3>
                                            <p className="max-w-md ml-auto" style={{ color: 'var(--text-secondary)' }}>
                                                凯学邦最初以“校园引路人”项目起步，通过数字化手段提升校园导游体验。这段经历让我们深刻意识到校园场景下信息流动的壁垒。
                                            </p>
                                        </div>
                                        <div className="hidden md:flex w-12 h-12 rounded-full glass border-2 border-[var(--accent-green)] z-10 items-center justify-center bg-white">
                                            <div className="w-3 h-3 rounded-full bg-[var(--accent-green)]" />
                                        </div>
                                        <div className="flex-1 hidden md:block" />
                                    </div>

                                    {/* Item 2 */}
                                    <div className="reveal reveal-delay-1 flex flex-col md:flex-row-reverse items-start md:items-center gap-8 relative">
                                        <div className="flex-1 text-left">
                                            <div className="inline-block px-4 py-1 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-sm font-bold mb-2">转型</div>
                                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>深耕教育知识工程</h3>
                                            <p className="max-w-md" style={{ color: 'var(--text-secondary)' }}>
                                                随着大模型时代的到来，我们意识到教育的核心在于教材与知识。我们开始全力投入“教材帮”知识库的建设，并推出了 Grader 智能批改、评课社区等产品。
                                            </p>
                                        </div>
                                        <div className="hidden md:flex w-12 h-12 rounded-full glass border-2 border-[var(--accent-purple)] z-10 items-center justify-center bg-white">
                                            <div className="w-3 h-3 rounded-full bg-[var(--accent-purple)]" />
                                        </div>
                                        <div className="flex-1 hidden md:block" />
                                    </div>

                                    {/* Item 3 */}
                                    <div className="reveal reveal-delay-2 flex flex-col md:flex-row items-start md:items-center gap-8 relative">
                                        <div className="flex-1 text-left md:text-right">
                                            <div className="inline-block px-4 py-1 rounded-full bg-[var(--accent-green)]/10 text-[var(--accent-green)] text-sm font-bold mb-2">开源</div>
                                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>回馈开发者社区</h3>
                                            <p className="max-w-md ml-auto" style={{ color: 'var(--text-secondary)' }}>
                                                我们深信开源的力量。通过 Daily-AI-Scholar 等项目，我们将内部使用的效率工具开源，希望能为全球的 AI 开发者与学习者提供帮助。
                                            </p>
                                        </div>
                                        <div className="hidden md:flex w-12 h-12 rounded-full glass border-2 border-[var(--accent-green)] z-10 items-center justify-center bg-white">
                                            <div className="w-3 h-3 rounded-full bg-[var(--accent-green)]" />
                                        </div>
                                        <div className="flex-1 hidden md:block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Info / Contact CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="container-main text-center relative z-10">
                        <div className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-2 border-[var(--accent-green)]/10 shadow-2xl shadow-[var(--accent-green)]/5">
                            <h2 className="reveal heading-lg mb-8" style={{ color: 'var(--text-primary)' }}>
                                加入我们，重塑未来
                            </h2>
                            <p className="reveal reveal-delay-1 text-xl leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
                                我们是一个充满激情的团队，汇聚了来自计算机、教育学、设计等领域的专家。如果你也对教育科技充满热忱，欢迎与我们取得联系。
                            </p>
                            <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-6">
                                <a href="mailto:contact@kaixuebang.com" className="btn-primary py-4 px-10 text-lg">
                                    联系我们
                                </a>
                                <a href="https://github.com/kaixuebang" target="_blank" rel="noopener noreferrer" className="btn-secondary py-4 px-10 text-lg">
                                    关注 GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

