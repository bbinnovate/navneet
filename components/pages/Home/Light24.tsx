const solutions = [
  {
    brand: "NAVNEET",
    name: "Navneet TopSchool",
    tag: "LMS · School ERP · Grades Nursery–10",
    outcome: "Operate your school on one integrated platform",
    desc: "A smart Learning Management System that unifies teaching, learning, assessments, and school management. Bundled with TopSeries coursebooks and AI-enabled assessments for a seamless print-to-digital experience.",
    href: "/topschool-learning-management-system",
    linkText: "Explore TopSchool →",
    stripe: "var(--green),var(--teal)",
  },
  {
    brand: "NAVNEET",
    name: "Navneet TopClass",
    tag: "Digital Classroom · Offline Capable · CBSE & MSB",
    outcome: "Make classrooms engaging, even without the internet",
    desc: "An offline digital classroom solution with 2D/3D animated content, 41,000+ questions in the question bank, 60+ customisable templates, and one click question paper generator.",
    href: "/topclass-digital-classroom",
    linkText: "Explore TopClass →",
    stripe: "var(--green),var(--teal)",
  },
  {
    brand: "NAVNEET",
    name: "Navneet TopAssess",
    tag: "AI-Enabled Assessments · Online & Offline · Grades 1–10",
    outcome: "Identify learning gaps before the exam does",
    desc: "AI-enabled test creation with 2,00,000+ questions, NCERT-aligned content, customisable test blueprints, and real-time analytics. Helps teachers personalise support and improve student outcomes.",
    href: "/topassess",
    linkText: "Explore TopAssess →",
    stripe: "var(--green),var(--green2)",
  },
  {
    brand: "NAVNEET",
    name: "Navneet TopSeries",
    tag: "Phygital Coursebooks · NEP & NCF Aligned · Nursery–Grade 8",
    outcome: "Print-to-digital phygital learning",
    desc: "Curriculum-aligned coursebooks from Preschool kits to Grade 1–8 Yearly and Semester Kits for grades 1 to 5, integrated with Navneet TopSchool for a seamless phygital learning experience.",
    href: "/topseries",
    linkText: "Explore TopSeries →",
    stripe: "var(--blue),var(--teal)",
  },
  {
    brand: "NITYA",
    name: "Teacher Training",
    tag: "CBSE CPD Compliant · 100+ Modules · 2–3 Hours",
    outcome: "Skilled teachers deliver better outcomes",
    desc: "Need-based teacher training with 100+ expert-curated modules in just 2–3 hours of flexible learning. Helps educators build practical skills aligned with today's educational needs.",
    href: "http://nityatraining.com",
    linkText: "Visit Nitya ↗",
    external: true,
  },
  {
    brand: "NAVNEET",
    name: "Navneet AI",
    tag: "India's First Custom AI Education Model",
    outcome: "Personalised learning at scale",
    desc: "Built specifically for school education, not adapted from a general-purpose AI. Personalised learning pathways based on each student's performance, pace, and curriculum alignment.",
    href: "http://navneetedu.ai",
    linkText: "Explore Navneet AI ↗",
    external: true,
    stripe: "var(--blue),var(--teal)",
  },
];

export default function Light24() {
  return (
    <section className="sec sec-light">
      <p className=" green-text tag">Our Solutions</p>

      <h2 className="sec-title blue-text heading">
        One Ecosystem. Complete School Transformation.
      </h2>

      <p className="sec-sub subtitle dark-text">
        We bring academic expertise, technology, assessments, content, teacher
        enablement, and school ERP together. So schools can transform
        meaningfully and sustainably. Each solution is designed for Grades
        Nursery to Grade 10.
      </p>

      <div className="g3" style={{ marginTop: "2rem" }}>
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="pcard"
            data-nav-href={solution.href}
          >
            {solution.stripe && (
              <div
                className="pcard-top-stripe"
                style={{
                  background: solution.stripe,
                }}
              />
            )}

            <div
              className="green-text tag"
              style={{
                textTransform: "uppercase",
                marginBottom: "3px",
               
              }}
            >
              {solution.brand}
            </div>

            <div className="pcard-name blue-text title" >
              {solution.name}
            </div>

            <div className="pcard-tag subtitle dark-text">
              {solution.tag}
            </div>

            <div className="pcard-outcome green-text tag">
              {solution.outcome}
            </div>

            <div className="pcard-desc subtitle dark-text">
              {solution.desc}
            </div>

            <a
              className="pcard-link subtitle"
              href={solution.href}
              target={solution.external ? "_blank" : undefined}
              rel={
                solution.external
                  ? "noopener noreferrer"
                  : undefined
              }
              style={{ textDecoration: "none" }}
            >
              {solution.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}