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
  author?: string;
};

export default function DynamicNewsGrid() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/public/news')
      .then((r) => r.json())
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (!posts.length) return null;

  return (
    <>
      <p className="tag green-text">Latest News</p>
      <h2 className="sec-title heading blue-text">News & Updates.</h2>
      <div className="g3" style={{ marginTop: '1.5rem' }}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/news/${post.slug}`}
            style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ background: 'var(--light)', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              {post.featuredImage ? (
                <img src={post.featuredImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span style={{ fontSize: 28 }}>📰</span>
              )}
            </div>
            <div style={{ padding: '1.25rem' }}>
              {post.category && (
                <span className="tag green-text" style={{ display: 'inline-block', background: 'rgba(27,138,115,0.1)', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 10, marginBottom: 8 }}>
                  {post.category}
                </span>
              )}
              <div className="title blue-text" style={{ marginBottom: 6 }}>{post.title}</div>
              <div className="subtitle dark-text">
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
