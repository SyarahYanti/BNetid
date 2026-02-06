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
    { name: "Politeknik Bosowa", url: "/images/clients/7.politeknik bosowa.png" },
    { name: "Kreasi Binar", url: "/images/clients/8.kreasi binar.png" },
    { name: "BPS Provinsi", url: "/images/clients/9.bps provinsi.png" },
    { name: "Politeknik", url: "/images/clients/10.politeknik.png" },
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
    { name: "Pengadilan Negeri", url: "/images/clients/21.pengadilan negri.png" },
    { name: "SAS", url: "/images/clients/22.sas logo our client.png" },
    { name: "Universitas Bosowa", url: "/images/clients/23.universitas bosowa.png" },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden border-t border-slate-100 bg-white font-sans">
      {showAll && (
        <div
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/watermark-network.png')" }}
        />
      )}

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight font-['Montserrat'] uppercase mb-4">
          <span className="text-slate-900">KLIEN</span>{" "}
          <span className="text-blue-600">KAMI</span>
          <span className="text-blue-600"> .</span>
        </h2>

        <p className="text-gray-500 text-base md:text-lg font-medium mb-12 max-w-2xl mx-auto">
          Beberapa perusahaan dan instansi yang menggunakan layanan kami
        </p>

        {showAll ? (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 h-40 w-[calc(50%-1.5rem)] md:w-[calc(25%-2rem)] border-none shadow-none bg-transparent"
              >
                <div className="w-full h-[72px] flex items-center justify-center">
                  <img
  src={client.url}
  alt={client.name}
  className={`max-h-full max-w-full object-contain ${
    [1, 2].includes(index)
      ? "scale-90"
      : [0, 3, 4].includes(index)
      ? "scale-110"
      : ""
  }`}
/>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex overflow-x-hidden justify-center">
            <div className="flex animate-marquee whitespace-nowrap py-8">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="mx-4 bg-white p-6 w-80 h-44 rounded-xl shadow-sm border border-gray-50 flex items-center justify-center flex-shrink-0"
                >
                  <div className="w-full h-[72px] flex items-center justify-center">
                    <img
                      src={client.url}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
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
                animation: marquee 50s linear infinite;
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
