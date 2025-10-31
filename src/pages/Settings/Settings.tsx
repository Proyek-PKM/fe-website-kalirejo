import { Routes, Route, Navigate } from 'react-router-dom';
import SettingsUmum from './Umum/SettingsUmum';
import SettingsKeamanan from './Keamanan/SettingsKeamanan';
import SettingsAkun from './Akun/SettingsAkun';
import SettingsNotifikasi from './Notifikasi/SettingsNotifikasi';

function Settings() {
  return (
    <Routes>
      <Route index element={<Navigate to="umum" replace />} />
      <Route path="umum" element={<SettingsUmum />} />
      <Route path="keamanan" element={<SettingsKeamanan />} />
      <Route path="akun" element={<SettingsAkun />} />
      <Route path="notifikasi" element={<SettingsNotifikasi />} />
    </Routes>
  );
}

export default Settings;