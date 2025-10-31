import { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsAkun = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [name, setName] = useState('Budi Santoso');
  const [phone, setPhone] = useState('+62 895-6167-935');
  const [bio, setBio] = useState('Saya Budi Perangkat Desa yang bertugas disklling pelayanan dan administrasi kepada warga. Tolong agar membuat apapun berbasis online dan disimpan dalam format electronic archive untuk memudahkan pengelolaan informasi agar desa lebih mudah dikelola dan mandiri');

  return (
    <div className="flex flex-col p-9">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl text-neutral-800 font-semibold mb-2">
          Settings {'>'} Akun
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
          <Link to="/settings/notifikasi" className="px-6 py-2 text-neutral-600 hover:text-neutral-800">
            Notifikasi
          </Link>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-8 rounded-lg shadow-sm mb-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-1/2">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Profil Kamu
            </h2>
            <p className="text-gray-500">Update profil kamu disini</p>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="relative">
              <button
                className="relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                {showTooltip && (
                  <div
                    className="absolute right-0 top-0 bg-gray-700 text-white border border-gray-700 p-2 rounded shadow-lg"
                    style={{ display: showTooltip ? 'block' : 'none' }}
                  >
                    Tooltip contents
                  </div>
                )}
                <span className="material-symbols-rounded mr-1">info</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500" />

        {/* Form */}
        <div className="">
          <form className="space-y-6">
            <div className="space-y-4">
              {/* username */}
              <div className="grid grid-cols-9 items-center py-6">
                <div className="col-span-2 px-3">
                  <p className="text-black font-semibold pr-2">Pengguna</p>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                  <div className="w-10 h-10 py-6 rounded-l-full bg-teal-100 border border-teal-200 flex items-center justify-center">
                    <span className="material-symbols-rounded text-teal-700" style={{ fontSize: '18px' }}>person</span>
                  </div>
                </div>
                <div className="col-span-5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-3 rounded-r-full bg-white border border-gray-300 shadow-sm focus:outline-none focus:border-primary-500"
                    style={{ textAlign: 'left' }}
                  />
                </div>
              </div>
              <hr className="my-6 border-gray-500" />

              {/* Number */}
              <div className="grid grid-cols-9 items-center py-6">
                <div className="col-span-2 px-3">
                  <p className="text-black font-semibold pr-2">Nomor Ponsel</p>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                  <div className="w-10 h-10 py-6 rounded-l-full bg-teal-100 border border-teal-200 flex items-center justify-center text-lg">
                    <span role="img" aria-label="flag">🇮🇩</span>
                  </div>
                </div>
                <div className="col-span-5">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-5 py-3 rounded-r-full bg-white border border-gray-300 shadow-sm focus:outline-none focus:border-primary-500"
                    style={{ textAlign: 'left' }}
                  />
                </div>
              </div>
              <hr className="my-6 border-gray-500" />

              {/* Profile Image */}
              <div className="grid grid-cols-9 items-center py-6 gap-4">
                <div className="col-span-2 px-3">
                  <p className="text-black font-semibold pr-2">Foto Profil</p>
                </div>
                <div className="col-span-2 flex items-center justify-center">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kibrispdr.org%2Fdata%2F753%2Flogo-kabupaten-banyuwangi-png-3.png&f=1&nofb=1&ipt=be43c0b886e2cd492eb138db6d24aa8bc9c740f8b7bbb6e25a8772e331de191d"
                    alt="Foto Profil"
                    className="w-20 h-20 rounded-full object-cover border"
                  />
                </div>
                <div className="col-span-1 justify-start">
                  <button
                    type="button"
                    className="px-4 py-1.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-sm shadow-sm"
                  >
                    Edit
                  </button>
                </div>
                <div className="col-span-1 justify-start">
                  <button
                    type="button"
                    className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm shadow-sm"
                  >
                    Hapus
                  </button>
                </div>
              </div>
              <hr className="my-6 border-gray-500" />

              {/* bio */}
              <div className="grid grid-cols-9 items-center py-6 gap-4">
                <div className="col-span-2 px-3">
                  <p className="text-black font-semibold pr-2 flex items-center gap-2">Bio <span className="material-symbols-rounded text-neutral-400">info</span></p>
                </div>
                <div className="col-span-1" />
                <div className="col-span-5">
                  <div className="bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm">
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      rows={6}
                      className="w-full bg-transparent px-1 py-1 rounded-xl focus:outline-none resize-y min-h-[120px]"
                      style={{ textAlign: 'left' }}
                    />
                    <div className="text-xs text-neutral-500 mt-2">{bio.length} karakter</div>
                  </div>
                </div>
              </div>
              <hr className="my-6 border-gray-500" />

              {/* action button */}
              <div className="flex justify-end mt-6">
                <button className="px-6 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
                  Simpan Perubahan
                </button>
              </div>


            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default SettingsAkun;