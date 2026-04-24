"use client";

import Link from "next/link";

export default function Background() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      
      {/* Glowing light effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <div className="relative">
          
          {/* Main center glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white rounded-full blur-[150px] opacity-20"></div>
          
          {/* Secondary wide glow */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[500px] bg-gray-300 rounded-full blur-[200px] opacity-15"></div>
          
          {/* Bright center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white rounded-full blur-[100px] opacity-50"></div>

          {/* NEW: Side beams */}
          <div className="absolute top-20 left-[20%] w-72 h-72 bg-white rounded-full blur-[140px] opacity-10"></div>
          <div className="absolute top-32 right-[20%] w-80 h-80 bg-gray-300 rounded-full blur-[160px] opacity-10"></div>

        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 text-center">
        
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl"
          style={{ fontFamily: 'var(--font-dosis), sans-serif' }}
        >
          Empower Your Future with{" "}
          <span className="text-gray-300">Intelligent Automation</span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl">
          Transform your workflow with cutting-edge AI solutions
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center text-center mt-8">
          <Link href="/chat" className="bg-zinc-200 text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-300 transition-colors">
            Get Started
          </Link>
        </div>

      </div>
    </div>
  );
}