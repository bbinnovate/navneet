import Link from "next/link";

const aiCards = [
  {
    icon: "🤖",
    status: "AI-Enabled",
    title: "AI-Driven Assessment with TopAssess",
    description:
      "AI generates curriculum-aligned tests, evaluates responses instantly, and identifies exactly where each student is struggling, giving teachers actionable insights in real time, not after the exam.",
  },
  {
    icon: "🧭",
    status: "Personalised",
    title: "Personalised Teaching with NavneetAI",
    description:
      "India's first custom AI education model adapts learning pathways for each student — and gives teachers AI-powered insights to personalise instruction in real time.",
  },
  {
    icon: "📊",
    status: "Predictive",
    title: "Predictive Performance Analytics",
    description:
      "TopSchool's analytics dashboard surfaces patterns in student data helping school leaders intervene before learning gaps become board exam problems.",
  },
  {
    icon: "🖥️",
    status: "AI Hardware",
    title: "AI-Enabled Classrooms via Hikvision IFPs",
    description:
      "Hikvision's AI-enabled smart boards bring Navneet AI's personalised learning pathways directly into the classroom — on the panel, in real time, without any additional device.",
  },
  {
    icon: "✨",
    status: "Custom Built",
    title: "Navneet AI — India's First Custom Education Model",
    description:
      "Not adapted from a general AI. Built from the ground up for Indian school education — curriculum-aligned, board-specific, and designed to support every learner's individual pace.",
  },
  {
    icon: "👩‍🏫",
    status: "AI for Teachers",
    title: "AI-Ready Teachers Drive Better Outcomes",
    description:
      "A school's AI readiness depends on its teachers. NAVNEET TOPTECH ensures every teacher is confident with AI tools — trained to use Navneet AI, TopAssess insights, and digital platforms effectively in the classroom.",
  },
];

export default function Aisection57() {
  return (
    <section className="ai-section">
      <p className="tag gold-text ">
        AI Readiness
      </p>

      <h2 className="sec-title sec-title-wh heading">
        Your School's AI Journey Starts Here.
      </h2>

      <p
        className="sec-sub sec-sub-wh subtitle"
        style={{ marginBottom: "2.5rem" }}
      >
        AI in education is not a future concept. NAVNEET TOPTECH is built to
        help schools adopt AI confidently — with tools that are practical,
        curriculum-aligned, and ready for India's classrooms today.
      </p>

      <div className="g3">
        {aiCards.map((card, index) => (
          <div className="ai-card" key={index}>
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

      <div className="ai-cta-bar">
        <div>
          <h2 className=" white-text heading ">Ready to make your school AI-ready?</h2>
          <p  className="ifp-desc grey-text subtitle">
            Our team will show you what AI looks like inside your school.
          </p>
        </div>

        <Link href="/contact" className="btn-gold">
          Book an AI Readiness Demo
        </Link>
      </div>
    </section>
  );
}