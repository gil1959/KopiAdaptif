import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, TrendingUp, Map, MessageSquare, CloudRain, Shield } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'KopiAdaptif — Pendamping Adaptasi Iklim Petani Kopi',
};

const features = [
  {
    href: '/cek-risiko',
    Icon: CloudRain,
    judul: 'Cek Risiko Kebun',
    deskripsi: 'Cek prediksi risiko gagal bunga berdasarkan cuaca 14 hari ke depan di lokasi kebun Anda.',
    varian: 'primary',
  },
  {
    href: '/riwayat',
    Icon: TrendingUp,
    judul: 'Riwayat Panen',
    deskripsi: 'Catat dan pantau hasil panen setiap musim untuk melihat tren dan membuat keputusan yang lebih baik.',
    varian: 'default',
  },
  {
    href: '/peta',
    Icon: Map,
    judul: 'Peta Wilayah',
    deskripsi: 'Lihat status kebun di seluruh wilayah Kepahiang. Ketahui kondisi tetangga dan ambil langkah bersama.',
    varian: 'default',
  },
  {
    href: '/forum',
    Icon: MessageSquare,
    judul: 'Forum Petani',
    deskripsi: 'Tanya jawab dengan petani lain dan penyuluh pertanian. Berbagi pengalaman untuk hasil panen lebih baik.',
    varian: 'default',
  },
];

const stats = [
  { angka: '80%', keterangan: 'hasil panen bisa hilang akibat hujan deras saat berbunga' },
  { angka: '14 hari', keterangan: 'prediksi cuaca yang kami analisis untuk setiap kebun' },
  { angka: '3', keterangan: 'tingkat peringatan risiko yang mudah dipahami petani' },
];

export default function LandingPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Leaf size={14} aria-hidden="true" />
            <span>Adaptasi Iklim untuk Petani Kopi</span>
          </div>
          <h1 className={styles.heroTitle}>
            Selamatkan Bunga Kopi Anda dari Hujan Ekstrem
          </h1>
          <p className={styles.heroDesc}>
            KopiAdaptif membantu petani kopi di Kepahiang menentukan waktu aman berbunga, memangkas, dan mengambil tindakan pencegahan berdasarkan prediksi cuaca yang akurat.
          </p>
          <div className={styles.heroCta}>
            <Link href="/cek-risiko" className={styles.ctaPrimary}>
              <Shield size={18} aria-hidden="true" />
              Cek Risiko Kebun Saya
            </Link>
            <Link href="/forum" className={styles.ctaSecondary}>
              Bergabung ke Forum
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroIllustration}>
            <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg}>
              {/* Background circle */}
              <circle cx="150" cy="140" r="130" fill="#E4EBDD" opacity="0.6"/>
              {/* Coffee branch */}
              <path d="M150 220 L150 80" stroke="#2F4A34" strokeWidth="8" strokeLinecap="round"/>
              {/* Leaves */}
              <ellipse cx="120" cy="110" rx="30" ry="14" fill="#5B8A5A" transform="rotate(-30 120 110)"/>
              <ellipse cx="180" cy="130" rx="30" ry="14" fill="#7FA06E" transform="rotate(30 180 130)"/>
              <ellipse cx="115" cy="155" rx="25" ry="12" fill="#5B8A5A" transform="rotate(-20 115 155)"/>
              <ellipse cx="185" cy="170" rx="25" ry="12" fill="#2F4A34" transform="rotate(20 185 170)"/>
              <ellipse cx="125" cy="195" rx="22" ry="10" fill="#7FA06E" transform="rotate(-15 125 195)"/>
              {/* Flowers */}
              <circle cx="132" cy="108" r="8" fill="#F6F2E7" opacity="0.9"/>
              <circle cx="132" cy="108" r="4" fill="#D9A441"/>
              <circle cx="178" cy="128" r="8" fill="#F6F2E7" opacity="0.9"/>
              <circle cx="178" cy="128" r="4" fill="#D9A441"/>
              <circle cx="120" cy="152" r="6" fill="#F6F2E7" opacity="0.9"/>
              <circle cx="120" cy="152" r="3" fill="#8C5A34"/>
              {/* Rain drops */}
              <path d="M60 40 L57 52" stroke="#5B8A5A" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              <path d="M80 20 L77 32" stroke="#5B8A5A" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
              <path d="M240 50 L237 62" stroke="#5B8A5A" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              <path d="M220 30 L217 42" stroke="#5B8A5A" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
              <path d="M260 70 L257 82" stroke="#5B8A5A" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
              {/* Cloud */}
              <ellipse cx="80" cy="55" rx="25" ry="14" fill="#B7C9A8" opacity="0.7"/>
              <ellipse cx="100" cy="48" rx="18" ry="12" fill="#B7C9A8" opacity="0.7"/>
              <ellipse cx="240" cy="55" rx="25" ry="14" fill="#B7C9A8" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statAngka}>{s.angka}</span>
                <span className={styles.statKet}>{s.keterangan}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.problemCard}>
            <h2 className={styles.sectionTitle}>Masalah yang Petani Kopi Hadapi</h2>
            <p className={styles.problemDesc}>
              Petani kopi di Kepahiang, Bengkulu kehilangan hingga 80 persen hasil panen karena curah hujan ekstrem menggugurkan bunga kopi sebelum sempat berbuah. Masalah ini semakin buruk setiap tahunnya akibat perubahan iklim yang membuat pola hujan semakin tidak menentu.
            </p>
            <p className={styles.problemDesc}>
              KopiAdaptif menggabungkan data curah hujan historis dan prediksi cuaca dengan rekomendasi berbasis kecerdasan buatan, membantu Anda menentukan waktu aman untuk berbunga, memangkas, atau mengambil tindakan pencegahan sebelum hujan deras tiba.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Fitur Utama</h2>
          <div className={styles.featuresGrid}>
            {features.map(({ href, Icon, judul, deskripsi, varian }) => (
              <Link key={href} href={href} className={[styles.featureCard, varian === 'primary' ? styles.featureCardPrimary : ''].join(' ')}>
                <div className={[styles.featureIcon, varian === 'primary' ? styles.featureIconPrimary : ''].join(' ')}>
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className={styles.featureTitle}>{judul}</h3>
                <p className={styles.featureDesc}>{deskripsi}</p>
                <span className={styles.featureLink}>
                  Buka
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
