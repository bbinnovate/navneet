
export default function Light24() {
  return (
    <section className="sec sec-light">
        <p className="sec-tag">For Every Stakeholder</p>
        <h2 className="sec-title">What TopClass Delivers.</h2>
        <div className="s-tabs">
          <div className="s-tab active" data-s-tab="sch">Schools</div>
          <div className="s-tab" data-s-tab="tch">Teachers</div>
          <div className="s-tab" data-s-tab="stu">
            Students & Parents
          </div>
        </div>
        <div id="s-sch" className="s-panel active">
          <div className="s-inner">
            <div>
              <h3
                style={{ fontFamily: 'var(--fh)', fontSize: '17px', fontWeight: '700', color: 'var(--blue2)', marginBottom: '0.75rem' }}>
                Schools drive the pursuit of knowledge and TopClass equips them
                with advanced technologies to support effective teaching and
                learning.
              </h3>
              <ul className="check-list">
                <li>Enhance school reputation with proven teaching tools</li>
                <li>Improve academic outcomes school-wide</li>
                <li>
                  Track syllabus completion across all classes in real time
                </li>
                <li>
                  Multiple teaching aids and resources — significant cost
                  savings
                </li>
              </ul>
            </div>
            <div
              style={{ background: 'var(--blue)', borderRadius: '12px', padding: '1.5rem' }}>
              <div
                style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--fh)' }}>
                Used by
              </div>
              <div
                style={{ fontFamily: 'var(--fh)', fontSize: '28px', fontWeight: '800', color: 'var(--white)' }}>
                4,000+
              </div>
              <div
                style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1rem' }}>
                Partner Schools
              </div>
              <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.75rem' }}>
                <div
                  style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                  <div
                    style={{ fontFamily: 'var(--fh)', fontSize: '18px', fontWeight: '800', color: 'var(--gold)' }}>
                    12+
                  </div>
                  <div
                    style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>
                    Avg. Years with Us
                  </div>
                </div>
                <div
                  style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '0.75rem', textAlign: 'center' }}>
                  <div
                    style={{ fontFamily: 'var(--fh)', fontSize: '18px', fontWeight: '800', color: 'var(--gold)' }}>
                    5+
                  </div>
                  <div
                    style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>
                    States Covered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="s-tch" className="s-panel">
          <div className="s-inner">
            <div>
              <h3
                style={{ fontFamily: 'var(--fh)', fontSize: '17px', fontWeight: '700', color: 'var(--blue2)', marginBottom: '0.75rem' }}>
                Teachers are the heart of our educational approach. TopClass
                gives them everything they need to teach better — with less
                preparation.
              </h3>
              <ul className="check-list">
                <li>
                  Lesson plans and digital content ready to use — no sourcing
                </li>
                <li>Automated assessments save valuable time each week</li>
                <li>41,000+ question paper generator — tests in minutes</li>
                <li>
                  Stay informed with latest educational trends and methodologies
                </li>
              </ul>
            </div>
            <div
              style={{ background: 'var(--green)', borderRadius: '12px', padding: '1.5rem' }}>
              <div
                style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '8px', fontFamily: 'var(--fh)' }}>
                Teacher Feedback
              </div>
              <div
                style={{ fontFamily: 'var(--fh)', fontSize: '28px', fontWeight: '800', color: 'var(--white)' }}>
                1,00,000+
              </div>
              <div
                style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', marginTop: '4px' }}>
                Teachers Trained
              </div>
              <div
                style={{ marginTop: '1rem', fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.65' }}>
                On TopSchool, TopClass, and TopAssess — across CBSE, CBSE
                Pattern, and Maharashtra State Board schools.
              </div>
            </div>
          </div>
        </div>
        <div id="s-stu" className="s-panel">
          <div className="s-inner">
            <div>
              <h3
                style={{ fontFamily: 'var(--fh)', fontSize: '17px', fontWeight: '700', color: 'var(--blue2)', marginBottom: '0.75rem' }}>
                TopClass ensures the digital content provided maximises every
                child's learning potential.
              </h3>
              <ul className="check-list">
                <li>
                  Learning made interactive and enjoyable through 2D/3D
                  animations
                </li>
                <li>
                  Education that aligns with CBSE and MSB national standards
                </li>
                <li>
                  Value for money — vast visual enhancements for every lesson
                </li>
                <li>
                  Content designed to deliver results — for a proud parent
                </li>
              </ul>
            </div>
            <div
              style={{ background: 'var(--blue)', borderRadius: '12px', padding: '1.5rem' }}>
              <div
                style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold)', marginBottom: '8px', fontFamily: 'var(--fh)' }}>
                Student Outcome
              </div>
              <div
                style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.65' }}>
                Students who learn through 2D/3D animated concepts retain more
                than through textbook-only teaching — and stay engaged
                throughout the lesson.
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
