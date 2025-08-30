import React from "react";

const PengurusanKK = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Pengurusan Kartu Keluarga (KK)
      </h1>

      <p className="text-gray-700 mb-6">
        Halaman ini berisi panduan dan syarat untuk mengurus Kartu Keluarga di
        Desa Kalirejo.
      </p>

      <section className="bg-blue-50 shadow-md rounded-xl p-6 mb-4">
        <div className="flex justify-center">
          <img src="public/images/addkk.png" alt="KK" />
        </div>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Syarat Pengurusan KK
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Fotokopi KTP kepala keluarga</li>
          <li>Fotokopi akta kelahiran anak</li>
          <li>Surat pengantar dari RT/RW</li>
          <li>Formulir permohonan KK (bisa diambil di kantor desa)</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mb-2 mt-4">
          Cara Mengurus KK
        </h2>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Kumpulkan semua dokumen persyaratan</li>
          <li>Datang ke Kantor Desa Kalirejo</li>
          <li>Serahkan dokumen ke petugas</li>
          <li>Petugas akan memproses KK baru atau perubahan</li>
          <li>Ambil KK setelah diproses sesuai jadwal</li>
        </ol>

        <h2 className="text-xl font-semibold text-blue-600 mb-2 mt-4">
          Informasi Tambahan
        </h2>
        <p className="text-gray-600">
          Pastikan semua dokumen asli dibawa saat pengurusan. Untuk informasi
          lebih lanjut, hubungi kantor desa atau cek website resmi desa.
        </p>
      </section>
    </div>
  );
};

export default PengurusanKK;
