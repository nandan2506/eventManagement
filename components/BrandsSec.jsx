"use client";
import React from "react";
import { brands } from "@/data/brands";

// Split brands into rows
const row1 = brands.slice(0, 6);
const row2 = brands.slice(6, 12);
const row3 = brands.slice(12, 18);

// Shared Marquee Row
const MarqueeRow = ({ items, direction = "left", speed = "40s" }) => {
  return (
    <div className="relative flex overflow-hidden w-full group py-4 md:py-6">
      <div
        className={`flex gap-6 md:gap-12 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items, ...items].map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="
              flex-shrink-0 flex items-center justify-center
              w-28 h-14         
              md:w-35 md:h-14
            "
          >
            <img
              src={`/logos/${brand}`}
              alt={brand.replace(".png", "")}
              className="
                max-h-8 md:max-h-full   
                w-auto object-contain
                opacity-80 hover:opacity-100
                transition-all duration-300
                hover:scale-[1.15]
              "
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="absolute top-0 left-0 h-full w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const MarqueeRow2 = ({ items, direction = "left", speed = "40s" }) => {
  return (
    <div className="relative flex overflow-hidden w-full group py-4 md:py-6">
      <div
        className={`flex gap-8 md:gap-12 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items, ...items].map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="
              flex-shrink-0 flex items-center justify-center
              w-28 h-14         
              md:w-35 md:h-14  
            "
          >
            <img
              src={`/logos/${brand}`}
              alt={brand.replace(".png", "")}
              className="
                max-h-10 md:max-h-full   
                w-auto object-contain
                opacity-80 hover:opacity-100
                transition-all duration-300
                hover:scale-[1.15]
              "
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="absolute top-0 left-0 h-full w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};


const MarqueeRow3 = ({ items, direction = "left", speed = "40s" }) => {
  return (
    <div className="relative flex overflow-hidden w-full group py-4 md:py-6">
      <div
        className={`flex gap-4 md:gap-10 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items, ...items].map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="
              flex-shrink-0 flex items-center justify-center
              w-28 h-14         
              md:w-35 md:h-15
            "
          >
            <img
              src={`/logos/${brand}`}
              alt={brand.replace(".png", "")}
              className="
                max-h-11 md:max-h-full   
                w-auto object-contain
                opacity-80 hover:opacity-100
                transition-all duration-300
                hover:scale-[1.15]
              "
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="absolute top-0 left-0 h-full w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default function BrandsSec() {
  return (
    <section className="bg-black py-16 min-h-[100px] flex flex-col justify-center overflow-hidden relative">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-brand uppercase tracking-wide">
          Brand Association
        </h2>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-10">
        <MarqueeRow items={row1} direction="left" speed="30s" />
        <MarqueeRow2 items={row2} direction="right" speed="40s" />
        <MarqueeRow3 items={row3} direction="left" speed="35s" />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </section>
  );
}