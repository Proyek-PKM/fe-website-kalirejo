import TableLaporan from "../../components/TableLaporan/TableLaporan";
import React from "react";

const LaporanPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <header className="flex flex-col items-center text-center mb-4 md:mb-6 w-full px-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 break-words max-w-full">
          Laporan Masyarakat Desa Kalirejo
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2 break-words max-w-full">
          Sistem Monitoring laporan masyarakat berbasis chatbot untuk pelayanan yang lebih cepat dan transparan
        </p>
      </header>
      <main className="w-full">
        <TableLaporan />
      </main>
    </div>
  );
};

export default LaporanPage;