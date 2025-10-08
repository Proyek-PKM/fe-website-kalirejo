import React, { useState, useEffect } from 'react';
import type { DocumentInfo } from '../../data/documentData';
import { convertDocumentInfoToForm, convertFormToDocumentInfo, type DocumentFormInfo } from '../../types/documentTypes';

interface DocumentFormProps {
  document: DocumentInfo | null;
  onSave: (document: DocumentInfo) => void;
  onCancel: () => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ document, onSave, onCancel }) => {
  const [formData, setFormData] = useState<DocumentFormInfo>(convertDocumentInfoToForm(null));

  useEffect(() => {
    if (document) {
      setFormData(convertDocumentInfoToForm(document));
    } else {
      setFormData(convertDocumentInfoToForm(null));
    }
  }, [document]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequirementChange = (index: number, value: string) => {
    const newRequirements = [...formData.requirements];
    newRequirements[index] = value;
    setFormData((prev) => ({ ...prev, requirements: newRequirements }));
  };

  const handleAddRequirement = () => {
    setFormData((prev) => ({ ...prev, requirements: [...prev.requirements, ''] }));
  };

  const handleRemoveRequirement = (index: number) => {
    const newRequirements = formData.requirements.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, requirements: newRequirements }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(convertFormToDocumentInfo(formData));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">{document ? 'Edit Dokumen' : 'Tambah Dokumen'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Dokumen</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={3}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Persyaratan</label>
            {formData.requirements.map((requirement, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={requirement}
                  onChange={(e) => handleRequirementChange(index, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveRequirement(index)}
                  className="ml-2 text-red-500"
                >
                  Hapus
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddRequirement}
              className="text-blue-500"
            >
              + Tambah Persyaratan
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Waktu Proses</label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Biaya</label>
            <input
              type="text"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentForm;