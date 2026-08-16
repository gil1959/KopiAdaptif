'use client';

import React from 'react';
import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brandSection}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandIcon} aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#2F4A34"/>
                <path d="M9 18c1.5-3 4-5 5-8 1 3 3.5 5 5 8" stroke="#F6F2E7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 10c0-2-1.5-3.5-3-4 1 1.5 1.5 3 1 5" stroke="#5B8A5A" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.brandName}>KopiAdaptif</span>
          </Link>
          <p className={styles.brandDesc}>
            Mendampingi petani kopi Kepahiang menghadapi perubahan iklim dengan data dan rekomendasi cerdas.
          </p>
        </div>

        <div className={styles.linksSection}>
          <h4 className={styles.linkTitle}>Fitur</h4>
          <Link href="/cek-risiko" className={styles.footerLink}>Cek Risiko Kebun</Link>
          <Link href="/riwayat" className={styles.footerLink}>Riwayat Panen</Link>
          <Link href="/peta" className={styles.footerLink}>Peta Wilayah</Link>
          <Link href="/forum" className={styles.footerLink}>Forum Petani</Link>
        </div>

        <div className={styles.contactSection}>
          <h4 className={styles.linkTitle}>Hubungi Kami</h4>
          <div className={styles.contactItem}>
            <MapPin size={16} aria-hidden="true" />
            <span>Dinas Pertanian Kepahiang, Bengkulu</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={16} aria-hidden="true" />
            <span>+62 812 3456 7890</span>
          </div>
          <div className={styles.contactItem}>
            <Mail size={16} aria-hidden="true" />
            <span>bantuan@kopiadaptif.id</span>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Kopi Bumi &middot; KopiAdaptif. Dibuat untuk Petani.</p>
      </div>
    </footer>
  );
}
