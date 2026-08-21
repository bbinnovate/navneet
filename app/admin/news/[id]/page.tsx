import NewsFormClient from './NewsFormClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Editor',
  description: 'Create, edit, and configure news publication and media coverage settings',
};

export default function NewsFormPage() {
  return <NewsFormClient />;
}
