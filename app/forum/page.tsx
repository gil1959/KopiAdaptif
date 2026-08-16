'use client';

import React, { useState } from 'react';
import { ShieldCheck, Send, Plus, X } from 'lucide-react';
import { forumDummy, type Pertanyaan } from '@/data/forum';
import Button from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import { simulateLoading, generateId, formatTanggal } from '@/lib/utils';
import styles from './page.module.css';

export default function ForumPage() {
  const { showToast } = useToast();
  const [list, setList] = useState<Pertanyaan[]>(forumDummy);
  const [showForm, setShowForm] = useState(false);
  const [penanya, setPenanya] = useState('');
  const [desa, setDesa] = useState('');
  const [pertanyaan, setPertanyaan] = useState('');
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!penanya.trim() || !pertanyaan.trim()) {
      showToast('Nama dan pertanyaan tidak boleh kosong', 'error');
      return;
    }
    setLoading(true);
    await simulateLoading(900);
    const baru: Pertanyaan = {
      id: generateId(),
      penanya: penanya.trim(),
      desa: desa.trim() || 'Kepahiang',
      pertanyaan: pertanyaan.trim(),
      tanggal: new Date().toISOString().split('T')[0],
      jawaban: [],
    };
    setList((prev) => [baru, ...prev]);
    setPenanya(''); setDesa(''); setPertanyaan('');
    setLoading(false);
    setShowForm(false);
    showToast('Pertanyaan Anda berhasil dikirim dan menunggu moderasi', 'success');
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Forum Tanya Jawab Petani</h1>
          <p className={styles.pageDesc}>
            Tempat berbagi pengalaman dan berdiskusi dengan sesama petani kopi serta penyuluh pertanian.
          </p>
          <p className={styles.moderasiNote}>
            Forum ini dimoderasi oleh penyuluh pertanian terlatih. Setiap pertanyaan akan ditinjau sebelum ditampilkan.
          </p>
        </div>

        {/* Tombol Tambah */}
        <div className={styles.addRow}>
          <Button variant="primary" size="md" onClick={() => setShowForm(!showForm)}>
            {showForm
              ? <><X size={16} aria-hidden="true" /> Tutup Form</>
              : <><Plus size={16} aria-hidden="true" /> Ajukan Pertanyaan</>
            }
          </Button>
        </div>

        {/* Form Pertanyaan */}
        {showForm && (
          <form onSubmit={handleSubmit} className={styles.formCard} noValidate>
            <h2 className={styles.formTitle}>Ajukan Pertanyaan Baru</h2>
            <div className={styles.formGrid}>
              <div className={styles.fieldWrap}>
                <label className={styles.label} htmlFor="nama-penanya">Nama Anda</label>
                <input
                  id="nama-penanya"
                  type="text"
                  placeholder="Contoh: Pak Suryo"
                  value={penanya}
                  onChange={(e) => setPenanya(e.target.value)}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.fieldWrap}>
                <label className={styles.label} htmlFor="desa-penanya">Desa (opsional)</label>
                <input
                  id="desa-penanya"
                  type="text"
                  placeholder="Contoh: Tebat Monok"
                  value={desa}
                  onChange={(e) => setDesa(e.target.value)}
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={styles.fieldWrap}>
              <label className={styles.label} htmlFor="isi-pertanyaan">Pertanyaan</label>
              <textarea
                id="isi-pertanyaan"
                placeholder="Tulis pertanyaan Anda tentang kebun kopi, cuaca, hama, atau hal lain yang ingin Anda tanyakan..."
                value={pertanyaan}
                onChange={(e) => setPertanyaan(e.target.value)}
                className={styles.textareaField}
                rows={4}
              />
            </div>
            <div className={styles.formActions}>
              <Button type="submit" variant="primary" size="md" loading={loading}>
                {!loading && <><Send size={15} aria-hidden="true" /> Kirim Pertanyaan</>}
              </Button>
              <Button type="button" variant="ghost" size="md" onClick={() => setShowForm(false)}>
                Batal
              </Button>
            </div>
          </form>
        )}

        {/* List Pertanyaan */}
        <div className={styles.forumList}>
          {list.map((item) => (
            <div key={item.id} className={styles.forumCard}>
              <div className={styles.forumHeader}>
                <div className={styles.forumMeta}>
                  <span className={styles.forumPenanya}>{item.penanya}</span>
                  <span className={styles.forumDot} aria-hidden="true" />
                  <span className={styles.forumDesa}>{item.desa}</span>
                  <span className={styles.forumDot} aria-hidden="true" />
                  <span className={styles.forumTanggal}>{formatTanggal(item.tanggal)}</span>
                </div>
                {item.jawaban.length > 0 && (
                  <span className={styles.jawabanBadge}>{item.jawaban.length} jawaban</span>
                )}
              </div>

              <p className={styles.forumPertanyaan}>{item.pertanyaan}</p>

              {/* Jawaban */}
              {item.jawaban.length > 0 && (
                <div className={styles.jawabanSection}>
                  <button
                    className={styles.toggleJawaban}
                    onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                    aria-expanded={expanded === item.id}
                  >
                    {expanded === item.id ? 'Sembunyikan jawaban' : `Lihat ${item.jawaban.length} jawaban`}
                    <svg
                      width="14" height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transform: expanded === item.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 200ms ease-out' }}
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {expanded === item.id && (
                    <div className={styles.jawabanList}>
                      {item.jawaban.map((j) => (
                        <div key={j.id} className={[styles.jawabanCard, j.terverifikasi ? styles.jawabanVerified : ''].join(' ')}>
                          <div className={styles.jawabanHeader}>
                            <span className={styles.jawabanPenjawab}>{j.penjawab}</span>
                            {j.terverifikasi && (
                              <span className={styles.verifiedBadge}>
                                <ShieldCheck size={12} aria-hidden="true" />
                                Terverifikasi Penyuluh
                              </span>
                            )}
                            <span className={styles.jawabanTanggal}>{formatTanggal(j.tanggal)}</span>
                          </div>
                          <p className={styles.jawabanIsi}>{j.isi}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {item.jawaban.length === 0 && (
                <span className={styles.belumDijawab}>Belum ada jawaban. Jadilah yang pertama menjawab.</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
