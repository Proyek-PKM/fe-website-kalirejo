import type { DataTable } from "@/components/types/Table.types";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function LaporanDetail() {
  const { ticket } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  useEffect(() => {
    if (!data) {
      navigate("/laporan");
    }
  }, [navigate, data]);
  return (
    <div className="flex flex-col p-9">
      <header>
        <h1 className="text-3xl text-[#363636] font-semibold mb-4">
          <span
            className="cursor-pointer no-underline hover:underline"
            onClick={() => navigate("/laporan")}
          >
            Laporan
          </span>{" "}
          {">"} {ticket}
        </h1>
        <p className="text-[#7E7E7E] w-[85%]">
          Halaman ini digunakan untuk melihat detail laporan secara rinci.
          Setiap laporan disajikan dengan informasi lengkap mengenai status,
          proses penanganan, dan deskripsi sehingga memudahkan pemantauan dan
          analisis.
        </p>
      </header>
      <main className="h-full my-10">
        <LaporanDetailItem dataFrag={data} />
      </main>
    </div>
  );
}

function LaporanDetailItem({ dataFrag }: { dataFrag: DataTable }) {
  const items = [
    { title: "Kode Tiket", value: dataFrag.kodeTiket },
    { title: "Judul", value: dataFrag.judul },
    { title: "Proses", value: dataFrag.proses },
    { title: "", value: "", isContent: false }, // empty placeholder
    { title: "Deskripsi", value: dataFrag.deskripsi },
    { title: "Status", value: dataFrag.status },
    { title: "", value: "", isContent: false },
    { title: "Lampiran Foto", value: dataFrag.deskripsi },
    { title: "", value: "", isContent: false },
    { title: "", value: "", isContent: false },
    { title: "Informasi Pelapor", value: dataFrag.deskripsi },
  ];

  return (
    <div className="grid grid-cols-[20%_1fr_20%] gap-2 min-h-[73vh]">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`rounded-lg p-5 ${
            item.isContent === false
              ? ""
              : "bg-white transition-all border border-transparent hover:border-slate-200"
          }`}
        >
          {item.value && (
            <>
              <h1 className="font-bold text-xl text-slate-700">{item.title}</h1>
              <p className="text-slate-600">{item.value}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
