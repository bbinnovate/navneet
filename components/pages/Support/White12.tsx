export default function White12() {
  const supportCards = [
    {
      icon: '🚀',
      title: 'Expert Onboarding Team',
      description:
        'Complete implementation within 10 working days, handled by a dedicated onboarding team.',
    },
    {
      icon: '🛠️',
      title: 'Independent Support Team',
      description:
        "Prompt resolution of concerns without disrupting your school's day-to-day functioning.",
    },
    {
      icon: '📞',
      title: 'Always Reachable',
      description:
        'Toll-free number, dedicated support email, and a WhatsApp group — whichever works for you.',
    },
  ];

  return (
    <section className="sec sec-white">
      <p className="tag green-text">Why Our Support</p>

      <h2 className="heading blue-text mb-3">
        Built Around Your School's Day-to-Day.
      </h2>

      <p
        className="subtitle dark-text"
        style={{ maxWidth: '720px', marginBottom: '2rem' }}
      >
        Our product onboarding team ensures complete implementation within 10
        working days. Once onboarded, our independent support team resolves
        concerns promptly without disrupting your school's regular functioning
        — reachable anytime via toll-free number, support email, or WhatsApp.
      </p>

      <div className="g3">
        {supportCards.map((card, index) => (
          <div className="fcard" key={index}>
            <div className="fcard-icon">{card.icon}</div>

            <div className="title blue-text mb-3">{card.title}</div>

            <div className="subtitle dark-text">{card.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}