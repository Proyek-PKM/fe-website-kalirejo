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
        <Table data={usedData} />
      </div>
    </section>
  );
}

function Table({ data }: { data: DataTable[] }) {
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
            <th className="lmaozx  px-4 py-2 text-left">Aksi</th>
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
                <span
                  className={`text-white text-sm text-nowrap px-2 py-1 rounded ${
                    row.status === "Pending" ? "bg-red-500" : "bg-yellow-500"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td
                className="lmaox px-4 py-2 cursor-pointer underline"
                onClick={() =>
                  navigate(`/laporan/${row.kodeTiket}`, { state: data[i] })
                }
              >
                Detail
              </td>
            </tr>
          ))}
          {/* 
          Tambahin baris kosong */}
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
    </>
  );
}
