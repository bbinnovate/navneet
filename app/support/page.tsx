import SupportPage from '@/components/pages/Support';
import { getPageMetadata } from '@/lib/seo/dynamic';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata('support');
}

export default function Page() {
  return <SupportPage />;
}
