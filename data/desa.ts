// Data dummy desa-desa di Kepahiang, Bengkulu

export interface Desa {
  id: string;
  nama: string;
  kecamatan: string;
}

export const listDesa: Desa[] = [
  { id: 'tebat-monok', nama: 'Tebat Monok', kecamatan: 'Kepahiang' },
  { id: 'kepahiang', nama: 'Kepahiang', kecamatan: 'Kepahiang' },
  { id: 'bermani-ilir', nama: 'Bermani Ilir', kecamatan: 'Bermani Ilir' },
  { id: 'ujan-mas', nama: 'Ujan Mas', kecamatan: 'Ujan Mas' },
  { id: 'seberang-musi', nama: 'Seberang Musi', kecamatan: 'Seberang Musi' },
  { id: 'merigi', nama: 'Merigi', kecamatan: 'Merigi' },
  { id: 'kabawetan', nama: 'Kabawetan', kecamatan: 'Kabawetan' },
];
