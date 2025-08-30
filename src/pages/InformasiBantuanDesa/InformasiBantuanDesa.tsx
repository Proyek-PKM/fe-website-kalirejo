const bantuanDummy = [
  {
    id: "B001",
    nama: "Bantuan PKH",
    deskripsi: "Program Keluarga Harapan untuk keluarga prasejahtera.",
    tanggal: "2025-08-10",
    dana: "Rp. 1.000.000",
  },
  {
    id: "B002",
    nama: "BLT Dana Desa",
    deskripsi: "Bantuan langsung tunai dari dana desa.",
    tanggal: "2025-08-15",
    dana: "Rp. 1.000.000",
  },
  {
    id: "B003",
    nama: "Bantuan Sembako",
    deskripsi: "Distribusi sembako untuk masyarakat terdampak bencana.",
    tanggal: "2025-08-20",
    dana: "Rp. 1.000.000",
  },
];

const InformasiBantuan = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Informasi Bantuan Desa
      </h1>

      <p className="text-gray-700 mb-6">
        Halaman ini berisi daftar bantuan yang dikelola desa, lengkap dengan
        deskripsi, status, dan tanggal pelaksanaan. Informasi disajikan secara
        terstruktur agar mudah dipahami oleh masyarakat.
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Nama Bantuan</th>
              <th className="border px-4 py-2">Deskripsi</th>
              <th className="border px-4 py-2">Tanggal</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bantuanDummy.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.nama}</td>
                <td className="border px-4 py-2">{item.deskripsi}</td>
                <td className="border px-4 py-2">{item.tanggal}</td>
                <td className="border px-4 py-2">{item.dana}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InformasiBantuan;
