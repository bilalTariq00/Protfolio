"use client";
import React, { useState, useEffect } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center space-x-2">
            <Image src="/image.png" width={30} height={30} className='mr-2'></Image>
            Muhammad Bilal
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/bilalTariq00" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="http://linkedin.com/in/muhammad-bilal-b6a48b260" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:bilal002ta@gmail.com" 
               className="text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-800/95 rounded-lg">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
