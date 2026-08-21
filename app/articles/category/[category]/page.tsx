import { adminDb } from '@/lib/firebase/admin';
import PageHeroSection1 from '@/components/pages/Blogs/PageHeroSection1';
import BlogGrid from '@/components/pages/Blogs/BlogGrid';
import Footer from '@/components/Footer';
import { isContentPublished, parseTimestampToMs, formatDisplayDate, getCategorySlug } from '@/lib/content/helpers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: Promise<{ category: string }>;
}

async function getCategoryArticles(categorySlug: string) {
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

    const categoryArticles = rawArticles.filter(data => getCategorySlug(data.category) === categorySlug);

    const formattedArticles = categoryArticles.map(data => {
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

    // Extract original category name
    const originalCategoryName = categoryArticles.length > 0 
      ? (categoryArticles[0].category || 'Article') 
      : categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

    return { articles: formattedArticles, categoryName: originalCategoryName };
  } catch (error) {
    console.error('Error fetching articles by category:', error);
    return { articles: [], categoryName: categorySlug };
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const { categoryName } = await getCategoryArticles(category);
  return {
    title: `${categoryName} Articles | NAVNEET TOPTECH`,
    description: `Read the latest research papers and in-depth articles about ${categoryName} from NAVNEET TOPTECH.`,
  };
}

export default async function CategoryArticlesPage({ params }: PageProps) {
  const { category } = await params;
  const { articles, categoryName } = await getCategoryArticles(category);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <main>
      <PageHeroSection1 
        title={`${categoryName} Articles`}
        subtitle={`Read in-depth research papers, insights, and perspectives under the ${categoryName} category.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Articles", href: "/articles" },
          { label: categoryName }
        ]}
        eyebrow="Research · Pedagogy · Thought Leadership"
      />
      <BlogGrid initialBlogs={articles} baseUrl="/articles" />
      <Footer />
    </main>
  );
}
