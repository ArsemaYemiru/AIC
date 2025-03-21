import React, { useEffect, useState } from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';

const Vacancies = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/mywordpress/wp-json/wp/v2/posts?categories=5&_embed')
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

  if (loading) return (
    <div>
      <Header />
      <div className="ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
          <p>Vacancies: Loading</p>
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
          <p>Vacancies Error: {error.message}</p>
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
          <p>No Vacancies Yet</p>
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
          <p>Job Vacancies</p>
        </div>

        <div className="container mx-auto px-4 py-8">
          {posts.map((post) => {
            const { acf } = post;
            

            const { title, description, deadline, requirements, apply, contact, location, jobType, salary } = acf;

            return (
              <div 
                key={post.id} 
                className="mb-6 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <h2 className="text-2xl font-semibold mb-4">{post.title.rendered}</h2>
                <p className="mb-2"><strong>Description:</strong> {description}</p>
                <p className="mb-2"><strong>Requirements:</strong> {requirements}</p>
                <p className="mb-2"><strong>Job Type:</strong> {jobType}</p>
                <p className="mb-2"><strong>Salary:</strong> {salary}</p>
                <p className="mb-2"><strong>Deadline:</strong> {deadline}</p>
                <p className="mb-2"><strong>Location:</strong> {location}</p>
                <p className="mb-2"><strong>Contact:</strong> {contact}</p>

              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vacancies;
