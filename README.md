# Dandy Aryo Putra — Portofolio Interaktif

Portofolio publik bergaya cerita AU dalam tampilan ponsel. Pengunjung membuka layar kunci dan menelusuri Pesan, Galeri, Karier, Jejak AI, Sertifikat, serta Kontak. Percakapan di dalamnya adalah cara menyajikan informasi portofolio, bukan transkrip pribadi.

## Isi dan batas versi ini

- Roadmap 2016–2026 disusun dari kronologi yang diberikan Dandy pada 12 November 2026. Kemampuan pada setiap tahap adalah rangkuman dari tugas dan tanggung jawab yang dijelaskan, bukan daftar kualifikasi yang telah diaudit pihak ketiga.
- Tanggal 4 Oktober 2024 WIB untuk awal Jejak AI didukung percakapan tertua yang tersedia di akun ini mengenai jam kerja selamat dan metrik HSSE. Ini tidak membuktikan bahwa tidak ada penggunaan AI yang lebih awal di tempat lain.
- Klaim 80+ sertifikat dan bidangnya berasal dari keterangan pemilik. Judul, penerbit, dan berkas sertifikat satu per satu belum ditampilkan.
- Deskripsi CERDAS, MITRA, dan SRMS bersumber dari `Portfolio_Personal_DB_v1.0.xlsx` yang disiapkan untuk Dandy.
- Peran PT Multiguna Karya Tjipta dicatat sebagai jalur paralel karena tanggal pendiriannya belum diberikan.
- Tidak ada data pelanggan, database, kredensial, berkas sertifikat, atau dokumen internal di situs ini. Alasan kesehatan pribadi tidak disertakan dalam versi publik.
- Alamat email akun GitHub tidak ditampilkan sebagai kontak publik. Isi kontak sesudah pemilik menentukan kanal yang ingin dipublikasikan.
- Ini situs statis. Tidak tersambung ke backend Apps Script portofolio terdahulu, sehingga konten diedit melalui `script.js` dan perubahan dipublikasikan lewat GitHub.
- Font dari Google Fonts memerlukan koneksi internet; font bawaan tetap tersedia sebagai cadangan.

## Menjalankan lokal

Buka `index.html` di browser, atau jalankan server lokal:

```sh
python3 -m http.server 8000
```

Kemudian buka `http://localhost:8000` dari folder proyek.

## Menerbitkan di GitHub Pages

1. Unggah empat file ini ke repository pada akun GitHub yang dipilih pemilik.
2. Buka **Settings → Pages** dan pilih **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Alamatnya akan berbentuk `https://NAMA-AKUN.github.io/NAMA-REPO/`.

Jangan mengunggah source Apps Script, file database, atau kunci admin dari portofolio lama ke repo publik. Jika ingin menghubungkan situs ini ke backend lama, rancang dan uji API serta izin aksesnya dahulu.
