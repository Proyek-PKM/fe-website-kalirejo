function Logout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="text-gray-600 mb-6">Anda telah berhasil logout dari sistem.</p>
        <a 
          href="/login" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block"
        >
          Login Kembali
        </a>
      </div>
    </div>
  );
}

export default Logout;