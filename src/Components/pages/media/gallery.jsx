import React, { useEffect, useState } from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/gallery/gallery.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load gallery');
        return res.json();
      })
      .then((data) => {
        setGalleries(data.galleries);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading gallery...</div>;
  if (error) return <div>Error loading gallery: {error}</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">Gallery</div>

        {galleries.map((gallery) => (
          <div key={gallery.id} className="mb-12">
            <h2 className="text-2xl font-semibold text-[#343989] mb-4">
              {gallery.title}
            </h2>
            {gallery.summary}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.images.map((img, idx) => (
                <img
                  key={idx}
                  src={`/gallery/${gallery.slug}/${img}`}
                  alt={`${gallery.title} ${idx + 1}`}
                  className="w-full h-48 object-cover rounded shadow-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
