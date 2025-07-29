// src/components/Layanan.tsx
export default function Layanan() {
  return (
    <section id="layanan" className="bg-gray-50 py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Layanan Desa</h2>
        <p className="text-gray-600 mb-6">
          Dapatkan pelayanan administrasi secara online dengan mudah dan cepat
          melalui chatbot kami.
        </p>
        <a
          href="/chatbot"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Mulai Chatbot
        </a>
      </div>
    </section>
  );
}
