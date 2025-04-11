import React, { useState } from "react";
import Header from "../nav/header";
import Footer from "../nav/footer";
import { MapPin, Phone, Building2, Mail } from "lucide-react";
import { Card, Text, Group, SimpleGrid } from '@mantine/core';

const addisAbabaBranches = [
    { location: "Head office Bole", phone: "0116518400", email: "underwritingho@africainsurancesc.com" },
    { location: "Addisu Gebeya", phone: "0111264137/0111265764", email: "addisugebiya@africainsurancesc.com" },
    { location: "Arada", phone: "0111119019/0111119022", email: "arada@africainsurancesc.com" },
    { location: "Arat Kilo", phone: "0111560115/0111560116", email: "aratkilo@africainsurancesc.com" },
    { location: "Ayer Tena", phone: "0113694183/0113693708", email: "ayertena@africainsurancesc.com" },
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
const regionalBranches = [
    { location: "Adama", phone: "0221122101/0221122099", email: "adama@africainsurancesc.com" },
    { location: "Arba Minch", phone: "0461818636/0461818637", email: "arbaminch@africainsurancesc.com" },
    { location: "Bahir Dar", phone: "0582262525/0582201792", email: "bahirdar@africainsurancesc.com" },
    { location: "Debre Berhan", phone: "0116375819/0116376251", email: "debrebrihan@africainsurancesc.com" },
    { location: "Dessie", phone: "0331119140/0331119141", email: "dessie@africainsurancesc.com" },
    { location: "Dire Dawa", phone: "0251110715/0251118930", email: "diredawa@africainsurancesc.com" },
    { location: "Gondar", phone: "0581110234/0581119829", email: "gondar@africainsurancesc.com" },
    { location: "Hawassa", phone: "0462204765/0462201960", email: "hawassa@africainsurancesc.com" },
    { location: "Jijiga", phone: "0252783146/0252783147", email: "jijiga@africainsurancesc.com" },
    { location: "Jimma", phone: "0472110426/0472110396", email: "jimma@africainsurancesc.com" },
    { location: "Mekele", phone: "03440409211/0344408410", email: "mekelle@africainsurancesc.com" },
    { location: "Nekemete", phone: "0576600013", email: "nekemte@africainsurancesc.com" },
    { location: "Sebeta", phone: "0113818022/0113818199", email: "sebeta@africainsurancesc.com" },
    { location: "Shire", phone: "0342441867", email: "shire@africainsurancesc.com" },
    { location: "Wolayita Sodo", phone: "0461800983", email: "wolayita@africainsurancesc.com" },
];
function Contacts() {
    const [showMoreAddis, setShowMoreAddis] = useState(false);
    const [showMoreRegional, setShowMoreRegional] = useState(false);

    const visibleAddisBranches = showMoreAddis ? addisAbabaBranches : addisAbabaBranches.slice(0, 9);
    const visibleRegionalBranches = showMoreRegional ? regionalBranches : regionalBranches.slice(0, 9);

    return (
        <>
            <Header />
            <div className="px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="text-2xl sm:text-3xl mt-8 mb-4 text-[#343989] font-bold">
                    <p>Contact Us</p>
                </div>
                
                {/* Map and Contact Info Section */}
                <div className="flex flex-col lg:flex-row gap-8 mt-10">
                    {/* Map */}
                    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7799458220306!2d38.77787627515661!3d8.992385791067488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858aa4e36b6d%3A0xba3a09392dcba790!2sAFRICA%20INSURANCE%20COMPANY%20S.C.%20HEAD%20OFFICE!5e0!3m2!1sen!2set!4v1741960143704!5m2!1sen!2set"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8">
                        <div className="text-2xl sm:text-3xl lg:text-4xl text-[#343989] font-bold text-center">
                            Where Quality Service Meets Trusted Protection. Contact Us
                        </div>

                        <div className="text-[#343989] flex flex-col text-lg sm:text-xl font-bold gap-4 w-full max-w-md">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-6 h-6" />
                                <p>Head Office @ Africa Avenue (Bole Road)</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-6 h-6" />
                                <p>251 0116637716 / 17 / 18 / 19</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Building2 className="w-6 h-6" />
                                <p>12941, Addis Ababa, Ethiopia</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-6 h-6" />
                                <p>md@africainsurancesc.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Addis Ababa Branches Section */}
                <div className="mt-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#343989]">Addis Ababa Branches</h3>
                        <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                    </div>
                    <SimpleGrid 
                        spacing="md" 
                        cols={{ base: 1, sm: 2, md: 3 }}
                        className="px-4 sm:px-8"
                    >
                        {visibleAddisBranches.map((item, index) => (
                            <Card 
                                key={index} 
                                shadow="sm" 
                                padding="lg" 
                                radius="md" 
                                className="border hover:shadow-md transition-shadow"
                            >
                                <Group spacing="sm">
                                    <MapPin className="w-5 h-5 text-[#343989]" />
                                    <Text weight={700} color="#343989">
                                        {item.location}
                                    </Text>
                                </Group>
                                <Group spacing="sm">
                                    <Phone className="w-5 h-5 text-[#343989]" />
                                    <Text color="#343989">{item.phone}</Text>
                                </Group>
                                <Group spacing="sm">
                                    <Mail className="w-5 h-5 text-[#343989]" />
                                    <Text color="#343989">{item.email}</Text>
                                </Group>
                            </Card>
                        ))}
                    </SimpleGrid>
                    {addisAbabaBranches.length > 8 && (
                        <div className="flex justify-end mt-6">
                            <button
                                className="px-4 py-2 text-[#343989] hover:text-[#EF1C33] font-medium"
                                onClick={() => setShowMoreAddis(!showMoreAddis)}
                            >
                                {showMoreAddis ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    )}
                </div>

                {/* Regional Branches Section */}
                <div className="mt-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#343989]">Regional Branches</h3>
                        <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                    </div>
                    <SimpleGrid 
                        spacing="md" 
                        cols={{ base: 1, sm: 2, md: 3 }}
                        className="px-4 sm:px-8"
                    >
                        {visibleRegionalBranches.map((item, index) => (
                            <Card 
                                key={index} 
                                shadow="sm" 
                                padding="lg" 
                                radius="md" 
                                className="border hover:shadow-md transition-shadow"
                            >
                                <Group spacing="sm">
                                    <MapPin className="w-5 h-5 text-[#343989]" />
                                    <Text weight={700} color="#343989">
                                        {item.location}
                                    </Text>
                                </Group>
                                <Group spacing="sm">
                                    <Phone className="w-5 h-5 text-[#343989]" />
                                    <Text color="#343989">{item.phone}</Text>
                                </Group>
                                <Group spacing="sm">
                                    <Mail className="w-5 h-5 text-[#343989]" />
                                    <Text color="#343989">{item.email}</Text>
                                </Group>
                            </Card>
                        ))}
                    </SimpleGrid>
                    {regionalBranches.length > 8 && (
                        <div className="flex justify-end mt-4">
                            <button
                                className="px-4 py-2 text-[#343989] hover:text-[#EF1C33] font-medium"
                                onClick={() => setShowMoreRegional(!showMoreRegional)}
                            >
                                {showMoreRegional ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contacts;
