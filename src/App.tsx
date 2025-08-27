// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Laporan from "./pages/Laporan/Laporan";
import LaporanDetail from "./pages/LaporanDetail/LaporanDetail";
import InformasiDesa from "./pages/InformasiDesa";
import PengurusanKK from "./pages/pengurusankk";
import RiwayatPesan from "./pages/RiwayatPesan";
import "./App.css";
import LogRealtime from "./pages/LogRealTime";
import Settings from "../src/pages/Settings";
// import PengurusanKTP from "./pages/InformasiDesa/PengurusanKTP";
// import PengurusanAktaKelahiran from "./pages/InformasiDesa/PengurusanAktaKelahiran";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/log-realtime" element={<LogRealtime />} />
          <Route path="informasi-desa" element={<InformasiDesa />} />
          {/* <Route path="pengurusan-ktp" element={<PengurusanKTP />} /> */}
          <Route path="pengurusan-kk" element={<PengurusanKK />} />
          {/* <Route
              path="pengurusan-aktakelahiran"
              element={<PengurusanAktaKelahiran />}
            /> */}
          <Route path="laporan" element={<Laporan />} />
          <Route path="laporan/:ticket" element={<LaporanDetail />} />
          <Route path="riwayat-pesan" element={<RiwayatPesan />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
