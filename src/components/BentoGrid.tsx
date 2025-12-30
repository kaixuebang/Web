'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function BentoGrid() {
    const sectionRef = useRef<HTMLElement>(null);
    const t = useTranslations('BentoGrid');

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
        <section ref={sectionRef} id="products" className="py-24 md:py-32">
            <div className="container-main">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="reveal heading-lg mb-4" style={{ color: 'var(--text-primary)' }}>
                        {t('title')}
                    </h2>
                    <p className="reveal reveal-delay-1 text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}>
                        {t('subtitle')}
                    </p>
                </div>

                {/* Bento Grid - New Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Grader Card - Large, Clickable */}
                    <Link
                        href="/grader"
                        className="bento-card reveal group cursor-pointer min-h-[320px] flex flex-col"
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit"
                            style={{
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--accent-green)'
                            }}>
                            {t('grader.tag')}
                        </span>
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            {t('grader.title')}
                        </h3>
                        <p className="text-base leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                            {t('grader.description')}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                            style={{ color: 'var(--accent-green)' }}>
                            <span>查看详情</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* 评课社区 Card - Large, Clickable */}
                    <Link
                        href="/course-prism"
                        className="bento-card reveal group cursor-pointer min-h-[320px] flex flex-col"
                        style={{ transitionDelay: '0.3s' }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit"
                            style={{
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--accent-green)'
                            }}>
                            {t('course_prism.tag')}
                        </span>
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                <path d="M8 10h8" />
                                <path d="M8 14h4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            {t('course_prism.title')}
                        </h3>
                        <p className="text-base leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                            {t('course_prism.description')}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                            style={{ color: 'var(--accent-green)' }}>
                            <span>查看详情</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* Daily-AI-Scholar Card - Clickable */}
                    <Link
                        href="/daily-ai-scholar"
                        className="bento-card reveal group cursor-pointer min-h-[320px] flex flex-col"
                        style={{ transitionDelay: '0.35s' }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit"
                            style={{
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--accent-green)'
                            }}>
                            {t('daily_ai_scholar.tag')}
                        </span>
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            {t('daily_ai_scholar.title')}
                        </h3>
                        <p className="text-base leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                            {t('daily_ai_scholar.description')}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                            style={{ color: 'var(--accent-green)' }}>
                            <span>查看详情</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* 教材帮 - Under Construction */}
                    <Link
                        href="/mentis"
                        className="bento-card reveal flex flex-col min-h-[320px] group cursor-pointer"
                        style={{ transitionDelay: '0.4s' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                                style={{
                                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                                    color: 'var(--accent-purple)'
                                }}>
                                {t('textbook_help.tag')}
                            </span>
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                                style={{
                                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                    color: '#f59e0b'
                                }}>
                                {t('textbook_help.status')}
                            </span>
                        </div>

                        <div className="flex-1">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                                style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                    <path d="M8 7h8" />
                                    <path d="M8 11h6" />
                                </svg>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                                {t('textbook_help.title')}
                            </h3>

                            <p className="text-lg leading-relaxed mb-6 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
                                {t('textbook_help.description')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                                        style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-purple)">
                                            <path d="M20 6L9 17l-5-5" stroke="var(--accent-purple)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span style={{ color: 'var(--text-secondary)' }}>
                                        {t('textbook_help.feature1')}
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                                        style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-purple)">
                                            <path d="M20 6L9 17l-5-5" stroke="var(--accent-purple)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span style={{ color: 'var(--text-secondary)' }}>
                                        {t('textbook_help.feature2')}
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                                        style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)' }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-purple)">
                                            <path d="M20 6L9 17l-5-5" stroke="var(--accent-purple)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span style={{ color: 'var(--text-secondary)' }}>
                                        {t('textbook_help.feature3')}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Construction Notice */}
                        <div className="mt-8 pt-6 border-t"
                            style={{ borderColor: 'var(--card-border)' }}>
                            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                <span>{t('textbook_help.footer')}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
