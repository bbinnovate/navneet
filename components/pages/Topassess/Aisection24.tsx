
export default function Aisection24() {
  return (
    <section className="ai-section">
        <p className="sec-tag sec-tag-gold">AI Capabilities</p>
        <h2 className="sec-title sec-title-wh">What AI Does Inside TopAssess.</h2>
        <p className="sec-sub sec-sub-wh">
          TopAssess doesn't just digitise paper tests. The AI component changes
          what teachers can know and act on — in real time.
        </p>
        <div className="g3" style={{ marginTop: '2.5rem' }}>
          <div className="ai-card">
            <div className="ai-card-icon">⚡</div>
            <div className="ai-pulse"><span className="ai-dot"></span>Automated</div>
            <div className="ai-card-title">AI Test Generation</div>
            <div className="ai-card-desc">
              Select subject, chapter, difficulty, and marks — AI generates a
              balanced, curriculum-aligned assessment instantly. 2,00,000+
              questions. Zero manual sourcing.
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-icon">📊</div>
            <div className="ai-pulse"><span className="ai-dot"></span>Instant</div>
            <div className="ai-card-title">Real-Time Performance Analytics</div>
            <div className="ai-card-desc">
              The moment a student submits, AI evaluates responses and generates
              a performance report — by topic, chapter, and difficulty. Zero
              manual grading.
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-icon">🔍</div>
            <div className="ai-pulse"><span className="ai-dot"></span>Predictive</div>
            <div className="ai-card-title">Learning Gap Detection</div>
            <div className="ai-card-desc">
              AI identifies exactly which concepts a student has not mastered
              and flags those students to the teacher — before the gap becomes a
              board exam problem.
            </div>
          </div>
        </div>
      </section>
  );
}
