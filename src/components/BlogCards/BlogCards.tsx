import React, { useState } from "react";
import "./BlogCards.css";
import { blogPosts } from "store/posts";
import { PostType } from "../../types/post-type";
import { Link } from "react-router-dom";

const BlogCards = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>(blogPosts);

  const handleSearch = (query: any) => {
    setSearchQuery(query);
    const filtered = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="blog-cards-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск по категориям..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="cards-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div key={index} className="card">
              <img src={post.src} alt={post.title} className="card-image" />
              <div className="card-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p className="card-date">{post.createdAt}</p>
                <Link to={`/blog/${post.id}`} className="card-button">
                  Узнать подробнее
                </Link>

              </div>
            </div>
          ))
        ) : (
          <p className="no-results">Нет постов по вашему запросу.</p>
        )}
      </div>
    </div>
  );
};

export default BlogCards;