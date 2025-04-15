import React from "react";
import Header from "../../nav/header";
import Footer from "../../nav/footer";
import { HeartPulse, Plane, Scale, Bomb, Flame, Ship, Sprout, Database, User, HandCoins, Stethoscope, Car, Settings } from 'lucide-react';

const products = [
    { 
        icon: <HeartPulse />, 
        label: 'Life Insurance',
        details: [
            "Term Life Assurance", 
            "Group Term Life Assurance", 
            "Mortgage Redemption Assurance Scheme", 
            "Endowment Life Assurance", 
            "Whole Life Assurance", 
            "Accidental Death and Dismemberment", 
            "Comprehensive Accidental Insurance & Health (Medical) Insurance"
        ]
    },
    { 
        icon: <Plane />, 
        label: 'Aviation Insurance',
        details: [
            "Aircraft Hull & Liability", 
            "Passenger Liability", 
            "Hangar Keeper's Liability"
        ]
    },
    { 
        icon: <Scale />, 
        label: 'Liability Insurance',
        details: [
            "Public Liability", 
            "Product Liability", 
            "Employer’s Liability", 
            "Professional Indemnity", 
            "Directors & Officers Liability"
        ]
    },
    { 
        icon: <Bomb />, 
        label: 'Political Violation & Terrorism Insurance',
        details: ["Political Violence and Terrorism"]
    },
    { 
        icon: <Flame />, 
        label: 'Fire and General Accident Insurance',
        details: [
            "Fire & Allied Perils", 
            "Household Insurance", 
            "Burglary Insurance", 
            "Money Insurance", 
            "All Risks"
        ]
    },
    { 
        icon: <Ship />, 
        label: 'Marine Insurance',
        details: [
            "Marine Cargo (Air & Sea)", 
            "Inland Transit", 
            "Marine Hull"
        ]
    },
    { 
        icon: <Sprout />, 
        label: 'Agriculture Insurance',
        details: [
            "Crop Insurance", 
            "Poultry Insurance", 
            "Livestock Insurance"
        ]
    },
    { 
        icon: <Database />, 
        label: 'Micro Insurance',
        details: [
            "Index-Based Crop Insurance", 
            "Index-Based Livestock Insurance"
        ]
    },
    { 
        icon: <User />, 
        label: "Workmen's Compensation Insurance",
        details: [
            "Workmen’s Compensation (24 & 12 Hours Cover)"
        ]
    },
    { 
        icon: <HandCoins />, 
        label: 'Pecuniary Insurance',
        details: [
            "Money Guarantee", 
            "Fidelity Guarantee", 
            "Performance Bond", 
            "Bid Bond", 
            "Custom Bond"
        ]
    },
    { 
        icon: <Stethoscope />, 
        label: 'Accident & Health Insurance',
        details: [
            "Personal Accident (Individual & Group)", 
            "Medical Insurance", 
            "Travel Insurance"
        ]
    },
    { 
        icon: <Car />, 
        label: 'Motor Insurance',
        details: [
            "Comprehensive Cover", 
            "Third Party Cover", 
            "Own Damage"
        ]
    },
    { 
        icon: <Settings />, 
        label: 'Engineering Insurance',
        details: [
            "Contractor’s All Risk (CAR)", 
            "Erection All Risk (EAR)", 
            "Machinery Breakdown", 
            "Boiler Explosion"
        ]
    }
];

function Products() {
    return (
        <>
            <Header />
            <div className="text-[#343989] px-12">
                <h2 className="text-3xl font-bold mb-6 text-start mt-8"> We Offer</h2>
                <p className="text-lg text-gray-600 text-start mx-auto mb-12">
                    Explore the range of services we offer and discover how AIC can safeguard your future.
                </p>

                {/* Life Insurance Section with Decorative Lines */}
                <div className="flex items-center justify-center mb-6">
                    <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                    <h3 className="text-2xl font-semibold text-[#343989]">Life Insurance</h3>
                    <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                </div>

                <div className="flex justify-center mb-10">
                    <div className="bg-[#343989] text-white p-10 rounded-lg w-80 flex flex-col items-start">
                        <HeartPulse size={70} />
                        <h4 className="text-xl font-bold mt-4">Life Insurance</h4>
                        <ul className="text-sm mt-2 text-start ml-3 list-disc">
                            {products[0].details.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-center mb-6">
                    <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                    <h3 className="text-2xl font-semibold text-[#343989]">General Insurance</h3>
                    <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-6xl">
                    {products.slice(1).map((products, index) => (
                        <div key={index} className="bg-[#343989] text-white p-10 rounded-lg flex flex-col items-start">
                            {React.cloneElement(products.icon, { size: 60 })}
                            <h4 className="text-lg font-bold mt-4">{products.label}</h4>
                            <ul className="text-sm mt-2 text-start ml-3 list-disc">
                                {products.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Products;
