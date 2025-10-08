// Interface untuk data dokumen seperti yang digunakan di tabel
export interface DocumentInfo {
  id: number;
  no: string;
  judul: string;
  deskripsi: string;
  kategori: string;
  tanggal: string;
  tataCaraPengurusan?: string;
}

// Interface untuk form dokumen (dengan nama properti yang sesuai untuk form input)
export interface DocumentFormInfo {
  id: number;
  name: string;
  description: string;
  requirements: string[];
  processSteps: string[];
  processingTime: string;
  fee: string;
}

// Fungsi untuk mengkonversi dari DocumentInfo ke DocumentFormInfo
export const convertDocumentInfoToForm = (doc: DocumentInfo | null): DocumentFormInfo => {
  if (!doc) {
    return {
      id: 0,
      name: '',
      description: '',
      requirements: [],
      processSteps: [],
      processingTime: '',
      fee: '',
    };
  }

  // Jika tataCaraPengurusan ada, kita split berdasarkan baris baru
  const processSteps = doc.tataCaraPengurusan ? doc.tataCaraPengurusan.split('\n') : [];
  
  return {
    id: doc.id,
    name: doc.judul,
    description: doc.deskripsi,
    requirements: [], // Untuk sekarang kita kosongkan, bisa diimplementasikan nanti
    processSteps: processSteps,
    processingTime: '',
    fee: '',
  };
};

// Fungsi untuk mengkonversi dari DocumentFormInfo ke DocumentInfo
export const convertFormToDocumentInfo = (form: DocumentFormInfo): DocumentInfo => {
  return {
    id: form.id,
    no: form.id.toString().padStart(2, '0'),
    judul: form.name,
    deskripsi: form.description,
    kategori: 'Umum', // Nilai default
    tanggal: new Date().toLocaleDateString('id-ID'), // Tanggal saat ini
    tataCaraPengurusan: form.processSteps.join('\n'),
  };
};