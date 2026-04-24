"use client";



import Image from "next/image";

import { FiMessageSquare, FiZap, FiRepeat, FiActivity } from "react-icons/fi";



export default function PowerFeatures() {

  const features = [

    { icon: <FiMessageSquare />, text: "Custom Conversations" },

    { icon: <FiZap />, text: "Dynamic Content Delivery" },

    { icon: <FiActivity />, text: "Behavior-Based Learning" },

    { icon: <FiRepeat />, text: "Adaptable Interactions" },

  ];



  const tags = [

    "24/7 Availability",

    "Real-Time Insights",

    "Easy Customization",

    "Multi-Platform Support",

  ];

  return (

    <section className="relative bg-black text-white pt-0 pb-24 overflow-hidden">

      

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        

        {/* Left-aligned content */}

        <div className="text-left">

          

          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-sm text-gray-300 mb-6">

            ✦ Powerful Features

          </div>



          {/* Heading */}

          <h2 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: 'var(--font-dosis), sans-serif' }}>

            Powerful Features

          </h2>



          {/* Sub-heading with Orbitron font */}

          <p className="text-xl text-gray-400 mb-4 max-w-2xl" style={{ fontFamily: 'var(--font-dosis), sans-serif' }}>

            Innovative solution at your fingertips

          </p>



          {/* Two lines of description */}

          <p className="text-gray-500 mb-2 max-w-2xl">

            Experience cutting-edge AI technology designed to transform your workflow

          </p>

          <p className="text-gray-500 mb-8 max-w-2xl">

            Seamlessly integrate powerful features into your daily operations

          </p>



          {/* Explore Features button */}

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors mb-16">

            Explore Features

          </button>



        </div>



        {/* 3 Cards in a row */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          

          {/* Card 1: Global Reach */}

          <div className="group relative border border-gray-300 rounded-3xl overflow-hidden bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 h-72 flex flex-col">

            <div className="relative flex-1">

              <Image

                src="/images/1.jpg"

                alt="Global Reach"

                fill

                sizes="(max-width: 768px) 100vw, 33vw"

                className="object-cover"

                loading="lazy"

              />

            </div>

            <div className="bg-black py-4">

              <h3 className="text-center text-lg font-semibold text-white">Global Reach</h3>

            </div>

          </div>



          {/* Card 2: Seamless Integration */}

          <div className="group relative border border-gray-300 rounded-3xl overflow-hidden bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 h-72 flex flex-col">

            <div className="relative flex-1">

              <Image

                src="/images/3.jpg"

                alt="Seamless Integration"

                fill

                sizes="(max-width: 768px) 100vw, 33vw"

                className="object-cover"

                loading="lazy"

              />

            </div>

            <div className="bg-black py-4">

              <h3 className="text-center text-lg font-semibold text-white">Seamless Integration</h3>

            </div>

          </div>



          {/* Card 3: Instant Response */}

          <div className="group relative border border-gray-300 rounded-3xl overflow-hidden bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 h-72 flex flex-col">

            <div className="relative flex-1">

              <Image

                src="/images/2.jpg"

                alt="Instant Response"

                fill

                sizes="(max-width: 768px) 100vw, 33vw"

                className="object-cover"

                loading="lazy"

              />

            </div>

            <div className="bg-black py-4">

              <h3 className="text-center text-lg font-semibold text-white">Instant Response</h3>

            </div>

          </div>



        </div>



      </div>



      {/* New Section: Personalized Experience */}

      <div className="max-w-7xl mx-auto px-4 mt-24">

        

        {/* Card Container */}

        <div className="relative rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-10 md:p-14 overflow-hidden">

          

          {/* Background glow lines */}

          <div className="absolute right-0 top-0 w-[400px] h-[400px] border border-white/10 rounded-full opacity-20 blur-[1px]"></div>

          <div className="absolute right-10 top-10 w-[300px] h-[300px] border border-white/10 rounded-full opacity-10"></div>



          <div className="grid md:grid-cols-2 gap-10 items-center">

            

            {/* LEFT CONTENT */}

            <div>

              <h2 className="text-2xl md:text-3xl font-medium mb-4">

                Personalized Experience

              </h2>



              <p className="text-gray-400 mb-8 max-w-md">

                Providing an interactive experience tailored to user needs, creating more relevant and valuable conversations.

              </p>



              {/* Features list */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                {features.map((item, index) => (

                  <div key={index} className="flex items-center gap-3 text-gray-300">

                    <div className="text-white text-lg">{item.icon}</div>

                    <span>{item.text}</span>

                  </div>

                ))}

              </div>



              {/* Tags */}

              <div className="flex flex-wrap gap-3">

                {tags.map((tag, i) => (

                  <span

                    key={i}

                    className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition"

                  >

                    {tag}

                  </span>

                ))}

              </div>

            </div>



            {/* RIGHT VISUAL */}

            <div className="flex justify-center relative">

              

              {/* Glow behind */}

              <div className="absolute w-64 h-64 bg-white/10 blur-[120px] rounded-full opacity-30"></div>



              {/* Icon Card */}

              <div className="relative w-48 h-48 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden">

                

                {/* Grid lines effect */}

                <div className="absolute inset-0 opacity-10 z-10">

                  <div className="w-full h-full border border-white/10 rounded-2xl"></div>

                </div>



                {/* Center Image */}

                <Image

                  src="/images/p.jpg"

                  alt="Feature"

                  fill

                  sizes="(max-width: 768px) 100vw, 33vw"

                  className="object-cover"

                  loading="lazy"

                />

              </div>

            </div>



          </div>

        </div>

      </div>

    </section>

  );

}