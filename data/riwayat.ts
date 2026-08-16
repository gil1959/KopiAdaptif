export interface RiwayatPanen {
  id: string;
  musim: string;
  tahun: number;
  hasilKg: number;
  catatan: string;
  tanggal: string;
}

export const riwayatAwal: RiwayatPanen[] = [
  {
    id: 'r1',
    musim: 'Musim Hujan',
    tahun: 2023,
    hasilKg: 420,
    catatan: 'Hasil berkurang akibat hujan lebat saat berbunga',
    tanggal: '2023-03-15',
  },
  {
    id: 'r2',
    musim: 'Musim Kemarau',
    tahun: 2023,
    hasilKg: 680,
    catatan: 'Panen raya, cuaca sangat mendukung',
    tanggal: '2023-09-20',
  },
  {
    id: 'r3',
    musim: 'Musim Hujan',
    tahun: 2024,
    hasilKg: 310,
    catatan: 'Bunga banyak yang gugur, hasil sangat berkurang',
    tanggal: '2024-03-10',
  },
  {
    id: 'r4',
    musim: 'Musim Kemarau',
    tahun: 2024,
    hasilKg: 590,
    catatan: 'Cukup baik meski sempat ada gangguan hama',
    tanggal: '2024-09-05',
  },
];

export const trenPanenData = [
  { periode: 'HJ 2023', hasil: 420 },
  { periode: 'KM 2023', hasil: 680 },
  { periode: 'HJ 2024', hasil: 310 },
  { periode: 'KM 2024', hasil: 590 },
];
