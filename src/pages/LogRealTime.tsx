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
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Log Realtime</h1>

        <div className="h-96 overflow-y-auto bg-gray-50 border rounded-md p-4 space-y-3 text-sm font-mono">
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
      </div>
    </div>
  );
};

export default LogRealtime;
