import React from "react";

const PengurusanKtp = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Pengurusan Kartu Tanda Penduduk (KTP)
      </h1>

      <p className="text-gray-700 mb-6">
        Halaman ini berisi panduan dan syarat untuk mengurus Kartu Tanda
        Penduduk di Desa Kalirejo.
      </p>

      <section className="bg-blue-50 shadow-md rounded-xl p-6 mb-4">
        <div className="flex justify-center">
          <img src="public/images/KTP.jpg" alt="KTP" />
        </div>
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Syarat Pengurusan KTP
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Telah berusia 17 tahun</li>
          <li>Surat pengantar RT/RW</li>
          <li>Fotokopi KK</li>
          <li>Fotokopi Akta Kelahiran</li>
          <li>
            Surat Kketerangan Pindah yang diterbitkan oleh pemerintah
            Kabupaten/Kota dari daerah asal
          </li>
          <li>
            Surat Keterangan Datang dari Luar Negeri yang diterbitkan oleh
            Instansi Pelaksana bagi WNI yang datang dari Luar negeri karena
            pindah
          </li>
          <li>
            Datang langsung untuk di foto (E-KTP) atau melampirkan pas foto
            terbaru ukuran 3x4 sebanyak 2 lembar (KTP lama)
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mb-2 mt-4">
          Syarat Perpanjang KTP
        </h2>
        <ol className="list-decimal list-inside text-gray-600">
          <li>KTP yang telah habis masa berlakunya</li>
          <li>Surat pengantar RT/RW</li>
          <li>Fotokopi KK</li>
          <li>Formulir permohonan perpanjang KTP</li>
        </ol>

        <h2 className="text-xl font-semibold text-blue-600 mb-2 mt-4">
          Apa Saja Data yang Akan di isi?
        </h2>
        <p className="text-gray-600">
          <li>Nama</li>
          <li>Tempat, Tanggal Lahir</li>
          <li>Alamat</li>
          <li>Agama</li>
          <li>Status Pekerjaam</li>
          <li>Status Pernikahan</li>
          <li>Kewarganegaraan</li>
          <li>Berlaku Hingga</li>
          <li>Tanda Tangan</li>
          <li>NIK</li>
          <li>Tanda Tangan</li>
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mb-2 mt-4">
          Prosedur Pembuatan dan Perpanjangan E-KTP
        </h2>
        <p className="text-gray-600">
          <li>
            Datanglah ke kecamatan / kelurahan pada pagi hari : untuk
            menghindari antrian saat membuat atau memperpanjang KTP kamu dapat
            datang lebih pagi ke kelurahan. Lalu berikan berkas dokumen ke
            petugas di loket dan kamu akan mendapatkan nomor antrian.
          </li>
          <li>
            Pengambilan data : Setelah nomor antrian dipanggil maka inilah
            saatnya pengambilan data kamu, awal biasanya kamu akan difoto,
            pengambilan tanda tangan digital, perekam data sidik jari, scan
            retina mata.
          </li>
          <li>
            Proses pelengkapan data akan berlangsung selama 15 menit dan proses
            pembuatan akan berlangsung paling lama 14 hari atau 2 minggu setelah
            kamu mengikuti semua persyaratan di atas.
          </li>
        </p>
      </section>
    </div>
  );
};

export default PengurusanKtp;
