'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { Plus, Edit, Trash2, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt?: any;
}

export default function CategoryManager({ type }: { type: 'news' | 'blogs' | 'articles' }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const getCollectionName = () => {
    if (type === 'news') return 'newsCategories';
    if (type === 'blogs') return 'blogCategories';
    return 'articleCategories';
  };

  const getReadableType = () => {
    if (type === 'news') return 'News';
    if (type === 'blogs') return 'Blog';
    return 'Article';
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, getCollectionName()), orderBy('name', 'asc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Category));
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast.error('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    setSaving(true);
    try {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      const colRef = collection(db, getCollectionName());
      
      // Check if slug or name already exists in memory to prevent duplicates
      const exists = categories.some(cat => 
        cat.slug === slug || cat.name.toLowerCase() === name.toLowerCase()
      );
      if (exists && (!editingCategory || editingCategory.name.toLowerCase() !== name.toLowerCase())) {
        toast.error('A category with this name already exists');
        setSaving(false);
        return;
      }

      if (editingCategory) {
        const docRef = doc(db, getCollectionName(), editingCategory.id);
        await updateDoc(docRef, {
          name: name.trim(),
          slug,
          updatedAt: serverTimestamp(),
        });
        toast.success('Category updated successfully');
        setCategories(categories.map(cat => 
          cat.id === editingCategory.id ? { ...cat, name: name.trim(), slug } : cat
        ));
        setEditingCategory(null);
      } else {
        const docData = {
          name: name.trim(),
          slug,
          createdAt: serverTimestamp(),
        };
        const docRef = await addDoc(colRef, docData);
        toast.success('Category added successfully');
        // Add to local state and sort alphabetically
        const newCat = { id: docRef.id, ...docData };
        setCategories([...categories, newCat].sort((a, b) => a.name.localeCompare(b.name)));
      }
      setName('');
    } catch (error) {
      console.error(error);
      toast.error('Error saving category');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setName(category.name);
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setName('');
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this category? Any content associated with it may still show its category name.')) return;
    try {
      await deleteDoc(doc(db, getCollectionName(), id));
      toast.success('Category deleted successfully');
      setCategories(categories.filter(cat => cat.id !== id));
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete category');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/admin/${type}`} className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
          Manage {getReadableType()} Categories
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {editingCategory ? 'Edit Category' : 'Add New Category'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Technology"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={saving}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 font-medium text-sm h-10"
              >
                {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                {editingCategory ? 'Update' : 'Add Category'}
              </button>
              {editingCategory && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm font-medium h-10"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List Card */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Slug</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center">
                      <Loader2 className="w-6 h-6 animate-spin text-blue-500 mx-auto" />
                    </td>
                  </tr>
                ) : categories.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-gray-500 font-medium">
                      No categories found.
                    </td>
                  </tr>
                ) : (
                  categories.map(cat => (
                    <tr key={cat.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{cat.name}</td>
                      <td className="px-6 py-4 text-gray-500 font-mono text-xs">{cat.slug}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button
                            onClick={() => handleEdit(cat)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(cat.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
