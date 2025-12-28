'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        products: [
            { label: 'Grader', href: '#products' },
            { label: '教材帮', href: '#products' },
            { label: '评课社区', href: '#products' },
        ],
        company: [
            { label: '关于我们', href: '#about' },
            { label: '开源项目', href: '#opensource' },
            { label: '联系方式', href: '#contact' },
        ],
        resources: [
            { label: 'GitHub', href: 'https://github.com/Jinqitrip/JQX-TourChain-node', external: true },
            { label: '开发者文档', href: '#' },
        ],
    };

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
                                src="/Logo.png"
                                alt="Kaixuebang Logo"
                                width={140}
                                height={60}
                                className="object-contain h-[60px] w-auto"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                            以智能基础设施，重塑知识的传递。构建教育大模型所需的底层知识库。
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <p>上海凯学邦信息咨询有限公司</p>
                            <p>Shanghai, China</p>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                            产品矩阵
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.products.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
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
                            公司
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
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
                            资源
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
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
                        © {currentYear} 上海凯学邦信息咨询有限公司 All rights reserved.
                    </p>

                    {/* SEO Keywords */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs"
                        style={{ color: 'var(--text-tertiary)' }}>
                        <span>教育科技</span>
                        <span>·</span>
                        <span>K12知识库</span>
                        <span>·</span>
                        <span>大模型微调数据</span>
                        <span>·</span>
                        <span>智慧校园</span>
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
