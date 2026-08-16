// Utility functions untuk KopiAdaptif

/**
 * Simulasikan loading async (untuk demo placeholder)
 * Gunakan ini sebelum menampilkan hasil dummy agar UX terasa nyata
 */
export function simulateLoading(ms: number = 800): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format tanggal ke Bahasa Indonesia
 */
export function formatTanggal(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Format angka dengan pemisah ribuan
 */
export function formatAngka(n: number): string {
  return n.toLocaleString('id-ID');
}

/**
 * Generate ID unik sederhana
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}
