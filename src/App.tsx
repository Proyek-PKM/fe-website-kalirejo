// src/router.tsx atau src/App.tsx (jika Anda ingin menyatukannya)
import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Laporan from "./pages/Laporan/Laporan";
import InformasiDesa from "./pages/Informasi/Informasi";
import LaporanDetail from "./pages/LaporanDetail/LaporanDetail";
import RealtimeChat from "./pages/RealtimeChat/RealtimeChat";
import Pengaturan from "./pages/Pengaturan/Pengaturan";

// Rute berbasis objek
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "informasi-desa",
        element: <InformasiDesa />,
      },
      {
        path: "dashboard",
        element: <Dashboard />, // Perhatikan: ini menimpa rute index, pastikan ini yang Anda inginkan
      },
      {
        path: "chat-realtime",
        element: <RealtimeChat />,
      },
      {
        path: "pengaturan",
        element: <Pengaturan />,
      },
      {
        path: "laporan",
        children: [
          {
            index: true, // Sama dengan <Route index element={<Laporan />} />
            element: <Laporan />,
          },
          {
            path: ":ticket", // Parameter rute
            element: <LaporanDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;