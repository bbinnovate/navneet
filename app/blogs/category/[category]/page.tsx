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

async function getCategoryBlogs(categorySlug: string) {
  try {
    const snapshot = await adminDb.collection('blogs')
      .where('status', 'in', ['published', 'scheduled'])
      .get();
      
    let rawBlogs = snapshot.docs
      .map(doc => ({ ...doc.data(), id: doc.id } as any))
      .filter(isContentPublished);
    
    // Sort in memory (newest publish/scheduled/created date first)
    rawBlogs.sort((a: any, b: any) => {
      const dateA = parseTimestampToMs(a.publishDate || a.scheduledDate || a.createdAt) || 0;
      const dateB = parseTimestampToMs(b.publishDate || b.scheduledDate || b.createdAt) || 0;
      return dateB - dateA;
    });

    const categoryBlogs = rawBlogs.filter(data => getCategorySlug(data.category) === categorySlug);

    const formattedBlogs = categoryBlogs.map(data => {
      return {
        id: data.id,
        slug: data.slug || '',
        title: data.title || '',
        category: data.category || 'Blog',
        date: formatDisplayDate(data.publishDate || data.scheduledDate || data.createdAt),
        image: data.featuredImage || null,
        shortDescription: data.shortDescription || '',
        content: data.content || '',
        author: data.author || ''
      };
    });

    // Extract original category name (e.g. "Pedagogy" instead of "pedagogy")
    const originalCategoryName = categoryBlogs.length > 0 
      ? (categoryBlogs[0].category || 'Blog') 
      : categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

    return { blogs: formattedBlogs, categoryName: originalCategoryName };
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    return { blogs: [], categoryName: categorySlug };
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const { categoryName } = await getCategoryBlogs(category);
  return {
    title: `${categoryName} Blogs | NAVNEET TOPTECH`,
    description: `Read the latest articles, insights, and stories about ${categoryName} from NAVNEET TOPTECH.`,
  };
}

export default async function CategoryBlogsPage({ params }: PageProps) {
  const { category } = await params;
  const { blogs, categoryName } = await getCategoryBlogs(category);

  if (blogs.length === 0) {
    // Check if category exists or just render empty list gracefully, or return 404
    // Usually, rendering an empty list or redirecting is fine, but let's check if we should trigger notFound()
    // To prevent breaking layout if someone types an invalid category, let's show notFound() if category has no blogs
    notFound();
  }

  return (
    <main>
      <PageHeroSection1 
        title={`${categoryName} Blogs`}
        subtitle={`Explore all blog articles, insights, and discussions under the ${categoryName} category.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: categoryName }
        ]}
      />
      <BlogGrid initialBlogs={blogs} baseUrl="/blogs" />
      <Footer />
    </main>
  );
}
