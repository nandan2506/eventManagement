import React from 'react'
import MobileServiceItem from './MobileServiceItem'

export default function ServicSec() {
  return (
    <div>
      
      <section className="flex flex-col lg:flex-row min-h-screen bg-[#FFF8E7]">
        
        {/* LEFT SIDE: Content & Chart */}
        <div className="w-full lg:w-3/5 p-8 md:p-16 flex flex-col justify-center">
          
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-bold text-[#002B5C] mb-6 leading-tight">
              Our Service
            </h2>
            <p className="text-[#002B5C]/80 text-lg max-w-xl font-medium">
              We provide a 360-degree approach to brand visibility and corporate engagement.
            </p>
          </div>

          {/* DESKTOP TIMELINE VISUALIZATION (Hidden on mobile) */}
          <div className="hidden md:flex flex-row justify-between items-end relative h-[400px] w-full pt-10">
            
            {/* The Horizontal Axis Line */}
            <div className="absolute bottom-10 left-0 w-full h-[2px] bg-black">
               <div className="absolute right-0 -top-1.5 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-black border-b-[6px] border-b-transparent"></div>
            </div>

            {/* Service 1 */}
            <div className="flex flex-col justify-end h-full w-1/5 group relative">
               <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform">
                 <p className="text-brand font-bold text-sm leading-snug">
                   Trade Shows, Product Launches, Exhibitions, and Sampling Campaigns.
                 </p>
               </div>
               {/* Dotted Line */}
               <div className="h-24 border-l-2 border-dashed border-black mx-auto"></div>
               {/* Dot on Axis */}
               <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10"></div>
               {/* Label */}
               <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10">
                 BTL & <br/> Activation
               </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col justify-end h-full w-1/5 group relative pb-12"> {/* pb-12 pushes it up for staggered look */}
               <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform">
                 <p className="text-brand font-bold text-sm leading-snug">
                   MICE, Annual Days, Conferences, and Festival Event Production.
                 </p>
               </div>
               <div className="h-32 border-l-2 border-dashed border-black mx-auto"></div>
               <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10"></div>
               <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10 absolute -bottom-12 w-full">
                 Corporate <br/> Events
               </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col justify-end h-full w-1/5 group relative">
               <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform">
                 <p className="text-brand font-bold text-sm leading-snug">
                   Mall Promotions, Outdoor Advertising, Pop-Up Experiences.
                 </p>
               </div>
               <div className="h-20 border-l-2 border-dashed border-black mx-auto"></div>
               <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10"></div>
               <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10">
                 Corporate <br/> Events
               </p>
            </div>

             {/* Service 4 */}
             <div className="flex flex-col justify-end h-full w-1/5 group relative pb-8">
               <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform">
                 <p className="text-brand font-bold text-sm leading-snug">
                   Social Media Campaigns, Influencer Marketing, SEO, Strategy.
                 </p>
               </div>
               <div className="h-28 border-l-2 border-dashed border-black mx-auto"></div>
               <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10"></div>
               <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10 absolute -bottom-8 w-full">
                 Digital <br/> Marketing
               </p>
            </div>

             {/* Service 5 */}
             <div className="flex flex-col justify-end h-full w-1/5 group relative">
               <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform">
                 <p className="text-brand font-bold text-sm leading-snug">
                   Luxury Gift Boxes, Eco-Friendly Gifts, and Branded Stationery.
                 </p>
               </div>
               <div className="h-16 border-l-2 border-dashed border-black mx-auto"></div>
               <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10"></div>
               <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10">
                 Corporate <br/> Gifting
               </p>
            </div>
          </div>

          {/* MOBILE LIST (Visible only on mobile) */}
          <div className="md:hidden space-y-6">
             <MobileServiceItem title="BTL & Activation" desc="Trade Shows, Product Launches, Exhibitions, and Sampling Campaigns." />
             <MobileServiceItem title="Corporate Events" desc="MICE, Annual Days, Conferences, and Festival Event Production." />
             <MobileServiceItem title="Corporate Events" desc="Mall Promotions, Outdoor Advertising, Pop-Up Experiences, and Media Partnerships." />
             <MobileServiceItem title="Digital Marketing" desc="Social Media Campaigns, Influencer Marketing, SEO, and Content Strategy." />
             <MobileServiceItem title="Corporate Gifting" desc="Luxury Gift Boxes, Eco-Friendly Gifts, and Branded Stationery." />
          </div>

        </div>

        {/* RIGHT SIDE: Image */}
        <div className="w-full lg:w-2/5 relative min-h-[400px]">
          <img 
            src="/gallery/levis.jpg" // Ensure you save the image as levi.jpg or update this path
            alt="Levis Event" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}
