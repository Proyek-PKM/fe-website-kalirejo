import Icon from "../../components/icon/Icon";
import { useEffect, useState } from "react";
import "../../components/TableLaporan/TableLaporan.css";
import { useNavigate } from "react-router-dom";

const InformasiDesa = () => {
  return (
    <div className="flex flex-col p-9">
      <header>
        <h1 className="text-3xl text-[#363636] font-semibold mb-4">Informasi Desa</h1>
        <p className="text-[#7E7E7E] w-[85%]">
          Halaman ini menampilkan informasi lengkap tentang desa, termasuk profil
          desa, data demografis, sejarah, wilayah administratif, dan fasilitas
          umum. Informasi disajikan secara terstruktur dan mudah diakses untuk
          memberikan gambaran umum tentang kondisi dan karakteristik desa.
        </p>
      </header>
      <main className="h-full py-5">
        <TableInformasi />
      </main>
    </div>
  );
};

export default InformasiDesa;

function TableAction() {
  const [options, setOptions] = useState<boolean>(false);
  return (
    <>
      <div className="flex items-center gap-3" >
        <button
          className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C]  transition-all hover:scale-[1.1]"
        >
          <Icon icon="search" />
        </button>
        <input
          className="py-3.5 p-4 bg-white rounded-3xl w-full focus:outline-none"
          type="text"
          placeholder="cari"
        />
        <div className="relative">
          <button
            onClick={() => setOptions(!options)}
            className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C]  transition-all hover:scale-[1.1]"
          >
            <Icon icon="grid_view" />
          </button>
          {options && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 p-2">
              {/* Content of the options dropdown */}
              <button className="p-3 bg-green-400 text-gray-50 rounded-xl">Tambah Info Desa</button>
            </div>
          )}
        </div>

      </div >
    </>
  );
}

function TableInformasi() {
  const navigate = useNavigate()
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch('https://ephemeral.desakalirejo.id/infodesa', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data informasi desa fetched:', data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching informasi desa data:', error);
      });
  }, []);
  return (
    <>

      <TableAction />
      <div className="lamo bg-white mt-3">
        <table className="w-full rounded-2xl border-collapse">
          <thead className="sticky top-0 bg-white z-10 border-b border-gray-200">
            <tr className="grid grid-cols-[50px_1fr_2fr_200px_150px_150px]">
              <th className="lmaoz px-3 py-4 text-left">No</th>
              <th className="lmaoz px-4 py-4 text-left">Judul</th>
              <th className="lmaoz px-4 py-4 text-left">Isi</th>
              <th className="lmaoz px-4 py-4 text-left">Kategori</th>
              <th className="lmaoz px-4 py-4 text-left">Tanggal</th>
              <th className="lmaoz px-4 py-4 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.length > 0 ? (
              data.map((info, index) => (
                <tr key={info.id} className=" hover:bg-gray-100 grid grid-cols-[50px_1fr_2fr_200px_150px_150px] border-b ">
                  <td className="lmaoz py-4 px-3 text-center">{index + 1}</td>
                  <td className="lmaoz py-4 px-6">{info.judul}</td>
                  <td className="lmaoz py-4 px-6">{info.preview}</td>
                  <td className="lmaoz py-4 px-6">{info.kategori}</td>
                  <td className="lmaoz py-4 px-6">{info.tanggal}</td>
                  <td className="lmaoz py-4 px-6 text-center">
                    <button onClick={() => navigate(`edit/${info.id}`)} className="bg-blue-500 text-white px-4 py-2 text-xs rounded-lg hover:bg-blue-600 transition">
                      Lihat Detail
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  Tidak ada data informasi desa tersedia.
                </td>
              </tr>
            )}
            {/* Tambahkan baris kosong jika diperlukan */}
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={`empty-${i}`}>
                <td className="lmaox px-4 py-5" colSpan={7}>
                  &nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
