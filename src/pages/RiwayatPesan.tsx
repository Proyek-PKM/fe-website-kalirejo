import React from 'react';

type MessageHistory = {
  id: string;
  advocateName: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
};

const mockChatHistory: MessageHistory[] = [
  {
    id: '1',
    advocateName: 'Adv. Rendra Prasetyo, S.H.',
    lastMessage: 'Silakan kirim dokumennya hari ini ya.',
    timestamp: '2025-08-08 14:12',
    isOnline: true,
  },
  {
    id: '2',
    advocateName: 'Adv. Dwi Maulina, S.H., M.H.',
    lastMessage: 'Baik, saya akan siapkan berkasnya.',
    timestamp: '2025-08-07 20:45',
    isOnline: false,
  },
  {
    id: '3',
    advocateName: 'Adv. Dani Daneswara',
    lastMessage: 'Terima kasih atas kepercayaannya 🙏',
    timestamp: '2025-08-05 09:30',
    isOnline: false,
  },
];

const ChatHistory: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Riwayat Pesan</h1>
      <div className="space-y-4">
        {mockChatHistory.map((chat) => (
          <div
            key={chat.id}
            className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer flex justify-between items-center"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center font-bold text-white text-lg">
                {chat.advocateName.split(' ')[1].charAt(0)}
                {chat.advocateName.split(' ')[2]?.charAt(0)}
                {chat.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">
                  {chat.advocateName}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
            <span className="text-sm text-gray-400">{chat.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
