import { useState, useEffect } from "react";

const RiwayatPesan = () => {
  // Dummy data pesan
  const messages = [
    {
      kodeTiket: "T001",
      pengirim: "Jasmine",
      penerima: "Yena",
      pesan: "Halo, sudah dicek tiketnya?",
      waktu: "2025-08-26 10:30:00",
    },
    {
      kodeTiket: "T002",
      pengirim: "Yena",
      penerima: "Jasmine",
      pesan: "Sudah, coba cek update terakhir.",
      waktu: "2025-08-26 11:15:00",
    },
    {
      kodeTiket: "T003",
      pengirim: "Admin",
      penerima: "Jasmine",
      pesan: "Tiket T003 sudah selesai diproses.",
      waktu: "2025-08-26 12:05:00",
    },
  ];

  // Optional: update realtime waktu
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col p-9">
      <h1 className="text-3xl text-neutral-800 font-semibold mb-4">
        Riwayat Pesan
      </h1>
      <p className="text-neutral-600 mb-4">
        Halaman ini menampilkan riwayat pesan yang masuk maupun keluar. Data
        disusun dalam bentuk tabel agar mudah dibaca dan dipantau, dilengkapi
        dengan informasi pengirim, isi pesan, serta status tindak lanjut.
      </p>

      {/* Message List */}
      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-6 flex justify-between items-start border-b border-neutral-100 hover:bg-neutral-50 transition-colors`}
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-neutral-800 font-semibold">{message.pengirim}</h3>
                <span className="text-neutral-400">→</span>
                <h3 className="text-neutral-800">{message.penerima}</h3>
              </div>
              <p className="text-neutral-600">{message.pesan}</p>
              <p className="text-neutral-500 text-sm">{message.waktu}</p>
            </div>
            <span className="text-primary-600 text-sm font-medium">
              {message.kodeTiket}
            </span>
          </div>
        ))}
      </div>

      <p className="text-gray-500 mt-4 text-sm">
        Waktu sekarang: {currentTime.toLocaleString()}
      </p>
    </div>
  );
};

export default RiwayatPesan;