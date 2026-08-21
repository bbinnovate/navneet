import { adminDb } from '@/lib/firebase/admin';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { isContentPublished, formatDisplayDate } from '@/lib/content/helpers';
import { getArticleDetailMetadata } from '@/lib/seo/dynamic';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const staticArticles = [
  {
    slug: "transforming-k12-education-with-ai-tools",
    category: "EdTech Innovation",
    title: "Transforming K-12 Classrooms with Next-Gen AI Learning Platforms",
    date: "Aug 15, 2025",
    shortDescription: "Exploring how personalized AI learning pathways are improving student retention and teacher productivity in schools across India.",
    featuredImage: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80",
    content: "<p>Artificial Intelligence is no longer just a buzzword in education; it is actively reshaping classroom dynamics across K-12 schools. By leveraging smart diagnostic tools and personalized content recommendations, educators can address diverse learning speeds effectively.</p><p>With automated grading and real-time skill gaps analysis, teachers spend less time on routine administrative work and more time on high-impact instructional engagement.</p>",
    author: "Navneet Toptech Research Team",
    status: "published",
  },
  {
    slug: "future-of-hybrid-classrooms-in-india",
    category: "Future of Learning",
    title: "The Rise of Hybrid Classrooms: Integrating Physical Books with Digital Content",
    date: "Jul 28, 2025",
    shortDescription: "How phygital education ecosystems connect traditional print textbooks with interactive digital assessments.",
    featuredImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    content: "<p>Phygital education creates a harmonious bridge between tangible physical textbooks and interactive digital experiences. Students interact with physical workbooks while accessing augmented digital visual guides, simulations, and interactive quizzes.</p><p>This dual approach reinforces conceptual understanding while retaining tactile writing habits essential for foundational cognitive development.</p>",
    author: "Academic Advisory Board",
    status: "published",
  },
  {
    slug: "empowering-teachers-digital-skills-2025",
    category: "Teacher Empowerment",
    title: "Empowering Educators: Best Practices for Digital Pedagogy and LMS Adoption",
    date: "Jul 10, 2025",
    shortDescription: "A comprehensive guide for school leaders on training teachers to effectively leverage interactive whiteboards and LMS tools.",
    featuredImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    content: "<p>Empowering teachers with digital capabilities is critical for the success of any educational technology initiative. Structured professional development programs, peer mentoring, and intuitive tool interfaces are key drivers for high adoption rates.</p><p>Schools that prioritize continuous teacher enablement observe significantly higher student engagement and improved academic outcomes.</p>",
    author: "Navneet Toptech Academy",
    status: "published",
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return getArticleDetailMetadata(slug);
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let articleItem: any = null;
  try {
    const snapshot = await adminDb.collection('articles').where('slug', '==', slug).limit(1).get();
    if (!snapshot.empty) {
      articleItem = snapshot.docs[0].data();
    }
  } catch (error) {
    console.error('Error fetching article details:', error);
  }

  if (!articleItem) {
    articleItem = staticArticles.find((item) => item.slug === slug) || null;
  }

  // Ensure content exists and is currently published (or scheduled time has been reached)
  if (!articleItem || !isContentPublished(articleItem)) {
    notFound();
  }

  const category = articleItem.category || 'Article';
  const featuredImage = articleItem.featuredImage || articleItem.image || null;
  const dateStr = formatDisplayDate(articleItem.publishDate || articleItem.scheduledDate || articleItem.createdAt, articleItem.date || '');

  return (
    <main>
      <section className="sec sec-white pt-28 pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* 1. Large featured image at the top */}
          {featuredImage ? (
            <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img 
                src={featuredImage} 
                alt={articleItem.title} 
                className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[480px] object-cover"
              />
            </div>
          ) : (
            <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 flex flex-col items-center justify-center py-20 text-center">
              <div className="text-5xl mb-3">📄</div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Featured Article</p>
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
            {articleItem.title}
          </h1>

          {/* 4. Date & Author */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            {dateStr && <span>{dateStr}</span>}
            {articleItem.author && (
              <>
                {dateStr && <span>•</span>}
                <span className="font-medium text-gray-700 capitalize">{articleItem.author}</span>
              </>
            )}
          </div>

          {/* 5. Description/content */}
          {articleItem.shortDescription && (
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-6 italic">
              {articleItem.shortDescription}
            </p>
          )}

          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: articleItem.content || `<p>${articleItem.shortDescription || 'No content available.'}</p>` }}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
