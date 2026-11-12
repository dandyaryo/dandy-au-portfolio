// Data publik untuk portofolio. Hindari memasukkan dokumen internal atau kredensial di sini.
const projects = [
  { id:'cerdas', title:'CERDAS', category:'PROJECT · PRODUKSI · KUALITAS', tint:'#efd2c8', summary:'Menghubungkan informasi proyek, tahapan produksi, pengendalian kualitas, dan tindak lanjut pelanggan.', focus:'Keterlacakan pekerjaan dan koordinasi lintas fungsi.', thread:'Di produksi, satu status yang terlambat diperbarui bisa membuat tim lain kehilangan konteks.', reply:'Itu sebabnya CERDAS menghubungkan perjalanan pekerjaan dari proyek sampai kontrol kualitas.' },
  { id:'mitra', title:'MITRA', category:'TENAGA KERJA · PELAPORAN', tint:'#d7e8dc', summary:'Pencatatan tenaga kerja, timesheet, dan laporan aktivitas di lokasi kerja.', focus:'Aktivitas lapangan tercatat dan lebih mudah disusun menjadi laporan operasional.', thread:'Bagaimana kalau aktivitas di site bisa dibaca tanpa menunggu rangkuman manual?', reply:'MITRA merapikan timesheet dan catatan lapangan agar tim bisa melihat alur kerja dengan lebih jelas.' },
  { id:'srms', title:'SRMS', category:'PENGADAAN · ANGGARAN', tint:'#dfd8ec', summary:'Mendukung perbandingan penawaran, anggaran pengadaan, dan koordinasi dengan fungsi keuangan.', focus:'Kebutuhan pembelian serta pemakaian anggaran lebih mudah dipantau.', thread:'Penawaran barang banyak, anggaran terbatas, dan setiap keputusan perlu jejak yang jelas.', reply:'SRMS membantu membandingkan pilihan dan melihatnya bersama konteks biaya proyek.' }
];
const career = [
  {phase:'Fondasi aviasi',range:'2016—2017',items:[
    {date:'MEI 2016',title:'Lulus SMKN 29 Penerbangan Jakarta',place:'Airframe & Powerplant',story:'Fondasi mekanika pesawat, pembacaan instruksi teknis, keselamatan kerja, dan disiplin perawatan.',capability:'Dasar airframe dan powerplant · ketelitian teknis'},
    {date:'JULI—AGUSTUS 2016',title:'Memilih pengalaman kerja di GMF AeroAsia',place:'PT Garuda Maintenance Facilities Aero Asia · Hangar 1 TBH, Bandara Soekarno-Hatta',story:'Mengikuti program beasiswa Gakubu Jepang dan NTU Singapura, kemudian menerima pekerjaan sebagai mekanik Cabin Maintenance pada equipment & furnishing.',capability:'Perawatan kabin · dokumentasi pekerjaan · standar kualitas aviasi'},
    {date:'FEBRUARI 2017',title:'Basic Aircraft Maintenance',place:'Program BAM-GMF',story:'Mengikuti program dasar perawatan pesawat. Memilih jalur studi berikutnya saat ditawarkan pendidikan Basic License A1 dan A4 dengan ikatan dinas.',capability:'Dasar prosedur perawatan · pengambilan keputusan karier'}
  ]},
  {phase:'Teknik dan lisensi',range:'2017—2021',items:[
    {date:'AGUSTUS 2017',title:'D3 Teknik Penerbangan',place:'Universitas Nurtanio Bandung · Motor Pesawat Terbang',story:'Memperdalam sistem motor pesawat dan analisis teknis melalui pendidikan formal.',capability:'Sistem mesin pesawat · analisis kerusakan · penalaran teknik'},
    {date:'NOVEMBER 2019—2020',title:'Mekanik di Batam Aero Technic',place:'PT Batam Aero Technic · Lion Group',story:'Diterima sebagai mekanik; pada November 2020 menyelesaikan sidang dan ujian komprehensif serta lulus ujian Basic License A1 dan A4.',capability:'Inspeksi · prosedur perawatan · kepatuhan standar aviasi'},
    {date:'JANUARI—SEPTEMBER 2021',title:'Promosi menjadi Licensed Engineer',place:'PT Batam Aero Technic',story:'Naik dari mekanik menjadi Licensed Engineer. Masa kerja berakhir saat efisiensi industri pada masa pandemi.',capability:'Tanggung jawab teknis · verifikasi pekerjaan · keputusan berbasis prosedur'}
  ]},
  {phase:'Operasi gedung',range:'2021—2022',items:[
    {date:'NOVEMBER 2021—FEBRUARI 2022',title:'Engineering MEP-HVAC',place:'PT Perkasa Tehnik · Berita Satu Plaza (kini CFX Tower)',story:'Beralih ke pemeliharaan sistem mekanikal, elektrikal, plumbing, dan tata udara pada lingkungan gedung.',capability:'Troubleshooting fasilitas · pemeliharaan MEP-HVAC · respons gangguan'},
    {date:'FEBRUARI—SEPTEMBER 2022',title:'Engineering di Lippo Mall Indonesia',place:'Plaza Semanggi, lalu Lippo Mall Puri',story:'Melanjutkan fungsi MEP-HVAC dan berpindah lokasi kerja pada Mei 2022; mengakhiri masa kerja pada September 2022.',capability:'Koordinasi fasilitas · kontinuitas operasi · pemeliharaan lintas lokasi'}
  ]},
  {phase:'HR menuju kepemimpinan HSSE',range:'2022—2025',items:[
    {date:'OKTOBER 2022—JANUARI 2023',title:'HR Officer → HSE Coordinator',place:'PT Petrodrill Manufaktur Indonesia',story:'Memulai dari administrasi dan koordinasi SDM, lalu dipercaya memegang HSE karena kebutuhan dominan pada ruang lingkup keselamatan.',capability:'Administrasi SDM · koordinasi personel · identifikasi risiko'},
    {date:'AGUSTUS 2023',title:'Superintendent HSE',place:'PT Petrodrill Manufaktur Indonesia',story:'Memimpin Safety Officer, AGT, dan Fire Watcher serta mengawasi penerapan kontrol keselamatan di lapangan.',capability:'Supervisi tim · kontrol pekerjaan berisiko · disiplin pelaporan'},
    {date:'JUNI—JULI 2024',title:'Penghargaan HSSE dan promosi Manager',place:'Pertamina EP Cepu · PT Petrodrill Manufaktur Indonesia',story:'Menerima Best Performance HSSE pada Juni. Pada Juli memimpin perubahan struktur HSE menjadi HSSE dengan fungsi medis, lingkungan, keselamatan, dan keamanan.',capability:'Rancang struktur organisasi · audit dan sistem manajemen · kepemimpinan lintas fungsi'},
    {date:'2024—FEBRUARI 2025',title:'Menjaga transisi organisasi',place:'PT Petrodrill Manufaktur Indonesia',story:'Mengelola fungsi HSSE saat perusahaan mengalami perubahan kepemilikan dan organisasi. Mengakhiri masa kerja pada Februari 2025.',capability:'Manajemen perubahan · kontinuitas pengendalian risiko · kualifikasi pelanggan'}
  ]},
  {phase:'Bisnis, operasi, dan sistem',range:'2024—SEKARANG',items:[
    {date:'DESEMBER 2024',title:'Kerja sama kualifikasi SST',place:'PT Surya Sealindo Teknologi',story:'Mendukung pengurusan ISO, CSMS Pertamina Drilling Service, dan e-CHSEMS Migas sebelum bergabung sebagai karyawan.',capability:'Dokumen kualifikasi · sistem manajemen · persyaratan pelanggan'},
    {date:'MARET—NOVEMBER 2025',title:'Business Development Manager',place:'PT Surya Sealindo Teknologi',story:'Menghubungkan peluang pasar dengan kapabilitas workshop. Menuntaskan sejumlah persyaratan legalitas, dokumen, dan kualifikasi tender lintas pelanggan industri.',capability:'Tender compliance · analisis peluang · koordinasi komersial dan teknis'},
    {date:'NOVEMBER 2025—SEKARANG',title:'General Manager Operasional',place:'PT Surya Sealindo Teknologi',story:'Memimpin penghubung fungsi penjualan, produksi, proyek, pengadaan, keuangan, QHSE, dan pengembangan organisasi.',capability:'Tata kelola lintas fungsi · pengambilan keputusan · kendali kapasitas dan kinerja'},
    {date:'JANUARI 2026—SEKARANG',title:'Perombakan proses dan arsitektur sistem',place:'PT Surya Sealindo Teknologi',story:'Mengoptimalkan alur kerja pusat dan cabang, merancang ulang struktur organisasi, serta mengembangkan sistem manajemen mandiri untuk SCM, operasional, sales, dan akuntansi.',capability:'Desain proses · arsitektur data · dashboard dan otomasi kerja'}
  ]}
];
const parallelWork = {title:'PT Multiguna Karya Tjipta',story:'Mendirikan usaha konsultasi bisnis dan pengurusan ISO, SKUP, SBUJK, CSMS, tender compliance, serta HSE Plan. Tanggal pendirian belum dicantumkan dalam portofolio ini.',capability:'Konsultasi · regulasi · pengembangan usaha'};
const skills = [
  {title:'HSSE & manajemen risiko',detail:'Keselamatan kerja, kepatuhan operasional, dan penerapan sistem manajemen.'},
  {title:'Pengembangan bisnis',detail:'Memahami kebutuhan pelanggan dan menghubungkannya dengan kemampuan perusahaan.'},
  {title:'Koordinasi operasional',detail:'Menghubungkan fungsi pendukung, kebutuhan produksi, dan tindak lanjut pekerjaan.'},
  {title:'Digitalisasi proses',detail:'Merancang alur data, pencatatan, dashboard, dan pelaporan berbasis Sheets serta Apps Script.'}
];
const aiJourney = [
  {date:'4 OKTOBER 2024',title:'Pertanyaan pertama yang terlacak',detail:'Jejak percakapan tertua yang tersedia dimulai dengan “jam kerja selamat”, kemudian perhitungan Medical Treatment Case serta istilah LTIFR, TRIR, SR, dan IR. AI menjadi teman belajar untuk menguji pemahaman HSSE, bukan sumber keputusan akhir.'},
  {date:'2025—2026',title:'Memperluas cara memecahkan masalah',detail:'Dari persoalan kepatuhan dan kualifikasi, pendekatannya berkembang menjadi pemetaan proses, penyusunan pilihan, dan pemeriksaan asumsi lintas fungsi. Setiap hasil tetap perlu dicocokkan dengan dokumen serta kondisi pekerjaan.'},
  {date:'2026—SEKARANG',title:'Menerjemahkan proses menjadi sistem',detail:'Pengembangan CERDAS, MITRA, SRMS, MPS/Project Master, dan alur keuangan menjadi ruang belajar untuk merancang data, antarmuka, kontrol, serta laporan. AI membantu mempercepat eksplorasi dan iterasi; rancangan serta verifikasi operasional tetap dipimpin manusia.'}
];
const screens = {
  messages:{title:'Pesan',overline:'TIGA PERCAKAPAN'},
  gallery:{title:'Galeri',overline:'KARYA & PROYEK'},
  archive:{title:'Karier',overline:'ROADMAP 2016—SEKARANG'},
  notes:{title:'Jejak AI',overline:'BELAJAR & MENCIPTA'},
  certificates:{title:'Sertifikat',overline:'BELAJAR BERKELANJUTAN'},
  contact:{title:'Kontak',overline:'MARI TERHUBUNG'}
};
const $ = (selector) => document.querySelector(selector);
const appBody = $('#appBody');
let currentApp = null;
let currentDetail = null;
let visited = new Set();

function updateClock(){
  const now=new Date();
  const time=new Intl.DateTimeFormat('id-ID',{timeZone:'Asia/Jakarta',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(now);
  $('#clock').textContent=time; $('#lockTime').textContent=time;
  $('#lockDate').textContent=new Intl.DateTimeFormat('id-ID',{timeZone:'Asia/Jakarta',weekday:'long',day:'numeric',month:'long'}).format(now).toUpperCase();
}
function unlock(){
  $('#lockscreen').classList.add('hidden'); $('#homescreen').classList.remove('hidden');
  sessionStorage.setItem('dandyPortfolioUnlocked','1');
}
function home(){
  currentApp=null; currentDetail=null;
  $('#appScreen').classList.add('hidden'); $('#homescreen').classList.remove('hidden');
  $('#badge').classList.toggle('hidden',visited.size===projects.length);
  if(visited.size!==projects.length) $('#badge').textContent=String(projects.length-visited.size);
}
function openApp(key){
  currentApp=key; currentDetail=null;
  $('#homescreen').classList.add('hidden'); $('#appScreen').classList.remove('hidden');
  $('#appTitle').textContent=screens[key].title; $('#appOverline').textContent=screens[key].overline;
  render();
}
function projectById(id){return projects.find(p=>p.id===id)}
function render(){
  appBody.scrollTop=0;
  if(currentApp==='messages'){
    if(currentDetail){
      const p=projectById(currentDetail); visited.add(p.id);
      appBody.innerHTML=`<div class="chat-intro"><span class="avatar">${p.title[0]}</span><div><strong>${p.title}</strong><small>Catatan proyek · percakapan naratif</small></div></div><p class="chat-date">SEBUAH CERITA TENTANG PROSES KERJA</p><p class="bubble left">${p.thread}</p><p class="bubble right">${p.reply}</p><p class="bubble left">Yang berubah ketika informasinya saling terhubung?</p><p class="bubble right">${p.focus}</p><button class="chat-link" type="button" data-project="${p.id}">Lihat berkas ${p.title}<span aria-hidden="true">↗</span></button>`;
    } else {
      appBody.innerHTML=`<p class="section-kicker">PESAN MASUK</p><h3 class="section-heading">Tiga proyek.<br>Tiga potongan cerita.</h3><p class="section-description">Buka percakapan untuk melihat masalah yang ingin dijawab setiap sistem.</p><div class="thread-list">${projects.map((p,i)=>`<button class="thread" type="button" data-thread="${p.id}"><span class="avatar">${p.title[0]}</span><span class="thread-body"><span class="thread-top"><strong>${p.title}</strong><small>0${i+1}:0${i+2}</small></span><span class="thread-preview">${p.thread}</span></span><span class="thread-arrow">›</span></button>`).join('')}</div><p class="contact-note">Percakapan ini adalah narasi portofolio, bukan pesan dari pelanggan atau rekan kerja.</p>`;
    }
  } else if(currentApp==='gallery'){
    if(currentDetail){
      const p=projectById(currentDetail);
      appBody.innerHTML=`<p class="section-kicker">BERKAS PROYEK / ${p.category}</p><div class="project-detail"><h3>${p.title}</h3><p>${p.summary}</p><div class="detail-panel"><strong>Fokus penerapan</strong>${p.focus}</div></div><p class="contact-note">Gambar dan data proyek internal tidak ditampilkan dalam versi publik.</p>`;
    }else{
      appBody.innerHTML=`<p class="section-kicker">GALERI PROYEK</p><h3 class="section-heading">Sistem yang dibangun<br>dari kebutuhan nyata.</h3><p class="section-description">Pilih satu kartu untuk membaca peran setiap sistem.</p><div class="project-list">${projects.map(p=>`<button class="project-card" type="button" style="--accent:${p.tint}" data-project="${p.id}"><span class="project-tag">${p.category}</span><h3>${p.title} ↗</h3><p>${p.summary}</p></button>`).join('')}</div>`;
    }
  } else if(currentApp==='archive'){
    appBody.innerHTML=`<p class="section-kicker">ARSIP / PERJALANAN</p><h3 class="section-heading">Dari hanggar<br>ke ruang keputusan.</h3><p class="section-description">Buka tiap fase untuk melihat langkah karier dan kemampuan yang terbentuk. Beberapa peran berlangsung bersamaan.</p><div class="phase-list">${career.map((phase,i)=>`<details class="phase" ${i===career.length-1?'open':''}><summary><span class="phase-index">0${i+1}</span><span class="phase-heading"><strong>${phase.phase}</strong><small>${phase.range}</small></span><span class="phase-toggle" aria-hidden="true">＋</span></summary><div class="timeline">${phase.items.map(c=>`<article class="timeline-card"><span class="timeline-mark"></span><div><time>${c.date}</time><h3>${c.title}</h3><strong class="muted-label">${c.place}</strong><p>${c.story}</p><div class="capability"><span>YANG SAYA BAWA</span>${c.capability}</div></div></article>`).join('')}</div></details>`).join('')}</div><div class="parallel-card"><span>JALUR PARALEL · TANGGAL PENDIRIAN BELUM DICANTUMKAN</span><h3>${parallelWork.title}</h3><p>${parallelWork.story}</p><strong>${parallelWork.capability}</strong></div>`;
  } else if(currentApp==='notes'){
    appBody.innerHTML=`<p class="section-kicker">JEJAK AI / CARA BELAJAR</p><h3 class="section-heading">Rasa ingin tahu<br>menjadi cara kerja.</h3><p class="section-description">Dari pertanyaan HSSE pada 4 Oktober 2024 hingga perancangan sistem. Tanggal awal merujuk pada percakapan tertua yang dapat ditelusuri di akun ini.</p><div class="ai-list">${aiJourney.map((s,i)=>`<article class="ai-card"><span class="ai-date">${s.date}</span><h3>${s.title}</h3><p>${s.detail}</p></article>`).join('')}</div><p class="section-kicker notes-subheading">KEMAMPUAN YANG TERHUBUNG</p><div class="note-list">${skills.map((s,i)=>`<article class="note-card"><span class="note-number">0${i+1}</span><div><h3>${s.title}</h3><p>${s.detail}</p></div></article>`).join('')}</div>`;
  } else if(currentApp==='certificates'){
    appBody.innerHTML=`<p class="section-kicker">ARSIP PEMBELAJARAN</p><div class="cert-hero"><strong>80<span>+</span></strong><h3>sertifikat dan pelatihan</h3><p>Akumulasi pembelajaran yang saya miliki di berbagai bidang. Jumlah ini berdasarkan keterangan pemilik portofolio; daftar dan dokumen individual belum ditampilkan di situs publik.</p></div><div class="cert-topics">${['Manufaktur','Teknis & engineering','HR','HSE & HSSE','Six Sigma','Aviasi','Sistem manajemen','Bidang lainnya'].map(x=>`<span>${x}</span>`).join('')}</div><p class="contact-note">Dokumen sertifikat akan ditambahkan setelah dipilih dan ditinjau untuk publikasi.</p>`;
  } else if(currentApp==='contact'){
    appBody.innerHTML=`<p class="section-kicker">AKHIR CERITA, AWAL PERCAKAPAN</p><div class="contact-card"><div class="monogram">DA</div><h3>Dandy Aryo Putra</h3><p>General Manager Operasional · Business Development</p><p>Terima kasih sudah melihat perjalanan saya. Untuk diskusi pekerjaan atau kolaborasi, kanal kontak akan dicantumkan setelah diverifikasi.</p></div><p class="contact-note">Alamat akun GitHub tidak otomatis dijadikan alamat kontak publik.</p>`;
  }
}

$('#unlock').addEventListener('click',unlock);
$('#notification').addEventListener('click',()=>{unlock();openApp('messages')});
$('#apps').addEventListener('click',event=>{const app=event.target.closest('[data-app]');if(app)openApp(app.dataset.app)});
$('#appBody').addEventListener('click',event=>{
  const thread=event.target.closest('[data-thread]');
  if(thread){currentApp='messages';currentDetail=thread.dataset.thread;render();return}
  const project=event.target.closest('[data-project]');
  if(project){currentApp='gallery';currentDetail=project.dataset.project;$('#appTitle').textContent='Galeri';$('#appOverline').textContent='KARYA & PROYEK';render()}
});
$('#backButton').addEventListener('click',()=>{if(currentDetail){currentDetail=null;render()}else home()});
$('#homeButton').addEventListener('click',home);
$('#gestureBar').addEventListener('click',()=>{if(!$('#lockscreen').classList.contains('hidden'))unlock();else home()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#appScreen').classList.contains('hidden')){if(currentDetail){currentDetail=null;render()}else home()}});
updateClock(); setInterval(updateClock,30000);
if(sessionStorage.getItem('dandyPortfolioUnlocked')==='1')unlock();
