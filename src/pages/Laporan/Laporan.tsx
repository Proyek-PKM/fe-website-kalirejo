import TableLaporan from "../../components/TableLaporan/TableLaporan";
import React from "react";

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
