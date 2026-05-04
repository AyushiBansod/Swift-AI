"use client";

import { useState } from "react";
import { FiDroplet, FiTrendingUp, FiGlobe, FiTag } from "react-icons/fi";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      icon: <FiDroplet />,
      title: "Free Package",
      subtitle: "Best for personal use.",
      monthlyPrice: "FREE",
      yearlyPrice: "FREE",
      features: [
        "Basic AI Chatbot",
        "1 Integration",
        "Basic Analytics",
        "Predefined Templates",
        "Limited Customization",
      ],
    },
    {
      icon: <FiTrendingUp />,
      title: "Enterprise Package",
      subtitle: "Tailored for Large Enterprises",
      monthlyPrice: "$250",
      yearlyPrice: "$2500",
      features: [
        "Premium AI Chatbot",
        "Unlimited Integrations",
        "Comprehensive Analytics & Reporting",
        "24/7 Dedicated Support",
        "Enterprise-Grade Security",
      ],
    },
    {
      icon: <FiGlobe />,
      title: "Business Package",
      subtitle: "For Growing Businesses",
      monthlyPrice: "$120",
      yearlyPrice: "$1200",
      features: [
        "Advanced AI Chatbot",
        "Multiple Integrations",
        "Enhanced Analytics",
        "Customizable Chatbot Workflows",
        "Priority Support",
      ],
    },
  ];

  return (
    <section className="relative bg-black text-white pt-8 pb-28 px-4 overflow-hidden">
      

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-sm text-gray-300 mb-6">
          <FiTag /> Pricing
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight" style={{ fontFamily: 'var(--font-dosis), sans-serif' }}>
          Choose the perfect plan to fit your business <br />
          goals and budget
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          Whether you're just getting started or looking to scale, we offer flexible pricing options that grow with you. Find the plan that works best for your needs and start experiencing the benefits of intelligent automation today.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex bg-white/10 border border-white/20 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full text-sm transition ${
                billing === "monthly"
                  ? "bg-white text-black"
                  : "text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full text-sm transition ${
                billing === "yearly"
                  ? "bg-white text-black"
                  : "text-gray-300"
              }`}
            >
              Annually
            </button>
          </div>
        </div>
        

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-left hover:bg-white/10 transition"
            >
              
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 mb-6 text-lg">
                {plan.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl mb-1">{plan.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>

              <div className="border-t border-white/10 my-6"></div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-light">
                  {billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                {(billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice) !== "FREE" && (
                  <span className="text-gray-400 text-sm ml-2">
                    / {billing === "monthly" ? "per month" : "per year"}
                  </span>
                )}
              </div>

              <div className="border-t border-white/10 my-6"></div>

              {/* Features */}
              <h4 className="mb-4 text-gray-300">What you will get</h4>

              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white mt-1">◦</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Get Started Button */}
              <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}