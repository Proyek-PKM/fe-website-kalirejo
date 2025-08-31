import MonitoringChart from '../../components/charts/MonitoringChart';
import ProgressChart from '../../components/charts/ProgressChart';

function Dashboard() {
  return (
    <div className="flex flex-col p-9">
      <h1 className="text-3xl text-neutral-800 font-semibold mb-4">Dashboard Admin</h1>
      <p className="text-neutral-600 mb-8">
        Sistem ini digunakan untuk memantau dan mengelola laporan dengan tampilan yang rapi, interaktif, dan ramah
        pengguna. Data disajikan secara terstruktur sehingga mudah dibaca, dilengkapi fitur pencarian, filter, dan
        ringkasan untuk pengambilan keputusan yang tepat.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
          <h2 className="text-sm font-semibold text-neutral-700 mb-2">
            Total Nomor Terdaftar
          </h2>
          <p className="text-3xl font-bold text-primary-600">120</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
          <h2 className="text-sm font-semibold text-neutral-700 mb-2">
            Total Warga
          </h2>
          <p className="text-3xl font-bold text-secondary-600">350</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
          <h2 className="text-sm font-semibold text-neutral-700 mb-2">
            Total Layanan
          </h2>
          <p className="text-3xl font-bold text-primary-500">15</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
          <h2 className="text-sm font-semibold text-neutral-700 mb-2">
            Total Admin
          </h2>
          <p className="text-3xl font-bold text-secondary-500">5</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monitoring Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
          <h2 className="text-lg font-semibold text-neutral-800 mb-4">Laporan Monitoring Warga</h2>
          <div className="mb-4">
            <select className="text-sm border rounded-lg px-3 py-2 text-neutral-600 bg-neutral-50 hover:bg-neutral-100 transition-colors">
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
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
            <h2 className="text-lg font-semibold text-neutral-800 mb-4">Warga Terverifikasi</h2>
            <div className="flex justify-center">
              <ProgressChart value={60} />
            </div>
          </div>

          {/* Message History */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
            <h2 className="text-lg font-semibold text-neutral-800 mb-4">Riwayat Pesan</h2>
            <div className="space-y-4">
              {[
                { name: 'Indra Wijaya', type: 'Pengajuan KTP', date: '07/08/2023' },
                { name: 'Budi Santoso', type: 'Pengajuan KK', date: '07/08/2023' },
                { name: 'Andi Putra', type: 'Pindah Domisili', date: '07/08/2023' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-neutral-800">{item.name}</p>
                    <p className="text-neutral-600">{item.type}</p>
                  </div>
                  <p className="text-neutral-500">{item.date}</p>
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