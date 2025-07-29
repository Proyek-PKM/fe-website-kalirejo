// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-blue-100 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">
          Selamat Datang di Kelurahan Kalirejo
        </h2>
        <p className="text-gray-700 mb-6">
          Website resmi untuk informasi desa, pelayanan masyarakat, dan akses ke
          chatbot pelayanan kami.
        </p>
        <a
          href="#layanan"
          className="bg-blue-700 text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition"
        >
          Lihat Layanan
        </a>
      </div>
    </section>
  );
}
