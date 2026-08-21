import CategoryManager from '@/components/admin/CategoryManager';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Article Categories',
  description: 'Manage thought leadership and research article categories',
};

export default function ArticleCategoriesPage() {
  return <CategoryManager type="articles" />;
}
