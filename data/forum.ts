export interface Jawaban {
  id: string;
  isi: string;
  penjawab: string;
  tanggal: string;
  terverifikasi: boolean;
}

export interface Pertanyaan {
  id: string;
  penanya: string;
  desa: string;
  pertanyaan: string;
  tanggal: string;
  jawaban: Jawaban[];
}

export const forumDummy: Pertanyaan[] = [
  {
    id: 'f1',
    penanya: 'Pak Suharto',
    desa: 'Tebat Monok',
    pertanyaan: 'Bunga kopi saya banyak yang gugur setelah hujan deras kemarin. Apa yang harus saya lakukan?',
    tanggal: '2024-11-10',
    jawaban: [
      {
        id: 'j1a',
        isi: 'Setelah hujan deras, segera pasang naungan untuk melindungi bunga yang tersisa. Bisa gunakan paranet 55 persen atau terpal tipis yang tidak terlalu menghalangi sinar matahari. Lakukan juga penyemprotan fungisida ringan untuk mencegah jamur pada bekas luka rontok.',
        penjawab: 'Penyuluh Muhamad Iqbal',
        tanggal: '2024-11-10',
        terverifikasi: true,
      },
      {
        id: 'j1b',
        isi: 'Saya juga pernah mengalami hal yang sama, Pak. Setelah saya pasang paranet, bunga yang tersisa bisa bertahan dan akhirnya jadi buah. Semoga berhasil.',
        penjawab: 'Bu Warsih',
        tanggal: '2024-11-11',
        terverifikasi: false,
      },
    ],
  },
  {
    id: 'f2',
    penanya: 'Bu Sari',
    desa: 'Kepahiang',
    pertanyaan: 'Apakah ada cara alami untuk memperkuat ketahanan bunga kopi agar tidak mudah gugur?',
    tanggal: '2024-11-08',
    jawaban: [
      {
        id: 'j2a',
        isi: 'Ada beberapa cara alami yang bisa dicoba. Pertama, pupuk organik berbasis kalium tinggi membantu memperkuat dinding sel bunga. Kedua, mulsa organik di sekitar pohon menjaga kelembaban tanah tetap stabil sehingga pohon tidak stres. Ketiga, hindari pemangkasan saat tanaman sedang dalam fase berbunga.',
        penjawab: 'Penyuluh Dewi Rahayu',
        tanggal: '2024-11-09',
        terverifikasi: true,
      },
    ],
  },
  {
    id: 'f3',
    penanya: 'Pak Darmanto',
    desa: 'Bermani Ilir',
    pertanyaan: 'Kebun saya sering tergenang air saat hujan. Bagaimana cara membuat drainase yang baik dengan biaya murah?',
    tanggal: '2024-11-05',
    jawaban: [
      {
        id: 'j3a',
        isi: 'Cara paling ekonomis adalah membuat parit batu di sepanjang barisan tanaman. Gali parit sedalam 30 cm dan lebar 20 cm, lalu isi bagian bawah dengan batu kerikil. Parit ini bisa mengalirkan air hujan berlebih dengan efektif tanpa biaya mahal.',
        penjawab: 'Penyuluh Muhamad Iqbal',
        tanggal: '2024-11-06',
        terverifikasi: true,
      },
      {
        id: 'j3b',
        isi: 'Saya juga buat sistem terasering di lahan miring. Efektif sekali mengurangi genangan dan erosi, Pak.',
        penjawab: 'Pak Bambang',
        tanggal: '2024-11-07',
        terverifikasi: false,
      },
    ],
  },
  {
    id: 'f4',
    penanya: 'Bu Lastri',
    desa: 'Tebat Monok',
    pertanyaan: 'Kapan waktu terbaik untuk memangkas pohon kopi? Apakah boleh saat musim hujan?',
    tanggal: '2024-11-03',
    jawaban: [
      {
        id: 'j4a',
        isi: 'Waktu terbaik memangkas adalah setelah panen selesai dan saat cuaca cukup cerah. Hindari memangkas saat musim hujan tinggi karena luka pangkas akan lama kering dan rentan terinfeksi jamur. Jika terpaksa memangkas di musim hujan, segera olesi bekas potongan dengan fungisida.',
        penjawab: 'Penyuluh Dewi Rahayu',
        tanggal: '2024-11-04',
        terverifikasi: true,
      },
    ],
  },
  {
    id: 'f5',
    penanya: 'Pak Hendra',
    desa: 'Seberang Musi',
    pertanyaan: 'Ada tidak aplikasi atau cara mudah untuk tahu kapan musim hujan akan datang di desa kami?',
    tanggal: '2024-10-30',
    jawaban: [
      {
        id: 'j5a',
        isi: 'Selain KopiAdaptif ini, Anda bisa cek BMKG melalui aplikasi InfoBMKG di HP. Juga ada website bmkg.go.id yang menyediakan prakiraan cuaca per kecamatan. Biasakan cek prakiraan 7 hari ke depan setiap minggu untuk persiapan.',
        penjawab: 'Penyuluh Muhamad Iqbal',
        tanggal: '2024-10-31',
        terverifikasi: true,
      },
    ],
  },
];
