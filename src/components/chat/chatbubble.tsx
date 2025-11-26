export default function ChatBubble({ username, message, timestamp }: {
  username: string;
  message: string;
  timestamp: string;
}) {


  const formatTime = (isoString: string) => {
    if (!isoString) return '';
    try {
      const dateObj = new Date(isoString);

      const formattedTime = dateObj.toLocaleTimeString('id-ID', {
        day: '2-digit',      // Contoh: 05
        month: '2-digit',    // Contoh: 09
        year: 'numeric',     // Contoh: 2023
        hour: '2-digit',     // Contoh: 13
        minute: '2-digit',   // Contoh: 23
        timeZoneName: 'short', // Contoh: WIB, WITA, WIT
        hour12: false // Menggunakan format 24 jam
      });
      return formattedTime;
    } catch (error) {
      console.error("Gagal memformat timestamp:", isoString, error);
      return 'Invalid Time';
    }
  };

  const displayTime = formatTime(timestamp);

  return (
    <div className="bg-white h-auto rounded-xl overflow-hidden p-5 flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg capitalize">{username}</h1>
        {/* Menggunakan waktu yang sudah diformat */}
        <h5 className="text-sm text-[#707070]">{displayTime}</h5>
      </div>
      <p className="text-gray-800">
        {message}
      </p>
    </div>
  )
}