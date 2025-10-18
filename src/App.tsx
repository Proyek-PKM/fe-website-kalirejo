import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import useAuthStore from "./store/authstore";

// Layouts
import DashboardLayout from "./components/DashboardLayout";
import LandingLayout from "./components/LandingLayout";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Laporan from "./pages/Laporan/Laporan";
import InformasiDesa from "./pages/InformasiDesa/InformasiDesa";
import LaporanDetail from "./pages/LaporanDetail/LaporanDetail";
import PengurusanKK from "./pages/PengurusanKK/PengurusanKK";
import SuratDomisili from "./pages/SuratDomisili/SuratDomisili";
import PengurusanAktaKelahiran from "./pages/PengurusanAktaKelahiran/PengurusanAktaKelahiran";
import PengurusanKTP from "./pages/PengurusanKTP/PengurusanKTP";
import PindahDomisili from "./pages/PindahDomisili/PindahDomisili";
import InformasiBantuanDesa from "./pages/InformasiBantuanDesa/InformasiBantuanDesa";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register"; // Import Register page
import Logout from "./pages/Logout/Logout";
import RiwayatPesan from "./pages/RiwayatPesan/RiwayatPesan";
import Changelog from "./pages/Changelog/Changelog";
import Settings from "./pages/Settings/Settings";
import InfoDesTP from "./pages/InfoDesTP/InfoDesTP";
import InfoDesBT from "./pages/InfoDesBT/InfoDesBT";
import InfoDesAM from "./pages/InfoDesAM/InfoDesAM";
import InfoDesJK from "./pages/InfoDesJK/InfoDesJK";
import AddDocument from "./pages/AddDocument/AddDocument";
import EditDocument from "./pages/EditDocument/EditDocument";
import DataWarga from "./pages/DataWarga/DataWarga";

import "./App.css";

// Component to protect routes
const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" replace />;
};

// Component for public landing page
const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <LandingLayout />;
};

// Component for fallback route
const FallbackRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Public landing page */}
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Landing />} />
        </Route>

        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="informasi-desa" element={<InformasiDesa />} />
          <Route path="data-warga" element={<DataWarga />} />
          <Route path="riwayat-pesan" element={<RiwayatPesan />} />
          <Route path="laporan">
            <Route index element={<Laporan />} />
            <Route path=":ticket" element={<LaporanDetail />} />
          </Route>
          <Route path="pengurusan-kk" element={<PengurusanKK />} />
          <Route path="surat-domisili" element={<SuratDomisili />} />
          <Route path="pengurusan-aktakelahiran" element={<PengurusanAktaKelahiran />} />
          <Route path="pengurusan-ktp" element={<PengurusanKTP />} />
          <Route path="pindah-domisili" element={<PindahDomisili />} />
          <Route path="informasi-bantuandesa" element={<InformasiBantuanDesa />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
          <Route path="informasi-desa/total-penduduk" element={<InfoDesTP />} />
          <Route path="informasi-desa/berita-terbaru" element={<InfoDesBT />} />
          <Route path="informasi-desa/agenda-mendatang" element={<InfoDesAM />} />
          <Route path="informasi-desa/jumlah-kk" element={<InfoDesJK />} />
          <Route path="informasi-desa/tambah" element={<AddDocument onAddDocument={() => {}} />} />
          <Route path="informasi-desa/edit/:id" element={<EditDocument />} />
        </Route>

        {/* Dashboard route for direct access */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* Fallback route if no other route matches */}
        <Route path="*" element={<FallbackRoute />} />
      </Routes>
    </Router>
  );
};

export default App;
