'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { db } from '@/lib/firebase/config';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, Timestamp, collection } from 'firebase/firestore';
import { useAuth } from '@/lib/firebase/auth';
import ImageUploader from '@/components/admin/ImageUploader';
import ContentEditor from '@/components/admin/ContentEditor';
import { ArrowLeft, Save, Loader2, Calendar } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function BlogForm() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const isNew = id === 'new';
  const { user } = useAuth();

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    shortDescription: '',
    content: '',
    featuredImage: '',
    author: '',
    status: 'draft',
    seoTitle: '',
    seoDescription: '',
    scheduledDate: '',
  });

  useEffect(() => {
    if (!isNew) {
      const fetchDoc = async () => {
        try {
          const docRef = doc(db, 'blogs', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setFormData({
              title: data.title || '',
              slug: data.slug || '',
              category: data.category || '',
              shortDescription: data.shortDescription || '',
              content: data.content || '',
              featuredImage: data.featuredImage || '',
              author: data.author || '',
              status: data.status || 'draft',
              seoTitle: data.seoTitle || '',
              seoDescription: data.seoDescription || '',
              scheduledDate: data.scheduledDate ? new Date(data.scheduledDate.seconds * 1000).toISOString().slice(0, 16) : '',
            });
          } else {
            toast.error('Blog not found');
            router.push('/admin/blogs');
          }
        } catch (error) {
          console.error(error);
          toast.error('Error fetching data');
        } finally {
          setLoading(false);
        }
      };
      fetchDoc();
    }
  }, [id, isNew, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSlugGen = () => {
    if (formData.title) {
      setFormData(prev => ({
        ...prev,
        slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docData: any = {
        ...formData,
        scheduledDate: formData.scheduledDate ? Timestamp.fromDate(new Date(formData.scheduledDate)) : null,
        updatedAt: serverTimestamp(),
        updatedBy: user?.uid,
      };

      if (formData.status === 'published' && !docData.publishDate) {
        docData.publishDate = serverTimestamp();
      }

      if (isNew) {
        docData.createdAt = serverTimestamp();
        docData.createdBy = user?.uid;
        const newDocRef = doc(collection(db, 'blogs'));
        docData.id = newDocRef.id;
        await setDoc(newDocRef, docData);
        toast.success('Blog created successfully');
      } else {
        const docRef = doc(db, 'blogs', id);
        await updateDoc(docRef, docData);
        toast.success('Blog updated successfully');
      }
      
      router.push('/admin/blogs');
    } catch (error) {
      console.error(error);
      toast.error('Error saving blog');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs" className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
            {isNew ? 'Create Blog' : 'Edit Blog'}
          </h1>
        </div>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save
        </button>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">General Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  onBlur={isNew ? handleSlugGen : undefined}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
                  <input
                    type="text"
                    name="slug"
                    required
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                <textarea
                  name="shortDescription"
                  rows={3}
                  value={formData.shortDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <ContentEditor 
                  value={formData.content} 
                  onChange={(val) => setFormData(prev => ({ ...prev, content: val }))} 
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">SEO Meta Data</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                <input
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                <textarea
                  name="seoDescription"
                  rows={2}
                  value={formData.seoDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Publishing</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="unpublished">Unpublished</option>
                </select>
              </div>

              {formData.status === 'scheduled' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Date & Time</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="datetime-local"
                      name="scheduledDate"
                      value={formData.scheduledDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Featured Image</h2>
              <ImageUploader 
                defaultImage={formData.featuredImage}
                onUpload={(url) => setFormData(prev => ({ ...prev, featuredImage: url }))}
                folder="blogs"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
