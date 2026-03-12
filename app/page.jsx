"use client";

import { useState } from "react"; // 1. Added missing import
import VideoSec from "@/components/VideoSec";
import AboutSec from "@/components/AboutSec";
import VisionSec from "@/components/VisionSec";
import ServicSec from "@/components/ServicSec";
import StretigicSec from "@/components/StretigicSec";
import TrustedSec from "@/components/TrustedSec";
import BrandsSec from "@/components/BrandsSec";
import ContactSec from "@/components/ContactSec";
import Footer from "@/components/Footer";
import FeaturedSwiper from "@/components/gallery/FeaturedSwiper";
import { galleryImages, galleryItems } from "@/data/images";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Lightbox from "@/components/gallery/Lightbox";

// This can stay outside as it's a static transformation
const swiperFormattedImages = galleryImages.map((src, index) => ({
  src: src,
  title: `Featured Highlight ${index + 1}`,
  category: "Featured Event",
}));

export default function Home() {
  // 2. Logic moved INSIDE the component function
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (imagesArray, index) => {
    setLightboxImages(imagesArray);
    setLightboxIndex(index);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

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
      <section id="vision" className="scroll-mt-20 mt-20">
        <VisionSec />
      </section>

      {/* Core Service Pillars Section */}
      <section id="services" className="scroll-mt-20 mt-20">
        <ServicSec />
      </section>

      {/* Strategic Event Management Section */}
      <section id="strategic" className="scroll-mt-20 mt-20">
        <StretigicSec />
      </section>

      {/* Trusted by Industry Leaders Section */}
      <section id="trusted" className="scroll-mt-20">
        <TrustedSec />
      </section>
      

      <section>
        <FeaturedSwiper 
          swiperFormattedImages={swiperFormattedImages} 
          onImageClick={openLightbox} 
        />
        
        {/* <GalleryGrid 
          allItems={galleryItems} 
          onImageClick={openLightbox} 
        /> */}
        
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </section>

      {/* Brand Association Section */}
      <section id="brands" className="scroll-mt-20 mt-20">
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