import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsAkun = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [name, setName] = useState('Admin Kalirejo');
  const [phone, setPhone] = useState('+62 8956167935');
  const [bio, setBio] = useState('Saya Budi Perangkat Desa yang bertugas disklling pelayanan dan administrasi kepada warga. Tolong agar membuat apapun berbasis online dan disimpan dalam format electronic archive untuk memudahkan pengelolaan informasi agar desa lebih mudah dikelola dan mandiri');

  return (
    <div className="flex flex-col p-9">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-neutral-800 font-semibold mb-2">
          Setting {'>'} Akun
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
          <Link to="/settings/keamanan" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Keamanan
          </Link>
          <button className="px-6 py-2 text-primary-600 border-b-2 border-primary-600 font-medium">
            Akun
          </button>
          <button className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Notifikasi
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white p-6 rounded-lg border border-neutral-200">
        <h2 className="text-lg font-semibold text-neutral-800 mb-4">
          Profil Kamu
        </h2>
        <div className="space-y-6">
          {/* Profile Picture */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/vite.svg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="space-x-2">
                <button className="px-4 py-1 text-sm bg-neutral-100 text-neutral-600 rounded hover:bg-neutral-200 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors">
                  Hapus
                </button>
              </div>
              <div className="relative">
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                {showTooltip && (
                  <div className="absolute left-6 top-0 z-10 w-64 p-3 bg-neutral-700 text-white text-sm rounded-lg shadow-lg">
                    Pastikan foto profil sesuai dengan SOP yang berlaku. Gunakan foto formal dan professional.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Nomor ponsel</label>
            <div className="flex items-center">
              <div className="relative flex items-center">
                <img
                  src="https://flagcdn.com/w20/id.png"
                  alt="ID"
                  className="absolute left-3 w-5"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Bio
              <span 
                className="ml-1 text-neutral-400 text-xs"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                (?)
              </span>
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 resize-none"
            />
            <p className="text-right text-sm text-neutral-500 mt-1">320 karakter</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

export default SettingsAkun;
