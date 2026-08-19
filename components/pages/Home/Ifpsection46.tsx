import Link from "next/link";

const ifpPartners = [
  {
    icon: "📺",
    product: "Brio IFP Panel",
    type: "Interactive Flat Panel",
    name: "Brio",
    description:
      "Industry-grade IFPs built for daily, high-use classroom environments. Options to pair it with our solutions and NavneetAI — zero setup on delivery.",
  },
  {
    icon: "📺",
    product: "Cybernetix Smart Panel",
    type: "Smart Panel",
    name: "Cybernetix",
    description:
      "High-resolution smart panels with multi-touch precision, optimised for 2D/3D animated content delivery and classroom interaction.",
  },
  {
    icon: "🤖",
    product: "Hikvision AI Smart Board",
    type: "AI-Enabled Smart Board",
    name: "Hikvision",
    description:
      "AI-enabled smart boards with AIoT capabilities — supporting Navneet AI's personalised learning and predictive analytics inside the classroom.",
  },
];

const ifpFeatures = [
  {
    icon: "📶",
    title: "Fully Offline",
    description: "All content accessible without internet",
  },
  {
    icon: "✅",
    title: "Pre-Loaded",
    description: "Navneet Products installed on delivery",
  },
  {
    icon: "👆",
    title: "Multi-Touch",
    description: "Interactive lessons, not just presentations",
  },
  {
    icon: "🔄",
    title: "Auto Updates",
    description: "Content and software updates pushed automatically",
  },
];

export default function Ifpsection46() {
  return (
    <section className="ifp-section">
      <p className="tag gold-text ">
        Hardware & Interactive Flat Panels
      </p>

      <h2 className="sec-title sec-title-wh heading">
        Classroom Technology. Pre-Loaded. Day-One Ready.
      </h2>

      <p
        className="sec-sub sec-sub-wh subtitle"
        style={{ marginBottom: "2.5rem" }}
      >
        TopClass and Navneet AI come pre-installed on industry-grade
        Interactive Flat Panels from our hardware partners — Brio, Cybernetix,
        and Hikvision. No laptop. No projector. No IT setup. Walk in, turn on,
        teach.
      </p>

      <div className="g3">
        {ifpPartners.map((partner, index) => (
          <div className="ifp-partner" key={index}>
            <div
              style={{
                background: "var(--light)",
                borderRadius: "14px",
                border: "2px dashed var(--border)",
                aspectRatio: "3/2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                position: "relative",
                padding: "1.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "32px" }}>
                {partner.icon}
              </div>

              <div 
                style={{
                  fontFamily: "var(--fh)",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "var(--muted)",
                }}
              >
                {partner.product}
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "var(--border)",
                }}
              >
                [ 600×400px — hardware product photo ]
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "10px",
                  background: "var(--light)",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  fontSize: "10px",
                  fontWeight: "700",
                  fontFamily: "var(--fh)",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                }}
              >
                Placeholder
              </div>
            </div>

            <div
              className="ifp-type gold-text tag"
              style={{ marginTop: "1rem" }}
            >
              {partner.type}
            </div>

            <div className="ifp-name white-text title ">
              {partner.name}
            </div>

            <div className="ifp-desc grey-text subtitle">
              {partner.description}
            </div>
          </div>
        ))}
      </div>

      <div className="ifp-feat-grid">
        {ifpFeatures.map((feature, index) => (
          <div className="ifp-feat" key={index}>
            <div className="ifp-feat-icon">
              {feature.icon}
            </div>

            <div className="ifp-name white-text title ">
              {feature.title}
            </div>

            <div className="ifp-desc grey-text subtitle">
              {feature.description}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        <Link
          href="/interactive-flat-panels"
          className="btn-gold"
        >
          Explore Hardware & IFP →
        </Link>
      </div>
    </section>
  );
}