// app/page.jsx

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
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-white scroll-mt-24">
        <VideoSec />
      </section>

      {/* About Us Section */}
      <section id="about" className="scroll-mt-20">
        <AboutSec />
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="scroll-mt-20">
        <VisionSec />
      </section>

      {/* Core Service Pillars Section */}
      <section id="services" className="scroll-mt-20">
        <ServicSec />
      </section>

      {/* Strategic Event Management Section */}
      <section id="strategic" className="scroll-mt-20">
        <StretigicSec />
      </section>

      {/* Trusted by Industry Leaders Section */}
      <section id="trusted" className="scroll-mt-20">
        <TrustedSec />
      </section>

      {/* Brand Association Section */}
      <section id="brands" className="scroll-mt-20">
        <BrandsSec />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="scroll-mt-20">
        <ContactSec />
      </section>

      <Footer />
    </main>
  );
}