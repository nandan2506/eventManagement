// app/events/[id]/page.jsx
import { events } from "@/data/events"; // Ensure this path is correct
import { notFound } from "next/navigation";

// 1. Generate static paths so Next.js knows which IDs exist
export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

// 2. The Page Component (Must be async)
export default async function EventDetailsPage({ params }) {
  // FIX: Await the params object before using it
  const { id } = await params;

  // Find the event
  const event = events.find((e) => e.id === id);

  // Handle 404
  if (!event) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <div className="h-[400px] w-full relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <span className="bg-brand text-black px-3 py-1 rounded font-bold text-sm uppercase tracking-wide">
              {event.category || "Event"}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-4">
              {event.title}
            </h1>
            <p className="mt-2 text-xl text-gray-200">{event.location}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column: Description */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            About this Event
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {event.description}
          </p>

          <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-lg mb-2">Event Policy</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>No refunds within 24 hours of the event.</li>
              <li>Please bring a valid ID.</li>
              <li>Gates open 1 hour before the start time.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Booking Card */}
        <div className="relative">
          <div className="sticky top-24 bg-white border border-slate-200 shadow-xl rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-500 font-medium">Ticket Price</span>
              <span className="text-3xl font-bold text-slate-900">
                {event.price === 0 ? "Free" : `₹${event.price}`}
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-slate-600">
                <span className="w-6 mr-2">📅</span>
                {event.date}
              </div>
              <div className="flex items-center text-slate-600">
                <span className="w-6 mr-2">📍</span>
                {event.location}
              </div>
            </div>

            <button
              className="w-full bg-brand hover:bg-brand-dark text-black font-bold py-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1"
              // onClick is removed because this is a Server Component.
              // To add interactivity, you'd need a separate Client Component button.
            >
              Book Tickets Now
            </button>

            <p className="text-center text-xs text-slate-400 mt-4">
              Secure payment powered by Stripe (Demo)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
