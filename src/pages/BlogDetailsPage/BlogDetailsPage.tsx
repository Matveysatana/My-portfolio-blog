import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogDetailsPost } from "store/postBlogDetails";
import "./BlogDetailsPage.css";

const BlogDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const post = blogDetailsPost.find((post) => post.id === id);

    useEffect(() => {
        window.scrollTo(0, 0); // Скролл к началу страницы
    }, [id]);

    if (!post) {
        return <p>Пост не найден.</p>;
    }

    return (
        <div className="blog-details-page">
            <button className="sticky-back-button" onClick={() => navigate("/blog")}>
                &#8592; Назад к блогу
            </button>

            <div className="blog-details-container">
                <img
                    src={post.src}
                    alt={post.subtitle}
                    className="blog-details-image"
                />
                <div className="blog-details-header">
                    <h1 className="blog-details-title">{post.subtitle}</h1>
                    <p className="blog-details-meta">
                        Время на чтение: {post.readingTime}
                    </p>
                </div>
                <div className="blog-details-content">
                    {post.content.map((section, index) => {
                        switch (section.type) {
                            case "paragraph":
                                return <p key={index}>{section.text}</p>;
                            case "subtitle":
                                return <h2 key={index}>{section.text}</h2>;
                            case "quote":
                                return (
                                    <blockquote key={index} className="blog-details-quote">
                                        {section.text}
                                    </blockquote>
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
                <div className="blog-details-tags">
                    {post.tags.map((tag, index) => (
                        <span key={index} className="blog-details-tag">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
