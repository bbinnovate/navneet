import Link from 'next/link';

export default function Ifpsection46() {
  return (
    <section className="ifp-section">
        <p className="sec-tag sec-tag-gold">Hardware & Interactive Flat Panels</p>
        <h2 className="sec-title sec-title-wh">
          Classroom Technology. Pre-Loaded. Day-One Ready.
        </h2>
        <p className="sec-sub sec-sub-wh" style={{ marginBottom: '2.5rem' }}>
          TopClass and Navneet AI come pre-installed on industry-grade
          Interactive Flat Panels from our hardware partners — Brio, Cybernetix,
          and Hikvision. No laptop. No projector. No IT setup. Walk in, turn on,
          teach.
        </p>
        <div className="g3">
          <div className="ifp-partner">
            <div
              style={{ background: 'var(--light)', borderRadius: '14px', border: '2px dashed var(--border)', aspectRatio: '3/2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '32px' }}>📺</div>
              <div
                style={{ fontFamily: 'var(--fh)', fontSize: '13px', fontWeight: '700', color: 'var(--muted)' }}>
                Brio IFP Panel
              </div>
              <div style={{ fontSize: '11px', color: 'var(--border)' }}>
                [ 600×400px — hardware product photo ]
              </div>
              <div
                style={{ position: 'absolute', top: '8px', right: '10px', background: 'var(--light)', border: '1px solid var(--border)', borderRadius: '6px', padding: '2px 8px', fontSize: '10px', fontWeight: '700', fontFamily: 'var(--fh)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Placeholder
              </div>
            </div>
            <div className="ifp-type" style={{ marginTop: '1rem' }}>
              Interactive Flat Panel
            </div>
            <div className="ifp-name">Brio</div>
            <div className="ifp-desc">
              Industry-grade IFPs built for daily, high-use classroom
              environments. Options to pair it with our solutions and NavneetAI
              — zero setup on delivery.
            </div>
          </div>
          <div className="ifp-partner">
            <div
              style={{ background: 'var(--light)', borderRadius: '14px', border: '2px dashed var(--border)', aspectRatio: '3/2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '32px' }}>📺</div>
              <div
                style={{ fontFamily: 'var(--fh)', fontSize: '13px', fontWeight: '700', color: 'var(--muted)' }}>
                Cybernetix Smart Panel
              </div>
              <div style={{ fontSize: '11px', color: 'var(--border)' }}>
                [ 600×400px — hardware product photo ]
              </div>
              <div
                style={{ position: 'absolute', top: '8px', right: '10px', background: 'var(--light)', border: '1px solid var(--border)', borderRadius: '6px', padding: '2px 8px', fontSize: '10px', fontWeight: '700', fontFamily: 'var(--fh)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Placeholder
              </div>
            </div>
            <div className="ifp-type" style={{ marginTop: '1rem' }}>Smart Panel</div>
            <div className="ifp-name">Cybernetix</div>
            <div className="ifp-desc">
              High-resolution smart panels with multi-touch precision, optimised
              for 2D/3D animated content delivery and classroom interaction.
            </div>
          </div>
          <div className="ifp-partner">
            <div
              style={{ background: 'var(--light)', borderRadius: '14px', border: '2px dashed var(--border)', aspectRatio: '3/2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '32px' }}>🤖</div>
              <div
                style={{ fontFamily: 'var(--fh)', fontSize: '13px', fontWeight: '700', color: 'var(--muted)' }}>
                Hikvision AI Smart Board
              </div>
              <div style={{ fontSize: '11px', color: 'var(--border)' }}>
                [ 600×400px — hardware product photo ]
              </div>
              <div
                style={{ position: 'absolute', top: '8px', right: '10px', background: 'var(--light)', border: '1px solid var(--border)', borderRadius: '6px', padding: '2px 8px', fontSize: '10px', fontWeight: '700', fontFamily: 'var(--fh)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Placeholder
              </div>
            </div>
            <div className="ifp-type" style={{ marginTop: '1rem' }}>
              AI-Enabled Smart Board
            </div>
            <div className="ifp-name">Hikvision</div>
            <div className="ifp-desc">
              AI-enabled smart boards with AIoT capabilities — supporting
              Navneet AI's personalised learning and predictive analytics inside
              the classroom.
            </div>
          </div>
        </div>
        <div className="ifp-feat-grid">
          <div className="ifp-feat">
            <div className="ifp-feat-icon">📶</div>
            <div className="ifp-feat-title">Fully Offline</div>
            <div className="ifp-feat-desc">
              All content accessible without internet
            </div>
          </div>
          <div className="ifp-feat">
            <div className="ifp-feat-icon">✅</div>
            <div className="ifp-feat-title">Pre-Loaded</div>
            <div className="ifp-feat-desc">
              Navneet Products installed on delivery
            </div>
          </div>
          <div className="ifp-feat">
            <div className="ifp-feat-icon">👆</div>
            <div className="ifp-feat-title">Multi-Touch</div>
            <div className="ifp-feat-desc">
              Interactive lessons, not just presentations
            </div>
          </div>
          <div className="ifp-feat">
            <div className="ifp-feat-icon">🔄</div>
            <div className="ifp-feat-title">Auto Updates</div>
            <div className="ifp-feat-desc">
              Content and software updates pushed automatically
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/interactive-flat-panels" className="btn-gold" >
            Explore Hardware & IFP →
          </Link>
        </div>
      </section>
  );
}
