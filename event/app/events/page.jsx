// app/events/page.jsx
"use client";

import { useState } from "react";
import { events } from "@/data/events";
import Link from "next/link";

export default function AllEventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Music", "Business", "Arts", "Workshops"];

  // Filter Logic
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Header Section */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Discover <span className="text-brand">Trending Events</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Browse through concerts, workshops, and meetups happening around you.
        </p>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center border border-gray-100">
          {/* Search Input */}
          <div className="w-full md:w-1/2 relative">
            <input
              type="text"
              placeholder="Search events or location..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/50 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="w-6 h-6 text-gray-400 absolute left-3 top-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Buttons */}
          <div className="w-full md:w-1/2 flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border
                  ${
                    selectedCategory === cat
                      ? "bg-brand text-black border-brand shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Events Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400">
              No events found matching your search.
            </h3>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-brand font-bold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-brand border border-brand/30">
                    {event.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                      {new Date(event.date).toDateString()}
                    </p>
                    <span className="text-brand-dark font-bold text-sm">
                      {event.price === 0 ? "FREE" : `₹${event.price}`}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors line-clamp-1">
                    {event.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4 flex items-center">
                    <span className="mr-1">📍</span> {event.location}
                  </p>

                  <Link
                    href={`/events/${event.id}`}
                    className="block w-full text-center bg-gray-100 hover:bg-black hover:text-white text-slate-900 font-bold py-3 rounded-lg transition-colors border border-gray-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
