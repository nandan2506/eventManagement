// app/gallery/page.jsx
"use client";

import { useState } from "react";

// 1. IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// 2. IMPORT SWIPER STYLES
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/images";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // State for Lightbox

  // Categories for filtering
  const categories = [
    "All",
    "Corporate",
    "Concerts",
    "Launches",
    "Experiential",
  ];

  // Grid Data
 // Grid Data (30 Items)
  const galleryItems = [
    { id: 1, category: "Concerts", src: "/gallery/img1.jpg", title: "Summer Vibes Fest", year: "2025" },
    { id: 2, category: "Corporate", src: "/gallery/img2.jpg", title: "Tech Summit Keynote", year: "2024" },
    { id: 3, category: "Launches", src: "/gallery/img3.jpg", title: "Product Unveil", year: "2024" },
    { id: 4, category: "Experiential", src: "/gallery/img4.jpg", title: "Neon Night Pop-up", year: "2025" },
    { id: 5, category: "Concerts", src: "/gallery/img5.jpg", title: "Electronic Dreams", year: "2023" },
    { id: 6, category: "Corporate", src: "/gallery/img6.jpg", title: "Annual Gala Dinner", year: "2024" },
    { id: 7, category: "Launches", src: "/gallery/img7.jpg", title: "Automotive Reveal", year: "2025" },
    { id: 8, category: "Experiential", src: "/gallery/img8.jpg", title: "Brand Activation", year: "2024" },
    { id: 9, category: "Concerts", src: "/gallery/img9.jpg", title: "Jazz in the Park", year: "2025" },
    { id: 10, category: "Corporate", src: "/gallery/img10.jpg", title: "Global Leadership Meet", year: "2024" },
    { id: 11, category: "Launches", src: "/gallery/img11.jpg", title: "Smartphone Launch", year: "2024" },
    { id: 12, category: "Experiential", src: "/gallery/img12.jpg", title: "Immersive Art", year: "2025" },
    { id: 13, category: "Concerts", src: "/gallery/img13.jpg", title: "Rock Arena", year: "2023" },
    { id: 14, category: "Corporate", src: "/gallery/img14.jpg", title: "Awards Night", year: "2024" },
    { id: 15, category: "Launches", src: "/gallery/img15.jpg", title: "Fashion Week Intro", year: "2025" },
    { id: 16, category: "Experiential", src: "/gallery/img16.jpg", title: "VR Experience Zone", year: "2024" },
    { id: 17, category: "Concerts", src: "/gallery/img17.jpg", title: "Acoustic Sessions", year: "2025" },
    { id: 18, category: "Corporate", src: "/gallery/img18.jpg", title: "Networking Mixer", year: "2024" },
    { id: 19, category: "Launches", src: "/gallery/img19.jpg", title: "Luxury Car Debut", year: "2024" },
    { id: 20, category: "Experiential", src: "/gallery/img20.jpg", title: "Interactive Billboard", year: "2025" },
    { id: 21, category: "Concerts", src: "/gallery/img21.jpg", title: "EDM Blast", year: "2023" },
    { id: 22, category: "Corporate", src: "/gallery/img22.jpg", title: "Founders Day", year: "2024" },
    { id: 23, category: "Launches", src: "/gallery/img23.jpg", title: "Store Opening", year: "2025" },
    { id: 24, category: "Experiential", src: "/gallery/img24.jpg", title: "Pop-up Cafe", year: "2024" },
    { id: 25, category: "Concerts", src: "/gallery/img25.jpg", title: "Live at the Stadium", year: "2025" },
    { id: 26, category: "Corporate", src: "/gallery/img26.jpg", title: "Team Building Retreat", year: "2024" },
    { id: 27, category: "Launches", src: "/gallery/img27.jpg", title: "App Launch Party", year: "2024" },
    { id: 28, category: "Experiential", src: "/gallery/img28.jpg", title: "Light Show", year: "2025" },
    { id: 29, category: "Concerts", src: "/gallery/img29.jpg", title: "Classical Evening", year: "2023" },
    { id: 30, category: "Corporate", src: "/gallery/img30.jpg", title: "Year End Party", year: "2024" },
  ];

  // Logic to filter images based on selected tab
  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <section className="bg-[#002B5C] py-20 px-6 text-center relative overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest uppercase text-sm">
            Our Work
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white">
            Capturing the <span className="text-brand">Extraordinary</span>
          </h1>
          <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
            A visual journey through the immersive experiences, grand stages,
            and unforgettable moments we've engineered for our clients.
          </p>
        </div>
      </section>

      {/* 2. Featured Swiper Section */}
      <section className="bg-black py-16 border-b border-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <span className="text-brand font-bold tracking-widest uppercase text-xs">
            Vibe Check
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">
            Captured Moments
          </h2>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4">
          <style jsx global>{`
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
          `}</style>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
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
            {galleryImages.map((src, index) => (
              <SwiperSlide
                key={index}
                className="!w-[300px] md:!w-[500px] !h-[300px] md:!h-[400px] relative rounded-2xl overflow-hidden border border-gray-800"
              >
                <img
                  src={src}
                  alt={`Highlight ${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-brand font-bold text-lg">
                      #EventLife
                    </span>
                    <p className="text-gray-300 text-sm mt-1">
                      Live the moment
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 3. Filter Tabs */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex overflow-x-auto no-scrollbar gap-2 md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#002B5C] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. The Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)} // OPEN LIGHTBOX
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-black"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C] via-black/50 to-transparent"></div>
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand text-xs font-bold uppercase tracking-wider">
                    {item.category} • {item.year}
                  </span>
                  <h3 className="text-white text-2xl font-bold mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </section>

      {/* 5. Lightbox Modal (Full Screen View) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)} // Close on background click
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>
              <p className="text-brand font-bold uppercase tracking-widest text-sm mt-2">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
