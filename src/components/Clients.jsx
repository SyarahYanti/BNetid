import React, { useState, useEffect } from "react";

const Clients = () => {
  const [showAll, setShowAll] = useState(false);

  const clientLogos = [
    { name: "Bosowa Semen", url: "/images/clients/bosowa semen logo our client.png" },
    { name: "Bosowa Propertindo", url: "/images/clients/bosowa-prop.png" },
    { name: "Bosowa Multifinance", url: "/images/clients/bosowa-multifinance logo our client.png" },
    { name: "DJP Pajak", url: "/images/clients/djp-pajak-logo our client.png" },
    { name: "Bank Mandiri", url: "/images/clients/bank-mandiri logo our client.png" },
    { name: "Bank Sulteng", url: "/images/clients/bank-sulteng-logo our client.png" },
    { name: "BBVET Maros", url: "/images/clients/bbvet maros logo our client.png" },
    { name: "BPS Makassar", url: "/images/clients/badan pusat statistik makassar logo our client.png" },
    { name: "Bosowa Berlian Motor", url: "/images/clients/bosowa-berlian-motor-logo our client.png" },
    { name: "Dimarco", url: "/images/clients/dimarco logo our client.png" },
    { name: "Pengadilan Negeri Makassar", url: "/images/clients/pengadilan negri kota makassar logo our client.png" },
    { name: "Universitas UMI", url: "/images/clients/universitas umi logo our client.png" },
    { name: "SAS", url: "/images/clients/sas logo our client.png" },
  ];

  useEffect(() => {
    if (window.location.pathname === "/klien") {
      setShowAll(true);
    }
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden border-t border-slate-100 bg-white">
      {/* Watermark background khusus halaman /klien */}
      {showAll && (
        <div
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/watermark-network.png')" }}
        />
      )}

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl font-black text-[#1e40af] mb-4">
          Klien <span className="text-yellow-500">Kami</span>.
        </h2>

        <p className="text-gray-500 text-lg font-medium mb-14">
          Beberapa perusahaan dan instansi yang menggunakan layanan kami
        </p>

        {/* ===== PAGE /KLIEN ===== */}
        {showAll ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 max-w-5xl mx-auto place-items-center px-4">
            {clientLogos.map((client, index) => {
              const isSAS = client.name === "SAS";

              return (
                <div
                  key={index}
                  className={isSAS ? "lg:col-span-3 flex justify-center" : ""}
                >
                  <img
                    src={client.url}
                    alt={client.name}
                    className="h-14 md:h-16 object-contain max-w-full"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          /* ===== PAGE LAIN (MARQUEE) ===== */
          <div className="relative flex overflow-x-hidden justify-center">
            <div className="flex animate-marquee whitespace-nowrap py-12">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="mx-4 bg-white p-8 w-64 h-32 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={client.url}
                    alt={client.name}
                    className="max-h-14 w-full object-contain"
                  />
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
                width: fit-content;
                animation: marquee 35s linear infinite;
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
