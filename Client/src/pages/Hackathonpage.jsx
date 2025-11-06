

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpeg";
import Img4 from "../assets/img4.jpeg";

const hackathons = [
  {
    title: "CodeSlayers 2k25",
    subtitle: "National Finalist – NIT Delhi",
    images: [Img1, Img2, Img3, Img4],
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

  // Auto-slide cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % hackathons.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide images inside each card
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map((idx, i) => (idx + 1) % hackathons[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveCard((prev) => (prev + 1) % hackathons.length);
  const prevSlide = () =>
    setActiveCard((prev) => (prev - 1 + hackathons.length) % hackathons.length);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center py-12 px-4 relative">
        <div className="w-full max-w-4xl  relative overflow-hidden mt-12">
          {hackathons.map((hackathon, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-in-out transform ${
                i === activeCard
                  ? "opacity-100 scale-100 translate-y-0 z-20"
                  : "opacity-0 scale-95 translate-y-8 z-10 absolute inset-0"
              }`}
            >
              <div
                className="bg-white/10 h-130  backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)]
                           flex flex-col md:flex-row"
              >
                {/* Left: Image */}
                <div className="relative w-full md:w-3/4 h-64 md:h-auto overflow-hidden">
                  {hackathon.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt=""
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        idx === imageIndexes[i] ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Right: Details */}
                <div className="flex flex-col justify-center p-6 md:p-10 text-center md:text-left text-white overflow-y-auto max-h-[75vh]">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">{hackathon.title}</h2>
                  <p className="text-lg text-purple-300 mb-2">{hackathon.subtitle}</p>
                  <p className="text-sm text-gray-400 mb-4">{hackathon.date}</p>

                  <ul className="text-gray-300 mb-6 space-y-3 text-sm md:text-base">
                    {hackathon.description.map((line, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm">
                    <Clock size={18} className="text-purple-400" />
                    <span>{hackathon.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Arrows (Always Visible) */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full 
                       bg-gradient-to-br from-purple-600/80 to-pink-500/80 text-white backdrop-blur-md 
                       shadow-lg hover:scale-110 transition duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full 
                       bg-gradient-to-br from-purple-600/80 to-pink-500/80 text-white backdrop-blur-md 
                       shadow-lg hover:scale-110 transition duration-300"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {hackathons.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeCard
                    ? "bg-gradient-to-r from-purple-400 to-pink-400 scale-125"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Soft background glow */}
          <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl pointer-events-none" />
        </div>
      </div>
    </>
  );
}
