import { useEffect, useState, useMemo } from "react";
import ChatBubble from "../../components/chat/chatbubble";

interface Message {
  user_id: string;
  username: string;
  message: string;
  timestamp: string;
}

// Definisikan tipe urutan
type SortOrder = 'asc' | 'desc'; // 'asc': Terlama di Atas, 'desc': Terbaru di Atas

const RealtimeChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  // State baru untuk melacak urutan, default 'desc' (Terbaru di Atas)
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  useEffect(() => {
    const ws = new WebSocket("wss://ephemeral.desakalirejo.id/ws");

    ws.onmessage = (event) => {
      const receivedMessages: Message[] = JSON.parse(event.data);

      // 1. BASE SORTING: Pastikan array yang disimpan selalu dalam urutan Ascending (Terlama ke Terbaru).
      // Ini penting agar logika pembalikan array di langkah berikutnya bekerja konsisten.
      const baseSortedMessages = receivedMessages.sort((a, b) => {
        // Membandingkan waktu menggunakan objek Date untuk akurasi pengurutan.
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      });

      setMessages(baseSortedMessages);
      console.log("Pesan basis (Terlama ke Terbaru) telah di-update.");
    };

    ws.onopen = () => {
      console.log("🟢 WebSocket Connected");
    };

    ws.onclose = () => {
      console.log("🔴 WebSocket Disconnected");
    };

    ws.onerror = (error) => {
      console.error("❌ WebSocket Error:", error);
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
      console.log("WebSocket connection cleaned up.");
    };
  }, []);

  // Fungsi untuk membalik urutan pengurutan
  const toggleSortOrder = () => {
    // Mengganti 'asc' menjadi 'desc' dan sebaliknya
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  // 2. LOGIKA DISPLAY: Gunakan useMemo untuk menentukan urutan tampilan akhir.
  const displayedMessages = useMemo(() => {
    if (sortOrder === 'desc') {
      // Jika Terbaru di Atas, kita membalik (reverse) array basis.
      // .slice() memastikan kita membalik salinan, bukan state aslinya.
      return messages.slice().reverse();
    }
    // Jika Terlama di Atas, kembalikan array basis (yang sudah terurut ascending).
    return messages;
  }, [messages, sortOrder]);


  // Teks tombol yang dinamis
  const buttonText = sortOrder === 'desc'
    ? "Tampilkan Terlama di Atas (Ascending)"
    : "Tampilkan Terbaru di Atas (Descending)";

  return (
    <div className="flex flex-col p-9">
      <header>
        <h1 className="text-3xl text-[#363636] font-semibold mb-4">Realtime Chat</h1>
        <p className="text-[#7E7E7E] w-[85%]">
          Halaman Realtime Chat ini adalah history percakapan yang terjadi secara real-time antara
          warga desa dan admin desa. Fitur ini memungkinkan komunikasi langsung dan instan,
          memfasilitasi pertukaran informasi, laporan, dan tanggapan secara efisien untuk
          meningkatkan pelayanan dan keterlibatan masyarakat dalam pengelolaan desa.
        </p>
      </header>
      <main className="h-full">
        {/* === TOMBOL SORTING BARU DENGAN STYLING MINIMAL === */}
        <div className="flex justify-start my-4">
          <button
            onClick={toggleSortOrder}
            // Menggunakan gaya teks sederhana agar tidak merusak tata letak
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
          >
            {buttonText}
          </button>
        </div>

        {/* Kontainer chat */}
        <div className="h-[65vh] overflow-y-scroll my-5 pr-2 flex flex-col gap-3">
          {/* Menggunakan displayedMessages yang sudah disortir sesuai pilihan user */}
          {displayedMessages.map((msg, index) => (
            <div key={index}>
              <ChatBubble username={msg.username} message={msg.message} timestamp={msg.timestamp} />
            </div>
          ))}
        </div>
      </main >
    </div >
  );
};

export default RealtimeChat;