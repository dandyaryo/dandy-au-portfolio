// Data publik untuk portofolio. Hindari memasukkan dokumen internal atau kredensial di sini.
const projects = [
  { id:'cerdas', title:'CERDAS', category:'PROJECT · PRODUKSI · KUALITAS', tint:'#efd2c8', summary:'Menghubungkan informasi proyek, tahapan produksi, pengendalian kualitas, dan tindak lanjut pelanggan.', focus:'Keterlacakan pekerjaan dan koordinasi lintas fungsi.', thread:'Di produksi, satu status yang terlambat diperbarui bisa membuat tim lain kehilangan konteks.', reply:'Itu sebabnya CERDAS menghubungkan perjalanan pekerjaan dari proyek sampai kontrol kualitas.' },
  { id:'mitra', title:'MITRA', category:'TENAGA KERJA · PELAPORAN', tint:'#d7e8dc', summary:'Pencatatan tenaga kerja, timesheet, dan laporan aktivitas di lokasi kerja.', focus:'Aktivitas lapangan tercatat dan lebih mudah disusun menjadi laporan operasional.', thread:'Bagaimana kalau aktivitas di site bisa dibaca tanpa menunggu rangkuman manual?', reply:'MITRA merapikan timesheet dan catatan lapangan agar tim bisa melihat alur kerja dengan lebih jelas.' },
  { id:'srms', title:'SRMS', category:'PENGADAAN · ANGGARAN', tint:'#dfd8ec', summary:'Mendukung perbandingan penawaran, anggaran pengadaan, dan koordinasi dengan fungsi keuangan.', focus:'Kebutuhan pembelian serta pemakaian anggaran lebih mudah dipantau.', thread:'Penawaran barang banyak, anggaran terbatas, dan setiap keputusan perlu jejak yang jelas.', reply:'SRMS membantu membandingkan pilihan dan melihatnya bersama konteks biaya proyek.' }
];
const career = [
  {period:'2023—2025',role:'Department Head HSSE / HSE Manager',company:'PT Petrodrill Manufaktur Indonesia',description:'Mengelola fungsi kesehatan, keselamatan kerja, keamanan, dan lingkungan dalam kegiatan manufaktur pendukung industri migas.'},
  {period:'MULAI MARET 2025',role:'Business Development Manager',company:'PT Surya Sealindo Teknologi',description:'Mengembangkan bisnis sektor migas dan pertambangan, serta mengoordinasikan fungsi pendukung operasional.'},
  {period:'KEWIRAUSAHAAN',role:'Owner / Komisaris',company:'PT Multiguna Karya Tjipta',description:'Mengembangkan usaha konsultasi, pengadaan, dan layanan pencarian tenaga kerja.'}
];
const skills = [
  {title:'HSSE & manajemen risiko',detail:'Keselamatan kerja, kepatuhan operasional, dan penerapan sistem manajemen.'},
  {title:'Pengembangan bisnis',detail:'Memahami kebutuhan pelanggan dan menghubungkannya dengan kemampuan perusahaan.'},
  {title:'Koordinasi operasional',detail:'Menghubungkan fungsi pendukung, kebutuhan produksi, dan tindak lanjut pekerjaan.'},
  {title:'Digitalisasi proses',detail:'Merancang alur data, pencatatan, dashboard, dan pelaporan berbasis Sheets serta Apps Script.'}
];
const screens = {
  messages:{title:'Pesan',overline:'TIGA PERCAKAPAN'},
  gallery:{title:'Galeri',overline:'KARYA & PROYEK'},
  archive:{title:'Arsip',overline:'PERJALANAN KERJA'},
  notes:{title:'Catatan',overline:'CARA SAYA BEKERJA'},
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
    appBody.innerHTML=`<p class="section-kicker">ARSIP / RIWAYAT</p><h3 class="section-heading">Dari keselamatan kerja<br>ke pengembangan bisnis.</h3><p class="section-description">Setiap peran membentuk cara saya memahami risiko, pelanggan, dan operasi.</p><div class="timeline">${career.map(c=>`<article class="timeline-card"><span class="timeline-mark"></span><div><time>${c.period}</time><h3>${c.role}</h3><strong class="muted-label">${c.company}</strong><p>${c.description}</p></div></article>`).join('')}</div>`;
  } else if(currentApp==='notes'){
    appBody.innerHTML=`<p class="section-kicker">CATATAN / DANDY</p><h3 class="section-heading">Manusia, proses,<br>dan keputusan.</h3><p class="section-description">Empat bidang yang saling bertemu dalam pekerjaan saya.</p><div class="note-list">${skills.map((s,i)=>`<article class="note-card"><span class="note-number">0${i+1}</span><div><h3>${s.title}</h3><p>${s.detail}</p></div></article>`).join('')}</div>`;
  } else if(currentApp==='contact'){
    appBody.innerHTML=`<p class="section-kicker">AKHIR CERITA, AWAL PERCAKAPAN</p><div class="contact-card"><div class="monogram">DA</div><h3>Dandy Aryo Putra</h3><p>Business Development & Manajemen Operasional</p><p>Terima kasih sudah melihat perjalanan saya. Untuk diskusi pekerjaan atau kolaborasi, kanal kontak akan dicantumkan setelah diverifikasi.</p></div><p class="contact-note">Alamat akun GitHub tidak otomatis dijadikan alamat kontak publik.</p>`;
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
