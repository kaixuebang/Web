'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const t = useTranslations('Footer');
    const tBento = useTranslations('BentoGrid');

    const footerLinks = {
        products: [
            { label: tBento('grader.title'), href: '/grader' },
            { label: tBento('textbook_help.title'), href: '/mentis' },
            { label: tBento('course_prism.title'), href: '/course-prism' },
            { label: tBento('daily_ai_scholar.title'), href: '/daily-ai-scholar' },
        ],
        company: [
            { label: t('about_us'), href: '/about' },
            { label: t('opensource_projects'), href: '/#opensource' },
            { label: t('contact_info'), href: '/#contact' },
        ],
        resources: [
            { label: 'GitHub', href: 'https://github.com/kaixuebang', external: true },
        ],
    };

    const isZh = t('address_country' as any) === '中国';

    return (
        <footer
            id="contact"
            className="py-16 md:py-20 border-t"
            style={{ borderColor: 'var(--card-border)' }}
        >
            <div className="container-main">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link
                            href="/"
                            className="transition-opacity hover:opacity-80 mb-4 inline-block"
                        >
                            <Image
                                src="/logo.png"
                                alt={isZh ? "凯学邦 Kaixuebang - 重塑知识的传递" : "Kaixuebang - Reshaping Knowledge Transfer"}
                                width={140}
                                height={60}
                                className="object-contain h-[60px] w-auto"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                            {t('description')}
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <p>{isZh ? '上海凯学邦信息咨询有限公司' : 'Shanghai Kaixuebang Information Consulting Co., Ltd.'}</p>
                            <p>{t('address_locality')}, {t('address_country')}</p>
                            <div className="pt-3">
                                <a href="mailto:contact@kaixuebang.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--card-border)] hover:border-[var(--accent-green)]/30 hover:bg-[var(--accent-green)]/5 transition-all group">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-tertiary)] group-hover:text-[var(--accent-green)]">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <span className="group-hover:text-[var(--text-primary)]">contact@kaixuebang.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                            {t('products')}
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href as any}
                                        className="text-sm transition-colors hover:opacity-70"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                            {t('company')}
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href as any}
                                        className="text-sm transition-colors hover:opacity-70"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                            {t('resources')}
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href as any}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        className="text-sm transition-colors hover:opacity-70 inline-flex items-center gap-1"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {link.label}
                                        {link.external && (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t mb-8" style={{ borderColor: 'var(--card-border)' }} />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                        © {currentYear} {isZh ? '上海凯学邦信息咨询有限公司' : 'Shanghai Kaixuebang Information Consulting Co., Ltd.'} {t('all_rights_reserved')}.
                    </p>

                    {/* SEO Keywords */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs"
                        style={{ color: 'var(--text-tertiary)' }}>
                        <span>{isZh ? '教育科技' : 'EdTech'}</span>
                        <span>·</span>
                        <span>{isZh ? 'K12知识库' : 'K12 Knowledge Base'}</span>
                        <span>·</span>
                        <span>{isZh ? '大模型微调数据' : 'LLM Fine-tuning Data'}</span>
                        <span>·</span>
                        <span>{isZh ? '智慧校园' : 'Smart Campus'}</span>
                    </div>
                </div>

                {/* Domain */}
                <div className="mt-6 text-center">
                    <Link
                        href="https://kaixuebang.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs transition-colors hover:opacity-70"
                        style={{ color: 'var(--text-tertiary)' }}
                    >
                        kaixuebang.com
                    </Link>
                </div>
            </div>
        </footer>
    );
}
