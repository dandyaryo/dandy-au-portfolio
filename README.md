# Dandy Aryo Putra — Portofolio Interaktif

Portofolio publik bergaya cerita AU dalam tampilan ponsel. Pengunjung membuka layar kunci dan menelusuri Pesan, Galeri, Arsip, Catatan, serta Kontak. Percakapan di dalamnya adalah cara menyajikan informasi portofolio, bukan transkrip pribadi.

## Isi dan batas versi ini

- Karier, bidang keahlian, dan deskripsi CERDAS, MITRA, serta SRMS disusun dari `Portfolio_Personal_DB_v1.0.xlsx` yang disiapkan untuk Dandy.
- Tidak ada data pelanggan, database, kredensial, sertifikat, atau dokumen internal di situs ini.
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
