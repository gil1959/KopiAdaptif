import { StatusRisiko } from './risiko';

export interface RekomendasiItem {
  id: string;
  judul: string;
  deskripsi: string;
  aksi: string;
  waktu: string;
  varian: 'eco' | 'elevated' | 'default';
}

export const rekomendasiMap: Record<StatusRisiko, RekomendasiItem[]> = {
  aman: [
    {
      id: 'aman-1',
      judul: 'Lanjutkan Perawatan Rutin',
      deskripsi: 'Kondisi cuaca mendukung pertumbuhan normal. Lanjutkan jadwal pemupukan, pemangkasan ringan, dan pembersihan gulma sesuai kalender tanam.',
      aksi: 'Jadwalkan pemupukan dalam 3 hari ke depan',
      waktu: 'Sekarang hingga 7 hari ke depan',
      varian: 'eco',
    },
    {
      id: 'aman-2',
      judul: 'Waktu Ideal Pemangkasan',
      deskripsi: 'Cuaca cerah dan kelembaban rendah membuat kondisi ini sangat baik untuk pemangkasan cabang yang tidak produktif. Luka pangkas cepat kering dan tidak mudah terinfeksi jamur.',
      aksi: 'Lakukan pemangkasan pada pagi hari',
      waktu: '2 hingga 5 hari ke depan',
      varian: 'elevated',
    },
    {
      id: 'aman-3',
      judul: 'Optimalkan Sistem Drainase',
      deskripsi: 'Manfaatkan periode cuaca baik ini untuk memperbaiki dan membersihkan saluran drainase kebun. Drainase yang baik akan melindungi tanaman saat hujan deras tiba.',
      aksi: 'Periksa dan bersihkan saluran air',
      waktu: 'Dalam minggu ini',
      varian: 'default',
    },
  ],
  waspada: [
    {
      id: 'waspada-1',
      judul: 'Siapkan Naungan Sementara',
      deskripsi: 'Curah hujan diprediksi meningkat dalam beberapa hari ke depan. Pasang naungan sementara di atas tanaman yang sedang berbunga untuk melindungi bunga dari rontok akibat hantaman hujan deras.',
      aksi: 'Pasang paranet atau terpal naungan',
      waktu: 'Segera dalam 1 sampai 2 hari',
      varian: 'eco',
    },
    {
      id: 'waspada-2',
      judul: 'Tunda Pemupukan Kimia',
      deskripsi: 'Hujan deras akan menyebabkan pupuk kimia tercuci sebelum diserap tanaman. Tunda pemupukan hingga cuaca stabil kembali agar tidak membuang biaya dan merusak keseimbangan tanah.',
      aksi: 'Simpan pupuk, jadwal ulang setelah cuaca membaik',
      waktu: 'Tunda 5 hingga 7 hari',
      varian: 'elevated',
    },
    {
      id: 'waspada-3',
      judul: 'Perkuat Drainase Kebun',
      deskripsi: 'Pastikan tidak ada genangan air di sekitar pohon kopi. Buat parit kecil di sekitar barisan tanaman untuk mengalirkan air hujan berlebih agar akar tidak membusuk.',
      aksi: 'Buat atau perdalam parit drainase',
      waktu: 'Dalam 2 hari ke depan',
      varian: 'default',
    },
  ],
  'risiko-tinggi': [
    {
      id: 'tinggi-1',
      judul: 'Lindungi Bunga Segera',
      deskripsi: 'Risiko gugurnya bunga kopi sangat tinggi. Pasang naungan darurat sekarang. Prioritaskan pohon yang sudah dalam fase berbunga penuh karena paling rentan terhadap hantaman hujan.',
      aksi: 'Pasang naungan darurat hari ini',
      waktu: 'Hari ini juga, jangan ditunda',
      varian: 'eco',
    },
    {
      id: 'tinggi-2',
      judul: 'Konsultasi dengan Penyuluh',
      deskripsi: 'Kondisi ekstrem ini memerlukan panduan khusus dari tenaga ahli. Hubungi penyuluh pertanian di kecamatan untuk mendapatkan rekomendasi penanganan darurat yang sesuai dengan kondisi kebun Anda.',
      aksi: 'Hubungi penyuluh pertanian setempat',
      waktu: 'Segera hari ini',
      varian: 'elevated',
    },
    {
      id: 'tinggi-3',
      judul: 'Dokumentasikan Kondisi Kebun',
      deskripsi: 'Catat dan foto kondisi kebun sebelum dan sesudah hujan deras. Dokumentasi ini penting untuk klaim asuransi pertanian, laporan ke penyuluh, dan evaluasi strategi tanam ke depan.',
      aksi: 'Foto dan catat kondisi setiap hari',
      waktu: 'Mulai sekarang selama periode berisiko',
      varian: 'default',
    },
  ],
};
