import React, { useEffect, useRef, FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

// Definisi tipe untuk data statistik
interface StatItem {
  label: string;
  value: number;
  color: string;
}

// Data Statistik
const STATS_DATA: StatItem[] = [
  { label: "Tertunda", value: 45, color: "#EF4444" }, // Merah - Pending
  { label: "Selesai", value: 320, color: "#10B981" }, // Hijau - Completed
  { label: "Dikerjakan", value: 12, color: "#F59E0B" }, // Kuning - In-Progress
];

// Props untuk komponen Ikon
interface IconProps extends React.SVGProps<SVGSVGElement> { }

// Ikon sederhana (menggantikan library ikon, menggunakan SVG inline)
const Clock: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
  </svg>
);

const CheckCircle: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
  </svg>
);

const Loader: FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-2">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

// Props untuk StatisticCard
interface StatisticCardProps {
  title: string;
  value: number;
  icon: FC<IconProps>;
  color: string;
}

const StatisticCard: FC<StatisticCardProps> = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border-t-4" style={{ borderColor: color }}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium text-gray-500 uppercase">{title}</h3>
        <div className={`p-2 rounded-full`} style={{ backgroundColor: `${color}1A`, color: color }}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <p className="text-4xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

const StatsReport: FC = () => {
  const data = [
    { title: "Laporan yang Tertunda", value: STATS_DATA[0].value, icon: Clock, color: STATS_DATA[0].color },
    { title: "Laporan Telah Selesai", value: STATS_DATA[1].value, icon: CheckCircle, color: STATS_DATA[1].color },
    { title: "Laporan Sedang Dikerjakan", value: STATS_DATA[2].value, icon: Loader, color: STATS_DATA[2].color },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {data.map((item, index) => (
        <StatisticCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  );
};

// Custom Tooltip Component untuk ReportChart
const CustomTooltip: FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as StatItem;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
        <p className="text-sm font-semibold mb-1" style={{ color: data.color }}>{`${label}`}</p>
        <p className="text-lg font-bold text-gray-800">{`${data.value} Laporan`}</p>
      </div>
    );
  }

  return null;
};

// Komponen Grafik menggunakan Recharts
const ReportChart: FC = () => {
  // Tambahkan key 'id' dan 'fillColor' untuk Recharts
  const chartData = STATS_DATA.map((item, index) => ({
    ...item,
    id: index,
    fillColor: item.color,
  }));

  // Render komponen ReportChart menggunakan Recharts
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Grafik Distribusi Laporan</h2>
      <div className="w-full h-[300px]">
        {/* ResponsiveContainer memastikan grafik menyesuaikan dengan ukuran div */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%" // Jarak antar bar
          >
            {/* Garis Grid Horizontal yang lembut */}
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />

            {/* Sumbu X (Label Status) */}
            <XAxis dataKey="label" stroke="#6B7280" axisLine={false} tickLine={false} />

            {/* Sumbu Y (Nilai Laporan) */}
            <YAxis stroke="#6B7280" axisLine={false} tickLine={false} />

            {/* Tooltip Kustom */}
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />

            {/* Bar utama */}
            <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={50}>
              {/* Iterasi untuk mengatur warna dan menambahkan efek shadow/gradien sederhana (melalui fill) */}
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fillColor}
                  style={{ filter: `drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))` }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


const Dashboard: FC = () => {
  return (
    <div className="flex flex-col p-9 bg-gray-50 min-h-screen">
      <header>
        <h1 className="text-3xl text-[#363636] font-semibold mb-4">Dashboard Desa</h1>
        <p className="text-[#7E7E7E] w-full md:w-[85%]">
          Dashboard Desa menampilkan ringkasan laporan yang telah ditangani, termasuk status penyelesaian, kategori laporan, dan statistik terkini. Informasi disajikan secara terstruktur untuk memberikan gambaran lengkap mengenai penanganan laporan di desa.
        </p>
      </header>
      <main className="h-full">
        <StatsReport />
        <ReportChart />
      </main>
    </div>
  );
}

export default Dashboard;