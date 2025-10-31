import { useState, useEffect } from "react";

const RiwayatPesan = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // connect websocket
    const ws = new WebSocket("wss://ephemeral.desakalirejo.id/ws"); // make sure pakai wss di prod

    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages(data);
        // console.log("📩 New message:", messages);
      } catch (err) {
        console.error("⚠️ Failed to parse WS data", err);
      }
    };

    ws.onclose = () => {
      console.warn("❌ WebSocket closed");
    };

    ws.onerror = (err) => {
      console.error("💥 WebSocket error:", err);
    };

    // realtime waktu
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => {
      ws.close();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <div className="flex flex-col items-center text-center mb-4 md:mb-6 w-full px-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 break-words max-w-full">
          Riwayat Pesan Masyarakat Desa Kalirejo
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2 break-words max-w-full">
          Sistem Monitoring pesan masyarakat berbasis chatbot untuk pelayanan yang lebih cepat dan transparan
        </p>
      </div>

      <div className="mt-4 md:mt-6 bg-white rounded-lg md:rounded-2xl shadow-sm border border-neutral-100 overflow-hidden w-full px-2">
        {messages.length === 0 ? (
          <div className="p-4 md:p-6 text-neutral-500 text-center">
            Belum ada pesan
          </div>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-100 hover:bg-neutral-50 transition-colors gap-2"
            >
              <div className="space-y-1 w-full">
                <div className="flex items-center space-x-2">
                  <h3 className="text-neutral-800 font-semibold">
                    {msg.username}
                  </h3>
                  <span className="text-neutral-400">→</span>
                  <h3 className="text-neutral-800">Bot</h3>
                </div>
                <p className="text-neutral-600">{msg.message}</p>
                <p className="text-neutral-500 text-sm">
                  {new Date(msg.timestamp).toLocaleString()}
                </p>
              </div>
              <span className="text-primary-600 text-sm font-medium">
                #{msg.user_id}
              </span>
            </div>
          ))
        )}
      </div>

      <p className="text-gray-500 mt-4 text-sm w-full px-2 text-center">
        Waktu sekarang: {currentTime.toLocaleString()}
      </p>
    </div>
  );
};

export default RiwayatPesan;