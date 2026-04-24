"use client";

import {
  FiCpu,
  FiGlobe,
  FiMessageCircle,
  FiClock,
  FiLayout,
} from "react-icons/fi";

export default function WhyUs() {
  const features = [
    { title: "Cutting\nEdge AI", icon: <FiCpu /> },
    { title: "Seamless\nIntegration", icon: <FiGlobe /> },
    { title: "Personalized\nConversations", icon: <FiMessageCircle /> },
    { title: "24/7\nAvailability", icon: <FiClock /> },
  ];

  return (
    <section className="relative bg-black text-white pt-0 pb-28 overflow-hidden">
      
      {/* TOP LINE */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 rounded-full text-sm text-gray-300 mb-6 backdrop-blur-md">
          ✦ Why Choose Our Chatbot
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-6xl font-light mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-dosis), sans-serif" }}
        >
          Revolutionize Communication Now
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
          Transform your communication and streamline your workflow with AI-driven automation that enhances productivity and delivers seamless interactions
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-6 md:p-8 h-48 flex flex-col items-center justify-center text-center
              bg-white/[0.04] border border-white/[0.08]
              backdrop-blur-xl
              transition-all duration-500
              md:hover:-translate-y-2 md:hover:border-white/20"
            >

              {/* TOP GLOW */}
              <div className="
                absolute -top-10 w-32 h-32 bg-white/10 blur-[80px]
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition duration-500
              " />

              {/* ICON AREA */}
              <div className="relative flex items-center justify-center mb-6 md:mb-8">

                {/* Ring */}
                <div className="absolute w-16 h-16 rounded-full border border-white/10"></div>

                {/* ICON */}
                <div className="
                  relative z-10 text-white text-2xl
                  scale-110 md:scale-100 md:group-hover:scale-110
                  transition-all duration-300
                ">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="
                text-sm sm:text-lg font-medium whitespace-pre-line
                text-white md:text-gray-300 md:group-hover:text-white
                transition duration-300
                ">
                {item.title}
              </h3>

              {/* HOVER GRADIENT */}
              <div className="
                absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-white/10
                opacity-100 md:opacity-0 md:group-hover:opacity-100
                transition duration-500
              " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}