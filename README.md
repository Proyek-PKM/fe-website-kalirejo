# Sample Landing Page

Ini adalah contoh kode dari halaman landing page dari proyek Si Karjo App yang dapat digunakan secara independen. Proyek ini menampilkan statistik laporan masyarakat Desa Kalirejo dengan menggunakan chart dan komponen-komponen React.

## Instalasi

1. Pastikan Anda memiliki Node.js dan npm (atau bun, pnpm) terinstal di sistem Anda
2. Di dalam folder ini, instal dependensi dengan perintah:
   ```bash
   npm install
   ```
   atau
   ```bash
   bun install
   ```

3. Jalankan proyek dengan perintah:
   ```bash
   npm run dev
   ```
   atau
   ```bash
   bun dev
   ```

4. Buka browser dan kunjungi URL yang ditampilkan (biasanya http://localhost:5173)

## Dependensi

Proyek ini menggunakan:
- React 19.1.0
- React Router DOM
- Chart.js dan React Chart.js 2
- Tailwind CSS
- Vite sebagai build tool

## Struktur File

- `/src/App.tsx` - Komponen utama aplikasi
- `/src/pages/Landing/Landing.tsx` - Komponen halaman landing
- `/src/components/charts/PieChart.tsx` - Komponen chart lingkaran
- `/src/components/LandingLayout.tsx` - Layout tata letak halaman
- `/src/components/Sidebar/LandingSidebar.tsx` - Sidebar untuk halaman landing
- `/src/data/chartData.ts` - Data untuk chart
- `/public/material-symbols.css` - File CSS untuk ikon

## Fitur

- Tampilan statistik laporan masyarakat dalam bentuk card dan chart
- Chart lingkaran interaktif untuk menampilkan distribusi status laporan
- Layout sidebar dan main content
- Desain responsif menggunakan Tailwind CSS

## Catatan

Proyek ini merupakan contoh kode dari bagian landing page Si Karjo App dan tidak termasuk fitur autentikasi atau backend.