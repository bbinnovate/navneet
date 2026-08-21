'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { db } from '@/lib/firebase/config';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp, Timestamp, collection } from 'firebase/firestore';
import { useAuth } from '@/lib/firebase/auth';
import ContentEditor from '@/components/admin/ContentEditor';
import { ArrowLeft, Save, Loader2, Calendar } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function CareerFormClient() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const isNew = id === 'new';
  const { user } = useAuth();

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    slug: '',
    department: '',
    location: '',
    employmentType: '',
    experience: '',
    salary: '',
    jobDescription: '',
    requirements: '',
    status: 'draft',
    applicationDeadline: '',
    scheduledDate: '',
  });

  useEffect(() => {
    if (!isNew) {
      const fetchDoc = async () => {
        try {
          const docRef = doc(db, 'careers', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setFormData({
              jobTitle: data.jobTitle || '',
              slug: data.slug || '',
              department: data.department || '',
              location: data.location || '',
              employmentType: data.employmentType || '',
              experience: data.experience || '',
              salary: data.salary || '',
              jobDescription: data.jobDescription || '',
              requirements: data.requirements || '',
              status: data.status || 'draft',
              applicationDeadline: data.applicationDeadline || '',
              scheduledDate: data.scheduledDate ? new Date(data.scheduledDate.seconds * 1000).toISOString().slice(0, 16) : '',
            });
          } else {
            toast.error('Career not found');
            router.push('/admin/careers');
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
    if (formData.jobTitle) {
      setFormData(prev => ({
        ...prev,
        slug: formData.jobTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
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
        const newDocRef = doc(collection(db, 'careers'));
        docData.id = newDocRef.id;
        await setDoc(newDocRef, docData);
        toast.success('Career created successfully');
      } else {
        const docRef = doc(db, 'careers', id);
        await updateDoc(docRef, docData);
        toast.success('Career updated successfully');
      }
      
      router.push('/admin/careers');
    } catch (error) {
      console.error(error);
      toast.error('Error saving career');
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
          <Link href="/admin/careers" className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
            {isNew ? 'Create Career' : 'Edit Career'}
          </h1>
        </div>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400 font-medium text-sm"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Career
        </button>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Job Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, India / Remote"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
                  <select
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="">Select Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 2-4 Years"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="e.g. Competitive / Not disclosed"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <ContentEditor 
                  value={formData.jobDescription} 
                  onChange={(val) => setFormData(prev => ({ ...prev, jobDescription: val }))} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements & Skills</label>
                <ContentEditor 
                  value={formData.requirements} 
                  onChange={(val) => setFormData(prev => ({ ...prev, requirements: val }))} 
                />
              </div>
            </div>
          </div>

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
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                <input
                  type="date"
                  name="applicationDeadline"
                  value={formData.applicationDeadline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
