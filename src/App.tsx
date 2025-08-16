import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Laporan from "./pages/Laporan/Laporan";
import InformasiDesa from "./pages/InformasiDesa";
import RiwayatPesan from "./pages/RiwayatPesan";
import LogRealtime from "./pages/LogRealTime";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Settings from "./pages/Settings";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="informasi-desa" element={<InformasiDesa />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="riwayat-pesan" element={<RiwayatPesan />} />
          <Route path="log-realtime" element={<LogRealtime />} />
          <Route path="settings" element={<Settings />} /> {/* ⬅️ rute baru */}
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
