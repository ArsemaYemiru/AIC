import React, { useEffect, useState } from 'react';
import Header from '../../nav/header';
import Footer from '../../nav/footer';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    fetch('/news/news.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load news');
        return response.json();
      })
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  if (loading) return (
    <div>
      <Header />
      <div className="ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
          <p>News is Loading</p>
        </div>
      </div>
      <Footer />
    </div>
  );

  if (error || !posts.length) return (
    <div>
      <Header />
      <div className="ml-12 mr-12">
        <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
          <p>No News</p>
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
          <p>News</p>
        </div>

        <div className="container mx-auto px-4 py-8">
          {posts.map((post) => {
            const isExpanded = expandedPosts[post.id];
            return (
              <div
                key={post.id}
                className="mb-6 p-6 border border-gray-300 rounded-lg shadow-md bg-white"
              >
                <h2 className="text-2xl font-bold text-[#343989] mb-4">
                  {post.title}
                </h2>
                <div className="text-gray-700 mb-4">
                  <strong>Date:</strong>{' '}
                  {new Date(post.date).toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </div>
                <div
                  className={`text-gray-700 mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <button
                  onClick={() => toggleExpand(post.id)}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  {isExpanded ? 'Less' : 'More'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
