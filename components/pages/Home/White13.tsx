import Link from 'next/link';

export default function White13() {
  return (
    <section className="sec sec-white">
        <div className="g2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <p className="sec-tag">Who We Are</p>
            <h2 className="sec-title">Built on 65+ Years of Educational Trust.</h2>
            <p className="sec-sub" style={{ marginBottom: '1.25rem' }}>
              NAVNEET TOPTECH is the EdTech arm of Navneet Education Limited —
              one of India's most trusted names in education. For generations,
              Navneet has been part of how India studies, present in millions of
              homes, schools, and study desks across the country. NAVNEET
              TOPTECH extends that same trust into technology.
            </p>
            <p
              style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              We don't just hand schools a product. We walk alongside them as a
              school transformation partner supporting CBSE, CBSE Pattern, and
              Maharashtra State Board schools at every stage of their school
              cycle.
            </p>
            <Link href="/about" className="btn-blue" >
              Our Story →
            </Link>
          </div>
          <div
            style={{ background: 'var(--blue2)', borderRadius: '16px', padding: '1rem' }}>
            <div className="pillars-grid">
              <div className="pillar-pill">
                <div className="pillar-label" style={{ color: '#f5b61f' }}>
                  Academic Expertise
                </div>
                <div className="pillar-body">
                  65+ years of curriculum knowledge built into every product
                </div>
              </div>
              <div className="pillar-pill">
                <div className="pillar-label" style={{ color: '#f5b61f' }}>
                  Technology for Indian Classrooms
                </div>
                <div className="pillar-body">
                  Offline-capable platforms for real Indian classroom conditions
                </div>
              </div>
              <div className="pillar-pill">
                <div className="pillar-label" style={{ color: '#f5b61f' }}>
                  School Relationships
                </div>
                <div className="pillar-body">
                  On-ground presence across 30+ cities, trusted by thousands
                </div>
              </div>
              <div className="pillar-pill">
                <div className="pillar-label" style={{ color: '#f5b61f' }}>
                  Navneet Trust
                </div>
                <div className="pillar-body">
                  Every principal already knows Navneet, that credibility is
                  ours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
