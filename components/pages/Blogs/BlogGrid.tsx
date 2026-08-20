'use client';

import { useState } from 'react';

export default function BlogGrid({ initialBlogs, baseUrl = '/blogs' }: { initialBlogs: any[]; baseUrl?: string }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const isArticles = baseUrl.includes('article');

  // Get unique categories from blogs
  const categories = ["All", ...Array.from(new Set(initialBlogs.map(b => b.category).filter(Boolean)))];

  const filteredPosts =
    activeCategory === "All"
      ? initialBlogs
      : initialBlogs.filter((post) => post.category === activeCategory);

  return (
    <section className="sec sec-white">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <p className="tag green-text">{isArticles ? "Articles & Research" : "Latest Posts"}</p>
          <h2 className="heading blue-text">
            {isArticles ? "Articles & Thought Leadership." : "From the NAVNEET TOPTECH Blog."}
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((category: any) => (
            <div className="tag green-text"
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                background:
                  activeCategory === category
                    ? "var(--blue)"
                    : "var(--light)",
                color:
                  activeCategory === category
                    ? "#fff"
                    : "var(--muted)",
                cursor: "pointer",
                fontFamily: "var(--fh)",
                border:
                  activeCategory === category
                    ? "1px solid var(--blue)"
                    : "1px solid var(--border)",
              }}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {filteredPosts.map((post, index) => (
          <div
            key={`${post.slug || index}`}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              background: "var(--white)",
            }}
          >
            {post.image ? (
              <div 
                style={{
                  background: `url(${post.image}) center/cover no-repeat`,
                  aspectRatio: "16/9",
                  borderBottom: "1px solid var(--border)",
                }}
              />
            ) : (
              <div
                style={{
                  background: "var(--light)",
                  borderBottom: "1px solid var(--border)",
                  aspectRatio: "16/9",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "28px" }}>{isArticles ? "📄" : "📝"}</div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    fontFamily: "var(--fh)",
                    color: "var(--muted)",
                  }}
                >
                  Featured Image
                </div>
              </div>
            )}

            <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div className="tag green-text"
                style={{
                  display: "inline-block",
                  background: "rgba(27, 138, 115, 0.1)",
                  textTransform: "uppercase",
                  padding: "3px 9px",
                  borderRadius: "10px",
                  marginBottom: "8px",
                  fontFamily: "var(--fh)",
                  alignSelf: "flex-start",
                }}
              >
                {post.category || (isArticles ? 'Article' : 'Blog')}
              </div>

              <div className="title blue-text" style={{ marginBottom: "8px", flex: 1 }}>
                {post.slug ? (
                  <a href={`${baseUrl}/${post.slug}`} className="hover:underline">{post.title}</a>
                ) : (
                  post.title
                )}
              </div>

              {post.shortDescription && (
                <p className="subtitle dark-text" style={{ fontSize: "13px", marginBottom: "12px", color: "var(--muted)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {post.shortDescription}
                </p>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", fontSize: "12px", color: "var(--muted)" }}>
                <span>{post.date}</span>
                {post.slug && (
                  <a href={`${baseUrl}/${post.slug}`} className="link-more" style={{ fontSize: "12px" }}>
                    {isArticles ? "Read Article →" : "Read Blog →"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

