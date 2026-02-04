import React, { useState } from "react"; // useEffect dihapus dari sini

const Clients = () => {
  // Menggunakan fungsi inisialisasi agar tidak perlu useEffect
  const [showAll] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname === "/klien";
    }
    return false;
  });

  const clientLogos = [
    { name: "Bosowa Semen", url: "/images/clients/bosowa semen logo our client.png" },
    { name: "Bosowa Propertindo", url: "/images/clients/bosowa-prop.png" },
    { name: "Bosowa Multifinance", url: "/images/clients/bosowa-multifinance logo our client.png" },
    { name: "DJP Pajak", url: "/images/clients/djp-pajak-logo our client.png" },
    { name: "Bank Mandiri", url: "/images/clients/bank-mandiri logo our client.png" },
    { name: "Bank Sulteng", url: "/images/clients/bank-sulteng-logo our client.png" },
    { name: "BBVET Maros", url: "/images/clients/bbvet maros logo our client.png" },
    { name: "BPS Makassar", url: "/images/clients/badan pusat statistik makassar logo our client.png" },
    { name: "Golden", url: "/images/clients/golden.jpg" },
    { name: "Bosowa Berlian Motor", url: "/images/clients/bosowa-berlian-motor-logo our client.png" },
    { name: "Polbangtan", url: "/images/clients/politeknik.png" },
    { name: "SAS", url: "/images/clients/sas logo our client.png" },
    { name: "Pengadilan Negeri Makassar", url: "/images/clients/pengadilan negri kota makassar logo our client.png" },
    { name: "Dimarco", url: "/images/clients/dimarco logo our client.png" },
    { name: "Universitas UMI", url: "/images/clients/universitas umi logo our client.png" },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden border-t border-slate-100 bg-white font-sans">
      {showAll && (
        <div
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
          style={{ backgroundImage: "url('/images/bg/watermark-network.png')" }}
        />
      )}

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-[900] text-[#1e40af] mb-4 tracking-tight font-['Montserrat']">
          Klien <span className="text-yellow-500">Kami</span>.
        </h2>

        <p className="text-gray-500 text-base md:text-lg font-medium mb-16 max-w-2xl mx-auto">
          Beberapa perusahaan dan instansi yang menggunakan layanan kami
        </p>

        {showAll ? (
          <div className="flex flex-wrap justify-center gap-y-16 gap-x-8 md:gap-y-24 md:gap-x-16 max-w-5xl mx-auto px-4">
            {clientLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                // Ditambahkan overflow-hidden agar scale tidak menabrak tetangganya
                className="flex items-center justify-center w-[40%] md:w-[28%] h-16 md:h-20 transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                <img
                  src={client.url}
                  alt={client.name}
                  className={`max-h-12 md:max-h-16 w-auto object-contain mix-blend-multiply ${
                    client.name === "Polbangtan" ? "scale-[3.5]" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex overflow-x-hidden justify-center">
            <div className="flex animate-marquee whitespace-nowrap py-12">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  // Ditambahkan overflow-hidden juga pada mode marquee
                  className="mx-4 bg-white p-8 w-64 h-32 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={client.url}
                    alt={client.name}
                    className={`max-h-14 w-full object-contain mix-blend-multiply ${
                      client.name === "Polbangtan" ? "scale-[3.5]" : ""
                    }`}
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