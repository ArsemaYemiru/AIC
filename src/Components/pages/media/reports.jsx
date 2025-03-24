import React from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';
import pdf from '../../../assets/AFRICA-INSURANCE-COMPANY-S.C.-ANNUAL-REPORT-2023-2024.pdf';

const Reports = () => {
  const fileName = "AFRICA-INSURANCE-COMPANY-S.C.-ANNUAL-REPORT-2023-2024.pdf";

  // Handle PDF download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Header />
      <div className="flex-grow ml-12 mr-12 mt-8 ">
        <div className="text-3xl mb-6 text-[#343989] font-bold">
            <h2>Annual Reports</h2></div>
        
        {/* Centered Bordered Container */}
        <div className="flex flex-col items-center justify-center mt-8 mb-8">
          <div className="border border-gray-200 rounded-lg p-8 shadow-sm w-full max-w-2xl text-center">
            {/* Title */}
            <h1 className="text-xl mb-6 text-[#343989] font-bold">
            AFRICA-INSURANCE-COMPANY-S.C.-ANNUAL-REPORT-2023-2024
            </h1>
            
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-[#343989] text-white rounded-md hover:bg-[#2a2f7a] transition-colors font-medium"
            >
              Download Annual Report 2023-2024
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;