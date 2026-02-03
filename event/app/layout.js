// app/layout.jsx
import Navbar from '@/components/NavBar'; // Make sure the path matches your file name
import './globals.css';

export const metadata = {
  title: 'Eventeam',
  description: 'Book the best events near you',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        {/* The Navbar sits here, above all page content */}
        <Navbar /> 
        
        {/* The "children" is the page content (About, Contact, etc.) */}
        {children}
      </body>
    </html>
  );
}