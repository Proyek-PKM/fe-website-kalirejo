import TableLaporan from "../../components/TableLaporan/TableLaporan";
import React from "react";

const laporanDummy = [
  {
    id: "L001",
    tanggal: "2025-08-08",
    judul: "Laporan Penggunaan Sistem",
    deskripsi: "Penggunaan sistem mengalami peningkatan pada bulan ini.",
    status: "Selesai",
  },
  {
    id: "L002",
    tanggal: "2025-08-07",
    judul: "Laporan Masalah Jaringan",
    deskripsi: "Terdapat gangguan pada jaringan server utama.",
    status: "Dalam Proses",
  },
  {
    id: "L003",
    tanggal: "2025-08-06",
    judul: "Laporan Kegiatan Harian",
    deskripsi: "Pengumpulan data dari pengguna berhasil dilakukan.",
    status: "Selesai",
  },
];

const LaporanPage: React.FC = () => {
  return (
    <div className="flex flex-col p-9">
      <header>
        <h1 className="text-3xl text-[#363636] font-semibold mb-4">Laporan</h1>
        <p className="text-[#7E7E7E] w-[85%]">
          Halaman ini digunakan untuk memantau dan mengelola laporan dengan
          tampilan yang rapi, interaktif, dan ramah pengguna. Data disajikan
          secara terstruktur sehingga mudah dibaca, dilengkapi fitur pencarian,
          filter, dan ringkasan informasi untuk memudahkan analisis serta
          pengambilan keputusan.
        </p>
      </header>
      <main className="h-full">
        <TableLaporan />
      </main>
    </div>
  );
};

export default LaporanPage;
