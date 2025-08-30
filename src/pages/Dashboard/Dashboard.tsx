import MonitoringChart from '../../components/charts/MonitoringChart';
import ProgressChart from '../../components/charts/ProgressChart';

function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Admin</h1>
      <p className="text-base text-gray-700 mb-8">
        Sistem ini digunakan untuk memantau dan mengelola laporan dengan tampilan yang rapi, interaktif, dan ramah
        pengguna. Data disajikan secara terstruktur sehingga mudah dibaca, dilengkapi fitur pencarian, filter, dan
        ringkasan untuk pengambilan keputusan yang tepat.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Total Nomor Terdaftar
          </h2>
          <p className="text-3xl font-bold text-blue-600">120</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Total Warga
          </h2>
          <p className="text-3xl font-bold text-green-600">350</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Total Layanan
          </h2>
          <p className="text-3xl font-bold text-purple-600">15</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">
            Total Admin
          </h2>
          <p className="text-3xl font-bold text-red-600">5</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monitoring Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Laporan Monitoring Warga</h2>
          <div className="mb-4">
            <select className="text-sm border rounded-lg px-3 py-2 text-gray-600">
              <option>Mingguan</option>
              <option>Bulanan</option>
              <option>Tahunan</option>
            </select>
          </div>
          <MonitoringChart />
        </div>

        {/* Progress and History */}
        <div className="flex flex-col gap-6">
          {/* Verification Progress */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Warga Terverifikasi</h2>
            <div className="flex justify-center">
              <ProgressChart value={60} />
            </div>
          </div>

          {/* Message History */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Riwayat Pesan</h2>
            <div className="space-y-4">
              {[
                { name: 'Indra Wijaya', type: 'Pengajuan KTP', date: '07/08/2023' },
                { name: 'Budi Santoso', type: 'Pengajuan KK', date: '07/08/2023' },
                { name: 'Andi Putra', type: 'Pindah Domisili', date: '07/08/2023' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-gray-500">{item.type}</p>
                  </div>
                  <p className="text-gray-400">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;