import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoDesAM: React.FC = () => {
  const navigate = useNavigate();

  // Data agenda sesuai dengan gambar UI
  const agendaItems = [
    {
      id: 1,
      category: "Pemerintahan",
      title: "Rapat RT/RW",
      date: "5 September 2025 08:00 WIB",
      location: "Balai Desa"
    },
    {
      id: 2,
      category: "Kesehatan", 
      title: "Posyandu Balita",
      date: "1 September 2025 08:00 WIB",
      location: "Posyandu Melati"
    },
    {
      id: 3,
      category: "Ekonomi",
      title: "Bazar UMKM Desa Kalirejo",
      date: "10 Agustus 2025 10:00 WIB",
      location: "Lapangan Desa"
    },
    {
      id: 4,
      category: "Nasional",
      title: "Peringatan HUT RI ke - 80",
      date: "17 Agustus 2025 10:00 WIB",
      location: "Lapangan Desa"
    }
  ];

  const handleBack = () => {
    navigate('/informasi-desa');
  };

  // Function to get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Pemerintahan':
        return 'bg-blue-100 text-blue-800';
      case 'Kesehatan':
        return 'bg-green-100 text-green-800';
      case 'Ekonomi':
        return 'bg-yellow-100 text-yellow-800';
      case 'Nasional':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
        <span className="text-gray-800 font-medium">Agenda Mendatang</span>
      </div>

      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Agenda Mendatang
        </h1>
        <p className="text-gray-600 text-sm">
          Jadwal kegiatan dan acara desa yang akan datang
        </p>
      </div>

      {/* Agenda Items */}
      <div className="space-y-4">
        {agendaItems.map((agenda) => (
          <div key={agenda.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-3">
              <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(agenda.category)}`}>
                {agenda.category}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {agenda.title}
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                {agenda.date}
              </div>
              
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {agenda.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDesAM;