import { adminDb } from '@/lib/firebase/admin';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';

const staticBlogs = [
  {
    slug: "navneet-toptech-edtech-trends-2025",
    category: "Technology",
    title: "Top 5 EdTech Trends Shaping K-12 Learning in 2025",
    date: "August 01, 2025",
    shortDescription: "From AI-powered assessments to immersive interactive smartboards, discover key trends driving digital education forward.",
    featuredImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    content: "<p>As we navigate through 2025, educational technology continues to evolve rapidly. The five dominant trends include adaptive AI tutoring, gamified skill assessments, interactive 3D classroom visualizer modules, unified school LMS platforms, and continuous teacher professional development suites.</p><p>Adopting these tools allows schools to foster future-ready learning environments tailored to modern student needs.</p>",
    author: "Navneet Toptech Editorial"
  },
  {
    slug: "building-interactive-classrooms",
    category: "Pedagogy",
    title: "Building Interactive Classrooms: Moving Beyond Passive Lectures",
    date: "July 15, 2025",
    shortDescription: "How interactive visual aids and real-time polls turn traditional lectures into collaborative learning experiences.",
    featuredImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    content: "<p>Interactive classrooms engage students through active participation, collaborative problem solving, and multimedia demonstrations. When students interact with learning material directly, comprehension and retention increase significantly.</p><p>Modern digital tools enable teachers to host quick check-for-understanding quizzes, collaborative group activities, and visual simulations during live sessions.</p>",
    author: "Pedagogy Research Team"
  }
];

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let blogItem: any = null;
  try {
    const snapshot = await adminDb.collection('blogs').where('slug', '==', slug).limit(1).get();
    if (!snapshot.empty) {
      blogItem = snapshot.docs[0].data();
    }
  } catch (error) {
    console.error('Error fetching blog details:', error);
  }

  if (!blogItem) {
    blogItem = staticBlogs.find((item) => item.slug === slug) || null;
  }

  if (!blogItem) {
    notFound();
  }

  const category = blogItem.category || 'Blog';
  const featuredImage = blogItem.featuredImage || blogItem.image || null;
  const dateStr = blogItem.date || (blogItem.publishDate ? (blogItem.publishDate._seconds ? new Date(blogItem.publishDate._seconds * 1000).toLocaleDateString() : new Date(blogItem.publishDate).toLocaleDateString()) : (blogItem.createdAt ? new Date(blogItem.createdAt._seconds * 1000).toLocaleDateString() : ''));

  return (
    <main>
      <section className="sec sec-white pt-28 pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* 1. Large featured image at the top */}
          {featuredImage ? (
            <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img 
                src={featuredImage} 
                alt={blogItem.title} 
                className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[480px] object-cover"
              />
            </div>
          ) : (
            <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 flex flex-col items-center justify-center py-20 text-center">
              <div className="text-5xl mb-3">📝</div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Blog Post</p>
            </div>
          )}

          {/* 2. Category */}
          <div className="mb-3">
            <span className="tag green-text inline-block px-3 py-1 bg-[rgba(27,138,115,0.1)] rounded-full text-xs font-bold uppercase tracking-wider">
              {category}
            </span>
          </div>

          {/* 3. Title */}
          <h1 className="heading blue-text text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {blogItem.title}
          </h1>

          {/* 4. Date */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            <span>{dateStr}</span>
            {blogItem.author && (
              <>
                <span>•</span>
                <span className="font-medium text-gray-700 capitalize">{blogItem.author}</span>
              </>
            )}
          </div>

          {/* 5. Description/content */}
          {blogItem.shortDescription && (
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-6 italic">
              {blogItem.shortDescription}
            </p>
          )}

          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blogItem.content || `<p>${blogItem.shortDescription || 'No content available.'}</p>` }}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}

