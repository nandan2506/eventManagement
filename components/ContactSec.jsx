// app/contact/page.jsx
"use client";

import { useState } from 'react';

export default function ContactSec() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">
          Get in <span className="text-brand">Touch</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Have a question about an event? Want to partner with us? 
          Drop us a message and we will get back to you within 24 hours.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-2xl overflow-hidden">
        
        {/* LEFT SIDE: Contact Information (Dark Theme) */}
        <div className="bg-black text-white p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand rounded-full opacity-20 blur-2xl"></div>
          
          <div>
            <h2 className="text-2xl font-bold mb-8 border-b border-gray-800 pb-4">Contact Information</h2>
            
            <div className="space-y-8">
              <InfoItem 
                icon="📍" 
                title="Our Office" 
                content="123 Innovation Drive, Tech City, Mumbai, India" 
              />
              <InfoItem 
                icon="📧" 
                title="Email Us" 
                content="support@eventeam.com" 
              />
              <InfoItem 
                icon="📞" 
                title="Call Us" 
                content="+91 98765 43210" 
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold mb-4 text-brand">Follow Us</h3>
            <div className="flex space-x-4">
              <SocialIcon platform="Instagram" />
              <SocialIcon platform="Twitter" />
              <SocialIcon platform="LinkedIn" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Form (Light Theme) */}
        <div className="bg-white p-10 md:p-14">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-pulse">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-2xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
              <p className="text-gray-500 mt-2">We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                    placeholder="john@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                  placeholder="Ticket inquiry, Partnership, etc."
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-black hover:bg-brand hover:text-black text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

// --- Helper Components ---

function InfoItem({ icon, title, content }) {
  return (
    <div className="flex items-start">
      <span className="text-2xl mr-4">{icon}</span>
      <div>
        <h4 className="font-bold text-gray-200">{title}</h4>
        <p className="text-brand font-medium mt-1">{content}</p>
      </div>
    </div>
  );
}

function SocialIcon({ platform }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-black transition-colors cursor-pointer">
      <span className="text-xs font-bold">{platform[0]}</span>
    </div>
  );
}