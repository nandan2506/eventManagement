import React from 'react'

export default function VisionSec() {
  return (
    <div>
      <section className="flex flex-col md:flex-row bg-[#FFF8E7] text-[#002B5C] relative overflow-hidden min-h-[800px]">
        
        {/* LEFT SIDE: Vertical Sidebar Title (FIXED) */}
        {/* We use 'relative' on parent and 'absolute' on text to center it perfectly without clipping */}
        <div className="hidden md:flex w-32 bg-[#002B5C]/5 relative items-center justify-center border-r border-[#002B5C]/10">
          <h2 className="absolute text-8xl font-black tracking-widest uppercase opacity-20 whitespace-nowrap -rotate-90 text-[#002B5C]">
            Our Plan
          </h2>
        </div>

        {/* Mobile Title */}
        <div className="md:hidden p-8 pb-0">
          <h2 className="text-5xl font-bold tracking-tight uppercase text-[#002B5C]">Our Plan</h2>
        </div>

        {/* RIGHT SIDE: Content Area */}
        <div className="flex-1 p-8 md:p-24 flex flex-col justify-center">
          
          {/* VISION */}
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-brand"></span> Vision
            </h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl text-[#002B5C]/80 pl-4 md:pl-16 border-l-4 border-brand/20">
              To be the global benchmark in experiential event management, recognized for transforming 
              corporate visions into immersive realities through a 
              <span className="font-bold text-[#002B5C]"> perfect blend of innovation, engineering precision, and creative storytelling.</span>
            </p>
          </div>

          {/* MISSION */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-brand"></span> Mission
            </h3>
            
            <div className="pl-4 md:pl-16">
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl text-[#002B5C]/80 mb-10">
                Our mission is to deliver flawless execution and impact-driven strategies by leveraging a 
                structured, detail-oriented approach to event planning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                {['Customization', 'Connection', 'Excellence', 'Seamless Experience'].map((item, i) => (
                   <div key={i} className="flex items-start p-4 bg-white/50 rounded-xl border border-[#002B5C]/5 hover:bg-white hover:shadow-md transition-all">
                      <span className="text-brand text-2xl mr-3 mt-1">•</span>
                      <div>
                        <strong className="block text-xl font-bold mb-1">{item}</strong>
                        <span className="text-sm text-[#002B5C]/70">Delivering high quality {item.toLowerCase()} in every aspect of our work.</span>
                      </div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
