import React, { useState } from "react";

const Clients = () => {
  const [showAll] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname === "/klien";
    }
    return false;
  });

  const clientLogos = [
    { name: "Bosowa Bandar", url: "/images/clients/1.bosowa bandar.png" },
    { name: "Bosowa Propertindo", url: "/images/clients/2.bosowa propertindo.png" },
    { name: "Bosowa Berlian", url: "/images/clients/3.bosowa berlian.png" },
    { name: "Bosowa Transportasi", url: "/images/clients/4.bosowa transportasi.png" },
    { name: "Bosowa Asuransi", url: "/images/clients/5.bosowa asuransi.png" },
    { name: "Bosowa Semen", url: "/images/clients/6.bosowa semen logo our client.png" },
    { name: "Politeknik Bosowa", url: "/images/clients/7.politeknik bosowa.png" }, // index 6
    { name: "Kreasi Binar", url: "/images/clients/8.kreasi binar.png" },           // index 7
    { name: "BPS Provinsi", url: "/images/clients/9.bps provinsi.png" },
    { name: "Politeknik", url: "/images/clients/10.politeknik.png" },             // index 9
    { name: "Kontak Perkasa", url: "/images/clients/11.kontak perkasa.png" },
    { name: "BNI", url: "/images/clients/12.bni.png" },
    { name: "BBVET Maros", url: "/images/clients/13.bbvet maros logo our client.png" },
    { name: "Dimarco", url: "/images/clients/14.dimarco logo our client.png" },
    { name: "BNS", url: "/images/clients/15.bns.png" },
    { name: "Golden", url: "/images/clients/16.golden.jpg" },
    { name: "DJP Pajak", url: "/images/clients/17.djp-pajak-logo our client.png" },
    { name: "Bank Mandiri", url: "/images/clients/18.bank-mandiri logo our client.png" },
    { name: "Bank Sulteng", url: "/images/clients/19.bank-sulteng-logo our client.png" },
    { name: "Elit", url: "/images/clients/20.elit.png" },
    { name: "Pengadilan Negeri", url: "/images/clients/21.pengadilan negri.png" }, // index 20 (diperkecil aman)
    { name: "SAS", url: "/images/clients/22.sas logo our client.png" },
    { name: "Universitas Bosowa", url: "/images/clients/23.universitas bosowa.png" },
  ];

  const getLogoStyle = (index) => {
    // Logo besar utama (8,9,12)
    if ([8, 9, 12].includes(index)) {
      return "w-[200px] md:w-[240px] max-w-none h-auto object-contain transition-transform hover:scale-105 duration-300";
    }

    // Perbesar sedikit logo 7 & 8
    if ([6, 7].includes(index)) {
      return "w-[190px] md:w-[225px] h-auto object-contain transition-transform hover:scale-105 duration-300";
    }

    if (index === 3 || index === 4) {
      return "w-[170px] md:w-[215px] px-6 h-auto object-contain transition-transform hover:scale-110 duration-300";
    }

    if (index >= 0 && index <= 2) {
      return "w-[150px] md:w-[185px] px-8 h-auto object-contain transition-transform hover:scale-105 duration-300";
    }

    // Logo 21 (index 20) -> diperkecil tapi TIDAK PERNAH keluar container
    if (index === 20 || index === 21 || index === 22) {
      return "w-[95px] md:w-[120px] max-h-full h-auto object-contain transition-transform hover:scale-105 duration-300";
    }

    if ([13, 21, 22].includes(index)) {
      return "w-[120px] md:w-[150px] px-4 h-auto object-contain transition-transform hover:scale-105 duration-300";
    }

    return "w-[180px] md:w-[220px] h-auto object-contain transition-transform hover:scale-105 duration-300";
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden border-t border-slate-100 bg-white font-sans">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight font-['Montserrat'] uppercase mb-4 text-slate-900">
          KLIEN <span className="text-blue-600">KAMI .</span>
        </h2>

        <p className="text-gray-500 text-base md:text-lg font-medium mb-16 max-w-2xl mx-auto">
          Beberapa perusahaan dan instansi yang menggunakan layanan kami
        </p>

        {showAll ? (
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 max-w-7xl mx-auto">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center h-24 md:h-32 w-[45%] sm:w-1/4 lg:w-1/5">
                <img src={client.url} alt={client.name} className={getLogoStyle(index)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {[...clientLogos, ...clientLogos].map((client, index) => {
                const originalIndex = index % clientLogos.length;
                return (
                  <div key={index} className="mx-4 md:mx-6 flex items-center justify-center flex-shrink-0">
                    <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-4 h-24 md:h-28 flex items-center justify-center min-w-[200px] md:min-w-[280px]">
                      <img
                        src={client.url}
                        alt={client.name}
                        className={getLogoStyle(originalIndex)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        )}
      </div>

      {!showAll && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes marquee { 
                0% { transform: translateX(0); } 
                100% { transform: translateX(-50%); } 
              }
              .animate-marquee { 
                display: flex; 
                width: fit-content; 
                animation: marquee 40s linear infinite; 
              }
              .animate-marquee:hover { 
                animation-play-state: paused; 
              }
            `,
          }}
        />
      )}
    </section>
  );
};

export default Clients;
