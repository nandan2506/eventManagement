import React from 'react'

export default function StretigicSec() {
  return (
    <div>
      <section className="flex flex-col md:flex-row min-h-screen bg-black text-white">
        
        {/* LEFT SIDE: Content */}
        <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center">
          
          <h2 className="text-5xl md:text-7xl font-bold text-brand mb-12 leading-tight">
            Strategic Event <br />
            Management <br />
            <span className="opacity-80 font-normal">(Process)</span>
          </h2>

          <ul className="space-y-8">
            {/* Item 1 */}
            <li className="flex items-start">
              <span className="text-brand text-2xl mr-4 mt-1">•</span>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <strong className="text-white block mb-1">Concept & Strategy:</strong> 
                We start by understanding your brand's "Why" to ensure the theme aligns with your corporate objectives.
              </p>
            </li>

            {/* Item 2 */}
            <li className="flex items-start">
              <span className="text-brand text-2xl mr-4 mt-1">•</span>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <strong className="text-white block mb-1">Precision Planning:</strong> 
                Leveraging our engineering-led mindset for logistics, scheduling, and risk management.
              </p>
            </li>

            {/* Item 3 */}
            <li className="flex items-start">
              <span className="text-brand text-2xl mr-4 mt-1">•</span>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <strong className="text-white block mb-1">Execution:</strong> 
                On-site management that ensures a stress-free experience for the host and a captivating experience for the audience.
              </p>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="w-full md:w-1/2 min-h-[400px] relative">
          <img 
            src="/gallery/strategic.jpg" // Make sure to name your uploaded image 'strategic.jpg'
            alt="Strategic Event Setup" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          {/* Subtle blue gradient overlay to match the photo's vibe */}
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
        </div>
      </section>
    </div>
  )
}
