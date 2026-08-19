"use client";

export default function Light57() {
  const testimonials = [
    {
      quote:
        "Called the workshops highly informative, valuing how the community-building sessions made it easy to network with other educators.",
      name: "Kalpana Paigwar",
      role: "St. Thomas English School, Chhattisgarh",
    },
    {
      quote:
        "Described the group discussion as the highlight of the conclave — a session that built real communication and collaboration skills.",
      name: "Supreet Kaur",
      role: "Rose Buds Public School",
    },
    {
      quote:
        "Found the session on high-performing teams genuinely useful, and credited the conclave with essential insights for principals nurturing effective teams.",
      name: "Mr. Gangadhar Kallappa Jodagudri",
      role: "H.B. English Medium School",
    },
    {
      quote:
        "Praised the multi-skill foundation workshop for students as insightful, and expressed excitement for future editions.",
      name: "Neha Satyajit Desai",
      role: "Principal",
    },
    {
      quote:
        "As a new teacher, found the conclave community supportive and credited fellow educators with helping them grow quickly.",
      name: "Kalpana Paigwar",
      role: "St. Thomas English School, Chhattisgarh",
    },
    {
      quote:
        "Called NAVNEET TOPTECH's continuous support excellent, describing the conclave sessions as fun, engaging, and productive for educators.",
      name: "Mrs. Kavita Nitesh Nade",
      role: "Educator",
    },
  ];

  return (
    <section className="sec sec-light overflow-hidden">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <p className="tag green-text">What Educators Say</p>

          <h2
            className="heading blue-text"
            style={{ marginBottom: "0" }}
          >
            Feedback From the Community.
          </h2>
        </div>

        <a
          className="btn-gold"
          href="https://youtube.com/playlist?list=PLljLM3H6SnPlSMDt0AH-QFgqeJrgOkyRh&si=Tymd-UPAzVoyRe9E"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Hear From Attendees
        </a>
      </div>

      {/* SMOOTH INFINITE SLIDER */}
      <div className="w-full overflow-hidden">
        <div
          className="flex w-max"
          style={{
            animation: "testimonialSlide 35s linear infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          {/* FIRST SET */}
          <div className="flex shrink-0 gap-4">
            {testimonials.map((item, index) => (
              <div
                key={`second-${index}`}
                className="fcard w-[360px] min-w-[360px] shrink-0"
              >
                <div
  style={{
    fontSize: "24px",
    color: "var(--green)",
    marginBottom: "8px",
  }}
>
  "
</div>

<div className="subtitle blue-text mb-3">
  {item.quote}
</div>

<div
  className="subtitle green-text mb-3"

>
  {item.name}
</div>

<div className="subtitle blue-text">
  {item.role}
</div>
              </div>
            ))}
          </div>

          {/* DUPLICATE SET FOR SEAMLESS LOOP */}
          <div className="flex shrink-0 gap-4 ml-4">
            {testimonials.map((item, index) => (
              <div
                key={`second-${index}`}
                className="fcard w-[360px] min-w-[360px] shrink-0"
              >
                <div
  style={{
    fontSize: "24px",
    color: "var(--green)",
    marginBottom: "8px",
  }}
>
  "
</div>

<div className="subtitle blue-text mb-3">
  {item.quote}
</div>

<div
  className="subtitle green-text mb-3"

>
  {item.name}
</div>

<div className="subtitle blue-text">
  {item.role}
</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Only the slider animation */}
      <style jsx>{`
        @keyframes testimonialSlide {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 8px));
          }
        }
      `}</style>
    </section>
  );
}