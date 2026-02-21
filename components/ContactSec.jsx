// app/contact/page.jsx
"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactSec() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">
          Get in <span className="text-brand">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Have a question about an event? Want to partner with us? Drop us a
          message and we will get back to you within 24 hours.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
        {/* LEFT SIDE */}
        <div className="bg-black text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand rounded-full opacity-20 blur-2xl"></div>

          <div>
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-800 pb-4">
              Contact Information
            </h2>

            <div className="space-y-8">
              <InfoItem icon={<FaMapMarkerAlt />} title="Our Office">
                C-58/22, Sector 62 Noida, <br />
                 Uttar Pradesh - 201309
              </InfoItem>

              <InfoItem icon={<FaEnvelope />} title="Email Us">
                <a
                  href="mailto:hello@eventeam.in"
                  className="hover:text-white transition-colors"
                >
                  hello@eventeam.in
                </a>
              </InfoItem>

              <InfoItem icon={<FaPhoneAlt />} title="Call Us">
                <a
                  href="tel:+919971783925"
                  className="hover:text-white transition-colors"
                >
                  +91 99717 83925
                </a>
              </InfoItem>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold mb-4 text-brand">Follow Us</h3>
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
        <div className="bg-white p-10 md:p-14">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-pulse">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Message Sent!
              </h3>
              <p className="text-gray-500 mt-2">
                We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send a Message
              </h2>

              {error && (
                <p className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                  {error}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Your Name"
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
              </div>

              <InputField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Ticket inquiry, Partnership, etc."
                value={formData.subject}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg 
             bg-gray-50 text-gray-900 placeholder-gray-400
             border border-gray-200 
             focus:border-brand focus:ring-2 focus:ring-brand/20 
             outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black hover:bg-brand hover:text-black text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

/* ---------------- Helper Components ---------------- */

function InfoItem({ icon, title, children }) {
  return (
    <div className="flex items-start">
      <span className="text-brand text-xl mr-4 mt-1">{icon}</span>
      <div>
        <h4 className="font-bold text-gray-200">{title}</h4>
        <p className="text-gray-400 mt-1">{children}</p>
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
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-black transition-all duration-300"
    >
      {children}
    </a>
  );
}

function InputField({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-lg 
                   bg-gray-50 text-gray-900 placeholder-gray-400
                   border border-gray-200 
                   focus:border-brand focus:ring-2 focus:ring-brand/20 
                   outline-none transition-all"
      />
    </div>
  );
}
