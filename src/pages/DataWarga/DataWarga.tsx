import { dataWarga } from '../../data/dataWarga';

export default function DataWarga() {

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Data Warga</h1>
          <p className="text-sm text-gray-600 mt-1">
            Halaman ini digunakan untuk mengakses dan mengelola data warga yang terdaftar otomatis melalui interaksi chatbot desa. 
            Data disajikan secara jelas dan terstruktur untuk mempermudah pemantauan, validasi, dan pengelolaan informasi kependudukan.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]">
          <span className="material-symbols-rounded">search</span>
        </button>
        <input
          className="py-3.5 p-4 bg-white rounded-3xl w-full focus:outline-none"
          type="text"
          placeholder="cari warga"
        />
        <button className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]">
          <span className="material-symbols-rounded">sort</span>
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-neutral-100">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
              <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">NIK</th>
              <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nomor</th>
              <th className="py-3 px-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dataWarga.map((warga) => (
              <tr key={warga.id} className="hover:bg-gray-50">
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900 text-center">{warga.id}</td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900 text-center">{warga.nama}</td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900 text-center">{warga.nik}</td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-900 text-center">{warga.nomor}</td>
                <td className="py-4 px-6 whitespace-nowrap text-center">
                  <div className="flex items-center justify-center">
                    <div className="text-sm text-gray-900">{warga.alamat.dusun}</div>
                    <div className="mx-2 border-l border-gray-200 h-4 self-center"></div>
                    <div className="text-sm text-gray-500">{warga.alamat.rtRw}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Welcome Message Card */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100 text-center">
        <h2 className="text-xl font-semibold text-neutral-800">
          🏠 Melayani masyarakat untuk Desa Kalirejo yang lebih maju
        </h2>
        <p className="text-neutral-600 mt-2">
          Data warga diperbarui secara berkala - hubungi kontor desa untuk informasi lebih lanjut
        </p>
      </div>
    </div>
  );
}