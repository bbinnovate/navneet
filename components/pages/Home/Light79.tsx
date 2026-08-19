const awards = [
  {
    name: "Innovative Tech Solutions for Schools",
    organization: "8th BW Top Education Awards",
  },
  {
    name: "Excellence in AI-Driven Educational Solution",
    organization: "ET Education Excellence Awards",
  },
  {
    name: "Emerging Technology Solutions",
    organization: "Indian Education Awards 2025",
  },
  {
    name: "Leading LMS Provider",
    organization: "26th Elets World Education Summit",
  },
];

export default function Light79() {
  return (
    <section className="sec sec-light">
      <p className="tag green-text ">
        Recognition
      </p>

      <h2 className="sec-title blue-text heading">
        The Work Speaks. The Awards Confirm It.
      </h2>

      <div
        className="g4"
        style={{ marginTop: "1.5rem" }}
      >
        {awards.map((award, index) => (
          <div className="award-card" key={index}>
            <div
              style={{
                aspectRatio: "1",
                background: "var(--light)",
                borderRadius: "10px",
                border: "1.5px dashed var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                color: "var(--muted)",
                fontFamily: "var(--fh)",
                fontWeight: "700",
                textAlign: "center",
                padding: "8px",
                marginBottom: "10px",
              }}
            >
              Award
              <br />
              Image
            </div>

            <div className="blue-text title"
              style={{
                
                marginBottom: "8px",
              }}>
              {award.name}
            </div>

            <div className="pcard-desc subtitle dark-text"
              style={{
               
                marginBottom: "1rem",
              }}>
              {award.organization}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}