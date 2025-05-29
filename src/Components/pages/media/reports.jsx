import React, { useEffect, useState } from "react";
import Header from "../../nav/header";
import Footer from "../../nav/footer";

const Reports = () => {
  const [pdfFiles, setPdfFiles] = useState([
      { name: 'AFRICA INSURANCE COMPANY S.C. ANNUAL REPORT 2023-2024.pdf', 
        path: '/reports/AFRICA-INSURANCE-COMPANY-S.C.-ANNUAL-REPORT-2023-2024.pdf'},

        { name: 'AFRICA-INSURANCE-COMPANY-S.C.-ANNUAL-REPORT-2022-23.pdf', 
        path: '/reports/AFRICA INSURANCE COMPANY S.C. ANNUAL REPORT 2022-2023.pdf'}
      // Add more files as needed
    ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    // Fetch the list of PDF files from the reportss directory
    fetch('/reports/manifest.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load Reports');
        return response.json();
      })
      .then((data) => {
        setPdfFiles(data.files);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openPdfInNewTab = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };


  if (loading)
    return (
      <div>
        <Header />
        <div className="ml-12 mr-12">
          <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
            <p>Loading Annual Reports...</p>
          </div>
        </div>
        <Footer />
      </div>
    );

  if (error)
    return (
      <div>
        <Header />
        <div className="ml-12 mr-12">
          <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
            <p>Error loading reports: {error.message}</p>
          </div>
        </div>
        <Footer />
      </div>
    );


return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ml-12 mr-12">
        <div className="text-3xl mt-8 mb-8 text-[#343989] font-bold">
          <p>Annual Reports</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {pdfFiles.map((file, index) => (
            <div 
              key={index}
              className="text-center border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#343989] mb-3 line-clamp-2">
                {file.name.replace('.pdf', '')}
              </h3>
            
              
              <button
                onClick={() => openPdfInNewTab(`/reports/${file.name}`)}
                className="mt-auto px-4 py-2 bg-[#343989] text-white rounded-md hover:bg-[#2a2f7a] transition-colors font-medium"
              >
                View PDF
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
