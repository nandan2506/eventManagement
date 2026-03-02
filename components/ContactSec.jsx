// app/contact/page.jsx
"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function ContactSec() {
  // 1. Fixed Initial State for proper dropdown validation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    contactNumber: "",
    typeOfEvent: "", // Empty string forces the user to choose a valid option
    eventLocation: "",
    eventDate: "",
    budgetRange: "", // Empty string forces the user to choose a valid option
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/mqeddapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong.");

      setIsSubmitted(true);

      // Reset to empty strings after submission
      setFormData({
        name: "",
        email: "",
        companyName: "",
        contactNumber: "",
        typeOfEvent: "",
        eventLocation: "",
        eventDate: "",
        budgetRange: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get in <span className="text-brand">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Fill out the form below and our
            team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl rounded-3xl overflow-hidden bg-white">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="lg:col-span-4 bg-black text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand rounded-full opacity-10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-10 border-b border-white/10 pb-4">
                Contact Information
              </h2>

              <div className="space-y-10">
                <InfoItem icon={<FaMapMarkerAlt />} title="Our Office">
                  C-58/22, Sector 62 Noida, <br />
                  Uttar Pradesh - 201309
                </InfoItem>

                <InfoItem icon={<FaEnvelope />} title="Email Us">
                  <a
                    href="mailto:hello@eventeam.in"
                    className="hover:text-brand transition-colors"
                  >
                    hello@eventeam.in
                  </a>
                </InfoItem>

                <InfoItem icon={<FaPhoneAlt />} title="Call Us">
                  <a
                    href="tel:+919971783925"
                    className="hover:text-brand transition-colors"
                  >
                    +91 99717 83925
                  </a>
                </InfoItem>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-brand">
                Follow Our Journey
              </h3>
              <div className="flex space-x-4">
                <SocialIcon
                  href="https://www.instagram.com/eventeam.india"
                  label="Instagram"
                >
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon
                  href="https://www.facebook.com/share/1DLg5VUuQh/"
                  label="Facebook"
                >
                  <FaFacebookF />
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="lg:col-span-8 p-8 md:p-14 bg-white">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 text-4xl">
                  <FaCheckCircle />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Message Sent!
                </h3>
                <p className="text-slate-500 mt-4 text-lg">
                  Thank you for reaching out. We have received your inquiry and
                  will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-brand font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md text-sm">
                    {error}
                  </div>
                )}

                {/* Section 1: Basic Details */}
                <section>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm">
                      1
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      Basic Details
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    <InputField
                      label="Full Name"
                      name="name"
                      type="text"
                      placeholder="Rahul"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="rahul@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {/* Optional Field: No 'required' prop passed */}
                    <InputField
                      label="Company Name (Optional)"
                      name="companyName"
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Contact Number"
                      name="contactNumber"
                      type="tel"
                      placeholder="+91 00000 11111"
                      required
                      value={formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* Section 2: Project Details */}
                <section>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm">
                      2
                    </span>
                    <h2 className="text-xl font-bold text-slate-900">
                      Project Details
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    {/* Updated Selects with Placeholders */}
                    <SelectField
                      label="Type of Event"
                      name="typeOfEvent"
                      value={formData.typeOfEvent}
                      onChange={handleChange}
                      required
                      placeholder="Select Event Type"
                      options={[
                        "MICE",
                        "Product Launch",
                        "Conference",
                        "Dealer Meet",
                        "Exhibition",
                        "Fashion Show",
                        "Other",
                      ]}
                    />
                    <InputField
                      label="Event Location"
                      name="eventLocation"
                      type="text"
                      placeholder="City or Venue Name"
                      required
                      value={formData.eventLocation}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Tentative Event Date"
                      name="eventDate"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                    <SelectField
                      label="Estimated Budget (INR)"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      required
                      placeholder="Select Budget Range"
                      options={[
                        "10,000 - 30,000",
                        "30,000 - 50,000",
                        "50,000 - 1,00,000",
                        "1,00,000+",
                      ]}
                    />
                  </div>
                </section>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black hover:bg-brand hover:text-black text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Connect With Eventeam"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

/* ---------------- Improved Helper Components ---------------- */

function InfoItem({ icon, title, children }) {
  return (
    <div className="flex items-start group">
      <div className="text-brand text-2xl mr-5 mt-1 transition-transform group-hover:scale-110 duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white text-lg">{title}</h4>
        <div className="text-slate-400 mt-1 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand hover:text-black transition-all duration-300 border border-white/10"
    >
      <span className="text-xl">{children}</span>
    </a>
  );
}

function InputField({ label, required, ...props }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all"
      />
    </div>
  );
}

function SelectField({ label, options, required, placeholder, ...props }) {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        {...props}
        required={required}
        // Added invalid:text-slate-400 so the placeholder text looks grayed out
        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 focus:border-brand focus:ring-4 focus:ring-brand/10 outline-none transition-all appearance-none cursor-pointer invalid:text-slate-400"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-line-cap='round' stroke-line-join='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          backgroundSize: "1.5em",
        }}
      >
        {/* Placeholder logic mapped here */}
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-slate-900">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
