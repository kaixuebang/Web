'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#products', label: '产品矩阵' },
    { href: '/#opensource', label: '开源贡献' },
    { href: '/about', label: '关于我们' },
    { href: '/#contact', label: '联系方式' },
  ];

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
          className="flex items-center transition-all hover:opacity-80"
        >
          <Image
            src="/Logo.png"
            alt="Kaixuebang Logo"
            width={140}
            height={60}
            className="object-contain h-[60px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="#products"
            className="btn-primary text-sm"
          >
            探索产品
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-strong transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="container-main py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium py-2 transition-colors hover:opacity-70"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#products"
            className="btn-primary text-sm w-fit mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            探索产品
          </Link>
        </nav>
      </div>
    </header>
  );
}
