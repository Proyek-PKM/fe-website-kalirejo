import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authstore';

const LOGO_URL =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kibrispdr.org%2Fdata%2F753%2Flogo-kabupaten-banyuwangi-png-3.png&f=1&nofb=1&ipt=be43c0b886e2cd492eb138db6d24aa8bc9c740f8b7bbb6e25a8772e331de191d';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasNumber: false,
    hasUpperCase: false
  });

  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    
    setPasswordValidation({
      minLength,
      hasNumber,
      hasUpperCase
    });
    
    return minLength && hasNumber && hasUpperCase;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validatePassword(password)) {
      setError('Password harus memiliki minimal 8 karakter, mengandung huruf besar dan angka');
      return;
    }

    try {
      const result = await register(name, password);
      if (result.success) {
        setSuccess('Pendaftaran berhasil! Silakan login.');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mendaftar. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center p-4">
      <div className="bg-slate-100 p-6 rounded-xl max-w-md w-full">
        <div className="text-center mb-6">
          <img 
            src={LOGO_URL} 
            alt="Logo" 
            className="w-16 h-16 mx-auto mb-3 rounded-full object-contain"
          />
          <h1 className="text-xl font-bold">Daftar Akun</h1>
          <p className="text-sm text-gray-600 mt-1">Silakan masukkan data untuk mendaftar</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
            {success}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Kata Sandi</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan kata sandi"
              required
            />
          </div>

          {/* Password requirements */}
          <div className="text-xs text-gray-600">
            <p className={`flex items-center ${passwordValidation.minLength ? 'text-green-600' : 'text-gray-500'}`}>
              {passwordValidation.minLength ? '✓' : '○'} Minimal 8 karakter
            </p>
            <p className={`flex items-center ${passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
              {passwordValidation.hasNumber ? '✓' : '○'} Mengandung angka
            </p>
            <p className={`flex items-center ${passwordValidation.hasUpperCase ? 'text-green-600' : 'text-gray-500'}`}>
              {passwordValidation.hasUpperCase ? '✓' : '○'} Mengandung huruf besar
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Daftar
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Sudah punya akun?{' '}
            <Link to="/login" className="text-blue-500 font-medium hover:underline">
              Masuk disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;