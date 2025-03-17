function Footer() {
    return (
        <footer className="bg-[#343989] mt-12 text-white py-3 px-4 font-playfair border-t border-gray-200">
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4">
                {/* Left Section */}
                <div className="mb-4 md:mb-0 text-center sm:text-left">
                    <p className="mt-1 text-lg font-bold ">
                        African Insurance Company
                        <img src="src\assets\africa-removebg-preview (1) 3.png" alt="African Insurance Company" style={{ width: '50%', height: 'auto' }} />
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
                        <a href="/media" className="hover:text-[#EF1C33]">Media</a>
                        <a href="/announcements" className="hover:text-[#EF1C33]">Announcements</a>
                        <a href="/contact" className="hover:text-[#EF1C33]">Contact Us</a>
                        <a href="/download" className="hover:text-[#EF1C33]">Download</a>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="text-center sm:text-left ">
                    <h2 className="text-xl font-bold mb-3">Contact Address</h2>
                <div className="flex items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm ml-2">Head Office @ Africa Avenue (Bole Road)</p>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                        <p className="text-sm ml-2">251 0116637716 / 17 / 18 / 19</p>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                    </svg>
                    <p className="text-sm ml-2">12941, Addis Ababa, Ethiopia</p>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p className="text-sm ml-2">md@africainsurancesc.com</p>
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