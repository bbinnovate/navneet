
export default function Light13() {
  return (
    <section className="sec sec-light">
        <div className="g2" style={{ gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="hero-eyebrow tag ">
         AI-Enabled Assessment
        </div>
           
            <h2 className="heading blue-text mb-3">Tests That Match How You Teach.</h2>
            <p className="subtitle dark-text mb-3 "
             >
              TopAssess is an AI-enabled school assessment platform that helps
              teachers create, administer, and evaluate tests efficiently. It
              supports formative and summative assessments, ensuring
              high-quality, curriculum-aligned question papers and insightful
              performance reports for students and teachers.
            </p>
            <p className="subtitle blue-text mb-3 mt-1">
               Available in online and offline modes.
            </p>
            <ul className="check-list subtitle blue-text">
              <li>Identifies learning gaps early — before the exam</li>
              <li>Personalises support based on individual student data</li>
              <li>Saves teachers hours every week on paper-setting</li>
              <li>Improves student outcomes through data-driven teaching</li>
            </ul>
          </div>
          <div
            style={{ background: 'var(--blue)', borderRadius: '14px', padding: '1.75rem' }}>
            <div className=" subtitle green-text"
              style={{ textTransform: 'uppercase',  marginBottom: '1rem' }}>
              Question Formats Supported
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div className=" subtitle  white-text"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px',   }}>
                📝 MCQ
              </div>
              <div className=" subtitle  white-text"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px',  }}>
                ✍️ Subjective
              </div>
              <div className=" subtitle  white-text"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px', }}>
                🧩 Competency-Based
              </div>
              <div className=" subtitle  white-text"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px',   }}>
                🔤 Fill in the Blanks
              </div>
              <div className=" subtitle  white-text"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px',   }}>
                🔗 Match the Pair
              </div>
              <div className=" subtitle  white-text"
                style={{ background: 'rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '10px 12px',   }}>
                🔀 Mixed Format
              </div>
            </div>
            <div
              style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className=" subtitle green-text"
              style={{ textTransform: 'uppercase',  marginBottom: '0.5rem' }}>
                Bundled with
              </div>
              <div className=" subtitle grey-text" >
                📚 TopSeries Coursebooks · 🖥️ AI-Enabled IFP Panels (Brio,
                Cybernetix, Hikvision)
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
