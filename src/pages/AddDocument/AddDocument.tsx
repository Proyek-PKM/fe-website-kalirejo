import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { DocumentInfo } from '../../data/documentData';

interface AddDocumentProps {
  onAddDocument: (document: DocumentInfo) => void;
}

const AddDocument: React.FC<AddDocumentProps> = ({ onAddDocument }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<Omit<DocumentInfo, 'id'>>({
    no: '',
    judul: '',
    deskripsi: '',
    kategori: '',
    tanggal: new Date().toISOString().split('T')[0],
    tataCaraPengurusan: '', // Optional field for procedure steps
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a new ID for the document
    const newDocument: DocumentInfo = {
      ...formData,
      id: Date.now(), // Using timestamp as ID
    };
    
    onAddDocument(newDocument);
    navigate('/informasi-desa'); // Navigate back to the main info desa page
  };

  const handleBack = () => {
    navigate('/informasi-desa');
  };

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center">
        <button 
          onClick={handleBack}
          className="text-blue-600 hover:text-blue-800 text-xl font-semibold"
        >
          Informasi Desa
        </button>
        <span className="text-gray-400 mx-2">{' > '}</span>
        <span className="text-gray-600 text-xl">Tambah Informasi</span>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="no">
              No
            </label>
            <input
              type="text"
              id="no"
              name="no"
              value={formData.no}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="judul">
              Judul
            </label>
            <input
              type="text"
              id="judul"
              name="judul"
              value={formData.judul}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="deskripsi">
              Deskripsi
            </label>
            <textarea
              id="deskripsi"
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
              required
            />
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="kategori">
              Kategori
            </label>
            <input
              type="text"
              id="kategori"
              name="kategori"
              value={formData.kategori}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="tanggal">
              Tanggal
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          {/* Tata Cara Pengurusan - Optional field */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="tataCaraPengurusan">
              Tata Cara Pengurusan (Opsional)
            </label>
            <textarea
              id="tataCaraPengurusan"
              name="tataCaraPengurusan"
              value={formData.tataCaraPengurusan}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
              placeholder="Masukkan langkah-langkah pengurusan (pisahkan dengan baris baru)"
            />
            <p className="text-neutral-500 text-xs mt-1">Opsional: Masukkan tata cara pengurusan dokumen jika ada</p>
          </div>
          
          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 font-medium text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDocument;