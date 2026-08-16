'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sprout, Flower2, Apple, MapPin, ChevronRight } from 'lucide-react';
import { listDesa } from '@/data/desa';
import { Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { simulateLoading } from '@/lib/utils';
import { useToast } from '@/components/ui/Toast';
import styles from './page.module.css';

type FaseId = 'vegetatif' | 'berbunga' | 'panen';

const faseOptions: { id: FaseId; label: string; deskripsi: string; Icon: React.ElementType }[] = [
  {
    id: 'vegetatif',
    label: 'Tumbuh Daun',
    deskripsi: 'Fase pertumbuhan daun dan batang',
    Icon: Sprout,
  },
  {
    id: 'berbunga',
    label: 'Mulai Berbunga',
    deskripsi: 'Bunga mulai bermunculan',
    Icon: Flower2,
  },
  {
    id: 'panen',
    label: 'Siap Panen',
    deskripsi: 'Buah kopi sudah matang',
    Icon: Apple,
  },
];

export default function CekRisikoPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [desaId, setDesaId] = useState('');
  const [fase, setFase] = useState<FaseId | ''>('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!desaId) { showToast('Pilih desa atau kecamatan Anda terlebih dahulu', 'error'); return; }
    if (!fase) { showToast('Pilih fase pertumbuhan tanaman kopi Anda', 'error'); return; }

    setLoading(true);
    await simulateLoading(900);
    setLoading(false);
    router.push(`/prediksi?desa=${desaId}&fase=${fase}`);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <MapPin size={14} aria-hidden="true" />
            <span>Langkah 1 dari 2</span>
          </div>
          <h1 className={styles.pageTitle}>Cek Risiko Kebun Anda</h1>
          <p className={styles.pageDesc}>
            Masukkan informasi lokasi dan kondisi kebun Anda untuk mendapatkan prediksi risiko gagal bunga yang akurat.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* Pilih Desa */}
          <div className={styles.formSection}>
            <h2 className={styles.formSectionTitle}>Lokasi Kebun</h2>
            <Select
              label="Desa atau Kecamatan"
              value={desaId}
              onChange={(e) => setDesaId(e.target.value)}
              helperText="Pilih wilayah paling dekat dengan lokasi kebun Anda"
            >
              <option value="">Pilih desa atau kecamatan...</option>
              {listDesa.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.nama} — {d.kecamatan}
                </option>
              ))}
            </Select>
          </div>

          {/* Pilih Fase */}
          <div className={styles.formSection}>
            <h2 className={styles.formSectionTitle}>Fase Pertumbuhan Kopi</h2>
            <p className={styles.formSectionDesc}>Pilih kondisi tanaman kopi Anda saat ini</p>
            <div className={styles.faseGrid}>
              {faseOptions.map(({ id, label, deskripsi, Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={[styles.faseCard, fase === id ? styles.faseCardActive : ''].join(' ')}
                  onClick={() => setFase(id)}
                  aria-pressed={fase === id}
                >
                  <div className={[styles.faseIconWrap, fase === id ? styles.faseIconWrapActive : ''].join(' ')}>
                    <Icon size={36} aria-hidden="true" />
                  </div>
                  <span className={styles.faseLabel}>{label}</span>
                  <span className={styles.faseDesc}>{deskripsi}</span>
                  {fase === id && (
                    <span className={styles.faseBadge} aria-hidden="true">Dipilih</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.submitRow}>
            <Button type="submit" variant="primary" size="lg" loading={loading}>
              {!loading && (
                <>
                  Lihat Prediksi Risiko
                  <ChevronRight size={18} aria-hidden="true" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
