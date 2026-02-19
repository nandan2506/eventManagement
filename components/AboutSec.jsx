import React from 'react'

export default function AboutSec() {
  return (
    <div>
      <section className="flex flex-col md:flex-row w-full min-h-[700px]">

        {/* LEFT SIDE: Text Content */}
        <div className="w-full md:w-1/2 bg-[#002B5C] p-10 md:p-24 flex flex-col justify-center md:justify-between relative">
          {/* Decorative Line */}
          <div className="w-20 h-1 bg-brand mb-8 md:mb-0"></div>

          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-brand uppercase tracking-tight mb-8">
              About Us
            </h2>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-xl">
              We are a collective of event professionals with a strong focus on design-led, brand-driven projects. We partner with brands to create experiences that are visually compelling, strategically aligned, and executed with precision—from concept to completion..
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="w-full md:w-1/2 min-h-[400px] relative">
          <img
            src="/gallery/about.jpg"
            alt="Event Engineering"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>
    </div>
  )
}
