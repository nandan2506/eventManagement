// app/page.jsx
"use client";

import Link from "next/link";
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

      {/* 1. Hero Section */}
      {/* scroll-mt-24 ensures the navbar doesn't cover the top of this section when clicked */}
      <section id="home" className="scroll-mt-24 bg-white py-24 px-6 text-center relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
            Find Events <span className="text-brand">Near You</span>
          </h1>
          <p className="text-black mb-10 text-lg md:text-xl max-w-2xl mx-auto">
            Book tickets for the hottest concerts, workshops, and meetups.
            Experience the extraordinary.
          </p>
          <Link
            href="/#services"
            className="inline-block bg-brand hover:bg-brand-dark text-black font-bold text-lg py-4 px-10 rounded-full transition-transform hover:scale-105 shadow-lg"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section id="about" className="scroll-mt-20">
        <AboutSec />
      </section>

      {/* 3. Video Section - No ID needed if not linked in Nav */}
      <VideoSec />

      {/* 4. Vision & Mission Section */}
      <section id="vision" className="scroll-mt-20">
        <VisionSec />
      </section>

      {/* 5. Core Service Pillars Section */}
      <section id="services" className="scroll-mt-20">
        <ServicSec />
      </section>

      {/* 6. Strategic Event Management Section */}
      <StretigicSec />

      {/* 7. Trusted by Industry Leaders Section */}
      <TrustedSec />

      {/* 8. Brand Association Section */}
      <section id="brands" className="scroll-mt-20">
        <BrandsSec />
      </section>

      {/* 9. Contact Us Section */}
      <section id="contact" className="scroll-mt-20">
        <ContactSec />
      </section>

      <Footer />
    </main>
  );
}