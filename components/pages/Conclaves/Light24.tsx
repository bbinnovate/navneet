import Link from 'next/link';

export default function Light24() {
  return (
    <section className="sec sec-light">
    <p className="sec-tag">Why Attend</p>
    <h2 className="sec-title" style={{ marginBottom: '2rem' }}>Five Reasons Educators Keep Coming Back.</h2>
    <div className="g3">
      <div className="fcard"><div className="fcard-icon">🚀</div><div className="pcard-name" style={{ fontSize: '15px' }}>Stay Ahead of the Curve</div><div className="pcard-desc">Hands-on exposure to EdTech tools that are already reshaping how classrooms teach and how students learn.</div></div>
      <div className="fcard"><div className="fcard-icon">🎓</div><div className="pcard-name" style={{ fontSize: '15px' }}>Empowerment Through Knowledge</div><div className="pcard-desc">Sessions on the teaching techniques and pedagogies built for a tech-driven classroom.</div></div>
      <div className="fcard"><div className="fcard-icon">🤝</div><div className="pcard-name" style={{ fontSize: '15px' }}>Community & Collaboration</div><div className="pcard-desc">A peer network of principals and teachers that stays connected long after the event ends.</div></div>
      <div className="fcard"><div className="fcard-icon">🛠️</div><div className="pcard-name" style={{ fontSize: '15px' }}>Special Workshops</div><div className="pcard-desc">Interactive, expert-led sessions built for hands-on learning, not passive listening.</div></div>
      <div className="fcard"><div className="fcard-icon">📘</div><div className="pcard-name" style={{ fontSize: '15px' }}>Understanding NEP 2020</div><div className="pcard-desc">Clear, practical guidance on what NEP 2020 actually means for day-to-day school implementation.</div></div>
      <div className="fcard" style={{ background: 'var(--blue)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div className="pcard-name" style={{ color: 'var(--white)', fontSize: '15px' }}>Claim Your City's Spot</div>
        <div className="pcard-desc" style={{ color: 'rgba(255,255,255,.75)', marginBottom: '12px' }}>Registration confirms your seat — our team calls to finalise participation details.</div>
        <Link href="/contact" className="btn-gold"  style={{ padding: '9px 20px', fontSize: '12px' }}>Register Interest →</Link>
      </div>
    </div>
  </section>
  );
}
