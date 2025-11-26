import React, { useState, useEffect, FC, FormEvent, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';

// --- Tipe Data ---

interface InformasiDesa {
  judul: string;
  isi: string;
  kategori: string;
}

// --- Komponen Utama ---

const EditInformasi: FC = () => {
  const { id } = useParams()
  let editId = id

  // 2. State untuk Data Formulir
  const [formData, setFormData] = useState<InformasiDesa>({
    judul: '',
    isi: '',
    kategori: '',
  });

  // 3. State untuk Status UI
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  // Fungsi Simulasi Fetch Data (Mirip dengan useEffect asli Anda)
  useEffect(() => {
    if (!editId) return;

    // Reset status
    setLoading(true);
    setError(null);

    // Simulasi pengambilan data dari API
    // URL asli: https://ephemeral.desakalirejo.id/infodesa/${editId}
    const apiUrl = `https://ephemeral.desakalirejo.id/infodesa/${editId}`;

    // Fungsi fetch disimulasikan agar selalu berhasil dengan data dummy untuk mengisi form
    const fetchData = async () => {
      try {
        // Ganti dengan fetch nyata jika Anda berada di lingkungan yang mendukungnya
        console.log(`Simulasi Fetch data untuk ID: ${editId} dari ${apiUrl}`);
        const res = await fetch(apiUrl, {
          method: "POST"
        })
        const result = await res.json()
        // Data Mock yang seharusnya diterima dari API
        const mockData: InformasiDesa = {
          judul: result.judul,
          isi: result.isi,
          kategori: result.kategori,
        };

        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi jeda jaringan

        setFormData(mockData);
        setLoading(false);
      } catch (err) {
        setError("Gagal memuat data informasi desa.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();

  }, [editId]);

  // Handler Perubahan Input
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler Submit Formulir
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const payload = {
      id: editId?.toString(),
      judul: formData.judul || "",
      isi: formData.isi || "",
      kategori: formData.kategori || "",
      tanggal: new Date().toISOString(),
    };

    try {
      await fetch("https://ephemeral.desakalirejo.id/infodesa/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Error goblok nih, gagal nyambung server.");
    } finally {
      setIsSubmitting(false);
    }
  };



  if (loading) {
    return (
      <div className="flex justify-center items-center h-full p-12">
        <Loader className="animate-spin text-indigo-600 w-8 h-8 mr-3" />
        <span className="text-gray-600">Memuat data informasi...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full p-12 text-red-600 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Edit Informasi Desa
          <span className="text-lg text-gray-500 font-normal ml-3"> (ID: {editId})</span>
        </h1>
        <p className="text-gray-500 mt-1">Ubah dan perbarui detail informasi yang ditampilkan di portal desa.</p>
      </header>

      <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-xl shadow-2xl max-w-4xl mx-auto">

        {/* Notifikasi Status */}
        {message && (
          <div className={`p-4 mb-6 rounded-lg font-medium ${message.startsWith('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        {/* Input Judul */}
        <div className="mb-6">
          <label htmlFor="judul" className="block text-sm font-semibold text-gray-700 mb-2">Judul Informasi</label>
          <input
            type="text"
            id="judul"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            placeholder="Masukkan judul informasi (misalnya: Pengumuman Vaksinasi)"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>

        {/* Input Kategori */}
        <div className="mb-6">
          <label htmlFor="kategori" className="block text-sm font-semibold text-gray-700 mb-2">Kategori</label>
          <input
            type="text"
            id="kategori"
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
            placeholder="Misalnya: Kesehatan, Pembangunan, Pengumuman"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>

        {/* Input Isi (Menggunakan TextArea) */}
        <div className="mb-8">
          <label htmlFor="isi" className="block text-sm font-semibold text-gray-700 mb-2">Isi Konten</label>
          <textarea
            id="isi"
            name="isi"
            rows={8}
            value={formData.isi}
            onChange={handleChange}
            placeholder="Tulis detail lengkap informasi di sini..."
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-y"
          />
        </div>

        {/* Tombol Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200 disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center"
          >
            {isSubmitting && (
              <Loader className="animate-spin w-4 h-4 mr-2" />
            )}
            {isSubmitting ? 'Menyimpan...' : 'Perbarui Informasi'}
          </button>
        </div>
      </form>
    </div>
  );
}

// --- Ikon Sederhana (untuk Loading) ---

const Loader: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-2">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

interface IconProps extends React.SVGProps<SVGSVGElement> { }

// Ekspor sebagai App utama
export default EditInformasi;