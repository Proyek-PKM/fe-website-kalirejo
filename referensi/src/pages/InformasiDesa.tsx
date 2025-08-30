import { Link } from "react-router-dom";

const InformasiDesa = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Informasi Desa Kalirejo
      </h1>
  <p className="text-base text-gray-700 mb-4">
    Halaman ini digunakan untuk menyajikan berbagai panduan, tata cara, serta
    informasi penting terkait desa. Informasi disusun secara terstruktur agar
    mudah dipahami oleh masyarakat, dilengkapi dengan petunjuk praktis, aturan
    layanan, serta berita terbaru mengenai kegiatan dan perkembangan desa.
    Dengan tampilan yang sederhana namun interaktif, halaman ini diharapkan
    memudahkan warga dalam memperoleh informasi serta mendukung transparansi
    dan pelayanan publik yang lebih baik.
  </p>

      <section className="flex gap-6 mt-6">
        <Link to="/pengurusan-kk" className="flex-1">
          <section className="bg-blue-50 shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition flex flex-col items-center text-center">
            <img
              src="src/assets/KK.png"
              alt="KK"
              className="w-[78px] h-[78px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Pengurusan KK
            </h2>
            <p className="text-sm text-gray-600">
              Panduan syarat dan cara pengurusan Kartu Keluarga.
            </p>
          </section>
        </Link>

        <Link to="/surat-domisili" className="flex-1">
          <section className="bg-blue-50 shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition flex flex-col items-center text-center">
            <img
              src="src/assets/domisili.png"
              alt="Surat Domisili"
              className="w-[78px] h-[78px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Surat Domisili
            </h2>
            <p className="text-sm text-gray-600">
              Cara membuat surat keterangan domisili.
            </p>
          </section>
        </Link>
      </section>

      <section className="flex gap-6 mt-6">
        <Link to="/pengurusan-aktakelahiran" className="flex-1">
          <section className="bg-blue-50 shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition flex flex-col items-center text-center">
            <img
              src="src/assets/aktakelahiran.png"
              alt="KK"
              className="w-[78px] h-[78px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Pengurusan Akta Kelahiran
            </h2>
            <p className="text-sm text-gray-600">
              Panduan syarat dan cara pengurusan Akta Kelahiran.
            </p>
          </section>
        </Link>

        <Link to="/pengurusan-ktp" className="flex-1">
          <section className="bg-blue-50 shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition flex flex-col items-center text-center">
            <img
              src="src/assets/KTP.png"
              alt="KTP"
              className="w-[96px] h-[96px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Pengurusan KTP
            </h2>
            <p className="text-sm text-gray-600">
              Panduan syarat dan cara pengurusan KTP.
            </p>
          </section>
        </Link>
      </section>

      <section className="flex gap-6 mt-6">
        <Link to="/pengurusan-pindahdomisili" className="flex-1">
          <section className="bg-blue-50 shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition flex flex-col items-center text-center">
            <img
              src="src/assets/pindahdomisili.png"
              alt="KK"
              className="w-[78px] h-[78px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Pindah Domisili
            </h2>
            <p className="text-sm text-gray-600">
              Panduan syarat dan cara pengurusan Pindah Domisili.
            </p>
          </section>
        </Link>

        <Link to="/informasi-bantuandesa" className="flex-1">
          <section className="bg-blue-50 shadow-md rounded-xl p-6 cursor-pointer hover:shadow-lg transition flex flex-col items-center text-center">
            <img
              src="src/assets/bantuandesa.png"
              alt="KTP"
              className="w-[76.59px] h-[61.95px] object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-600 mb-2">
              Informasi Bantuan Desa
            </h2>
            <p className="text-sm text-gray-600">Informasi Bantuan Desa</p>
          </section>
        </Link>
      </section>
    </div>
  );
};

export default InformasiDesa;
