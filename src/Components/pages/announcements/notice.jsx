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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!posts || posts.length === 0) return <div>No posts found.</div>;

  return (
    <div>
      <Header />
      {posts.map((post) => {
        const { acf } = post;
        const { location, date, content , title} = acf;

        return (
          <div key={post.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h2><strong>Title:</strong> {post.title.rendered}</h2> 
           
            <p><strong>Content</strong>{content} </p>
            <p><strong>Time:</strong> {date}</p>
            <p><strong>Location:</strong> {location}</p> 
            {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />  */}
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Notice;