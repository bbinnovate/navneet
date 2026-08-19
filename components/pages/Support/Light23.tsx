export default function Light23() {
  const supportOffers = [
    {
      icon: '💻',
      title: '1:1 Online Sessions',
      description:
        'Customised online sessions for teachers who need help using the platform effectively.',
    },
    {
      icon: '⚡',
      title: 'Immediate Remote Support',
      description:
        'Fast remote assistance so your team gets help exactly when they need it.',
    },
    {
      icon: '💡',
      title: 'Technology Strategies',
      description:
        'Guidance to help teachers use the technology in more innovative ways in the classroom.',
    },
    {
      icon: '🔄',
      title: 'Swift Content Updates',
      description:
        "Syllabus updates and new features shared quickly, so you're never working off stale content.",
    },
    {
      icon: '👨‍🏫',
      title: 'Experienced Technical Team',
      description:
        '65+ years of syllabus and curriculum expertise, plus 12+ years building digital content.',
    },
    {
      icon: '🎓',
      title: 'Teacher Training & Workshops',
      description:
        '~25 hours of training every academic year, plus workshops on classroom management and teaching strategies with certificates of completion.',
    },
    {
      icon: '📊',
      title: 'Academic Support & Progress Reports',
      description:
        'Year-round academic and curriculum support, plus multiple report formats to track student progress on an ongoing basis.',
    },
    {
      icon: '🎉',
      title: 'School Activity Support',
      description:
        'Help planning and executing activities like Science Day, carnivals, and student conferences.',
    },
  ];

  return (
    <section className="sec sec-light">
      <p className="tag green-text">What We Offer</p>

      <h2
        className="heading blue-text"
        style={{ marginBottom: '2rem' }}
      >
        Support That Goes Beyond the Product.
      </h2>

      <div className="g4">
        {supportOffers.map((card, index) => (
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