import { adminDb } from '@/lib/firebase/admin';
import PageHeroSection1 from '@/components/pages/Blogs/PageHeroSection1';
import BlogGrid from '@/components/pages/Blogs/BlogGrid';
import Footer from '@/components/Footer';
import { isContentPublished, parseTimestampToMs, formatDisplayDate } from '@/lib/content/helpers';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Articles & Thought Leadership | NAVNEET TOPTECH',
  description: 'Read research papers, in-depth articles, and pedagogical research by the NAVNEET TOPTECH team.',
};

export default async function ArticlesPage() {
  let articlesData: any[] = [];
  try {
    const snapshot = await adminDb.collection('articles')
      .where('status', 'in', ['published', 'scheduled'])
      .get();
      
    let rawArticles = snapshot.docs
      .map(doc => ({ ...doc.data(), id: doc.id } as any))
      .filter(isContentPublished);
    
    // Sort in memory (newest publish/scheduled/created date first)
    rawArticles.sort((a: any, b: any) => {
      const dateA = parseTimestampToMs(a.publishDate || a.scheduledDate || a.createdAt) || 0;
      const dateB = parseTimestampToMs(b.publishDate || b.scheduledDate || b.createdAt) || 0;
      return dateB - dateA;
    });
    
    articlesData = rawArticles.map(data => {
      return {
        id: data.id,
        slug: data.slug || '',
        title: data.title || '',
        category: data.category || 'Article',
        date: formatDisplayDate(data.publishDate || data.scheduledDate || data.createdAt),
        image: data.featuredImage || null,
        shortDescription: data.shortDescription || '',
        content: data.content || '',
        author: data.author || ''
      };
    });
  } catch (error) {
    console.error('Error fetching public articles:', error);
  }

  // Fallback to static if no data in db
  if (articlesData.length === 0) {
    articlesData = [
      {
        slug: "future-of-hybrid-classrooms-in-india",
        category: "Future of Learning",
        title: "The Rise of Hybrid Classrooms: Integrating Physical Books with Digital Content",
        date: "Jul 28, 2025",
        shortDescription: "How phygital education ecosystems connect traditional print textbooks with interactive digital assessments.",
        image: null,
        author: "Academic Advisory Board"
      },
      {
        slug: "empowering-teachers-digital-skills-2025",
        category: "Teacher Empowerment",
        title: "Empowering Educators: Best Practices for Digital Pedagogy and LMS Adoption",
        date: "Jul 10, 2025",
        shortDescription: "A comprehensive guide for school leaders on training teachers to effectively leverage interactive whiteboards and LMS tools.",
        image: null,
        author: "Navneet Toptech Academy"
      }
    ];
  }

  return (
    <main>
      <PageHeroSection1 
        title="Articles & Thought Leadership."
        subtitle="In-depth pedagogical research, school development strategies, and industry perspectives from the NAVNEET TOPTECH Academic Advisory Board."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Articles" }
        ]}
        eyebrow="Research · Pedagogy · Thought Leadership"
      />
      <BlogGrid initialBlogs={articlesData} baseUrl="/articles" />
      <Footer />
    </main>
  );
}
