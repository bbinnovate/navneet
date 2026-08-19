const faqs = [
  {
    question: "What is NAVNEET TOPTECH?",
    answer:
      "NAVNEET TOPTECH is the EdTech arm of Navneet Education Limited — one of India's most trusted educational brands for over 65+ years. Founded in 2008, we partner with 4,000+ schools across CBSE, CBSE Pattern, and Maharashtra State Board to improve teaching, learning, and school performance through an integrated ecosystem of digital solutions.",
  },
  {
    question: "Which boards do your products support?",
    answer:
      "Our products are built for CBSE (NCERT and RISE series), CBSE Pattern schools, and Maharashtra State Board — with bilingual content in English and Marathi for MSB schools, and full coverage from Grades Nursery to 10.",
  },
  {
    question:
      "What Interactive Flat Panel partners does NAVNEET TOPTECH work with?",
    answer:
      "NAVNEET TOPTECH partners with Brio, Cybernetix, and Hikvision for industry-grade IFPs. All panels come pre-loaded with TopClass and Navneet AI — ready to use on delivery, no IT setup required.",
  },
  {
    question: "Do your products work without internet?",
    answer:
      "Yes. TopClass and TopAssess are fully offline-capable — all content, assessments, and tools are accessible without internet connectivity. Designed for India's real classroom infrastructure.",
  },
  {
    question: "Is NAVNEET TOPTECH aligned with NEP 2020?",
    answer:
      "Yes. All NAVNEET TOPTECH solutions are aligned with NEP 2020 and NCF 2023 — including outcome-based learning, competency-based assessments, formative and summative evaluation, and CBSE CPD requirements for teacher professional development.",
  },
];

export default function Light911() {
  return (
    <section className="sec sec-light">
      <p className="tag green-text" style={{ textAlign: "center" }}>
        FAQs
      </p>

      <h2
        className="sec-title blue-text heading"
        style={{ textAlign: "center" }}
      >
        Common Questions
      </h2>

      <div
        style={{
          width: "100%",
          maxWidth: "780px",
          margin: "1.5rem auto 0",
          gridColumn: "1 / -1",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${index === 0 ? "open" : ""}`}
            data-faq-toggle="true"
            key={index}
          >
            <div className="faq-q">
              {faq.question}
              <span className="faq-chev">+</span>
            </div>

            <div className="faq-a">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
