import ArticleFormClient from './ArticleFormClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Article Editor',
  description: 'Create, edit, and configure thought leadership article publications',
};

export default function ArticleFormPage() {
  return <ArticleFormClient />;
}
