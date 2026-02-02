import React from "react";
import { Box, ArrowRight, Gauge, ShieldCheck, Headphones } from "lucide-react";

const Hero = () => {
  // Smooth scroll ke Layanan
  const handleLayananClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("layanan");
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  // Smooth scroll ke Produk
  const handleProdukClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("produk");
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-[#020617]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/clients/beranda.png"
          alt="Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* CONTENT */}
      <main className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 md:py-32 flex flex-col items-start justify-center">
        <div className="max-w-4xl flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-7">
          {/* Badge */}
          <div className="w-fit flex items-center space-x-2 bg-blue-900/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_8px_#facc15]"></div>
            <span className="text-yellow-400 text-[8px] sm:text-[9px] md:text-[11px] font-black uppercase tracking-wide">
              Legal Dan Terpercaya
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight sm:leading-snug md:leading-tight tracking-tighter">
            Celebes Media{" "}
            <span className="text-yellow-400 italic">Jaringan.</span>
          </h1>

          {/* Description */}
          <p className="max-w-full sm:max-w-xl text-xs sm:text-sm md:text-lg text-white/90 font-bold italic leading-relaxed">
            Membangun layanan internet maksimal dan terjangkau untuk semua
            segmen pengguna di Indonesia.
          </p>

          {/* Buttons dengan Animasi Berlawanan */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-3 mb-4">
            <button
              onClick={handleLayananClick}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-black flex items-center gap-2 transition-all active:scale-95 text-xs sm:text-sm shadow-lg animate-[float-up_3s_ease-in-out_infinite]"
            >
              Layanan Kami <ArrowRight size={16} className="sm:rotate-0" />
            </button>

            <button
              onClick={handleProdukClick}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold flex items-center gap-2 transition-all text-xs sm:text-sm animate-[float-down_3s_ease-in-out_infinite]"
            >
              <Box size={16} /> Produk Kami
            </button>
          </div>

          {/* Feature Panel */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-6 bg-black/40 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/5 w-full sm:w-fit justify-start">
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <Gauge size={18} className="text-yellow-400" />
              <span className="text-[9px] sm:text-[10px] md:text-[12px] font-black uppercase tracking-wider">
                SLA 99%
              </span>
            </div>
            <div className="w-px h-5 sm:h-6 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <ShieldCheck size={18} className="text-blue-400" />
              <span className="text-[9px] sm:text-[10px] md:text-[12px] font-black uppercase tracking-wider">
                Jaringan Fiber
              </span>
            </div>
            <div className="w-px h-5 sm:h-6 bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <Headphones size={18} className="text-green-400" />
              <span className="text-[9px] sm:text-[10px] md:text-[12px] font-black uppercase tracking-wider">
                Support 24/7
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Tambahkan Style ini di index.css proyek Anda atau gunakan tag style ini */}
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;