// components/gallery/Lightbox.jsx
"use client";

import { useEffect } from "react";

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  // KEYBOARD & SCROLL EFFECTS
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") onNext();
        if (e.key === "ArrowLeft") onPrev();
      };
      
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !images || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
        aria-label="Close Lightbox"
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Left Arrow Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-brand transition-colors p-2 z-50 bg-black/20 hover:bg-black/50 rounded-full"
        aria-label="Previous Image"
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Current Image Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center px-10"
        onClick={(e) => e.stopPropagation()} 
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
        />
        <div className="mt-6 text-center">
          {/* <h3 className="text-2xl font-bold text-white">
            {images[currentIndex].title}
          </h3> */}
          <p className="text-brand font-bold uppercase tracking-widest text-sm mt-2">
            {images[currentIndex].category}
          </p>
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-brand transition-colors p-2 z-50 bg-black/20 hover:bg-black/50 rounded-full"
        aria-label="Next Image"
      >
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}