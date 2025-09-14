import React from 'react';
import StatCard from '../../components/StatCard/StatCard';
import { useNavigate } from 'react-router-dom';
import { demographicData } from '../../data/demographicData';

// Icons - Using simple SVG icons for now
const PeopleIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
  </svg>
);

const FamilyIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v10h10V6H5z" clipRule="evenodd"/>
    <path d="M7 8a1 1 0 012 0v1h2V8a1 1 0 112 0v4a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0V8z"/>
  </svg>
);

const NewsIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
  </svg>
);

const InformasiDesa = () => {
  const navigate = useNavigate();

  // Click handlers for each statistics card
  const handleCardClick = (cardType: 'penduduk' | 'kk' | 'berita' | 'agenda') => {
    console.log(`Clicked: ${cardType}`);
    // Future: navigate to detail page
    // Example: navigate(`/informasi-desa/${cardType}`);
    if (cardType === 'penduduk') {
      navigate('/informasi-desa/total-penduduk');
    } else if (cardType === 'berita') {
      navigate('/informasi-desa/berita-terbaru');
    } else if (cardType === 'agenda') {
      navigate('/informasi-desa/agenda-mendatang');
    } else if (cardType === 'kk') {
      navigate('/informasi-desa/jumlah-kk');
    } else {
      console.log(`Clicked: ${cardType}`);
      // Di masa mendatang, Anda bisa menambahkan navigasi untuk kartu lain di sini
    }
  };

  // Color schemes for each card based on extracted hex values
  const cardColorSchemes = {
    penduduk: {
      valueColor: '#000000',
      periodColor: '#0090FF',
      iconColor: '#1C1B1F',
      iconBgColor: '#F4F2F2'
    },
    kk: {
      valueColor: '#000000',
      periodColor: '#33AC72',
      iconColor: '#1C1B1F',
      iconBgColor: '#F4F2F2'
    },
    berita: {
      valueColor: '#000000',
      periodColor: '#33AC72',
      iconColor: '#1C1B1F',
      iconBgColor: '#F4F2F2'
    },
    agenda: {
      valueColor: '#000000',
      periodColor: '#0090FF',
      iconColor: '#1C1B1F',
      iconBgColor: '#F4F2F2'
    }
  };

  return (
    <div className="flex flex-col p-6 space-y-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Informasi Desa
      </h1>
      {/* Header Section with White Background */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
        <div className="space-y-4">
          <h1 className="text-3xl text-neutral-800 font-semibold">
            Desa Kalirejo
          </h1>
          <p className="text-neutral-600 leading-relaxed">
            Desa Kalirejo memiliki di Kecamatan Kalirejo Kabupaten Banyuwangi, Jawa Timur, 
            merupakan desa yang terletak dengan penduduk untuk penduduk, untuk Kartu 
            Keluarga, berita terbaru mengenai kegiatan dan perkembangan desa. Dengan 
            tampilan memiliki pelayanan yang terdapat di bidang pertanian, dan UMKM.
          </p>
        </div>
      </div>

      {/* Statistics Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          title="Total Penduduk"
          value={demographicData.totalPopulation.toLocaleString('id-ID')}
          period="5 bulan ini"
          icon={<PeopleIcon />}
          colors={cardColorSchemes.penduduk}
          onClick={() => handleCardClick('penduduk')}
        />
        <StatCard
          title="Jumlah KK"
          value={Math.round(demographicData.totalPopulation / demographicData.householdData.averagePerHousehold).toLocaleString('id-ID')}
          period="2 bulan ini"
          icon={<FamilyIcon />}
          colors={cardColorSchemes.kk}
          onClick={() => handleCardClick('kk')}
        />
        <StatCard
          title="Berita Terbaru"
          value={demographicData.newsCount.toString()}
          period="3 minggu ini"
          icon={<NewsIcon />}
          colors={cardColorSchemes.berita}
          onClick={() => handleCardClick('berita')}
        />
        <StatCard
          title="Agenda Mendatang"
          value={demographicData.upcomingEvents.toString()}
          period="bulan ini"
          icon={<CalendarIcon />}
          colors={cardColorSchemes.agenda}
          onClick={() => handleCardClick('agenda')}
        />
      </div>

      {/* Welcome Message Section */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-neutral-800">
            Selamat mengelola manajemen untuk Desa Kalirejo yang lebih maju
          </h2>
          <p className="text-neutral-600">
            Klik pada informasi setiap card - setiap kartu untuk melihat informasi lengkap
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformasiDesa;