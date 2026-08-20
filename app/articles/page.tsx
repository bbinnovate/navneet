import PageHeroSection1 from '@/components/pages/Blogs/PageHeroSection1';
import DynamicArticlesGrid from '@/components/public/DynamicArticlesGrid';
import Footer from '@/components/Footer';
import { buildMetadata } from '@/lib/seo';
import articlesSeo from '@/lib/seo/pages/articles';

export const metadata = buildMetadata(articlesSeo);

export default function ArticlesPage() {
  return (
    <main>
      <PageHeroSection1 />
      <DynamicArticlesGrid />
      <Footer />
    </main>
  );
}
