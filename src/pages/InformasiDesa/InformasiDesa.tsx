import React from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentTable from './DocumentTable';
import type { DocumentInfo } from '../../data/documentData';

const InformasiDesa = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/informasi-desa/tambah');
  };

  // Functions to handle document operations
  const handleAddDocument = (document: DocumentInfo) => {
    console.log('Adding document:', document);
    // Here you would typically send the data to an API or update your store
    // For now, just log it
  };

  const handleEditDocument = (document: DocumentInfo) => {
    console.log('Editing document:', document);
    // Here you would typically send the data to an API or update your store
    // For now, just log it
  };

  const handleDeleteDocument = (id: number) => {
    console.log('Deleting document with id:', id);
    // Here you would typically send the delete request to an API
    // For now, just log it
  };

  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Informasi Desa</h1>
          <p className="text-sm text-gray-600 mt-1">
            Halaman ini digunakan untuk menampilkan dan mengelola berbagai informasi penting yang berkaitan dengan kegiatan, 
            pengumuman, serta pelayanan di desa. Data disajikan secara jelas dan terstruktur agar memudahkan warga dalam 
            memperoleh informasi terbaru mengenai administrasi, sosial, dan kegiatan masyarakat desa.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]"
        >
          <span className="material-symbols-rounded">search</span>
        </button>
        <input
          className="py-3.5 p-4 bg-white rounded-3xl w-full focus:outline-none"
          type="text"
          placeholder="cari"
        />
        <div className="relative">
          <button
            className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]"
          >
            <span className="material-symbols-rounded">filter_list</span>
          </button>
        </div>
        <button
          onClick={handleAddClick}
          className="flex justify-center items-center bg-white p-4 px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]"
        >
          <span className="material-symbols-rounded">add</span>
        </button>
      </div>

      <DocumentTable 
        onAddClick={handleAddClick}
        onAddDocument={handleAddDocument}
        onEditDocument={handleEditDocument}
        onDeleteDocument={handleDeleteDocument}
      />

      {/* Welcome Message Card */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100 text-center">
        <h2 className="text-xl font-semibold text-neutral-800">
          🏠 Melayani masyarakat untuk Desa Kalirejo yang lebih maju
        </h2>
        <p className="text-neutral-600 mt-2">
          Informasi diperbarui setiap hari - hubungi kontor desa untuk informasi lebih lanjut
        </p>
      </div>
    </div>
  );
};

export default InformasiDesa;