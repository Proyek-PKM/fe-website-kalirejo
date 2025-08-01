import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
// import Laporan from "../pages/Laporan";
// import InformasiDesa from "../pages/InformasiDesa";
// import RiwayatPesan from "../pages/RiwayatPesan";
// import LogRealtime from ",./pages/LogRealTime";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="laporan" element={<Laporan />} />
          <Route path="informasi-desa" element={<InformasiDesa />} />
          <Route path="riwayat-pesan" element={<RiwayatPesan />} />
          <Route path="log-realtime" element={<LogRealtime />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
