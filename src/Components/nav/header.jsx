import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import aic from "../../assets/aic.png";
import { NavLink } from '@mantine/core';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white text-[#343989] sticky top-0 z-40 shadow px-3 sm:px-20">
      <div className="flex justify-between items-center py-1">
        <a href="/" className="hover:text-[#EF1C33]"><img src={aic} alt="Logo" className="h-10 sm:h-20" />
</a>
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
  );
}

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
