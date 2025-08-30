import pindahdomisili from '../../assets/pindahdomisili.jpg';

const PindahDomisili = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Pengurusan Pindah Domisili
      </h1>

      <p className="text-gray-700 mb-6">
        Halaman ini berisi panduan, syarat, serta prosedur pengurusan Pindah
        Domisili bagi penduduk Desa Kalirejo.
      </p>

      <section className="bg-blue-50 shadow-md rounded-xl p-6 mb-4">
        <div className="flex justify-center mb-4">
          <img
            src={pindahdomisili}
            alt="Pindah Domisili"
            className="rounded-lg shadow-md max-h-64"
          />
        </div>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Syarat Pengurusan Pindah Domisili
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Surat Pengantar dari RT/RW</li>
          <li>Fotokopi Kartu Keluarga (KK)</li>
          <li>Fotokopi KTP seluruh anggota keluarga yang pindah</li>
          <li>Formulir permohonan pindah domisili dari desa</li>
          <li>
            Dokumen pendukung lain sesuai kebutuhan (misalnya surat keterangan
            kerja, surat sewa rumah, atau bukti kepemilikan rumah di daerah
            tujuan)
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Data yang Dicantumkan dalam Surat Pindah Domisili
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Nama Lengkap Pemohon</li>
          <li>Nomor Induk Kependudukan (NIK)</li>
          <li>Alamat Asal</li>
          <li>Alamat Tujuan Pindah</li>
          <li>Jumlah anggota keluarga yang pindah</li>
          <li>Alasan Pindah</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Prosedur Pengurusan
        </h2>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Mendapatkan surat pengantar dari RT/RW setempat.</li>
          <li>Menyiapkan dokumen persyaratan lengkap.</li>
          <li>Datang ke kantor desa untuk mengajukan pindah domisili.</li>
          <li>Dokumen diverifikasi oleh petugas desa.</li>
          <li>
            Surat Keterangan Pindah diterbitkan oleh Kepala Desa dan
            ditandatangani.
          </li>
          <li>
            Pemohon membawa dokumen ke Dinas Kependudukan dan Catatan Sipil
            (Disdukcapil) untuk mendapatkan KTP dan KK baru di domisili tujuan.
          </li>
        </ol>
      </section>
    </div>
  );
};

export default PindahDomisili;
