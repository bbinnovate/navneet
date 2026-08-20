'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Career = {
  id: string;
  title: string;
  slug: string;
  location?: string;
  department?: string;
  employmentType?: string;
  experience?: string;
  shortDescription?: string;
};

export default function DynamicCareerOpenings() {
  const [openings, setOpenings] = useState<Career[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/public/careers')
      .then((r) => r.json())
      .then((data) => setOpenings(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="sec sec-light">
        <p className="tag green-text">Current Openings</p>
        <h2 className="heading blue-text" style={{ marginBottom: '2rem' }}>Open Positions.</h2>
        <div className="admin-empty">Loading openings…</div>
      </section>
    );
  }

  if (!openings.length) return null;

  return (
    <section className="sec sec-light">
      <p className="tag green-text">Current Openings</p>
      <h2 className="heading blue-text" style={{ marginBottom: '2rem' }}>Open Positions.</h2>
      <div className="g2">
        {openings.map((opening) => (
          <div className="fcard" key={opening.id}>
            <div className="title blue-text mb-3">{opening.title}</div>
            <div className="tag dark-text" style={{ marginBottom: 10 }}>
              {[opening.location, opening.department, opening.employmentType, opening.experience]
                .filter(Boolean)
                .join(' · ')}
            </div>
            {opening.shortDescription && (
              <div className="subtitle dark-text" style={{ marginBottom: 14 }}>
                {opening.shortDescription}
              </div>
            )}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link href={`/careers/${opening.slug}`} className="btn-outline-blue" style={{ padding: '8px 16px', fontSize: 12 }}>
                View Details
              </Link>
              <Link href={`/careers/${opening.slug}/apply`} className="btn-gold" style={{ padding: '8px 16px', fontSize: 12 }}>
                Apply Now →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
