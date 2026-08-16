'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, AlertTriangle, BarChart2, Map, MessageSquare } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/', label: 'Beranda', Icon: Home },
  { href: '/cek-risiko', label: 'Cek Risiko', Icon: AlertTriangle },
  { href: '/riwayat', label: 'Riwayat Panen', Icon: BarChart2 },
  { href: '/peta', label: 'Peta Wilayah', Icon: Map },
  { href: '/forum', label: 'Forum', Icon: MessageSquare },
];

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <>
      {/* Desktop top navbar */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandIcon} aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#2F4A34"/>
                <path d="M9 18c1.5-3 4-5 5-8 1 3 3.5 5 5 8" stroke="#F6F2E7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 10c0-2-1.5-3.5-3-4 1 1.5 1.5 3 1 5" stroke="#5B8A5A" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.brandName}>KopiAdaptif</span>
          </Link>
          <nav className={styles.desktopNav} aria-label="Navigasi utama">
            {navItems.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                className={[styles.navLink, isActive(href) ? styles.active : ''].join(' ')}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile bottom nav */}
      <nav className={styles.mobileNav} aria-label="Navigasi mobile">
        {navItems.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className={[styles.mobileNavItem, isActive(href) ? styles.mobileActive : ''].join(' ')}
          >
            <Icon size={22} aria-hidden="true" />
            <span className={styles.mobileLabel}>{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
