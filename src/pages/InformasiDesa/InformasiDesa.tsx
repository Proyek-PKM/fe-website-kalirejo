import FeatureCard from '../../components/FeatureCard/FeatureCard';
import KKIcon from '../../assets/KK.png';
import DomisiliIcon from '../../assets/domisili.png';
import AktaKelahiranIcon from '../../assets/aktakelahiran.png';
import KTPIcon from '../../assets/KTP.png';
import PindahDomisiliIcon from '../../assets/pindahdomisili.png';
import BantuanDesaIcon from '../../assets/bantuandesa.png';

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 container mx-auto px-4 max-w-7xl">
        <FeatureCard
          to="/pengurusan-kk"
          icon={KKIcon}
          title="Tata Cara Pengurusan KK"
          description="Panduan syarat dan cara pengurusan Kartu Keluarga."
        />
        <FeatureCard
          to="/pengurusan-aktakelahiran"
          icon={AktaKelahiranIcon}
          title="Tata Cara Pembuatan Akta Kelahiran"
          description="Panduan syarat dan cara pengurusan Akta Kelahiran."
        />
        <FeatureCard
          to="/surat-domisili"
          icon={DomisiliIcon}
          title="Tata Cara Pengurusan Surat Domisili"
          description="Cara membuat surat keterangan domisili."
        />
        <FeatureCard
          to="/informasi-bantuandesa"
          icon={BantuanDesaIcon}
          title="Informasi Bantuan Desa"
          description="Informasi tentang bantuan dan program desa."
        />
        <FeatureCard
          to="/pengurusan-ktp"
          icon={KTPIcon}
          title="Tata Cara Pengurusan KTP"
          description="Panduan syarat dan cara pengurusan KTP."
        />
        <FeatureCard
          to="/pindah-domisili"
          icon={PindahDomisiliIcon}
          title="Tata Cara Pengurusan Pindah Domisili"
          description="Panduan syarat dan cara pengurusan Pindah Domisili."
        />
      </div>
    </div>
  );
};

export default InformasiDesa;