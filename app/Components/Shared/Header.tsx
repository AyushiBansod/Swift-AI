"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo/l.png" 
              alt="Logo" 
              className="h-8 w-auto md:h-9"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
              <ul className="flex items-center space-x-6">
                <li>
                  <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
              Learn More
            </a>

            {/* Improved Try It Now Button */}
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white via-white/50 to-white rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

              {/* Button shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>

              <Link href="/chat" className="relative bg-white text-black text-sm px-6 py-2 rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 group/btn font-medium">
                Try It Now
                <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-black backdrop-blur-sm border border-white/10 rounded-lg p-4 z-50 mx-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#" className="text-white/80 hover:text-white text-sm transition-colors block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white text-sm transition-colors block">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white text-sm transition-colors block">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white text-sm transition-colors block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white text-sm transition-colors block">
                  About
                </a>
              </li>
            </ul>
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-white/10">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors block text-center">
                Learn More
              </a>

              {/* Mobile Try It Now Button */}
              <div className="relative group mx-auto w-fit">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white via-white/50 to-white rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
                <Link href="/chat" className="relative bg-white text-black text-sm px-6 py-2 rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center gap-2 font-medium">
                  Try It Now
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}