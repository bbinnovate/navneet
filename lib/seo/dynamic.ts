import { adminDb } from '@/lib/firebase/admin';
import { buildMetadata } from '@/lib/seo';
import { staticFallbacks } from './static-fallback';
import { isContentPublished } from '@/lib/content/helpers';
import type { Metadata } from 'next';

export async function getPageMetadata(pageKey: string): Promise<Metadata> {
  const fallback = staticFallbacks[pageKey];
  if (!fallback) {
    console.warn(`No fallback SEO config found for pageKey: ${pageKey}`);
    return {};
  }

  try {
    const docSnap = await adminDb.collection('pageMetadata').doc(pageKey).get();
    if (docSnap.exists) {
      const data = docSnap.data();
      if (data) {
        return buildMetadata({
          title: data.title || fallback.title,
          description: data.description || fallback.description,
          path: fallback.path,
          keywords: data.keywords || fallback.keywords,
          ogImage: data.ogImage || undefined,
          ogTitle: data.ogTitle || undefined,
          ogDescription: data.ogDescription || undefined,
        });
      }
    }
  } catch (error) {
    console.error(`Error loading dynamic SEO metadata for page ${pageKey}:`, error);
  }

  // Fallback to static if document not found or error
  return buildMetadata({
    title: fallback.title,
    description: fallback.description,
    path: fallback.path,
    keywords: fallback.keywords,
  });
}

/**
 * Generate metadata dynamically for a News detail page
 */
export async function getNewsDetailMetadata(slug: string, fallbackTitle?: string): Promise<Metadata> {
  try {
    const snapshot = await adminDb.collection('news').where('slug', '==', slug).limit(1).get();
    if (!snapshot.empty) {
      const data = snapshot.docs[0].data();
      if (isContentPublished(data)) {
        return buildMetadata({
          title: data.seoTitle || data.title || fallbackTitle || 'News Article | NAVNEET TOPTECH',
          description: data.seoDescription || data.shortDescription || 'Read the latest news coverage and announcements from NAVNEET TOPTECH.',
          path: `/news/${slug}`,
          keywords: data.seoKeywords || `${data.category || 'News'}, NAVNEET TOPTECH, EdTech`,
          ogTitle: data.ogTitle || data.seoTitle || data.title,
          ogDescription: data.ogDescription || data.seoDescription || data.shortDescription,
          ogImage: data.ogImage || data.featuredImage || undefined,
        });
      }
    }
  } catch (error) {
    console.error(`Error loading dynamic metadata for news ${slug}:`, error);
  }

  return buildMetadata({
    title: fallbackTitle || 'News | NAVNEET TOPTECH',
    description: 'Read the latest news coverage and announcements from NAVNEET TOPTECH.',
    path: `/news/${slug}`,
  });
}

/**
 * Generate metadata dynamically for a Blog detail page
 */
export async function getBlogDetailMetadata(slug: string, fallbackTitle?: string): Promise<Metadata> {
  try {
    const snapshot = await adminDb.collection('blogs').where('slug', '==', slug).limit(1).get();
    if (!snapshot.empty) {
      const data = snapshot.docs[0].data();
      if (isContentPublished(data)) {
        return buildMetadata({
          title: data.seoTitle || data.title || fallbackTitle || 'Blog | NAVNEET TOPTECH',
          description: data.seoDescription || data.shortDescription || 'Insights on school transformation, digital classrooms, LMS adoption, and phygital learning from NAVNEET TOPTECH.',
          path: `/blogs/${slug}`,
          keywords: data.seoKeywords || `${data.category || 'Blog'}, NAVNEET TOPTECH, EdTech`,
          ogTitle: data.ogTitle || data.seoTitle || data.title,
          ogDescription: data.ogDescription || data.seoDescription || data.shortDescription,
          ogImage: data.ogImage || data.featuredImage || undefined,
        });
      }
    }
  } catch (error) {
    console.error(`Error loading dynamic metadata for blog ${slug}:`, error);
  }

  return buildMetadata({
    title: fallbackTitle || 'Blog | NAVNEET TOPTECH',
    description: 'Read educational insights and articles from NAVNEET TOPTECH.',
    path: `/blogs/${slug}`,
  });
}

/**
 * Generate metadata dynamically for an Article detail page
 */
export async function getArticleDetailMetadata(slug: string, fallbackTitle?: string): Promise<Metadata> {
  try {
    const snapshot = await adminDb.collection('articles').where('slug', '==', slug).limit(1).get();
    if (!snapshot.empty) {
      const data = snapshot.docs[0].data();
      if (isContentPublished(data)) {
        return buildMetadata({
          title: data.seoTitle || data.title || fallbackTitle || 'Article | NAVNEET TOPTECH',
          description: data.seoDescription || data.shortDescription || 'In-depth thought leadership articles and research by NAVNEET TOPTECH.',
          path: `/articles/${slug}`,
          keywords: data.seoKeywords || `${data.category || 'Article'}, NAVNEET TOPTECH, Education`,
          ogTitle: data.ogTitle || data.seoTitle || data.title,
          ogDescription: data.ogDescription || data.seoDescription || data.shortDescription,
          ogImage: data.ogImage || data.featuredImage || undefined,
        });
      }
    }
  } catch (error) {
    console.error(`Error loading dynamic metadata for article ${slug}:`, error);
  }

  return buildMetadata({
    title: fallbackTitle || 'Article | NAVNEET TOPTECH',
    description: 'In-depth thought leadership articles by NAVNEET TOPTECH.',
    path: `/articles/${slug}`,
  });
}

/**
 * Generate metadata dynamically for a Career detail page
 */
export async function getCareerDetailMetadata(slug: string, fallbackTitle?: string): Promise<Metadata> {
  try {
    const snapshot = await adminDb.collection('careers').where('slug', '==', slug).limit(1).get();
    if (!snapshot.empty) {
      const data = snapshot.docs[0].data();
      if (data.status === 'published') {
        const jobTitle = data.jobTitle || data.title;
        return buildMetadata({
          title: `${jobTitle} | Careers at NAVNEET TOPTECH`,
          description: data.shortDescription || data.description || `Join NAVNEET TOPTECH as ${jobTitle}. Explore job responsibilities, requirements, and apply today.`,
          path: `/careers/${slug}`,
          keywords: `${jobTitle}, EdTech careers, Navneet jobs, ${data.department || ''}`,
          ogTitle: `${jobTitle} | Careers at NAVNEET TOPTECH`,
          ogDescription: data.shortDescription || data.description,
        });
      }
    }
  } catch (error) {
    console.error(`Error loading dynamic metadata for career ${slug}:`, error);
  }

  return buildMetadata({
    title: fallbackTitle || 'Career Opportunity | NAVNEET TOPTECH',
    description: 'Explore career opportunities with NAVNEET TOPTECH.',
    path: `/careers/${slug}`,
  });
}
