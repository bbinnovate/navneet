import { AuthProvider } from '@/lib/firebase/auth';
import AdminLayoutClient from './AdminLayoutClient';
import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Admin Panel | NAVNEET TOPTECH',
    default: 'Admin Panel | NAVNEET TOPTECH',
  },
  description: 'NAVNEET TOPTECH Administration Portal',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <AdminLayoutClient>
        {children}
      </AdminLayoutClient>
    </AuthProvider>
  );
}
