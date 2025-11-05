

// import React from "react";
// import Header from "../components/Header";
// import HackcelestialCert from '../assets/certificates/hackCelestial.png'
// import AdobeCert from '../assets/certificates/adobe.png'
// import CodeslayerCert from '../assets/certificates/codeslayer.png'
// import EpicCert from '../assets/certificates/epic.png'

// const certificates = [
//   {
//     title: "National Hackathon Finalist – NIT Delhi",
//     issuer: "CodeSlayers 2k25",
//     img: HackcelestialCert,
//     date: "March 2025",
//   },
//   {
//     title: "Winner – TechNova 2k24",
//     issuer: "AdobeCert",
//     img: AdobeCert,
//     date: "September 2024",
//   },
//   {
//     title: "Problem Solving Certificate – NIT Delhi",
//     issuer: "KaamSetu Project Recognition",
//     img: CodeslayerCert,
//     date: "February 2025",
//   },
//   {
//     title: "Java Programming Excellence",
//     issuer: "HackerRank",
//     img: EpicCert,
//     date: "June 2024",
//   },
//   {
//     title: "National Hackathon Finalist – NIT Delhi",
//     issuer: "CodeSlayers 2k25",
//     img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c49?w=800&h=600&fit=crop",
//     date: "March 2025",
//   },
//   {
//     title: "Winner – TechNova 2k24",
//     issuer: "IIIT Hyderabad",
//     img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?w=800&h=600&fit=crop",
//     date: "September 2024",
//   },
// ];

// export default function CertificatesPage() {
//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br  from-[#0f0c29] via-[#302b63] to-[#24243e] py-16 px-6 flex flex-col items-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 mt-15 text-center">
//           <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
//             Certificates & Achievements
//           </span>
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
//           {certificates.map((cert, i) => (
//             <div
//               key={i}
//               className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden p-[2px]
//                          group hover:scale-105 transition-transform duration-500"
//             >
//               {/* Glowing Electrical Border */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-60 blur-md group-hover:opacity-90 transition duration-500"></div>

//               {/* Inner Card */}
//               <div className="relative bg-[#0f0c29]/90 rounded-2xl overflow-hidden border border-white/10 flex flex-col">
//                 <div className="relative w-full h-48 overflow-hidden">
//                   <img
//                     src={cert.img}
//                     alt={cert.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
//                 </div>

//                 <div className="p-5 flex flex-col justify-between flex-grow text-center">
//                   <h2 className="text-lg md:text-xl font-bold text-white mb-2">
//                     {cert.title}
//                   </h2>
//                   <p className="text-purple-300 text-sm mb-1">
//                     {cert.issuer}
//                   </p>
//                   <p className="text-gray-400 text-xs">{cert.date}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Electric Glow Background */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[200px] rounded-full animate-pulse" />
//           <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-pink-500/10 blur-[180px] rounded-full animate-pulse" />
//         </div>
//       </div>
//     </>
//   );
// }






import React from "react";
import Header from "../components/Header";
import HackcelestialCert from "../assets/certificates/hackCelestial.png";
import AdobeCert from "../assets/certificates/adobe.png";
import CodeslayerCert from "../assets/certificates/codeslayer.png";
import EpicCert from "../assets/certificates/epic.png";

const certificates = [
  {
    title: "National Hackathon Finalist – NIT Delhi",
    issuer: "CodeSlayers 2k25",
    img: HackcelestialCert,
    date: "March 2025",
  },
  {
    title: "Winner – TechNova 2k24",
    issuer: "Adobe India",
    img: AdobeCert,
    date: "September 2024",
  },
  {
    title: "Problem Solving Certificate – NIT Delhi",
    issuer: "KaamSetu Project Recognition",
    img: CodeslayerCert,
    date: "February 2025",
  },
  {
    title: "Java Programming Excellence",
    issuer: "HackerRank",
    img: EpicCert,
    date: "June 2024",
  },
  {
    title: "National Hackathon Finalist – NIT Delhi",
    issuer: "CodeSlayers 2k25",
    img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c49?w=800&h=600&fit=crop",
    date: "March 2025",
  },
  {
    title: "Winner – TechNova 2k24",
    issuer: "IIIT Hyderabad",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?w=800&h=600&fit=crop",
    date: "September 2024",
  },
];

export default function CertificatesPage() {
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
              {/* Electric Border Glow */}
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

                  {/* View Certificate Button */}
                  <a
                    href={cert.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-500 transition duration-300"
                  >
                    View Certificate
                  </a>
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
    </>
  );
}
