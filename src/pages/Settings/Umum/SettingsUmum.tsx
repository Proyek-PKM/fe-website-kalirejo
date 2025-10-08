import { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsUmum = () => {
  const [notifikasi, setNotifikasi] = useState(true);
  const [suaraNotifikasi, setSuaraNotifikasi] = useState(true);
  const [penggunaanData, setPenggunaanData] = useState(false);

  return (
    <div className="flex flex-col p-9">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-neutral-800 font-semibold mb-2">
          Setting {'>'} Umum
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
          <button className="px-6 py-2 text-primary-600 border-b-2 border-primary-600 font-medium">
            Umum
          </button>
          <Link to="/settings/keamanan" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Keamanan
          </Link>
          <Link to="/settings/akun" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Akun
          </Link>
          <button className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Notifikasi
          </button>
        </div>
      </div>

      {/* Settings Content */}
      <div className="space-y-6">
        {/* Bahasa dan Regional */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-800 mb-4">
            Bahasa dan Regional
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Bahasa Interface
              </label>
              <select className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500">
                <option>Bahasa Indonesia</option>
                <option>English</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Tema Tampilan
              </label>
              <select className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500">
                <option>Otomatis (Sistem)</option>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifikasi */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-800 mb-4">
            Notifikasi
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-800">Notifikasi</p>
                <p className="text-sm text-neutral-600">
                  Tampilkan notifikasi untuk pesan baru dari warga
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifikasi}
                  onChange={(e) => setNotifikasi(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-800">Suara Notifikasi</p>
                <p className="text-sm text-neutral-600">
                  Putar suara ketika ada pesan masuk
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={suaraNotifikasi}
                  onChange={(e) => setSuaraNotifikasi(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privasi dan Keamanan */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-800 mb-4">
            Privasi dan Keamanan
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-neutral-800">Pengumpulan Data Analitik</p>
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
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="px-6 py-2 border border-neutral-200 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-colors">
            Reset ke Default
          </button>
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            Simpan Pengaturan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsUmum;
