import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Send, CheckCircle } from "lucide-react"; // Menggunakan ikon dari lucide-react (perlu diinstal)

// Konstanta URL untuk API
const GET_TOKEN_URL = "https://ephemeral.desakalirejo.id/auth/request";
const VERIFY_TOKEN_URL = "https://ephemeral.desakalirejo.id/auth/request/verify";

export default function Login() {
  const navigate = useNavigate();
  // State untuk mengelola tahap: 'phone' atau 'token'
  const [stage, setStage] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // --- Fungsi untuk Tahap 1: Mengirim Nomor Telepon ---
  const handleGetToken = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      // Simulasi panggilan API ke /getToken
      // Dalam aplikasi nyata, Anda akan mengirimkan phoneNumber di sini.
      const response = await fetch(GET_TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      if (response.ok) {
        // Jika berhasil, pindah ke tahap verifikasi token
        // Anda mungkin perlu menyimpan ID Sesi atau informasi lain dari respons
        console.log(`Token berhasil dikirim ke ${phoneNumber}`);
        setStage("token");
      } else {
        // Tangani error dari server
        const errorData = await response.json();
        setError(errorData.message || "Gagal mendapatkan token. Coba lagi.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Terjadi masalah jaringan. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }, [phoneNumber, isLoading]);

  // --- Fungsi untuk Tahap 2: Memverifikasi Token ---
  const handleVerifyToken = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      // Simulasi panggilan API ke /verifytoken
      // Dalam aplikasi nyata, Anda akan mengirimkan token dan phoneNumber/SessionID
      const response = await fetch(VERIFY_TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber, code: token }),
      });

      if (response.ok) {
        // Jika verifikasi berhasil, anggap login berhasil
        const userData = await response.json(); // Ambil data pengguna/token otentikasi
        localStorage.setItem("user", JSON.stringify({ phone: phoneNumber, ...userData }));
        navigate("/"); // Redirect ke halaman utama
      } else {
        // Tangani error token tidak valid
        const errorData = await response.json();
        setError(errorData.message || "Token tidak valid. Coba lagi.");
      }
    } catch (err: any) {
      console.error("Fetch error:", err);
      setError("Terjadi masalah jaringan saat verifikasi.");
    } finally {
      setIsLoading(false);
    }
  }, [phoneNumber, token, isLoading, navigate]);

  // --- Komponen UI Berdasarkan Tahap ---

  const PhoneInputForm = (
    <form onSubmit={handleGetToken} className="flex flex-col gap-5 mt-10 w-full">
      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
          Nomor Telepon
        </label>
        <input
          className="rounded-xl p-3 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
          type="tel" // Gunakan 'tel' untuk nomor telepon
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Cth: 081234567890"
          required
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || phoneNumber.length < 8}
        className={`flex justify-center items-center gap-2 p-3 rounded-xl text-white font-semibold transition duration-150 ease-in-out ${isLoading || phoneNumber.length < 8
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl"
          }`}
      >
        {isLoading ? (
          "Mengirim..."
        ) : (
          <>
            Kirim Token <Send size={18} />
          </>
        )}
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  );

  const TokenVerificationForm = (
    <form onSubmit={handleVerifyToken} className="flex flex-col gap-5 mt-10 w-full">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-600">
          Kode verifikasi telah dikirim ke nomor **{phoneNumber}**.
        </p>
        <label htmlFor="token" className="text-sm font-medium text-gray-700">
          Kode Verifikasi (Token)
        </label>
        <input
          className="rounded-xl p-3 border border-gray-300 text-center text-xl tracking-widest focus:ring-green-500 focus:border-green-500 transition duration-150"
          type="text" // 'text' lebih baik untuk token numerik/alfanumerik
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="••••••"
          maxLength={6} // Asumsi 6 digit
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setStage('phone')}
          className="text-xs text-blue-500 hover:underline mt-1 self-start"
        >
          Bukan nomor Anda? Ubah Nomor
        </button>
      </div>
      <button
        type="submit"
        disabled={isLoading || token.length < 6}
        className={`flex justify-center items-center gap-2 p-3 rounded-xl text-white font-semibold transition duration-150 ease-in-out ${isLoading || token.length < 6
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl"
          }`}
      >
        {isLoading ? (
          "Memverifikasi..."
        ) : (
          <>
            Verifikasi dan Masuk <CheckCircle size={18} />
          </>
        )}
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="w-full max-w-4xl bg-gray-50 rounded-2xl flex overflow-hidden">
        {/* Kolom Kiri (Visual) */}
        <div className="hidden lg:flex flex-1 justify-center items-center p-10 ">
          <div className="text-center">
            {/* Mengganti logo dengan elemen yang lebih dinamis untuk estetika */}
            <img className="max-w-xs mx-auto" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kibrispdr.org%2Fdata%2F753%2Flogo-kabupaten-banyuwangi-png-3.png&f=1&nofb=1&ipt=be43c0b886e2cd492eb138db6d24aa8bc9c740f8b7bbb6e25a8772e331de191d"
              alt="logo kabupaten banyuwangi" />
            {/* <Send className="w-20 h-20 text-white mx-auto mb-4" /> */}
            <h2 className="text-3xl font-bold mb-2">Verifikasi Cepat</h2>
            <p className="text-gray-600">Otentikasi aman dengan nomor telepon dan kode verifikasi.</p>


            {/* [Image of secure mobile phone verification process illustration] */}

          </div>
        </div>

        {/* Kolom Kanan (Formulir) */}
        <div className="flex flex-col p-8 sm:p-12 lg:p-16 w-full lg:w-1/2">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {stage === "phone" ? "Masuk ke Sistem" : "Verifikasi Kode"}
            </h1>
            <p className="text-gray-500 font-normal">
              {stage === "phone"
                ? "Masukkan nomor telepon Anda untuk melanjutkan."
                : "Periksa SMS/WhatsApp Anda dan masukkan kode yang diterima."}
            </p>
          </div>
          {/* Tampilkan Form berdasarkan Tahap */}
          {stage === "phone" ? PhoneInputForm : TokenVerificationForm}
        </div>
      </div>
    </div>
  );
}