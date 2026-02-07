// app/page.jsx
"use client";

import Link from "next/link";
import { events } from '@/data/events';
import VideoSec from "@/components/VideoSec";
import AboutSec from "@/components/AboutSec";
import VisionSec from "@/components/VisionSec";
import ServicSec from "@/components/ServicSec";
import StretigicSec from "@/components/StretigicSec";
import TrustedSec from "@/components/TrustedSec";
import BrandsSec from "@/components/BrandsSec";
import ContactSec from "@/components/ContactSec";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* 1. Hero Section - Updated to match Brand Navy */}
      <section className="bg-[#002B5C] py-24 px-6 text-center relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Find Events <span className="text-brand">Near You</span>
          </h1>
          <p className="text-blue-100 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
            Book tickets for the hottest concerts, workshops, and meetups.
            Experience the extraordinary.
          </p>
          <Link
            href="/events"
            className="inline-block bg-brand hover:bg-[#e0a340] text-[#002B5C] font-bold text-lg py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* 2. Video Section */}
      <VideoSec />

      {/* 3. About Us Section - Split Layout */}
      <AboutSec />

      {/* 4. Vision & Mission Section */}
      <VisionSec />

      {/* 5. Core Service Pillars Section */}
      <ServicSec />

      {/* 6. Strategic Event Management Section */}
      <StretigicSec />


      {/* 7. Trusted by Industry Leaders Section */}
      <TrustedSec />


      {/* 8. Brand Association Section */}
      <BrandsSec />


      {/* 9. Contact Section */}
      {/* <ContactSec /> */}

      <Footer />

      {/* 6. Events Grid */}
      {/* <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-brand font-bold tracking-widest uppercase text-sm">Don't Miss Out</span>
            <h2 className="text-4xl font-bold text-[#002B5C] mt-2">Upcoming Events</h2>
          </div>
          <Link href="/events" className="hidden md:inline-block text-[#002B5C] font-bold hover:text-brand transition-colors">
            View All Events &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col h-full">

              <div className="h-56 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold shadow-sm text-[#002B5C]">
                  {event.price === 0 ? "FREE ENTRY" : `₹${event.price}`}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-brand font-bold text-xs tracking-wider uppercase mb-2">
                    {event.date} • {event.location}
                  </p>
                  <h3 className="text-2xl font-bold text-[#002B5C] mb-2 leading-tight group-hover:text-brand transition-colors">
                    {event.title}
                  </h3>
                </div>

                <div className="mt-auto">
                  <Link
                    href={`/events/${event.id}`}
                    className="block w-full text-center bg-[#002B5C] hover:bg-brand hover:text-[#002B5C] text-white font-bold py-4 rounded-xl transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/events" className="inline-block border-2 border-[#002B5C] text-[#002B5C] font-bold py-3 px-8 rounded-full hover:bg-[#002B5C] hover:text-white transition-colors">
            View All Events
          </Link>
        </div>
      </section> */}
    </main>
  );
}