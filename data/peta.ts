export type StatusKebun = 'aman' | 'waspada' | 'risiko-tinggi';

export interface TitikKebun {
  id: string;
  namaPetani: string;
  desa: string;
  luas: string;
  status: StatusKebun;
  fase: string;
  catatan: string;
  cx: number;
  cy: number;
}

export const titikKebunData: TitikKebun[] = [
  {
    id: 'k1',
    namaPetani: 'Pak Suharto',
    desa: 'Tebat Monok',
    luas: '1.2 Ha',
    status: 'aman',
    fase: 'Panen',
    catatan: 'Panen berjalan lancar, cuaca mendukung',
    cx: 180,
    cy: 130,
  },
  {
    id: 'k2',
    namaPetani: 'Bu Sari',
    desa: 'Kepahiang',
    luas: '0.8 Ha',
    status: 'risiko-tinggi',
    fase: 'Berbunga',
    catatan: 'Bunga mulai gugur, perlu naungan segera',
    cx: 280,
    cy: 180,
  },
  {
    id: 'k3',
    namaPetani: 'Pak Darmanto',
    desa: 'Bermani Ilir',
    luas: '2.0 Ha',
    status: 'waspada',
    fase: 'Berbunga',
    catatan: 'Hujan sering, perlu pantau terus',
    cx: 150,
    cy: 250,
  },
  {
    id: 'k4',
    namaPetani: 'Bu Warsih',
    desa: 'Ujan Mas',
    luas: '0.6 Ha',
    status: 'aman',
    fase: 'Vegetatif',
    catatan: 'Pertumbuhan baik, daun segar',
    cx: 320,
    cy: 280,
  },
  {
    id: 'k5',
    namaPetani: 'Pak Hendra',
    desa: 'Seberang Musi',
    luas: '1.5 Ha',
    status: 'risiko-tinggi',
    fase: 'Berbunga',
    catatan: 'Curah hujan ekstrem, banyak bunga gugur',
    cx: 100,
    cy: 190,
  },
  {
    id: 'k6',
    namaPetani: 'Bu Ratna',
    desa: 'Merigi',
    luas: '1.0 Ha',
    status: 'waspada',
    fase: 'Vegetatif',
    catatan: 'Drainase kurang baik, perlu perbaikan',
    cx: 230,
    cy: 320,
  },
  {
    id: 'k7',
    namaPetani: 'Pak Bambang',
    desa: 'Kabawetan',
    luas: '1.8 Ha',
    status: 'aman',
    fase: 'Panen',
    catatan: 'Panen raya, hasil sangat baik tahun ini',
    cx: 370,
    cy: 150,
  },
  {
    id: 'k8',
    namaPetani: 'Bu Lastri',
    desa: 'Tebat Monok',
    luas: '0.5 Ha',
    status: 'waspada',
    fase: 'Berbunga',
    catatan: 'Beberapa bunga mulai rontok',
    cx: 200,
    cy: 90,
  },
];

export const statusKebunConfig: Record<StatusKebun, { label: string; color: string; bgColor: string; borderColor: string }> = {
  aman: {
    label: 'Aman',
    color: '#5B8A5A',
    bgColor: '#E9F1E5',
    borderColor: '#5B8A5A',
  },
  waspada: {
    label: 'Waspada',
    color: '#D9A441',
    bgColor: '#FBF2DF',
    borderColor: '#D9A441',
  },
  'risiko-tinggi': {
    label: 'Risiko Tinggi',
    color: '#A8462F',
    bgColor: '#F7E8E2',
    borderColor: '#A8462F',
  },
};
