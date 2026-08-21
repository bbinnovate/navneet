import ArticlesListClient from './ArticlesListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles Management',
  description: 'Manage, edit, schedule, and publish research papers and thought leadership articles',
};

export default function ArticlesAdminPage() {
  return <ArticlesListClient />;
}
