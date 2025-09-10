import React from 'react';

function Changelog() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Changelog</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-gray-600">
          <h2>Riwayat Pembaruan Changelog</h2>
          <p className="text-sm text-gray-500">Lihat semua pembaruan dan peningkatan aplikasi chatbot anda</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Version Card */}
          <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow">
            <div className="text-lg font-semibold">V2.1.0</div>
            <div className="text-sm text-gray-500">Versi terkini</div>
          </div>

          {/* Updates Card */}
          <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow">
            <div className="text-lg font-semibold">12+</div>
            <div className="text-sm text-gray-500">Fitur baru</div>
          </div>

          {/* Progress Card */}
          <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow">
            <div className="text-lg font-semibold">99%</div>
            <div className="text-sm text-gray-500">Akurasi tanggapan</div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-gray-600 font-medium mb-2">Other</h3>
          
          {/* Version History */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="font-medium">v.1.0.0</span>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Dirilis pada 5 September 2025
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                3 Perubahan
              </div>
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Perbaikan chatbot desa kalirejo untuk masyarakat</li>
              <li>Sekarang chatbot dapat bekerja lebih baik</li>
              <li>Tampilan sistem dirombak dan diperbaiki besa yang lainnya</li>
              <li>Interface penuh menggunakan bahasa indonesia sebelumnya</li>
            </ul>
          </div>

          {/* Bottom Message */}
          <div className="mt-6 flex items-center gap-2 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-sm">
              Aplikasi diperbaharui secara berkala untuk melayani masyarakat dengan lebih baik
              <br />
              <span className="text-gray-500">Tim pengembang berkomitmen memberikan layanan terbaik untuk desa kalirejo</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changelog;