import { adminDb } from '@/lib/firebase/admin';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getCareerDetailMetadata } from '@/lib/seo/dynamic';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return getCareerDetailMetadata(slug);
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let careerItem = null;
  try {
    const snapshot = await adminDb.collection('careers').where('slug', '==', slug).limit(1).get();
    if (!snapshot.empty) {
      careerItem = snapshot.docs[0].data();
    }
  } catch (error) {
    console.error('Error fetching career details:', error);
  }

  if (!careerItem || careerItem.status !== 'published') {
    notFound();
  }

  return (
    <main>
      <section className="sec sec-white pt-32 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <span className="tag green-text inline-block mb-4">{careerItem.department || 'Career'}</span>
            <h1 className="heading blue-text text-4xl mb-4">{careerItem.jobTitle || careerItem.title}</h1>
            <div className="flex items-center gap-4 text-gray-500 mb-8 flex-wrap">
              <span>📍 {careerItem.location || 'Remote'}</span>
              <span>•</span>
              <span>{careerItem.employmentType || 'Full-time'}</span>
              <span>•</span>
              <span>{careerItem.experience || 'Experience not specified'}</span>
            </div>
            
            <div className="mb-12 flex gap-4">
              <Link
                href="/contact"
                className="btn-gold"
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  display: 'inline-block'
                }}
              >
                Apply Now →
              </Link>
              {careerItem.jdUrl && (
                <a
                  className="btn-outline-blue"
                  style={{
                    padding: '12px 24px',
                    fontSize: '14px',
                    display: 'inline-block'
                  }}
                  href={careerItem.jdUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download JD
                </a>
              )}
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              {(careerItem.jobDescription || careerItem.description) && (
                <div dangerouslySetInnerHTML={{ __html: careerItem.jobDescription || careerItem.description }} />
              )}
              {careerItem.responsibilities && (
                <>
                  <h3>Responsibilities</h3>
                  <div dangerouslySetInnerHTML={{ __html: careerItem.responsibilities }} />
                </>
              )}
              {careerItem.requirements && (
                <>
                  <h3>Requirements</h3>
                  <div dangerouslySetInnerHTML={{ __html: careerItem.requirements }} />
                </>
              )}
              {careerItem.skills && (
                <>
                  <h3>Skills</h3>
                  <div dangerouslySetInnerHTML={{ __html: careerItem.skills }} />
                </>
              )}
              {careerItem.benefits && (
                <>
                  <h3>Benefits</h3>
                  <div dangerouslySetInnerHTML={{ __html: careerItem.benefits }} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
