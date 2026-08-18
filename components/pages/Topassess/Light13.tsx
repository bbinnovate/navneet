
export default function Light13() {
  return (
    <section className="sec sec-light">
        <div className="g2" style={{ gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="ai-pulse" style={{ marginBottom: '0.75rem' }}>
              <span className="ai-dot"></span>AI-Enabled Assessment
            </div>
            <h2 className="sec-title">Tests That Match How You Teach.</h2>
            <p
              style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.78', marginBottom: '1.25rem' }}>
              TopAssess is an AI-enabled school assessment platform that helps
              teachers create, administer, and evaluate tests efficiently. It
              supports formative and summative assessments, ensuring
              high-quality, curriculum-aligned question papers and insightful
              performance reports for students and teachers.
            </p>
            <p
              style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.72', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              Available in online and offline modes.
            </p>
            <ul className="check-list">
              <li>Identifies learning gaps early — before the exam</li>
              <li>Personalises support based on individual student data</li>
              <li>Saves teachers hours every week on paper-setting</li>
              <li>Improves student outcomes through data-driven teaching</li>
            </ul>
          </div>
          <div
            style={{ background: 'var(--blue)', borderRadius: '14px', padding: '1.75rem' }}>
            <div
              style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold)', marginBottom: '1rem', fontFamily: 'var(--fh)' }}>
              Question Formats Supported
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                📝 MCQ
              </div>
              <div
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                ✍️ Subjective
              </div>
              <div
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                🧩 Competency-Based
              </div>
              <div
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                🔤 Fill in the Blanks
              </div>
              <div
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                🔗 Match the Pair
              </div>
              <div
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)' }}>
                🔀 Mixed Format
              </div>
            </div>
            <div
              style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div
                style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '4px', fontFamily: 'var(--fh)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Bundled with
              </div>
              <div style={{ fontSize: '13px', color: 'var(--white)' }}>
                📚 TopSeries Coursebooks · 🖥️ AI-Enabled IFP Panels (Brio,
                Cybernetix, Hikvision)
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
