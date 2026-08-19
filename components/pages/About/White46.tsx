const leadershipCards = [
  {
    initials: "HG",
    name: "Harshil Gala",
    role: "Chief Executive Officer",
    description:
      "Joined NTT in 2011. Led launch of CBSE curriculum and LMS. Master's from University of Nottingham.",
  },
  {
    initials: "RS",
    name: "Ranvijay Singh",
    role: "Head of Engineering",
    description:
      "12+ years in EdTech and FinTech. Expert in AI-driven learning and cloud architectures.",
  },
  {
    initials: "PJ",
    name: "Pradip Jadhav",
    role: "National Sales Head",
    description:
      "25+ years in Sales & Marketing. Established Navneet's educational brands PAN India.",
  },
  {
    initials: "NP",
    name: "Nihar Pandit",
    role: "Product Head",
    description:
      "10+ years in product management. Postgraduate from Great Lakes Institute of Management.",
  },
  {
    initials: "VS",
    name: "Vipul Shah",
    role: "Academic Head",
    description:
      "25+ years in education. Expert in content development, digitisation, and curriculum design.",
  },
  {
    initials: "NJ",
    name: "Neety Jain",
    role: "Implementation Head",
    description:
      "22+ years in education and leadership, specialising in LMS and curriculum design.",
  },
  {
    initials: "NA",
    name: "Neha Agarwal Haria",
    role: "Marketing Head",
    description:
      "Driving brand growth, digital marketing, and go-to-market strategy across India.",
  },
  {
    initials: "+",
    name: "Join Our Team",
    role: "View Open Roles →",
    description:
      "We're growing fast. Come build the future of education with us.",
    isJoinCard: true,
  },
];

export default function White46() {
  return (
    <section className="sec sec-white">
      <p className="sec-tag green-text tag">Leadership</p>

      <h2 className="sec-title blue-text heading">
        The Team Behind the Mission.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.25rem",
          marginTop: "2rem",
        }}
      >
        {leadershipCards.map((card, index) => (
          <div
            key={index}
            style={{
              background: card.isJoinCard ? "var(--light)" : "var(--white)",
              borderRadius: "14px",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              textAlign: "center",
              ...(card.isJoinCard && {
                cursor: "pointer",
              }),
            }}
            {...(card.isJoinCard
              ? { "data-nav-href": "/careers" }
              : {})}
          >
            <div
              style={{
                width: card.isJoinCard ? "64px" : "72px",
                height: card.isJoinCard ? "64px" : "72px",
                borderRadius: "50%",
                background: card.isJoinCard
                  ? "var(--green)"
                  : "var(--light)",
                border: card.isJoinCard
                  ? undefined
                  : "2px dashed var(--border)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                position: "relative",
                fontFamily: "var(--fh)",
                fontSize: card.isJoinCard ? "24px" : "16px",
                fontWeight: "800",
                color: "var(--white)",
              }}
            >
              {card.initials}

              {!card.isJoinCard && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    right: "-4px",
                    width: "16px",
                    height: "16px",
                    background: "var(--light)",
                    border: "1px solid var(--border)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "8px",
                  }}
                >
                  📷
                </div>
              )}
            </div>

            <div  className="title blue-text "
              
            >
              {card.name}
            </div>

            <div  className="tag  green-text"
             
            >
              {card.role}
            </div>

            <div className="subtitle dark-text"
            
            >
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}