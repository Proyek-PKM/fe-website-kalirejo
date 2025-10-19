// src/pages/Login/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authstore';

const Login = () => {
  const [nomorHp, setNomorHp] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Using default valid credentials for demo purposes
    // In a real implementation, this would connect to the backend API
    // For now, using hardcoded credentials when form is submitted
    const result = await login(nomorHp || 'admin', 'admin123');
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="bg-slate-100 p-5 rounded-xl max-w-2xl w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold">Login</h1>
          <button
            onClick={() => navigate('/')}
            className="text-sm bg-gray-200 hover:bg-gray-300 rounded px-3 py-1 font-medium"
          >
            Back to Landing
          </button>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label className="font-bold">Nomor Hp</label>
          <input
            className="p-2 rounded focus:outline-none placeholder:capitalize"
            type="text"
            placeholder="input nomor hp"
            value={nomorHp}
            onChange={(e) => setNomorHp(e.target.value)}
          />
          <input
            type="submit"
            className="bg-slate-300 rounded p-2 font-bold text-slate-700 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
