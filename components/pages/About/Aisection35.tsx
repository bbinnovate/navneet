const aiCards = [
  {
    icon: "✨",
    status: "AI Built for India",
    title: "Navneet AI — India's First Custom Education Model",
    description:
      "Not adapted from a general AI — built from the ground up for school education. Personalised learning pathways, curriculum-aligned, and board-specific.",
  },
  {
    icon: "🧠",
    status: "AI Assessment",
    title: "Personalised Teaching with TopAssess",
    description:
      "AI-generated tests, instant evaluation, and real-time student performance insights — so teachers can personalise instruction before learning gaps widen.",
  },
  {
    icon: "📊",
    status: "Predictive",
    title: "Predictive Performance Analytics",
    description:
      "TopSchool's analytics dashboard surfaces patterns in student data helping school leaders intervene before learning gaps become board exam problems.",
  },
];

export default function Aisection35() {
  return (
    <section className="ai-section">
      <p className="tag sec-tag-gold">AI Readiness</p>

      <h2 className="sec-title sec-title-wh heading">
        Technology Built for Indian Classrooms.
      </h2>

      <p className="sec-sub sec-sub-wh subtitle">
        NAVNEET TOPTECH doesn't adopt global AI tools and adapt them for
        India. We build for India first — offline-capable, curriculum-aligned,
        and designed for the realities of the Indian classroom.
      </p>

      <div className="g3" style={{ marginTop: "2.5rem" }}>
        {aiCards.map((card, index) => (
          <div className="ai-card" key={index}>
            <div className="ai-card-icon">{card.icon}</div>

             <div className="ai-pulse tag gold-text">
              <span className="ai-dot"></span>
              {card.status}
            </div>

             <div className="ifp-name white-text title ">
              {card.title}
            </div>

            <div className="ifp-desc grey-text subtitle">
              {card.description}
            </div>
             </div>
        ))}
      </div>
    </section>
  );
}