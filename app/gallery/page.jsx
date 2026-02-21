// app/gallery/page.jsx
"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { galleryImages, galleryItems } from "@/data/images";

// Import our new extracted components
import Lightbox from "@/components/gallery/Lightbox";
import FeaturedSwiper from "@/components/gallery/FeaturedSwiper";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  // Master state for the Lightbox
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Pre-format the Swiper images
  const swiperFormattedImages = galleryImages.map((src, index) => ({
    src: src,
    title: `Featured Highlight ${index + 1}`,
    category: "Featured Event",
  }));

  // Handlers to pass down to children
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
    <main className="min-h-screen bg-slate-50 relative">
      {/* 1. Hero Section (Kept inline as it is just static UI) */}
      <section className="bg-[#002B5C] py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 "></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest uppercase text-sm">
            Our Work
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white">
            Capturing the <span className="text-brand">Extraordinary</span>
          </h1>
          <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
            A visual journey through the immersive experiences, grand stages,
            and unforgettable moments we have engineered for our clients.
          </p>
        </div>
      </section>

      {/* 2. Featured Swiper Component */}
      <FeaturedSwiper 
        swiperFormattedImages={swiperFormattedImages} 
        onImageClick={openLightbox} 
      />

      {/* 3. Filterable Grid Component */}
      <GalleryGrid 
        allItems={galleryItems} 
        onImageClick={openLightbox} 
      />

      {/* 4. Lightbox Component */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <Footer />
    </main>
  );
}