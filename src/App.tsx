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
  School,
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Profil', href: '#profil' },
    { name: 'Artefak', href: '#analisis' },
    { name: 'Penilaian', href: '#penilaian' },
    { name: 'Misi', href: '#misi' },
  ];

  const analysisItems = [
    {
      title: 'Kendala Penyusunan',
      desc: 'Proses penyusunan perangkat pembelajaran diwarnai beberapa tantangan yaitu, keterbatasan waktu untuk melakukan analisis kebutuhan yang mendalam terhadap karakteristik peserta didik, kesulitan menyelaraskan Capaian Pembelajaran (CP) dengan indikator yang terukur, serta penyesuaian modul ajar dengan kondisi riil kelas yang heterogen. Selain itu, mengintegrasikan media digital ke dalam pembelajaran tatap muka memerlukan kurasi yang cermat agar tidak mengganggu alur kegiatan.',
      icon: AlertCircle,
      color: 'bg-primary'
    },
    {
      title: 'Teori Pedagogi',
      desc: 'Perangkat pembelajaran disusun berlandaskan Teori Konstruktivisme (Vygotsky & Piaget) yang menempatkan peserta didik sebagai pembangun pengetahuan aktif. Model pembelajaran Problem-Based Learning (PBL) dan Cooperative Learning dipilih untuk menumbuhkan keterampilan berpikir kritis dan kolaborasi. Pendekatan Differentiated Instruction diterapkan guna mengakomodasi gaya belajar beragam, serta prinsip Assessment for Learning dalam sistem evaluasi formatif berkelanjutan.',
      icon: BookOpen,
      color: 'bg-secondary'
    },
    {
      title: 'Faktor Keberhasilan',
      desc: 'Keberhasilan implementasi didukung oleh beberapa faktor kunci: kolaborasi aktif bersama guru pamong dalam refleksi pra dan pasca mengajar, penggunaan apersepsi kontekstual yang menghubungkan materi dengan kehidupan nyata peserta didik, serta penerapan umpan balik segera (immediate feedback) yang mendorong perbaikan berkelanjutan. Keterlibatan peserta didik yang tinggi dalam diskusi kelompok juga menjadi penanda positif keberhasilan pembelajaran.',
      icon: Target,
      color: 'bg-primary'
    },
    {
      title: 'Adaptasi Situasi',
      desc: 'Beberapa komponen adaptif yang memungkinkan penyesuaian: media dan sumber belajar dapat dimodifikasi sesuai ketersediaan fasilitas (digital/non-digital); alokasi waktu tiap tahap dapat dikompres atau diperluas sesuai dinamika kelas; teknik pengelompokan dapat diubah dari heterogen ke homogen berdasarkan kemampuan; dan instrumen penilaian dapat disederhanakan atau diperkaya sesuai tingkat kognitif peserta didik di kelas yang berbeda.',
      icon: RefreshCw,
      color: 'bg-secondary'
    }
  ];

  const assessmentSummary = [
    { cycle: 'Siklus 1', perangkat: 88, praktik: 85 },
    { cycle: 'Siklus 2', perangkat: 92, praktik: 90 },
    { cycle: 'Siklus 3', perangkat: 95, praktik: 94 },
  ];

  return (
    <div className="min-h-screen bg-light font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 top-0 px-6 py-4 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent'}`}>
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
              <a key={link.name} href={link.href} className="hover:text-primary transition-colors hover:scale-105 transform inline-block">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass mt-4 rounded-3xl overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4 text-center font-bold">
                {navLinks.map((link) => (
                  <a 
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
      <header className="relative pt-40 pb-20 px-6 overflow-hidden">
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
            <h2 className="text-6xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter text-gray-900 mb-8">
              Membangun <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Pendidik Berkarakter</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-10">
              Refleksi awal Brilian Herda sebagai fondasi menjadi guru profesional yang adaptif, empatik, dan inspiratif.
            </p>
            <a href="#profil" className="bg-primary text-white px-10 py-4 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-secondary/40 transition-all transform hover:-translate-y-1 inline-flex items-center gap-3 font-bold">
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
                 src="public\pdf\photo.JPG" 
                 alt="Brilian Herda" 
                 className="w-full h-full object-cover rounded-[50px] shadow-2xl border-8 border-white"
                 referrerPolicy="no-referrer"
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

      {/* Artifact Analysis */}
      <section id="analisis" className="py-24 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Analisis Artefak Produk Pembelajaran</h3>
            <p className="text-gray-500 tracking-widest font-semibold text-sm">Refleksi mendalam terhadap proses penyusunan dan penerapan perangkat pembelajaran selama masa PPL.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {analysisItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card glass-card-hover p-10 flex flex-col items-center text-center group"
              >
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/10`}>
                  <item.icon size={30} />
                </div>
                <h4 className="text-xl font-extrabold mb-4 text-primary">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section id="penilaian" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h3 className="text-4xl font-extrabold mb-2 underline decoration-soft decoration-8 underline-offset-4">Instrumen Penilaian</h3>
              <p className="text-gray-500 font-medium">Umpan balik dari Guru Pamong Siklus 1 - 3</p>
            </div>
            <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
              <FileText size={16} /> Lampiran Resmi PPL
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* PDF Block 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold italic">L7</div>
                <h4 className="text-xl font-bold">Penyusunan Perangkat Pembelajaran</h4>
              </div>
              <div className="bg-white rounded-3xl p-4 shadow-xl h-[600px] border-4 border-white">
                <iframe 
                  src="/pdf/lampiran7.pdf" 
                  className="w-full h-full rounded-2xl bg-gray-50 flex items-center justify-center"
                  style={{ border: 'none' }}
                >
                  <div className="text-center p-10">
                    <AlertCircle className="mx-auto mb-4 text-gray-400" size={48} />
                    <p className="text-gray-500">File PDF Lampiran 7 tidak ditemukan di <code>/public/pdf/lampiran7.pdf</code></p>
                  </div>
                </iframe>
              </div>
            </div>

            {/* PDF Block 2 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold italic">L8</div>
                <h4 className="text-xl font-bold">Praktik Mengajar</h4>
              </div>
              <div className="bg-white rounded-3xl p-4 shadow-xl h-[600px] border-4 border-white">
                <iframe 
                  src="/pdf/lampiran8.pdf" 
                  className="w-full h-full rounded-2xl bg-gray-50"
                  style={{ border: 'none' }}
                >
                  <div className="text-center p-10">
                    <AlertCircle className="mx-auto mb-4 text-gray-400" size={48} />
                    <p className="text-gray-500">File PDF Lampiran 8 tidak ditemukan di <code>/public/pdf/lampiran8.pdf</code></p>
                  </div>
                </iframe>
              </div>
            </div>
          </div>

          {/* Responsive Table / Cards */}
          <div className="glass-card p-4 md:p-10">
            <h4 className="text-2xl font-extrabold mb-10 text-center">Ringkasan Evaluasi Pamong</h4>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-3xl border border-white/40">
              <table className="w-full text-left">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-6">Siklus</th>
                    <th className="p-6">Rancangan Perangkat</th>
                    <th className="p-6">Praktik Mengajar</th>
                    <th className="p-6">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/40">
                  {assessmentSummary.map((s, i) => (
                    <tr key={i} className="hover:bg-white/40 transition-colors">
                      <td className="p-6 font-extrabold text-primary">{s.cycle}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold">{s.perangkat}</span>
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${s.perangkat}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold">{s.praktik}</span>
                          <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary" style={{ width: `${s.praktik}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                          <CheckCircle2 size={12} /> Tuntas
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
                <div key={i} className="bg-white/60 p-6 rounded-2xl border-l-8 border-primary shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xl font-extrabold text-primary">{s.cycle}</p>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md">STATUS: TUNTAS</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm font-bold">
                    <div className="p-3 bg-white/40 rounded-xl">
                      <p className="text-gray-400 text-[10px] uppercase mb-1">Perangkat</p>
                      <p className="text-2xl">{s.perangkat}</p>
                    </div>
                    <div className="p-3 bg-white/40 rounded-xl">
                      <p className="text-gray-400 text-[10px] uppercase mb-1">Praktik</p>
                      <p className="text-2xl text-secondary">{s.praktik}</p>
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
                         <p className="text-pink-100 text-lg sm:text-2xl font-serif italic">
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

      {/* Footer */}
      <footer className="py-20 px-6 glass mt-20 border-t-0 rounded-t-[60px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-extrabold text-primary mb-2">BRILIAN HERDA</h4>
            <p className="text-gray-500 font-medium tracking-wide italic">E-Portfolio Brilian Herda &bull; PPG Prajabatan UKSW</p>
          </div>
          <div className="flex gap-4">
             {navLinks.map(l => <a key={l.name} href={l.href} className="text-xs font-bold text-gray-400 hover:text-primary transition-colors">{l.name}</a>)}
          </div>
          <p className="text-xs text-gray-400 font-medium">
            &copy; 2026. Salatiga, Jawa Tengah.
          </p>
        </div>
      </footer>
    </div>
  );
}
