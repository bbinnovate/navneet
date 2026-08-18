import Link from 'next/link';

export default function Aisection57() {
  return (
    <section className="ai-section">
        <p className="sec-tag sec-tag-gold">AI Readiness</p>
        <h2 className="sec-title sec-title-wh">
          Your School's AI Journey Starts Here.
        </h2>
        <p className="sec-sub sec-sub-wh">
          AI in education is not a future concept. NAVNEET TOPTECH is built to
          help schools adopt AI confidently — with tools that are practical,
          curriculum-aligned, and ready for India's classrooms today.
        </p>
        <div className="g3" style={{ marginTop: '2.5rem' }}>
          <div className="ai-card">
            <div className="ai-card-icon">🤖</div>
            <div className="ai-pulse"><span className="ai-dot"></span>AI-Enabled</div>
            <div className="ai-card-title">AI-Driven Assessment with TopAssess</div>
            <div className="ai-card-desc">
              AI generates curriculum-aligned tests, evaluates responses
              instantly, and identifies exactly where each student is struggling
              ,giving teachers actionable insights in real time, not after the
              exam.
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-icon">🧭</div>
            <div className="ai-pulse"><span className="ai-dot"></span>Personalised</div>
            <div className="ai-card-title">
              Personalised Teaching with NavneetAI
            </div>
            <div className="ai-card-desc">
              India's first custom AI education model adapts learning pathways
              for each student — and gives teachers AI-powered insights to
              personalise instruction in real time.
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-icon">📊</div>
            <div className="ai-pulse"><span className="ai-dot"></span>Predictive</div>
            <div className="ai-card-title">Predictive Performance Analytics</div>
            <div className="ai-card-desc">
              TopSchool's analytics dashboard surfaces patterns in student data
              helping school leaders intervene before learning gaps become board
              exam problems.
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-icon">🖥️</div>
            <div className="ai-pulse"><span className="ai-dot"></span>AI Hardware</div>
            <div className="ai-card-title">
              AI-Enabled Classrooms via Hikvision IFPs
            </div>
            <div className="ai-card-desc">
              Hikvision's AI-enabled smart boards bring Navneet AI's
              personalised learning pathways directly into the classroom — on
              the panel, in real time, without any additional device.
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-icon">✨</div>
            <div className="ai-pulse"><span className="ai-dot"></span>Custom Built</div>
            <div className="ai-card-title">
              Navneet AI — India's First Custom Education Model
            </div>
            <div className="ai-card-desc">
              Not adapted from a general AI. Built from the ground up for Indian
              school education — curriculum-aligned, board-specific, and
              designed to support every learner's individual pace.
            </div>
          </div>
          <div className="ai-card">
            <div className="ai-card-icon">👩‍🏫</div>
            <div className="ai-pulse">
              <span className="ai-dot"></span>AI for Teachers
            </div>
            <div className="ai-card-title">
              AI-Ready Teachers Drive Better Outcomes
            </div>
            <div className="ai-card-desc">
              A school's AI readiness depends on its teachers. NAVNEET TOPTECH
              ensures every teacher is confident with AI tools — trained to use
              Navneet AI, TopAssess insights, and digital platforms effectively
              in the classroom.
            </div>
          </div>
        </div>
        <div className="ai-cta-bar">
          <div>
            <h3>Ready to make your school AI-ready?</h3>
            <p>Our team will show you what AI looks like inside your school.</p>
          </div>
          <Link href="/contact" className="btn-gold" >
            Book an AI Readiness Demo
          </Link>
        </div>
      </section>
  );
}
