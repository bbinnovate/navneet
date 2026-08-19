const learningFeatures = [
  {
    icon: "🏫",
    name: "In-Classroom Impact",
    description:
      "Interactive teaching tools · Smart assessments · Visibility into lessons and progress",
  },
  {
    icon: "📊",
    name: "Progress at a Glance",
    description:
      "Real-time tracking of scores, attendance, and feedback",
  },
  {
    icon: "📱",
    name: "Active Study Tools",
    description:
      "Chapter-linked videos, quizzes, and interactive content",
  },
  {
    icon: "🏠",
    name: "Learning at Home",
    description:
      "Homework updates · Anytime access via portal or app",
  },
];

export default function Blue23() {
  return (
    <section className="sec sec-blue">
      <p className="tag sec-tag-gold">Learning Beyond the Book</p>

      <h2 className="heading white-text mb-3">
        Printed Books That Speak Digital.
      </h2>

      <p
        className="subtitle grey-text"
        style={{ marginBottom: "2rem" }}
      >
        TopSeries integrates directly with TopSchool LMS — physical books
        working with the digital platform for better retention.
      </p>

      <div className="g4">
        {learningFeatures.map((feature, index) => (
          <div className="fcard-dark" key={index}>
            <div
              style={{
                fontSize: "26px",
                marginBottom: "10px",
              }}
            >
              {feature.icon}
            </div>

            <div className="title white-text mb-3">
              {feature.name}
            </div>

            <div className="subtitle grey-text">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}