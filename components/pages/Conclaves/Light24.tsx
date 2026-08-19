import Link from 'next/link';

const reasons = [
  {
    icon: '🚀',
    title: 'Stay Ahead of the Curve',
    description:
      'Hands-on exposure to EdTech tools that are already reshaping how classrooms teach and how students learn.',
  },
  {
    icon: '🎓',
    title: 'Empowerment Through Knowledge',
    description:
      'Sessions on the teaching techniques and pedagogies built for a tech-driven classroom.',
  },
  {
    icon: '🤝',
    title: 'Community & Collaboration',
    description:
      'A peer network of principals and teachers that stays connected long after the event ends.',
  },
  {
    icon: '🛠️',
    title: 'Special Workshops',
    description:
      'Interactive, expert-led sessions built for hands-on learning, not passive listening.',
  },
  {
    icon: '📘',
    title: 'Understanding NEP 2020',
    description:
      'Clear, practical guidance on what NEP 2020 actually means for day-to-day school implementation.',
  },
];

export default function Light24() {
  return (
    <section className="sec sec-light">
      <p className="tag green-text">Why Attend</p>

      <h2
        className="heading blue-text"
        style={{ marginBottom: '2rem' }}
      >
        Five Reasons Educators Keep Coming Back.
      </h2>

      <div className="g3">
        {reasons.map((reason, index) => (
          <div className="fcard" key={index}>
            <div className="fcard-icon">{reason.icon}</div>

            <div
              className=" title blue-text mb-3"
          
            >
              {reason.title}
            </div>

            <div className="subtitle dark-text">
              {reason.description}
            </div>
          </div>
        ))}

        <div
          className="fcard"
          style={{
            background: 'var(--blue)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <div
            className=" title white-text mb-3"
          >
            Claim Your City's Spot
          </div>

          <div
           className="subtitle grey-text mb-3"
          >
            Registration confirms your seat — our team calls to finalise
            participation details.
          </div>

          <Link
            href="/contact"
            className="btn-gold"
            style={{
              padding: '9px 20px',
              fontSize: '12px',
            }}
          >
            Register Interest →
          </Link>
        </div>
      </div>
    </section>
  );
}