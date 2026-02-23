import React from "react";

export default function AboutSec() {
  return (
    <section className="relative w-full overflow-hidden bg-[#002B5C]">
      {/* Soft background accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-brand/20 rounded-full blur-3xl" />

      <div className="flex flex-col md:flex-row w-full min-h-[700px] px-8 md:px-24 py-16 md:py-24 gap-12 items-center">
        
        {/* LEFT: Image Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full max-w-md h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur">
            <img
              src="/gallery/profilePhoto.jpeg"
              alt="Profile Photo"
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Accent Line */}
          <div className="w-16 h-1 bg-brand mb-6 mx-auto md:mx-0"></div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-brand uppercase tracking-tight mb-6 leading-tight">
            About Us
          </h2>

          <p className="text-blue-100/90 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            We are a collective of event professionals with a strong focus on
            design-led, brand-driven projects. We partner with brands to create
            experiences that are visually compelling, strategically aligned,
            and executed with precision — from concept to completion.
          </p>

          {/* CTA (optional but great UX) */}
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[#002B5C] font-semibold hover:scale-105 transition-transform">
            Learn More
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}