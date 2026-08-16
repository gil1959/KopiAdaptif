import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ToastProvider } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: {
    default: 'KopiAdaptif — Pendamping Adaptasi Iklim Petani Kopi',
    template: '%s | KopiAdaptif',
  },
  description:
    'Platform AI untuk membantu petani kopi di Kepahiang, Bengkulu beradaptasi dengan perubahan iklim. Cek risiko gagal bunga, dapatkan rekomendasi aksi, dan pantau tren panen Anda.',
  keywords: ['kopi', 'petani', 'adaptasi iklim', 'curah hujan', 'Kepahiang', 'Bengkulu'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ToastProvider>
          <div className="dynamic-bg" aria-hidden="true" />
          <Navbar />
          <main className="page-enter" style={{ paddingBottom: '0', minHeight: 'calc(100vh - 64px)' }}>
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
