// components/gallery/GalleryGrid.jsx
"use client";

import { useState } from "react";

const categories = [
  "All",
  "Corporate",
  "Concerts",
  "Launches",
  "Experiential",
];

export default function GalleryGrid({ allItems, onImageClick }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
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

      {/* The Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onImageClick(filteredItems, index)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-black"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C] via-black/50 to-transparent pointer-events-none"></div>
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
    </>
  );
}