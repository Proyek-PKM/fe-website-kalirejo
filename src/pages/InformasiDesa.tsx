const InformasiDesa = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Informasi Desa Kalirejo
      </h1>

      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Profil Desa
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Desa Kalirejo terletak di Kecamatan Kalipuro, Kabupaten Banyuwangi.
          Luas wilayah desa ini adalah 1.200 Ha dengan jumlah penduduk sekitar
          5.000 jiwa. Desa ini memiliki visi untuk menjadi desa mandiri dan
          berdaya saing.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Struktur Pemerintahan
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Kepala Desa: Bapak Ahmad Sulaiman</li>
          <li>Sekretaris Desa: Ibu Siti Aminah</li>
          <li>BPD: Bapak Joko Supriyono</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Fasilitas Umum
        </h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>SD Negeri Kalirejo 1</li>
          <li>Balai Desa Kalirejo</li>
          <li>Pasar Tradisional Kalirejo</li>
          <li>Puskesmas Pembantu Kalirejo</li>
        </ul>
      </section>

      <section className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Potensi Desa
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Kalirejo memiliki potensi besar dalam sektor pertanian, terutama padi
          dan jagung. Selain itu, desa ini juga berkembang dalam bidang ekonomi
          kreatif seperti kerajinan bambu, batik, dan olahan hasil tani.
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed">
          Desa juga memiliki potensi wisata alam dengan lanskap sawah dan
          perbukitan yang masih asri, yang dapat dikembangkan sebagai agrowisata
          atau wisata edukasi pertanian.
        </p>
      </section>
    </div>
  );
};

export default InformasiDesa;
