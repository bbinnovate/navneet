import BlogsListClient from './BlogsListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Management',
  description: 'Manage, edit, schedule, and publish educational blog posts and articles',
};

export default function BlogsAdminPage() {
  return <BlogsListClient />;
}
