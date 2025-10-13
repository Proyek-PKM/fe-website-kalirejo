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
    <div className="flex flex-col ">
      <h1 className="text-3xl text-neutral-800 font-semibold mb-4">
        Riwayat Pesan
      </h1>
      <p className="text-neutral-600 mb-4">
        Data pesan terbaru akan muncul otomatis tanpa reload.
      </p>

      <div className="mt-6 bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        {messages.length === 0 ? (
          <div className="p-6 text-neutral-500 text-center">
            Belum ada pesan
          </div>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className="p-6 flex justify-between items-start border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
            >
              <div className="space-y-1">
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

      <p className="text-gray-500 mt-4 text-sm">
        Waktu sekarang: {currentTime.toLocaleString()}
      </p>
    </div>
  );
};

export default RiwayatPesan;
