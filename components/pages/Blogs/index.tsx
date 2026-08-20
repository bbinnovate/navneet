import PageHeroSection1 from './PageHeroSection1';
import DynamicBlogGrid from '@/components/public/DynamicBlogGrid';
import Footer from '@/components/Footer';

export default function BlogsPage() {
  return (
    <main>
      <PageHeroSection1 />
      <DynamicBlogGrid />
      <Footer />
    </main>
  );
}
