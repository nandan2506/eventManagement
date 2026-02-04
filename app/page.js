// app/page.jsx
"use client"; // <--- Required for Swiper animations

import Link from "next/link";
import { events } from '@/data/events';

// 1. IMPORT SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// 2. IMPORT SWIPER STYLES
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Home() {

  const galleryImages = [
    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Find Events <span className="text-brand">Near You</span>
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          Book tickets for the hottest concerts, workshops, and meetups.
        </p>
      </section>

      {/* NEW: Infinite 3D Gallery Section */}
      <section className="bg-black py-16 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="text-brand font-bold tracking-widest uppercase text-xs">Vibe Check</span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Captured Moments
          </h2>
        </div>

        {/* SWIPER COMPONENT */}
        <div className="w-full max-w-6xl mx-auto px-4">
          <style jsx global>{`
            /* Custom CSS to handle the Blur Effect on non-active slides */
            .swiper-slide {
              transition: all 0.5s ease;
              filter: blur(4px); /* Default state: blurred */
              opacity: 0.5;
              transform: scale(0.8);
            }
            .swiper-slide-active {
              filter: blur(0px) !important; /* Active state: sharp */
              opacity: 1 !important;
              transform: scale(1) !important;
              z-index: 10;
            }
          `}</style>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0, // No rotation, keeping it modern/flat
              stretch: 0,
              depth: 150, // Depth creates the 3D feel
              modifier: 2.5,
              slideShadows: false, // Disable default shadow to use our own blur logic
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full py-10"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide
                key={index}
                className="!w-[300px] md:!w-[500px] !h-[300px] md:!h-[400px] relative rounded-2xl overflow-hidden border border-gray-800"
              >
                <img
                  src={src}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover"
                />

                {/* Overlay only visible on the active/center slide (controlled by CSS parent) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-brand font-bold text-lg">#EventLife</span>
                    <p className="text-gray-300 text-sm mt-1">Live the moment</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Events Grid */}
      <section className="p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-slate-800 border-l-4 border-brand pl-4">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {event.price === 0 ? "FREE" : `₹${event.price}`}
                </div>
              </div>

              <div className="p-6">
                <p className="text-brand font-bold text-xs tracking-wider uppercase mb-2">
                  {event.date} • {event.location}
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors">
                  {event.title}
                </h3>

                <Link
                  href={`/events/${event.id}`}
                  className="mt-4 inline-block w-full text-center bg-slate-900 hover:bg-brand hover:text-slate-900 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}