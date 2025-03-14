import { useState } from 'react';
import aic from "../../assets/aic.png"; // Make sure the path is correct based on where Header.jsx is

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className=" bg-white text-[#343989] px-6 flex items-center justify-between sm:px-20 sticky top-0 z-50 shadow">
      <img src={aic} alt="Logo" className="h-1 sm:h-20" />

      <nav className="hidden sm:flex items-center justify-between w-full">
  {/* Centered Navigation Links */}
  <div className="flex justify-center space-x-12 flex-1">
    <a href="/" className="hover:text-[#EF1C33]">Home</a>
    <a href="/about" className="hover:text-[#EF1C33]">About Us</a>
    <a href="/services" className="hover:text-[#EF1C33]">Services</a>
    <a href="/media" className="hover:text-[#EF1C33]">Media</a>
    <a href="/announcements" className="hover:text-[#EF1C33]">Announcements</a>
    <a href="/contacts" className="hover:text-[#EF1C33]">Contact Us</a>
  </div>

  <a
    href="https://africainsurancesc.com/webmail"
    className="px-5 py-2 text-center rounded-lg text-[#343989] hover:text-white hover:bg-[#343989] transition-all ml-auto"
    >
    Login
  </a>
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
