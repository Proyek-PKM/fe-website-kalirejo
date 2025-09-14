import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaQuestionCircle, FaExclamationCircle } from 'react-icons/fa';
import { FlagIcon } from 'react-flag-kit';

function SettingsAkun() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

      {/* Settings Content */}
      <div className="space-y-6">
        {/* Profil Pengguna */}
        <div className="bg-white p-6 rounded-lg border border-neutral-200">
          <div className="flex items-center gap-2 mb-4">
            <FaUser className="w-5 h-5" />
            <h2 className="text-lg font-semibold text-neutral-800">
              Profil Pengguna
            </h2>
            <div className="relative group">
              <FaExclamationCircle className="text-neutral-500 cursor-help" />
              <div className="absolute z-10 w-72 p-2 bg-neutral-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -right-2 top-6">
                Informasi user harus sesuai dari Standar SOP yang sudah disepakati
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                  Nama Lengkap
                  <div className="relative group">
                    <FaQuestionCircle className="text-neutral-500 cursor-help" />
                    <div className="absolute z-10 w-64 p-2 bg-neutral-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -right-2 top-6">
                      Nama harus sesuai dengan SOP Desa
                    </div>
                  </div>
                </label>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center rounded-l-lg border border-r-0 border-neutral-200">
                      <FaUser className="text-neutral-500" />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="flex-grow px-3 py-2 border border-neutral-200 rounded-r-lg focus:outline-none focus:border-primary-500"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Nomor HP
                </label>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center rounded-l-lg border border-r-0 border-neutral-200">
                      <FlagIcon code="ID" size={16} />
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-grow px-3 py-2 border border-neutral-200 rounded-r-lg focus:outline-none focus:border-primary-500"
                    placeholder="Masukkan nomor HP"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:border-primary-500 min-h-[120px]"
                  placeholder="Tuliskan bio Anda"
                />
              </div>
            </div>
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
}

export default SettingsAkun;
