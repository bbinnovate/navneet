import AdminLoginClient from './AdminLoginClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Sign In',
  description: 'Administrator sign in for NAVNEET TOPTECH content management portal',
};

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}
