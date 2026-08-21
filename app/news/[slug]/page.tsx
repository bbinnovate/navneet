import { adminDb } from '@/lib/firebase/admin';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { isContentPublished, formatDisplayDate } from '@/lib/content/helpers';
import { getNewsDetailMetadata } from '@/lib/seo/dynamic';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const staticNews = [
  {
    slug: "navneet-toptech-wins-top-edtech-award-2025",
    publication: "Education World",
    category: "Education World",
    title: "NAVNEET TOPTECH Honored as Leading LMS & EdTech Provider of the Year",
    date: "Aug 10, 2025",
    shortDescription: "Recognized for driving digital transformation across Indian K-12 schools with TopSchool LMS and TopClass interactive content.",
    featuredImage: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
    content: "<p>NAVNEET TOPTECH has been recognized as the Leading LMS & EdTech Provider of the Year at the 8th BW Top Education Awards. The award validates the team's commitment to empowering school ecosystems through intelligent learning management software and interactive digital content.</p><p>Over the past year, NAVNEET TOPTECH has expanded its footprint across thousands of CBSE and state board schools, delivering seamless phygital solutions that connect print textbooks with dynamic digital classroom learning.</p>",
    author: "Education World Bureau",
    status: "published",
  },
  {
    slug: "future-of-phygital-education-in-indian-schools",
    publication: "Economic Times",
    category: "Economic Times",
    title: "How Navneet Toptech is Bridging the Physical and Digital Divide in Indian Classrooms",
    date: "Jul 22, 2025",
    shortDescription: "An in-depth look at how blended learning tools are revolutionizing teacher workflows and student engagement.",
    featuredImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    content: "<p>The integration of digital resources into conventional classroom instruction has shifted from an emergency response to a permanent pedagogical strategy. Navneet Toptech leads this transformation by harmonizing physical books with interactive smartboard lessons.</p><p>Educators report up to 40% time saved in daily lesson preparation, allowing more focused one-on-one student mentoring.</p>",
    author: "ET Technology Desk",
    status: "published",
  },
  {
    slug: "ai-driven-personalized-learning-navneet",
    publication: "Financial Express",
    category: "Financial Express",
    title: "AI Integration in K-12 Curriculum: Navneet Toptech's Next Big Step",
    date: "Jun 30, 2025",
    shortDescription: "Inside the new TopAssess diagnostic assessment tool powered by intelligent recommendation engines.",
    featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    content: "<p>Artificial intelligence is redefining assessment paradigms in K-12 education. Navneet Toptech's TopAssess engine generates customized learning paths and targeted remediation exercises based on real-time student response analytics.</p><p>School administrators gain comprehensive data-driven insights into institutional performance benchmarks.</p>",
    author: "Financial Express Bureau",
    status: "published",
  }
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return getNewsDetailMetadata(slug);
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let newsItem: any = null;
  try {
    const snapshot = await adminDb.collection('news').where('slug', '==', slug).limit(1).get();
    if (!snapshot.empty) {
      newsItem = snapshot.docs[0].data();
    }
  } catch (error) {
    console.error('Error fetching news details:', error);
  }

  if (!newsItem) {
    newsItem = staticNews.find((item) => item.slug === slug) || null;
  }

  // Ensure content exists and is currently published (or scheduled time has been reached)
  if (!newsItem || !isContentPublished(newsItem)) {
    notFound();
  }

  const category = newsItem.category || newsItem.publication || 'News';
  const featuredImage = newsItem.featuredImage || newsItem.image || null;
  const dateStr = formatDisplayDate(newsItem.publishDate || newsItem.scheduledDate || newsItem.createdAt, newsItem.date || '');

  return (
    <main>
      <section className="sec sec-white pt-28 pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* 1. Large featured image at the top */}
          {featuredImage ? (
            <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <img 
                src={featuredImage} 
                alt={newsItem.title} 
                className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[480px] object-cover"
              />
            </div>
          ) : (
            <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 flex flex-col items-center justify-center py-20 text-center">
              <div className="text-5xl mb-3">📰</div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">News Coverage</p>
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
            {newsItem.title}
          </h1>

          {/* 4. Date & Author */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            {dateStr && <span>{dateStr}</span>}
            {newsItem.author && (
              <>
                {dateStr && <span>•</span>}
                <span className="font-medium text-gray-700 capitalize">{newsItem.author}</span>
              </>
            )}
          </div>

          {/* 5. Description/content */}
          {newsItem.shortDescription && (
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-6 italic">
              {newsItem.shortDescription}
            </p>
          )}

          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: newsItem.content || `<p>${newsItem.shortDescription || 'No content available.'}</p>` }}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
