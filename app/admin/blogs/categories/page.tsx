import CategoryManager from '@/components/admin/CategoryManager';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Categories',
  description: 'Manage blog topics and category taxonomies',
};

export default function BlogCategoriesPage() {
  return <CategoryManager type="blogs" />;
}
