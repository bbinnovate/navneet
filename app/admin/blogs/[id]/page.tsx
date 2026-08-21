import BlogFormClient from './BlogFormClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Editor',
  description: 'Create, edit, and configure blog post settings and categories',
};

export default function BlogFormPage() {
  return <BlogFormClient />;
}
