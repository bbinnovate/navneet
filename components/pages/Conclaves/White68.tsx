export default function White68() {
  const faqs = [
    {
      question: "Who can attend a NAVNEET TOPTECH Conclave?",
      answer:
        "Conclaves are open to school owners, trustees, directors, principals, vice principals, academic coordinators, and teachers — anyone in a school leadership or teaching role.",
    },
    {
      question: "Which school boards are covered?",
      answer:
        "Educators from CBSE, ICSE, Maharashtra State Board, IB, IGCSE, and State Board/CBSE Pattern schools are all welcome — the conclave isn't limited to any single board.",
    },
    {
      question: "Does registering guarantee my seat?",
      answer:
        "Not automatically. Registering submits your interest — our events team will call to confirm your city, date, and participation details before your seat is finalised.",
    },
    {
      question: "How do I find out when the conclave is coming to my city?",
      answer:
        "Register your interest and our events team will confirm your nearest city, date, and other participation details directly.",
    },
    {
      question: "Can I see highlights from past conclaves before registering?",
      answer:
        "Yes — aftermovies from the 2023, 2024, and 2025 editions are on this page, along with a video playlist of attendees sharing their own experience.",
    },
  ];

  return (
    <section className="sec sec-white">
     <p
  className="tag green-text"
  style={{ textAlign: "center" }}
>
  FAQs
</p>

<h2
  className="heading blue-text"
  style={{ textAlign: "center" }}
>
  Common Questions
</h2>
      <div
        style={{
          maxWidth: "780px",
          width: "100%",
          margin: "1.5rem auto 0",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${index === 0 ? "open" : ""}`}
            data-faq-toggle="true"
          >
            <div className="faq-q blue-text">
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