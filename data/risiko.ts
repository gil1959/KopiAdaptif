// Data dummy status risiko berdasarkan desa dan fase pertumbuhan

export type StatusRisiko = 'aman' | 'waspada' | 'risiko-tinggi';
export type FasePertumbuhan = 'vegetatif' | 'berbunga' | 'panen';

interface RisikoData {
  status: StatusRisiko;
  label: string;
  penjelasan: string;
  suhuRataRata: string;
  curahHujanPrediksi: string;
}

const risikoMap: Record<string, Record<FasePertumbuhan, RisikoData>> = {
  'tebat-monok': {
    vegetatif: {
      status: 'aman',
      label: 'Aman',
      penjelasan: 'Curah hujan dalam 14 hari ke depan diprediksi normal. Fase vegetatif berjalan baik, pertumbuhan daun dan batang tidak terganggu.',
      suhuRataRata: '22°C',
      curahHujanPrediksi: '85 mm',
    },
    berbunga: {
      status: 'waspada',
      label: 'Waspada',
      penjelasan: 'Prediksi curah hujan cukup tinggi pada 5 hari ke depan. Bunga kopi rentan gugur jika hujan deras turun berturut-turut. Pertimbangkan pasang naungan sementara.',
      suhuRataRata: '21°C',
      curahHujanPrediksi: '140 mm',
    },
    panen: {
      status: 'aman',
      label: 'Aman',
      penjelasan: 'Cuaca mendukung proses panen. Tidak ada prediksi hujan deras yang akan mengganggu proses petik dan penjemuran biji kopi.',
      suhuRataRata: '23°C',
      curahHujanPrediksi: '60 mm',
    },
  },
  'kepahiang': {
    vegetatif: {
      status: 'aman',
      label: 'Aman',
      penjelasan: 'Kondisi cuaca stabil untuk pertumbuhan vegetatif. Kelembaban dan suhu dalam rentang ideal untuk perkembangan akar dan batang.',
      suhuRataRata: '21°C',
      curahHujanPrediksi: '90 mm',
    },
    berbunga: {
      status: 'risiko-tinggi',
      label: 'Risiko Tinggi',
      penjelasan: 'Prediksi curah hujan sangat tinggi dalam 7 hari ke depan, berpotensi menggugurkan bunga kopi sebelum sempat berbuah. Segera ambil tindakan pencegahan.',
      suhuRataRata: '20°C',
      curahHujanPrediksi: '210 mm',
    },
    panen: {
      status: 'waspada',
      label: 'Waspada',
      penjelasan: 'Ada potensi hujan pada akhir minggu. Prioritaskan pemetikan buah yang sudah matang sebelum hujan tiba agar tidak terjadi kerusakan.',
      suhuRataRata: '22°C',
      curahHujanPrediksi: '120 mm',
    },
  },
  'bermani-ilir': {
    vegetatif: {
      status: 'waspada',
      label: 'Waspada',
      penjelasan: 'Curah hujan diprediksi di atas rata-rata. Perhatikan drainase kebun agar akar tidak tergenang selama fase pertumbuhan vegetatif.',
      suhuRataRata: '20°C',
      curahHujanPrediksi: '155 mm',
    },
    berbunga: {
      status: 'risiko-tinggi',
      label: 'Risiko Tinggi',
      penjelasan: 'Potensi hujan lebat sangat tinggi. Fase berbunga adalah periode paling rentan. Pertimbangkan untuk menunda pemupukan dan siapkan naungan darurat.',
      suhuRataRata: '19°C',
      curahHujanPrediksi: '240 mm',
    },
    panen: {
      status: 'aman',
      label: 'Aman',
      penjelasan: 'Cuaca cerah mendukung panen dan penjemuran. Manfaatkan kondisi ini untuk mempercepat proses pasca panen.',
      suhuRataRata: '24°C',
      curahHujanPrediksi: '45 mm',
    },
  },
  'ujan-mas': {
    vegetatif: {
      status: 'aman',
      label: 'Aman',
      penjelasan: 'Kondisi ideal untuk pertumbuhan vegetatif. Lanjutkan program pemupukan sesuai jadwal.',
      suhuRataRata: '22°C',
      curahHujanPrediksi: '80 mm',
    },
    berbunga: {
      status: 'waspada',
      label: 'Waspada',
      penjelasan: 'Curah hujan cukup tinggi pada pertengahan minggu. Pantau kondisi bunga setiap hari dan siap ambil tindakan jika hujan makin lebat.',
      suhuRataRata: '21°C',
      curahHujanPrediksi: '130 mm',
    },
    panen: {
      status: 'aman',
      label: 'Aman',
      penjelasan: 'Waktu panen sangat mendukung. Lakukan pemetikan secara bertahap dan manfaatkan cuaca cerah untuk penjemuran.',
      suhuRataRata: '23°C',
      curahHujanPrediksi: '55 mm',
    },
  },
  'seberang-musi': {
    vegetatif: {
      status: 'risiko-tinggi',
      label: 'Risiko Tinggi',
      penjelasan: 'Curah hujan ekstrem diprediksi akan melanda wilayah ini. Kebun berisiko tergenang. Perbaiki saluran drainase segera.',
      suhuRataRata: '19°C',
      curahHujanPrediksi: '270 mm',
    },
    berbunga: {
      status: 'risiko-tinggi',
      label: 'Risiko Tinggi',
      penjelasan: 'Kondisi sangat berisiko untuk fase berbunga. Hujan deras berkepanjangan hampir pasti akan menggugurkan bunga. Konsultasikan dengan penyuluh segera.',
      suhuRataRata: '18°C',
      curahHujanPrediksi: '290 mm',
    },
    panen: {
      status: 'waspada',
      label: 'Waspada',
      penjelasan: 'Ada jendela cuaca baik di awal minggu. Maksimalkan panen di periode tersebut sebelum hujan kembali turun.',
      suhuRataRata: '21°C',
      curahHujanPrediksi: '110 mm',
    },
  },
  'merigi': {
    vegetatif: { status: 'aman', label: 'Aman', penjelasan: 'Cuaca mendukung pertumbuhan vegetatif. Teruskan perawatan rutin.', suhuRataRata: '22°C', curahHujanPrediksi: '75 mm' },
    berbunga: { status: 'waspada', label: 'Waspada', penjelasan: 'Hujan sedang diprediksi. Pantau perkembangan bunga dan siapkan naungan darurat.', suhuRataRata: '21°C', curahHujanPrediksi: '125 mm' },
    panen: { status: 'aman', label: 'Aman', penjelasan: 'Kondisi panen baik. Lanjutkan pemetikan sesuai rencana.', suhuRataRata: '23°C', curahHujanPrediksi: '50 mm' },
  },
  'kabawetan': {
    vegetatif: { status: 'waspada', label: 'Waspada', penjelasan: 'Curah hujan di atas rata-rata. Perhatikan drainase kebun.', suhuRataRata: '20°C', curahHujanPrediksi: '145 mm' },
    berbunga: { status: 'aman', label: 'Aman', penjelasan: 'Kondisi relatif aman untuk berbunga. Tetap pantau prakiraan cuaca harian.', suhuRataRata: '21°C', curahHujanPrediksi: '95 mm' },
    panen: { status: 'aman', label: 'Aman', penjelasan: 'Cuaca cerah mendukung panen. Waktu ideal untuk proses petik dan jemur.', suhuRataRata: '23°C', curahHujanPrediksi: '40 mm' },
  },
};

// Default fallback
const defaultRisiko: RisikoData = {
  status: 'waspada',
  label: 'Waspada',
  penjelasan: 'Data lokasi tidak ditemukan. Gunakan kondisi waspada sebagai panduan umum.',
  suhuRataRata: '21°C',
  curahHujanPrediksi: '120 mm',
};

export function getRisikoData(desaId: string, fase: FasePertumbuhan): RisikoData {
  return risikoMap[desaId]?.[fase] ?? defaultRisiko;
}

// Data grafik curah hujan 14 hari dummy per status
export const curahHujanData: Record<StatusRisiko, { hari: string; curah: number }[]> = {
  aman: [
    { hari: 'H+1', curah: 4 }, { hari: 'H+2', curah: 0 }, { hari: 'H+3', curah: 8 },
    { hari: 'H+4', curah: 2 }, { hari: 'H+5', curah: 0 }, { hari: 'H+6', curah: 5 },
    { hari: 'H+7', curah: 12 }, { hari: 'H+8', curah: 3 }, { hari: 'H+9', curah: 0 },
    { hari: 'H+10', curah: 1 }, { hari: 'H+11', curah: 6 }, { hari: 'H+12', curah: 0 },
    { hari: 'H+13', curah: 4 }, { hari: 'H+14', curah: 2 },
  ],
  waspada: [
    { hari: 'H+1', curah: 18 }, { hari: 'H+2', curah: 24 }, { hari: 'H+3', curah: 8 },
    { hari: 'H+4', curah: 32 }, { hari: 'H+5', curah: 28 }, { hari: 'H+6', curah: 5 },
    { hari: 'H+7', curah: 14 }, { hari: 'H+8', curah: 20 }, { hari: 'H+9', curah: 35 },
    { hari: 'H+10', curah: 10 }, { hari: 'H+11', curah: 6 }, { hari: 'H+12', curah: 22 },
    { hari: 'H+13', curah: 18 }, { hari: 'H+14', curah: 9 },
  ],
  'risiko-tinggi': [
    { hari: 'H+1', curah: 45 }, { hari: 'H+2', curah: 62 }, { hari: 'H+3', curah: 38 },
    { hari: 'H+4', curah: 75 }, { hari: 'H+5', curah: 58 }, { hari: 'H+6', curah: 42 },
    { hari: 'H+7', curah: 80 }, { hari: 'H+8', curah: 55 }, { hari: 'H+9', curah: 30 },
    { hari: 'H+10', curah: 68 }, { hari: 'H+11', curah: 72 }, { hari: 'H+12', curah: 48 },
    { hari: 'H+13', curah: 35 }, { hari: 'H+14', curah: 25 },
  ],
};
