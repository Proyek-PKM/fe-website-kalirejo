import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoDesBT: React.FC = () => {
  const navigate = useNavigate();

  // Data berita sesuai dengan gambar UI
  const newsItems = [
    {
      id: 1,
      category: "Pembangunan",
      title: "Pembangunan Desa Tahap II Dimulai",
      description: "Pembangunan jalan sepanjang 2 km dimulai hari ini untuk RT/RW 01/03 dengan pusat kota",
      date: "5 September 2025",
      readCount: "Baca Selengkapnya"
    },
    {
      id: 2,
      category: "Bantuan Sosial", 
      title: "Bantuan Beras untuk Keluarga Kurang Mampu",
      description: "Distribusi bantuan beras 10 kg per KK untuk 70 keluarga kurang mampu akan dilaksanakan minggu depan",
      date: "3 September 2025",
      readCount: "Baca Selengkapnya"
    },
    {
      id: 3,
      category: "Pertanian",
      title: "Penyuluhan Pertanian Organik Berhasil Di gelar",
      description: "Sebanyak 95 petani mengikuti penyuluhan teknik pertanian organik yang diselenggarakan oleh BPP Kecamatan",
      date: "1 September 2025", 
      readCount: "Baca Selengkapnya"
    }
  ];

  const handleBack = () => {
    navigate('/informasi-desa');
  };

  return (
    <div className="flex flex-col p-6 space-y-6 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <button 
          onClick={handleBack}
          className="hover:text-blue-600 transition-colors"
        >
          Informasi desa
        </button>
        <span className="mx-2">{'>'}</span>
        <span className="text-gray-800 font-medium">Berita Baru</span>
      </div>

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Berita Terbaru
        </h1>
        <p className="text-gray-600 text-sm">
          Informasi dan perkembangan terkini Desa Kalirejo
        </p>
      </div>

      {/* News Items */}
      <div className="space-y-4">
        {newsItems.map((news) => (
          <div key={news.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-3">
              <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                {news.category}
              </span>
              <div className="flex items-center text-gray-500 text-xs">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {news.date}
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {news.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {news.description}
            </p>
            
            <div className="flex items-center">
              <button className="flex items-center text-gray-500 text-xs hover:text-gray-700 transition-colors">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                {news.readCount}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDesBT;