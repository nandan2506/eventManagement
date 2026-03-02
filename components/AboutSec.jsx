"use client";

import React from "react";
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { aboutImages } from "../data/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function AboutSec() {
  // Replace these URLs with your actual image paths from your public folder

  return (
    <section className="relative w-full overflow-hidden bg-[#002B5C] py-20 md:py-32 z-0">
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Massive Faint Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[8rem] md:text-[16rem] font-black text-white/[0.03] whitespace-nowrap pointer-events-none -z-10 select-none">
        ABOUT US
      </div>
      {/* Soft Glow Accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* --- LEFT: MODERN IMAGE CAROUSEL --- */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          {/* Offset Decorative Gold Border */}
          {/* <div className="absolute inset-0 border-2 border-brand rounded-2xl translate-x-5 translate-y-5 md:translate-x-6 md:translate-y-6 pointer-events-none -z-10 transition-transform duration-500 hover:translate-x-2 hover:translate-y-2"></div> */}

          {/* Image Container */}
          <div className="relative w-full max-w-md h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 bg-[#002B5C]">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              speed={1500}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              loop={true}
              allowTouchMove={false}
              className="h-full w-full"
            >
              {aboutImages.map((src, index) => (
                <SwiperSlide key={index} className="h-full w-full">
                  <img
                    src={src}
                    alt={`About Us Image ${index + 1}`}
                    className="w-full h-full object-cover scale-105" // scale-105 prevents edge flickering during fades
                  />
                  {/* Subtle dark overlay to blend the images beautifully into the navy background */}
                  <div className="absolute inset-0 bg-[#002B5C]/20 mix-blend-overlay"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* --- RIGHT: EXACT ORIGINAL CONTENT --- */}
        <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
          {/* Accent Line */}
          <div className="w-20 h-1.5 bg-brand mb-8 mx-auto md:mx-0 rounded-full shadow-[0_0_10px_rgba(242,198,121,0.5)]"></div>

          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight mb-8 leading-tight drop-shadow-lg">
            About <span className="text-brand">Us</span>
          </h2>

          {/* Exact Paragraph provided by you */}
          <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0 font-light tracking-wide">
            We are a collective of event professionals with a strong focus on
            design-led, brand-driven projects. We partner with brands to create
            experiences that are visually compelling, strategically aligned, and
            executed with precision — from concept to completion.
          </p>
        </div>
      </div>
    </section>
  );
}
