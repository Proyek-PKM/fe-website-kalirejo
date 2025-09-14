import React from 'react';
import { demographicData, demographicPercentages } from '../../data/demographicData';

// Simple inline icons matching the style used elsewhere
const MaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20 3h-5a1 1 0 100 2h2.586l-4.55 4.55a6 6 0 10.707.707L18.293 5.707V8.5a1 1 0 102 0v-5a.997.997 0 00-.293-.707A.997.997 0 0020 3zM10 20a4 4 0 110-8 4 4 0 010 8z" />
  </svg>
);

const FemaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2a6 6 0 100 12 6 6 0 000-12zm1 10.93A8 8 0 0113 14h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2a8 8 0 01.93-1.07z" />
  </svg>
);

const BabyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2a5 5 0 00-5 5 3 3 0 003 3h4a3 3 0 003-3 5 5 0 00-5-5zM6 12a2 2 0 100 4h12a2 2 0 100-4H6zm1 6a1 1 0 100 2h10a1 1 0 100-2H7z" />
  </svg>
);

const ChildIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2a3 3 0 110 6 3 3 0 010-6zM7 10a2 2 0 00-2 2v5a1 1 0 102 0v-2h10v2a1 1 0 102 0v-5a2 2 0 00-2-2H7z" />
  </svg>
);

const AdultIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2a3 3 0 110 6 3 3 0 010-6zM7 10a3 3 0 00-3 3v6a1 1 0 002 0v-3h2v3a1 1 0 002 0v-4h2v4a1 1 0 002 0v-3h2v3a1 1 0 002 0v-6a3 3 0 00-3-3H7z" />
  </svg>
);

const ElderIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2a3 3 0 110 6 3 3 0 010-6zM6 11a2 2 0 012-2h6a2 2 0 012 2v7a1 1 0 01-2 0v-3h-2v3a1 1 0 01-2 0v-3H8v3a1 1 0 01-2 0v-7z" />
  </svg>
);

const StatIconUsers = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M16 11c1.657 0 3-1.79 3-4s-1.343-4-3-4-3 1.79-3 4 1.343 4 3 4zM8 11c1.657 0 3-1.79 3-4S9.657 3 8 3 5 4.79 5 7s1.343 4 3 4zm0 2c-2.673 0-8 1.337-8 4v2a1 1 0 001 1h14a1 1 0 001-1v-2c0-2.663-5.327-4-8-4zm8 0c-.29 0-.61.015-.95.042 1.564.74 2.95 1.922 2.95 3.958v2a1 1 0 001 1h4a1 1 0 001-1v-2c0-2.663-5.327-4-8-4z" />
  </svg>
);

const StatIconHouse = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 3l9 7-1.5 2L18 10.5V20a1 1 0 01-1 1h-4v-6H11v6H7a1 1 0 01-1-1v-9.5L4.5 12 3 10l9-7z" />
  </svg>
);

const StatIconDensity = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M3 3h2v18H3V3zm16 0h2v18h-2V3zM9 7h6v2H9V7zm0 4h6v2H9v-2zm0 4h6v2H9v-2z" />
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
  <div className="border border-neutral-200 rounded-xl p-4 bg-white flex items-center justify-between hover:shadow-sm transition">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-neutral-800">{title}</div>
        <div className="text-xs text-neutral-500">{subtitle}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="text-lg font-semibold text-neutral-900">{value}</div>
      <div className="text-xs text-neutral-500">{percent}</div>
    </div>
  </div>
);

const BigStat = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) => (
  <div className="border border-neutral-200 rounded-xl p-5 bg-white flex items-center gap-3 hover:shadow-sm transition">
    <div className="p-3 rounded-lg bg-neutral-100 text-neutral-800">
      {icon}
    </div>
    <div>
      <div className="text-xs text-neutral-500">{title}</div>
      <div className="text-2xl font-semibold text-neutral-900">{value}</div>
    </div>
  </div>
);

const InfoDesTP: React.FC = () => {
  const genderAndAge = [
    { title: 'Laki Laki', subtitle: '0 - 80+ tahun', value: demographicData.malePopulation.toLocaleString('id-ID'), percent: `${demographicPercentages.malePercentage}%`, icon: <MaleIcon /> },
    { title: 'Perempuan', subtitle: '0 - 80+ tahun', value: demographicData.femalePopulation.toLocaleString('id-ID'), percent: `${demographicPercentages.femalePercentage}%`, icon: <FemaleIcon /> },
    { title: 'Balita', subtitle: '0 - 5 tahun', value: demographicData.ageComposition.toddlers.toLocaleString('id-ID'), percent: `${demographicPercentages.toddlersPercentage}%`, icon: <BabyIcon /> },
    { title: 'Anak', subtitle: '6 - 12 tahun', value: demographicData.ageComposition.children.toLocaleString('id-ID'), percent: `${demographicPercentages.childrenPercentage}%`, icon: <ChildIcon /> },
    { title: 'Dewasa', subtitle: '19 - 59 tahun', value: demographicData.ageComposition.adults.toLocaleString('id-ID'), percent: `${demographicPercentages.adultsPercentage}%`, icon: <AdultIcon /> },
    { title: 'Lansia', subtitle: '60+ tahun', value: demographicData.ageComposition.elderly.toLocaleString('id-ID'), percent: `${demographicPercentages.elderlyPercentage}%`, icon: <ElderIcon /> },
  ];

  const summary = [
    { title: 'Total Penduduk', value: demographicData.totalPopulation.toLocaleString('id-ID'), icon: <StatIconUsers /> },
    { title: 'Rata - rata per KK', value: demographicData.householdData.averagePerHousehold.toLocaleString('id-ID'), icon: <StatIconHouse /> },
    { title: 'Kepadatan/km2', value: demographicData.householdData.densityPerKm2.toLocaleString('id-ID'), icon: <StatIconDensity /> },
  ];

  return (
    <div className="flex flex-col p-4 md:p-6 space-y-6 min-h-screen">
      {/* Breadcrumb / Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-neutral-800">Informasi Desa &gt; Total Penduduk</h1>
      </div>

      {/* Section Header */}
      <div className="space-y-2">
        <h2 className="text-lg md:text-xl font-semibold text-neutral-800">Data Penduduk</h2>
        <p className="text-neutral-500 text-sm md:text-base">Informasi lengkap demografis Desa Kalirejo</p>
      </div>

      {/* Komposisi Penduduk */}
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-neutral-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-neutral-700 font-medium">
            <Pill>Komposisi Penduduk Berdasarkan Jenis Kelamin dan Usia</Pill>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {genderAndAge.map((item) => (
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

      {/* Summary Stats */}
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-neutral-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {summary.map((s) => (
            <BigStat key={s.title} title={s.title} value={s.value} icon={s.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoDesTP;
