import PieChart from "../../components/charts/PieChart";
import { reportStatusData } from "../../data/chartData";
import { useSidebar } from "../../contexts/SidebarContext";

function Landing() {
  const reportData = reportStatusData;
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex flex-col">
      {/* Mobile menu button for sidebar toggle - positioned on left side, only shown on mobile */}
      <div className="md:hidden mb-4 flex justify-start">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-gray-200 text-gray-800 z-50 relative"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center mb-4 sm:mb-8">
        <div className="text-center mb-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Statistik Laporan Masyarakat Desa Kalirejo</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 sm:mt-3 max-w-full sm:max-w-2xl mx-auto text-center px-2">
            Sistem Monitoring laporan masyarakat berbasis chatbot untuk pelayanan yang lebih cepat dan transparan
          </p>
        </div>
      </div>

      {/* Stats Cards - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-8 max-w-full mx-2 max-w-4xl">
        <div className="bg-[#4ade80] p-4 sm:p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2 text-center text-sm sm:text-base">
            Laporan sudah ditangani
          </h3>
          <div className="text-white text-xl sm:text-2xl font-bold text-center">
            {reportData.sudahDitangani}%
          </div>
        </div>

        <div className="bg-[#fbbf24] p-4 sm:p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2 text-center text-sm sm:text-base">Sedang proses</h3>
          <div className="text-white text-xl sm:text-2xl font-bold text-center">
            {reportData.sedangProses}%
          </div>
        </div>

        <div className="bg-[#f87171] p-4 sm:p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2 text-center text-sm sm:text-base">Belum ditangani</h3>
          <div className="text-white text-xl sm:text-2xl font-bold text-center">
            {reportData.belumDitangani}%
          </div>
        </div>
      </div>

      {/* Chart Section - Responsive width */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-4xl mx-auto w-full">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
          Grafik Status Laporan
        </h2>
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <PieChart data={reportData} />
          </div>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between text-sm sm:text-base">
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
          <div className="flex items-center justify-between text-sm sm:text-base">
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
          <div className="flex items-center justify-between text-sm sm:text-base">
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