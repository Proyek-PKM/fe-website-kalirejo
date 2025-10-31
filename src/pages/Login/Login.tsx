import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authstore";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [sessionToken, setSessionToken] = useState("");
  const [phones, setPhones] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // TEMPORARY: Direct navigation to dashboard (security bypass for development)
    navigate("/dashboard");
    setLoading(false);
    
    /*
    // ORIGINAL CODE - COMMENTED FOR TEMPORARY ACCESS
    try {
      const res = await fetch(
        "https://ephemeral.desakalirejo.id/auth/request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone }),
        }
      );
      const data = await res.json();

      if (data.next) setStep("otp");
      if (data.phone) setPhones(data.phone);
      if (data.status === "error" && data.message)
        setErrorMessage(data.message);
    } catch (err) {
      console.error(err);
      setErrorMessage("Terjadi kesalahan jaringan.");
    } finally {
      setLoading(false);
    }
    */
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // TEMPORARY: Direct navigation to dashboard (security bypass for development)
    navigate("/dashboard");
    setLoading(false);
    
    /*
    // ORIGINAL CODE - COMMENTED FOR TEMPORARY ACCESS
    try {
      const res = await fetch(
        "https://ephemeral.desakalirejo.id/auth/request/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: phones, code: otp }),
        }
      );
      const data = await res.json();

      sessionStorage.setItem("sessionToken", data.token);
      if (data.token) {
        setSessionToken(data.token);
        // Store the token in localStorage/sessionStorage as needed

        // Here you can login to your auth store with the received token
        // For now, we'll use a default user for demo purposes
        const result = await login("admin", "admin123"); // Temporary login for demo
        if (result.success) {
          navigate("/dashboard");
        } else {
          setErrorMessage(result.message);
        }
      }

      if (data.status === "error" && data.message)
        setErrorMessage(data.message);
    } catch (err) {
      console.error(err);
      setErrorMessage("Terjadi kesalahan jaringan.");
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center">
      <div className="bg-slate-100 p-5 rounded-xl max-w-2xl w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold">Login</h1>
          {/* <button
            onClick={() => navigate('/')}
            className="text-sm bg-gray-200 hover:bg-gray-300 rounded px-3 py-1 font-medium"
          >
            Back to Landing
          </button> */}
        </div>

        {errorMessage && (
          <div className="mb-2 p-2 bg-red-200 text-red-800 rounded">
            {errorMessage}
          </div>
        )}

        {step === "phone" && (
          <form className="flex flex-col gap-2" onSubmit={handlePhoneSubmit}>
            <label className="font-bold">Nomor Hp</label>
            <input
              className="p-2 rounded focus:outline-none placeholder:capitalize"
              type="text"
              placeholder="Input nomor hp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="submit"
              className="bg-slate-300 rounded p-2 font-bold text-slate-700 cursor-pointer flex items-center justify-center"
              disabled={loading}
            >
              {loading && (
                <svg
                  className="mr-3 h-5 w-5 animate-spin text-slate-700"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="m4 12a8 8 0 018-8v8h4z"
                  ></path>
                </svg>
              )}
              Kirim Kode
            </button>
          </form>
        )}

        {step === "otp" && (
          <form className="flex flex-col gap-2" onSubmit={handleOtpSubmit}>
            <label className="font-bold">Kode OTP</label>
            <input
              className="p-2 rounded focus:outline-none placeholder:capitalize"
              type="text"
              placeholder="Input kode OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              type="submit"
              className="bg-slate-300 rounded p-2 font-bold text-slate-700 cursor-pointer flex items-center justify-center"
              disabled={loading}
            >
              {loading && (
                <svg
                  className="mr-3 h-5 w-5 animate-spin text-slate-700"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="m4 12a8 8 0 018-8v8h4z"
                  ></path>
                </svg>
              )}
              Verifikasi OTP
            </button>
          </form>
        )}

        {sessionToken && (
          <div className="mt-4 p-2 bg-green-200 rounded">
            <p>Login sukses!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;