import CategoryManager from '@/components/admin/CategoryManager';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Categories',
  description: 'Manage news and media release categories',
};

export default function NewsCategoriesPage() {
  return <CategoryManager type="news" />;
}
