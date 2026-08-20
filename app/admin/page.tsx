'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { 
  Newspaper, FileText, BookOpen, Briefcase, 
  Users, MessageSquare, Loader2
} from 'lucide-react';
import { startOfDay, subDays, subMonths, subYears } from 'date-fns';

type DateFilter = '7days' | '1month' | '6months' | '1year' | 'all';

interface StatCardProps {
  title: string;
  value: number;
  icon: any;
  color: string;
}

const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => (
  <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 flex items-center gap-4">
    <div className={`p-4 rounded-lg ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
  </div>
);

export default function AdminDashboard() {
  const [filter, setFilter] = useState<DateFilter>('all');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    news: 0,
    articles: 0,
    blogs: 0,
    careers: 0,
    users: 0,
    enquiries: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        let startDate: Date | null = null;
        const now = new Date();

        switch (filter) {
          case '7days': startDate = subDays(now, 7); break;
          case '1month': startDate = subMonths(now, 1); break;
          case '6months': startDate = subMonths(now, 6); break;
          case '1year': startDate = subYears(now, 1); break;
          case 'all': startDate = null; break;
        }

        const getCount = async (colName: string) => {
          let q = collection(db, colName);
          if (startDate) {
            // Note: In a real production app with massive data, we'd use getCountFromServer()
            // But for simplicity with date filtering, we fetch docs or use aggregate queries if possible.
            // Firebase recently added count(), but we'll fetch docs for now to handle simple date filtering.
            q = query(q, where('createdAt', '>=', Timestamp.fromDate(startDate))) as any;
          }
          const snapshot = await getDocs(q);
          return snapshot.size;
        };

        const [news, articles, blogs, careers, users, enquiries] = await Promise.all([
          getCount('news'),
          getCount('articles'),
          // Wait, the collections were defined as 'news', 'articles', 'blogs', 'careers', 'users', 'contactEnquiries'
          getCount('blogs'),
          getCount('careers'),
          getCount('users'),
          getCount('contactEnquiries')
        ]);

        setStats({ news, articles, blogs, careers, users, enquiries });
      } catch (error) {
        console.error("Error fetching stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [filter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 font-montserrat">Dashboard</h1>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 font-medium">Filter by:</span>
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value as DateFilter)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
          >
            <option value="all">All Time</option>
            <option value="7days">Last 7 Days</option>
            <option value="1month">Last 1 Month</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last 1 Year</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Total News" value={stats.news} icon={Newspaper} color="bg-blue-500" />
            <StatCard title="Total Articles" value={stats.articles} icon={FileText} color="bg-indigo-500" />
            <StatCard title="Total Blogs" value={stats.blogs} icon={BookOpen} color="bg-purple-500" />
            <StatCard title="Active Careers" value={stats.careers} icon={Briefcase} color="bg-green-500" />
            <StatCard title="Registered Users" value={stats.users} icon={Users} color="bg-orange-500" />
            <StatCard title="Contact Enquiries" value={stats.enquiries} icon={MessageSquare} color="bg-red-500" />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 font-montserrat">Content Distribution</h3>
            <div className="flex items-end h-64 gap-2 sm:gap-6 pt-4 pb-2 border-b border-gray-100">
              {/* Custom CSS Bar Chart based on current stats */}
              {[
                { label: 'News', val: stats.news, color: 'bg-blue-500' },
                { label: 'Articles', val: stats.articles, color: 'bg-indigo-500' },
                { label: 'Blogs', val: stats.blogs, color: 'bg-purple-500' },
                { label: 'Careers', val: stats.careers, color: 'bg-green-500' },
                { label: 'Users', val: stats.users, color: 'bg-orange-500' },
                { label: 'Enquiries', val: stats.enquiries, color: 'bg-red-500' }
              ].map((item, idx) => {
                // Find max to scale bars
                const max = Math.max(stats.news, stats.articles, stats.blogs, stats.careers, stats.users, stats.enquiries, 1);
                const heightPercentage = Math.max((item.val / max) * 100, 5); // minimum 5% height so it's visible

                return (
                  <div key={idx} className="flex-1 flex flex-col justify-end group relative h-full">
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      {item.label}: {item.val}
                    </div>
                    
                    {/* Bar */}
                    <div 
                      className={`w-full ${item.color} rounded-t-md transition-all duration-500 hover:opacity-80 relative`}
                      style={{ height: `${heightPercentage}%` }}
                    >
                      <div className="absolute -top-6 w-full text-center text-xs font-semibold text-gray-600">
                        {item.val}
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="absolute -bottom-7 w-full text-center text-xs font-medium text-gray-500 truncate px-1">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="h-8"></div> {/* Spacer for bottom labels */}
          </div>
        </div>
      )}
    </div>
  );
}
