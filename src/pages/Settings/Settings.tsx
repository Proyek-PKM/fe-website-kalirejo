import { Routes, Route, Navigate } from 'react-router-dom';
import SettingsUmum from './Umum/SettingsUmum';
import SettingsKeamanan from './Keamanan/SettingsKeamanan';
import SettingsAkun from './Akun/SettingsAkun';

function Settings() {
  return (
    <Routes>
      <Route index element={<Navigate to="umum" replace />} />
      <Route path="umum" element={<SettingsUmum />} />
      <Route path="keamanan" element={<SettingsKeamanan />} />
      <Route path="akun" element={<SettingsAkun />} />
    </Routes>
  );
}

export default Settings;
