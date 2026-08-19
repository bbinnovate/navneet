const hardwarePartners = [
  {
    photoLabel: "Brio — Panel Photo",
    type: "Interactive Flat Panel",
    name: "Brio",
    description:
      "Industry-grade IFPs for high-use classroom environments. Pre-loaded with TopClass and Navneet AI — zero setup, zero configuration required.",
  },
  {
    photoLabel: "Cybernetix — Panel Photo",
    type: "Smart Panel",
    name: "Cybernetix",
    description:
      "High-resolution smart panels with multi-touch precision, optimised for 2D/3D animated content and classroom interaction at full display quality.",
  },
  {
    photoLabel: "Hikvision — Panel Photo",
    type: "AI-Enabled Smart Board",
    name: "Hikvision",
    description:
      "AI-enabled smart boards with AIoT capabilities — bringing Navneet AI's personalised learning and predictive analytics directly into the classroom.",
  },
];

export default function Ifpsection13() {
  return (
    <section className="ifp-section" style={{ paddingTop: "72px" }}>
      <p className="tag sec-tag-gold">Hardware Partners</p>

      <h2 className="heading sec-title-wh">
        Three Partners. One Standard: Built for Schools.
      </h2>

      <div
        className="g3"
        style={{ marginTop: "2.5rem" }}
      >
        {hardwarePartners.map((partner) => (
          <div className="ifp-partner" key={partner.name}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                border: "1.5px dashed rgba(255, 255, 255, 0.2)",
                aspectRatio: "3/2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginBottom: "1rem",
                padding: "0.75rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "22px" }}>🖥️</div>

              <div
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--fh)",
                  fontWeight: "700",
                  color: "rgba(255, 255, 255, 0.4)",
                }}
              >
                {partner.photoLabel}
              </div>

              <div
                style={{
                  fontSize: "9px",
                  color: "rgba(255, 255, 255, 0.25)",
                }}
              >
                [ 600×400px — hardware product photo ]
              </div>
            </div>

            <div className="ifp-type tag gold-text">
              {partner.type}
            </div>

            <div className="title white-text mb-3">
              {partner.name}
            </div>

            <div className="subtitle grey-text ">
              {partner.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}