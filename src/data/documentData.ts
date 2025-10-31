export interface DocumentInfo {
  id: number;
  no: string;
  judul: string;
  deskripsi: string;
  kategori: string;
  tanggal: string;
  tataCaraPengurusan?: string; // Optional field for procedure steps
}

export const documentData: DocumentInfo[] = [
  {
    id: 1,
    no: '01',
    judul: 'Pengurusan KK',
    deskripsi: 'Panduan lengkap mengenai syarat mengurus KK di balai desa',
    kategori: 'Administrasi Kependudukan',
    tanggal: '12/01/2025',
    tataCaraPengurusan: '1. Datang ke balai desa\n2. Bawa dokumen-dokumen pendukung\n3. Isi formulir permohonan\n4. Tunggu proses verifikasi\n5. Ambil dokumen yang telah selesai diproses',
  },
  {
    id: 2,
    no: '02',
    judul: 'Akta Kelahiran',
    deskripsi: 'Informasi tentang persyaratan pembuatan akta kelahiran',
    kategori: 'Administrasi Kependudukan',
    tanggal: '15/01/2025',
    tataCaraPengurusan: '1. Persiapkan dokumen seperti surat nikah dan surat lahir\n2. Kunjungi kantor desa\n3. Isi formulir permohonan\n4. Tunggu proses verifikasi\n5. Ambil akta kelahiran yang telah selesai',
  },
  {
    id: 3,
    no: '03',
    judul: 'Bantuan Desa',
    deskripsi: 'Informasi terkait program bantuan desa untuk masyarakat',
    kategori: 'Bantuan Sosial',
    tanggal: '20/01/2025',
    // This document doesn't have tata cara pengurusan
  },
  {
    id: 4,
    no: '04',
    judul: 'Surat Domisili',
    deskripsi: 'Panduan pembuatan surat keterangan domisili',
    kategori: 'Administrasi Kependudukan',
    tanggal: '25/01/2025',
    tataCaraPengurusan: '1. Datang ke kantor desa\n2. Bawa KTP dan KK\n3. Ajukan permohonan surat domisili\n4. Tunggu proses verifikasi\n5. Ambil surat domisili yang telah selesai',
  }];