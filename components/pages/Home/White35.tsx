const boards = [
  {
    icon: "📘",
    title: "CBSE Board",
    description:
      "Nationwide curriculum coverage from Nursery to Grade 10. CBSE-aligned digital content, question bank, and lesson plans — including NCERT and RISE series for TopClass.",
    stat: "3,500+",
    statLabel: "Schools",
    statColor: "var(--blue)",
  },
  {
    icon: "📗",
    title: "CBSE Pattern Schools",
    description:
      "Full content and assessment coverage for CBSE Pattern schools — same curriculum rigour, adapted for pattern school structures. Covers RISE series Grades 1–8.",
    stat: "RISE",
    statLabel: "Series Grades 1–8",
    statColor: "var(--blue)",
  },
  {
    icon: "📙",
    title: "Maharashtra State Board",
    description:
      "Bilingual content in English and Marathi, Grades 1–10. Updated automatically with every MSB syllabus revision — including 2025 curriculum changes.",
    stat: "500+",
    statLabel: "MSB Schools",
    statColor: "var(--green)",
  },
];

export default function White35() {
  return (
    <section className="sec sec-white">
      <p className=" green-text tag">
        Boards We Power
      </p>

      <h2 className="sec-title blue-text heading">
        Built for Indian Boards. Not Adapted for Them.
      </h2>

      <p
        className="sec-sub subtitle dark-text"
        style={{ marginBottom: "2rem" }}
      >
        Content, assessments, and lesson plans mapped to CBSE, CBSE Pattern,
        and Maharashtra State Board — updated when syllabi change.
      </p>

      <div className="g3">
        {boards.map((board, index) => (
          <div
            key={index}
            style={{
              background: "var(--light)",
              borderRadius: "14px",
              padding: "1rem",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                marginBottom: "10px",
              }}
            >
              {board.icon}
            </div>

            <div className="blue-text title"
              style={{
                
                marginBottom: "8px",
              }}
            >
              {board.title}
            </div>

            <p className="pcard-desc subtitle dark-text"
              style={{
               
                marginBottom: "1rem",
              }}
            >
              {board.description}
            </p>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
              }}
            >
              <div>
                <div className="blue-text title"
                  
                >
                  {board.stat}
                </div>

                <div className="pcard-desc subtitle dark-text"
                >
                  {board.statLabel}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}