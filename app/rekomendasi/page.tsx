'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Clock, Zap, ArrowLeft, RefreshCw } from 'lucide-react';
import { rekomendasiMap } from '@/data/rekomendasi';
import { type StatusRisiko } from '@/data/risiko';
import { Spinner } from '@/components/ui/Loading';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

function RekomendasiContent() {
  const params = useSearchParams();
  const status = (params.get('status') ?? 'waspada') as StatusRisiko;
  const daftarRekomendasi = rekomendasiMap[status] ?? rekomendasiMap.waspada;

  const statusLabel: Record<StatusRisiko, string> = {
    aman: 'Aman',
    waspada: 'Waspada',
    'risiko-tinggi': 'Risiko Tinggi',
  };

  const statusClass: Record<StatusRisiko, string> = {
    aman: styles.chipAman,
    waspada: styles.chipWaspada,
    'risiko-tinggi': styles.chipTinggi,
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href={`/prediksi`} className={styles.backLink}>
          <ArrowLeft size={16} aria-hidden="true" />
          Kembali ke Prediksi
        </Link>

        <div className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.overline}>Rekomendasi Aksi</span>
            <span className={[styles.statusChip, statusClass[status]].join(' ')}>
              Status: {statusLabel[status]}
            </span>
          </div>
          <h1 className={styles.pageTitle}>Yang Perlu Anda Lakukan Sekarang</h1>
          <p className={styles.pageDesc}>
            Berdasarkan prediksi cuaca dan status risiko kebun Anda, berikut adalah tindakan yang direkomendasikan.
          </p>
        </div>

        <div className={styles.rekomendasiList}>
          {daftarRekomendasi.map((r, idx) => (
            <div
              key={r.id}
              className={[
                styles.rekCard,
                r.varian === 'eco' ? styles.rekCardEco : r.varian === 'elevated' ? styles.rekCardElevated : styles.rekCardDefault,
              ].join(' ')}
            >
              <div className={styles.rekNumber} aria-hidden="true">{idx + 1}</div>
              <div className={styles.rekBody}>
                <h2 className={styles.rekJudul}>{r.judul}</h2>
                <p className={styles.rekDeskripsi}>{r.deskripsi}</p>
                <div className={styles.rekMeta}>
                  <div className={styles.rekMetaItem}>
                    <Zap size={14} aria-hidden="true" />
                    <span>{r.aksi}</span>
                  </div>
                  <div className={styles.rekMetaItem}>
                    <Clock size={14} aria-hidden="true" />
                    <span>{r.waktu}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaNote}>
            Data ini bersifat prediktif. Selalu konsultasikan kondisi kebun Anda dengan penyuluh pertanian setempat untuk penanganan yang lebih tepat.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/cek-risiko">
              <Button variant="primary" size="lg">
                <RefreshCw size={16} aria-hidden="true" />
                Cek Kebun Lain
              </Button>
            </Link>
            <Link href="/forum">
              <Button variant="secondary" size="lg">
                Tanya di Forum
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RekomendasiPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', padding: '96px 0' }}>
        <Spinner size={40} />
      </div>
    }>
      <RekomendasiContent />
    </Suspense>
  );
}
