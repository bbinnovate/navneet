const purposeCards = [
  {
    icon: "🎯",
    title: "Vision",
    color: "var(--blue)",
    description:
      '"To lead the transformation of education in India by empowering schools with innovative digital solutions that enhance teaching and learning, ensuring every student has the opportunity to thrive."',
  },
  {
    icon: "🚀",
    title: "Mission",
    color: "var(--green)",
    description:
      '"To be the foremost provider of cutting-edge educational technology, creating a future where quality education is accessible to all fostering creativity, critical thinking, and holistic development in every learner."',
  },
];

const valuesCards = [
  {
    icon: "⭐",
    title: "Excellence",
    description:
      "Always committed to deliver and achieve the best in everything we do.",
    className: "fcard col-span-2 md:col-span-1",
  },
  {
    icon: "🤝",
    title: "Reliability",
    description:
      "Committing what we can deliver and always delivering on our commitments.",
    className: "fcard",
  },
  {
    icon: "💛",
    title: "Care",
    description:
      "Compassion towards the interest of our customers, employees, and stakeholders.",
    className: "fcard",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "Continuously enhancing our value proposition with a futuristic, technology-first approach.",
    className: "fcard",
  },
  {
    icon: "📋",
    title: "Accountability",
    description:
      "Empowering every member on execution and taking ownership for results.",
    className: "fcard",
  },
];

export default function Light24() {
  return (
    <section className="sec sec-light">
      <p className="green-text tag">Our Purpose</p>

      <h2 className=" blue-text heading">Where We Are Going.</h2>

      <div className="g2" style={{ marginTop: "2rem" }}>
        {purposeCards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "var(--white)",
              borderRadius: "14px",
              padding: "1.75rem",
              border: "1px solid var(--border)",
              borderLeft: `5px solid ${card.color}`,
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "10px" }}>
              {card.icon}
            </div>

            <div className="title "
              style={{
               
                color: card.color,
                marginBottom: "10px",
              }}
            >
              {card.title}
            </div>

            <p  className="subtitle "
             
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-3"
        style={{ gap: "1rem", marginTop: "1.5rem" }}
      >
        {valuesCards.map((card, index) => (
          <div className={card.className} key={index}>
            <div className="fcard-icon">{card.icon}</div>
            <div className="fcard-name title blue-text">{card.title}</div>
            <div  className="subtitle dark-text">{card.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}