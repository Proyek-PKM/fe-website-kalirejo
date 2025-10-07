// Chart data for the dashboard pie chart
export interface ReportStatusData {
  sudahDitangani: number;
  sedangProses: number;
  belumDitangani: number;
}

export interface ReportStatusWithPercentages extends ReportStatusData {
  sudahDitanganiPercent: number;
  sedangProsesPercent: number;
  belumDitanganiPercent: number;
}

export const reportStatusData: ReportStatusData = {
  sudahDitangani: 75,
  sedangProses: 17,
  belumDitangani: 8,
};

// Calculate percentages based on the data
export const calculateReportStatusPercentages = (data: ReportStatusData): ReportStatusWithPercentages => {
  const total = data.sudahDitangani + data.sedangProses + data.belumDitangani;
  
  return {
    ...data,
    sudahDitanganiPercent: total > 0 ? Math.round((data.sudahDitangani / total) * 100) : 0,
    sedangProsesPercent: total > 0 ? Math.round((data.sedangProses / total) * 100) : 0,
    belumDitanganiPercent: total > 0 ? Math.round((data.belumDitangani / total) * 100) : 0,
  };
};

// Default report status with percentages calculated
export const reportStatusWithPercentages = calculateReportStatusPercentages(reportStatusData);

// Labels for the chart
export const reportStatusLabels = [
  'Sudah ditangani',
  'Sedang proses', 
  'Belum ditangani'
];

// Colors for the chart
export const reportStatusColors = {
  background: [
    '#4ade80', // hijau untuk sudah ditangani
    '#fbbf24', // kuning untuk sedang proses
    '#f87171', // merah untuk belum ditangani
  ],
  border: [
    '#22c55e',
    '#f59e0b', 
    '#ef4444',
  ]
};