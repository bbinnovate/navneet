import NewsPage from '@/components/pages/News';

export { metadata } from '@/lib/seo/pages/news';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Page() {
  return <NewsPage />;
}

