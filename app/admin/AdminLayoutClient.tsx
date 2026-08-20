'use client';

import { useAuth } from '@/lib/firebase/auth';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import { LogOut, Menu, UserCircle } from 'lucide-react';
import { auth } from '@/lib/firebase/config';

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user && pathname !== '/admin/login') {
      router.push('/admin/login');
    } else if (!loading && user && !isAdmin && pathname !== '/admin/login') {
      // User is logged in but not an admin
      router.push('/');
    }
  }, [user, loading, isAdmin, router, pathname]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  // If we are on login, don't show sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!user || !isAdmin) {
    return null;
  }

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-56 flex-shrink-0 transform bg-white border-r border-gray-200 transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ width: '224px', minWidth: '224px' }}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-8 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1 text-gray-500 lg:hidden hover:bg-gray-100 rounded"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <UserCircle className="h-6 w-6 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">{user.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
