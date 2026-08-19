const platformFeatures = [
  {
    icon: "📝",
    name: "Create with",
    description:
      "Content Builder · Assessment Builder · Questions Builder · Timetable Builder · Curriculum Planer · Lesson Planer",
  },
  {
    icon: "📋",
    name: "Manage with",
    description:
      "Admission Management · Fee Management · Visitor Management · Template Management",
  },
  {
    icon: "📊",
    name: "Analyse through",
    description:
      "Holistic Dashboard · 360° Report Card · 20+ Insightful Reports · Student Gradebook · Workload Indicator",
  },
  {
    icon: "🖥️",
    name: "Teach",
    description:
      "Online · Offline · Personal Resource Library — for seamless teaching in any condition",
  },
  {
    icon: "📱",
    name: "Apps for",
    description:
      "Management · Teachers · Students — dedicated apps for every stakeholder in the school",
  },
  {
    icon: "💬",
    name: "Communicate",
    description:
      "Calendar Entries · School Notice Boards · Support & Feedback Forms · Omni-channel Communication Engine",
  },
];

export default function White24() {
  return (
    <section className="sec sec-white">
      <p className="tag green-text">Platform Features</p>

      <h2 className="heading blue-text">
        What TopSchool Does for Your School.
      </h2>

      <div className="platform-feat-grid">
        {platformFeatures.map((feature, index) => (
          <div className="pfeat" key={index}>
            <div className="pfeat-icon">{feature.icon}</div>

            <div className="title blue-text mb-3">
              {feature.name}
            </div>

            <div className="subtext dark-text">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}