'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '@/lib/firebase/auth';
import ImageUploader from '@/components/admin/ImageUploader';
import { Save, Loader2, Globe } from 'lucide-react';
import { staticFallbacks } from '@/lib/seo/static-fallback';
import toast from 'react-hot-toast';

const PAGES_LIST = [
  { key: 'home', label: 'Home Page (/)', path: '/' },
  { key: 'about', label: 'About Page (/about)', path: '/about' },
  { key: 'blogs', label: 'Blogs Page (/blogs)', path: '/blogs' },
  { key: 'careers', label: 'Careers Page (/careers)', path: '/careers' },
  { key: 'conclaves', label: 'Conclaves Page (/conclaves)', path: '/conclaves' },
  { key: 'contact', label: 'Contact Page (/contact)', path: '/contact' },
  { key: 'locations', label: 'Locations Page (/locations)', path: '/locations' },
  { key: 'news', label: 'News Page (/news)', path: '/news' },
  { key: 'support', label: 'Support Page (/support-services)', path: '/support-services' },
  { key: 'topassess', label: 'TopAssess Page (/topassess)', path: '/topassess' },
  { key: 'topclass', label: 'TopClass Page (/topclass-digital-classroom)', path: '/topclass-digital-classroom' },
  { key: 'topschool', label: 'TopSchool Page (/topschool-learning-management-system)', path: '/topschool-learning-management-system' },
  { key: 'topseries', label: 'TopSeries Page (/topseries-grade-1-to-8)', path: '/topseries-grade-1-to-8' },
  { key: 'ifp', label: 'Interactive Flat Panels Page (/interactive-flat-panels)', path: '/interactive-flat-panels' },
];

export default function PageSeoClient() {
  const { user } = useAuth();
  const [selectedPage, setSelectedPage] = useState('home');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
  });

  const currentFallback = staticFallbacks[selectedPage] || { title: '', description: '', keywords: '', path: '/' };

  const fetchPageMetadata = async (pageKey: string) => {
    setLoading(true);
    try {
      const docRef = doc(db, 'pageMetadata', pageKey);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData({
          title: data.title || '',
          description: data.description || '',
          keywords: data.keywords || '',
          ogTitle: data.ogTitle || '',
          ogDescription: data.ogDescription || '',
          ogImage: data.ogImage || '',
        });
      } else {
        setFormData({
          title: '',
          description: '',
          keywords: '',
          ogTitle: '',
          ogDescription: '',
          ogImage: '',
        });
      }
    } catch (error) {
      console.error('Error fetching page SEO:', error);
      toast.error('Failed to load SEO configuration');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPageMetadata(selectedPage);
  }, [selectedPage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docRef = doc(db, 'pageMetadata', selectedPage);
      const docData = {
        ...formData,
        updatedAt: serverTimestamp(),
        updatedBy: user?.uid,
      };
      await setDoc(docRef, docData);
      toast.success('SEO metadata saved successfully');
    } catch (error) {
      console.error('Error saving page SEO:', error);
      toast.error('Failed to save SEO metadata');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-montserrat">Website Page SEO</h1>
            <p className="text-sm text-gray-500">Manage custom meta tags and open graph info for primary landing pages</p>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={saving || loading}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 font-semibold"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save SEO Settings
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Select Page</h2>
          <div className="space-y-1">
            {PAGES_LIST.map((page) => (
              <button
                key={page.key}
                onClick={() => setSelectedPage(page.key)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition
                  ${selectedPage === page.key 
                    ? 'bg-blue-50 text-blue-700 font-semibold' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {loading ? (
            <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Meta Tags Configuration</h2>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-gray-700">Page Title / Meta Title</label>
                    <span className="text-xs text-gray-400">Recommended: &lt; 60 chars</span>
                  </div>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder={currentFallback.title}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1 italic">Default: {currentFallback.title}</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-gray-700">Meta Description</label>
                    <span className="text-xs text-gray-400">Recommended: &lt; 160 chars</span>
                  </div>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder={currentFallback.description}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1 italic">Default: {currentFallback.description}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
                  <input
                    type="text"
                    name="keywords"
                    value={formData.keywords}
                    onChange={handleChange}
                    placeholder={currentFallback.keywords}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1 italic">Default: {currentFallback.keywords}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Social Sharing (Open Graph)</h2>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">OG Title</label>
                  <input
                    type="text"
                    name="ogTitle"
                    value={formData.ogTitle}
                    onChange={handleChange}
                    placeholder={formData.title || currentFallback.title}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">OG Description</label>
                  <textarea
                    name="ogDescription"
                    rows={2}
                    value={formData.ogDescription}
                    onChange={handleChange}
                    placeholder={formData.description || currentFallback.description}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">OG Image</label>
                  <ImageUploader 
                    defaultImage={formData.ogImage}
                    onUpload={(url) => setFormData(prev => ({ ...prev, ogImage: url }))}
                    folder="seo"
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
