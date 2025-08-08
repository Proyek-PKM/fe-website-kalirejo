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
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Daftar Laporan</h1>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Tanggal</th>
                <th className="py-3 px-4">Judul</th>
                <th className="py-3 px-4">Deskripsi</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {laporanDummy.map((laporan, index) => (
                <tr
                  key={laporan.id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-3 px-4 font-medium text-gray-700">{laporan.id}</td>
                  <td className="py-3 px-4 text-gray-600">{laporan.tanggal}</td>
                  <td className="py-3 px-4 text-gray-800">{laporan.judul}</td>
                  <td className="py-3 px-4 text-gray-600">{laporan.deskripsi}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${
                        laporan.status === "Selesai"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {laporan.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LaporanPage;
