import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Laporan from "./pages/Laporan/Laporan";
import InformasiDesa from "./pages/InformasiDesa/InformasiDesa";
import "./App.css";
import LaporanDetail from "./pages/LaporanDetail/LaporanDetail";
import PengurusanKK from "./pages/PengurusanKK/PengurusanKK";
import SuratDomisili from "./pages/SuratDomisili/SuratDomisili";
import PengurusanAktaKelahiran from "./pages/PengurusanAktaKelahiran/PengurusanAktaKelahiran";
import PengurusanKTP from "./pages/PengurusanKTP/PengurusanKTP";
import PindahDomisili from "./pages/PindahDomisili/PindahDomisili";
import InformasiBantuanDesa from "./pages/InformasiBantuanDesa/InformasiBantuanDesa";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import LogRealTime from "./pages/LogRealTime/LogRealTime";
import RiwayatPesan from "./pages/RiwayatPesan/RiwayatPesan";
import EditInformasiDesa from "./pages/EditInformasiDesa/EditInformasiDesa";
import Changelog from "./pages/Changelog/Changelog";
import Settings from "./pages/Settings/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="informasi-desa" element={<InformasiDesa />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="log-aplikasi" element={<LogRealTime />} />
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
          <Route path="edit-info-desa" element={<EditInformasiDesa />} />
          <Route path="changelog" element={<Changelog />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;