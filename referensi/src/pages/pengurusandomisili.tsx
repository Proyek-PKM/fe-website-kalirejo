

const SuratDomisili = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Pengurusan Surat Keterangan Domisili
      </h1>

      <p className="text-gray-700 mb-6">
        Halaman ini berisi panduan, syarat, serta prosedur pengurusan Surat
        Keterangan Domisili bagi penduduk Desa Kalirejo.
      </p>

      <section className="bg-blue-50 shadow-md rounded-xl p-6 mb-4">
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/domisili.jpg"
            alt="Surat Domisili"
            className="rounded-lg shadow-md max-h-64"
          />
        </div>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Syarat Pengurusan Surat Keterangan Domisili
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Surat Pengantar RT/RW setempat</li>
          <li>Fotokopi Kartu Keluarga (KK)</li>
          <li>Fotokopi KTP pemohon</li>
          <li>Pas foto terbaru ukuran 3x4 (2 lembar)</li>
          <li>
            Dokumen pendukung lain jika diperlukan (contoh: surat sewa/kontrak
            rumah)
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Data yang Dicantumkan dalam Surat Domisili
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Nama Lengkap</li>
          <li>Tempat, Tanggal Lahir</li>
          <li>Alamat Lengkap Domisili</li>
          <li>Agama</li>
          <li>Pekerjaan</li>
          <li>Status Pernikahan</li>
          <li>Kewarganegaraan</li>
          <li>NIK</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Prosedur Pengurusan
        </h2>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Mendapatkan surat pengantar dari RT/RW.</li>
          <li>Menyiapkan dokumen persyaratan (KK, KTP, pas foto).</li>
          <li>Datang ke kantor desa dengan membawa dokumen lengkap.</li>
          <li>Dokumen diverifikasi oleh petugas desa.</li>
          <li>
            Surat Keterangan Domisili dicetak dan ditandatangani oleh Kepala
            Desa.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default SuratDomisili;
