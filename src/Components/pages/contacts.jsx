import React, { useState } from "react";
import Header from "../nav/header";
import Footer from "../nav/footer";
import { MapPin, Phone, Building2, Mail } from "lucide-react";

const AA = [
    { location: "Head office Bole", phone: "0116518400", email: "underwritingho@africainsurancesc.com" },
    { location: "Addisu Gebeya", phone: "0111264137/0111265764", email: "addisugebiya@africainsurancesc.com" },
    { location: "Arada", phone: "0111119019/0111119022", email: "arada@africainsurancesc.com" },
    { location: "Arat Kilo", phone: "0111560115/0111560116", email: "aratkilo@africainsurancesc.com" },
    { location: "Ayer Tena", phone: "01136941830113693708", email: "ayertena@africainsurancesc.com" },
    { location: "Bole/Yeka", phone: "0116616436/0116616435", email: "boleyeka@africainsurancesc.com" },
    { location: "CMC", phone: "0116688403/0116688223", email: "summit@africainsurancesc.com" },
    { location: "Filwuha", phone: "0115517861/0115519519", email: "filwuha@africainsurancesc.com" },
    { location: "Fit Ber", phone: "0115573445/0115575545", email: "fitber@africainsurancesc.com" },
    { location: "Gerji", phone: "0116675467", email: "gerji@africainsurancesc.com" },
    { location: "Gofa", phone: "0114670132/0114670133", email: "gofa@africainsurancesc.com" },
    { location: "Jemo", phone: "0113000000/0113000001", email: "jemo@africainsurancesc.com" },
    { location: "Kality", phone: "0114717460/0114717458", email: "kality@africainsurancesc.com" },
    { location: "Kirkos", phone: "0115155293/0115155298", email: "kirkos@africainsurancesc.com" },
    { location: "Lamberet", phone: "0116661659", email: "lamberet@africainsurancesc.com" },
    { location: "Lideta", phone: "0115522973", email: "lideta@africainsurancesc.com" },
    { location: "Mekanisa", phone: "0113699819", email: "mekanisa@africainsurancesc.com" },
    { location: "Mesalemiya", phone: "0112781891/0112736085", email: "mesalemiya@africainsurancesc.com" },
    { location: "Meskel Flower", phone: "0114701395/0114702390", email: "meskelflower@africainsurancesc.com" },
    { location: "Ras Desta", phone: "0111263686/0111263688", email: "rasdesta@africainsurancesc.com" },
    { location: "Stadium", phone: "0115555802", email: "stadium@africainsurancesc.com" },
    { location: "T/Haimanot", phone: "0112777541/0112777543", email: "teklehaymanot@africainsurancesc.com" },
    { location: "Yoseph", phone: "0114421573/0114401572", email: "yoseph@africainsurancesc.com" },
];

function Contacts() {
    const [showMore, setShowMore] = useState(false);

    const visibleItems = showMore ? AA : AA.slice(0, 8); // Show 6 items by default, all if 'showMore' is true

    return (
        <>
            <Header />
            <div className="flex flex-row justify-space-between ml-36 mt-10">
                <div className="w-full max-w-3xl h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7799458220306!2d38.77787627515661!3d8.992385791067488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858aa4e36b6d%3A0xba3a09392dcba790!2sAFRICA%20INSURANCE%20COMPANY%20S.C.%20HEAD%20OFFICE!5e0!3m2!1sen!2set!4v1741960143704!5m2!1sen!2set"
                        width="80%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="text-[#343989] flex flex-col justify-center gap-5">
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

            <div className="flex items-center justify-center mt-6 mb-6">
                <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                <h3 className="text-2xl font-semibold text-[#343989]">Addis Ababa Branches</h3>
                <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
            </div>

            <div className="mt-5 grid grid-cols-1 mx-8 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {visibleItems.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#343989] p-4 w-auto rounded-lg flex flex-col gap-3"
                    >
                        <div className="flex text-[#343989] items-center gap-2">
                            <MapPin className="w-5 h-5 text-[#343989]" />
                            <p className="text-lg font-bold">{item.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-[#343989]" />
                            <p className="text-sm">{item.phone}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-[#343989]" />
                            <p className="text-sm">{item.email}</p>
                        </div>
                    </div>
                ))}
            </div>

            {AA.length > 8 && (
                <div className="flex justify-center mt-4">
                    <button
                        className="text-[#343989] hover:text-[#673BB7] transition-all"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Show Less' : 'More'}
                    </button>
                </div>
            )}
            <Footer />
        </>
    );
}

export default Contacts;
