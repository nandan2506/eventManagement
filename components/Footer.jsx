// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-brand tracking-tighter">Eventeam</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering experiences that leave lasting impressions. From concept to execution, we are your partners in creating the extraordinary.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-brand transition-colors">Home</Link>
              </li>
              
              <li>
                <Link href="/gallery" className="hover:text-brand transition-colors">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="text-brand mr-2">📍</span>
                <span>123 Innovation Drive,<br/>Tech City, Mumbai, India</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand mr-2">📧</span>
                <span>support@eventeam.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-brand mr-2">📞</span>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest event updates.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 text-white px-4 py-3 rounded focus:outline-none focus:border-brand text-sm"
              />
              <button className="bg-brand text-black font-bold py-3 rounded hover:bg-[#e0a340] transition-colors text-sm uppercase tracking-wide">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Eventeam. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-brand transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-brand transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}