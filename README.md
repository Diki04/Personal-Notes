# 📝 Personal Notes App

> Aplikasi catatan pribadi yang intuitif dan powerful, dibangun dengan React untuk membantu Anda mengelola catatan dengan mudah! ✨

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.38.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

---

## 🌟 Fitur Unggulan

### ✅ Fitur Dasar
- ➕ **Tambah Catatan** - Buat catatan baru dengan judul dan isi
- 🗑️ **Hapus Catatan** - Hapus catatan yang tidak diperlukan
- 📋 **Daftar Catatan** - Tampilkan semua catatan dalam tampilan yang rapi

### 🚀 Fitur Lanjutan
- 📦 **Arsip Catatan** - Pisahkan catatan aktif dan arsip untuk organisasi yang lebih baik
- 🔄 **Toggle Arsip** - Pindahkan catatan antara aktif dan arsip dengan mudah
- 📅 **Grouping Otomatis** - Catatan dikelompokkan berdasarkan bulan dan tahun pembuatan
- 🔢 **Counter Catatan** - Lihat jumlah catatan di setiap kategori

### 💡 Fitur Khusus
- 🔍 **Pencarian Real-time** - Cari catatan berdasarkan judul secara instan
- 🔦 **Highlight Pencarian** - Kata kunci pencarian akan di-highlight pada judul dan isi catatan
- ⚡ **Validasi Input** - 
  - Judul maksimal 50 karakter dengan counter dinamis
  - Isi catatan minimal 10 karakter dengan pesan error
- 📊 **Sorting Otomatis** - Catatan terbaru ditampilkan di atas
- 🌐 **Format Tanggal Indonesia** - Tanggal ditampilkan dalam format bahasa Indonesia
- ♿ **Accessibility** - Mengikuti best practices untuk aksesibilitas web

---

## 🎯 Teknologi yang Digunakan

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| **React** | 19.1.1 | Library utama untuk membangun UI |
| **React DOM** | 19.1.1 | Rendering React ke DOM |
| **Vite** | 7.1.4 | Build tool & development server yang super cepat |
| **ESLint** | 9.38.0 | Linting untuk menjaga kualitas kode |
| **ESLint Config Dicoding** | 0.9.5 | Standar kode dari Dicoding Academy |

---

## 📁 Struktur Proyek

```
my-personal-notes/
├── public/                    # Asset statis
├── src/
│   ├── components/           # Komponen React
│   │   ├── App.jsx          # Komponen utama dengan state management
│   │   ├── NoteInput.jsx    # Form input catatan baru
│   │   ├── NotesList.jsx    # Daftar catatan dengan grouping
│   │   ├── NoteItem.jsx     # Item catatan individual
│   │   ├── NoteSearch.jsx   # Input pencarian
│   │   └── NoteActionButton.jsx  # Tombol aksi reusable
│   ├── styles/
│   │   └── style.css        # Styling aplikasi
│   ├── utils/
│   │   └── index.js         # Utility functions & data awal
│   └── index.jsx            # Entry point aplikasi
├── eslint.config.js         # Konfigurasi ESLint
├── vite.config.js           # Konfigurasi Vite
├── package.json             # Dependencies & scripts
└── index.html               # HTML template
```

---

## 🚀 Cara Menggunakan

### Prerequisites
Pastikan Anda sudah menginstall:
- **Node.js** (versi 14 atau lebih baru)
- **npm** atau **yarn**

### Instalasi

1. **Clone repository ini**
   ```bash
   git clone https://github.com/Diki04/Personal-Notes.git
   cd Personal-Notes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   - Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`

### Preview Build Production

```bash
npm run serve
```

---

## 🎮 Cara Pakai Aplikasi

### 1️⃣ Membuat Catatan Baru
- Isi **judul** catatan (maksimal 50 karakter)
- Isi **konten** catatan (minimal 10 karakter)
- Klik tombol **"Buat"**
- Catatan baru akan muncul di bagian **Catatan Aktif**

### 2️⃣ Mencari Catatan
- Ketik kata kunci di kolom pencarian di header
- Hasil akan difilter secara real-time
- Kata kunci akan **di-highlight** pada hasil pencarian

### 3️⃣ Mengarsipkan Catatan
- Klik tombol **"Arsipkan"** pada catatan yang ingin diarsipkan
- Catatan akan pindah ke bagian **Arsip**
- Untuk mengembalikan, klik tombol **"Pindahkan"**

### 4️⃣ Menghapus Catatan
- Klik tombol **"Delete"** pada catatan yang ingin dihapus
- Catatan akan terhapus permanen

---

## 💻 Arsitektur Kode

### State Management
Menggunakan **React Class Component** dengan state di komponen `App`:
- `notes` - Array berisi semua catatan
- `searchKeyword` - Kata kunci pencarian

### Data Flow
```
App (State)
 ├─> NoteSearch (Search Handler)
 ├─> NoteInput (Add Handler)
 └─> NotesList
      └─> NoteItem
           └─> NoteActionButton (Delete/Archive Handler)
```

### Key Features Implementation

#### 🔍 Pencarian dengan Highlight
```jsx
// Regex untuk mencocokkan kata kunci
const regex = new RegExp(`(${keyword})`, 'gi');
// Split dan wrap dengan <mark>
const parts = text.split(regex);
return parts.map(part => 
  regex.test(part) ? <mark>{part}</mark> : part
);
```

#### 📅 Grouping Berdasarkan Bulan
```jsx
const groups = notes.reduce((acc, note) => {
  const date = new Date(note.createdAt);
  const key = `${date.getFullYear()}-${month}`;
  // Group notes by month-year
  if (!acc[key]) acc[key] = { label, notes: [] };
  acc[key].notes.push(note);
  return acc;
}, {});
```

#### ⚡ Validasi Input
- **Judul**: Maksimal 50 karakter dengan live counter
- **Isi**: Minimal 10 karakter dengan error feedback
- **Controlled Components**: Semua input menggunakan state

---

## 🎨 Highlight Fitur

### 1. **Smart Grouping**
Catatan secara otomatis dikelompokkan berdasarkan bulan dan tahun pembuatan, membuat organisasi lebih mudah.

### 2. **Search Highlighting**
Kata kunci pencarian akan di-highlight menggunakan tag `<mark>`, memudahkan menemukan informasi yang dicari.

### 3. **Dual List Management**
Pisahkan catatan aktif dan arsip untuk workflow yang lebih efisien.

### 4. **Real-time Validation**
Feedback langsung saat user mengetik, mencegah kesalahan input.

### 5. **Responsive Components**
Semua komponen didesain modular dan reusable.

---

## 📊 Data Awal

Aplikasi dilengkapi dengan 6 catatan contoh tentang konsep-konsep React:
- Babel
- Functional Component
- Modularization
- Lifecycle
- ESM
- Module Bundler

---

## 🧪 Testing

Aplikasi dilengkapi dengan `data-testid` pada setiap elemen untuk memudahkan testing:
- `note-app`
- `note-input`
- `note-item`
- `note-search`
- Dan masih banyak lagi...

---

## 🛠️ Development Tools

### ESLint
Proyek ini menggunakan konfigurasi ESLint dari Dicoding Academy untuk menjaga konsistensi kode.

```bash
# Cek linting
npx eslint src/
```

### Vite
Development server dengan Hot Module Replacement (HMR) yang super cepat.

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:
1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📝 Catatan Pengembangan

Proyek ini dikembangkan sebagai submission untuk **Dicoding Academy** dengan implementasi:
- ✅ **Basic Requirements** - CRUD catatan
- ✅ **Skilled Requirements** - Search, validation, reusable components
- ✅ **Advanced Requirements** - Archive, grouping, highlight, sorting

---

## 📄 Lisensi

Proyek ini dibuat untuk tujuan pembelajaran dan portfolio.

---

## 👨‍💻 Pengembang

Dikembangkan oleh **Rizkillah**

**Repository:** [Personal-Notes](https://github.com/Diki04/Personal-Notes)

---

## ⭐ Dukungan

Jika Anda merasa proyek ini bermanfaat, jangan lupa berikan **⭐ STAR** di GitHub!

Setiap star sangat berarti dan membantu proyek ini berkembang! 🚀

---

## 📞 Kontak & Feedback

Punya saran atau menemukan bug? Silakan buka [Issue](https://github.com/Diki04/Personal-Notes/issues) di GitHub!

---

<div align="center">

### 🌟 Terima kasih telah menggunakan Personal Notes App! 🌟

**Jangan lupa STAR ⭐ repository ini jika bermanfaat!**

Made with 💙 and React ⚛️

</div>
