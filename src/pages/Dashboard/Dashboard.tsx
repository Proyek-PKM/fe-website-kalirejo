import PieChart from "../../components/charts/PieChart";
import { reportStatusData } from "../../data/chartData";

function Dashboard() {
  const reportData = reportStatusData;

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <div className="flex flex-col items-center text-center mb-4 md:mb-6 w-full px-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 break-words max-w-full">
          Statistik Laporan Masyarakat Desa Kalirejo
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2 break-words max-w-full">
          Sistem Monitoring laporan masyarakat berbasis chatbot untuk pelayanan yang lebih cepat dan transparan
        </p>
      </div>

      {/* Stats Cards - Centered and responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-6 w-full px-2">
        <div className="bg-[#4ade80] p-3 md:p-4 rounded-lg flex flex-col items-center text-center">
          <h3 className="text-white font-medium text-xs md:text-sm mb-1 break-words max-w-full">
            Laporan sudah ditangani
          </h3>
          <div className="text-white text-lg md:text-xl font-bold">
            {reportData.sudahDitangani}%
          </div>
        </div>

        <div className="bg-[#fbbf24] p-3 md:p-4 rounded-lg flex flex-col items-center text-center">
          <h3 className="text-white font-medium text-xs md:text-sm mb-1 break-words max-w-full">Sedang proses</h3>
          <div className="text-white text-lg md:text-xl font-bold">
            {reportData.sedangProses}%
          </div>
        </div>

        <div className="bg-[#f87171] p-3 md:p-4 rounded-lg flex flex-col items-center text-center">
          <h3 className="text-white font-medium text-xs md:text-sm mb-1 break-words max-w-full">Belum ditangani</h3>
          <div className="text-white text-lg md:text-xl font-bold">
            {reportData.belumDitangani}%
          </div>
        </div>
      </div>

      {/* Chart Section - Centered */}
      <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm w-full px-2">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 text-center">
          Grafik Status Laporan
        </h2>
        <div className="mb-3 md:mb-4 flex justify-center">
          <PieChart data={reportData} />
        </div>
        <div className="flex flex-col space-y-2 md:space-y-3">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80] mr-2"></div>
              <span className="text-xs md:text-sm">Sudah ditangani</span>
            </div>
            <span className="font-medium text-xs md:text-sm">
              {Math.round(
                (reportData.sudahDitangani /
                  (reportData.sudahDitangani +
                    reportData.sedangProses +
                    reportData.belumDitangani)) *
                  100
              )}
              %
            </span>
          </div>
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24] mr-2"></div>
              <span className="text-xs md:text-sm">Sedang proses</span>
            </div>
            <span className="font-medium text-xs md:text-sm">
              {Math.round(
                (reportData.sedangProses /
                  (reportData.sudahDitangani +
                    reportData.sedangProses +
                    reportData.belumDitangani)) *
                  100
              )}
              %
            </span>
          </div>
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f87171] mr-2"></div>
              <span className="text-xs md:text-sm">Belum ditangani</span>
            </div>
            <span className="font-medium text-xs md:text-sm">
              {Math.round(
                (reportData.belumDitangani /
                  (reportData.sudahDitangani +
                    reportData.sedangProses +
                    reportData.belumDitangani)) *
                  100
              )}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;