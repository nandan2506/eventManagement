// components/gallery/FeaturedSwiper.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function FeaturedSwiper({ swiperFormattedImages, onImageClick }) {
  return (
    <section className="bg-black py-16 border-b border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-brand font-bold tracking-widest uppercase text-xs">
          {/* Vibe Check */}
        </span>
        <h2 className="text-3xl font-bold text-white mt-2">
          Captured Moments
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4">
        <style dangerouslySetInnerHTML={{__html: `
          .swiper-slide {
            transition: all 0.5s ease;
            filter: blur(4px);
            opacity: 0.5;
            transform: scale(0.8);
          }
          .swiper-slide-active {
            filter: blur(0px) !important;
            opacity: 1 !important;
            transform: scale(1) !important;
            z-index: 10;
          }
          .swiper-slide-active:hover {
            transform: scale(1.05) !important;
          }
        `}} />

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{ 
            delay: 2500, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full py-10"
        >
          {swiperFormattedImages.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => onImageClick(swiperFormattedImages, index)}
              className="!w-[300px] md:!w-[500px] !h-[300px] md:!h-[400px] relative rounded-2xl overflow-hidden border border-gray-800 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-auto h-58 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6 pointer-events-none">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  {/* <span className="text-brand font-bold text-lg">
                    #EventLife
                  </span>
                  <p className="text-gray-300 text-sm mt-1">
                    Live the moment
                  </p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}