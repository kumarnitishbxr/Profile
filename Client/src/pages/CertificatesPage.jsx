import React, { useState } from "react";
import Header from "../components/Header";
import HackcelestialCert from "../assets/certificates/hackCelestial.png";
import AdobeCert from "../assets/certificates/adobe.png";
import CodeslayerCert from "../assets/certificates/codeslayer.png";
import EpicCert from "../assets/certificates/epic.png";
import C from "../assets/certificates/c.png";
import OOPS from "../assets/certificates/Oops.png";
import Dsa from "../assets/certificates/dsa.jpeg";
import Ieee from "../assets/certificates/ieee.jpeg";
import Code from "../assets/certificates/codeslayer.jpeg";
import Hack from "../assets/certificates/hackceremony.jpeg";
import Tech from "../assets/certificates/technicalpaper.jpeg";

const certificates = [
  {
    title: "Problem Solving Through Programming in C",
    issuer: "NPTEL",
    img: C,
    date: "Jul-Oct 2024",
  },
  {
    title: "Fundamental of Object Oriented Programming",
    issuer: "NPTEL",
    img: OOPS,
    date: "Jan-Apr 2025",
  },
  {
    title: "Data Structure and Algorithm Design",
    issuer: "NPTEL",
    img: Dsa,
    date: "Jul-Oct 2025",
  },
  {
    title: "IEEE EMBS Student Internship Program",
    issuer: "IEEE EMBS Pune Chapter",
    img: Ieee,
    date: "15 June - 15 July 2025",
  },
  {
    title: "HackCeletial 2.O",
    issuer: "Pillai Group of Institutions",
    img: HackcelestialCert,
    date: "March 2025",
  },
  {
    title: "Adobe India Hackathon",
    issuer: "Adobe India",
    img: AdobeCert,
    date: "September 2024",
  },
  {
    title: "Code Slayer 2k25",
    issuer: "NIT Delhi",
    img: CodeslayerCert,
    date: "Oct 2025",
  },
  {
    title: "TVS credit Epic 7.O - IT Challenge",
    issuer: "TVS",
    img: EpicCert,
    date: "June 2024",
  },
  {
    title: "National Hackathon Finalist – NIT Delhi",
    issuer: "CodeSlayers 2k25",
    img: Code,
    date: "Nov 2025",
  },
  {
    title: "Hack Ceremony Quiz Competition",
    issuer: "IES College of Technology, Bhopal",
    img: Hack,
    date: "September 2023",
  },
  {
    title: "Technical Paper (Inforia 2k24)",
    issuer: "IES College of Technology, Bhopal",
    img: Tech,
    date: "March 2024",
  },
];

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-16 px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 mt-15 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Certificates & Achievements
          </span>
        </h1>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden p-[2px] 
                         group hover:scale-105 transition-transform duration-500"
            >
              {/* Electric border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-60 blur-md group-hover:opacity-90 transition duration-500"></div>

              {/* Inner Card */}
              <div className="relative bg-[#0f0c29]/90 rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between">
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                <div className="p-5 flex flex-col flex-grow text-center">
                  <h2 className="text-lg md:text-xl font-bold text-white mb-2">
                    {cert.title}
                  </h2>
                  <p className="text-purple-300 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs mb-4">{cert.date}</p>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="mt-auto inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-500 transition duration-300"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Electric Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[200px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-pink-500/10 blur-[180px] rounded-full animate-pulse" />
        </div>
      </div>

      {/* Modal Popup */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 px-4">
          <div className="relative bg-[#1a1a2e] rounded-2xl p-4 md:p-6 shadow-2xl w-full max-w-3xl">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-pink-400 transition"
            >
              ✕
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-4">
              {selectedCert.title}
            </h2>
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <p className="text-center text-purple-300 mt-4">
              Issued by: {selectedCert.issuer} | {selectedCert.date}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
