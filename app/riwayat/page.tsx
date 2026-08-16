'use client';

import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Plus, Trash2, TrendingUp } from 'lucide-react';
import { riwayatAwal, trenPanenData, type RiwayatPanen } from '@/data/riwayat';
import { Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import { simulateLoading, generateId, formatTanggal } from '@/lib/utils';
import styles from './page.module.css';

const musimOptions = [
  { value: 'Musim Hujan', label: 'Musim Hujan' },
  { value: 'Musim Kemarau', label: 'Musim Kemarau' },
];

const tahunOptions = [2022, 2023, 2024, 2025, 2026];

export default function RiwayatPage() {
  const { showToast } = useToast();
  const [list, setList] = useState<RiwayatPanen[]>(riwayatAwal);
  const [musim, setMusim] = useState('');
  const [tahun, setTahun] = useState('');
  const [hasilKg, setHasilKg] = useState('');
  const [catatan, setCatatan] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const chartData = list.map((r) => ({
    periode: `${r.musim === 'Musim Hujan' ? 'HJ' : 'KM'} ${r.tahun}`,
    hasil: r.hasilKg,
  }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!musim || !tahun || !hasilKg) {
      showToast('Lengkapi semua data sebelum menyimpan', 'error');
      return;
    }
    const kg = parseInt(hasilKg);
    if (isNaN(kg) || kg <= 0) {
      showToast('Jumlah hasil panen harus berupa angka positif', 'error');
      return;
    }
    setLoading(true);
    await simulateLoading(800);
    const baru: RiwayatPanen = {
      id: generateId(),
      musim,
      tahun: parseInt(tahun),
      hasilKg: kg,
      catatan: catatan.trim(),
      tanggal: new Date().toISOString().split('T')[0],
    };
    setList((prev) => [baru, ...prev]);
    setMusim(''); setTahun(''); setHasilKg(''); setCatatan('');
    setLoading(false);
    setShowForm(false);
    showToast('Riwayat panen berhasil disimpan', 'success');
  }

  function handleHapus(id: string) {
    setList((prev) => prev.filter((r) => r.id !== id));
    showToast('Data riwayat dihapus', 'info');
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Riwayat dan Tren Panen</h1>
          <p className={styles.pageDesc}>
            Catat hasil panen setiap musim untuk memantau tren dan membuat keputusan yang lebih baik ke depannya.
          </p>
        </div>

        {/* Chart Tren */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <TrendingUp size={20} aria-hidden="true" />
            <h2 className={styles.sectionTitle}>Tren Hasil Panen</h2>
          </div>
          <p className={styles.chartDesc}>Satuan: kg per musim</p>
          <div className={styles.chartWrap}>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={chartData.length > 1 ? chartData : trenPanenData} margin={{ top: 8, right: 16, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#DCD2B8" vertical={false} />
                <XAxis dataKey="periode" tick={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fill: '#5F6B54' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fill: '#5F6B54' }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ fontFamily: 'Inter, sans-serif', fontSize: 13, background: '#F6F2E7', border: '1px solid #DCD2B8', borderRadius: 10, color: '#2F4A34' }}
                  formatter={(val) => [`${val ?? 0} kg`, 'Hasil Panen']}
                />
                <Line type="monotone" dataKey="hasil" stroke="#5B8A5A" strokeWidth={2.5} dot={{ r: 5, fill: '#2F4A34', strokeWidth: 2, stroke: '#F6F2E7' }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tombol Tambah */}
        <div className={styles.addRow}>
          <Button variant="primary" size="md" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Tutup Form' : (
              <><Plus size={16} aria-hidden="true" /> Tambah Riwayat Panen</>
            )}
          </Button>
        </div>

        {/* Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className={styles.formCard} noValidate>
            <h2 className={styles.formTitle}>Input Hasil Panen Baru</h2>
            <div className={styles.formGrid}>
              <Select label="Musim" value={musim} onChange={(e) => setMusim(e.target.value)}>
                <option value="">Pilih musim...</option>
                {musimOptions.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
              </Select>
              <Select label="Tahun" value={tahun} onChange={(e) => setTahun(e.target.value)}>
                <option value="">Pilih tahun...</option>
                {tahunOptions.map((y) => <option key={y} value={y}>{y}</option>)}
              </Select>
            </div>
            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="hasil-kg">Hasil Panen (kg)</label>
              <input
                id="hasil-kg"
                type="number"
                min="1"
                placeholder="Contoh: 450"
                value={hasilKg}
                onChange={(e) => setHasilKg(e.target.value)}
                className={styles.inputField}
              />
            </div>
            <div className={styles.wrapper}>
              <label className={styles.label} htmlFor="catatan-panen">Catatan (opsional)</label>
              <textarea
                id="catatan-panen"
                placeholder="Catatan kondisi kebun, cuaca, atau hal lain yang perlu diingat..."
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                className={styles.textareaField}
              />
            </div>
            <div className={styles.formActions}>
              <Button type="submit" variant="primary" size="md" loading={loading}>
                {!loading && 'Simpan Riwayat'}
              </Button>
              <Button type="button" variant="ghost" size="md" onClick={() => setShowForm(false)}>
                Batal
              </Button>
            </div>
          </form>
        )}

        {/* List Riwayat */}
        <div className={styles.listCard}>
          <h2 className={styles.sectionTitle}>Semua Riwayat Panen</h2>
          {list.length === 0 ? (
            <p className={styles.emptyText}>Belum ada data riwayat panen. Tambahkan data pertama Anda.</p>
          ) : (
            <div className={styles.listItems}>
              {list.map((r) => (
                <div key={r.id} className={styles.listItem}>
                  <div className={styles.listItemLeft}>
                    <span className={styles.listMusim}>{r.musim} {r.tahun}</span>
                    <span className={styles.listHasil}>{r.hasilKg.toLocaleString('id-ID')} kg</span>
                    {r.catatan && <span className={styles.listCatatan}>{r.catatan}</span>}
                    <span className={styles.listTanggal}>{formatTanggal(r.tanggal)}</span>
                  </div>
                  <button
                    className={styles.hapusBtn}
                    onClick={() => handleHapus(r.id)}
                    aria-label={`Hapus riwayat ${r.musim} ${r.tahun}`}
                    title="Hapus data ini"
                  >
                    <Trash2 size={16} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
