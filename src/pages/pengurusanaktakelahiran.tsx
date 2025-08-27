import React from "react";

const AktaKelahiran = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Pengurusan Akta Kelahiran
      </h1>

      <p className="text-gray-700 mb-6">
        Halaman ini berisi panduan, syarat, serta prosedur pengurusan Akta
        Kelahiran bagi penduduk Desa Kalirejo.
      </p>

      <section className="bg-blue-50 shadow-md rounded-xl p-6 mb-4">
        <div className="flex justify-center mb-4">
          <img
            src="public/images/aktakelahiran.jpg"
            alt="Akta Kelahiran"
            className="rounded-lg shadow-md max-h-64"
          />
        </div>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Syarat Pengurusan Akta Kelahiran
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Surat Keterangan Kelahiran dari Bidan/Dokter/Rumah Sakit</li>
          <li>Surat Pengantar RT/RW</li>
          <li>Fotokopi Kartu Keluarga (KK)</li>
          <li>Fotokopi KTP orang tua</li>
          <li>Fotokopi Buku Nikah/Akta Perkawinan orang tua</li>
          <li>Fotokopi KTP 2 orang saksi kelahiran</li>
          <li>Pas foto bayi ukuran 3x4 (2 lembar)</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Data yang Dicantumkan dalam Akta Kelahiran
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Nama Lengkap Anak</li>
          <li>Jenis Kelamin</li>
          <li>Tempat, Tanggal Lahir</li>
          <li>Nama Ayah dan Ibu</li>
          <li>Alamat Orang Tua</li>
          <li>Agama</li>
          <li>Kewarganegaraan</li>
          <li>NIK Orang Tua</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Prosedur Pengurusan
        </h2>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Mendapatkan surat keterangan kelahiran dari bidan/dokter/RS.</li>
          <li>Mendapatkan surat pengantar dari RT/RW setempat.</li>
          <li>Menyiapkan dokumen persyaratan sesuai ketentuan.</li>
          <li>Datang ke kantor desa dengan membawa dokumen lengkap.</li>
          <li>Dokumen diverifikasi oleh petugas desa.</li>
          <li>
            Pengajuan dilanjutkan ke Dinas Kependudukan dan Catatan Sipil untuk
            penerbitan akta.
          </li>
          <li>Akta Kelahiran diterbitkan dan dapat diambil oleh pemohon.</li>
        </ol>
      </section>
    </div>
  );
};

export default AktaKelahiran;
