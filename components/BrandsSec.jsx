import React from "react";
import { brands } from "@/data/brands";

// Split brands into rows
const row1 = brands.slice(0, 6);
const row2 = brands.slice(6, 12);
const row3 = brands.slice(12, 18);

// Marquee Row
const MarqueeRow = ({ items, direction = "left", speed = "40s" }) => {
  return (
    <div className="relative flex overflow-hidden w-full group py-4">
      <div
        className={`flex gap-0 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items, ...items].map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="flex-shrink-0 flex items-center justify-center
                       w-40 h-24 md:w-44 md:h-28"
          >
            <img
              src={`/logos/${brand}`}
              alt={brand.replace(".png", "")}
              className="max-w-full max-h-full object-contain
                         transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black via-black/70 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black via-black/70 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default function BrandsSec() {
  return (
    <section className="bg-black py-24 min-h-[600px] flex flex-col justify-center overflow-hidden relative">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-4xl md:text-6xl font-bold text-brand uppercase tracking-wide">
          Brand Association
        </h2>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-6">
        <MarqueeRow items={row1} direction="left" speed="30s" />
        <MarqueeRow items={row2} direction="right" speed="40s" />
        <MarqueeRow items={row3} direction="left" speed="30s" />
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