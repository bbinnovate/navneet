const awards = [
  {
    title: "Innovative Tech Solutions for Schools",
    organization: "8th BW Top Education Awards",
  },
  {
    title: "Excellence in AI-Driven Educational Solution",
    organization: "ET Education Excellence Awards",
  },
  {
    title: "Emerging Technology Solutions",
    organization: "Indian Education Awards 2025",
  },
  {
    title: "Leading LMS Provider",
    organization: "26th Elets World Education Summit",
  },
];

const pressCoverage = [
  {
    publication: "[ Publication Name ]",
    headline: "[ Article Headline — Replace with actual coverage ]",
    date: "[ Date ]",
  },
  {
    publication: "[ Publication Name ]",
    headline: "[ Article Headline — Replace with actual coverage ]",
    date: "[ Date ]",
  },
  {
    publication: "[ Publication Name ]",
    headline: "[ Article Headline — Replace with actual coverage ]",
    date: "[ Date ]",
  },
];

export default function White12() {
  return (
    <section className="sec sec-white">
      <p className="tag green-text">Awards & Recognition</p>

      <h2 className="sec-title heading blue-text">
        Recognition That Validates the Work.
      </h2>

      <div
        className="g4"
        style={{ marginTop: "1.5rem", marginBottom: "3rem" }}
      >
        {awards.map((award, index) => (
          <div
            key={index}
            style={{
              background: "var(--light)",
              borderRadius: "12px",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "var(--white)",
                borderRadius: "10px",
                border: "1.5px dashed var(--border)",
                aspectRatio: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                fontSize: "11px",
                fontWeight: "700",
                fontFamily: "var(--fh)",
                color: "var(--muted)",
              }}
            >
              Award Logo
            </div>

            <div className="title blue-text"
              style={{
                
                marginBottom: "4px",
           
              }}
            >
              {award.title}
            </div>

            <div className=" subtitle dark-text "
              
            >
              {award.organization}
            </div>
          </div>
        ))}
      </div>

      <p className="tag green-text">Press Coverage</p>

      <h2 className="sec-title heading blue-text">
        What the Media Says.
      </h2>

      <div className="g3" style={{ marginTop: "1.5rem" }}>
        {pressCoverage.map((press, index) => (
          <div
            key={index}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                background: "var(--light)",
                borderBottom: "2px dashed var(--border)",
                aspectRatio: "16/9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "28px" }}>📰</div>

              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  fontFamily: "var(--fh)",
                  color: "var(--muted)",
                }}
              >
                News Article Image
              </div>

              <div className="tag green-text"
                
              >
                [ Placeholder — 1280×720px ]
              </div>
            </div>

            <div style={{ padding: "1.25rem" }}>
              <div className="tag green-text"
                style={{
                  display: "inline-block",
                  background: "rgba(27, 138, 115, 0.1)",
                  
                  textTransform: "uppercase",
                  padding: "3px 9px",
                  borderRadius: "10px",
                  marginBottom: "8px",
                 
                }}
              >
                {press.publication}
              </div>

              <div className=" title blue-text"
                style={{
                 
                  marginBottom: "6px",
                }}
              >
                {press.headline}
              </div>

              <div
                className=" subtitle dark-text "
              >
                {press.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}