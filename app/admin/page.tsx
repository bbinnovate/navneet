import AdminDashboardClient from './AdminDashboardClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Administration dashboard and content metrics for NAVNEET TOPTECH',
};

export default function AdminDashboardPage() {
  return <AdminDashboardClient />;
}
