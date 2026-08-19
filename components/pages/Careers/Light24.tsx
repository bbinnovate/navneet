import Link from 'next/link';

export default function Light24() {
  const openings = [
    {
      title: 'Territory Sales Incharge',
      details: '📍 Sangamner, Amravati, Nagpur, Yavatmal · Sales · 1–2 yrs experience',
      description:
        'Drive sales growth within your territory by building relationships with schools and educators — generating leads, running product demos, and hitting monthly and quarterly targets.',
      jd:
        'https://navneettoptech.com/wp-content/uploads/2026/02/Territory-sales-Incharge-10202040.pdf',
    },
    {
      title: 'Strategy Manager',
      details: '📍 Mumbai · Strategy · 3–6 yrs experience',
      description:
        'Work closely with leadership to translate business vision into actionable plans — leading cross-functional projects, analysing performance, and driving key strategic initiatives.',
      jd:
        'https://navneettoptech.com/wp-content/uploads/2026/02/Strategy-Manager.pdf',
    },
    {
      title: 'Lead Backend Engineer',
      details: '📍 Bangalore · Engineering · 5–8 yrs experience',
      description:
        'Design, build, and scale backend systems powering our digital learning platforms — driving architecture decisions, mentoring engineers, and contributing to technical strategy.',
      jd:
        'https://navneettoptech.com/wp-content/uploads/2026/02/Lead_Backend-Engineer-10106498.pdf',
    },
    {
      title: 'Customer Care Executive',
      details: '📍 Washim · Implementation · 1–3 yrs experience',
      description:
        'Ensure successful implementation of our digital solutions in schools — installation, onboarding, user training, troubleshooting, and supporting renewals with a customer-first mindset.',
      jd:
        'https://navneettoptech.com/wp-content/uploads/2026/02/Customer-Care-Executive-10202095.pdf',
    },
  ];

  return (
    <section className="sec sec-light">
      <p className="tag green-text">Current Openings</p>

      <h2 className="heading blue-text" style={{ marginBottom: '2rem' }}>
        Open Positions.
      </h2>

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
              style={{ marginBottom: '14px' }}
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

              <Link
                href="/contact"
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
    </section>
  );
}