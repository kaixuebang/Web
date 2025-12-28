'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import KnowledgeGraph from './KnowledgeGraph';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

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

        const elements = heroRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
            id="hero"
        >
            {/* Knowledge Graph Background */}
            <KnowledgeGraph />

            {/* Content */}
            <div className="container-main relative z-10 py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8"
                        style={{ color: 'var(--text-secondary)' }}>
                        <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
                        教育科技 · 知识工程
                    </div>

                    {/* Main Heading */}
                    <h1 className="reveal reveal-delay-1 heading-xl text-balance mb-6"
                        style={{ color: 'var(--text-primary)' }}>
                        以智能基础设施，
                        <span className="text-gradient-green">重塑知识的传递</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="reveal reveal-delay-2 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}>
                        凯学邦致力于构建全场景教育智能化基础设施。我们通过 AI 驱动的作业批改、透明的校园学术社区、自动化的知识助手及结构化的知识工程，连接学习、教学与评价的全链路，助力 K12 与大学生更高效地探索知识边界。
                    </p>

                    {/* CTA Buttons */}
                    <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#products" className="btn-primary">
                            <span>探索产品</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link
                            href="https://github.com/kaixuebang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub 开源</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
