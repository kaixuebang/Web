'use client';

import { useEffect, useRef } from 'react';
import KnowledgeGraph from '@/components/KnowledgeGraph';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutContent() {
    const sectionRef = useRef<HTMLElement>(null);
    const t = useTranslations('About');

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
                                {t('badge')}
                            </div>
                            <h1 className="reveal reveal-delay-1 heading-xl mb-8" style={{ color: 'var(--text-primary)' }}>
                                {t('title')}<br />
                                <span className="text-gradient-purple">{t('title_highlight')}</span>
                            </h1>
                            <div className="reveal reveal-delay-2 max-w-2xl mx-auto">
                                <p className="text-xl leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                                    {t('desc1')}
                                </p>
                                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                                    {t('desc2')}
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
                                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{t('mission.title')}</h2>
                                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    {t('mission.description')}
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
                                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{t('vision.title')}</h2>
                                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                    {t('vision.description')}
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
                                {t('journey.title')}
                            </h2>
                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-green)] via-[var(--accent-purple)] to-transparent opacity-20 hidden md:block" />
                                
                                <div className="space-y-20">
                                    {/* Item 1 */}
                                    <div className="reveal flex flex-col md:flex-row items-start md:items-center gap-8 relative">
                                        <div className="flex-1 text-left md:text-right">
                                            <div className="inline-block px-4 py-1 rounded-full bg-[var(--accent-green)]/10 text-[var(--accent-green)] text-sm font-bold mb-2">{t('journey.item1.tag')}</div>
                                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{t('journey.item1.title')}</h3>
                                            <p className="max-w-md ml-auto" style={{ color: 'var(--text-secondary)' }}>
                                                {t('journey.item1.description')}
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
                                            <div className="inline-block px-4 py-1 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] text-sm font-bold mb-2">{t('journey.item2.tag')}</div>
                                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{t('journey.item2.title')}</h3>
                                            <p className="max-w-md" style={{ color: 'var(--text-secondary)' }}>
                                                {t('journey.item2.description')}
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
                                            <div className="inline-block px-4 py-1 rounded-full bg-[var(--accent-green)]/10 text-[var(--accent-green)] text-sm font-bold mb-2">{t('journey.item3.tag')}</div>
                                            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{t('journey.item3.title')}</h3>
                                            <p className="max-w-md ml-auto" style={{ color: 'var(--text-secondary)' }}>
                                                {t('journey.item3.description')}
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
                                {t('join_us.title')}
                            </h2>
                            <p className="reveal reveal-delay-1 text-xl leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
                                {t('join_us.description')}
                            </p>
                            <div className="reveal reveal-delay-2 flex flex-col items-center gap-8">
                                <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full max-w-2xl">
                                    <div className="flex-1 min-w-[280px] glass p-6 rounded-2xl border border-[var(--accent-green)]/20 flex flex-col items-center gap-4 transition-all hover:scale-105 hover:border-[var(--accent-green)]/40 shadow-lg shadow-[var(--accent-green)]/5">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--accent-green)]/10 flex items-center justify-center text-[var(--accent-green)]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-tertiary)' }}>{t('join_us.contact_badge')}</p>
                                            <a href="mailto:contact@kaixuebang.com" className="text-xl font-bold hover:text-[var(--accent-green)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                                                contact@kaixuebang.com
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1 min-w-[280px] glass p-6 rounded-2xl border border-[var(--card-border)] flex flex-col items-center gap-4 transition-all hover:scale-105 hover:border-[var(--accent-purple)]/40">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--accent-purple)]/10 flex items-center justify-center text-[var(--accent-purple)]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                            </svg>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-tertiary)' }}>{t('join_us.opensource_badge')}</p>
                                            <a href="https://github.com/kaixuebang" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-[var(--accent-purple)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                                                github.com/kaixuebang
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
