import Link from 'next/link';

export default function Light23() {
  return (
    <section className="sec sec-light">
    <p className="sec-tag">Current Openings</p>
    <h2 className="sec-title" style={{ marginBottom: '2rem' }}>Open Positions.</h2>
    <div className="g2">
      <div className="fcard">
        <div className="fcard-name" style={{ fontSize: '16px' }}>Territory Sales Incharge</div>
        <div className="fcard-desc" style={{ marginBottom: '10px' }}>📍 Sangamner, Amravati, Nagpur, Yavatmal · Sales · 1–2 yrs experience</div>
        <div className="fcard-desc" style={{ marginBottom: '14px' }}>Drive sales growth within your territory by building relationships with schools and educators — generating leads, running product demos, and hitting monthly and quarterly targets.</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a className="btn-outline-blue" style={{ padding: '8px 16px', fontSize: '12px' }}  href="https://navneettoptech.com/wp-content/uploads/2026/02/Territory-sales-Incharge-10202040.pdf" target="_blank" rel="noopener noreferrer">Download JD</a>
          <Link href="/contact" className="btn-blue" style={{ padding: '8px 16px', fontSize: '12px' }} >Apply Now →</Link>
        </div>
      </div>
      <div className="fcard">
        <div className="fcard-name" style={{ fontSize: '16px' }}>Strategy Manager</div>
        <div className="fcard-desc" style={{ marginBottom: '10px' }}>📍 Mumbai · Strategy · 3–6 yrs experience</div>
        <div className="fcard-desc" style={{ marginBottom: '14px' }}>Work closely with leadership to translate business vision into actionable plans — leading cross-functional projects, analysing performance, and driving key strategic initiatives.</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a className="btn-outline-blue" style={{ padding: '8px 16px', fontSize: '12px' }}  href="https://navneettoptech.com/wp-content/uploads/2026/02/Strategy-Manager.pdf" target="_blank" rel="noopener noreferrer">Download JD</a>
          <Link href="/contact" className="btn-blue" style={{ padding: '8px 16px', fontSize: '12px' }} >Apply Now →</Link>
        </div>
      </div>
      <div className="fcard">
        <div className="fcard-name" style={{ fontSize: '16px' }}>Lead Backend Engineer</div>
        <div className="fcard-desc" style={{ marginBottom: '10px' }}>📍 Bangalore · Engineering · 5–8 yrs experience</div>
        <div className="fcard-desc" style={{ marginBottom: '14px' }}>Design, build, and scale backend systems powering our digital learning platforms — driving architecture decisions, mentoring engineers, and contributing to technical strategy.</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a className="btn-outline-blue" style={{ padding: '8px 16px', fontSize: '12px' }}  href="https://navneettoptech.com/wp-content/uploads/2026/02/Lead_Backend-Engineer-10106498.pdf" target="_blank" rel="noopener noreferrer">Download JD</a>
          <Link href="/contact" className="btn-blue" style={{ padding: '8px 16px', fontSize: '12px' }} >Apply Now →</Link>
        </div>
      </div>
      <div className="fcard">
        <div className="fcard-name" style={{ fontSize: '16px' }}>Customer Care Executive</div>
        <div className="fcard-desc" style={{ marginBottom: '10px' }}>📍 Washim · Implementation · 1–3 yrs experience</div>
        <div className="fcard-desc" style={{ marginBottom: '14px' }}>Ensure successful implementation of our digital solutions in schools — installation, onboarding, user training, troubleshooting, and supporting renewals with a customer-first mindset.</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a className="btn-outline-blue" style={{ padding: '8px 16px', fontSize: '12px' }}  href="https://navneettoptech.com/wp-content/uploads/2026/02/Customer-Care-Executive-10202095.pdf" target="_blank" rel="noopener noreferrer">Download JD</a>
          <Link href="/contact" className="btn-blue" style={{ padding: '8px 16px', fontSize: '12px' }} >Apply Now →</Link>
        </div>
      </div>
    </div>
    
  </section>
  );
}
