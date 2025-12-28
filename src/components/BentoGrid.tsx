'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function BentoGrid() {
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
        <section ref={sectionRef} id="products" className="py-24 md:py-32">
            <div className="container-main">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="reveal heading-lg mb-4" style={{ color: 'var(--text-primary)' }}>
                        核心产品矩阵
                    </h2>
                    <p className="reveal reveal-delay-1 text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--text-secondary)' }}>
                        构建教育智能化的基础设施，赋能知识的高效传递
                    </p>
                </div>

                {/* Bento Grid - New Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Grader Card - Large, Clickable */}
                    <Link
                        href="https://grader.kaixuebang.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bento-card reveal group cursor-pointer min-h-[320px] flex flex-col"
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit"
                            style={{
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--accent-green)'
                            }}>
                            效率工具
                        </span>
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            Grader
                        </h3>
                        <p className="text-base leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                            智能作业批改助手，释放教学效能。AI 驱动的自动批改系统，支持多学科、多题型的智能评分与反馈。
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                            style={{ color: 'var(--accent-green)' }}>
                            <span>访问 Grader</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* 评课社区 Card - Large, Clickable */}
                    <Link
                        href="https://classrate.kaixuebang.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bento-card reveal group cursor-pointer min-h-[320px] flex flex-col"
                        style={{ transitionDelay: '0.3s' }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit"
                            style={{
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--accent-green)'
                            }}>
                            社区平台
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
                            评课社区
                        </h3>
                        <p className="text-base leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                            中国版 RateMyProfessor。透明的课程评价社区，不仅是选课指南，更是学术反馈的闭环。
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                            style={{ color: 'var(--accent-green)' }}>
                            <span>访问评课社区</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* Daily-AI-Scholar Card - Clickable */}
                    <Link
                        href="https://github.com/zousirui2005/Daily-AI-Scholar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bento-card reveal group cursor-pointer min-h-[320px] flex flex-col"
                        style={{ transitionDelay: '0.35s' }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit"
                            style={{
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: 'var(--accent-green)'
                            }}>
                            学习助手
                        </span>
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                            Daily-AI-Scholar
                        </h3>
                        <p className="text-base leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                            自动化的学习助手。每天通过邮件为您推送精选的 AI 知识与学术前沿，让学习变得更主动、更简单。
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                            style={{ color: 'var(--accent-green)' }}>
                            <span>查看开源项目</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    {/* 教材帮 - Full Width, Under Construction */}
                    <div className="bento-card reveal lg:col-span-2 flex flex-col min-h-[280px]"
                        style={{ transitionDelay: '0.4s' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                                style={{
                                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                                    color: 'var(--accent-purple)'
                                }}>
                                核心产品
                            </span>
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                                style={{
                                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                                    color: '#f59e0b'
                                }}>
                                🚧 建设中
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
                                教材帮
                            </h3>

                            <p className="text-lg leading-relaxed mb-6 max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
                                教材大模型知识库。我们不制造大模型，我们让大模型更懂教材。为 AI 提供结构化的知识点与习题数据，辅助学生深度理解核心概念。
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
                                        结构化知识点与习题数据
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
                                        辅助深度理解核心概念
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
                                        覆盖 K12 全学科教材
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
                                <span>项目正在紧锣密鼓地建设中，敬请期待...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
