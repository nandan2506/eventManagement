import React from "react";

export default function VideoSec() {
  return (
    <div>
      <section className="relative w-full  bg-black overflow-hidden group">
        {/* Adjusted mobile height to 'h-screen' so it looks good on phones, and fixed height for desktop */}
        <div className="w-full  md:h-[650px] relative">
          {/* 1. DESKTOP VIDEO (Visible only on medium screens and up) */}
          <video
            className="hidden md:block w-full h-full object-cover opacity-90"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/gallery/vid.mov" type="video/mp4" />
          </video>

          {/* 2. MOBILE VIDEO (Visible only on small screens) */}

          <video
            className="block md:hidden w-full  object-cover opacity-90"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/gallery/m_vid.MOV" type="video/mp4" />
          </video>

          {/* Dark Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

          {/* Floating Text Overlay */}
          <div className="absolute bottom-12 left-6 md:left-16 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          </div>
        </div>
      </section>
    </div>
  );
}
