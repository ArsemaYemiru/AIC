import React from "react";
import Header from "../../nav/header";
import Footer from "../../nav/footer";
import pdf from '../../../assets/testClaim.pdf';

function Claims() {
    // Open PDF in new tab
    const openPdfInNewTab = () => {
        window.open(pdf, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <Header/>
            <div>
                <div className="flex-grow ml-12 mr-12">
                    <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
                        <p>Claims</p>
                    </div>
                </div>
                {/* Centered Bordered Container */}
                <div className="flex flex-col items-center justify-center mt-8 mb-8">
                    <div className="border border-gray-200 rounded-lg p-8 shadow-sm w-full max-w-xl text-center">
                        {/* Title */}
                        <h1 className="text-xl mb-6 text-[#343989] font-bold">
                            Claim Form
                        </h1>
                        
                        {/* View Button */}
                        <button
                            onClick={openPdfInNewTab}
                            className="px-6 py-3 bg-[#343989] text-white rounded-md hover:bg-[#2a2f7a] transition-colors font-medium"
                        >
                            View Claim Form
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Claims;