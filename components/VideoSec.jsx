import React from "react";

export default function VideoSec() {
  return (
    <div>
      <section className="relative w-full bg-black overflow-hidden group">
        
        {/* FIX 1: Added h-[100svh] for mobile. 
            (svh = small viewport height, which ignores mobile browser search bars) */}
        <div className="w-full h-[540px] md:h-[650px] relative">
          
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
            // FIX 2: Added 'h-full' so it immediately fills the h-[100svh] space
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

          
          
        </div>
      </section>
    </div>
  );
}