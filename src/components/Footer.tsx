// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer id="kontak" className="bg-blue-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold mb-2">
          Kontak Kelurahan Kalirejo
        </h3>
        <p className="text-sm">
          Jalan Kepodang No. 34, Kalirejo, Banyuwangi, Jawa Timur </p>
        <p className="text-sm">
          Email: kalirejo@banyuwangi.go.id | Telepon: (0333) xxxxx
        </p>
        <p className="text-xs mt-4 text-gray-300">
          &copy; 2025 Kelurahan Kalirejo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
