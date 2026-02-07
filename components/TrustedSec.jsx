import React from 'react'

export default function TrustedSec() {
  return (
    <div>
      <section className="flex flex-col md:flex-row min-h-screen bg-[#002B5C] text-white">
        
        {/* LEFT SIDE: Content */}
        <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center">
          
          <h2 className="text-5xl md:text-7xl font-bold text-brand mb-4 leading-tight">
            Trusted by <br />
            Industry <br />
            Leaders
          </h2>
          
          <p className="text-brand/90 text-xl font-medium mb-12">
            A Legacy of Successful Brand Associations.
          </p>

          <div className="space-y-2">
            <h3 className="text-white/60 font-medium text-lg mb-6 uppercase tracking-wider">Featured Clients:</h3>
            
            <ul className="space-y-5">
              {/* Client Category 1 */}
              <li className="flex items-start">
                <span className="text-brand text-xl mr-3 mt-1">•</span>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                  <strong className="text-white">Tech & Electronics:</strong> Sony, Vivo, Apple, Panasonic, Infinix, Tecno.
                </p>
              </li>

              {/* Client Category 2 */}
              <li className="flex items-start">
                <span className="text-brand text-xl mr-3 mt-1">•</span>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                  <strong className="text-white">Automotive:</strong> Volvo, MG, Hero.
                </p>
              </li>

              {/* Client Category 3 */}
              <li className="flex items-start">
                <span className="text-brand text-xl mr-3 mt-1">•</span>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                  <strong className="text-white">Lifestyle & Retail:</strong> Levi’s, United Colors of Benetton, Innisfree.
                </p>
              </li>

              {/* Client Category 4 */}
              <li className="flex items-start">
                <span className="text-brand text-xl mr-3 mt-1">•</span>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                  <strong className="text-white">Corporate & Finance:</strong> Paytm, DLF, Ingram, NHRD.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="w-full md:w-1/2 min-h-[400px] relative">
          <img 
            src="/gallery/trusted.jpg" // Make sure to name your uploaded image 'trusted.jpg'
            alt="Paytm Event Performance" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay to ensure text/image blend nicely if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] via-transparent to-transparent opacity-50 md:opacity-0"></div>
        </div>
      </section>
    </div>
  )
}
