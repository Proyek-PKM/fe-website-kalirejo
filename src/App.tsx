import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import useAuthStore from "./store/authstore";

// Layouts
import DashboardLayout from "./components/DashboardLayout";
import LandingLayout from "./components/LandingLayout";

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Laporan from "./pages/Laporan/Laporan";
import LaporanDetail from "./pages/LaporanDetail/LaporanDetail";
import InformasiDesa from "./pages/InformasiDesa/InformasiDesa";
import RiwayatPesan from "./pages/RiwayatPesan/RiwayatPesan";
import DataWarga from "./pages/DataWarga/DataWarga";
import Changelog from "./pages/Changelog/Changelog";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Logout from "./pages/Logout/Logout";

import "./App.css";

// Component to protect routes - TEMPORARY: Always allow access for development
const ProtectedRoute = () => {
  // TEMPORARY: Direct access to dashboard layout (security bypass for development)
  return <DashboardLayout />;
  
  /*
  // ORIGINAL CODE - COMMENTED FOR TEMPORARY ACCESS
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? (
    <DashboardLayout />
  ) : (
    <Navigate to="/login" replace />
  );
  */
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/laporan" element={<ProtectedRoute />}>
          <Route index element={<Laporan />} />
          <Route path=":ticket" element={<LaporanDetail />} />
        </Route>
        <Route path="/informasi-desa" element={<ProtectedRoute />}>
          <Route index element={<InformasiDesa />} />
        </Route>
        <Route path="/riwayat-pesan" element={<ProtectedRoute />}>
          <Route index element={<RiwayatPesan />} />
        </Route>
        <Route path="/data-warga" element={<ProtectedRoute />}>
          <Route index element={<DataWarga />} />
        </Route>
        <Route path="/changelog" element={<ProtectedRoute />}>
          <Route index element={<Changelog />} />
        </Route>
        <Route path="/settings/*" element={<ProtectedRoute />}>
          <Route path="*" element={<Settings />} />
        </Route>
        <Route path="/logout" element={<ProtectedRoute />}>
          <Route index element={<Logout />} />
        </Route>

        {/* Fallback route if no other route matches */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;