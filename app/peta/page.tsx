'use client';

import React, { useState } from 'react';
import { titikKebunData, statusKebunConfig, type TitikKebun } from '@/data/peta';
import Modal from '@/components/ui/Modal';
import { StatusChip } from '@/components/ui/Chip';
import styles from './page.module.css';

export default function PetaPage() {
  const [selected, setSelected] = useState<TitikKebun | null>(null);

  function handleTitikClick(kebun: TitikKebun) {
    setSelected(kebun);
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.pageTitle}>Peta Kolektif Status Kebun</h1>
          <p className={styles.pageDesc}>
            Status kondisi kebun di seluruh wilayah Kepahiang. Data bersifat anonim dan diperbarui secara berkala. Klik titik untuk melihat informasi lebih lanjut.
          </p>
        </div>

        <div className={styles.petaLayout}>
          {/* SVG Peta */}
          <div className={styles.petaWrap}>
            <svg
              viewBox="0 0 480 400"
              className={styles.petaSvg}
              aria-label="Peta wilayah Kepahiang"
              role="img"
            >
              {/* Background wilayah */}
              <rect width="480" height="400" fill="#E4EBDD" rx="16"/>

              {/* Kontur sederhana wilayah Kepahiang */}
              <path
                d="M60 80 L120 50 L200 60 L280 45 L360 70 L420 100 L440 160 L420 230 L380 300 L320 350 L240 370 L160 355 L90 320 L60 260 L40 180 Z"
                fill="#D0DEC8"
                stroke="#B7C9A8"
                strokeWidth="2"
              />

              {/* Sungai dummy */}
              <path
                d="M150 100 Q200 150 240 200 Q270 240 300 290"
                fill="none"
                stroke="#7FA06E"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.5"
              />

              {/* Label wilayah */}
              <text x="230" y="200" textAnchor="middle" fill="#5F6B54" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600" opacity="0.6">Kepahiang</text>

              {/* Jalan dummy */}
              <path
                d="M100 200 L240 200 L380 200"
                fill="none"
                stroke="#C6B98F"
                strokeWidth="2"
                strokeDasharray="8 4"
                opacity="0.7"
              />
              <path
                d="M240 80 L240 320"
                fill="none"
                stroke="#C6B98F"
                strokeWidth="2"
                strokeDasharray="8 4"
                opacity="0.5"
              />

              {/* Titik Kebun */}
              {titikKebunData.map((kebun) => {
                const cfg = statusKebunConfig[kebun.status];
                return (
                  <g key={kebun.id} onClick={() => handleTitikClick(kebun)} style={{ cursor: 'pointer' }}>
                    {/* Lingkaran luar (pulse) */}
                    <circle
                      cx={kebun.cx}
                      cy={kebun.cy}
                      r="18"
                      fill={cfg.color}
                      opacity="0.2"
                      className={styles.pulseCircle}
                    />
                    {/* Titik utama */}
                    <circle
                      cx={kebun.cx}
                      cy={kebun.cy}
                      r="11"
                      fill={cfg.color}
                      stroke="#F6F2E7"
                      strokeWidth="2.5"
                      className={styles.titikKebun}
                    />
                    {/* Label nama */}
                    <text
                      x={kebun.cx}
                      y={kebun.cy + 26}
                      textAnchor="middle"
                      fill="#2F4A34"
                      fontSize="10"
                      fontFamily="Inter, sans-serif"
                      fontWeight="600"
                    >
                      {kebun.namaPetani.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <div className={styles.legend}>
            <h2 className={styles.legendTitle}>Keterangan Status</h2>
            <div className={styles.legendItems}>
              {Object.entries(statusKebunConfig).map(([key, cfg]) => (
                <div key={key} className={styles.legendItem}>
                  <div
                    className={styles.legendDot}
                    style={{ backgroundColor: cfg.color }}
                    aria-hidden="true"
                  />
                  <div className={styles.legendText}>
                    <span className={styles.legendLabel}>{cfg.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.legendStats}>
              <h3 className={styles.legendStatsTitle}>Ringkasan Wilayah</h3>
              {Object.entries(statusKebunConfig).map(([key, cfg]) => {
                const count = titikKebunData.filter((k) => k.status === key).length;
                return (
                  <div key={key} className={styles.statRow}>
                    <div className={styles.statDot} style={{ backgroundColor: cfg.color }} />
                    <span className={styles.statLabel}>{cfg.label}</span>
                    <span className={styles.statCount}>{count} kebun</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className={styles.footerNote}>
          Data peta bersifat ilustratif dan anonim. Titik lokasi tidak menunjukkan koordinat GPS yang akurat. Seluruh informasi hanya digunakan untuk gambaran umum kondisi wilayah.
        </p>
      </div>

      {/* Modal Detail Kebun */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={`Kebun ${selected?.namaPetani ?? ''}`}
      >
        {selected && (
          <div className={styles.modalContent}>
            <div className={styles.modalRow}>
              <span className={styles.modalLabel}>Status Kebun</span>
              <StatusChip
                label={statusKebunConfig[selected.status].label}
                status={selected.status === 'aman' ? 'success' : selected.status === 'waspada' ? 'warning' : 'error'}
              />
            </div>
            <div className={styles.modalRow}>
              <span className={styles.modalLabel}>Desa</span>
              <span className={styles.modalValue}>{selected.desa}</span>
            </div>
            <div className={styles.modalRow}>
              <span className={styles.modalLabel}>Luas Kebun</span>
              <span className={styles.modalValue}>{selected.luas}</span>
            </div>
            <div className={styles.modalRow}>
              <span className={styles.modalLabel}>Fase Tanaman</span>
              <span className={styles.modalValue}>{selected.fase}</span>
            </div>
            <div className={styles.modalNote}>
              <span className={styles.modalLabel}>Catatan</span>
              <p className={styles.modalNoteText}>{selected.catatan}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
