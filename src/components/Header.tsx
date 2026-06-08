'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#products', label: t('products') },
    { href: '/#opensource', label: t('opensource') },
    { href: '/about', label: t('about') },
    { href: '/#contact', label: t('contact') },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    // usePathname() already returns path without locale prefix
    // Ensure we have a valid path
    const targetPath = pathname || '/';
    // Use push to navigate to the same path with new locale
    router.push(targetPath, {locale: newLocale});
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'glass-strong py-3 shadow-[0_1px_0_rgba(0,0,0,0.05)]'
          : 'py-5'
        }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-all hover:opacity-80 relative z-10"
        >
          <Image
            src="/logo.png"
            alt={locale === 'zh' ? "凯学邦 Kaixuebang - 教育科技与知识工程" : "Kaixuebang - EdTech & Knowledge Engineering"}
            width={140}
            height={60}
            className="object-contain h-[60px] w-auto pointer-events-none"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="text-sm font-medium px-3 py-1 rounded-full border border-[var(--card-border)] hover:bg-[var(--accent-green)]/5 hover:border-[var(--accent-green)]/30 transition-all"
            style={{ color: 'var(--text-secondary)' }}
          >
            {locale === 'zh' ? 'English' : '中文'}
          </button>
          
          <Link
            href="/#products"
            className="btn-primary text-sm"
          >
            {t('explore')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-xs font-medium px-2 py-1 rounded-full border border-[var(--card-border)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            {locale === 'zh' ? 'EN' : 'ZH'}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-strong transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="container-main py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="text-base font-medium py-2 transition-colors hover:opacity-70"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#products"
            className="btn-primary text-sm w-fit mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('explore')}
          </Link>
        </nav>
      </div>
    </header>
  );
}
