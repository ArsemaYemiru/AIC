import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import aic from "../../assets/aic.png";
import { NavLink } from '@mantine/core';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Announcements data - when empty, banner won't show
  const [announcements, setAnnouncements] = useState([
    "New Job Vacancies Available - Apply Now!",
    "Meeting Notice: Annual General Meeting on June 15th",
    "Important Notice: Board Meeting on Friday"
  ]);

  return (
    <>
      {/* Announcement banner - only shows if there are announcements */}
      {announcements.length > 0 && <AnnouncementBanner announcements={announcements} />}
      
      <header className="bg-white text-[#343989] sticky top-0 z-40 shadow px-3 sm:px-20">
        <div className="flex justify-between items-center py-1">
          <a href="/" className="hover:text-[#EF1C33]"><img src={aic} alt="Logo" className="h-10 sm:h-20" /></a>
          {/* Hamburger menu for mobile */}
          <button className="sm:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center justify-between w-full">
            <div className="flex justify-center space-x-12 flex-1">
              <a href="/" className="hover:text-[#EF1C33]">Home</a>
              <a href="/about" className="hover:text-[#EF1C33]">About Us</a>

              {/* Services dropdown */}
              <Dropdown label="Services" items={[
                { href: "/products", label: "Products" },
                { href: "/claims", label: "Claims" }
              ]} />

              {/* Media dropdown */}
              <Dropdown label="Media" items={[
                { href: "/news", label: "News" },
                { href: "/events", label: "Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reports", label: "Annual Reports" }
              ]} />

              {/* Announcements dropdown */}
              <Dropdown label="Announcements" items={[
                { href: "/notice", label: "Meeting Notice" },
                { href: "/vacancies", label: "Job Vacancies" },
                { href: "/bids", label: "Bids" }
              ]} />

              <a href="/contacts" className="hover:text-[#EF1C33]">Contact Us</a>
            </div>

            <a
              href="https://africainsurancesc.com/webmail"
              className="px-5 py-2 text-center rounded-lg text-[#343989] hover:text-white hover:bg-[#343989] transition-all ml-auto"
            >
              Login
            </a>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="flex flex-col space-y-3 sm:hidden pb-4 px-4">
            <a href="/" className="hover:text-[#EF1C33]">Home</a>
            <a href="/about" className="hover:text-[#EF1C33]">About Us</a>
            <DropdownMobile label="Services" items={[
              { href: "/products", label: "Products" },
              { href: "/claims", label: "Claims" }
            ]} />
            <DropdownMobile label="Media" items={[
              { href: "/news", label: "News" },
              { href: "/events", label: "Events" },
              { href: "/gallery", label: "Gallery" },
              { href: "/reports", label: "Annual Reports" }
            ]} />
            <DropdownMobile label="Announcements" items={[
              { href: "/notice", label: "Meeting Notice" },
              { href: "/vacancies", label: "Job Vacancies" },
              { href: "/bids", label: "Bids" }
            ]} />
            <a href="/contacts" className="hover:text-[#EF1C33]">Contact Us</a>
            <a
              href="https://africainsurancesc.com/webmail"
              className="px-4 py-2 text-center rounded-lg text-[#343989] border border-[#343989] hover:bg-[#343989] hover:text-white transition"
            >
              Login
            </a>
          </div>
        )}
      </header>
    </>
  );
}

const AnnouncementBanner = ({ announcements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(100); // Start from right side

  useEffect(() => {
    // Animation timer
    const animationTimer = setInterval(() => {
      setPosition(prev => {
        if (prev <= -100) {
          // When text has scrolled out completely, reset to right side and go to next message
          setCurrentIndex(prevIndex => (prevIndex + 1) % announcements.length);
          return 100;
        }
        return prev - 0.4; // Adjust this value to change scroll speed
      });
    }, 30); // Adjust interval for smoother/rougher animation

    return () => clearInterval(animationTimer);
  }, [announcements.length]);

  // Reset position when index changes
  useEffect(() => {
    setPosition(100);
  }, [currentIndex]);

  return (
    <div className="bg-[#e22739] text-white py-6 overflow-hidden relative relative h-10 flex items-center">
      <div 
        className="whitespace-nowrap absolute w-full text-center"
        style={{ transform: `translateX(${position}%)` }}
      >
        {announcements[currentIndex]}
      </div>
    </div>
  );
};

const Dropdown = ({ label, items }) => (
  <div className="relative group">
    <div className="flex items-center space-x-1 hover:text-[#EF1C33] cursor-pointer">
      <span>{label}</span>
      <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
    </div>
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-md p-2 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      {items.map(item => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </div>
  </div>
);

const DropdownMobile = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full hover:text-[#EF1C33]">
        <span>{label}</span>
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="ml-4 mt-1 space-y-1">
          {items.map(item => (
            <a key={item.href} href={item.href} className="block text-sm hover:text-[#EF1C33]">{item.label}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;