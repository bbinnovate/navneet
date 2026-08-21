import NewsAdminListClient from './NewsAdminListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Management',
  description: 'Manage, edit, schedule, and publish press releases and media coverage',
};

export default function NewsAdminPage() {
  return <NewsAdminListClient />;
}
