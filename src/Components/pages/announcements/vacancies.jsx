import React, { useEffect, useState } from "react";
import Header from "../../nav/header";
import Footer from "../../nav/footer";

const Vacancies = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    fetch("/vacancies/vacancies.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load Vacancies");
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

  if (loading)
    return (
      <div>
        <Header />
        <div className="ml-12 mr-12">
          <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
            <p>Vacancies is Loading</p>
          </div>
        </div>
        <Footer />
      </div>
    );

  if (error || !posts.length)
    return (
      <div>
        <Header />
        <div className="ml-12 mr-12">
          <div className="text-3xl mt-8 mb-4 text-[#343989] font-bold">
            <p>No Vacancy</p>
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
          <p>Vacancies</p>
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
                  <strong>Date:</strong>{" "}
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </div>

                <div className="text-gray-700 mb-4">
                  <strong>Location:</strong> {post.location}
                </div>

                <div
                  className={`text-gray-700 mb-4 ${isExpanded ? "" : "line-clamp-3"}`}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <div className="text-gray-700 mb-4">
                  <strong>Requierments:</strong> {post.requierments}
                </div>
                <div className="text-gray-700 mb-4">
                  <strong>Salary:</strong> {post.salary}
                </div>
                <div className="text-gray-700 mb-4">
                  <strong>Deadline:</strong> {post.applicationDeadline}
                </div>
                <div className="text-gray-700 mb-4">
                  <div className="text-gray-700 mb-4">
                    <strong>
                      Submit your CV and Resume at the following link:{" "}
                    </strong>
                    <div className="text-blue-700 mb-4">
                      <span>
                        <a
                          href={post.apply}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.apply}
                        </a>
                      </span>
                    </div>
                  </div>{" "}
                </div>
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
