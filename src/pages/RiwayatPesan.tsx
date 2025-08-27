import React, { useState, useEffect } from "react";

const RiwayatPesan = () => {
  // Dummy data pesan
  const [messages, setMessages] = useState([
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
  ]);

  // Optional: update realtime waktu
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Riwayat Pesan
      </h1>
      <p className="text-base text-gray-700 mb-4">
        Halaman ini menampilkan riwayat pesan yang masuk maupun keluar. Data
        disusun dalam bentuk tabel agar mudah dibaca dan dipantau, dilengkapi
        dengan informasi pengirim, isi pesan, serta status tindak lanjut.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="py-3 px-4">Kode Tiket</th>
              <th className="py-3 px-4">Pengirim</th>
              <th className="py-3 px-4">Penerima</th>
              <th className="py-3 px-4">Pesan</th>
              <th className="py-3 px-4">Waktu</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4">{msg.kodeTiket}</td>
                <td className="py-2 px-4">{msg.pengirim}</td>
                <td className="py-2 px-4">{msg.penerima}</td>
                <td className="py-2 px-4">{msg.pesan}</td>
                <td className="py-2 px-4">{msg.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-500 mt-4 text-sm">
        Waktu sekarang: {currentTime.toLocaleString()}
      </p>
    </div>
  );
};

export default RiwayatPesan;
