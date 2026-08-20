import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { db } from '@/lib/firebase/admin';
import { sanitizeHtml } from '@/lib/sanitize';
import { buildMetadata } from '@/lib/seo';

async function item(type: string, slug: string) {
  const result = await db.collection(type)
    .where('status', '==', 'published')
    .where('slug', '==', slug)
    .limit(1)
    .get();
  return result.empty ? null : { id: result.docs[0].id, ...result.docs[0].data() } as Record<string, string>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string; slug: string }>;
}): Promise<Metadata> {
  const { type, slug } = await params;
  const post = await item(type, slug);
  if (!post) return { title: 'Not found' };
  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.shortDescription || '',
    path: `/${type}/${slug}`,
    keywords: post.seoKeywords,
    ogImage: post.featuredImage,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ type: string; slug: string }>;
}) {
  const { type, slug } = await params;
  if (!['news', 'articles', 'blogs', 'careers'].includes(type)) notFound();

  const post = await item(type, slug);
  if (!post) notFound();

  const safeContent = sanitizeHtml(post.content || '');

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-tag">{type.slice(0, -1)}</div>
        <h1>{post.title}</h1>
        <p>{post.shortDescription}</p>
      </section>
      <article className="sec sec-white" style={{ maxWidth: 900, margin: 'auto' }}>
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            style={{ width: '100%', borderRadius: 12, marginBottom: 24, maxHeight: 420, objectFit: 'cover' }}
          />
        )}
        {post.author && <p className="tag green-text">{post.author}</p>}
        {type === 'careers' && (
          <div className="subtitle dark-text" style={{ marginBottom: 20 }}>
            {[post.location, post.department, post.employmentType, post.experience]
              .filter(Boolean)
              .join(' · ')}
          </div>
        )}
        <div
          className="content-prose"
          dangerouslySetInnerHTML={{ __html: safeContent }}
        />
        {type === 'careers' && (
          <Link href={`/careers/${slug}/apply`} className="btn-gold" style={{ display: 'inline-block', marginTop: 24 }}>
            Apply for this role
          </Link>
        )}
      </article>
      <Footer />
    </main>
  );
}
