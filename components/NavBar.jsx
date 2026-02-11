// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LEFT: Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/">
              <img
                src="/logo.jpeg"
                alt="Eventeam Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* CENTER: Desktop Links */}
          <div className="hidden md:flex space-x-10 items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#services">Services</NavLink>
            <NavLink href="/#brands">Brands</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
          </div>

          {/* RIGHT: Call to Action */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              className="bg-brand hover:bg-brand-dark text-black font-bold py-2.5 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-brand/20 active:scale-95"
            >
              Contact us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon with Animation */}
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-2.5" : "translate-y-1"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "opacity-0" : "translate-y-3"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-2.5" : "translate-y-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
          <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/#about" onClick={() => setIsOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink href="/#services" onClick={() => setIsOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink href="/#brands" onClick={() => setIsOpen(false)}>
            Brands
          </MobileNavLink>
          <MobileNavLink href="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </MobileNavLink>

          <div className="pt-6 pb-2">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brand text-black font-bold py-3 rounded-lg shadow-md hover:bg-brand-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper: Desktop Link
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group relative px-1 py-2 text-sm font-semibold uppercase tracking-wider text-gray-600 transition-colors duration-300 hover:text-brand"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-brand transform transition-transform duration-300 origin-center scale-x-0 group-hover:scale-x-100"></span>
    </Link>
  );
}

// Helper: Mobile Link
function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-brand hover:bg-gray-50 border-l-4 border-transparent hover:border-brand transition-all"
    >
      {children}
    </Link>
  );
}