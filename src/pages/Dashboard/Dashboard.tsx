import PieChart from '../../components/charts/PieChart';
import { reportStatusData } from '../../data/chartData';

function Dashboard() {
  const reportData = reportStatusData;

  return (
    <div className="flex flex-col p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">
            Halaman ini digunakan untuk memantau dan mengelola laporan dengan tampilan yang rapi, interaktif, dan ramah
            pengguna. Data disajikan secara terstruktur sehingga mudah dibaca, dilengkapi fitur pencarian, filter, dan ringkasan
            untuk pengambilan keputusan yang tepat.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#4ade80] p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2">Laporan sudah ditangani</h3>
          <div className="text-white text-2xl font-bold">{reportData.sudahDitangani}%</div>
        </div>

        <div className="bg-[#fbbf24] p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2">Sedang proses</h3>
          <div className="text-white text-2xl font-bold">{reportData.sedangProses}%</div>
        </div>

        <div className="bg-[#f87171] p-6 rounded-lg">
          <h3 className="text-white font-medium mb-2">Belum ditangani</h3>
          <div className="text-white text-2xl font-bold">{reportData.belumDitangani}%</div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Grafik Status Laporan</h2>
        <div className="mb-6">
          <PieChart data={reportData} />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#4ade80] mr-2"></div>
              <span>Sudah ditangani</span>
            </div>
            <span className="font-medium">{Math.round((reportData.sudahDitangani / (reportData.sudahDitangani + reportData.sedangProses + reportData.belumDitangani)) * 100)}%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#fbbf24] mr-2"></div>
              <span>Sedang proses</span>
            </div>
            <span className="font-medium">{Math.round((reportData.sedangProses / (reportData.sudahDitangani + reportData.sedangProses + reportData.belumDitangani)) * 100)}%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#f87171] mr-2"></div>
              <span>Belum ditangani</span>
            </div>
            <span className="font-medium">{Math.round((reportData.belumDitangani / (reportData.sudahDitangani + reportData.sedangProses + reportData.belumDitangani)) * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;