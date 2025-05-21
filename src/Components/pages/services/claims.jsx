import React, { useEffect, useState } from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';

const Claims = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/mywordpress/wp-json/wp/v2/posts?categories=12&_embed')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const claimsWithPdfs = data.map(post => {
          // Extract PDF URLs from post content
          const pdfUrls = extractPdfUrls(post.content.rendered);
          
          return {
            id: post.id,
            title: post.title.rendered,
            pdfUrls: pdfUrls,
            date: post.date,
            featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url
          };
        }).filter(claim => claim.pdfUrls.length > 0); // Only keep claims with PDFs
        
        setClaims(claimsWithPdfs);
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
      text: link.textContent || 'Download PDF'
    }));
  };

  const openPdfInNewTab = (pdfUrl) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading)
    return (
      <div>
        <Header />
        <div className="ml-12 mr-12">
          <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
            <p>Loading Claims...</p>
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
            <p>Error loading claims: {error.message}</p>
          </div>
        </div>
        <Footer />
      </div>
    );

  if (!claims || claims.length === 0)
    return (
      <div>
        <Header />
        <div className="ml-12 mr-12">
          <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
            <p>No Claims Available</p>
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
          <p>Claims</p>
        </div>
        <div>
          <button className="text-green-500">Submit Claim</button>
        </div>
        {/* 3-column grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {claims.map((claim) => (
            <div 
              key={claim.id}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Featured image if available */}
              {claim.featuredImage && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={claim.featuredImage} 
                    alt={claim.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-[#343989] mb-3 line-clamp-2">
                {claim.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {new Date(claim.date).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </p>
              
              {/* PDF download buttons */}
              <div className="mt-auto space-y-2">
                {claim.pdfUrls.map((pdf, index) => (
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

export default Claims;