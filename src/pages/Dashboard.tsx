// src/pages/Dashboard.tsx
function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Nomor Terdaftar
          </h2>
          <p className="text-3xl font-bold text-blue-600">120</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Warga
          </h2>
          <p className="text-3xl font-bold text-green-600">350</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Total Admin
          </h2>
          <p className="text-3xl font-bold text-red-600">5</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
