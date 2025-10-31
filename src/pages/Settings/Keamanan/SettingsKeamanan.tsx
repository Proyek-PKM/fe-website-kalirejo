import { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsKeamanan = () => {
  const [endToEnd, setEndToEnd] = useState(true);
  const [backupEnkripsi, setBackupEnkripsi] = useState(false);
  const [sinkronisasiCloud, setSinkronisasiCloud] = useState(true);
  const [penggunaanData, setPenggunaanData] = useState(true);
  const [riwayatChat, setRiwayatChat] = useState(false);
  const [indikasiMenginjau, setIndikasiMenginjau] = useState(true);

  return (
    <div className="flex flex-col p-9">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-neutral-800 font-semibold mb-2">
          Setting {'>'} Keamanan
        </h1>
        <div className="flex items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-neutral-200 rounded-lg w-64 focus:outline-none focus:border-primary-500"
          />
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-200">
          <Link to="/settings/umum" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Umum
          </Link>
          <button className="px-6 py-2 text-primary-600 border-b-2 border-primary-600 font-medium">
            Keamanan
          </button>
          <Link to="/settings/akun" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Akun
          </Link>
          <Link to="/settings/notifikasi" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Notifikasi
          </Link>
        </div>
      </div>

      {/* Settings Content */}
      <div className="space-y-6">
        {/* Enkripsi dan Kemanan Data */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-lg font-semibold text-neutral-800">
              Enkripsi dan Kemanan Data
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-800">Enkripsi End to End</p>
                <p className="text-sm text-neutral-600">
                  Enkripsi untuk percakapan dengan standar AES-256
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={endToEnd}
                  onChange={(e) => setEndToEnd(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-800">Backup Terenkripsi</p>
                <p className="text-sm text-neutral-600">
                  Enkripsi file backup dengan enkripsi otomatis
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={backupEnkripsi}
                  onChange={(e) => setBackupEnkripsi(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-800">Sinkronisasi Cloud</p>
                <p className="text-sm text-neutral-600">
                  Sinkronisasi data terenkripsi ke cloud storage
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={sinkronisasiCloud}
                  onChange={(e) => setSinkronisasiCloud(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privasi dan Penggunaan Data */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            <h2 className="text-lg font-semibold text-neutral-800">
              Privasi dan Penggunaan Data
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-800">Simpan Riwayat Chat</p>
                <p className="text-sm text-neutral-600">
                  Simpan percakapan untuk referensi di masa mendatang
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={riwayatChat}
                  onChange={(e) => setRiwayatChat(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-800">Pengumpulan Data Analytics</p>
                <p className="text-sm text-neutral-600">
                  Izinkan pengumpulan data anonim untuk meningkatkan layanan
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={penggunaanData}
                  onChange={(e) => setPenggunaanData(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-800">Tampilkan Indikasi Menginjau</p>
                <p className="text-sm text-neutral-600">
                  Tampilkan saat sedang melihat/menginjau lampiran
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={indikasiMenginjau}
                  onChange={(e) => setIndikasiMenginjau(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <div className="space-x-4">
            <button className="px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
              Hapus Riwayat Chat
            </button>
            <button className="px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
              Hapus Chat
            </button>
          </div>
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Simpan Pengaturan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsKeamanan;