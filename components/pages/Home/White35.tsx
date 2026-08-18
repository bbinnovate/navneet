
export default function White35() {
  return (
    <section className="sec sec-white">
        <p className="sec-tag">Boards We Power</p>
        <h2 className="sec-title">
          Built for Indian Boards. Not Adapted for Them.
        </h2>
        <p className="sec-sub" style={{ marginBottom: '2rem' }}>
          Content, assessments, and lesson plans mapped to CBSE, CBSE Pattern,
          and Maharashtra State Board — updated when syllabi change.
        </p>
        <div className="g3">
          <div
            style={{ background: 'var(--light)', borderRadius: '14px', padding: '1rem', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>📘</div>
            <div
              style={{ fontFamily: 'var(--fh)', fontSize: '17px', fontWeight: '800', color: 'var(--blue)', marginBottom: '8px' }}>
              CBSE Board
            </div>
            <p
              style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Nationwide curriculum coverage from Nursery to Grade 10.
              CBSE-aligned digital content, question bank, and lesson plans —
              including NCERT and RISE series for TopClass.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div>
                <div
                  style={{ fontFamily: 'var(--fh)', fontSize: '20px', fontWeight: '800', color: 'var(--blue)' }}>
                  3,500+
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Schools</div>
              </div>
            </div>
          </div>
          <div
            style={{ background: 'var(--light)', borderRadius: '14px', padding: '1rem', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>📗</div>
            <div
              style={{ fontFamily: 'var(--fh)', fontSize: '17px', fontWeight: '800', color: 'var(--blue)', marginBottom: '8px' }}>
              CBSE Pattern Schools
            </div>
            <p
              style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Full content and assessment coverage for CBSE Pattern schools —
              same curriculum rigour, adapted for pattern school structures.
              Covers RISE series Grades 1–8.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div>
                <div
                  style={{ fontFamily: 'var(--fh)', fontSize: '20px', fontWeight: '800', color: 'var(--blue)' }}>
                  RISE
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  Series Grades 1–8
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ background: 'var(--light)', borderRadius: '14px', padding: '1rem', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>📙</div>
            <div
              style={{ fontFamily: 'var(--fh)', fontSize: '17px', fontWeight: '800', color: 'var(--blue)', marginBottom: '8px' }}>
              Maharashtra State Board
            </div>
            <p
              style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1rem' }}>
              Bilingual content in English and Marathi, Grades 1–10. Updated
              automatically with every MSB syllabus revision — including 2025
              curriculum changes.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div>
                <div
                  style={{ fontFamily: 'var(--fh)', fontSize: '20px', fontWeight: '800', color: 'var(--green)' }}>
                  500+
                </div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                  MSB Schools
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
