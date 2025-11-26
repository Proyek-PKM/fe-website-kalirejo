import type { TableData } from "@/components/types/Table.types";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


interface Images {
  image_id: string;
  image_url: string;
  report_id: string;
  created_at: string;
}
// --- KOMPONEN BARU: PhotoAttachment ---
/**
 * Komponen untuk menampilkan lampiran foto (array URL).
 */
function PhotoAttachment({ id }: { id: number }) {
  const [images, setImages] = useState<Images[]>([]);
  const [fetchedUrls, setFetchedUrls] = useState<string[]>([]);

  if (!id) {
    return (
      <p className="text-slate-500 italic">
        Tidak ada lampiran foto tersedia.
      </p>
    );
  }

  useEffect(() => {
    fetch(`https://ephemeral.desakalirejo.id/report/all-images/${id}`)
      .then((res) => res.json())
      .then((data: Images[]) => {
        setImages(data);
      })
      .catch((err) => {
        console.error("Error fetching photos:", err);
      });
  }, [id]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await Promise.all(
          images.map(async (image) => {
            const res = await fetch(image.image_url, {
              method: "GET",
              headers: { "X-Api-Key": "jabirsibuk" }
            });

            // res.url itu URL final (bukan blob). Kalau server bener, ini cukup.
            return res.url;
          })
        );
        setFetchedUrls(urls);
      } catch (e) {
        console.error("Error fetching images:", e);
      }
    };

    if (images.length > 0) fetchImages();
  }, [images]);

  return (
    <div className="flex flex-wrap gap-4 mt-2">
      {fetchedUrls.length === 0 ? (
        <p className="text-slate-500 italic">
          Tidak ada lampiran foto tersedia.
        </p>
      ) : (
        fetchedUrls.map((url, idx) => (
          <div
            key={idx}
            className="w-32 h-32 overflow-hidden rounded-md border border-slate-300"
          >
            <img
              src={url}
              alt="Lampiran Foto"
              className="w-32 h-32 object-cover rounded-md"
            />

          </div>
        ))
      )}
    </div>
  );
}


// --- KOMPONEN LaporanDetailItem yang Diperbarui ---

function LaporanDetailItem({ dataFrag }: { dataFrag: TableData }) {
  // Catatan: Saya mengubah struktur item agar lebih mu{ photos }: { photos: string[] | undefined }dah dimanipulasi
  const items = [
    { title: "Kode Tiket", value: dataFrag.kodeTiket, render: null },
    { title: "Judul", value: dataFrag.judul, render: null },
    { title: "Proses", value: dataFrag.proses, render: null },
    { title: "", value: "", isPlaceholder: true }, // Placeholder

    { title: "Deskripsi", value: dataFrag.deskripsi, render: null },
    { title: "Status", value: dataFrag.status, render: null },
    { title: "", value: "", isPlaceholder: true }, // Placeholder

    // PISAHKAN LAMPIRAN FOTO menjadi bagian yang merender komponen terpisah
    {
      title: "Lampiran Foto",
      value: "",
      render: <PhotoAttachment id={dataFrag.no} />
    },

    { title: "", value: "", isPlaceholder: true }, // Placeholder
    { title: "", value: "", isPlaceholder: true }, // Placeholder
    { title: "Informasi Pelapor", value: "Detail kontak pelapor...", render: null }, // Contoh informasi lain
  ];

  return (
    <div className="grid grid-cols-[20%_1fr_20%] gap-2 min-h-[73vh]">
      {items.map((item, idx) => (
        <div
          key={idx}
          // Menggunakan item.isPlaceholder untuk menentukan style
          className={`rounded-lg p-5 ${item.isPlaceholder
            ? ""
            : "bg-white transition-all border border-transparent hover:border-slate-200"
            }`}
        >
          {/* Tampilkan konten berdasarkan properti 'render' atau 'value' */}
          {item.render ? (
            <>
              <h1 className="font-bold text-xl text-slate-700">{item.title}</h1>
              {item.render}
            </>
          ) : (
            // Jika tidak ada 'render', tampilkan 'value' (seperti sebelumnya)
            (item.value || item.title) && !item.isPlaceholder && (
              <>
                <h1 className="font-bold text-xl text-slate-700">{item.title}</h1>
                <p className="text-slate-600">{item.value}</p>
              </>
            )
          )}
        </div>
      ))}
    </div>
  );
}

// --- KOMPONEN LaporanDetail (Utama) ---

export default function LaporanDetail() {
  const { ticket } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // Casting 'data' ke tipe TableData untuk menghindari error TypeScript
  const data = location.state as TableData;

  useEffect(() => {
    // Redirect jika data tidak ada (misalnya diakses langsung melalui URL)
    if (!data || !data.kodeTiket) {
      navigate("/laporan");
    }
  }, [navigate, data]);

  // Handle case where data might not be fully loaded or redirected
  if (!data || !data.kodeTiket) {
    return <div className="p-9">Loading...</div>;
  }

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
        {/* Meneruskan data yang sudah divalidasi */}
        <LaporanDetailItem dataFrag={data} />
      </main>
    </div>
  );
}