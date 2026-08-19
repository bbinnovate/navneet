const aiCards = [
  {
    icon: "⚡",
    status: "Automated",
    title: "AI Test Generation",
    description:
      "Select subject, chapter, difficulty, and marks — AI generates a balanced, curriculum-aligned assessment instantly. 2,00,000+ questions. Zero manual sourcing.",
  },
  {
    icon: "📊",
    status: "Instant",
    title: "Real-Time Performance Analytics",
    description:
      "The moment a student submits, AI evaluates responses and generates a performance report — by topic, chapter, and difficulty. Zero manual grading.",
  },
  {
    icon: "🔍",
    status: "Predictive",
    title: "Learning Gap Detection",
    description:
      "AI identifies exactly which concepts a student has not mastered and flags those students to the teacher — before the gap becomes a board exam problem.",
  },
];

export default function Aisection24() {
  return (
    <section className="ai-section">
      <p className="tag sec-tag-gold">AI Capabilities</p>

      <h2 className="sec-title sec-title-wh heading">
        What AI Does Inside TopAssess.
      </h2>

      <p className="sec-sub sec-sub-wh subtitle">
        TopAssess doesn't just digitise paper tests. The AI component changes
        what teachers can know and act on — in real time.
      </p>

      <div
        className="g3"
        style={{ marginTop: "2.5rem" }}
      >
        {aiCards.map((card) => (
          <div className="ai-card" key={card.title}>
            <div className="ai-card-icon">
              {card.icon}
            </div>

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