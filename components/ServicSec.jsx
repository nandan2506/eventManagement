"use client";

import React from "react";
import MobileServiceItem from "./MobileServiceItem";

// 1. Correct Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// 2. Import Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";

// 3. Import your images
import { serviceImages } from "@/data/images";

export default function ServicSec() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen bg-[#FFF8E7] overflow-hidden">
      
      {/* LEFT SIDE: Content & Chart (Takes up 60% on Desktop) */}
      <div className="w-full lg:w-3/5 p-8 md:p-16 flex flex-col justify-center">
        
        <div className="mb-16">
          <div className="w-16 h-1 bg-brand mb-6"></div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#002B5C] mb-6 leading-tight tracking-tight">
            Our Services
          </h2>
          <p className="text-[#002B5C]/80 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            We provide a 360-degree approach to brand visibility and corporate engagement.
          </p>
        </div>

        {/* DESKTOP TIMELINE VISUALIZATION (Hidden on mobile) */}
        <div className="hidden md:flex flex-row justify-between items-end relative h-[400px] w-full pt-10">
          
          {/* Axis Line */}
          <div className="absolute bottom-10 left-0 w-full h-[2px] bg-black">
            <div className="absolute right-0 -top-1.5 w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-black border-b-[6px] border-b-transparent"></div>
          </div>

          {/* Service 1 */}
          <div className="flex flex-col justify-end h-full w-1/5 group relative">
            <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand font-bold text-sm leading-snug">
                Trade Shows, Product Launches, Exhibitions, and Sampling Campaigns.
              </p>
            </div>
            <div className="h-24 border-l-2 border-dashed border-black mx-auto"></div>
            <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10 transition-transform group-hover:scale-150"></div>
            <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10">
              BTL & <br /> Activation
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col justify-end h-full w-1/5 group relative pb-12">
            <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand font-bold text-sm leading-snug">
                MICE, Annual Days, Conferences, and Festival Event Production.
              </p>
            </div>
            <div className="h-32 border-l-2 border-dashed border-black mx-auto"></div>
            <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10 transition-transform group-hover:scale-150"></div>
            <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10 absolute -bottom-12 w-full">
              Corporate <br /> Events
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col justify-end h-full w-1/5 group relative pb-8">
            <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand font-bold text-sm leading-snug">
                Social Media Campaigns, Influencer Marketing, SEO, Strategy.
              </p>
            </div>
            <div className="h-28 border-l-2 border-dashed border-black mx-auto"></div>
            <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10 transition-transform group-hover:scale-150"></div>
            <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10 absolute -bottom-8 w-full">
              Digital <br /> Marketing
            </p>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col justify-end h-full w-1/5 group relative">
            <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand font-bold text-sm leading-snug">
                Mall Promotions, Outdoor Advertising, Pop-Up Experiences.
              </p>
            </div>
            <div className="h-20 border-l-2 border-dashed border-black mx-auto"></div>
            <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10 transition-transform group-hover:scale-150"></div>
            <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10">
              Mall <br /> Promotions
            </p>
          </div>

          {/* Service 5 */}
          <div className="flex flex-col justify-end h-full w-1/5 group relative">
            <div className="mb-4 bg-black p-3 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transform group-hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand font-bold text-sm leading-snug">
                Luxury Gift Boxes, Eco-Friendly Gifts, and Branded Stationery.
              </p>
            </div>
            <div className="h-16 border-l-2 border-dashed border-black mx-auto"></div>
            <div className="w-3 h-3 bg-black rounded-full mx-auto -mb-1.5 relative z-10 transition-transform group-hover:scale-150"></div>
            <p className="mt-6 text-[#002B5C] font-bold text-sm text-center h-10">
              Corporate <br /> Gifting
            </p>
          </div>
        </div>

        {/* MOBILE LIST */}
        <div className="md:hidden space-y-6">
          <MobileServiceItem
            title="BTL & Activation"
            desc="Trade Shows, Product Launches, Exhibitions, and Sampling Campaigns."
          />
          <MobileServiceItem
            title="Corporate Events"
            desc="MICE, Annual Days, Conferences, and Festival Event Production."
          />
          <MobileServiceItem
            title="Digital Marketing"
            desc="Social Media Campaigns, Influencer Marketing, SEO, and Content Strategy."
          />
          <MobileServiceItem
            title="Mall Promotions"
            desc="Mall Promotions, Outdoor Advertising, Pop-Up Experiences, and Media Partnerships."
          />
          <MobileServiceItem
            title="Corporate Gifting"
            desc="Luxury Gift Boxes, Eco-Friendly Gifts, and Branded Stationery."
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-12">
        
        {/* Floating Card Wrapper */}
        <div className="relative w-full max-w-md lg:max-w-lg h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,43,92,0.3)] z-10 bg-[#002B5C] border-[6px] border-white">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            speed={1500}
            autoplay={{ delay:1000, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={false}
            className="h-full w-full"
          >
            {serviceImages.map((src, index) => (
              <SwiperSlide key={index} className="h-full w-full">
                <img
                  src={src}
                  alt={`Service Showcase ${index + 1}`}
                  className="w-full h-full object-cover scale-105"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C]/80 via-transparent to-transparent"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}