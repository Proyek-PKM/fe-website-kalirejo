export interface Report {
  report_id: number;
  user_id: number;
  title: string;
  kode_tiket: string;
  description: string;
  location: string;
  status: string; // Misal: pending, process, resolved
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
  proses: string | null;
}

export interface TableData {
  no: number;
  kodeTiket: string;
  judul: string;
  deskripsi: string;
  proses: string | null;
  status: string;
  report_id: number;
}