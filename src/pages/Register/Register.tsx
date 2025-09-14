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
    
    return {
      isValid: minLength && hasNumber && hasUpperCase,
      errors: {
        minLength: !minLength,
        hasNumber: !hasNumber,
        hasUpperCase: !hasUpperCase
      }
    };
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    const validation = validatePassword(value);
    setPasswordValidation(validation.errors);
  };

  const validateForm = () => {
    const errors: string[] = [];
    
    // Name validation
    if (!name.trim()) {
      errors.push('Name is required');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.push('Email is required');
    } else if (!emailRegex.test(email)) {
      errors.push('Please enter a valid email address');
    }
    
    // Password validation
    const passwordCheck = validatePassword(password);
    if (!passwordCheck.isValid) {
      errors.push('Password must meet all requirements');
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors[0]);
      return;
    }

    // Use existing register function with username (keeping existing auth store logic)
    const result = register(name, password);

    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setError(result.message);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} signup clicked - UI only`);
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
                <h2 className="text-3xl font-semibold text-center text-neutral-800">Sign Up</h2>
                <p className="text-center text-neutral-500 mt-2">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary-600 hover:underline font-medium">
                    Login
                  </Link>
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  {/* Password Field with Enhanced Validation */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => handlePasswordChange(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    
                    {/* Password Requirements Display */}
                    <div className="mt-2 space-y-1">
                      <div className={`text-xs flex items-center gap-2 ${!passwordValidation.minLength ? 'text-green-600' : 'text-neutral-500'}`}>
                        <span className={`w-2 h-2 rounded-full ${!passwordValidation.minLength ? 'bg-green-600' : 'bg-neutral-300'}`}></span>
                        At least 8 characters
                      </div>
                      <div className={`text-xs flex items-center gap-2 ${!passwordValidation.hasNumber ? 'text-green-600' : 'text-neutral-500'}`}>
                        <span className={`w-2 h-2 rounded-full ${!passwordValidation.hasNumber ? 'bg-green-600' : 'bg-neutral-300'}`}></span>
                        Contains a number
                      </div>
                      <div className={`text-xs flex items-center gap-2 ${!passwordValidation.hasUpperCase ? 'text-green-600' : 'text-neutral-500'}`}>
                        <span className={`w-2 h-2 rounded-full ${!passwordValidation.hasUpperCase ? 'bg-green-600' : 'bg-neutral-300'}`}></span>
                        Contains an uppercase letter
                      </div>
                    </div>
                  </div>

                  {/* Error and Success Messages */}
                  {error && <p className="text-sm text-center text-red-600">{error}</p>}
                  {success && <p className="text-sm text-center text-green-600">{success}</p>}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mx-auto block w-40 py-2 font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    Register
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex-1 h-px bg-neutral-300" />
                    <div className="text-neutral-500 text-sm">or continue with</div>
                    <div className="flex-1 h-px bg-neutral-300" />
                  </div>

                  {/* Social Buttons (UI Only) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleSocialLogin('Google')}
                      className="flex items-center justify-center gap-2 py-2 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
                      aria-label="Sign up with Google"
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
                      onClick={() => handleSocialLogin('Google')}
                      className="flex items-center justify-center gap-2 py-2 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
                      aria-label="Sign up with Google"
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

export default Register;