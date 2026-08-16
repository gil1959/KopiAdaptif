# Kopi Bumi

Rimbun, hangat, tumbuh dari tanah yang sama.

## Overview

Kopi Bumi adalah design system yang lahir dari dua unsur, hijau daun kopi yang rimbun dan coklat biji kopi yang hangat. Jika sebelumnya coklat mendominasi, sekarang hijau tumbuh lebih besar sebagai warna utama, menghadirkan kesan kebun kopi yang hidup, alami, dan menenangkan, sementara coklat tetap hadir sebagai fondasi yang mengingatkan pada biji kopi yang dipanggang. Kombinasi keduanya membangun identitas yang terasa organik, dipercaya, dan dekat dengan alam, bukan sekadar produk kopi, tapi cerita tentang tanah tempat kopi itu tumbuh. Tipografi menggabungkan serif hangat untuk judul dengan sans-serif bersih untuk teks panjang. Setiap interaksi bergerak lembut dan hidup, mencerminkan pertumbuhan alami, bukan mekanis. Tidak ada elemen dekoratif yang berisik seperti emoji atau tanda hubung sebagai pemanis teks, semua kesan alami dibangun murni dari warna, tipografi, spacing, dan gerakan.

## Prinsip Utama

1. Hijau adalah warna utama, coklat adalah warna pendukung yang memberi kehangatan. Keduanya tumbuh berdampingan, tidak saling mendominasi secara berlebihan.
2. Konsistensi di atas segalanya. Satu komponen, satu perilaku, di seluruh halaman.
3. Tidak ada emoji dalam bentuk apapun, di UI, di copywriting, maupun di dalam code/komentar yang terkait tampilan.
4. Tidak ada tanda hubung/dash (-, –, —) sebagai elemen dekoratif dalam teks UI atau copywriting. Dash hanya boleh dipakai untuk kebutuhan teknis (misal di dalam kode CSS/hex value), bukan sebagai gaya penulisan.
5. Setiap interaksi wajib beranimasi. Diam total tanpa transisi dianggap cacat desain.
6. Notifikasi dan konfirmasi wajib menggunakan popup/modal/toast custom, bukan alert bawaan browser.

## Colors

### Brand Palette

| Token     | Hex       | Role                                                  |
|-----------|-----------|---------------------------------------------------------|
| Primary   | `#2F4A34` | Hijau daun kopi tua — teks utama, UI dominan, navigasi   |
| Secondary | `#8C5A34` | Coklat biji panggang — aksen, penekanan, call to action  |
| Tertiary  | `#F6F2E7` | Krem gading — latar, teks inverse                        |

### Surface Palette

| Token          | Hex       | Role                                    |
|----------------|-----------|------------------------------------------|
| Background     | `#F6F2E7` | Latar halaman utama, krem hangat          |
| Surface        | `#EAE3D2` | Latar card, blok aside                    |
| Surface Raised | `#DCD2B8` | Latar hover, blok highlight               |
| Surface Green  | `#E4EBDD` | Latar section bernuansa hijau lembut, banner eco/organik |

### Content Palette

| Token          | Hex       | Role                                  |
|----------------|-----------|-----------------------------------------|
| Text Primary   | `#2F4A34` | Judul, teks utama                     |
| Text Secondary | `#5F6B54` | Deskripsi sekunder, label, meta info  |
| Text Tertiary  | `#A3AC96` | Placeholder, teks disabled            |

### Nature Palette

Palet ini adalah jantung dari nuansa alam Kopi Bumi, dipakai untuk elemen yang menegaskan kesegaran, pertumbuhan, dan asal alami produk.

| Token           | Hex       | Role                                              |
|------------------|-----------|-----------------------------------------------------|
| Forest Green     | `#2F4A34` | Hijau utama, dominan di header, navigasi, hero      |
| Leaf Green       | `#5B8A5A` | Aksen hijau sekunder, badge organik, ikon daun       |
| Moss Green       | `#7FA06E` | Highlight lembut, tag kategori alami                |
| Sage Mist        | `#B7C9A8` | Latar lembut, divider bernuansa hijau muda           |
| Roasted Brown    | `#8C5A34` | Aksen coklat utama, tombol utama, aksen kopi         |
| Espresso Dark    | `#4A2E1E` | Teks penekanan kuat, footer, elemen kontras tinggi   |
| Golden Crema     | `#D9A441` | Highlight premium, rating, badge unggulan            |

### Border Palette

| Token         | Hex       |
|---------------|-----------|
| Border Subtle | `#DCD2B8` |
| Border Medium | `#C6B98F` |
| Border Strong | `#2F4A34` |

### Semantic Colors

| Token   | Hex       |
|---------|-----------|
| Success | `#5B8A5A` |
| Warning | `#D9A441` |
| Error   | `#A8462F` |
| Info    | `#2F4A34` |

## Typography

### Font Stack

| Role             | Font                                                          |
|------------------|-----------------------------------------------------------------|
| Display/Headings | Fraunces, 'Playfair Display', Georgia, serif                    |
| UI/Body          | Inter, 'Segoe UI', -apple-system, Helvetica, sans-serif          |
| Mono/Code        | JetBrains Mono, 'Courier New', Consolas, monospace               |

Fraunces dipilih karena karakternya yang hangat dan sedikit artisanal, selaras dengan kesan kebun kopi yang alami namun tetap punya nilai jual premium. Inter menjaga keterbacaan tetap tinggi untuk teks panjang seperti deskripsi produk atau artikel.

### Type Scale

| Level        | Font              | Size   | Weight | Line Height | Letter Spacing | Usage                          |
|--------------|-------------------|--------|--------|-------------|----------------|----------------------------------|
| Display      | Fraunces          | 52px   | 600    | 1.1         | -0.01em        | Hero headline, judul utama       |
| Headline     | Fraunces          | 36px   | 600    | 1.15        | -0.01em        | Judul halaman, judul produk      |
| Subhead      | Fraunces          | 22px   | 500    | 1.25        | 0              | Judul seksi                      |
| Body Large   | Inter             | 18px   | 400    | 1.65        | 0              | Lead paragraph, deskripsi utama  |
| Body         | Inter             | 15px   | 400    | 1.7         | 0              | Teks default                     |
| Body Small   | Inter             | 13px   | 400    | 1.6         | 0              | Sidebar, teks pendukung          |
| Caption      | Inter             | 12px   | 500    | 1.5         | 0.01em         | Kredit foto, timestamp           |
| Overline     | Inter             | 11px   | 600    | 1.4         | 0.10em         | Label kategori, badge            |
| Code         | JetBrains Mono    | 13px   | 400    | 1.6         | 0              | Kode inline, data teknis         |

## Spacing

| Property                    | Value   |
|-----------------------------|---------|
| Base unit                   | 8px     |
| Scale                       | 4, 8, 16, 24, 32, 48, 64, 96 |
| Component padding — small   | 8px     |
| Component padding — medium  | 16px    |
| Component padding — large   | 32px    |
| Section spacing — mobile    | 48px    |
| Section spacing — tablet    | 64px    |
| Section spacing — desktop   | 96px    |

## Border Radius

| Token  | Value | Usage                                       |
|--------|-------|-----------------------------------------------|
| None   | 0px   | Tidak dipakai sebagai default                  |
| Small  | 6px   | Chip, badge, input kecil                       |
| Medium | 10px  | Button, input, card kecil                      |
| Large  | 16px  | Card produk, modal                             |
| XL     | 24px  | Hero section, image container besar            |
| Full   | 9999px| Avatar, tombol icon bulat                      |

Sudut membulat lembut dipakai secara konsisten untuk memberi kesan organik dan hidup, seperti bentuk daun dan biji kopi yang tidak pernah benar-benar tajam. Semua radius mengikuti token di atas, tidak ada nilai custom di luar tabel ini.

## Shadows

**Filosofi:** Kopi Bumi memakai elevasi lembut untuk memberi kedalaman alami, seperti bayangan dedaunan yang jatuh di atas meja kayu. Bayangan selalu warm dan sedikit kehijauan, tidak pernah abu-abu netral atau hitam pekat.

| Level   | CSS Value                                       | Usage                              |
|---------|--------------------------------------------------|-------------------------------------|
| Subtle  | `0 1px 2px rgba(47, 74, 52, 0.08)`               | Card default, input                 |
| Medium  | `0 4px 12px rgba(47, 74, 52, 0.12)`              | Card hover, dropdown                |
| Large   | `0 12px 32px rgba(47, 74, 52, 0.16)`             | Modal, popover                      |
| Overlay | `0 24px 64px rgba(47, 74, 52, 0.22)`             | Popup konfirmasi, dialog penting    |

**Special — Focus Ring:** `0 0 0 2px #F6F2E7, 0 0 0 4px #5B8A5A` — cincin fokus hijau daun.

**Special — Aksen Bawah:** border bawah 3px `#5B8A5A` dipakai sebagai penanda item aktif pada navigasi atau tab, dengan `#8C5A34` sebagai varian coklat untuk konteks yang lebih menonjolkan produk kopi.

## Motion & Animasi

Semua interaksi wajib memiliki transisi. Tidak boleh ada perubahan state yang terjadi secara instan tanpa animasi, kecuali untuk alasan aksesibilitas (`prefers-reduced-motion`).

| Jenis                  | Durasi     | Easing                          | Catatan                                             |
|-------------------------|-----------|----------------------------------|------------------------------------------------------|
| Hover (warna, border)   | 150ms     | ease-out                         | Perubahan warna button, card, link                    |
| Hover (scale/lift)      | 200ms     | cubic-bezier(0.22, 1, 0.36, 1)   | Card terangkat sedikit, image zoom halus              |
| Klik/Active             | 100ms     | ease-in                          | Feedback instan saat ditekan, sedikit scale down       |
| Modal/Popup masuk       | 250ms     | cubic-bezier(0.16, 1, 0.3, 1)    | Fade + scale dari 0.96 ke 1, disertai backdrop fade    |
| Modal/Popup keluar      | 180ms     | ease-in                          | Fade + scale turun sedikit sebelum hilang              |
| Toast/notifikasi masuk  | 220ms     | ease-out                         | Slide dari atas atau bawah, disertai fade in           |
| Loading spinner         | 800ms     | linear, infinite                 | Rotasi penuh konsisten di semua tempat                 |
| Loading skeleton        | 1200ms    | ease-in-out, infinite alternate  | Shimmer halus, dipakai saat fetch data                 |
| Page/section transition | 300ms     | ease-in-out                      | Perpindahan antar state besar (misal tab konten)        |

Aturan wajib:

- Setiap tombol harus punya transisi hover dan active, tidak boleh warna berubah mendadak.
- Setiap proses async (fetch data, submit form, upload) wajib menampilkan loading state (spinner atau skeleton), tidak boleh blank atau freeze.
- Setiap modal/popup wajib animasi masuk dan keluar, tidak boleh muncul/hilang instan.
- Durasi animasi di seluruh aplikasi harus konsisten mengikuti tabel di atas, tidak boleh dibuat custom per komponen tanpa alasan kuat.

## Components

### Buttons

**Primary**
- Background: `#2F4A34`
- Text: `#F6F2E7`
- Border: `2px solid #2F4A34`
- Padding: 12px 24px
- Font: Inter, 14px, weight 600
- Radius: 10px (Medium)
- Transisi: 150ms ease-out
- Hover: Background `#5B8A5A`, border `#5B8A5A`
- Active: Background `#243A29`, scale 0.98
- Loading: spinner putih di tengah, teks disembunyikan, tombol tetap ukuran sama

**Kopi (Secondary Aksen)**
- Background: `#8C5A34`
- Text: `#F6F2E7`
- Border: `2px solid #8C5A34`
- Padding: 12px 24px
- Font: Inter, 14px, weight 600
- Radius: 10px
- Transisi: 150ms ease-out
- Hover: Background `#764A2A`
- Active: Background `#603C22`
- Digunakan khusus untuk aksi yang berhubungan langsung dengan produk kopi, misal Tambah ke Keranjang, Pesan Sekarang

**Secondary**
- Background: transparent
- Text: `#2F4A34`
- Border: `2px solid #2F4A34`
- Padding: 12px 24px
- Font: Inter, 14px, weight 600
- Radius: 10px
- Hover: Background `#E4EBDD`
- Active: Background `#DCD2B8`

**Ghost**
- Background: transparent
- Text: `#2F4A34`
- Border: none
- Padding: 12px 24px
- Font: Inter, 14px, weight 600
- Radius: 10px
- Hover: Text `#5B8A5A`, background `#E4EBDD`
- Active: Text `#3F6640`

**Destructive**
- Background: `#A8462F`
- Text: `#F6F2E7`
- Border: `2px solid #A8462F`
- Padding: 12px 24px
- Font: Inter, 14px, weight 600
- Radius: 10px
- Hover: Background `#8F3A27`
- Active: Background `#772F1F`

**Sizes:** Small 8px 16px / 13px, Medium 12px 24px / 14px, Large 16px 32px / 16px

**Disabled:** Opacity 0.4, cursor not-allowed, tanpa transisi hover.

### Cards

**Default**
- Background: `#F6F2E7`
- Border: `1px solid #DCD2B8`
- Radius: 16px (Large)
- Padding: 24px
- Shadow: Subtle
- Hover: Shadow Medium, translateY(-2px), transisi 200ms

**Produk (Elevated)**
- Background: `#F6F2E7`
- Border-top: `4px solid #5B8A5A`
- Border lain: `1px solid #DCD2B8`
- Radius: 16px
- Padding: 24px
- Shadow: Subtle
- Hover: Shadow Medium, image di dalam card zoom 1.03, transisi 200ms

**Eco/Organik (Green Surface)**
- Background: `#E4EBDD`
- Border: `1px solid #B7C9A8`
- Radius: 16px
- Padding: 24px
- Shadow: none
- Dipakai untuk konten sertifikasi organik, sumber biji kopi, atau storytelling keberlanjutan

### Inputs

**Text Input**
- Height: 46px
- Background: `#F6F2E7`
- Border: `1.5px solid #C6B98F`
- Radius: 10px
- Padding: 10px 14px
- Font: Inter, 14px, weight 400
- Text color: `#2F4A34`
- Placeholder color: `#A3AC96`
- Transisi border/ring: 150ms ease-out
- Focus: Border `#5B8A5A`, ring `0 0 0 2px #F6F2E7, 0 0 0 4px #5B8A5A`
- Error: Border `#A8462F`
- Disabled: Background `#EAE3D2`, opacity 0.5

**Label:** Inter, 12px, weight 600, color `#2F4A34`, margin-bottom 6px.

**Helper Text:** Inter, 12px, weight 400, color `#5F6B54`, margin-top 4px. Error helper color `#A8462F`.

### Chips

**Filter Chip**
- Background: transparent
- Border: `1.5px solid #C6B98F`
- Radius: 6px (Small)
- Padding: 6px 14px
- Font: Inter, 12px, weight 600
- Text: `#5F6B54`
- Transisi: 150ms ease-out
- Selected: Background `#2F4A34`, text `#F6F2E7`, border `#2F4A34`

**Status Chip**
- Padding: 4px 12px
- Font: Inter, 11px, weight 600
- Radius: 6px
- Success: Background `#E9F1E5`, text `#5B8A5A`, border `1.5px solid #5B8A5A`
- Warning: Background `#FBF2DF`, text `#D9A441`, border `1.5px solid #D9A441`
- Error: Background `#F7E8E2`, text `#A8462F`, border `1.5px solid #A8462F`

### Lists

**Default List Item**
- Padding: 14px 0
- Border bottom: `1px solid #DCD2B8`
- Font: Inter, 15px, weight 400
- Text: `#2F4A34`
- Secondary text: `#A3AC96`, 12px
- Transisi background: 150ms ease-out
- Hover: Background `#EAE3D2`
- Active: Background `#DCD2B8`
- Leading element: icon 20px, color `#2F4A34`

### Checkboxes

- Size: 18px
- Border: `2px solid #2F4A34`
- Radius: 5px
- Background: `#F6F2E7`
- Transisi: 150ms ease-out
- Checked: Background `#2F4A34`, checkmark `#F6F2E7`, animasi scale saat checklist muncul
- Indeterminate: Background `#2F4A34`, garis penanda putih di tengah (elemen visual ikon, bukan tanda baca teks)
- Hover: Background `#EAE3D2`
- Focus: Ring `0 0 0 2px #F6F2E7, 0 0 0 4px #5B8A5A`
- Disabled: Opacity 0.4
- Label: Inter, 14px, weight 400, margin-left 10px

### Radio Buttons

- Size: 18px
- Border: `2px solid #2F4A34`
- Radius: 9999px (Full)
- Background: `#F6F2E7`
- Selected: Border `#2F4A34`, inner dot `#5B8A5A` (8px), transisi scale 150ms
- Hover: Background `#EAE3D2`
- Focus: Ring `0 0 0 2px #F6F2E7, 0 0 0 4px #5B8A5A`
- Disabled: Opacity 0.4
- Label: Inter, 14px, weight 400, margin-left 10px

### Popup / Modal

Semua konfirmasi, error, dan pesan penting wajib menggunakan komponen ini. `alert()` bawaan browser dilarang digunakan.

- Background: `#F6F2E7`
- Border radius: 16px
- Shadow: Overlay
- Backdrop: `rgba(47, 74, 52, 0.35)`, fade in 250ms bersamaan dengan modal
- Animasi masuk: fade + scale dari 0.96 ke 1, 250ms
- Animasi keluar: fade + scale ke 0.96, 180ms
- Header: Fraunces 22px weight 600, warna `#2F4A34`
- Body: Inter 15px
- Tombol aksi: mengikuti spesifikasi Button di atas, primary hijau untuk aksi utama, secondary/ghost untuk batal

### Toast

- Background: `#2F4A34`
- Text: `#F6F2E7`
- Radius: 10px
- Padding: 12px 18px
- Font: Inter 14px weight 500
- Animasi masuk: slide + fade, 220ms ease-out
- Auto dismiss: 4000ms, dengan progress bar tipis di bagian bawah toast
- Success: aksen kiri 4px `#5B8A5A`
- Error: aksen kiri 4px `#A8462F`

### Loading State

- Spinner: garis melingkar warna `#5B8A5A`, rotasi 800ms linear infinite
- Skeleton: background `#EAE3D2` dengan shimmer `#DCD2B8`, animasi 1200ms ease-in-out infinite alternate
- Semua tombol dengan aksi async wajib punya state loading bawaan (lihat spesifikasi di Button Primary)
- Tidak boleh ada halaman atau komponen yang blank tanpa feedback visual saat menunggu data

## Do's and Don'ts

1. **Do** jadikan hijau `#2F4A34` sebagai warna dominan di seluruh antarmuka, coklat `#8C5A34` hadir sebagai aksen pendukung, bukan sebaliknya.
2. **Do** gunakan Fraunces untuk judul agar terasa hangat dan artisanal, jangan dicampur dengan font display lain.
3. **Don't** gunakan emoji dalam bentuk apapun, baik di UI, copywriting, maupun komentar code terkait tampilan.
4. **Don't** gunakan tanda hubung/dash sebagai gaya penulisan pada teks UI atau copywriting. Dash hanya untuk kebutuhan teknis di dalam value CSS.
5. **Do** beri transisi pada setiap interaksi, hover, klik, buka/tutup modal, maupun perpindahan state.
6. **Don't** gunakan `alert()` bawaan browser untuk notifikasi atau konfirmasi apapun, selalu gunakan popup/modal/toast custom.
7. **Do** tampilkan loading state yang konsisten di semua proses async, spinner untuk aksi singkat, skeleton untuk pemuatan konten.
8. **Don't** memakai warna abu-abu netral untuk shadow, semua bayangan harus warm dan sedikit kehijauan mengikuti token yang tersedia.
9. **Do** jaga konsistensi radius, spacing, dan tipografi mengikuti token di dokumen ini, jangan membuat nilai custom di luar tabel.
10. **Don't** menambahkan tekstur, gradient berlebihan, atau elemen dekoratif yang tidak ada di dokumen ini tanpa persetujuan sebelumnya.
