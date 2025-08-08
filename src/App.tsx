// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Laporan from "./pages/Laporan";
import InformasiDesa from "./pages/InformasiDesa";
import RiwayatPesan from "./pages/RiwayatPesan";
import LogRealtime from "./pages/LogRealTime";
import Login from "./pages/login";
import Logout from "./pages/Logout";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protected routes */}
        {isAuthenticated ? (
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="informasi-desa" element={<InformasiDesa />} />
            <Route path="laporan" element={<Laporan />} />
            <Route path="riwayat-pesan" element={<RiwayatPesan />} />
            <Route path="log-realtime" element={<LogRealtime />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
