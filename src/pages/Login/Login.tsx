import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authstore';

const LOGO_URL =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kibrispdr.org%2Fdata%2F753%2Flogo-kabupaten-banyuwangi-png-3.png&f=1&nofb=1&ipt=be43c0b886e2cd492eb138db6d24aa8bc9c740f8b7bbb6e25a8772e331de191d';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Nama pengguna atau kata sandi salah.');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-200">
      <div className="page-container flex items-center justify-center">
        <div className="w-full bg-white rounded-2xl shadow-lg border border-neutral-300 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left: Logo & App Name */}
          <div className="md:col-span-2 flex flex-col items-center justify-center py-10 px-6 border-neutral-200 md:border-r">
            <img
              src={LOGO_URL}
              alt="Logo"
              className="w-[450px] h-[450px] object-contain mb-4 drop-shadow-sm"
            />
            <div className="text-neutral-800 text-xl font-semibold tracking-wide">SIKARJO APP</div>
          </div>

          {/* Right: Form Card */}
          <div className="md:col-span-3">
            <div className="bg-primary-100 rounded-2xl p-6 md:p-8">
              <h2 className="text-3xl font-semibold text-center text-neutral-800">Log In</h2>
              <p className="text-center text-neutral-500 mt-2">
                Doesn't have an account yet?{' '}
                <Link to="/register" className="text-primary-600 hover:underline font-medium">
                  Register
                </Link>
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Password with Forgot link */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-neutral-700">Password</label>
                    <a href="#" className="text-xs text-neutral-500 hover:text-primary-600">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Remember me */}
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="remember" className="text-sm text-neutral-600">
                    Remember me
                  </label>
                </div>

                {/* Submit */}
                {error && <p className="text-sm text-center text-red-600">{error}</p>}
                <button
                  type="submit"
                  className="mx-auto block w-40 py-2 font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  LOGIN
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex-1 h-px bg-neutral-300" />
                  <div className="text-neutral-500 text-sm">or login with</div>
                  <div className="flex-1 h-px bg-neutral-300" />
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
                    aria-label="Login with Google"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,16.108,18.961,13,24,13c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.197-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.616-3.317-11.278-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.094,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.197,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                    <span className="text-neutral-700 font-medium">Google</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-2 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
                    aria-label="Login with Google"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,16.108,18.961,13,24,13c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.197-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.616-3.317-11.278-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.094,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.197,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                    <span className="text-neutral-700 font-medium">Google</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
