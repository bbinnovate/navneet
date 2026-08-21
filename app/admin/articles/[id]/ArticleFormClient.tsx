'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { db } from '@/lib/firebase/config';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, Timestamp, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useAuth } from '@/lib/firebase/auth';
import ImageUploader from '@/components/admin/ImageUploader';
import ContentEditor from '@/components/admin/ContentEditor';
import { ArrowLeft, Save, Loader2, Calendar, AlertCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { toDatetimeLocalValue } from '@/lib/content/helpers';

interface CategoryItem {
  id: string;
  name: string;
  slug: string;
}

export default function ArticleFormClient() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const isNew = id === 'new';
  const { user } = useAuth();

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    shortDescription: '',
    content: '',
    featuredImage: '',
    author: '',
    status: 'draft',
    scheduledDate: '',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const q = query(collection(db, 'articleCategories'), orderBy('name', 'asc'));
        const snapshot = await getDocs(q);
        const cats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CategoryItem));
        setCategories(cats);
      } catch (err) {
        console.error('Error fetching article categories:', err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!isNew) {
      const fetchDoc = async () => {
        try {
          const docRef = doc(db, 'articles', id);
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
              status: data.status === 'unpublished' ? 'draft' : (data.status || 'draft'),
              scheduledDate: data.scheduledDate ? toDatetimeLocalValue(data.scheduledDate) : '',
              seoTitle: data.seoTitle || '',
              seoDescription: data.seoDescription || '',
              seoKeywords: data.seoKeywords || '',
              ogTitle: data.ogTitle || '',
              ogDescription: data.ogDescription || '',
              ogImage: data.ogImage || '',
            });
          } else {
            toast.error('Article not found');
            router.push('/admin/articles');
          }
        } catch (error) {
          console.error(error);
          toast.error('Error fetching article data');
        } finally {
          setLoading(false);
        }
      };
      fetchDoc();
    }
  }, [id, isNew, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSlugGen = () => {
    if (formData.title && !formData.slug) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setFormData(prev => ({
        ...prev,
        slug: generatedSlug
      }));
      if (errors.slug) {
        setErrors(prev => {
          const next = { ...prev };
          delete next.slug;
          return next;
        });
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters.';
    }

    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug is required.';
    } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(formData.slug.trim())) {
      newErrors.slug = 'Slug must contain only lowercase letters, numbers, and hyphens.';
    }

    if (!formData.category.trim()) {
      newErrors.category = 'Please select a category.';
    }

    if (!formData.shortDescription.trim()) {
      newErrors.shortDescription = 'Short description is required.';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required.';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author / Advisory Board name is required.';
    }

    if (formData.status === 'scheduled') {
      if (!formData.scheduledDate) {
        newErrors.scheduledDate = 'Schedule date and time is required when status is Scheduled.';
      } else {
        const schedTime = new Date(formData.scheduledDate).getTime();
        if (isNaN(schedTime)) {
          newErrors.scheduledDate = 'Invalid date and time format.';
        } else if (schedTime <= Date.now()) {
          newErrors.scheduledDate = 'Scheduled date and time must be in the future.';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please complete all required fields correctly.');
      return;
    }

    setSaving(true);
    try {
      const scheduledTimestamp = formData.status === 'scheduled' && formData.scheduledDate
        ? Timestamp.fromDate(new Date(formData.scheduledDate))
        : null;

      const docData: any = {
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        category: formData.category.trim(),
        shortDescription: formData.shortDescription.trim(),
        content: formData.content.trim(),
        featuredImage: formData.featuredImage.trim(),
        author: formData.author.trim(),
        status: formData.status,
        scheduledDate: scheduledTimestamp,
        seoTitle: formData.seoTitle.trim(),
        seoDescription: formData.seoDescription.trim(),
        seoKeywords: formData.seoKeywords.trim(),
        ogTitle: formData.ogTitle.trim(),
        ogDescription: formData.ogDescription.trim(),
        ogImage: formData.ogImage.trim(),
        updatedAt: serverTimestamp(),
        updatedBy: user?.uid || null,
      };

      if (formData.status === 'published') {
        docData.publishDate = serverTimestamp();
      }

      if (isNew) {
        docData.createdAt = serverTimestamp();
        docData.createdBy = user?.uid || null;
        const newDocRef = doc(collection(db, 'articles'));
        docData.id = newDocRef.id;
        await setDoc(newDocRef, docData);
        toast.success('Article created successfully');
      } else {
        const docRef = doc(db, 'articles', id);
        await updateDoc(docRef, docData);
        toast.success('Article updated successfully');
      }
      
      router.push('/admin/articles');
    } catch (error) {
      console.error('Error saving article:', error);
      toast.error('Failed to save article. Please try again.');
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
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/articles" className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
              {isNew ? 'Create Article' : 'Edit Article'}
            </h1>
            <p className="text-xs text-gray-500">Fields marked with an asterisk (<span className="text-red-500 font-semibold">*</span>) are mandatory.</p>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 font-medium text-sm shadow-sm"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {formData.status === 'published' ? 'Publish Article' : formData.status === 'scheduled' ? 'Schedule Article' : 'Save Draft'}
        </button>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 border-b pb-3">General Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Article Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  onBlur={isNew ? handleSlugGen : undefined}
                  placeholder="e.g. Transforming K-12 Classrooms with Next-Gen AI Learning Platforms"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${
                    errors.title ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                  }`}
                />
                {errors.title && (
                  <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.title}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    placeholder="transforming-k12-classrooms-ai"
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition font-mono text-sm ${
                      errors.slug ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                    }`}
                  />
                  {errors.slug && (
                    <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.slug}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <Link
                      href="/admin/articles/categories"
                      target="_blank"
                      className="text-xs text-blue-600 hover:underline flex items-center gap-0.5"
                    >
                      + Manage Categories <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-white ${
                      errors.category ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                    }`}
                  >
                    <option value="">-- Select Category --</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                    {formData.category && !categories.some(c => c.name === formData.category) && (
                      <option value={formData.category}>{formData.category} (Current)</option>
                    )}
                  </select>
                  {errors.category && (
                    <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.category}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Description / Summary <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="shortDescription"
                  rows={3}
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="A concise summary of the article..."
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${
                    errors.shortDescription ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                  }`}
                />
                {errors.shortDescription && (
                  <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.shortDescription}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Article Content <span className="text-red-500">*</span>
                </label>
                <ContentEditor 
                  value={formData.content} 
                  onChange={(val) => {
                    setFormData(prev => ({ ...prev, content: val }));
                    if (errors.content) {
                      setErrors(prev => {
                        const next = { ...prev };
                        delete next.content;
                        return next;
                      });
                    }
                  }} 
                />
                {errors.content && (
                  <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.content}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <div className="border-b pb-3">
                <h2 className="text-lg font-semibold text-gray-900">SEO & Social Sharing Metadata</h2>
                <p className="text-xs text-gray-500 mt-0.5">Configure meta tags and social card attributes for this article.</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleChange}
                  placeholder={formData.title || 'Enter custom meta title'}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">Falls back to Article Title if empty.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  name="seoDescription"
                  rows={2}
                  value={formData.seoDescription}
                  onChange={handleChange}
                  placeholder={formData.shortDescription || 'Enter custom meta description'}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <p className="text-xs text-gray-400 mt-1">Falls back to Short Description if empty.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
                <input
                  type="text"
                  name="seoKeywords"
                  value={formData.seoKeywords}
                  onChange={handleChange}
                  placeholder="e.g. EdTech research, thought leadership, digital pedagogy"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="pt-2 border-t space-y-4">
                <h3 className="text-sm font-semibold text-gray-800">Open Graph (Social Card) Overrides</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">OG Title</label>
                  <input
                    type="text"
                    name="ogTitle"
                    value={formData.ogTitle}
                    onChange={handleChange}
                    placeholder={formData.seoTitle || formData.title || 'OG Title'}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">OG Description</label>
                  <textarea
                    name="ogDescription"
                    rows={2}
                    value={formData.ogDescription}
                    onChange={handleChange}
                    placeholder={formData.seoDescription || formData.shortDescription || 'OG Description'}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">OG Image (Custom Social Share Image)</label>
                  <ImageUploader 
                    defaultImage={formData.ogImage}
                    onUpload={(url) => setFormData(prev => ({ ...prev, ogImage: url }))}
                    folder="articles/seo"
                  />
                  <p className="text-xs text-gray-400 mt-1">Leave empty to use the Featured Image automatically.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 border-b pb-3">Publishing Settings</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white font-medium"
                >
                  <option value="draft">Draft (Hidden from public)</option>
                  <option value="published">Published (Visible immediately)</option>
                  <option value="scheduled">Scheduled (Visible on future date/time)</option>
                </select>
              </div>

              {formData.status === 'scheduled' && (
                <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-lg space-y-2">
                  <label className="block text-sm font-medium text-blue-900">
                    Publish Date & Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600 w-5 h-5 pointer-events-none" />
                    <input
                      type="datetime-local"
                      name="scheduledDate"
                      value={formData.scheduledDate}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white text-sm ${
                        errors.scheduledDate ? 'border-red-500 bg-red-50/20' : 'border-blue-300'
                      }`}
                    />
                  </div>
                  {errors.scheduledDate ? (
                    <p className="flex items-center gap-1 text-xs text-red-600 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.scheduledDate}
                    </p>
                  ) : (
                    <p className="text-xs text-blue-700">
                      The article will automatically become visible on the website at this exact date & time.
                    </p>
                  )}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author / Advisory Board <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="e.g. Navneet Toptech Academic Advisory Board"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    errors.author ? 'border-red-500 bg-red-50/20' : 'border-gray-300'
                  }`}
                />
                {errors.author && (
                  <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.author}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Featured Image <span className="text-xs font-normal text-gray-400">(Optional)</span>
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">Recommended aspect ratio 16:9.</p>
              </div>
              <ImageUploader 
                defaultImage={formData.featuredImage}
                onUpload={(url) => {
                  setFormData(prev => ({ ...prev, featuredImage: url }));
                }}
                folder="articles"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
