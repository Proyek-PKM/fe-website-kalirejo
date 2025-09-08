import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsAkun = () => {
  const [showPenggunaTooltip, setShowPenggunaTooltip] = useState(false);
  const [showPhotoTooltip, setShowPhotoTooltip] = useState(false);
  const [name, setName] = useState('Admin SIKARJO');
  const [phone, setPhone] = useState('+62 8956167935');
  const [bio, setBio] = useState('Saya Budi Perangkat Desa yang bertugas disklling pelayanan dan administrasi kepada warga. Tolong agar membuat apapun berbasis online dan disimpan dalam format electronic archive untuk memudahkan pengelolaan informasi agar desa lebih mudah dikelola dan mandiri');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  return (
    <div className="flex flex-col p-9">
      {/* Header with Search */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl text-neutral-800">Settings {'>'} Akun</h1>
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
          <button className="px-6 py-2 text-primary-600 border-b-2 border-primary-600 font-medium">
            Akun
          </button>
          <Link to="/settings/notifikasi" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Notifikasi
          </Link>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-lg border border-neutral-200">
        {/* Header */}
        <div className="p-6 border-b border-neutral-100">
          <div>
            <h2 className="text-lg font-medium text-neutral-800">Profil Kamu</h2>
            <p className="text-sm text-neutral-500">Update profil kamu disini</p>
          </div>
        </div>
        
        {/* Form Content */}
        <div className="p-6">
          <div className="grid gap-6">
            {/* Pengguna */}
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-3">
                <span className="text-sm text-neutral-800">Pengguna</span>
              </div>
              <div className="col-span-9">
                <div className="flex items-center justify-between bg-[#F8FDFF] rounded-lg border border-[#E5F3FF] p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      className="text-sm font-medium text-neutral-800 bg-transparent focus:outline-none w-full"
                      placeholder="Masukkan nama pengguna"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      className="text-neutral-400 hover:text-neutral-600"
                      onMouseEnter={() => setShowPenggunaTooltip(true)}
                      onMouseLeave={() => setShowPenggunaTooltip(false)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    {showPenggunaTooltip && (
                      <div className="absolute right-0 top-full mt-2 z-10 w-64 p-3 bg-neutral-100 rounded-lg shadow-lg text-sm text-neutral-600">
                        Pastikan akun pengguna telah diverifikasi sebelum mengaktifkan.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Nomor ponsel */}
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-3">
                <span className="text-sm text-neutral-800">Nomor ponsel</span>
              </div>
              <div className="col-span-9">
                <div className="flex items-center bg-[#F8FDFF] border border-[#E5F3FF] rounded-lg px-3 py-2.5">
                  <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="https://flagcdn.com/w40/id.png" 
                      alt="ID" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="ml-3 flex-1 text-sm font-medium text-neutral-800 bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Foto profil */}
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-3">
                <span className="text-sm text-neutral-800">Foto profil</span>
              </div>
              <div className="col-span-9 flex items-center gap-3">
                <img
                  src="/vite.svg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <button className="px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-md hover:bg-primary-100 border border-primary-100">
                  Edit
                </button>
                <button className="px-3 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 border border-red-100">
                  Hapus
                </button>
              </div>
            </div>

            {/* Bio */}
            <div className="grid grid-cols-12 items-start gap-4">
              <div className="col-span-3 flex items-center gap-2">
                <span className="text-sm text-neutral-800">Bio</span>
                <button
                  onMouseEnter={() => setShowPhotoTooltip(true)}
                  onMouseLeave={() => setShowPhotoTooltip(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                {showPhotoTooltip && (
                  <div className="absolute left-6 top-0 z-10 w-64 p-3 bg-neutral-100 rounded-lg shadow-lg text-sm text-neutral-600">
                    Gunakan bio yang menjelaskan peran dan tanggung jawab Anda secara profesional.
                  </div>
                )}
              </div>
              <div className="col-span-9">
                <div className="bg-white border border-neutral-200 rounded-lg p-4">
                  <textarea
                    value={bio}
                    onChange={handleBioChange}
                    className="w-full text-sm text-neutral-600 leading-relaxed bg-transparent focus:outline-none resize-none"
                    rows={4}
                    placeholder="Tulis bio anda di sini..."
                  />
                  <div className="flex justify-end mt-3">
                    <span className="text-xs text-neutral-400">{bio.length} karakter</span>
                  </div>
                </div>
              </div>
            </div>
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

export default SettingsAkun;
