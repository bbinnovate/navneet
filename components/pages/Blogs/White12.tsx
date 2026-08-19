"use client";

import { useState } from "react";

const categories = ["All", "Technology", "Teaching", "NEP 2020", "AI"];

const posts = [
  {
    category: "Technology",
    title: "How AI is Changing the Way Indian Schools Assess Students",
    date: "July 2025",
    icon: "📝",
    imageLabel: "Featured Image",
    placeholder: false,
  },
  {
    category: "Teaching",
    title: "Why Offline-Capable EdTech is the Right Choice for India's Classrooms",
    date: "June 2025",
    icon: "📝",
    imageLabel: "Featured Image",
    placeholder: false,
  },
  {
    category: "NEP 2020",
    title: "Understanding NEP 2020: What It Means for CBSE Schools",
    date: "May 2025",
    icon: "📝",
    imageLabel: "Featured Image",
    placeholder: false,
  },
  {
    category: "AI",
    title: "Personalised Learning at Scale: What Navneet AI Does Differently",
    date: "April 2025",
    icon: "📝",
    imageLabel: "Featured Image",
    placeholder: false,
  },
  {
    category: "Technology",
    title: "[ Blog Title — Replace with Actual Post ]",
    date: "[ Date ]",
    icon: "📋",
    imageLabel: "Blog Featured Image",
    placeholder: true,
  },
  {
    category: "Teaching",
    title: "[ Blog Title — Replace with Actual Post ]",
    date: "[ Date ]",
    icon: "📋",
    imageLabel: "Blog Featured Image",
    placeholder: true,
  },
];

export default function White12() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

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
          <p className="tag green-text">Latest Posts</p>
          <h2 className="heading blue-text">
            From the NAVNEET TOPTECH Blog.
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((category) => (
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
            key={`${post.category}-${index}`}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                background: "var(--light)",
                borderBottom: post.placeholder
                  ? "2px dashed var(--border)"
                  : "1px solid var(--border)",
                aspectRatio: "16/9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "1.5rem",
                textAlign: "center",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "28px" }}>
                {post.icon}
              </div>

              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  fontFamily: "var(--fh)",
                  color: "var(--muted)",
                }}
              >
                {post.imageLabel}
              </div>

              <div
                style={{
                  fontSize: "10px",
                  color: "var(--border)",
                }}
              >
                [ 1280×720px ]
              </div>

              {post.placeholder && (
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "10px",
                    background: "var(--light)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "2px 8px",
                    fontSize: "10px",
                    fontWeight: "700",
                    fontFamily: "var(--fh)",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Placeholder
                </div>
              )}
            </div>

            <div style={{ padding: "1.25rem" }}>
              <div className="tag green-text"
                style={{
                  display: "inline-block",
                  background: "rgba(27, 138, 115, 0.1)",
                 
                  textTransform: "uppercase",
                  padding: "3px 9px",
                  borderRadius: "10px",
                  marginBottom: "8px",
                  fontFamily: "var(--fh)",
                }}
              >
                {post.category}
              </div>

              <div className="title blue-text"
                style={{
                 
                  marginBottom: "8px",
                }}
              >
                {post.title}
              </div>

              <div className="subtitle dark-text"
               
              >
                {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}