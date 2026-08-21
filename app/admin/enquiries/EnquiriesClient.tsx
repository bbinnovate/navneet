'use client';

import { useState, useEffect, Fragment } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Search, Loader2, Trash2, Mail, Phone, Calendar } from 'lucide-react';
import toast from 'react-hot-toast';

interface EnquiryItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  role?: string;
  board?: string;
  schoolName?: string;
  city?: string;
  interest?: string;
  message: string;
  status: string;
  createdAt: any;
}

export default function EnquiriesClient() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'contactEnquiries'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as EnquiryItem));
      setEnquiries(data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
      toast.error('Failed to load enquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      await deleteDoc(doc(db, 'contactEnquiries', id));
      toast.success('Enquiry deleted successfully');
      setEnquiries(enquiries.filter(e => e.id !== id));
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete enquiry');
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'contactEnquiries', id), { status: newStatus });
      toast.success('Status updated');
      setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e));
    } catch (error) {
      console.error(error);
      toast.error('Failed to update status');
    }
  };

  const filteredEnquiries = enquiries.filter(item => 
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 font-montserrat">Contact Enquiries</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
              <tr>
                <th className="px-6 py-4 font-medium">Details</th>
                <th className="px-6 py-4 font-medium">Message</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center">
                    <Loader2 className="w-6 h-6 animate-spin text-blue-500 mx-auto" />
                  </td>
                </tr>
              ) : filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    No enquiries found.
                  </td>
                </tr>
              ) : (
                filteredEnquiries.map(item => (
                  <Fragment key={item.id}>
                    <tr className="hover:bg-gray-50 align-top cursor-pointer transition-colors" onClick={() => setExpanded(expanded === item.id ? null : item.id)}>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 mb-1">{item.name}</div>
                        <div className="flex items-center gap-2 text-gray-500 mb-1">
                          <Mail className="w-3 h-3" /> {item.email}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 mb-1">
                          <Phone className="w-3 h-3" /> {item.phone || '-'}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                          <Calendar className="w-3 h-3" /> 
                          {item.createdAt ? new Date(item.createdAt.seconds * 1000).toLocaleString() : '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs truncate whitespace-normal">
                        {item.message}
                      </td>
                      <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={item.status || 'New'}
                          onChange={(e) => handleStatusChange(item.id, e.target.value)}
                          className={`text-xs font-medium rounded-full px-2 py-1 border outline-none
                            ${item.status === 'Closed' ? 'bg-gray-100 text-gray-800 border-gray-200' : 
                              item.status === 'In Progress' ? 'bg-blue-100 text-blue-800 border-blue-200' : 
                              item.status === 'Converted' ? 'bg-green-100 text-green-800 border-green-200' : 
                              'bg-yellow-100 text-yellow-800 border-yellow-200'}`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Converted">Converted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <button 
                          onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium mr-4"
                        >
                          {expanded === item.id ? 'Hide' : 'View'}
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-800 p-2"
                          title="Delete Enquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                    
                    {expanded === item.id && (
                      <tr className="bg-blue-50/50">
                        <td colSpan={4} className="px-6 py-4 border-t border-blue-100">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div>
                              <span className="block text-xs font-semibold text-gray-500 uppercase">Role</span>
                              <span className="text-sm text-gray-900">{item.role || '-'}</span>
                            </div>
                            <div>
                              <span className="block text-xs font-semibold text-gray-500 uppercase">Board</span>
                              <span className="text-sm text-gray-900">{item.board || '-'}</span>
                            </div>
                            <div>
                              <span className="block text-xs font-semibold text-gray-500 uppercase">School Name</span>
                              <span className="text-sm text-gray-900">{item.schoolName || '-'}</span>
                            </div>
                            <div>
                              <span className="block text-xs font-semibold text-gray-500 uppercase">City</span>
                              <span className="text-sm text-gray-900">{item.city || '-'}</span>
                            </div>
                          </div>
                          
                          <div>
                            <span className="block text-xs font-semibold text-gray-500 uppercase mb-1">Interested In</span>
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md">{item.interest || '-'}</span>
                          </div>

                          {item.message && (
                            <div className="mt-4 p-4 bg-white rounded border border-gray-200">
                              <span className="block text-xs font-semibold text-gray-500 uppercase mb-2">Message</span>
                              <p className="text-sm text-gray-800 whitespace-pre-wrap">{item.message}</p>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
