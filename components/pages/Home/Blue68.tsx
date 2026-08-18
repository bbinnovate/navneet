
export default function Blue68() {
  return (
    <section className="sec sec-blue">
        <div className="sec-hrow">
          <div>
            <p className="sec-tag sec-tag-gold">Video Library</p>
            <h2 className="sec-title sec-title-wh">
              See School Transformation in Action
            </h2>
            <p className="sec-sub sec-sub-wh">
              Product walkthroughs, school impact stories, teacher spotlights,
              and conclave highlights.
            </p>
          </div>
          <a className="link-more" style={{ color: 'var(--gold)' }}>View all →</a>
        </div>
        <div className="vgrid">
          <div className="vcard">
            <div className="vthumb" style={{ aspectRatio: '16/9' }}>
              <div className="vcat">Product Demo</div>
              <div className="vplay" style={{ width: '50px', height: '50px' }}></div>
              <span
                style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', textAlign: 'center', marginTop: '8px' }}>TopSchool LMS — Full Platform Walkthrough</span>
            </div>
          </div>
          <div className="vcard">
            <div className="vthumb">
              <div className="vcat">School Story</div>
              <div className="vplay-sm"></div>
            </div>
            <p className="vcard-label">Don Bosco School, Mumbai</p>
          </div>
          <div className="vcard">
            <div className="vthumb">
              <div className="vcat">Teacher Training</div>
              <div className="vplay-sm"></div>
            </div>
            <p className="vcard-label">Nitya — Teacher Spotlight</p>
          </div>
          <div className="vcard">
            <div className="vthumb">
              <div className="vcat">TopClass</div>
              <div className="vplay-sm"></div>
            </div>
            <p className="vcard-label">Smart Classroom Setup Guide</p>
          </div>
          <div className="vcard">
            <div className="vthumb">
              <div className="vcat">Navneet AI</div>
              <div className="vplay-sm"></div>
            </div>
            <p className="vcard-label">AI in the Indian Classroom</p>
          </div>
          <div className="vcard">
            <div className="vthumb">
              <div className="vcat">Conclave</div>
              <div className="vplay-sm"></div>
            </div>
            <p className="vcard-label">Education Conclave 2024 Highlights</p>
          </div>
        </div>
      </section>
  );
}
