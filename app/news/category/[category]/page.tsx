import { adminDb } from '@/lib/firebase/admin';
import PageHeroSection1 from '@/components/pages/News/PageHeroSection1';
import Footer from '@/components/Footer';
import { isContentPublished, parseTimestampToMs, formatDisplayDate, getCategorySlug } from '@/lib/content/helpers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: Promise<{ category: string }>;
}

async function getCategoryNews(categorySlug: string) {
  try {
    const snapshot = await adminDb.collection('news')
      .where('status', 'in', ['published', 'scheduled'])
      .get();
      
    let rawNews = snapshot.docs
      .map(doc => ({ ...doc.data(), id: doc.id } as any))
      .filter(isContentPublished);
    
    // Sort in memory (newest publish/scheduled/created date first)
    rawNews.sort((a: any, b: any) => {
      const dateA = parseTimestampToMs(a.publishDate || a.scheduledDate || a.createdAt) || 0;
      const dateB = parseTimestampToMs(b.publishDate || b.scheduledDate || b.createdAt) || 0;
      return dateB - dateA;
    });

    const categoryNews = rawNews.filter(data => getCategorySlug(data.category) === categorySlug);

    const formattedNews = categoryNews.map(data => {
      return {
        id: data.id,
        slug: data.slug || '',
        title: data.title || '',
        publication: data.author || data.category || 'News',
        date: formatDisplayDate(data.publishDate || data.scheduledDate || data.createdAt),
        image: data.featuredImage || null,
        shortDescription: data.shortDescription || '',
        content: data.content || '',
        author: data.author || '',
        category: data.category || 'News'
      };
    });

    // Extract original category name (e.g. "Awards" instead of "awards")
    const originalCategoryName = categoryNews.length > 0 
      ? (categoryNews[0].category || 'News') 
      : categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);

    return { newsList: formattedNews, categoryName: originalCategoryName };
  } catch (error) {
    console.error('Error fetching news by category:', error);
    return { newsList: [], categoryName: categorySlug };
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const { categoryName } = await getCategoryNews(category);
  return {
    title: `${categoryName} News | NAVNEET TOPTECH`,
    description: `Read the latest press releases, media coverage, and announcements about ${categoryName} from NAVNEET TOPTECH.`,
  };
}

export default async function CategoryNewsPage({ params }: PageProps) {
  const { category } = await params;
  const { newsList, categoryName } = await getCategoryNews(category);

  if (newsList.length === 0) {
    notFound();
  }

  return (
    <main>
      <PageHeroSection1 
        title={`${categoryName} News`}
        subtitle={`Read all news coverages, articles, and media releases published under the ${categoryName} category.`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: categoryName }
        ]}
      />
      
      <section className="sec sec-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="tag green-text">{categoryName} Coverage</p>
          <h2 className="sec-title heading blue-text">
            What the Media Says.
          </h2>

          <div className="g3" style={{ marginTop: "1.5rem", marginBottom: "3.5rem" }}>
            {newsList.map((press, index) => (
              <div
                key={press.id || press.slug || index}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  display: "flex",
                  flexDirection: "column",
                  background: "var(--white)",
                }}
              >
                {press.image ? (
                  <div 
                    style={{
                      background: `url(${press.image}) center/cover no-repeat`,
                      aspectRatio: "16/9",
                      borderBottom: "1px solid var(--border)",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      background: "var(--light)",
                      borderBottom: "1px solid var(--border)",
                      aspectRatio: "16/9",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "28px" }}>📰</div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        fontFamily: "var(--fh)",
                        color: "var(--muted)",
                      }}
                    >
                      News Coverage
                    </div>
                  </div>
                )}

                <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="tag green-text"
                    style={{
                      display: "inline-block",
                      background: "rgba(27, 138, 115, 0.1)",
                      textTransform: "uppercase",
                      padding: "3px 9px",
                      borderRadius: "10px",
                      marginBottom: "8px",
                      fontFamily: "var(--fh)",
                      alignSelf: "flex-start",
                      fontSize: "11px",
                    }}
                  >
                    {press.category}
                  </div>

                  <div className="title blue-text" style={{ marginBottom: "8px", flex: 1, fontWeight: "600" }}>
                    {press.slug ? (
                      <a href={`/news/${press.slug}`} className="hover:underline">{press.title}</a>
                    ) : (
                      press.title
                    )}
                  </div>

                  {press.shortDescription && (
                    <p className="subtitle dark-text" style={{ fontSize: "13px", marginBottom: "12px", color: "var(--muted)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {press.shortDescription}
                    </p>
                  )}

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", fontSize: "12px", color: "var(--muted)" }}>
                    <span>{press.date}</span>
                    {press.slug && (
                      <a href={`/news/${press.slug}`} className="link-more" style={{ fontSize: "12px" }}>
                        Read News →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
