import { MapPin, Phone, Building2, Mail } from "lucide-react";
function Footer() {
    return (
        <footer className="bg-[#343989] mt-12 text-white py-3 px-4 font-playfair border-t border-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4">
                {/* Left Section */}
                <div className="mb-4 md:mb-0 text-center sm:text-left">
                    <p className="mt-1 text-lg font-bold ">
                        African Insurance Company
                        <img src="src\assets\aic.png" alt="African Insurance Company" style={{ width: '50%', height: 'auto' }} />
                    </p>
                    <p className="mt-2 text-sm">
                        Committed to Excellence and Quality service
                    </p>
                </div>

                {/* Center Section */}
                <div className="mb-4 md:mb-0 text-center sm:text-left">
                    <h2 className="text-xl font-bold mb-3">Quick Links</h2>
                    <nav className="flex flex-col space-y-2 text-sm">
                        <a href="/" className="hover:text-[#EF1C33]">Home</a>
                        <a href="/about" className="hover:text-[#EF1C33]">About Us</a>
                        <a href="/gallery" className="hover:text-[#EF1C33]">Gallery</a>
                        <a href="/vacancies" className="hover:text-[#EF1C33]">Job Vacancies</a>
                        <a href="/contacts" className="hover:text-[#EF1C33]">Contact Us</a>
                        <a href="/claims" className="hover:text-[#EF1C33]">Download</a>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="text-center sm:text-left flex flex-col gap-3 ">
                    <h2 className="text-xl font-bold mb-3">Contact Address</h2>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4" />
                        <p className="text-sm ml-4">Head Office @ Africa Avenue (Bole Road)</p>
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-4 h-4" />
                        <p className="text-sm ml-4">251 0116637716 / 17 / 18 / 19</p>
                    </div>
                    <div className="flex items-center">
                        <Building2 className="w-4 h-4" />
                        <p className="text-sm ml-4">12941, Addis Ababa, Ethiopia</p>
                    </div>
                    <div className="flex items-center">
                        <Mail className="w-4 h-4" />
                        <p className="text-sm ml-4">md@africainsurancesc.com</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-4 border-t border-gray-400 pt-3 text-left text-xs text-gray-300">
                {new Date().getFullYear()} African Insurance Company. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;