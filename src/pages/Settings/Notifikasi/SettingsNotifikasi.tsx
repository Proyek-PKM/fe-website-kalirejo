import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsNotifikasi = () => {
  const [notifications, setNotifications] = useState({
    pengaturanNotifikasi: true,
    pengingkatAktivitas: false,
    komentar: false,
    penginggatLayanan: true,
    pesan: false
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="flex flex-col p-9">
      {/* Header with Search */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl text-neutral-800">Setting {'>'} Notifikasi</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-9 pr-4 py-2 border border-neutral-200 rounded-lg w-64 focus:outline-none focus:border-primary-500 text-sm"
            />
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-200">
          <Link to="/settings/umum" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Umum
          </Link>
          <Link to="/settings/keamanan" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Keamanan
          </Link>
          <Link to="/settings/akun" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Akun
          </Link>
          <button className="px-6 py-2 text-primary-600 border-b-2 border-primary-600 font-medium">
            Notifikasi
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg border border-neutral-200">
        <div className="p-6 border-b border-neutral-100">
          <div>
            <h2 className="text-lg font-medium text-neutral-800">Pengaturan Notifikasi</h2>
            <p className="text-sm text-neutral-500">Tetap terhubung dengan informasi penting desa Kalirejo</p>
          </div>
        </div>
        
        <div className="divide-y divide-neutral-100">
          {/* Pengaturan Notifikasi */}
          <div className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-neutral-800">Pengaturan Notifikasi</h3>
              <p className="text-sm text-neutral-500">Tetap terhubung dengan informasi penting desa Kalirejo</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.pengaturanNotifikasi}
                onChange={() => handleToggle('pengaturanNotifikasi')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          {/* Pengingat Aktivitas */}
          <div className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-neutral-800">Pengingat Aktivitas</h3>
              <p className="text-sm text-neutral-500">Dapat pemberitahuan tentang masa kerja bakti atau acara desa</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.pengingkatAktivitas}
                onChange={() => handleToggle('pengingkatAktivitas')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          {/* Komentar */}
          <div className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-neutral-800">Komentar</h3>
              <p className="text-sm text-neutral-500">Notifikasi jika ada balasan dari pengguna desa lau warga lain</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.komentar}
                onChange={() => handleToggle('komentar')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          {/* Pengingat Layanan */}
          <div className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-neutral-800">Pengingat layanan</h3>
              <p className="text-sm text-neutral-500">Ingatan tentang jadwal penting di desa seperti posyandu,pertemuan atau syyukuran desa lainnya</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.penginggatLayanan}
                onChange={() => handleToggle('penginggatLayanan')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          {/* Pesan */}
          <div className="p-6 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-neutral-800">Pesan</h3>
              <p className="text-sm text-neutral-500">Tetap terinformasi tentang pesan baru</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.pesan}
                onChange={() => handleToggle('pesan')}
              />
              <div className="w-11 h-6 bg-neutral-200 peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

export default SettingsNotifikasi;