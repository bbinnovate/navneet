
export default function Light2() {
  return (
    <section className="sec sec-light">
        <p className="sec-tag">Our Purpose</p>
        <h2 className="sec-title">Where We Are Going.</h2>
        <div className="g2" style={{ marginTop: '2rem' }}>
          <div
            style={{ background: 'var(--white)', borderRadius: '14px', padding: '1.75rem', border: '1px solid var(--border)', borderLeft: '5px solid var(--blue)' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🎯</div>
            <div
              style={{ fontFamily: 'var(--fh)', fontSize: '16px', fontWeight: '800', color: 'var(--blue)', marginBottom: '10px' }}
            >
              Vision
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.72' }}>
              "To lead the transformation of education in India by empowering
              schools with innovative digital solutions that enhance teaching
              and learning, ensuring every student has the opportunity to
              thrive."
            </p>
          </div>
          <div
            style={{ background: 'var(--white)', borderRadius: '14px', padding: '1.75rem', border: '1px solid var(--border)', borderLeft: '5px solid var(--green)' }}
          >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🚀</div>
            <div
              style={{ fontFamily: 'var(--fh)', fontSize: '16px', fontWeight: '800', color: 'var(--green)', marginBottom: '10px' }}
            >
              Mission
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.72' }}>
              "To be the foremost provider of cutting-edge educational
              technology, creating a future where quality education is
              accessible to all fostering creativity, critical thinking, and
              holistic development in every learner."
            </p>
          </div>
        </div>
        <div  className="grid grid-cols-2 md:grid-cols-3 " 
          style={{ gap: '1rem', marginTop: '1.5rem' }}
        >
         <div className="fcard col-span-2 md:col-span-1">
            <div className="fcard-icon">⭐</div>
            <div className="fcard-name">Excellence</div>
            <div className="fcard-desc">
              Always committed to deliver and achieve the best in everything we
              do.
            </div>
          </div>
          <div className="fcard">
            <div className="fcard-icon">🤝</div>
            <div className="fcard-name">Reliability</div>
            <div className="fcard-desc">
              Committing what we can deliver and always delivering on our
              commitments.
            </div>
          </div>
          <div className="fcard">
            <div className="fcard-icon">💛</div>
            <div className="fcard-name">Care</div>
            <div className="fcard-desc">
              Compassion towards the interest of our customers, employees, and
              stakeholders.
            </div>
          </div>
          <div className="fcard">
            <div className="fcard-icon">💡</div>
            <div className="fcard-name">Innovation</div>
            <div className="fcard-desc">
              Continuously enhancing our value proposition with a futuristic,
              technology-first approach.
            </div>
          </div>
          <div className="fcard">
            <div className="fcard-icon">📋</div>
            <div className="fcard-name">Accountability</div>
            <div className="fcard-desc">
              Empowering every member on execution and taking ownership for
              results.
            </div>
          </div>
        </div>
      </section>
  );
}
