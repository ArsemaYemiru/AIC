import React, { useEffect, useState } from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/mywordpress/wp-json/wp/v2/posts?categories=11&_embed')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const reportsWithPdfs = data.map(post => {
          // Extract PDF URLs from post content
          const pdfUrls = extractPdfUrls(post.content.rendered);
          
          return {
            id: post.id,
            title: post.title.rendered,
            pdfUrls: pdfUrls,
            date: post.date,
            featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
            excerpt: post.excerpt.rendered
          };
        }).filter(report => report.pdfUrls.length > 0);
        
        setReports(reportsWithPdfs);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Function to extract PDF URLs from HTML content
  const extractPdfUrls = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const links = doc.querySelectorAll('a[href$=".pdf"]');
    
    return Array.from(links).map(link => ({
      url: link.href,
      text: link.textContent || 'View Report'
    }));
  };

  const openPdfInNewTab = (pdfUrl) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading) return (
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

  if (error) return (
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

  if (!reports || reports.length === 0) return (
    <div>
      <Header />
      <div className="ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
          <p>No Annual Reports Available</p>
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
          <h2>Annual Reports</h2>
        </div>

        {/* 3-column grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reports.map((report) => (
            <div 
              key={report.id}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              
              
              <h3 className="text-xl text-center font-semibold text-[#343989] mb-3 line-clamp-2">
                {report.title}
              </h3>
              
            
             
              
              {/* PDF view buttons */}
              <div className="mt-auto space-y-2">
                {report.pdfUrls.map((pdf, index) => (
                  <button
                    key={index}
                    onClick={() => openPdfInNewTab(pdf.url)}
                    className="w-full px-4 py-2 bg-[#343989] text-white rounded-md hover:bg-[#2a2f7a] transition-colors font-medium"
                  >
                    {pdf.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;