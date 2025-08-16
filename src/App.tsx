// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Laporan from "./pages/Laporan/Laporan";
import InformasiDesa from "./pages/InformasiDesa";
import "./App.css";
import LaporanDetail from "./pages/LaporanDetail/LaporanDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="informasi-desa" element={<InformasiDesa />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="laporan">
            <Route index element={<Laporan />} />
            <Route path=":ticket" element={<LaporanDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
