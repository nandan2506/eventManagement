// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // To show active state on links

  return (
    // bg-black matches your logo background perfectly
    <nav className="bg-black text-white shadow-xl sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {" "}
          {/* Increased height slightly for the logo */}
          {/* LEFT: Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" active={pathname === "/"}>
              {/* The logo blends because the navbar is black */}
              <img
                src="/logo.jpeg"
                alt="Eventeam Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>
          {/* CENTER: Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>
            {/* <NavLink href="/events" active={pathname === "/events"}>
              All Events
            </NavLink>
            <NavLink href="/about" active={pathname === "/about"}>
              About Us
            </NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </NavLink> */}
            <NavLink href="/gallery" active={pathname === "/gallery"}>
              Gallery
            </NavLink>
          </div>
          {/* RIGHT: Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href=""
              className="bg-brand hover:bg-brand-dark text-black font-extrabold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,189,93,0.3)]"
            >
              Get Tickets
            </Link>
          </div>
          {/* MOBILE MENU BUTTON */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </MobileNavLink>

            <div className="pt-6">
              <Link
                href="/events"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand hover:bg-brand-dark text-black font-bold py-4 rounded-lg shadow-lg"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Helper: Desktop Link with Active State (Underline effect)
function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300
        ${active ? "text-brand" : "text-gray-300 hover:text-white"}
      `}
    >
      {children}
      {/* Animated Underline */}
      <span
        className={`absolute left-0 bottom-0 w-full h-0.5 bg-brand transform transition-transform duration-300 origin-left
        ${active ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}
      `}
      ></span>
    </Link>
  );
}

// Helper: Mobile Link
function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-3 rounded-md text-lg font-medium text-gray-300 hover:text-brand hover:bg-gray-900 border-l-4 border-transparent hover:border-brand transition-all"
    >
      {children}
    </Link>
  );
}
