import { adminDb } from '@/lib/firebase/admin';
import BlogGrid from './BlogGrid';

export default async function White12() {
  // Fetch published blogs from Firestore Server-side
  let blogsData: any[] = [];
  try {
    const snapshot = await adminDb.collection('blogs')
      .where('status', '==', 'published')
      .get();
      
    let rawBlogs = snapshot.docs.map(doc => {
      const data = doc.data() as any;
      return {
        ...data,
        id: doc.id
      };
    });
    
    // Sort in memory
    rawBlogs.sort((a: any, b: any) => {
      const dateA = a.publishDate ? (a.publishDate.seconds || a.publishDate._seconds) : 0;
      const dateB = b.publishDate ? (b.publishDate.seconds || b.publishDate._seconds) : 0;
      return dateB - dateA;
    });
    
    blogsData = rawBlogs.map(data => {
      return {
        id: data.id,
        slug: data.slug || '',
        title: data.title || '',
        category: data.category || 'Blog',
        date: data.publishDate ? new Date((data.publishDate.seconds || data.publishDate._seconds) * 1000).toLocaleDateString() : (data.createdAt ? new Date((data.createdAt.seconds || data.createdAt._seconds) * 1000).toLocaleDateString() : ''),
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
        category: "Technology",
        title: "[ Blog Title — Replace with Actual Post ]",
        date: "[ Date ]",
        image: null
      }
    ];
  }

  return (
    <BlogGrid initialBlogs={blogsData} />
  );
}