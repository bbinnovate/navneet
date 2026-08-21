import { adminDb } from '@/lib/firebase/admin';
import BlogGrid from './BlogGrid';
import { isContentPublished, parseTimestampToMs, formatDisplayDate } from '@/lib/content/helpers';

export default async function White12() {
  // Fetch published/scheduled blogs from Firestore Server-side
  let blogsData: any[] = [];
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
    
    blogsData = rawBlogs.map(data => {
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
  } catch (error) {
    console.error('Error fetching public blogs:', error);
  }

  // Fallback to static if no data in db
  if (blogsData.length === 0) {
    blogsData = [
      {
        slug: "navneet-toptech-edtech-trends-2025",
        category: "Technology",
        title: "Top 5 EdTech Trends Shaping K-12 Learning in 2025",
        date: "Aug 1, 2025",
        shortDescription: "From AI-powered assessments to immersive interactive smartboards, discover key trends driving digital education forward.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
        author: "Navneet Toptech Editorial"
      },
      {
        slug: "building-interactive-classrooms",
        category: "Pedagogy",
        title: "Building Interactive Classrooms: Moving Beyond Passive Lectures",
        date: "Jul 15, 2025",
        shortDescription: "How interactive visual aids and real-time polls turn traditional lectures into collaborative learning experiences.",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
        author: "Pedagogy Research Team"
      }
    ];
  }

  return (
    <BlogGrid initialBlogs={blogsData} />
  );
}