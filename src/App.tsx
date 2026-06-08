/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  BookOpen, 
  Target, 
  RefreshCw, 
  AlertCircle, 
  Menu, 
  X, 
  FileText, 
  Quote,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  School,
  GraduationCap,
  Download,
  FileCode,
  Play,
  Image as ImageIcon,
  Info,
  Award,
  ExternalLink,
  Eye,
  Calendar,
  Users
} from 'lucide-react';

interface Artifact {
  id: string;
  title: string;
  category: string;
  tag: string;
  previewType: 'pdf' | 'image' | 'video';
  previewUrl: string;
  icon: any;
  color: string;
  description: string;
  konteks: string;
  tujuan: string;
  kelebihan: string;
  kekurangan: string;
  analisisTeori: string;
  refleksi: string;
  downloadRpp: string;
  downloadPenilaian: string;
}

interface TimelinePhase {
  phase: string;
  title: string;
  date: string;
  description: string;
  milestones: string[];
}

interface GalleryPhoto {
  id: number;
  title: string;
  category: 'mengajar' | 'diskusi' | 'presentasi siswa';
  url: string;
  description: string;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [activeTimelinePhase, setActiveTimelinePhase] = useState<number>(2); // Default to 'Praktik Mengajar'
  const [galleryFilter, setGalleryFilter] = useState<string>('semua');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profil', href: '#profil' },
    { name: 'Artefak', href: '#analisis' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Dokumentasi', href: '#gallery' },
    { name: 'Penilaian', href: '#penilaian' },
    { name: 'Misi', href: '#misi' },
    { name: 'E-Portfolio 2', href: '#eportfolio2' },
  ];

  // Artifact Utama
  const artifacts: Artifact[] = [
    {
      id: 'modul-ajar',
      title: 'Modul Ajar Dasar Python Kelas X',
      category: 'Modul Ajar',
      tag: 'Dasar Pemrograman',
      previewType: 'pdf',
      previewUrl: 'https://docs.google.com/document/d/18YR3iH-fPQElrn7I1ZKz3ymAQmzys0Np/edit?usp=sharing&ouid=114770279138089865122&rtpof=true&sd=true',
      icon: FileCode,
      color: 'from-pink-500 to-rose-600',
      description: 'Rancangan pelaksanaan pembelajaran lengkap untuk materi pengenalan Python, variabel, dan tipe data dasar menggunakan metode Problem-Based Learning.',
      konteks: 'Diterapkan di kelas X Fase E SMA Negeri 3 Salatiga dengan karakteristik peserta didik yang beragam dalam kesiapan belajar digital.',
      tujuan: 'Peserta didik mampu memahami sintaks dasar Python dan memecahkan masalah sederhana secara logis dan runtut.',
      kelebihan: 'Dilengkapi dengan aktivitas hands-on yang melatih computational thinking, serta lembar kerja (LKPD) yang menuntun secara terstruktur (scaffolding).',
      kekurangan: 'Memerlukan bimbingan intensif bagi kelompok siswa dengan kesiapan belajar awal yang masih rendah.',
      analisisTeori: 'Mengintegrasikan teori Konstruktivisme Sosial Vygotsky melalui konsep scaffolding mandiri dalam kelompok penemu terbimbing.',
      refleksi: 'Pembelajaran berikutnya sebaiknya didahului dengan pengelompokan yang lebih modular berdasarkan hasil asesmen diagnostik kognitif awal.',
      downloadRpp: 'https://docs.google.com/document/d/18YR3iH-fPQElrn7I1ZKz3ymAQmzys0Np/edit?usp=sharing&ouid=114770279138089865122&rtpof=true&sd=true',
      downloadPenilaian: 'https://docs.google.com/document/d/18YR3iH-fPQElrn7I1ZKz3ymAQmzys0Np/edit?usp=sharing&ouid=114770279138089865122&rtpof=true&sd=true'
    },
    {
      id: 'media-ppt',
      title: 'Media PPT Interaktif Berpikir Komputasional',
      category: 'Media PPT',
      tag: 'Alur Logika & Kontrol',
      previewType: 'image',
      previewUrl: 'https://res.cloudinary.com/dojbebdnu/image/upload/v1780920681/algoritma1_e7l6ub_guz0zj.png',
      icon: BookOpen,
      color: 'from-pink-400 to-pink-600',
      description: 'Slide presentasi visual interaktif dengan animasi diagram alur (flowchart) untuk memudahkan memahami logika seleksi kondisi (if-else).',
      konteks: 'Digunakan sebagai media utama pada tahap asimilasi konsep guna memvisualisasikan cara kerja penafsiran kode Python.',
      tujuan: 'Membantu visualisasi logika eksekusi kode percabangan agar tidak terasa abstrak bagi pemula.',
      kelebihan: 'Desain visual modern, kontras warna yang ramah mata siswa, dan disertai studi kasus nyata (misal: penentuan kelulusan nilai).',
      kekurangan: 'Sangat bergantung pada ketersediaan proyektor LCD dan stabilitas daya listrik di ruang kelas.',
      analisisTeori: 'Teori Beban Kognitif (Cognitive Load Theory) diaplikasikan dengan meminimalkan redundant text dan memperkuat dual-coding visual.',
      refleksi: 'Peserta didik jauh lebih responsif ketika slide diseliangi kuis kognitif singkat secara interaktif.',
      downloadRpp: 'https://res.cloudinary.com/dojbebdnu/raw/upload/v1780919213/algoritma1_e7l6ub.ppt',
      downloadPenilaian: 'https://res.cloudinary.com/dojbebdnu/raw/upload/v1780919213/algoritma1_e7l6ub.ppt'
    },
    {
      id: 'hasil-kerja',
      title: 'Hasil Kerja Siswa - Mini Project',
      category: 'Hasil Kerja Siswa',
      tag: 'Implementasi Praktis',
      previewType: 'image',
      previewUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000',
      icon: Users,
      color: 'from-rose-500 to-magenta-600',
      description: 'Karya nyata kelompok siswa berupa kode program kasir minimarket sederhana menggunakan kontrol struktur pengulangan dan percabangan.',
      konteks: 'Hasil penilaian keterampilan akhir proyek kolaboratif pemecahan masalah fungsional di kehidupan sehari-hari.',
      tujuan: 'Mendorong peserta didik menerapkan pemikiran algoritmik untuk bekerja sama memecahkan masalah ritel nyata.',
      kelebihan: 'Siswa menunjukkan orisinalitas tinggi dalam kreativitas penamaan toko dan logika perhitungan diskon berjenjang.',
      kekurangan: 'Beberapa kelompok masih mengalami miskonsepsi sintaksis pada indentasi block kondisional bersarang.',
      analisisTeori: 'Mengadopsi filsafat Konstruksionisme Papert: belajar paling bermakna terjadi saat siswa terlibat dalam mendesain objek bermakna.',
      refleksi: 'Membagikan lembar pemantauan kemajuan mingguan (milestone sheet) terbukti menekan angka free-rider dalam kelompok.',
      downloadRpp: 'https://docs.google.com/spreadsheets/d/12xb9E9fQV76Pn0EWV8NLmGvkdIecADMq678d41812-o/edit?usp=sharing',
      downloadPenilaian: 'https://docs.google.com/spreadsheets/d/12xb9E9fQV76Pn0EWV8NLmGvkdIecADMq678d41812-o/edit?usp=sharing'
    },
    {
      id: 'quiz-python',
      title: 'Quiz Python - Gamifikasi Evaluasi Kelas X',
      category: 'Quiz Python',
      tag: 'Asesmen Formatif',
      previewType: 'image',
      previewUrl: 'https://res.cloudinary.com/dojbebdnu/image/upload/v1780920119/wayground_odevk6.png',
      icon: Target,
      color: 'from-amber-400 to-rose-500',
      description: 'Alat evaluasi formatif berbasis Quizizz yang dirancang dengan aturan gamifikasi menarik guna mengukur kecepatan adaptasi materi.',
      konteks: 'Dilakukan di bagian apresiasi akhir pembelajaran guna memetakan tingkat kepemilikan kompetensi inti siswa secara cepat.',
      tujuan: 'Mengukur pemahaman konseptual tipe data dan logika pemrograman dengan mempertahankan partisipasi kelas.',
      kelebihan: 'Hasil rekapitulasi data kognitif instan dapat langsung digunakan guru merancang remedi di sela kelas.',
      kekurangan: 'Peserta didik yang memiliki hp spesifikasi lama sesekali mengalami keterlambatan rendering waktu kuis.',
      analisisTeori: 'Menerapkan Teori Penguatan Behaviorisme melalui skor real-time leaderboard sebagai stimulus ekstrinsik bermakna.',
      refleksi: 'Gamifikasi terbukti meningkatkan rasa kompetisi sehat, namun butuh pendampingan khusus bagi siswa yang lambat membaca logika.',
      downloadRpp: 'https://wayground.com/admin/quiz/69e8a60179400d2733485cfe',
      downloadPenilaian: 'https://wayground.com/admin/quiz/69e8a60179400d2733485cfe'
    }
  ];

  // Fase Kegiatan Timeline
  const timelinePhases: TimelinePhase[] = [
    {
      phase: 'Observasi',
      title: 'Analisis Karakteristik & Kultur Sekolah',
      date: 'Bulan ke-1 PPL',
      description: 'Mengamati secara pasif metode guru pamong mengajar, dinamika sosial siswa kelas X, serta ekosistem sarana prasarana digital di SMA Negeri 3 Salatiga.',
      milestones: [
        'Pemetaan gaya belajar dominan siswa',
        'Observasi kultur disiplin kelas komputer',
        'Analisis integrasi kurikulum merdeka'
      ]
    },
    {
      phase: 'Asistensi',
      title: 'Bimbingan Merancang & Kolaborasi Pembelajaran',
      date: 'Bulan ke-2 PPL',
      description: 'Membantu merancang dokumen asimilasi awal, membimbing siswa dalam sesi eksplorasi kode lab mandiri, dan menyempurnakan lembar LKPD terstruktur.',
      milestones: [
        'Asistensi pembuatan modul pemrograman praktis',
        'Kolaborasi penataan tempat duduk kelompok berkeadilan',
        'Pra-asesmen simulasi kognitif awal'
      ]
    },
    {
      phase: 'Praktik Mengajar',
      title: 'Implementasi Siklus Pembelajaran Terbimbing',
      date: 'Bulan ke-3 & ke-4 PPL',
      description: 'Memimpin penuh kegiatan utama kelas dengan menerapkan model Problem-Based Learning berkelompok 3 Siklus penuh di bawah bimbingan guru pamong SMAN 3 Salatiga.',
      milestones: [
        'Siklus 1: Pengenalan Sintaks & Input Output',
        'Siklus 2: Kontrol Cabang (If-Else)',
        'Siklus 3: Implementasi Proyek Mandiri Aplikasi'
      ]
    },
    {
      phase: 'Evaluasi',
      title: 'Pemrosesan Nilai & Analisis Ketuntasan',
      date: 'Bulan ke-5 PPL',
      description: 'Melakukan analisis butir soal hasil kuis interaktif, rekapitulasi penilaian pamong, serta perumusan remedi siswa dengan program tindak lanjut asertif.',
      milestones: [
        'Analisis portofolio laporan kerja kelompok kasir',
        'Umpan balik dari siswa terkait kejelasan instruksi',
        'Perbandingan rerata kenaikan nilai post-test'
      ]
    },
    {
      phase: 'Refleksi',
      title: 'Evaluasi Diri bersama Pamong & Dosen',
      date: 'Bulan ke-5 (Selesai)',
      description: 'Berdiskusi kritis bersama guru pamong SMAN 3 Salatiga dan dosen pembimbing UKSW untuk mendrafting rencana perbaikan berkelanjutan karakter pendidik.',
      milestones: [
        'Refleksi komprehensif 4 aspek pedagogis utama',
        'Penyusunan portofolio draf final perangkat',
        'Penerimaan lembar nilai L7 & L8 pamong berkategori tuntas'
      ]
    }
  ];

  // Galeri Foto Dokumentasi Kegiatan
  const galleryPhotos: GalleryPhoto[] = [
    {
      id: 1,
      title: 'Praktik Mengajar Terbimbing di Kelas',
      category: 'mengajar',
      url: 'https://res.cloudinary.com/dojbebdnu/image/upload/f_auto,q_auto/20260402_133012_c1wuxt',
      description: 'Penyampaian materi logika Python menggunakan media visual kreatif untuk menjaga antusiasme kelas.'
    },
    {
      id: 2,
      title: 'Praktik Mengajar Terbimbing di Kelas',
      category: 'mengajar',
      url: 'https://res.cloudinary.com/dojbebdnu/image/upload/v1780917886/IMG_0947_dbwg6h.jpg',
      description: 'Peserta didik berkolaborasi mengurai masalah pemrograman dasar kasir dan berbagi ide alur program.'
    },
    {
      id: 3,
      title: 'Pendampingan Individu (Scaffolding)',
      category: 'mengajar',
      url: 'https://res.cloudinary.com/dojbebdnu/image/upload/v1780918305/WhatsApp_Image_2026-06-08_at_6.30.58_PM_1_ctcdvu.jpg',
      description: 'Memberikan pendampingan individu dengan strategi scaffolding untuk membantu peserta didik mengatasi kesulitan belajar sesuai kebutuhan dan kemampuan masing-masing.'
    },
    {
      id: 4,
      title: 'Pendampingan Individu (Scaffolding)',
      category: 'mengajar',
      url: 'https://res.cloudinary.com/dojbebdnu/image/upload/v1780917872/IMG_0953_wmwhpt.jpg',
      description: 'Membantu siswa secara asertif yang mengalami hambatan logika sintaksis pemrograman.'
    },
    {
      id: 5,
      title: 'Diskusi Refleksi Bersama Guru Pamong',
      category: 'diskusi',
      url: 'https://res.cloudinary.com/dojbebdnu/image/upload/v1780917883/IMG_0946_xeeewn.jpg',
      description: 'Menerima arahan positif pasca praktik mengajar untuk peningkatan kualitas siklus lanjutan.'
    },
    {
      id: 6,
      title: 'Upacara Hari Pendidikan',
      category: 'peringatan hari pendidikan',
      url: 'https://res.cloudinary.com/dojbebdnu/image/upload/v1780918306/WhatsApp_Image_2026-05-02_at_9.06.21_AM_ydu5vo.jpg',
      description: 'Partisipasi dalam Upacara Hari Pendidikan Nasional sebagai wujud komitmen dalam mendukung kemajuan pendidikan dan pembentukan karakter peserta didik.'
    }
  ];

  const filteredPhotos = galleryFilter === 'semua' 
    ? galleryPhotos 
    : galleryPhotos.filter(p => p.category === galleryFilter);

  const handleNextPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const assessmentSummary = [
    { cycle: 'Siklus 1', perangkat: 88, praktik: 85 },
    { cycle: 'Siklus 2', perangkat: 92, praktik: 90 },
    { cycle: 'Siklus 3', perangkat: 95, praktik: 94 },
  ];

  return (
    <div className="min-h-screen bg-light font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav id="app-nav" className={`fixed w-full z-50 top-0 px-6 py-4 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-extrabold text-primary tracking-tighter"
          >
            BRILIAN.<span className="text-gray-400 font-medium">HERDA</span>
          </motion.h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-gray-600">
            {navLinks.map((link) => (
              <a 
                id={`nav-link-${link.name.toLowerCase()}`}
                key={link.name} 
                href={link.href} 
                className="hover:text-primary transition-colors hover:scale-105 transform inline-block"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            id="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-primary p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              id="mobile-expanded-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass mt-4 rounded-3xl overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 text-center font-bold">
                {navLinks.map((link) => (
                  <a 
                    id={`mobile-nav-link-${link.name.toLowerCase()}`}
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg py-2 hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header id="hero-section" className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1"
          >
            <span className="inline-block px-4 py-1 bg-soft rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
              PPG Prajabatan UKSW
            </span>
            <h2 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter text-gray-900 mb-8 font-sans">
              Membangun <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pendidik Berkarakter</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-10">
              Refleksi awal Brilian Herda sebagai fondasi menjadi guru profesional yang adaptif, empatik, dan inspiratif.
            </p>
            <a 
              id="hero-explore-btn"
              href="#profil" 
              className="bg-primary text-white px-10 py-4 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-secondary/40 transition-all transform hover:-translate-y-1 inline-flex items-center gap-3 font-bold"
            >
              Mulai Eksplorasi <ChevronRight size={20} />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 1, rotate: 0 }}
            className="order-1 md:order-2 relative flex justify-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 relative z-10 animate-float">
               <img 
                 src="public\photo.JPG" 
                 alt="Brilian Herda" 
                 className="w-full h-full object-cover rounded-[50px] shadow-2xl border-8 border-white"
                 referrerPolicy="no-referrer"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717305-27a734ef1904?auto=format&fit=crop&q=80&w=1000";
                 }}
               />
               <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-soft rounded-full -z-10 mix-blend-multiply blur-xl opacity-70"></div>
               <div className="absolute -top-8 -left-8 w-40 h-40 bg-secondary/20 rounded-[40px] -z-10 blur-xl opacity-70 rotate-12"></div>
            </div>
            {/* Stats Cards */}
            <div className="absolute top-1/4 -right-4 glass p-4 rounded-2xl shadow-xl z-20 flex gap-4 items-center">
              <div className="bg-primary/10 p-2 rounded-xl text-primary"><School size={20} /></div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Penempatan PPL</p>
                <p className="text-sm font-extrabold">SMA N 3 Salatiga</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Profile Section */}
      <section id="profil" className="py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="glass-card glass-card-hover p-10 md:p-16 relative"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 text-primary rotate-12 -z-10">
              <User size={200} />
            </div>
            <h3 className="text-4xl font-extrabold mb-10 text-primary flex items-center gap-4">
              <span className="w-12 h-1.5 bg-primary/20 rounded-full"></span>
              Mengenal Brilian Herda
            </h3>
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                Halo! Saya <strong>Brilian Herda</strong>. Saya berasal dari <strong>Wonosobo</strong>, kota yang dijuluki "Negeri di Atas Awan". Keunikan daerah asal saya tidak hanya pada kesejukan alam pegunungan Dieng, tetapi juga pada karakter masyarakatnya yang memegang teguh nilai gotong royong dan ketulusan dalam menjamu tamu—seperti kabut Dieng yang menyelimuti dengan tenang namun selalu meninggalkan kesan mendalam.
              </p>
              <p>
                Perjalanan profesional saya dimulai melalui <strong>Program Pendidikan Guru (PPG) di Universitas Kristen Satya Wacana (UKSW)</strong>. Saat ini, saya mengasah kompetensi pedagogis di <strong>SMA Negeri 3 Salatiga</strong> melalui praktik mengajar PPL. 
              </p>
              <p>
                Inspirasi menjadi guru muncul dari keyakinan bahwa setiap anak memiliki "benih" potensi unik yang membutuhkan pemandu untuk tumbuh. Tujuan saya adalah menjadi guru profesional yang mampu memanusiakan hubungan, menyelaraskan teknologi, dan membentuk karakter mulia.
              </p>
              <div className="mt-16 relative">
                <Quote className="absolute -top-10 -left-6 text-soft/30" size={100} />
                <p className="text-3xl font-serif italic text-primary leading-tight pl-8 border-l-4 border-secondary">
                  "Mengajar bukanlah sekadar mentransfer ilmu, melainkan seni membentuk masa depan melalui integritas dan sentuhan hati."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bagian Utama: Artefak Pembelajaran */}
      <section id="analisis" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#FFB6C1]/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Artefak Produk Pembelajaran</h3>
            <p className="text-gray-500 font-semibold text-sm max-w-2xl mx-auto">
              Refleksi komprehensif terhadap produk pembelajaran yang telah dirancang, diterapkan, dan dievaluasi dalam 3 siklus praktik mengajar.
            </p>
          </div>
          
          {/* Card/Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {artifacts.map((artifact) => {
              const IconComp = artifact.icon;
              return (
                <motion.div 
                  id={`artifact-card-${artifact.id}`}
                  key={artifact.id}
                  onClick={() => setSelectedArtifact(artifact)}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card p-8 flex flex-col justify-between cursor-pointer border border-white hover:shadow-2xl hover:bg-white/70 transition-all duration-300 relative overflow-hidden group min-h-[300px]"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-[40px] -z-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider px-2.5 py-1 bg-soft/30 rounded-full inline-block mb-4">
                      {artifact.category}
                    </span>
                    <h4 className="text-xl font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                      {artifact.title}
                    </h4>
                    <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed mb-6">
                      {artifact.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-xs text-secondary font-bold tracking-tight">{artifact.tag}</span>
                    <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center text-primary group-hover:text-white transition-all duration-300">
                      <IconComp size={18} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Artifact Detail Modal */}
      <AnimatePresence>
        {selectedArtifact && (
          <motion.div 
            id="artifact-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div 
              id="artifact-modal-container"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="bg-white rounded-[40px] shadow-2xl w-full max-w-6xl h-[90vh] md:h-[85vh] overflow-hidden flex flex-col relative border-4 border-white"
            >
              {/* Header Modal */}
              <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-light to-white">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-3 py-1 bg-[#D6336C]/10 text-[#D6336C] text-xs font-bold rounded-full uppercase tracking-wider">
                      {selectedArtifact.category}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">{selectedArtifact.tag}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {selectedArtifact.title}
                  </h3>
                </div>
                <button 
                  id="close-modal-btn"
                  onClick={() => setSelectedArtifact(null)} 
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-rose-100 hover:text-rose-600 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Core Content Modal */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 grid lg:grid-cols-2 gap-10">
                
                {/* Left Side: Preview File */}
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Eye size={18} className="text-primary" /> Preview Artefak
                  </h4>

                  {/* PDF Viewer */}
                  {selectedArtifact.previewType === 'pdf' && (
                    <div className="bg-gray-50 rounded-3xl overflow-hidden h-[300px] md:h-[450px] border border-gray-100 shadow-inner flex flex-col relative group">
                      <iframe 
                        id="iframe-pdf-preview"
                        src={selectedArtifact.previewUrl} 
                        className="w-full h-full bg-gray-50 rounded-2xl" 
                        style={{ border: 'none' }}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-white font-medium">Lampiran Dokumen .pdf</span>
                        <a 
                          id="pdf-external-view"
                          href={selectedArtifact.previewUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="px-3 py-1.5 bg-white text-primary rounded-xl text-xs font-bold flex items-center gap-1.5"
                        >
                          Buka Tab Baru <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Image Viewer */}
                  {selectedArtifact.previewType === 'image' && (
                    <div className="rounded-3xl overflow-hidden h-[300px] md:h-[450px] border border-gray-100 shadow-md">
                      <img 
                        src={selectedArtifact.previewUrl} 
                        alt={selectedArtifact.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Video Embed */}
                  {selectedArtifact.previewType === 'video' && (
                    <div className="bg-black rounded-3xl overflow-hidden h-[300px] md:h-[450px] aspect-video border border-gray-100 shadow-lg relative">
                      <iframe
                        id="youtube-video-preview"
                        src={selectedArtifact.previewUrl}
                        title="Embedded Video Preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-2xl border-0"
                      />
                    </div>
                  )}

                  {/* Download Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <a 
                      id="btn-download-rpp"
                      href={selectedArtifact.downloadRpp} 
                      download 
                      className="bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all text-center text-sm"
                    >
                      <Download size={16} /> Open File
                    </a>
                    <a 
                      id="btn-download-penilaian"
                      href={selectedArtifact.downloadPenilaian} 
                      download 
                      className="bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all text-center text-sm"
                    >
                      <Download size={16} /> Download File
                    </a>
                  </div>
                </div>

                {/* Right Side: Analytical Deep Dive */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Ikhtisar</h4>
                    <p className="text-gray-700 leading-relaxed text-base italic pl-4 border-l-4 border-primary">
                      {selectedArtifact.description}
                    </p>
                  </div>

                  {/* Quick Profile context */}
                  <div className="grid grid-cols-2 gap-6 p-5 bg-gradient-to-br from-light to-white rounded-3xl border border-soft/20">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-primary/80 mb-1 tracking-wider">Konteks Kelas</p>
                      <p className="text-sm font-semibold text-gray-800 leading-snug">{selectedArtifact.konteks}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-secondary/80 mb-1 tracking-wider">Tujuan Spesifik</p>
                      <p className="text-sm font-semibold text-gray-800 leading-snug">{selectedArtifact.tujuan}</p>
                    </div>
                  </div>

                  {/* Critical reflection aspects */}
                  <div className="space-y-6">
                    <h5 className="text-sm font-bold uppercase text-gray-900 tracking-wider">Refleksi Pedagogis</h5>
                    
                    <div className="space-y-4">
                      {/* Kelebihan */}
                      <div className="p-5 bg-green-50/50 rounded-2xl border border-green-100 flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-green-800 uppercase tracking-wide mb-1">Kelebihan Penerapan</p>
                          <p className="text-gray-700 text-sm leading-relaxed">{selectedArtifact.kelebihan}</p>
                        </div>
                      </div>

                      {/* Kekurangan */}
                      <div className="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                          <AlertCircle size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Kekurangan / Tantangan</p>
                          <p className="text-gray-700 text-sm leading-relaxed">{selectedArtifact.kekurangan}</p>
                        </div>
                      </div>

                      {/* Analisis Teori */}
                      <div className="p-5 bg-pink-50/50 rounded-2xl border border-soft/30 flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-soft/40 flex items-center justify-center text-primary shrink-0">
                          <BookOpen size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Kajian Teoretis (Vygotsky / Piaget)</p>
                          <p className="text-gray-700 text-sm leading-relaxed">{selectedArtifact.analisisTeori}</p>
                        </div>
                      </div>

                      {/* Refleksi Tindak Lanjut */}
                      <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 shrink-0">
                          <RefreshCw size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-indigo-800 uppercase tracking-wide mb-1">Refleksi Tindak Lanjut & Adaptasi</p>
                          <p className="text-gray-700 text-sm leading-relaxed">{selectedArtifact.refleksi}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 px-6 bg-white/40 border-y border-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Timeline Pengembangan Diri</h3>
            <p className="text-gray-500 font-semibold text-sm max-w-xl mx-auto">
              Tahapan progresif yang kami jalani sebagai mahasiswa PPG Prajabatan untuk mengintegrasikan teori perkuliahan ke dalam praktik nyata.
            </p>
          </div>

          {/* Desktop Stepper */}
          <div className="hidden lg:flex justify-between items-center relative mb-16 px-10">
            <div className="absolute left-16 right-16 h-1 bg-gray-200 top-1/2 -translate-y-1/2 -z-10" />
            {timelinePhases.map((phase, idx) => {
              const isActive = idx === activeTimelinePhase;
              return (
                <button
                  id={`timeline-step-${idx}`}
                  key={idx}
                  onClick={() => setActiveTimelinePhase(idx)}
                  className="flex flex-col items-center cursor-pointer group focus:outline-none"
                >
                  <motion.div 
                    animate={{ 
                      scale: isActive ? 1.25 : 1,
                      backgroundColor: isActive ? '#D6336C' : '#FFFFFF',
                      borderColor: isActive ? '#FFB6C1' : '#E2E8F0'
                    }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-4 text-sm font-extrabold shadow-md transition-all z-10`}
                  >
                    <span className={isActive ? 'text-white' : 'text-gray-600 group-hover:text-primary transition-colors'}>
                      {idx + 1}
                    </span>
                  </motion.div>
                  <span className={`text-xs uppercase tracking-widest font-bold mt-4 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {phase.phase}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Phase Detail Frame */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTimelinePhase}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="glass-card p-10 md:p-14 border border-white shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-primary rotate-12 -z-10">
                  <Calendar size={180} />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-gray-100 gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-bold text-[#FF4081] px-3 py-1 bg-[#FF4081]/15 rounded-full inline-block mb-3">
                      Fase {activeTimelinePhase + 1} &bull; {timelinePhases[activeTimelinePhase].phase}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                      {timelinePhases[activeTimelinePhase].title}
                    </h4>
                  </div>
                  <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-2xl text-xs font-bold shrink-0 flex items-center gap-2">
                    <Calendar size={14} className="text-primary" /> {timelinePhases[activeTimelinePhase].date}
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mb-10">
                  {timelinePhases[activeTimelinePhase].description}
                </p>

                <div className="space-y-4">
                  <h5 className="text-xs font-bold uppercase text-gray-400 tracking-wider">Capaian & Milestones</h5>
                  <div className="grid md:grid-cols-3 gap-6">
                    {timelinePhases[activeTimelinePhase].milestones.map((milestone, mIdx) => (
                      <div key={mIdx} className="p-5 bg-white/50 rounded-2xl border border-gray-100 flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#D6336C] shrink-0 mt-1" />
                        <span className="text-sm font-semibold text-gray-800 leading-snug">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Navigation controls for timeline */}
            <div className="flex justify-between items-center mt-6 lg:hidden">
              <button 
                id="prev-timeline-mobile"
                onClick={() => setActiveTimelinePhase(prev => Math.max(0, prev - 1))}
                disabled={activeTimelinePhase === 0}
                className="px-4 py-2 border border-gray-200 text-xs font-bold uppercase rounded-xl flex items-center gap-2 bg-white disabled:opacity-50"
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <button 
                id="next-timeline-mobile"
                onClick={() => setActiveTimelinePhase(prev => Math.min(timelinePhases.length - 1, prev + 1))}
                disabled={activeTimelinePhase === timelinePhases.length - 1}
                className="px-4 py-2 bg-[#D6336C] text-white text-xs font-bold uppercase rounded-xl flex items-center gap-2 disabled:opacity-50"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Dokumentasi */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Galeri Dokumentasi</h3>
            <p className="text-gray-500 font-semibold text-sm max-w-xl mx-auto">
              Dokumentasi visual rangkaian kegiatan praktik lapangan di ruang kelas, rapat diskusi refleksi, dan interaksi pembelajaran asertif.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['semua', 'mengajar', 'diskusi'].map((category) => (
              <button
                id={`gallery-filter-${category.replace(' ', '-')}`}
                key={category}
                onClick={() => setGalleryFilter(category)}
                className={`px-6 py-2.5 rounded-2xl text-xs uppercase tracking-wider font-extrabold transition-all duration-300 ${
                  galleryFilter === category 
                    ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Interactive Sliding Grid with Lightbox Action */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, pIdx) => (
              <motion.div
                id={`gallery-item-${photo.id}`}
                key={photo.id}
                layout
                whileHover={{ y: -8 }}
                onClick={() => setActiveLightboxIndex(pIdx)}
                className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 group flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ImageIcon size={20} />
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-extrabold text-white bg-primary/80 px-3 py-1 bg-opacity-80 backdrop-blur-md rounded-lg">
                    {photo.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="text-lg font-extrabold text-gray-900 group-hover:text-primary transition-colors leading-snug mb-2">
                      {photo.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {photo.description}
                    </p>
                  </div>
                  <span className="text-xs text-primary font-bold inline-flex items-center gap-1.5 mt-auto">
                    Lihat Dokumentasi <ChevronRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal / Carousel for Galeri */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            id="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              id="close-lightbox-btn"
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer z-50 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Left */}
            <button
              id="prev-lightbox-btn"
              onClick={handlePrevPhoto}
              className="absolute left-4 md:left-8 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer z-40 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Middle Container for Carousel */}
            <div className="w-full max-w-5xl max-h-[85vh] flex flex-col justify-center items-center gap-6">
              <motion.div
                key={activeLightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative bg-black rounded-3xl overflow-hidden shadow-2xl max-w-full max-h-[70vh] flex items-center justify-center"
              >
                <img
                  src={filteredPhotos[activeLightboxIndex].url}
                  alt={filteredPhotos[activeLightboxIndex].title}
                  className="max-w-full max-h-[70vh] object-contain block mx-auto rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Text Area */}
              <div className="text-center text-white max-w-2xl px-6">
                <span className="inline-block px-3 py-1 bg-primary/40 rounded-full text-[10px] uppercase font-bold tracking-widest text-pink-200 mb-2">
                  {filteredPhotos[activeLightboxIndex].category}
                </span>
                <h4 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  {filteredPhotos[activeLightboxIndex].title}
                </h4>
                <p className="text-sm text-gray-300 font-medium leading-relaxed mt-1">
                  {filteredPhotos[activeLightboxIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Right */}
            <button
              id="next-lightbox-btn"
              onClick={handleNextPhoto}
              className="absolute right-4 md:right-8 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer z-40 transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assessment Section */}
      <section id="penilaian" className="py-24 px-6 bg-white/20 border-t border-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h3 className="text-4xl font-extrabold mb-2 underline decoration-soft decoration-8 underline-offset-4">Instrumen Penilaian</h3>
              <p className="text-gray-500 font-medium text-sm">Umpan balik komparatif dari Guru Pamong Siklus 1 - 3</p>
            </div>
            <div className="bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2">
              <FileText size={16} /> Lampiran Resmi PPL
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* PDF Block 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold italic">L7</div>
                <h4 className="text-xl font-bold text-gray-900">Penyusunan Perangkat Pembelajaran</h4>
              </div>
              <div className="bg-white rounded-3xl p-4 shadow-xl h-[600px] border-4 border-white overflow-hidden">
                <iframe 
                  id="iframe-pdf-lampiran7"
                  src="/pdf/lampiran7.pdf" 
                  className="w-full h-full rounded-2xl bg-gray-50"
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            {/* PDF Block 2 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold italic">L8</div>
                <h4 className="text-xl font-bold text-gray-900">Praktik Mengajar</h4>
              </div>
              <div className="bg-white rounded-3xl p-4 shadow-xl h-[600px] border-4 border-white overflow-hidden">
                <iframe 
                  id="iframe-pdf-lampiran8"
                  src="/pdf/Brilian-Herda-S.Kom.pdf" 
                  className="w-full h-full rounded-2xl bg-gray-50"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>

          {/* Responsive Table / Cards */}
          <div className="glass-card p-6 md:p-12 border border-white">
            <h4 className="text-2xl font-extrabold mb-10 text-center text-gray-900 flex items-center justify-center gap-2">
              <Award size={24} className="text-primary animate-pulse" /> Ringkasan Evaluasi Pamong
            </h4>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-3xl border border-gray-100 shadow-md">
              <table className="w-full text-left bg-white">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-6">Siklus</th>
                    <th className="p-6">Rancangan Perangkat (L7)</th>
                    <th className="p-6">Praktik Mengajar (L8)</th>
                    <th className="p-6">Status Keberhasilan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {assessmentSummary.map((s, i) => (
                    <tr key={i} className="hover:bg-light/40 transition-colors">
                      <td className="p-6 font-extrabold text-primary">{s.cycle}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-extrabold text-gray-800">{s.perangkat}</span>
                          <div className="w-32 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${s.perangkat}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-extrabold text-gray-800">{s.praktik}</span>
                          <div className="w-32 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary rounded-full" style={{ width: `${s.praktik}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                          <CheckCircle2 size={12} /> Tuntas / Sangat Baik
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {assessmentSummary.map((s, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border-l-8 border-primary shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <p className="text-xl font-extrabold text-primary">{s.cycle}</p>
                    <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md uppercase tracking-wider">TUNTAS</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm font-bold">
                    <div className="p-4 bg-light/50 rounded-xl border border-soft/20">
                      <p className="text-gray-400 text-[10px] uppercase mb-1 tracking-wider">Perangkat (L7)</p>
                      <p className="text-3xl font-extrabold text-gray-900">{s.perangkat}</p>
                    </div>
                    <div className="p-4 bg-light/50 rounded-xl border border-soft/20">
                      <p className="text-gray-400 text-[10px] uppercase mb-1 tracking-wider">Praktik (L8)</p>
                      <p className="text-3xl font-extrabold text-secondary">{s.praktik}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Model / Mission */}
      <section id="misi" className="py-24 px-6 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[50px] p-8 md:p-20 text-white relative overflow-hidden shadow-3xl">
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Model Guru <br />Yang Dituju</h3>
                   <div className="space-y-10">
                      <div className="group">
                        <h5 className="text-xl font-bold mb-4 flex items-center gap-3">
                          <span className="w-1.5 h-6 bg-soft rounded-full"></span> Misi Utama
                        </h5>
                        <ul className="space-y-4 text-pink-100">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-soft shrink-0 mt-1" size={18} />
                            Mewujudkan lingkungan belajar yang Merdeka, inklusif, dan adaptif terhadap kemajuan zaman.
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-soft shrink-0 mt-1" size={18} />
                            Mengintegrasikan budaya Tanah Air ke dalam pembelajaran yang global dan bermakna.
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-8 bg-white/10 rounded-3xl border border-white/20">
                         <div className="flex gap-4 items-center mb-6">
                            <div className="bg-white/20 p-3 rounded-2xl"><GraduationCap size={24} /></div>
                            <h5 className="text-xl font-bold">Visi Profesional</h5>
                         </div>
                         <p className="text-pink-100 text-lg sm:text-2xl font-serif italic leading-relaxed">
                           "Menjadi role model yang tidak hanya menguasai konten, tetapi juga mahir dalam menyentuh sisi kemanusiaan siswa."
                         </p>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {['Inovatif', 'Reflektif', 'Kolaboratif', 'Berpihak pada Murid', 'Literasi Digital', 'Integritas'].map((tag) => (
                    <div key={tag} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-3xl text-center hover:bg-white hover:text-primary transition-all duration-300 font-extrabold text-sm uppercase tracking-wider">
                      {tag}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* E-Portfolio 2: Prinsip / Nilai Guru & Filosofi Mengajar */}
      <section id="eportfolio2" className="py-24 px-6 bg-gradient-to-b from-transparent to-[#FFB6C1]/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-3">
              E-Portfolio Bagian 2
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
              Prinsip & Nilai Filosofi Guru
            </h3>
            <p className="text-gray-500 font-semibold text-sm max-w-2xl mx-auto leading-relaxed">
              Formulasi nilai, filosofi pengajaran personal, dan refleksi akhir komprehensif dari seluruh rangkaian tahapan PPL Terbimbing.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Column 1: Refleksi Akhir PPL Terbimbing (lg:col-span-6) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm shadow-primary/5">
                  <RefreshCw size={24} className="animate-spin-slow" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 leading-tight">I. Refleksi Akhir PPL Terbimbing</h4>
                  <p className="text-xs text-secondary font-bold uppercase tracking-widest">Analisis Dan Evaluasi Pengalaman Lapangan</p>
                </div>
              </div>

              {/* Sub-Card 1: Apa yang dipelajari */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:bg-white/95 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#D6336C] shrink-0 mt-0.5">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h5 className="text-[17px] font-black text-gray-900 mb-3 leading-snug">
                      Apa yang telah dipelajari sebagai peserta PPG calon guru selama PPL Terbimbing dari awal hingga akhir?
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Selama mengarungi tahapan PPL Terbimbing dari awal hingga akhir, saya memperoleh proses belajar yang utuh dan transformatif. Pada tahap awal, saya belajar melakukan <strong className="text-primary font-bold">observasi mendalam terhadap karakteristik peserta didik</strong> kelas X Fase E mencakup gaya belajar, latar belakang sosiokultural, dan <em>entry behavior</em> kognitif secara asertif. Pada fase asistensi, saya belajar berkolaborasi menyelaraskan materi bersama guru pamong. Dan selama <strong className="text-primary font-bold">praktik mengajar terbimbing (3 siklus penuh)</strong>, saya belajar mendesain, mengujicobakan, dan mengevaluasi modul ajar berbasis <em>Problem-Based Learning</em> (PBL). Saya menyadari pendidik profesional tidak hanya mahir menuangkan teori sains ke papan tulis, melainkan cakap merawat integrasi <em>Pedagogical Content Knowledge</em> (PCK) demi mewujudkan pembelajaran berpihak pada hakikat kemerdekaan belajar murid.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-Card 2: Pengalaman Menantang & Solusi */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:bg-white/95 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Target size={20} />
                  </div>
                  <div>
                    <h5 className="text-[17px] font-black text-gray-900 mb-3 leading-snug">
                      Apakah terdapat pengalaman yang menantang dan bagaimana solusi nyata dari permasalahan tersebut?
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Tantangan utama yang nyata adalah <strong className="text-primary font-bold">disparitas literasi teknologi dan tingkat kecepatan kognitif yang sangat heterogen</strong> antar murid di laboratorium komputer kelas X. Ada siswa yang luar biasa tangkas menguasai materi pemrograman dasar Python, sementara beberapa siswa lainnya membutuhkan waktu ekstra hanya untuk memahami alur penulisan sintaks logika. Solusi yang saya lakukan adalah mengimplementasikan <strong className="text-primary font-bold">Differentiated Instruction (Pembelajaran Terdiferensiasi)</strong>. Saya merancang <em>modular scaffolding sheets</em> (lembar penuntun gradasi) dan menerapkan metode <strong className="text-primary font-bold">tutor sebaya (peer-tutoring)</strong> di dalam kelompok. Solusi kolaboratif ini terbukti andal menjaga kohesivitas belajar tanpa membiarkan siswa mana pun tertinggal dalam keputusasaan kognitif.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-Card 3: Umpan Balik untuk PPL Mandiri */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:bg-white/95 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#D6336C]" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#D6336C] shrink-0 mt-0.5">
                    <Award size={20} />
                  </div>
                  <div>
                    <h5 className="text-[17px] font-black text-gray-900 mb-3 leading-snug">
                      Apa umpan balik atau saran konstruktif diskusi refleksi akhir sebagai perbaikan ke PPL Mandiri?
                    </h5>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Guru Pamong dan Dosen Pembimbing Lapangan memberikan apresiasi atas fleksibilitas kepemimpinan pembelajaran saya. Sebagai pijakan peningkatan performa menghadapi <strong className="text-primary font-bold">PPL Mandiri</strong>, saya mengantongi saran konstruktif yang konkret:
                    </p>
                    <ul className="space-y-3.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span><strong>Optimasi Alokasi Waktu (Pacing):</strong> Mempertajam distribusi durasi menit pada tahapan sintaks PBL agar eksplorasi mandiri bermakna memiliki porsi waktu yang longgar dan proporsional.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span><strong>Inovasi Remedial Instan:</strong> Merakit ragam kuis formatif asinkron yang ramah akses di gawai cerdas siswa guna membantu melampaui Kriteria Ketercapaian Tujuan Pembelajaran (KKTP).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span><strong>Classroom Presence yang Asertif:</strong> Meningkatkan kontrol intonasi suara dan kewibawaan gestur ketika menengahi riuhnya diskusi interaktif dan gamifikasi kelompok kelas.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Filosofi Mengajar (lg:col-span-6) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0 shadow-sm shadow-secondary/5">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 leading-tight">II. Filosofi Mengajar</h4>
                  <p className="text-xs text-secondary font-bold uppercase tracking-widest">Prinsip, Keyakinan, Dan Ideologi Pendidikan</p>
                </div>
              </div>

              {/* Detailed Editorial Reading Card */}
              <div className="bg-white rounded-[36px] p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-primary pointer-events-none">
                  <Quote size={180} />
                </div>

                <div className="space-y-8">
                  {/* Paragraph 1 */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-widest bg-[#D6336C]/10 text-primary font-black px-3 py-1 rounded-md">
                      Pilar 1: Filosofi Ki Hajar Dewantara
                    </span>
                    <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed font-normal">
                      <span className="text-4xl font-black text-[#D6336C] float-left mr-3 mt-1.5 font-serif leading-[0.80]">F</span>
                      ilosofi mengajar saya berakar kuat pada keyakinan mendasar bahwa mengajar adalah sebuah proses <strong className="text-primary">"menuntun" segala kekuatan kodrat</strong> yang ada pada diri anak-anak, agar mereka dapat mencapai keselamatan dan kebahagiaan setinggi-tingginya baik sebagai manusia individu maupun anggota masyarakat. Meneladani pokok wejangan pemisalan sosiokultural <strong className="text-gray-900 font-extrabold">Ki Hajar Dewantara</strong>, saya menempatkan guru seumpama seorang pesemai benih atau juru berkebun yang tekun. Murid-murid ibarat biji tanaman beraneka rupa dan bibit unggul yang khas. Sesuai dengan pembawaan aslinya, adalah kewajiban mutlak saya memelihara, mencukupi gizi tanah, mengaliri air, dan melindunginya dari parasit tanpa berupaya merubah hakikat silsilah jagung menjadi padi. Semboyan luhur <em>"Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani"</em> senantiasa mengharuskan saya menjadi mercusuar moralitas luhur di garda depan, menjadi penggugah inisiatif kolaborasi di lini tengah, serta menyuntikkan dorongan kemerdekaan kognitif mandiri dari lini belakang.
                    </p>
                  </div>

                  {/* Paragraph 2 */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-widest bg-pink-100 text-secondary font-black px-3 py-1 rounded-md">
                      Pilar 2: Pembelajaran Sosio-Konstruktivis
                    </span>
                    <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed font-normal">
                      Secara teoretis-pedagogis, saya sepenuhnya mengintegrasikan pemikiran aliran <strong className="text-gray-900 font-extrabold">Konstruktivisme Sosial milik Lev Vygotsky</strong> ke dalam denyut nadi pengajaran sehari-hari. Saya meyakini bahwa belajar bermakna (<em>meaningful learning</em>) bukanlah akumulasi penerimaan secara statis, melainkan proses aktif mengonstruksi pemahaman baru yang melintasi proses sosial-interoperabilitas kelas. Guru bergeser peran dari pemegang kebenaran tunggal menjadi fasilitator andal yang mendesain stimulasi terarah secara berkala. Dalam materi penguasaan teknologi digital, prinsip ini saya terapkan dengan memberikan tantangan penyelesaian penugasan riil (<em>Problem-Based Learning</em>) di mana saya bertindak menyediakan struktur <strong className="text-primary font-bold">scaffolding</strong> kognitif yang dinamis di dalam <em>Zone of Proximal Development</em> (ZPD) siswa. Seiring dengan kemajuan tingkat kecakapan bernalar kritis siswa, bantuan instruksional tersebut dipangkas agar mereka tegak mandiri di atas keyakinan bernalarnya sendiri.
                    </p>
                  </div>

                  {/* Paragraph 3 */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-widest bg-gray-100 text-gray-700 font-black px-3 py-1 rounded-md">
                      Pilar 3: Humanisasi Carl Rogers
                    </span>
                    <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed font-normal">
                      Pada muaranya, integritas profesionalitas saya ditopang oleh <strong className="text-gray-900 font-extrabold">pendekatan psikologi humanis milik Carl Rogers</strong>. Pembelajaran bermakna di kelas mustahil tercapai apabila atmosfer pengajaran dilingkupi rasa cemas, kecurigaan belajar, atau ketakutan intelektual terhadap kegagalan. Atas dasar itulah, saya berpandangan bahwa proses menajamkan rasio asah kognitif harus diimbangi oleh kelembutan asih emosional yang tulus. Saya mendedikasikan diri menyajikan kultur kelas yang bersandar pada <strong className="text-primary font-bold">penerimaan positif tanpa syarat</strong> (<em>unconditional positive regard</em>) dan penangkapan empati yang peka. Ketika siswa didudukkan dengan mulia serta diapresiasi segenap kepribadian aslinya secara utuh, barulah pertahanan afektif mereka terbuka lebar untuk mengeksplorasi potensi terbaiknya menuju tumbuh kembang sejati sebagai profil Pelajar Pancasila yang membawa sumbangsih unggul bagi nusa dan bangsa.
                    </p>
                  </div>
                </div>

                {/* Conceptual Literature Highlights */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                  <span className="text-[11px] font-extrabold bg-[#D6336C]/10 text-[#D6336C] px-3.5 py-1.5 rounded-xl border border-[#D6336C]/10">
                    Menuntun Kodrat (Ki Hajar Dewantara)
                  </span>
                  <span className="text-[11px] font-extrabold bg-pink-100 text-secondary px-3.5 py-1.5 rounded-xl border border-pink-200">
                    Socio-Cultural ZPD (Lev Vygotsky)
                  </span>
                  <span className="text-[11px] font-extrabold bg-gray-50 text-gray-700 px-3.5 py-1.5 rounded-xl border border-gray-100">
                    Unconditional Positive Regard (Carl Rogers)
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="app-footer" className="py-20 px-6 glass mt-20 border-t-0 rounded-t-[60px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-extrabold text-primary mb-2">BRILIAN HERDA</h4>
            <p className="text-gray-500 font-medium tracking-wide italic">E-Portfolio Brilian Herda &bull; PPG Prajabatan UKSW</p>
          </div>
          <div className="flex gap-4">
             {navLinks.map(l => <a id={`footer-nav-${l.name.toLowerCase()}`} key={l.name} href={l.href} className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">{l.name}</a>)}
          </div>
          <p className="text-xs text-gray-400 font-medium">
            &copy; 2026. Salatiga, Jawa Tengah.
          </p>
        </div>
      </footer>
    </div>
  );
}
