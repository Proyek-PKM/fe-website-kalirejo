import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Icon from "../icon/Icon"; // Pastikan path ini benar
import { useNavigate } from "react-router-dom";
import "./TableLaporan.css"; // Pastikan file CSS ini ada
import type { Report, TableData } from "../types/Table.types";

// --- 1. DEFINISI TIPE DATA (Jika tidak ada file ../types/Table.types) ---

// --- 2. KONSTANTA ---

const rowsPerPage = 10;

// --- 3. FUNGSI HELPER ---

// /**
//  * Memproses array Report dari server menjadi array TableData yang siap ditampilkan.
//  * Mengurutkan berdasarkan tanggal dibuat (terbaru di atas) dan menambahkan nomor urut.
//  */
// const processReportsToTableData = (reports: Report[]): TableData[] => {
//   // Buat salinan lalu sortir berdasarkan created_at Descending (Terbaru ke Terlama)
//   const sortedReports = [...reports].sort((a, b) =>
//     new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
//   );

//   // Mapping dan menambahkan nomor urut (no) dimulai dari 1
//   return sortedReports.map((report, index) => ({
//     no: index + 1,
//     kodeTiket: report.kode_tiket,
//     judul: (report as any).title ?? (report as any).judul ?? "",
//     deskripsi: (report as any).description ?? (report as any).deskripsi ?? "",
//     proses: (report as any).proses ?? "",
//     status: (report as any).status ?? "",
//     report_id: report.report_id,
//   }));
// };

// --- 4. KOMPONEN UTAMA ---

export default function TableLaporan() {
  // isDescending: true berarti NO terbesar (NO yang paling baru/kecil) berada di atas (Descending)
  const [isDescending, setIsDescending] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    const fecthAllReports = async () => {
      try {
        const response = await fetch("https://ephemeral.desakalirejo.id/report", {
          method: "GET",
        });
        const data: Report[] = await response.json();

        // Jangan gunakan processReportsToTableData yang melakukan sorting.
        // Gunakan urutan dari server (tanpa sort) dan tambahkan nomor urut di client.
        const processedDataWithoutSort = data.map((report, index) => ({
          no: index + 1,
          kodeTiket: report.kode_tiket,
          judul: (report as any).title ?? (report as any).judul ?? "",
          deskripsi: (report as any).description ?? (report as any).deskripsi ?? "",
          proses: (report as any).proses ?? "",
          status: (report as any).status ?? "",
          report_id: report.report_id,
        }));
        setTableData(processedDataWithoutSort);
        console.log("Data laporan fetched and processed (no sort):", processedDataWithoutSort);
      } catch (error) {
        console.error("Error fetching laporan data:", error);
      }
    }
    fecthAllReports();
  }, [])

  // 1. FILTERING data berdasarkan judul
  const filteredData = tableData.filter((item) =>
    item.judul.toLowerCase().includes(search.toLowerCase())
  );

  // 2. SORTING data yang sudah difilter (berdasarkan NO)
  const usedData = [...filteredData].sort((a, b) => {
    // Jika isDescending false, a.no - b.no (NO kecil ke besar)
    return isDescending ? b.no - a.no : a.no - b.no;
  });

  // Penanganan setSort untuk mengubah state isDescending
  const handleSetSort = (isAscending: boolean) => {
    // Jika tombol mengaktifkan ascending (isAscending=true), maka kita set isDescending=false
    setIsDescending(!isAscending);
  };


  return (
    <section className="flex flex-col gap-3 my-5">
      <SearchInTable
        // sort: true jika Ascending (panah ke atas)
        sort={!isDescending}
        setSort={handleSetSort}
        setSearch={setSearch}
      />
      <div className="scroller">
        <Table data={usedData} dataRaw={tableData} />
      </div>
    </section>
  );
}

// --- 5. KOMPONEN TABLE ---

function Table({ data, dataRaw }: { data: TableData[], dataRaw: TableData[] }) {
  // Jika dataRaw adalah 0, emptyRows akan dihitung positif
  const emptyRows = rowsPerPage - dataRaw.length;
  const navigate = useNavigate();

  const getStatusClass = (status: string) => {
    const lowerStatus = status.toLowerCase();
    switch (lowerStatus) {
      case 'pending':
        return 'bg-red-500';
      case 'process':
        return 'bg-yellow-500';
      case 'resolved':
      case 'selesai':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

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
                  className={`text-white text-sm text-nowrap px-2 py-1 rounded ${getStatusClass(row.status)}`}
                >
                  {row.status}
                </span>
              </td>
              <td
                className="lmaox px-4 py-2 cursor-pointer underline"
                onClick={() =>
                  // Kirim data baris saat ini melalui state navigasi
                  navigate(`/laporan/${row.kodeTiket}`, { state: row })
                }
              >
                Detail
              </td>
            </tr>
          ))}
          {/* Tambahkan baris kosong jika diperlukan */}
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

// --- 6. KOMPONEN SEARCH DAN SORTING ---

function SearchInTable({
  sort, // true = Ascending (Panah ke Atas), false = Descending (Panah ke Bawah)
  setSort, // Mengatur status Ascending/Descending
  setSearch,
}: {
  sort: boolean;
  setSort: (isAscending: boolean) => void;
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
          // Toggle urutan: membalik nilai sort saat ini
          onClick={() => setSort(!sort)}
          className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]"
        >
          {/* Ikon panah sesuai dengan status sort (Ascending atau Descending) */}
          <Icon icon={sort ? "arrow_upward" : "arrow_downward"} />
        </button>
      </div>
    </>
  );
}