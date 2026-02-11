import React, { useState, useRef } from "react";
import { Zap, ShieldCheck, Headphones, Tag } from "lucide-react";

const Features = () => {
  const dataFeatures = [
    { title: "Internet Cepat", desc: "Koneksi internet berkecepatan tinggi dengan teknologi fiber optik terbaru.", icon: <Zap className="text-blue-600 group-hover:text-white transition-colors" size={24} /> },
    { title: "Legal & Terpercaya", desc: "Didukung oleh izin resmi dari Dirjen PPI dan memiliki NIB resmi.", icon: <ShieldCheck className="text-blue-600 group-hover:text-white transition-colors" size={24} /> },
    { title: "Harga Terbaik", desc: "Paket internet kompetitif dengan berbagai pilihan sesuai kebutuhan bisnis Anda.", icon: <Tag className="text-blue-600 group-hover:text-white transition-colors" size={24} /> },
    { title: "Support 24/7", desc: "Tim support profesional siap membantu menangani kendala Anda kapan saja.", icon: <Headphones className="text-blue-600 group-hover:text-white transition-colors" size={24} /> },
  ];

  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    /* font-sans (Inter) untuk keterbacaan teks panjang yang luar biasa */
    <section id="keunggulan" className="relative h-auto w-full flex items-center justify-center bg-[#f0f9ff] overflow-hidden py-16 px-6 sm:px-8 md:px-12 font-sans">
      
      {/* SMOOTH EDGE SEAMLESS */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="container mx-auto max-w-7xl relative z-20">
        
        {/* JUDUL - Montserrat untuk kesan geometris dan kokoh */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[900] text-[#0f172a] mb-4 tracking-tighter leading-tight font-['Montserrat']">
            Mengapa Memilih <br />
            <span className="text-blue-600 italic">Celebes Media Jaringan?</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* BAGIAN VIDEO INTERAKTIF */}
          <div className="w-full lg:w-[55%] relative rounded-[40px] overflow-hidden shadow-2xl border-[6px] border-white aspect-video flex items-center justify-center bg-slate-900 group/video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onClick={handlePlayPause}
              onPause={() => setIsPaused(true)}
              onPlay={() => setIsPaused(false)}
              controls={false}
              preload="auto"
              src="/images/clients/BNET-PROFILE.mp4"
            />

            {/* Tombol Play/Pause */}
            <button
              onClick={handlePlayPause}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex items-center justify-center w-24 h-24 rounded-full
                bg-blue-600 bg-opacity-90 text-white shadow-2xl
                transition-all duration-300 transform
                ${isPaused ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
                hover:bg-blue-700 hover:scale-110
              `}
            >
              <svg className="w-12 h-12 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Overlay teks saat pause - Font Inter Medium */}
            {isPaused && (
              <div className="absolute inset-x-0 bottom-8 mx-auto bg-slate-900/80 backdrop-blur-md rounded-2xl px-8 py-5 max-w-[85%] text-white shadow-2xl border border-white/10 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
                <span className="w-1.5 h-10 bg-blue-500 rounded-full"></span>
                <div className="text-left">
                  <p className="font-bold text-lg md:text-xl tracking-tight">Profil Perusahaan BNet</p>
                  <p className="text-sm opacity-70">Tekan tombol putar untuk mengenal kami lebih jauh</p>
                </div>
              </div>
            )}

            <div className="absolute top-6 left-6 bg-blue-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Official Profile
            </div>
          </div>

          {/* LIST FITUR VERTIKAL - Optimalisasi Keterbacaan */}
          <div className="w-full lg:w-[45%] flex flex-col gap-5">
            {dataFeatures.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-6 p-6 rounded-[30px] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Ikon (Kiri) */}
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Teks (Kanan) */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-xl font-[800] text-slate-900 font-['Montserrat'] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] leading-relaxed font-medium text-slate-500 group-hover:text-slate-600 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;