import React from "react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {NavLink} from 'react-router'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Projects', 'Hackathon', 'Experience','Certificates', 'Contact'];

  return (
    <header className={`fixed top-0 w-3/4 z-50 transition-all duration-500 left-1/2 -translate-x-1/2 mt-5 rounded-3xl ${scrolled ? 'bg-gray-700/50 backdrop-blur-xl shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <NavLink
                key={link}
                to={`/${link.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </NavLink>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-400">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 animate-fadeIn ">
            {navLinks.map(link => (
              <NavLink
                key={link}
                to={`/${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 hover:text-cyan-400 transition-colors text-right"
              >
                {link}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;