// src/components/Header.tsx
import { Home } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-green-600 text-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home className="w-5 h-5" />
          <h1 className="text-xl font-bold">Kelurahan Kalirejo</h1>
        </div>
        <nav className="space-x-6 text-sm">
          <a href="#tentang" className="hover:underline">
            Tentang
          </a>
          <a href="#layanan" className="hover:underline">
            Layanan
          </a>
          <a href="#kontak" className="hover:underline">
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
}
