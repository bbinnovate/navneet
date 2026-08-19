import Link from "next/link";

const ifpPartners = [
  {
    icon: "🖥️",
    type: "IFP Partner",
    name: "Brio",
    description:
      "Industry-grade IFPs pre-loaded with TopSchool. Ready on delivery — no setup required.",
  },
  {
    icon: "📺",
    type: "IFP Partner",
    name: "Cybernetix",
    description:
      "High-resolution smart panels optimised for TopSchool content delivery and classroom interaction.",
  },
  {
    icon: "🤖",
    type: "AI-Enabled Partner",
    name: "Hikvision",
    description:
      "AI-enabled smart boards bringing Navneet AI's personalised learning directly into the classroom.",
  },
];

export default function Ifpsection57() {
  return (
    <section className="ifp-section">
      <p className="tag gold-text">
        Bundled with AI-Enabled IFP Panels
      </p>

      <h2 className="heading white-text mb-3">
        TopSchool + AI-Enabled Interactive Flat Panels.
      </h2>

      <p
        className="sec-sub sec-sub-wh subtitle grey-text"
        style={{ marginBottom: "2rem" }}
      >
        TopSchool integrates seamlessly with Brio, Cybernetix, and Hikvision
        Interactive Flat Panels — bringing the full LMS experience to the
        classroom display. Pre-loaded, offline-capable, AI-enabled.
      </p>

      <div className="g3">
        {ifpPartners.map((partner, index) => (
          <div className="ifp-partner" key={index}>
            <div className="ifp-icon">{partner.icon}</div>

            <div className="tag gold-text">
              {partner.type}
            </div>

            <div className="heading white-text mb-3">
              {partner.name}
            </div>

            <div className="sec-sub sec-sub-wh subtitle grey-text">
              {partner.description}
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
          Explore All Hardware & IFP Options →
        </Link>
      </div>
    </section>
  );
}