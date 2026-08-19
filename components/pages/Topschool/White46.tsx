const kits = [
  {
    coverTitle: "Preschool Kit — Book Cover",
    headerLabel: "Preschool Kit",
    headerTitle: "Pre-LK & LKG · UKG",
    headerDescription:
      "Complete early learning kit with coursebooks, DIY activity book, flash cards, and instructions manual. NCF-aligned for ages 3–6.",
    headerBg: "var(--blue)",
    items: [
      {
        icon: "📚",
        name: "Coursebooks",
        description:
          "Literacy, Numeracy & EVS — printed books and practice books",
      },
      {
        icon: "🎨",
        name: "Activity Book",
        description:
          "DIY activities and experiential learning exercises",
      },
      {
        icon: "🃏",
        name: "Flash Cards",
        description:
          "Visual learning cards for phonics, numbers, and concepts",
      },
    ],
  },
  {
    coverTitle: "Yearly Kit — Book Cover",
    headerLabel: "Yearly Kit",
    headerTitle: "Grades Nursery to 8",
    headerDescription:
      "Full academic year — all subjects in one complete kit. Curriculum-aligned, NEP & NCF compliant.",
    headerBg: "var(--green)",
    items: [
      {
        icon: "📦",
        name: "Full Year Set",
        description:
          "All subjects for the complete academic year — Nursery to Grade 8",
      },
      {
        icon: "🔗",
        name: "LMS Integration",
        description:
          "Each book chapter links directly to digital content on TopSchool LMS",
      },
      {
        icon: "🌟",
        name: "NEP & NCF Aligned",
        description:
          "Aligned with NEP 2020 and NCF 2023 curriculum guidelines",
      },
    ],
  },
  {
    coverTitle: "Semester Kit — Book Cover",
    headerLabel: "Semester Kit",
    headerTitle: "Grades 1 to 5 · Term Wise",
    headerDescription:
      "Core subjects split across two semesters — English, Maths, Science, Social Studies, EVS. Lighter books, structured learning.",
    headerBg: "var(--blue2)",
    items: [
      {
        icon: "📅",
        name: "Term 1 & Term 2",
        description:
          "Half the syllabus per semester — better focus, less stress, lighter bags",
      },
      {
        icon: "🎯",
        name: "Structured Learning",
        description:
          "Clear semester plan aligned with the academic calendar",
      },
      {
        icon: "↑",
        name: "Better Outcomes",
        description:
          "Step-by-step mastery supports NEP 2020 continuous evaluation goals",
      },
    ],
  },
];

export default function White46() {
  return (
    <section className="sec sec-white">
      <p className="tag green-text">
        Bundled with TopSeries Coursebooks
      </p>

      <h2 className="title blue-text mb-3">
        Phygital Learning — Where Books Meet Digital.
      </h2>

      <p
        className="subtitle dark-text max-w-xl"
        style={{ marginBottom: "2rem" }}
      >
        TopSchool is bundled with TopSeries curriculum-aligned coursebooks,
        designed for CBSE and CBSE Pattern schools as per NEP and NCF
        guidelines. Physical books that connect to digital content on the LMS.
      </p>

      <div className="g3">
        {kits.map((kit, index) => (
          <div className="kit-card" key={index}>
            {/* Book Cover */}
            <div
              style={{
                background: "var(--light)",
                borderRadius: "0",
                borderBottom: "2px dashed var(--border)",
                aspectRatio: "3/2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "28px" }}>📚</div>

              <div
                style={{
                  fontFamily: "var(--fh)",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "var(--muted)",
                }}
              >
                {kit.coverTitle}
              </div>

              <div
                style={{
                  fontSize: "10px",
                  color: "var(--border)",
                }}
              >
                [ Book cover / kit image — 600×400px ]
              </div>
            </div>

            {/* Kit Header */}
            <div
              className="kit-head"
              style={{ background: kit.headerBg }}
            >
              <div className="tag grey-text"
                style={{
                  
                  marginBottom: "5px",
                }}
              >
                {kit.headerLabel}
              </div>

              <h2  className="title grey-text mb-3">{kit.headerTitle}</h2>

                  <div className="subtitle grey-text">{kit.headerDescription}</div>
            </div>

            {/* Kit Items */}
            <div className="kit-body">
              {kit.items.map((item, itemIndex) => (
                <div className="kit-item" key={itemIndex}>
                  <div className="kit-icon">{item.icon}</div>

                  <div>
                    <div className="title blue-text">{item.name}</div>

                    <div className="subtitle dark-text">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}