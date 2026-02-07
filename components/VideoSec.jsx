import React from 'react'

export default function VideoSec() {
  return (
    <div>
      <section className="relative w-full bg-black overflow-hidden group">
        <div className="w-full h-[500px] md:h-[650px] relative">
          <video 
            className="w-full h-full object-cover opacity-90" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/gallery/vid.mp4" type="video/mp4" />
          </video>

          {/* Dark Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

          {/* Floating Text Overlay */}
          <div className="absolute bottom-12 left-6 md:left-16 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
             <span className="bg-brand text-[#002B5C] px-3 py-1 font-bold tracking-widest uppercase text-xs rounded mb-3 inline-block">
                Vibe Check
             </span>
             <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Live the Moment
             </h2>
          </div>
        </div>
      </section>
    </div>
  )
}
