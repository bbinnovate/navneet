import { AuthProvider } from '@/lib/firebase/auth';
import AdminLayoutClient from './AdminLayoutClient';
import { Toaster } from 'react-hot-toast';

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
