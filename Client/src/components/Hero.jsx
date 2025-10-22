import { useEffect, useRef } from 'react';
import image from '../assets/img.jpeg';
import React from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const SeaWaveSeparator = ({ color = '#06b6d4', height = 110 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawWave = (offset, amplitude, frequency, opacity) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin((x * frequency + time + offset) * 0.01) * amplitude +
          Math.sin((x * frequency * 0.5 + time * 1.5 + offset) * 0.008) * (amplitude * 0.5);

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      // Ensure correct opacity blending
      ctx.fillStyle = `${color}${Math.floor(opacity * 255)
        .toString(16)
        .padStart(2, '0')}`;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawWave(0, 20, 1.3, 0.2);
      drawWave(100, 15, 1.8, 0.4);
      drawWave(200, 10, 0.8, 0.5);
      drawWave(150, 8, 2.8, 0.3);
      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [color, height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full"
      style={{ height: `${height}px`, zIndex: 20 }}
    />
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-blue-900/50 to-cyan-900/40 animate-gradientBackground" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Neon Avatar */}
          <div className="flex justify-center md:justify-end">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-pink-500/70 shadow-[0_0_50px_rgba(255,110,199,0.5)] animate-pulse-slow">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Nitish Kumar
              </span>
            </h1>

            <h2 className="text-2xl font-semibold text-pink-400">
              <Typewriter
                words={[
                  "Frontend Developer 🚀",
                  "UI/UX Designer 🎨",
                  "Backend Explorer ⚡",
                  "Tech Enthusiast 🌍",
                  "Software Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="text-gray-300 max-w-lg">
              Crafting immersive{" "}
              <span className="text-cyan-400">digital experiences </span>
              at the intersection of <span className="text-pink-400">design</span> and
              <span className="text-purple-400"> technology</span>. I love building
              creative, futuristic solutions.
            </p>

            <div className="flex gap-4 justify-center md:justify-start mt-6">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(255,110,199,0.7)] transition-all duration-300 hover:scale-105 flex items-center"
              >
                View Work
                <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(155,50,255,0.5)] transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>

      {/* 👇 Wave perfectly pinned to bottom */}
      <SeaWaveSeparator color="#06b6d4" height={130} />
    </section>
  );
};

export default Hero;
