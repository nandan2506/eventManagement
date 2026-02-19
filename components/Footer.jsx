// components/Footer.jsx
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="block w-fit">
              <img
                src="/logo.jpeg"
                alt="Eventeam Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering experiences that leave lasting impressions. From concept to execution, we are your partners in creating the extraordinary.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <SocialIcon
                href="https://www.facebook.com/share/1DLg5VUuQh/"
                label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </SocialIcon>

              <SocialIcon
                href="https://www.instagram.com/eventeam.india"
                label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-10">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-brand hover:translate-x-1 inline-block transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-brand hover:translate-x-1 inline-block transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-brand hover:translate-x-1 inline-block transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand hover:translate-x-1 inline-block transition-all duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-brand hover:translate-x-1 inline-block transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-5 text-gray-400 text-sm">
              <li className="flex items-start group">
                <span className="text-brand mr-3 mt-1 group-hover:scale-110 transition-transform">
                  {/* Location Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                    </path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                    </path>
                  </svg>
                </span>
                <span>
                  B-102, C-58/22, Flex Apartment, <br />
                  Sector 62 Noida, Uttar Pradesh - 201309
                </span>
              </li>

              <li className="flex items-center group">
                <span className="text-brand mr-3 group-hover:scale-110 transition-transform">
                  {/* Email Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                    </path>
                  </svg>
                </span>
                <a
                  href="mailto:support@eventeam.com"
                  className="hover:text-white transition-colors"
                >
                  hello@eventeam.com
                </a>
              </li>

              <li className="flex items-center group">
                <span className="text-brand mr-3 group-hover:scale-110 transition-transform">
                  {/* Phone Icon */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                    </path>
                  </svg>
                </span>
                <a
                  href="tel:+919971783925"
                  className="hover:text-white transition-colors"
                >
                  +91 99717 83925
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Eventeam. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable Social Icon Component
function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center 
                 hover:bg-brand hover:text-black transition-all duration-300"
    >
      {children}
    </a>
  );
}
