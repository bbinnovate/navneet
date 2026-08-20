import Link from 'next/link';
import { adminDb } from '@/lib/firebase/admin';

export default async function Light24() {
  let openings: any[] = [];
  try {
    const snapshot = await adminDb.collection('careers')
      .where('status', '==', 'published')
      .get();
      
    openings = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        slug: data.slug,
        title: data.jobTitle || data.title || '',
        department: data.department,
        location: data.location,
        employmentType: data.employmentType,
        experience: data.experience,
        salary: data.salary,
        description: data.jobDescription || data.description || '',
        responsibilities: data.responsibilities,
        requirements: data.requirements,
        skills: data.skills,
        benefits: data.benefits,
        applicationDeadline: data.applicationDeadline,
        publishedAt: data.publishDate || data.publishedAt,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        details: `📍 ${data.location || 'Remote'} · ${data.department || 'General'} · ${data.experience || 'Experience not specified'}`,
        jd: data.jdUrl || null
      };
    });
  } catch (error) {
    console.error('Error fetching careers:', error);
  }

  // Fallback if no careers
  if (openings.length === 0) {
    openings = [];
  }

  return (
    <section className="sec sec-light">
      <p className="tag green-text">Current Openings</p>

      <h2 className="heading blue-text" style={{ marginBottom: '2rem' }}>
        Open Positions.
      </h2>

      {openings.length > 0 ? (
        <div className="g2">
          {openings.map((opening, index) => (
            <div className="fcard" key={index}>
              <div
                className="title blue-text mb-3"
              >
                {opening.title}
              </div>

              <div
                className="tag dark-text"
                style={{ marginBottom: '10px' }}
              >
                {opening.details}
              </div>

             <div
  className="subtitle dark-text"
  style={{
    marginBottom: '14px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  }}
>
  {opening.description}
</div>

              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                }}
              >
                {opening.jd && (
                  <a
                    className="btn-outline-blue"
                    style={{
                      padding: '8px 16px',
                      fontSize: '12px',
                    }}
                    href={opening.jd}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download JD
                  </a>
                )}

                <Link
                  href={opening.slug ? `/careers/${opening.slug}` : '/contact'}
                  className="btn-gold"
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                  }}
                >
                  Apply Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-8">
          No current openings available. Please check back later.
        </div>
      )}
    </section>
  );
}