'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function OpenSource() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const t = useTranslations('OpenSource');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="opensource"
            className="py-24 md:py-32"
            style={{ backgroundColor: 'var(--midnight-blue)' }}
        >
            <div className="container-main">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="reveal heading-lg mb-4 text-white">
                        {t('title')}
                    </h2>
                    <p className="reveal reveal-delay-1 text-lg max-w-2xl mx-auto text-gray-400">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Terminal Card */}
                <div className="reveal reveal-delay-2 max-w-4xl mx-auto">
                    <div className="terminal">
                        {/* Terminal Header */}
                        <div className="terminal-header">
                            <div className="terminal-dot red" />
                            <div className="terminal-dot yellow" />
                            <div className="terminal-dot green" />
                            <span className="ml-4 text-sm text-gray-400">terminal — zsh</span>
                        </div>

                        {/* Terminal Body */}
                        <div className="terminal-body">
                            {isVisible && (
                                <>
                                    <div className="terminal-line mb-4">
                                        <span className="terminal-prompt">➜</span>
                                        <span className="terminal-path">~/projects</span>
                                        <span className="terminal-command"> git clone daily-ai-scholar</span>
                                    </div>

                                    <div className="terminal-line mb-4">
                                        <span className="terminal-comment">{t('terminal.comment1')}</span>
                                    </div>

                                    <div className="terminal-line mb-4">
                                        <span className="terminal-comment">{t('terminal.comment2')}</span>
                                    </div>

                                    <div className="terminal-line">
                                        <span className="terminal-prompt">➜</span>
                                        <span className="terminal-command"> open </span>
                                        <Link
                                            href="https://github.com/kaixuebang/Daily-AI-Scholar"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="terminal-link"
                                        >
                                            https://github.com/kaixuebang/Daily-AI-Scholar
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Projects List */}
                    <div className="mt-12 space-y-8">
                        {/* 评课社区 */}
                        <div className="reveal reveal-delay-3 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl border"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <div className="flex-1 text-center md:text-left">
                                <div className="text-2xl font-bold text-white mb-2">{t('course_prism_title')}</div>
                                <p className="text-gray-400">{t('course_prism_desc')}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://github.com/kaixuebang/Course-Prism"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>{t('view_source')}</span>
                                </Link>
                            </div>
                        </div>

                        {/* Daily-AI-Scholar */}
                        <div className="reveal reveal-delay-3 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl border"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <div className="flex-1 text-center md:text-left">
                                <div className="text-2xl font-bold text-white mb-2">{t('daily_ai_scholar_title')}</div>
                                <p className="text-gray-400">{t('daily_ai_scholar_desc')}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://github.com/kaixuebang/Daily-AI-Scholar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>{t('view_source')}</span>
                                </Link>
                            </div>
                        </div>

                        {/* 校园引路人 */}
                        <div className="reveal reveal-delay-3 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl border"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-2xl font-bold text-white">{t('tourchain_title')}</div>
                                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full"
                                        style={{
                                            backgroundColor: 'rgba(255, 193, 7, 0.2)',
                                            color: '#ffc107'
                                        }}>
                                        {t('paused')}
                                    </span>
                                </div>
                                <p className="text-gray-400">{t('tourchain_desc')}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://github.com/Jinqitrip/JQX-TourChain-node"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        color: 'white'
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span>{t('view_source')}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
