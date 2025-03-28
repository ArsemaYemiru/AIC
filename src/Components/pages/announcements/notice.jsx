import React, { useEffect, useState } from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';
// import DOMPurify from 'dompurify'; 

const Notice = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/mywordpress/wp-json/wp/v2/posts?categories=3&_embed')
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

  if (loading) return <div>
    <Header />
  <div className="ml-12 mr-12">
  <div className="text-3xl mt-8 mb-4 text-[#343989] font-size-10 font-bold">
      <p>Meeting Notice: Loading</p>
    </div></div><Footer /></div>;
  if (error) return  <div>
  <Header />
<div className="ml-12 mr-12">
<div className="text-3xl mt-8 mb-4 text-[#343989] font-size-10 font-bold">
    <p>Meeting Notice Error: {error.message}</p>
  </div></div><Footer /></div>;
  if (!posts || posts.length === 0) return <div>
  <Header />
<div className="ml-12 mr-12">
<div className="text-3xl mt-8 mb-4 text-[#343989] font-size-10 font-bold">
    <p>No Meeting Notices Yet</p>
  </div></div><Footer /></div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-size-10 font-bold">
          <p>Meeting Notice</p>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {posts.map((post) => {
            const { acf } = post;
            const { location, date, content, title } = acf;

            return (
              <div 
                key={post.id} 
                className="mb-6 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <h2 className="text-2xl font-semibold mb-4">{post.title.rendered}</h2>
                <p className="mb-2"><strong>Content:</strong> {content}</p>
                <p className="mb-2"><strong>Date:</strong> {date}</p>
                <p className="mb-2"><strong>Location:</strong> {location}</p>
                {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} /> */}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notice;
