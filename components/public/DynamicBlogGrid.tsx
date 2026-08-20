'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  slug: string;
  category?: string;
  shortDescription?: string;
  publishedAt?: string;
  featuredImage?: string;
};

export default function DynamicBlogGrid() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/public/blogs')
      .then((r) => r.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category).filter(Boolean))) as string[]];
  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="sec sec-white">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <p className="tag green-text">Latest Posts</p>
          <h2 className="heading blue-text">From the NAVNEET TOPTECH Blog.</h2>
        </div>
        {categories.length > 1 && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="tag green-text"
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: activeCategory === category ? 'var(--blue)' : 'var(--light)',
                  color: activeCategory === category ? '#fff' : 'var(--muted)',
                  cursor: 'pointer',
                  fontFamily: 'var(--fh)',
                  border: activeCategory === category ? '1px solid var(--blue)' : '1px solid var(--border)',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <div className="admin-empty">Loading blog posts…</div>
      ) : !filtered.length ? (
        <div className="admin-empty">No blog posts published yet.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ background: 'var(--light)', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {post.featuredImage ? (
                  <img src={post.featuredImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontSize: 28 }}>📝</span>
                )}
              </div>
              <div style={{ padding: '1.25rem' }}>
                {post.category && (
                  <span className="tag green-text" style={{ display: 'inline-block', background: 'rgba(27,138,115,0.1)', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 10, marginBottom: 8 }}>
                    {post.category}
                  </span>
                )}
                <div className="title blue-text" style={{ marginBottom: 8 }}>{post.title}</div>
                <div className="subtitle dark-text">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }) : ''}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
