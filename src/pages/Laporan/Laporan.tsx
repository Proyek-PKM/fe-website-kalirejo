import { useState, type Dispatch, type SetStateAction } from "react";
import type { DataTable } from "../../components/TableLaporan/Table";
import Icon from "../../components/Icon/Icon";
import "../../components/TableLaporan/TableLaporan.css";
import { useNavigate } from "react-router-dom";

main
const LaporanPage: React.FC = () => {

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
];

export default function TableLaporan() {
  const [isDescending, setIsDescending] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [tableData, setTableData] = useState<DataTable[]>(dummyData);

  const filteredData = tableData.filter((item) =>
    item.judul.toLowerCase().includes(search.toLowerCase())
  );

  const usedData = [...filteredData].sort((a, b) =>
    isDescending ? Number(b.no) - Number(a.no) : Number(a.no) - Number(b.no)
  );

  // Update status per baris
  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedData = [...tableData];
    updatedData[index].status = newStatus;
    setTableData(updatedData);
  };

main
  return (
    <section className="flex flex-col gap-3 my-5">
      <SearchInTable
        sort={isDescending}
        setSort={setIsDescending}
        search={search}
        setSearch={setSearch}
      />
      <div className="scroller">
        <Table data={usedData} handleStatusChange={handleStatusChange} />
      </div>
    </section>
  );
}

function Table({
  data,
  handleStatusChange,
}: {
  data: DataTable[];
  handleStatusChange: (index: number, newStatus: string) => void;
}) {
  const emptyRows = rowsPerPage - data.length;
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-red-500 text-white";
      case "On Progress":
        return "bg-yellow-500 text-white";
      case "Selesai":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="lamo bg-white">
      <table className="w-full rounded-2xl border-collapse">
        <thead className="sticky top-0 bg-white z-10 lmaos">
          <tr className="bg-white">
            <th className="lmaoz px-5 py-4 text-left">No</th>
            <th className="lmaoz px-4 py-2 text-left text-nowrap">Kode Tiket</th>
            <th className="lmaoz px-4 py-2 text-left">Judul</th>
            <th className="lmaoz px-4 py-2 text-left">Deskripsi</th>
            <th className="lmaoz px-4 py-2 text-left">Proses</th>
            <th className="lmaoz px-4 py-2 text-left">Status</th>
            <th className="lmaozx px-4 py-2 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, i) => (
            <tr key={i} className="bg-white transition-all hover:bg-slate-200">
              <td className="lmao px-4 py-5">{row.no}</td>
              <td className="lmao px-4 py-2">{row.kodeTiket}</td>
              <td className="lmao px-4 py-2">{row.judul}</td>
              <td className="lmao px-4 py-2">{row.deskripsi}</td>
              <td className="lmao px-4 py-2">{row.proses}</td>
              <td className="lmao px-4 py-2">
                <select
                  className={`px-2 py-1 rounded ${getStatusColor(row.status)}`}
                  value={row.status}
                  onChange={(e) => handleStatusChange(i, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="On Progress">On Progress</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </td>
              <td
                className="lmaox px-4 py-2 cursor-pointer underline"
                onClick={() =>
                  navigate(`/laporan/${row.kodeTiket}`, { state: row })
                }
              >
                Detail
              </td>
            </tr>
          ))}
          {/* baris kosong */}
          {Array.from({ length: emptyRows > 0 ? emptyRows : 0 }).map((_, i) => (
            <tr key={`empty-${i}`}>
              <td className="lmaox px-4 py-5" colSpan={7}>
                &nbsp;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SearchInTable({
  sort,
  setSort,
  search,
  setSearch,
}: {
  sort: boolean;
  setSort: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  const [word, setWord] = useState<string>("");
  const [filter, setFilter] = useState<boolean>(false);

  return (
    <>
      <section className="flex flex-col gap-3 my-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Laporan</h1>
        <p className="text-base text-gray-700 mb-4">
Halaman ini digunakan untuk memantau dan mengelola laporan dengan tampilan yang rapi, interaktif, dan ramah pengguna. Data disajikan secara terstruktur sehingga mudah dibaca, dilengkapi fitur pencarian, filter, dan ringkasan informasi untuk memudahkan analisis serta pengambilan keputusan.
        </p>
      </section>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setSearch(word)}
          className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]"
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
            className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]"
          >
            <Icon icon="action_key" />
          </button>
          {filter && (
            <div className="absolute top-16 right-0 z-50 shadow-xl bg-white p-4 w-[20vw] rounded-lg">
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
    </>
  );
}
