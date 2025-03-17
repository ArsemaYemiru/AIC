import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Import the ChevronDown icon
import aic from "../../assets/aic.png";
import { NavLink, HoverCard, Text } from '@mantine/core';

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white text-[#343989] px-6 flex items-center justify-between sm:px-20 sticky top-0 z-50 shadow">
      <img src={aic} alt="Logo" className="h-1 sm:h-20" />

      <nav className="hidden sm:flex items-center justify-between w-full">
        <div className="flex justify-center space-x-12 flex-1">
          <a href="/" className="hover:text-[#EF1C33]">Home</a>
          <a href="/about" className="hover:text-[#EF1C33]">About Us</a>
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('services')} 
              className="flex items-center space-x-1 hover:text-[#EF1C33]"
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            {openDropdown === 'services' && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md p-2 rounded">
                <NavLink href="/products" label="Products" />
                <NavLink href="/claims" label="Claims" />
              </div>
            )}
          </div>
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('media')} 
              className="flex items-center space-x-1 hover:text-[#EF1C33]"
            >
              <span>Media</span>
              <ChevronDown size={16} />
            </button>
            {openDropdown === 'media' && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md p-2 rounded">
                <NavLink href="/news" label="News" />
                <NavLink href="/events" label="Events" />
                <NavLink href="/gallery" label="Gallery" />
                <NavLink href="/reports" label="Annual Reports" />
              </div>
            )}
          </div>
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('announcements')} 
              className="flex items-center space-x-1 hover:text-[#EF1C33]"
            >
              <span>Announcements</span>
              <ChevronDown size={16} />
            </button>
            {openDropdown === 'announcements' && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md p-2 rounded">
                <NavLink href="/notice" label="Meeting Notice" />
                <NavLink href="/vacancies" label="Job Vacancies" />
                <NavLink href="/bids" label="Bids" />
              </div>
            )}
          </div>

          <a href="/contacts" className="hover:text-[#EF1C33]">Contact Us</a>
        </div>

        <a
          href="https://africainsurancesc.com/webmail"
          className="px-5 py-2 text-center rounded-lg text-[#343989] hover:text-white hover:bg-[#343989] transition-all ml-auto"
        >
          Login
        </a>
      </nav>
    </header>
  );
}

export default Header;
