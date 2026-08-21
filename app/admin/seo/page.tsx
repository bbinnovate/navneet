import PageSeoClient from './PageSeoClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Page SEO',
  description: 'Manage SEO metadata, Open Graph tags, and social cards for primary website landing pages',
};

export default function PageSeoPage() {
  return <PageSeoClient />;
}
