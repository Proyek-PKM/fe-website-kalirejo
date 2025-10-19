import PieChart from "../../components/charts/PieChart";
import { reportStatusData } from "../../data/chartData";

function Landing() {
  const reportData = reportStatusData;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Statistik Laporan Masyarakat Desa Kalirejo</h1>
          <p className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl mx-auto text-center">
            Sistem Monitoring laporan masyarakat berbasis chatbot untuk pelayanan yang lebih cepat dan transparan
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
        <div className="bg-[#4ade80] p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2 text-center">
            Laporan sudah ditangani
          </h3>
          <div className="text-white text-2xl font-bold text-center">
            {reportData.sudahDitangani}%
          </div>
        </div>

        <div className="bg-[#fbbf24] p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2 text-center">Sedang proses</h3>
          <div className="text-white text-2xl font-bold text-center">
            {reportData.sedangProses}%
          </div>
        </div>

        <div className="bg-[#f87171] p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2 text-center">Belum ditangani</h3>
          <div className="text-white text-2xl font-bold text-center">
            {reportData.belumDitangani}%
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Grafik Status Laporan
        </h2>
        <div className="mb-6 flex justify-center">
          <PieChart data={reportData} />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#4ade80] mr-2"></div>
              <span>Sudah ditangani</span>
            </div>
            <span className="font-medium">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#fbbf24] mr-2"></div>
              <span>Sedang proses</span>
            </div>
            <span className="font-medium">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#f87171] mr-2"></div>
              <span>Belum ditangani</span>
            </div>
            <span className="font-medium">
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

export default Landing;