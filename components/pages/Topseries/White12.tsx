const learningKits = [
  {
    coverTitle: "Preschool Kit — Book Cover",
    coverSize: "[ Book cover / kit image — 600×400px ]",
    headerBg: "var(--blue)",
    grade: "Pre-LK · LKG · UKG",
    title: "Preschool Kit",
    description: "Complete early learning kit for ages 3–6. NCF-aligned.",
    items: [
      {
        icon: "📚",
        name: "Coursebooks",
        description: "Literacy, Numeracy & EVS printed books",
      },
      {
        icon: "🎨",
        name: "Activity Book",
        description: "DIY activities and experiential learning",
      },
      {
        icon: "📋",
        name: "Instructions Manual",
        description: "Teacher guide for kit usage",
      },
      {
        icon: "🃏",
        name: "Flash Cards",
        description:
          "Visual learning for phonics, numbers, concepts",
      },
    ],
  },
  {
    coverTitle: "Yearly Kit — Book Cover",
    coverSize: "[ Book cover / kit image — 600×400px ]",
    headerBg: "var(--green)",
    grade: "Grades Nursery to 8",
    title: "Yearly Kit",
    description:
      "Full academic year — all subjects in one complete set.",
    items: [
      {
        icon: "📦",
        name: "Full Year Set",
        description:
          "All subjects for the complete academic year",
      },
      {
        icon: "🔗",
        name: "LMS Integration",
        description:
          "Each chapter links to TopSchool digital content",
      },
      {
        icon: "🌟",
        name: "NEP & NCF Aligned",
        description:
          "Aligned with NEP 2020 and NCF 2023 guidelines",
      },
    ],
  },
  {
    coverTitle: "Semester Kit — Book Cover",
    coverSize: "[ Book cover / kit image — 600×400px ]",
    headerBg: "var(--blue2)",
    grade: "Grades 1 to 5",
    title: "Semester Kit",
    description:
      "Core subjects split across two semesters for structured learning.",
    items: [
      {
        icon: "📅",
        name: "Term 1 & Term 2",
        description:
          "Half the syllabus per semester — better focus",
      },
      {
        icon: "📚",
        name: "Core Subjects",
        description:
          "English, Maths, Science, Social Studies, EVS",
      },
      {
        icon: "↑",
        name: "Better Outcomes",
        description:
          "Concept mastery supporting NEP 2020 goals",
      },
    ],
  },
];

export default function White12() {
  return (
    <section className="sec sec-white">
      <p className="tag green-text">Learning Kits</p>

      <h2 className="heading blue-text mb-3">
        Three Kits. One Continuous Learning Journey.
      </h2>

      <div className="g3" style={{ marginTop: "2rem" }}>
        {learningKits.map((kit, index) => (
          <div className="kit-card" key={index}>
            {/* Book Cover */}
            <div
              style={{
                background: "var(--light)",
                borderRadius: "12px 12px 0 0",
                border: "2px dashed var(--border)",
                aspectRatio: "4/3",
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
                {kit.coverSize}
              </div>
            </div>

            {/* Kit Header */}
            <div
              className="kit-head"
              style={{ background: kit.headerBg }}
            >
               <div className="tag grey-text mb-3"
               
              >
                {kit.grade}
              </div>

             <h2  className="title grey-text mb-3">{kit.title}</h2>

              <div className="subtitle grey-text">{kit.description}</div>
            </div>

            {/* Kit Items */}
            <div className="kit-body">
              {kit.items.map((item, itemIndex) => (
                <div className="kit-item" key={itemIndex}>
                  <div className="kit-icon">{item.icon}</div>

                  <div>
                  <div className="title blue-text">
                      {item.name}
                    </div>

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