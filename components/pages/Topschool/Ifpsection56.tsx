import Link from 'next/link';

export default function Ifpsection56() {
  return (
    <section className="ifp-section">
        <p className="sec-tag sec-tag-gold">Bundled with AI-Enabled IFP Panels</p>
        <h2 className="sec-title sec-title-wh">
          TopSchool + AI-Enabled Interactive Flat Panels.
        </h2>
        <p className="sec-sub sec-sub-wh" style={{ marginBottom: '2rem' }}>
          TopSchool integrates seamlessly with Brio, Cybernetix, and Hikvision
          Interactive Flat Panels — bringing the full LMS experience to the
          classroom display. Pre-loaded, offline-capable, AI-enabled.
        </p>
        <div className="g3">
          <div className="ifp-partner">
            <div className="ifp-icon">🖥️</div>
            <div className="ifp-type">IFP Partner</div>
            <div className="ifp-name">Brio</div>
            <div className="ifp-desc">
              Industry-grade IFPs pre-loaded with TopSchool. Ready on delivery —
              no setup required.
            </div>
          </div>
          <div className="ifp-partner">
            <div className="ifp-icon">📺</div>
            <div className="ifp-type">IFP Partner</div>
            <div className="ifp-name">Cybernetix</div>
            <div className="ifp-desc">
              High-resolution smart panels optimised for TopSchool content
              delivery and classroom interaction.
            </div>
          </div>
          <div className="ifp-partner">
            <div className="ifp-icon">🤖</div>
            <div className="ifp-type">AI-Enabled Partner</div>
            <div className="ifp-name">Hikvision</div>
            <div className="ifp-desc">
              AI-enabled smart boards bringing Navneet AI's personalised
              learning directly into the classroom.
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/interactive-flat-panels" className="btn-gold" >
            Explore All Hardware & IFP Options →
          </Link>
        </div>
      </section>
  );
}
