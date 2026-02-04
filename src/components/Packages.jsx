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
      desc: "Produk internet Fiber to the home untuk klien ritel dengan harga yang terjangkau dan kecepatan yang stabil.",
      features: ["Fiber to home", "Unlimited quota", "Free instalasi"]
    },
    {
      title: "FourNet",
      image: "/images/clients/layanan1.png",
      desc: "Layanan enterprise untuk solusi internet middle up bussiness dengan kecepatan, performa internet stabil, SLA, dan dukungan teknis 24 jam.",
      features: ["Bandwidth sesuai permintaan", "CIR Ratio 1:1", "SLA 99%", "IP public", "Support 24 jam"]
    },
    {
      title: "FourNet Lite",
      image: "/images/clients/layanan2.png",
      desc: "Layanan broadband (up to) untuk solusi intenet small & middle bussiness dengan performa stabil dan dukungan teknis 24 jam.",
      features: ["Bandwidth sesuai permintaan", "CIR Ratio 1:4", "SLA 99%", "Support 24 jam"]
    },
    {
      title: "Bandwidth On Demand",
      image: "/images/clients/layanan3.png",
      desc: "Layanan internet daily untuk solusi event online/streaming (webinar, gathering, dll) dengan kapasitas tinggi dan performa stabil.",
      features: ["Bandwidth sesuai permintaan", "CIR Ratio 1:1", "SLA 99%", "IP public", "Support 24 jam"]
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="layanan"
      className="bg-[#f8fafc] min-h-screen w-full flex flex-col justify-center py-16 px-4 sm:px-8 md:px-12 relative font['Inter',sans-serif] overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .reveal-card { opacity: 0; }
        .reveal-card.active {
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}} />

      <div className="container mx-auto max-w-[1400px] relative z-10">
        
        <div className={`text-center mb-10 md:mb-14 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight font-['Montserrat'] uppercase">
            Layanan <span className="text-blue-600">Kami .</span>
          </h2>
          <div className={`w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full transition-all duration-1000 delay-300 ${
            isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
          }`}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`reveal-card bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col group w-full ${
                isVisible ? 'active' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 shrink-0 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur p-2.5 rounded-xl shadow-lg transform transition-transform group-hover:scale-110">
                  {index === 0 ? <Home size={18} className="text-blue-600" /> :
                   index === 3 ? <Calendar size={18} className="text-blue-600" /> :
                   <Building2 size={18} className="text-blue-600" />}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex flex-col">
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight font-['Montserrat'] group-hover:text-blue-600 transition-colors">
                    {plan.title}
                  </h3>
                  <div className="border-l-4 border-blue-500 pl-4 min-h-[120px] flex items-start">
                    <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                      {plan.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-[14px] font-black text-slate-900 uppercase tracking-[0.15em] mb-4 block font-['Montserrat']">
                    Detail Paket
                  </span>
                  
                  <div className="space-y-3 min-h-[160px]">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-700 font-bold text-[15px] tracking-wide group/feat">
                        <div className="bg-blue-50 p-1.5 rounded-md shrink-0 group-hover:bg-blue-600 transition-colors duration-300 mt-0.5">
                          <CheckCircle2 size={16} className="text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <span className="opacity-95 group-hover:opacity-100 transition-opacity leading-tight pt-1">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
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