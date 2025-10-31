import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { documentData } from '../../data/documentData';
import type { DocumentInfo } from '../../data/documentData';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface DocumentTableProps {
  onDeleteDocument: (id: number) => void;
}

const DocumentTable: React.FC<DocumentTableProps> = ({ 
  onDeleteDocument
}) => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState<DocumentInfo[]>(documentData);

  // Handler functions for form visibility and document operations
  const handleEdit = (document: DocumentInfo) => {
    navigate(`/informasi-desa/edit/${document.id}`);
  };

  const handleDelete = (id: number) => {
    onDeleteDocument(id);
    setDocuments(prev => prev.filter(document => document.id !== id));
  };



  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NO</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {documents.map((document) => (
              <tr key={document.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{document.no}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{document.judul}</td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={document.deskripsi}>{document.deskripsi}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{document.kategori}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{document.tanggal}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleEdit(document)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => handleDelete(document.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentTable;