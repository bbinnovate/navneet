'use client';

import { useState, useEffect, Suspense } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, getDocs, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Plus, Edit, Trash2, Search, Loader2, Calendar } from 'lucide-react';
import CategoryManager from '@/components/admin/CategoryManager';
import toast from 'react-hot-toast';
import { parseTimestampToMs, formatDisplayDate } from '@/lib/content/helpers';

interface BlogItem {
  id: string;
  title: string;
  category?: string;
  author?: string;
  status: string;
  publishDate?: any;
  scheduledDate?: any;
  createdAt: any;
}

function BlogsListContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view');

  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogItem));
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (view !== 'categories') {
      fetchBlogs();
    }
  }, [view]);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;
    try {
      await deleteDoc(doc(db, 'blogs', id));
      toast.success('Blog deleted successfully');
      setBlogs(blogs.filter(b => b.id !== id));
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete blog');
    }
  };

  if (view === 'categories') {
    return <CategoryManager type="blogs" />;
  }

  const filteredBlogs = blogs.filter(item => 
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nowMs = Date.now();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-montserrat">Blog Management</h1>
          <p className="text-sm text-gray-500">Manage blog articles, educational insights, and scheduled posts</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs/categories"
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm font-medium"
          >
            Manage Categories
          </Link>
          <Link 
            href="/admin/blogs/new"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add Blog
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search by title, category, or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium">
              <tr>
                <th className="px-6 py-3.5">Title</th>
                <th className="px-6 py-3.5">Category</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5">Publish / Scheduled Date</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-500 mx-auto" />
                  </td>
                </tr>
              ) : filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No blog posts found.
                  </td>
                </tr>
              ) : (
                filteredBlogs.map(item => {
                  const schedMs = parseTimestampToMs(item.scheduledDate);
                  const isScheduledFuture = item.status === 'scheduled' && schedMs && schedMs > nowMs;
                  const isScheduledLive = item.status === 'scheduled' && schedMs && schedMs <= nowMs;
                  const isPublished = item.status === 'published';

                  return (
                    <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 line-clamp-1">{item.title}</div>
                        {item.author && <div className="text-xs text-gray-500 mt-0.5">{item.author}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {item.category || 'Blog'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {isPublished && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Published
                          </span>
                        )}
                        {isScheduledFuture && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            <Calendar className="w-3 h-3" /> Scheduled
                          </span>
                        )}
                        {isScheduledLive && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Published (Scheduled)
                          </span>
                        )}
                        {item.status === 'draft' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-xs">
                        {item.publishDate 
                          ? formatDisplayDate(item.publishDate)
                          : item.scheduledDate 
                            ? formatDisplayDate(item.scheduledDate)
                            : item.createdAt 
                              ? formatDisplayDate(item.createdAt) 
                              : '-'}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <Link 
                            href={`/admin/blogs/${item.id}`}
                            className="p-1 text-blue-600 hover:text-blue-800 rounded hover:bg-blue-50 transition"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-1 text-red-600 hover:text-red-800 rounded hover:bg-red-50 transition"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function BlogsListClient() {
  return (
    <Suspense fallback={
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    }>
      <BlogsListContent />
    </Suspense>
  );
}
