import BlogsPage from '@/components/pages/Blogs';

export { metadata } from '@/lib/seo/pages/blogs';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Page() {
  return <BlogsPage />;
}

