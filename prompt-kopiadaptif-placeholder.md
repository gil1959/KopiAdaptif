# Prompt Pembuatan Website — KopiAdaptif (Versi Placeholder)

Gunakan prompt ini untuk AI coding agent. Tujuannya membangun kerangka website terlebih dahulu, seluruh data dan logic masih placeholder/dummy, belum terhubung ke API atau database sungguhan.

---

## Konteks Project

Nama produk: **KopiAdaptif**

KopiAdaptif adalah website AI pendamping adaptasi iklim untuk petani kopi. Petani kopi di Kepahiang, Bengkulu kehilangan hingga 80 persen hasil panen karena curah hujan ekstrem menggugurkan bunga kopi sebelum sempat berbuah. Website ini menggabungkan data curah hujan historis dan prediksi cuaca dengan rekomendasi AI, membantu petani menentukan waktu aman untuk berbunga, memangkas, atau mengambil tindakan pencegahan.

Target pengguna utama adalah petani, bukan developer. UI harus sangat sederhana, ikon besar, teks minim, Bahasa Indonesia yang mudah dipahami.

## Wajib Dibaca Sebelum Mulai

Sebelum menulis satu baris code pun, agent wajib membaca dan mengikuti dua dokumen berikut sampai tuntas:

1. `AGENT.md` — aturan kerja, wajib buat Implementation Plan dulu sebelum eksekusi, dilarang mengubah code tanpa konfirmasi, dilarang keluar dari scope.
2. `design.md` (Kopi Bumi) — design system wajib diikuti, warna hijau dan coklat, tipografi Fraunces + Inter, radius membulat, animasi di setiap interaksi, dilarang emoji, dilarang tanda hubung dekoratif, dilarang alert bawaan browser.

Semua keputusan visual dalam pembuatan placeholder ini harus merujuk ke `design.md`, tidak boleh berimprovisasi warna atau font sendiri.

## Scope Tahap Ini: Placeholder Saja

Tahap ini hanya membangun kerangka halaman dan komponen visual. Yang dimaksud placeholder:

- Semua data (curah hujan, status risiko, riwayat panen, peta kolektif, isi forum) memakai data dummy/statis yang ditulis langsung di code, bukan dari API atau database sungguhan.
- Semua interaksi utama (submit form, kirim pertanyaan forum, filter peta) cukup mengubah state di frontend saja, tidak perlu terhubung backend.
- Tetap wajib mengikuti aturan animasi dan loading state dari `design.md` meskipun datanya dummy, misal tombol submit tetap menampilkan loading state 800ms sebelum menampilkan hasil dummy, supaya alur terasa nyata.
- Struktur folder dan komponen dibuat serapi mungkin supaya nanti gampang disambungkan ke API/database sungguhan di tahap berikutnya.

Jangan implementasikan logic AI sungguhan, jangan implementasikan autentikasi sungguhan, jangan implementasikan database sungguhan pada tahap ini.

## Halaman dan Fitur yang Dibangun (Placeholder)

### 1. Landing Page

- Hero section menjelaskan KopiAdaptif secara singkat, dengan judul besar (Display, Fraunces) dan call to action ke halaman utama aplikasi.
- Ringkasan masalah: kehilangan panen akibat curah hujan ekstrem, disampaikan dalam bahasa sederhana.
- Ringkasan fitur utama dalam bentuk card (bukan list), mengikuti komponen Card dari `design.md`.

### 2. Input Lokasi dan Profil Kebun

- Form sederhana: pilih desa/kecamatan (dropdown dummy berisi beberapa nama wilayah Kepahiang), pilih fase pertumbuhan tanaman kopi (vegetatif, mulai berbunga, panen) dalam bentuk pilihan ikon besar, bukan dropdown teks kecil.
- Setelah submit, tampilkan loading state singkat lalu arahkan ke halaman Prediksi Risiko dengan data dummy sesuai pilihan.

### 3. Prediksi Risiko Gagal Bunga

- Tampilkan status risiko dalam tiga kondisi dummy: Aman, Waspada, Risiko Tinggi, masing-masing dengan warna dan ikon berbeda mengikuti token warna semantic di `design.md`.
- Sertakan grafik dummy sederhana curah hujan 14 hari ke depan (data statis, bisa pakai chart placeholder).
- Sertakan penjelasan singkat kenapa status tersebut muncul, dalam bahasa yang mudah dipahami petani.

### 4. Rekomendasi Aksi Adaptif

- Berdasarkan status risiko dummy dari halaman sebelumnya, tampilkan 2 sampai 3 rekomendasi aksi dalam bentuk card, misal kapan waktu pemangkasan ideal, kapan pasang naungan/mulsa, kapan menunda pemupukan.
- Gunakan komponen Card Produk atau Card Eco/Organik dari `design.md` sesuai konteks visual yang paling cocok.

### 5. Riwayat dan Tren Panen

- Form input hasil panen per musim (dummy, hanya menyimpan ke state lokal, hilang saat refresh).
- Tampilan list riwayat panen yang sudah diinput, memakai komponen List dari `design.md`.
- Placeholder grafik tren panen sederhana.

### 6. Peta Kolektif Status Kebun

- Peta dummy (bisa berupa gambar placeholder atau komponen peta statis) menampilkan beberapa titik kebun dengan warna status berbeda (Aman/Waspada/Risiko Tinggi) di satu wilayah, data seluruhnya dummy dan anonim.
- Tambahkan legend warna status di sisi peta.
- Saat titik di-hover atau diklik, tampilkan popup kecil (bukan alert) berisi info dummy status kebun tersebut, dengan animasi masuk sesuai `design.md`.

### 7. Forum Tanya Jawab Antar Petani

- Halaman list pertanyaan dummy dari beberapa "petani" fiktif.
- Form untuk menulis pertanyaan baru (dummy, hanya menambah ke state lokal).
- Tampilkan badge kecil "Terverifikasi Penyuluh" pada beberapa jawaban dummy untuk mensimulasikan validasi/moderasi, sebagai placeholder visual untuk sistem moderasi yang akan dibangun nanti.
- Sertakan catatan kecil di UI (bukan alert, cukup helper text) bahwa forum ini dimoderasi.

### 8. Mode Sederhana untuk HP Petani

- Terapkan di seluruh halaman, bukan halaman terpisah: ukuran font lebih besar dari standar web pada umumnya, target tap area tombol minimal 44px, ikon besar dan jelas di setiap aksi utama, hierarki visual yang sangat jelas antara aksi utama dan aksi sekunder.
- Uji seluruh halaman dalam viewport mobile terlebih dahulu sebagai prioritas utama, desktop menyesuaikan.

## Struktur Navigasi (Placeholder)

Navigasi utama minimal berisi: Beranda, Cek Risiko Kebun, Riwayat Panen, Peta Wilayah, Forum. Gunakan struktur navigasi yang jelas dan konsisten di semua halaman, mengikuti komponen navigasi dari `design.md` (aksen bawah untuk item aktif).

## Output yang Diharapkan dari Tahap Ini

1. Implementation Plan tertulis lebih dulu sesuai `AGENT.md`, mencakup daftar file/komponen yang akan dibuat untuk seluruh halaman di atas.
2. Setelah plan disetujui, bangun seluruh halaman placeholder di atas dengan data dummy, mengikuti `design.md` secara ketat.
3. Semua interaksi (form, hover peta, forum, popup) sudah beranimasi sesuai spesifikasi Motion di `design.md`, meskipun datanya masih dummy.
4. Tidak ada emoji, tidak ada tanda hubung dekoratif, tidak ada `alert()` bawaan browser di seluruh halaman.
