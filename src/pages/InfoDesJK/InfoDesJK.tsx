import React from 'react';
import { demographicData } from '../../data/demographicData';
import { useNavigate } from 'react-router-dom';

// Icons for household economic classification
const WealthyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const LessWealthyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const PoorIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);

const AverageIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v-3h2l2 2h6l2-2h2v3h3v4H4zm16.5-7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
  </svg>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-700">{children}</span>
);

const SmallStat = ({
  title,
  subtitle,
  value,
  percent,
  icon,
}: {
  title: string;
  subtitle: string;
  value: string | number;
  percent: string;
  icon: React.ReactNode;
}) => (
  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex items-center justify-between hover:shadow-sm transition">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-white text-gray-600">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-gray-800">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="text-lg font-semibold text-gray-900">{value}</div>
      {percent && <div className="text-xs text-gray-500">{percent}</div>}
    </div>
  </div>
);

const InfoDesJK: React.FC = () => {
  // Household economic classification data from demographic data
  const householdClassification = [
    {
      title: 'KK Mampu',
      subtitle: 'KK dengan pendapatan > Rp 2,5 juta/bulan',
      value: demographicData.householdEconomicClassification.wealthy.count.toLocaleString('id-ID'),
      percent: `${demographicData.householdEconomicClassification.wealthy.percentage}%`,
      icon: <WealthyIcon />
    },
    {
      title: 'KK Kurang Mampu',
      subtitle: 'KK dengan pendapatan Rp 1 - 2,5 juta/bulan',
      value: demographicData.householdEconomicClassification.lessWealthy.count.toLocaleString('id-ID'),
      percent: `${demographicData.householdEconomicClassification.lessWealthy.percentage}%`,
      icon: <LessWealthyIcon />
    },
    {
      title: 'KK Miskin',
      subtitle: 'KK dengan pendapatan < 1 juta/bulan',
      value: demographicData.householdEconomicClassification.poor.count.toLocaleString('id-ID'),
      percent: `${demographicData.householdEconomicClassification.poor.percentage}%`,
      icon: <PoorIcon />
    },
  ];

  // Add the average members data to the classification array
  const allHouseholdData = [
    ...householdClassification,
    {
      title: 'Rata-Rata Anggota per KK',
      subtitle: 'Jumlah rata-rata anggota keluarga per KK',
      value: demographicData.householdEconomicClassification.averageMembersPerHousehold.toString(),
      percent: '',
      icon: <AverageIcon />
    }
  ];

   const navigate = useNavigate();
  
    const handleBack = () => {
      navigate('/informasi-desa');
    };

  return (
    <div className="flex flex-col p-4 md:p-6 space-y-6 min-h-screen">
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

      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-lg md:text-xl font-semibold text-neutral-800">Data Kepala Keluarga</h2>
        <p className="text-neutral-500 text-sm md:text-base">Informasi lengkap tentang KK di Desa Kalirejo</p>
      </div>

      {/* Klasifikasi Kartu Keluarga Berdasarkan Ekonomi */}
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-neutral-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-neutral-700 font-medium">
            <Pill>Klasifikasi Kartu Keluarga Berdasarkan Ekonomi</Pill>
          </div>
        </div>

        <div className="space-y-4">
          {allHouseholdData.map((item) => (
            <SmallStat
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
              percent={item.percent}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoDesJK;