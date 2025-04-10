import React, { useEffect, useState } from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    fetch('http://localhost/mywordpress/wp-json/wp/v2/posts?categories=8&_embed&acf_format=standard')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const extractImages = (post) => {
    const images = [];
    
    // ACF Gallery images
    if (post.acf?.gallery) {
      post.acf.gallery.forEach(image => {
        images.push({
          src: image.url,
          alt: image.alt || post.title.rendered
        });
      });
    }
    
    // Featured image
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      images.unshift({
        src: post._embedded['wp:featuredmedia'][0].source_url,
        alt: post.title.rendered
      });
    }
    
    // Content images
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, 'text/html');
    const imgElements = doc.querySelectorAll('img');
    
    imgElements.forEach(img => {
      images.push({
        src: img.src,
        alt: img.alt || 'Gallery image'
      });
    });
    
    return images;
  };

  if (loading) return (
    <div>
      <Header />
      <div className="ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
          <p>Gallery is Loading</p>
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
          <p>Gallery Error: {error.message}</p>
        </div>
      </div>
      <Footer />
    </div>
  );

  if (!posts || posts.length === 0) return (
    <div>
      <Header />
      <div className="ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
          <p>No Gallery Items Yet</p>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
          <p>Gallery</p>
        </div>

        <div className="container mx-auto px-4 py-8">
          {posts.map((post) => {
            const { acf } = post;
            const images = extractImages(post);
            const isExpanded = expandedPosts[post.id];

            return (
              <div 
                key={post.id} 
                className="mb-6 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <h2 className="text-2xl font-semibold mb-4 text-[#343989]">
                  {post.title.rendered}
                </h2>
                
    
                
                {/* ACF Description with More/Less toggle */}
                {acf?.description && (
                  <div className="mb-4">
                    <div 
                      className={`text-gray-700 ${isExpanded ? '' : 'line-clamp-3'}`}
                      dangerouslySetInnerHTML={{ __html: acf.description }} 
                    />
                    <button
                      onClick={() => toggleExpand(post.id)}
                      className="text-blue-500 hover:text-blue-700 font-semibold mt-2"
                    >
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                )}
                
                {/* Responsive image grid (2 columns on desktop, 1 column on mobile) */}
                {images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;