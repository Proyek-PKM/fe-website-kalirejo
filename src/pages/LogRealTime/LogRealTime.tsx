import React, { useState } from "react";

const LogRealtime: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([
    "[08:45:12] ✅ Konsultasi dimulai oleh User A",
    "[08:46:05] 💬 User A: Selamat pagi, saya butuh bantuan hukum.",
    "[08:46:20] 💬 Advokat B: Selamat pagi, silakan jelaskan masalah Anda.",
    "[08:47:12] 💬 User A: Saya ingin mengurus warisan orang tua saya.",
    "[08:48:00] 💬 Advokat B: Baik, apakah sudah memiliki surat wasiat?",
    "[08:50:00] ⏸️ Koneksi user terputus sementara...",
    "[08:52:33] ✅ User A terhubung kembali.",
  ]);

  const getLogColor = (log: string): string => {
    if (log.includes("✅")) return "text-green-600";
    if (log.includes("💬 User")) return "text-blue-600";
    if (log.includes("💬 Advokat")) return "text-purple-600";
    if (log.includes("⏸️")) return "text-yellow-600";
    return "text-gray-700";
  };

  const addLog = () => {
    const newLog = `[${new Date().toLocaleTimeString()}] 💬 User A: Ini log baru secara realtime`;
    setLogs((prev) => [...prev, newLog]);
  };

  return (
    <div className="flex flex-col p-9">
      <h1 className="text-3xl text-[#363636] font-semibold mb-4">Log Realtime</h1>
      <p className="text-[#7E7E7E] mb-4">
        Halaman ini digunakan untuk memantau aktivitas sistem secara langsung.
        Data log ditampilkan secara realtime sehingga memudahkan dalam melakukan
        monitoring, debugging, maupun analisis kejadian yang sedang berlangsung.
      </p>

      <div className="h-96 overflow-y-auto bg-white border rounded-md p-4 space-y-3 text-sm font-mono">
        {logs.map((log, index) => (
          <div key={index} className={getLogColor(log)}>
            {log}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={addLog}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Tambah Log
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default LogRealtime;
