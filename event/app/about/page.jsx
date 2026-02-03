// app/about/page.jsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-black py-20 px-6 text-center overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-brand font-bold tracking-widest uppercase text-sm">
            Our Story
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-white">
            We Create Experiences <br />
            <span className="text-brand">That Last a Lifetime</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Founded in 2024, Eventeam started with a simple mission: to make
            finding and booking extraordinary events effortless. From
            underground music gigs to massive tech conferences, we bridge the
            gap between organizers and thrill-seekers.
          </p>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatCard number="500+" label="Events Hosted" />
          <StatCard number="10k+" label="Tickets Sold" />
          <StatCard number="50+" label="Cities Covered" />
          <StatCard number="4.9" label="User Rating" />
        </div>
      </section>

      {/* 3. OUR MISSION & VALUES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand/20 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
              alt="Team working together"
              className="relative rounded-2xl shadow-xl w-full object-cover h-[400px]"
            />
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              More Than Just a Ticketing Platform
            </h2>
            <div className="space-y-6">
              <ValueItem
                title="Seamless Booking"
                desc="We believe buying a ticket should be as exciting as the event itself. No hidden fees, no hassle."
              />
              <ValueItem
                title="Community First"
                desc="We support local organizers and artists, giving them a platform to shine alongside global giants."
              />
              <ValueItem
                title="Secure & Reliable"
                desc="Your data and payments are protected with top-tier security standards."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Find Your Next Adventure?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/events"
            className="bg-brand hover:bg-brand-dark text-slate-900 font-bold py-4 px-8 rounded-full transition-transform hover:scale-105"
          >
            Browse Events
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-8 rounded-full transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}

// --- Helper Components for clean code ---

function StatCard({ number, label }) {
  return (
    <div>
      {/* REMOVED NAVBAR FROM HERE */}
      <h3 className="text-4xl font-extrabold text-slate-900 mb-1">{number}</h3>
      <p className="text-gray-500 font-medium uppercase text-sm tracking-wide">
        {label}
      </p>
    </div>
  );
}

function ValueItem({ title, desc }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand flex items-center justify-center mt-1">
        <svg
          className="h-4 w-4 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div className="ml-4">
        <h4 className="text-xl font-bold text-slate-900">{title}</h4>
        <p className="text-slate-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}