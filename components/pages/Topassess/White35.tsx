const platformFeatures = [
  {
    icon: "🎯",
    name: "Formative & Summative",
    description:
      "Track learning throughout the year — regular formative assessments alongside summative evaluations at every unit and term end.",
  },
  {
    icon: "📋",
    name: "Customisable Test Blueprints",
    description:
      "Set the blueprint — subject, chapters, difficulty distribution, and marking — and let AI build the paper. 60+ templates available.",
  },
  {
    icon: "📱",
    name: "Any Device. Online or Offline.",
    description:
      "Students take tests on tablets, phones, or computers. Online and offline modes ensure no assessment is delayed because of internet issues.",
  },
  {
    icon: "🔒",
    name: "Secure Exam Mode",
    description:
      "Randomised question order, time limits, and anti-cheat features built into every assessment — so results reflect actual learning.",
  },
  {
    icon: "📈",
    name: "20+ Insightful Reports",
    description:
      "Detailed breakdowns by student, topic, chapter, and class — with trend data over time so teachers can see if interventions are working.",
  },
  {
    icon: "🏫",
    name: "Integrated with TopSchool LMS",
    description:
      "TopAssess results flow automatically into the school-wide performance dashboard for administrators and principals.",
  },
];

export default function White35() {
  return (
    <section className="sec sec-white">
      <p className="hero-eyebrow tag">Platform Features</p>

      <h2 className="heading blue-text">
        Everything in One Assessment Platform.
      </h2>

      <div className="platform-feat-grid">
        {platformFeatures.map((feature) => (
          <div className="pfeat" key={feature.name}>
               <div className="ai-card-icon">
              {feature.icon}
            </div>

            <div className="title blue-text mb-3">
              {feature.name}
            </div>

            <div className="subtitle dark-text">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}