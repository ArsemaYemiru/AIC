import React, { useEffect, useState } from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';

const Gallery = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]); 

  useEffect(() => {
    fetch('http://localhost/mywordpress/wp-json/wp/v2/posts/8?_embed')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        extractImagesFromPost(data); // Extract images from the post
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Extract image URLs from the post content
  const extractImagesFromPost = (post) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, 'text/html');
    const imgElements = doc.querySelectorAll('img'); // Find all <img> tags
    const imageUrls = Array.from(imgElements).map((img) => img.src); // Extract src attributes
    setImages(imageUrls);
  };

  if (loading)
    return (
      <div>
        <Header />
        <div className="ml-12 mr-12">
          <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
            <p>Loading Gallery...</p>
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
            <p>No Gallery</p>
          </div>
        </div>
        <Footer />
      </div>
    );

  if (!post)
    return (
      <div>
        <Header />
        <div className="ml-12 mr-12">
          <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
            <p>No Gallery Found</p>
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
          <p>{post.title.rendered}</p>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((imageUrl, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={imageUrl}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;