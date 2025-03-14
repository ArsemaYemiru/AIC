import { useState } from 'react';
import aic from "../../assets/aic.png";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-[#343989] text-white px-6 flex items-center justify-between sm:px-20 sticky top-0 z-50">
      <img src={aic} alt="Logo" className="h-1 sm:h-20" />

      <nav className="hidden sm:flex flex-1 justify-center space-x-12">
        <a href="/" className="hover:text-[#EF1C33]">Home</a>
        <a href="/about" className="hover:text-[#EF1C33]">About Us</a>
        <a href="/services" className="hover:text-[#EF1C33]">Services</a>
        <a href="/media" className="hover:text-[#EF1C33]">Media</a>
        <a href="/announcements" className="hover:text-[#EF1C33]">Announcements</a>
        <a href="/contacts" className="hover:text-[#EF1C33]">Contact Us</a>
      </nav>

      <button onClick={toggleMenu} className="sm:hidden text-white focus:outline-none">
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-[#002855] text-white p-4 flex flex-col space-y-4">
          <a href="/" className="hover:text-[#EF1C33]">Home</a>
          <a href="/about" className="hover:text-[#EF1C33]">About Us</a>
          <a href="/services" className="hover:text-[#EF1C33]">Services</a>
          <a href="/media" className="hover:text-[#EF1C33]">Media</a>
          <a href="/announcements" className="hover:text-[#EF1C33]">Announcements</a>
          <a href="/contacts" className="hover:text-[#EF1C33]">Contact Us</a>
        </div>
      )}

      
    </header>
  );
}

export default Header;
