

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import Header from "../components/Header";
import Img1 from '../assets/img1.jpeg'
import Img2 from '../assets/img2.jpeg'
import Img3 from '../assets/img3.jpeg'
import Img4 from '../assets/img4.jpeg'

const hackathons = [
  {
    title: "CodeSlayers 2k25",
    subtitle: "National Finalist – NIT Delhi",
    images: [
      Img1,
      Img2,
      Img3,
      Img4
    ],
    date: "November 2025",
    description: [
      "Selected among top 65 teams out of 10,000+ registrations.",
      "Developed ‘KaamSetu’ — a smart job-matching platform connecting freelancers and clients.",
      "Collaborated in a 36-hour national-level hackathon with mentors from top industries.",
    ],
    duration: "36 Hours of Non-stop Innovation",
  },
  // {
  //   title: "TechNova 2k24",
  //   subtitle: "Zonal Winner – IIIT Hyderabad",
  //   images: [
  //     "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1581091870622-2c82fbcd1726?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?w=800&h=600&fit=crop",
  //   ],
  //   date: "September 2024",
  //   description: [
  //     "Won the regional round with an AI-powered education assistant project.",
  //     "Led a team of 4 to build a scalable and cloud-integrated solution.",
  //     "Recognized for creativity, design, and real-world impact.",
  //   ],
  //   duration: "36 Hours of Product Sprint",
  // },
];

export default function HackathonShowcase() {
  const [activeCard, setActiveCard] = useState(0);
  const [imageIndexes, setImageIndexes] = useState(Array(hackathons.length).fill(0));

  useEffect(() => {
    const cardTimer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % hackathons.length);
    }, 9000);
    return () => clearInterval(cardTimer);
  }, []);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map((idx, i) => (idx + 1) % hackathons[i].images.length)
      );
    }, 3000);
    return () => clearInterval(imgTimer);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center overflow-hidden p-6">
        <div className="relative w-full max-w-6xl h-[520px]">
          {hackathons.map((hackathon, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
                i === activeCard
                  ? "opacity-100 scale-100 translate-y-0 z-20"
                  : "opacity-0 scale-95 translate-y-8 z-10 pointer-events-none"
              }`}
            >
              <div className="w-full h-full bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-white/20 grid md:grid-cols-2">
                {/* Left - Image Slider */}
                <div className="relative h-[520px]">
                  {hackathon.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt=""
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-in-out ${
                        idx === imageIndexes[i]
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-110"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Right - Text Details */}
                <div className="p-8 md:p-10 text-white flex flex-col justify-center">
                  <h2 className="text-4xl font-extrabold mb-2">{hackathon.title}</h2>
                  <p className="text-lg text-purple-300 mb-3">{hackathon.subtitle}</p>
                  <p className="text-sm text-gray-400 mb-6">{hackathon.date}</p>

                  <ul className="space-y-3 text-gray-300 mb-8">
                    {hackathon.description.map((line, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-[2px]">•</span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Clock size={18} className="text-purple-400" />
                    <span>{hackathon.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Floating Glow Effect */}
          <div className="absolute -inset-10 rounded-[50px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-pulse" />
        </div>
      </div>
    </>
  );
}
