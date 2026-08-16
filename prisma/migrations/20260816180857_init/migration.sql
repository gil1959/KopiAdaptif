-- CreateEnum
CREATE TYPE "StatusRisiko" AS ENUM ('aman', 'waspada', 'risiko_tinggi');

-- CreateEnum
CREATE TYPE "FasePertumbuhan" AS ENUM ('vegetatif', 'berbunga', 'panen');

-- CreateEnum
CREATE TYPE "PeranPengguna" AS ENUM ('petani', 'penyuluh');

-- CreateEnum
CREATE TYPE "VarianRekomendasi" AS ENUM ('eco', 'elevated', 'default');

-- CreateEnum
CREATE TYPE "MusimPanen" AS ENUM ('Musim_Hujan', 'Musim_Kemarau');

-- CreateTable
CREATE TABLE "Desa" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,

    CONSTRAINT "Desa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengguna" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "desaId" TEXT,
    "peran" "PeranPengguna" NOT NULL DEFAULT 'petani',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pengguna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kebun" (
    "id" TEXT NOT NULL,
    "penggunaId" TEXT,
    "namaPetani" TEXT,
    "desaId" TEXT,
    "luasHa" DECIMAL(6,2),
    "fase" "FasePertumbuhan" NOT NULL DEFAULT 'vegetatif',
    "status" "StatusRisiko" NOT NULL DEFAULT 'aman',
    "catatan" TEXT,
    "cx" INTEGER,
    "cy" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Kebun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Risiko" (
    "id" TEXT NOT NULL,
    "kebunId" TEXT,
    "desaId" TEXT,
    "status" "StatusRisiko" NOT NULL,
    "fase" "FasePertumbuhan" NOT NULL,
    "penjelasan" TEXT,
    "suhuRataRata" TEXT,
    "curahHujanPrediksi" TEXT,
    "tanggalCek" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Risiko_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurahHujan" (
    "id" TEXT NOT NULL,
    "desaId" TEXT,
    "hari" TEXT NOT NULL,
    "curahMm" DECIMAL(7,2) NOT NULL,
    "statusReferensi" "StatusRisiko" NOT NULL,
    "tanggalPrediksi" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CurahHujan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiwayatPanen" (
    "id" TEXT NOT NULL,
    "kebunId" TEXT,
    "penggunaId" TEXT,
    "musim" "MusimPanen" NOT NULL,
    "tahun" INTEGER NOT NULL,
    "hasilKg" DECIMAL(8,2) NOT NULL,
    "catatan" TEXT,
    "tanggal" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RiwayatPanen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rekomendasi" (
    "id" TEXT NOT NULL,
    "statusRisiko" "StatusRisiko" NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "aksi" TEXT NOT NULL,
    "waktu" TEXT NOT NULL,
    "varian" "VarianRekomendasi" NOT NULL DEFAULT 'default',

    CONSTRAINT "Rekomendasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumPertanyaan" (
    "id" TEXT NOT NULL,
    "penanya" TEXT NOT NULL,
    "desaId" TEXT,
    "pertanyaan" TEXT NOT NULL,
    "tanggal" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ForumPertanyaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ForumJawaban" (
    "id" TEXT NOT NULL,
    "pertanyaanId" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "penjawab" TEXT NOT NULL,
    "tanggal" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "terverifikasi" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ForumJawaban_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pengguna" ADD CONSTRAINT "Pengguna_desaId_fkey" FOREIGN KEY ("desaId") REFERENCES "Desa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kebun" ADD CONSTRAINT "Kebun_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kebun" ADD CONSTRAINT "Kebun_desaId_fkey" FOREIGN KEY ("desaId") REFERENCES "Desa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risiko" ADD CONSTRAINT "Risiko_kebunId_fkey" FOREIGN KEY ("kebunId") REFERENCES "Kebun"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risiko" ADD CONSTRAINT "Risiko_desaId_fkey" FOREIGN KEY ("desaId") REFERENCES "Desa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CurahHujan" ADD CONSTRAINT "CurahHujan_desaId_fkey" FOREIGN KEY ("desaId") REFERENCES "Desa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiwayatPanen" ADD CONSTRAINT "RiwayatPanen_kebunId_fkey" FOREIGN KEY ("kebunId") REFERENCES "Kebun"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiwayatPanen" ADD CONSTRAINT "RiwayatPanen_penggunaId_fkey" FOREIGN KEY ("penggunaId") REFERENCES "Pengguna"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumPertanyaan" ADD CONSTRAINT "ForumPertanyaan_desaId_fkey" FOREIGN KEY ("desaId") REFERENCES "Desa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ForumJawaban" ADD CONSTRAINT "ForumJawaban_pertanyaanId_fkey" FOREIGN KEY ("pertanyaanId") REFERENCES "ForumPertanyaan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
