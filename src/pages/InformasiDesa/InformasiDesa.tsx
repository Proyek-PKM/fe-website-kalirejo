import { useNavigate } from "react-router-dom";
import DocumentTable from "./DocumentTable";

const InformasiDesa = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/informasi-desa/tambah");
  };

  const handleDeleteDocument = (id: number) => {
    console.log("Deleting document with id:", id);
    // Here you would typically send the delete request to an API
    // For now, just log it
  };

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <div className="flex flex-col items-center text-center mb-4 md:mb-6 w-full px-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 break-words max-w-full">
          Informasi Desa Kalirejo
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-2 break-words max-w-full">
          Sistem Monitoring informasi desa berbasis chatbot untuk pelayanan yang lebih cepat dan transparan
        </p>
      </div>

      <div className="flex items-center gap-2 md:gap-3 w-full px-2">
        <button className="flex justify-center items-center bg-white p-3 md:p-4 px-4 md:px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]">
          <span className="material-symbols-rounded">search</span>
        </button>
        <input
          className="py-3 md:py-3.5 p-3 md:p-4 bg-white rounded-3xl w-full focus:outline-none"
          type="text"
          placeholder="cari informasi"
        />
        <button className="flex justify-center items-center bg-white p-3 md:p-4 px-4 md:px-6 rounded-3xl text-[#6C6C6C] transition-all hover:scale-[1.1]">
          <span className="material-symbols-rounded">sort</span>
        </button>
      </div>

      <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm w-full px-2 mt-4 md:mt-6">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Daftar Informasi
          </h2>
          <button 
            onClick={handleAddClick}
            className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm md:text-base"
          >
            Tambah Informasi
          </button>
        </div>
        <DocumentTable onDeleteDocument={handleDeleteDocument} />
      </div>
    </div>
  );
};

export default InformasiDesa;