import PageHeroSection1 from './PageHeroSection1';
import White12 from './White12';
import DynamicNewsGrid from '@/components/public/DynamicNewsGrid';
import Footer from '@/components/Footer';

export default function NewsPage() {
  return (
    <main>
      <PageHeroSection1 />
      <White12 />
      <section className="sec sec-white">
        <DynamicNewsGrid />
      </section>
      <Footer />
    </main>
  );
}
