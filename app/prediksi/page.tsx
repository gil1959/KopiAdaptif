'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';
import { ShieldCheck, AlertTriangle, AlertOctagon, ChevronRight, ArrowLeft } from 'lucide-react';
import { getRisikoData, curahHujanData, type StatusRisiko, type FasePertumbuhan } from '@/data/risiko';
import { listDesa } from '@/data/desa';
import Button from '@/components/ui/Button';
import { Spinner } from '@/components/ui/Loading';
import styles from './page.module.css';

const statusConfig: Record<StatusRisiko, {
  label: string;
  Icon: React.ElementType;
  colorClass: string;
  bgClass: string;
  barColor: string;
  refLine: number;
}> = {
  aman: {
    label: 'Aman',
    Icon: ShieldCheck,
    colorClass: styles.statusAman,
    bgClass: styles.bgAman,
    barColor: '#5B8A5A',
    refLine: 20,
  },
  waspada: {
    label: 'Waspada',
    Icon: AlertTriangle,
    colorClass: styles.statusWaspada,
    bgClass: styles.bgWaspada,
    barColor: '#D9A441',
    refLine: 30,
  },
  'risiko-tinggi': {
    label: 'Risiko Tinggi',
    Icon: AlertOctagon,
    colorClass: styles.statusTinggi,
    bgClass: styles.bgTinggi,
    barColor: '#A8462F',
    refLine: 40,
  },
};

function PrediksiContent() {
  const params = useSearchParams();
  const router = useRouter();
  const desaId = params.get('desa') ?? '';
  const fase = (params.get('fase') ?? 'vegetatif') as FasePertumbuhan;

  const desa = listDesa.find((d) => d.id === desaId);
  const risiko = getRisikoData(desaId, fase);
  const config = statusConfig[risiko.status];
  const chartData = curahHujanData[risiko.status];

  const faseLabel: Record<FasePertumbuhan, string> = {
    vegetatif: 'Tumbuh Daun',
    berbunga: 'Mulai Berbunga',
    panen: 'Siap Panen',
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Back */}
        <button className={styles.backBtn} onClick={() => router.back()}>
          <ArrowLeft size={16} aria-hidden="true" />
          Kembali
        </button>

        {/* Info Lokasi */}
        <div className={styles.infoRow}>
          <span className={styles.infoChip}>{desa?.nama ?? 'Lokasi tidak diketahui'}</span>
          <span className={styles.infoChip}>{faseLabel[fase]}</span>
        </div>

        <h1 className={styles.pageTitle}>Prediksi Risiko Gagal Bunga</h1>

        {/* Status Card */}
        <div className={[styles.statusCard, config.bgClass].join(' ')}>
          <div className={styles.statusIconWrap}>
            <config.Icon size={36} className={config.colorClass} aria-hidden="true" />
          </div>
          <div className={styles.statusInfo}>
            <span className={[styles.statusLabel, config.colorClass].join(' ')}>
              Status Risiko
            </span>
            <span className={[styles.statusBadge, config.colorClass].join(' ')}>
              {config.label}
            </span>
          </div>
          <div className={styles.statusMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Suhu rata-rata</span>
              <span className={styles.metaValue}>{risiko.suhuRataRata}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Curah hujan prediksi</span>
              <span className={styles.metaValue}>{risiko.curahHujanPrediksi}</span>
            </div>
          </div>
        </div>

        {/* Penjelasan */}
        <div className={styles.penjelasanCard}>
          <h2 className={styles.sectionTitle}>Apa Artinya untuk Kebun Anda?</h2>
          <p className={styles.penjelasanText}>{risiko.penjelasan}</p>
        </div>

        {/* Chart */}
        <div className={styles.chartCard}>
          <h2 className={styles.sectionTitle}>Prediksi Curah Hujan 14 Hari ke Depan</h2>
          <p className={styles.chartDesc}>Satuan: mm per hari</p>
          <div className={styles.chartWrap}>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DCD2B8" vertical={false} />
                <XAxis
                  dataKey="hari"
                  tick={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fill: '#5F6B54' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fill: '#5F6B54' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 13,
                    background: '#F6F2E7',
                    border: '1px solid #DCD2B8',
                    borderRadius: 10,
                    boxShadow: '0 4px 12px rgba(47,74,52,0.12)',
                    color: '#2F4A34',
                  }}
                  cursor={{ fill: 'rgba(47,74,52,0.05)' }}
                  formatter={(val) => [`${val ?? 0} mm`, 'Curah Hujan']}
                />
                <ReferenceLine y={config.refLine} stroke={config.barColor} strokeDasharray="4 4" strokeWidth={1.5} label={{ value: 'Batas Aman', position: 'right', fontSize: 10, fill: config.barColor, fontFamily: 'Inter' }} />
                <Bar dataKey="curah" fill={config.barColor} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaRow}>
          <Link href={`/rekomendasi?status=${risiko.status}`} className={styles.ctaLink}>
            <Button variant="primary" size="lg">
              Lihat Rekomendasi Aksi
              <ChevronRight size={18} aria-hidden="true" />
            </Button>
          </Link>
          <Link href="/cek-risiko" className={styles.ctaLinkSecondary}>
            <Button variant="secondary" size="lg">
              Cek Lokasi Lain
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PrediksiPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', padding: '96px 0' }}>
        <Spinner size={40} />
      </div>
    }>
      <PrediksiContent />
    </Suspense>
  );
}
