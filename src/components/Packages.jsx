import React, { useEffect, useRef, useState } from 'react';
import { Building2, CheckCircle2, Calendar, Home } from 'lucide-react';

const Packages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      title: "2BeHome",
      image: "/images/clients/layanan4.png",
      desc: "Internet fiber rumah dengan harga terjangkau dan kecepatan stabil untuk keluarga digital.",
      features: ["FIBER TO HOME", "UNLIMITED QUOTA", "FREE INSTALASI"]
    },
    {
      title: "FourNet",
      image: "/images/clients/layanan1.png",
      desc: "Layanan enterprise untuk solusi internet middle up business (perusahaan, instansi, hotel, dll).",
      features: ["CIR RATIO 1:1", "SLA 99% & IP PUBLIC", "TEKNISI 1X24 JAM"]
    },
    {
      title: "FourNet Lite",
      image: "/images/clients/layanan2.png",
      desc: "Layanan broadband (up to) untuk solusi internet small and middle sized business yang stabil.",
      features: ["CIR RATIO 1:4", "SLA 99% & IP PUBLIC", "TEKNISI 1X24 JAM"]
    },
    {
      title: "Bandwidth On Demand",
      image: "/images/clients/layanan3.png",
      desc: "Layanan internet daily untuk solusi event online/streaming (webinar, gathering, dll).",
      features: ["10-100 MBPS", "CIR RATIO 1:1", "SLA 99% & IP PUBLIC"]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="layanan"
      className="bg-[#f8fafc] min-h-screen w-full flex flex-col py-16 px-4 sm:px-8 md:px-12 relative font-['Inter',sans-serif] overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          0% { 
            transform: translateY(50px); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }
        .reveal-card {
          opacity: 0;
        }
        .reveal-card.active {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}} />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* JUDUL ANIMASI */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight font-['Montserrat'] uppercase">
            Layanan <span className="text-blue-600">Kami .</span>
          </h2>
          <div className={`w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full transition-all duration-1000 delay-300 ${
            isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
          }`}></div>
        </div>

        {/* GRID CONTAINER DENGAN STAGGERED ANIMATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`reveal-card bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col group w-full ${
                isVisible ? 'active' : ''
              }`}
              style={{ 
                animationDelay: `${index * 150}ms` 
              }}
            >
              {/* IMAGE SECTION */}
              <div className="relative h-48 lg:h-52 shrink-0 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-80" />
                
                {/* ICON BADGE */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-2.5 rounded-xl shadow-lg transform transition-transform group-hover:scale-110">
                  {index === 0 ? <Home size={18} className="text-blue-600" /> :
                   index === 3 ? <Calendar size={18} className="text-blue-600" /> :
                   <Building2 size={18} className="text-blue-600" />}
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="mb-5">
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight font-['Montserrat'] group-hover:text-blue-600 transition-colors">
                    {plan.title}
                  </h3>
                  <div className="border-l-2 border-blue-500 pl-4 py-0.5">
                    <p className="text-slate-500 text-[14px] leading-relaxed font-medium">
                      {plan.desc}
                    </p>
                  </div>
                </div>

                {/* FEATURES LIST */}
                <div className="space-y-3 mt-auto pt-5 border-t border-slate-50">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-bold text-[11px] uppercase tracking-wide group/feat">
                      <div className="bg-blue-50 p-1 rounded-lg shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                        <CheckCircle2 size={13} className="text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="opacity-90 group-hover:opacity-100 transition-opacity">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
