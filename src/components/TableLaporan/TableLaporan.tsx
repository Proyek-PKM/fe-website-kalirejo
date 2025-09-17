import { useState, type Dispatch, type SetStateAction } from "react";
import type { DataTable } from "../types/Table.types";
import Icon from "../icon/Icon";
import "./TableLaporan.css";
import { useNavigate } from "react-router-dom";
const rowsPerPage = 10;

const dummyData: DataTable[] = [
  {
    no: "01",
    kodeTiket: "LAP-001",
    judul: "Tolong tambahin",
    deskripsi:
      "Tolong tambahin menu baru di navbar untuk akses cepat ke halaman laporan bulanan.",
    proses: "Sedang dilakukan Penelitian",
    status: "Pending",
  },
  {
    no: "02",
    kodeTiket: "LAP-002",
    judul: "Perbaikan bug login",
    deskripsi:
      "User tidak bisa login setelah update sistem autentikasi ke versi terbaru.",
    proses: "Dalam pengerjaan",
    status: "On Progress",
  },
  {
    no: "03",
    kodeTiket: "LAP-003",
    judul: "Update fitur export",
    deskripsi:
      "Tambah opsi export ke format CSV dan Excel, serta optimasi performa export untuk data besar.",
    proses: "Menunggu konfirmasi",
    status: "Pending",
  },
  {
    no: "04",
    kodeTiket: "LAP-004",
    judul: "Integrasi API pembayaran",
    deskripsi:
      "Integrasikan API Midtrans untuk memproses pembayaran langsung dari aplikasi.",
    proses: "Menunggu approval dari manajer",
    status: "Pending",
  },
  {
    no: "05",
    kodeTiket: "LAP-005",
    judul: "Perbaikan tampilan mobile",
    deskripsi:
      "Tampilan halaman dashboard berantakan di layar kecil, perlu penyesuaian responsive design.",
    proses: "Dalam pengerjaan",
    status: "On Progress",
  },
  {
    no: "06",
    kodeTiket: "LAP-006",
    judul: "Penambahan notifikasi real-time",
    deskripsi:
      "Tambahkan notifikasi real-time menggunakan WebSocket untuk update status tiket.",
    proses: "Sedang dilakukan testing internal",
    status: "Testing",
  },
  {
    no: "07",
    kodeTiket: "LAP-007",
    judul: "Migrasi database",
    deskripsi:
      "Migrasi dari MySQL ke PostgreSQL untuk meningkatkan skalabilitas dan keamanan data.",
    proses: "Proses backup data",
    status: "On Progress",
  },
  {
    no: "08",
    kodeTiket: "LAP-008",
    judul: "Penghapusan fitur lama",
    deskripsi:
      "Hapus fitur laporan mingguan karena jarang digunakan dan membebani server.",
    proses: "Menunggu persetujuan dari user",
    status: "Pending",
  },
  {
    no: "09",
    kodeTiket: "LAP-009",
    judul: "Peningkatan keamanan login",
    deskripsi:
      "Implementasi Two-Factor Authentication (2FA) untuk semua akun admin.",
    proses: "Dalam tahap coding",
    status: "On Progress",
  },
  {
    no: "10",
    kodeTiket: "LAP-010",
    judul: "Optimasi query database",
    deskripsi:
      "Refactor query yang memakan waktu lama agar lebih efisien dan cepat diproses.",
    proses: "Testing di staging server",
    status: "Testing",
  },
  {
    no: "11",
    kodeTiket: "LAP-011",
    judul: "Perbaikan bug notifikasi email",
    deskripsi:
      "Email notifikasi terkadang terkirim dua kali, perlu dicek triggernya.",
    proses: "Dalam pengerjaan",
    status: "On Progress",
  },
  {
    no: "12",
    kodeTiket: "LAP-012",
    judul: "Penambahan filter pencarian",
    deskripsi:
      "Tambah filter pencarian tiket berdasarkan tanggal, status, dan kategori.",
    proses: "Menunggu feedback dari QA",
    status: "Pending",
  },
  {
    no: "13",
    kodeTiket: "LAP-013",
    judul: "Implementasi dark mode",
    deskripsi:
      "Tambahkan opsi dark mode untuk seluruh aplikasi agar nyaman digunakan di malam hari.",
    proses: "Sedang dikerjakan oleh tim UI/UX",
    status: "On Progress",
  },
  {
    no: "14",
    kodeTiket: "LAP-014",
    judul: "Integrasi sistem chat internal",
    deskripsi:
      "Buat fitur chat antar user untuk memudahkan komunikasi tanpa keluar dari aplikasi.",
    proses: "Dalam pengembangan",
    status: "On Progress",
  },
  {
    no: "15",
    kodeTiket: "LAP-015",
    judul: "Pembuatan dokumentasi API",
    deskripsi:
      "Dokumentasikan seluruh endpoint API menggunakan Swagger agar mudah dipahami developer baru.",
    proses: "Sedang penulisan dokumentasi",
    status: "On Progress",
  },
];

export default function TableLaporan() {
  const [isDescending, setIsDescending] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedReport, setSelectedReport] = useState<DataTable | null>(null);

  const filteredData = dummyData.filter((item) =>
    item.judul.toLowerCase().includes(search.toLowerCase())
  );

  const usedData = [...filteredData].sort((a, b) =>
    isDescending ? Number(b.no) - Number(a.no) : Number(a.no) - Number(b.no)
  );

  return (
    <section className="flex flex-col gap-3 my-5">
      <SearchInTable
        sort={isDescending}
        setSort={setIsDescending}
        // search={search}
        setSearch={setSearch}
      />
      <div className="scroller">
        <Table 
          data={usedData} 
          selectedReport={selectedReport}
          setSelectedReport={setSelectedReport}
        />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-[#363636]">Laporan Pilihan</h2>
        <LaporanPilihan selectedReport={selectedReport} />
      </div>
    </section>
  );
}

function Table({ 
  data, 
  selectedReport, 
  setSelectedReport 
}: { 
  data: DataTable[];
  selectedReport: DataTable | null;
  setSelectedReport: Dispatch<SetStateAction<DataTable | null>>;
}) {
  const emptyRows = rowsPerPage - dummyData.length;
  const navigate = useNavigate();

  return (
    <div className="lamo  bg-white">
      <table className="w-full rounded-2xl border-collapse">
        <thead className="sticky top-0 bg-white z-10 lmaos">
          <tr className="bg-white">
            <th className="lmaoz px-5 py-4 text-left">No</th>
            <th className="lmaoz px-4 py-2 text-left text-nowrap">
              Kode Tiket
            </th>
            <th className="lmaoz px-4 py-2 text-left">Judul</th>
            <th className="lmaoz px-4 py-2 text-left">Deskripsi</th>
            <th className="lmaoz px-4 py-2 text-left">Proses</th>
            <th className="lmaoz px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, i) => (
            <tr 
              key={i} 
              className={`transition-all hover:bg-slate-200 cursor-pointer ${
                selectedReport?.kodeTiket === row.kodeTiket 
                  ? 'bg-blue-50 border-l-4 border-blue-500' 
                  : 'bg-white'
              }`}
              onClick={() => setSelectedReport(row)}
            >
              <td className="lmao px-4 py-5">{row.no}</td>
              <td className="lmao px-4 py-2">{row.kodeTiket}</td>
              <td className="lmao px-4 py-2">{row.judul}</td>
              <td className="lmao px-4 py-2">{row.deskripsi}</td>
              <td className="lmao px-4 py-2">{row.proses}</td>
              <td className="lmao px-4 py-2">
                <span
                  className={`text-white text-sm text-nowrap px-2 py-1 rounded ${
                    row.status === "Pending" ? "bg-red-500" : "bg-yellow-500"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
          {/* 
          Tambahin baris kosong */}
          {Array.from({ length: emptyRows > 0 ? emptyRows : 0 }).map((_, i) => (
            <tr key={`empty-${i}`}>
              <td className="lmaox px-4 py-5" colSpan={6}>
                &nbsp;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function LaporanPilihan({ 
  selectedReport 
}: { 
  selectedReport: DataTable | null;
}) {
  const navigate = useNavigate();
  
  if (!selectedReport) {
    return (
      <div className="bg-gray-50 p-8 rounded-lg text-center text-gray-500 border-2 border-dashed border-gray-300">
        <p className="text-lg">Pilih laporan dari tabel di atas untuk melihat detail</p>
      </div>
    );
  }

  // Consistent background class untuk semua cells
  const cellBgClass = "bg-emerald-50 rounded-lg p-3 border border-emerald-100";

  return (
    <div className="p-6 bg-white rounded-xl">
      {/* 3-Column, 2-Row Grid dengan proporsi 1:7:2 */}
      <div 
        className="grid gap-3 mb-4" 
        style={{
          gridTemplateColumns: '1fr 7fr 2fr',
          gridTemplateRows: 'auto auto'
        }}
      >
        {/* Row 1, Col 1: Kode Tiket */}
        <div className={`${cellBgClass} flex items-center justify-center`}>
          <h3 className="font-bold text-gray-800 text-lg text-center">
            {selectedReport.kodeTiket}
          </h3>
        </div>
        
        {/* Row 1, Col 2: Judul */}
        <div className={cellBgClass}>
          <h4 className="font-semibold text-gray-700 mb-2">Judul</h4>
          <p className="text-gray-800">{selectedReport.judul}</p>
        </div>
        
        {/* Row 1, Col 3: Proses */}
        <div className={cellBgClass}>
          <h4 className="font-semibold text-gray-700 mb-2">Proses</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{selectedReport.proses}</p>
        </div>
        
        {/* Row 2, Col 1: Empty Cell - No Background */}
        <div></div>
        
        {/* Row 2, Col 2: Deskripsi */}
        <div className={cellBgClass}>
          <h4 className="font-semibold text-gray-700 mb-2">Deskripsi</h4>
          <p className="text-gray-800 leading-relaxed">{selectedReport.deskripsi}</p>
        </div>
        
        {/* Row 2, Col 3: Status */}
        <div className={cellBgClass}>
          <h4 className="font-semibold text-gray-700 mb-2">Status</h4>
          <span className={`inline-block px-3 py-1 rounded text-white text-sm font-medium ${
            selectedReport.status === 'Pending' ? 'bg-red-500' : 
            selectedReport.status === 'Testing' ? 'bg-blue-500' :
            'bg-yellow-500'
          }`}>
            {selectedReport.status}
          </span>
        </div>
      </div>
      
      {/* Button Aksi - Outside Grid */}
      <div className="flex justify-end">
        <button 
          onClick={() => navigate(`/laporan/${selectedReport.kodeTiket}`, { 
            state: selectedReport 
          })}
          className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg transition-colors font-medium shadow-sm"
        >
          Aksi
        </button>
      </div>
    </div>
  );
}

function SearchInTable({
  sort,
  setSort,
  // search,
  setSearch,
}: {
  sort: boolean;
  setSort: Dispatch<SetStateAction<boolean>>;
  // search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  const [word, setWord] = useState<string>("");
  const [filter, setFilter] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSearch(word)}
          className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C]  transition-all hover:scale-[1.1]"
        >
          <Icon icon="search" />
        </button>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="py-3.5 p-4 bg-white rounded-3xl w-full focus:outline-none"
          type="text"
          placeholder="cari"
        />
        <div className="relative">
          <button
            onClick={() => setFilter(!filter)}
            className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C]  transition-all hover:scale-[1.1]"
          >
            <Icon icon="action_key" />
          </button>
          {filter && (
            <div className="absolute top-16 right-0 z-50 shadow-xl  bg-white p-4 w-[20vw] rounded-lg ">
              soon
            </div>
          )}
        </div>
        <button
          onClick={() => setSort(!sort)}
          className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]"
        >
          <Icon icon={!sort ? "arrow_downward" : "arrow_upward"} />
        </button>
      </div>
      {/* {btnSort && (
        <div className="flex justify-end">
          <div className="bg-white p-4 px-6 rounded-3xl">kontol</div>
        </div>
      )} */}
    </>
  );
}
