import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartData, ChartOptions } from 'chart.js';
import { reportStatusLabels, reportStatusColors } from '../../data/chartData';

interface ReportData {
  sudahDitangani: number;
  sedangProses: number;
  belumDitangani: number;
}

const PieChart: React.FC<{ data: ReportData }> = ({ data }) => {
  const chartData: ChartData<'pie'> = {
    labels: reportStatusLabels,
    datasets: [
      {
        data: [data.sudahDitangani, data.sedangProses, data.belumDitangani],
        backgroundColor: reportStatusColors.background,
        borderColor: reportStatusColors.border,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '300px' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;