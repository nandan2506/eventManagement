import React from 'react';
import { brands } from '@/data/brands';


// 1. Split the brands into 3 chunks for the 3 rows

const row1 = brands.slice(0, 4);
const row2 = brands.slice(0, 4);
const row3 = brands.slice(0, 4);

// 2. Helper Component for a single Marquee Row
const MarqueeRow = ({ items, direction = "left", speed = "40s" }) => {
  return (
    <div className="relative flex overflow-hidden w-full group">
      {/* We duplicate the list ([...items, ...items, ...items]) to ensure 
         there is enough content to scroll infinitely without gaps.
      */}
      <div
        className={`flex gap-6 py-4 w-max ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items, ...items, ...items].map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="w-48 h-24 flex-shrink-0 bg-white/5 border border-white/10 hover:border-brand/50 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300"
          >
            {/* PLACEHOLDER: Replace <span /> with <img /> when ready.
                Example: <img src={`/logos/${brand}.png`} className="h-10 w-auto object-contain grayscale hover:grayscale-0" />
             */}
            {/* <span className="text-gray-400 font-bold text-xl">{brand}</span> */}
            <img src={`/logos/${brand}.png`} className="h-10 w-auto object-contain " />
          </div>
        ))}
      </div>

      {/* Fade Gradients on sides for smooth look */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default function BrandsSec() {
  return (
    <div>
      {/* CSS Styles for the animation */}
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

      <section className="bg-black py-20 px-0 min-h-[600px] flex flex-col justify-center overflow-hidden">

        <div className="w-full text-center">

          {/* Title */}
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold text-brand uppercase mb-16 tracking-wide">
              Brand Association
            </h2>
          </div>

          {/* Marquee Rows Container */}
          <div className="flex flex-col">

            {/* ROW 1: Moves Left */}
            <MarqueeRow items={row1} direction="left" speed="40s" />

            {/* ROW 2: Moves Right */}
            <MarqueeRow items={row2} direction="right" speed="45s" />

            {/* ROW 3: Moves Left */}
            <MarqueeRow items={row3} direction="left" speed="50s" />

          </div>

        </div>
      </section>
    </div>
  );
}