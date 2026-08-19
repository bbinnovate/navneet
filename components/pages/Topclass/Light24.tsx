const stakeholderData = [
  {
    id: "sch",
    tabLabel: "Schools",
    heading:
      "Schools drive the pursuit of knowledge and TopClass equips them with advanced technologies to support effective teaching and learning.",
    points: [
      "Enhance school reputation with proven teaching tools",
      "Improve academic outcomes school-wide",
      "Track syllabus completion across all classes in real time",
      "Multiple teaching aids and resources — significant cost savings",
    ],
    card: {
      background: "var(--blue)",
      label: "Used by",
      value: "4,000+",
      description: "Partner Schools",
      stats: [
        {
          value: "12+",
          label: "Avg. Years with Us",
        },
        {
          value: "5+",
          label: "States Covered",
        },
      ],
    },
  },
  {
    id: "tch",
    tabLabel: "Teachers",
    heading:
      "Teachers are the heart of our educational approach. TopClass gives them everything they need to teach better — with less preparation.",
    points: [
      "Lesson plans and digital content ready to use — no sourcing",
      "Automated assessments save valuable time each week",
      "41,000+ question paper generator — tests in minutes",
      "Stay informed with latest educational trends and methodologies",
    ],
    card: {
      background: "var(--green)",
      label: "Teacher Feedback",
      value: "1,00,000+",
      description: "Teachers Trained",
      text: "On TopSchool, TopClass, and TopAssess — across CBSE, CBSE Pattern, and Maharashtra State Board schools.",
    },
  },
  {
    id: "stu",
    tabLabel: "Students & Parents",
    heading:
      "TopClass ensures the digital content provided maximises every child's learning potential.",
    points: [
      "Learning made interactive and enjoyable through 2D/3D animations",
      "Education that aligns with CBSE and MSB national standards",
      "Value for money — vast visual enhancements for every lesson",
      "Content designed to deliver results — for a proud parent",
    ],
    card: {
      background: "var(--blue)",
      label: "Student Outcome",
      text: "Students who learn through 2D/3D animated concepts retain more than through textbook-only teaching — and stay engaged throughout the lesson.",
    },
  },
];

export default function Light24() {
  return (
    <section className="sec sec-light">
      <p className="tag green-text">For Every Stakeholder</p>

      <h2 className="heading blue-text mb-3">
        What TopClass Delivers.
      </h2>

      {/* Tabs */}
      <div className="s-tabs">
        {stakeholderData.map((item, index) => (
          <div
            key={item.id}
            className={`s-tab ${index === 0 ? "active" : ""}`}
            data-s-tab={item.id}
          >
            {item.tabLabel}
          </div>
        ))}
      </div>

      {/* Panels */}
      {stakeholderData.map((item, index) => (
        <div
          key={item.id}
          id={`s-${item.id}`}
          className={`s-panel ${index === 0 ? "active" : ""}`}
        >
          <div className="s-inner">
            {/* Left Content */}
            <div>
              <h3  className="title blue-text mb-3"
                
              >
                {item.heading}
              </h3>

              <ul className="check-list subtitle blue-text">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Card */}
            <div 
              style={{
                background: item.card.background,
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <div  className="subtitle  mb-3"
                style={{
                  
                  color:
                    item.id === "tch"
                      ? "rgba(255, 255, 255, 0.7)"
                      : "var(--gold)",
                 
                }}
              >
                {item.card.label}
              </div>

              {item.card.value && (
                <>
                  <div 
                    style={{
                      fontFamily: "var(--fh)",
                      fontSize: "28px",
                      fontWeight: "800",
                      color: "var(--white)",
                    }}
                  >
                    {item.card.value}
                  </div>

                  {item.card.description && (
                    <div  className="subtitle "
                      style={{
                       
                        color:
                          item.id === "tch"
                            ? "rgba(255, 255, 255, 0.75)"
                            : "rgba(255, 255, 255, 0.6)",
                        marginTop: item.id === "tch" ? "4px" : undefined,
                        marginBottom:
                          item.id === "sch" ? "1rem" : undefined,
                      }}
                    >
                      {item.card.description}
                    </div>
                  )}
                </>
              )}

              {/* School Stats */}
              {item.card.stats && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                    marginTop: "0.75rem",
                  }}
                >
                  {item.card.stats.map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "8px",
                        padding: "0.75rem",
                        textAlign: "center",
                      }}
                    >
                      <div
                       style={{
                      fontFamily: "var(--fh)",
                      fontSize: "28px",
                      fontWeight: "800",
                      color: "var(--white)",
                    }}
                      >
                        {stat.value}
                      </div>

                      <div  className="subtitle green-text mb-3"
                        
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Teacher Text */}
              {item.card.text && (
                <div
                  style={{
                    marginTop: item.id === "tch" ? "1rem" : undefined,
                    fontSize: "13px",
                    color:
                      item.id === "tch"
                        ? "rgba(255, 255, 255, 0.75)"
                        : "rgba(255, 255, 255, 0.85)",
                    lineHeight: "1.65",
                  }}
                >
                  {item.card.text}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}