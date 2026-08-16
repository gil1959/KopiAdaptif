# AGENT.md

Dokumen ini adalah aturan wajib bagi AI Agent saat mengerjakan pengembangan, perbaikan, atau perubahan apapun pada project ini. Semua poin di bawah bersifat mengikat dan tidak boleh dilanggar tanpa izin eksplisit dari user.

---

## 1. Wajib Riset dan Buat Implementation Plan Sebelum Eksekusi

Sebelum membuat fitur baru atau memperbaiki bug apapun, agent WAJIB:

- Membaca dan memahami seluruh file, code, komponen, dan struktur database yang berkaitan langsung dengan fitur/perbaikan yang diminta.
- Memetakan dependency: file mana saja yang akan terpengaruh, table/schema database mana yang terlibat, endpoint/API mana yang terhubung.
- Menyusun **Implementation Plan** tertulis sebelum menyentuh satu baris code pun, minimal berisi:
  1. Ringkasan permintaan user
  2. Daftar file yang akan dibuat/diubah
  3. Perubahan database/schema (jika ada)
  4. Langkah eksekusi step-by-step
  5. Potensi risiko atau efek samping
- Implementation Plan ini dipresentasikan ke user dan **menunggu approval** sebelum eksekusi dimulai.

Agent dilarang mulai coding hanya berdasarkan asumsi atau tebakan struktur project.

---

## 2. Dilarang Mengubah Code Tanpa Konfirmasi User

- Setiap perubahan code, sekecil apapun, harus melalui persetujuan user terlebih dahulu.
- Tidak ada eksekusi "diam-diam". Jika di tengah proses agent menemukan kebutuhan perubahan baru yang tidak ada di plan awal, agent wajib berhenti, laporkan temuan tersebut, dan minta konfirmasi ulang sebelum lanjut.
- Silent fix, auto-refactor, atau "sekalian dibenerin" tanpa izin adalah pelanggaran.

---

## 3. Dilarang Keluar dari Scope Permintaan atau Implementation Plan

- Agent hanya boleh mengeksekusi apa yang tertulis di Implementation Plan yang sudah disetujui.
- Dilarang menyentuh, merapikan, refactor, atau "meningkatkan" code di luar scope yang diminta, meskipun niatnya baik.
- Jika agent melihat bug atau code jelek di luar scope, cukup laporkan sebagai catatan terpisah, jangan langsung diperbaiki.
- Scope creep dalam bentuk apapun tidak diperbolehkan tanpa izin baru dari user.

---

## 4. Efisiensi Token dan Fokus Pengecekan

- Pengecekan code dibatasi hanya pada lingkup yang relevan dengan permintaan user, jangan membaca seluruh codebase jika tidak perlu.
- Hindari pengulangan pembacaan file yang sama tanpa alasan jelas.
- Prioritaskan pencarian target (search/grep/pencarian spesifik) dibanding membaca seluruh file besar dari awal sampai akhir.
- Setiap tool call harus punya tujuan jelas, bukan eksplorasi acak.

---

## 5. Standar Design dan Interaksi

- Dilarang menggunakan emoji di UI maupun di dalam code/komentar yang berhubungan dengan tampilan.
- Dilarang menggunakan tanda hubung/dash (-) sebagai elemen dekoratif di teks UI.
- Dilarang menggunakan `alert()` bawaan browser. Semua notifikasi, konfirmasi, atau pesan error/success wajib menggunakan komponen popup/modal/toast custom sesuai design system project.
- Setiap interaksi (klik, hover, transisi antar state, buka/tutup modal, dsb) wajib memiliki animasi yang halus dan konsisten, bukan perubahan instan tanpa transisi.
- Setiap proses loading (fetch data, submit form, dsb) wajib menampilkan loading state yang konsisten di seluruh aplikasi (skeleton, spinner, atau progress indicator sesuai design system), bukan blank state atau freeze tanpa feedback visual.
- Semua elemen interaktif harus punya state yang jelas: default, hover, active, disabled, loading.

---

## 6. Wajib Mengikuti Design System yang Sudah Ada

- Dilarang membuat design, layout, komponen, atau style baru secara sepihak.
- Semua pekerjaan visual wajib merujuk pada `design.md` atau file design/layout reference yang sudah ada di project.
- Jika `design.md` tidak mencakup kasus yang sedang dikerjakan, agent wajib bertanya ke user terlebih dahulu, bukan berimprovisasi sendiri.
- Konsistensi visual (warna, spacing, typography, komponen) di seluruh halaman adalah prioritas, bukan preferensi estetika agent.

---

## 7. Prinsip Umum Tambahan

- **Transparansi penuh**: setiap keputusan teknis yang diambil harus bisa dijelaskan alasannya ke user.
- **Tidak ada asumsi diam-diam**: jika ada ambiguitas dalam permintaan user, agent wajib bertanya, bukan menebak lalu jalan.
- **Reversibilitas**: agent harus menghindari perubahan yang sulit di-rollback tanpa memberi tahu user terlebih dahulu.
- **Konsistensi arsitektur**: setiap penambahan code harus mengikuti pola/struktur/konvensi yang sudah ada di project (naming convention, folder structure, state management, dsb), bukan membawa gaya baru.
- **Database safety**: perubahan schema/migration database wajib dijelaskan dampaknya (termasuk risiko data loss) sebelum dieksekusi, dan wajib ada persetujuan eksplisit.
- **Report akhir**: setelah eksekusi selesai, agent wajib memberi ringkasan singkat apa saja yang benar-benar diubah, dibandingkan dengan Implementation Plan awal.

---

## Ringkasan Alur Kerja Wajib

1. Terima permintaan user
2. Riset file/code/database terkait (scope terbatas, efisien token)
3. Susun Implementation Plan
4. Presentasikan plan, tunggu approval
5. Eksekusi sesuai plan, tanpa keluar scope
6. Ikuti standar design (`design.md`, no emoji, no dash dekoratif, no native alert, animasi konsisten, loading state konsisten)
7. Laporkan hasil akhir dibanding plan

Pelanggaran terhadap salah satu aturan di atas dianggap sebagai kegagalan eksekusi, bukan sekadar catatan minor.
