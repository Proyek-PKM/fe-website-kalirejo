import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authstore';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Kata sandi tidak cocok.');
      return;
    }

    const result = register(username, password);

    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-neutral-800">BUAT AKUN BARU</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-neutral-600">Nama Pengguna</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-600">Kata Sandi</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-600">Konfirmasi Kata Sandi</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-600">{success}</p>}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            Daftar
          </button>
        </form>
        <p className="text-sm text-center text-neutral-600">
          Sudah punya akun?{' '}
          <Link to="/login" className="font-medium text-primary-600 hover:underline">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;