import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '28/08', wargaTerdaftar: 40, wargaTermutakhir: 25 },
  { name: '27/08', wargaTerdaftar: 30, wargaTermutakhir: 45 },
  { name: '26/08', wargaTerdaftar: 35, wargaTermutakhir: 30 },
  { name: '25/08', wargaTerdaftar: 45, wargaTermutakhir: 35 },
  { name: '24/08', wargaTerdaftar: 25, wargaTermutakhir: 40 },
  { name: '23/08', wargaTerdaftar: 35, wargaTermutakhir: 30 },
];

export default function MonitoringChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="wargaTerdaftar" name="Warga Terdaftar" fill="#3B82F6" />
        <Bar dataKey="wargaTermutakhir" name="Warga Termutakhir" fill="#10B981" />
      </BarChart>
    </ResponsiveContainer>
  );
}
