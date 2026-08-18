
export default function White12() {
  return (
    <section className="sec sec-white">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>
          <div>
            <p className="sec-tag">Find Us</p>
            <h2 className="sec-title" style={{ fontSize: '24px' }}>Across India.</h2>
            <p
              style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '1.5rem' }}>
              Six offices. One mission.
            </p>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '20px' }}>📞</span>
                <div>
                  <div
                    style={{ fontSize: '13px', fontWeight: '700', color: 'var(--blue2)', fontFamily: 'var(--fh)' }}>
                    Toll Free
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
                    1800 266 6676
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>✉️</span>
                <div>
                  <div
                    style={{ fontSize: '13px', fontWeight: '700', color: 'var(--blue2)', fontFamily: 'var(--fh)' }}>
                    Email
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
                    info@navneettoptech.com
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div className="office-card">
                <div className="office-city">🏙️ Mumbai</div>
                <div className="office-addr">
                  1B, Benefice Business House, Mumbai
                </div>
              </div>
              <div className="office-card">
                <div className="office-city">🏙️ Bengaluru</div>
                <div className="office-addr">
                  30/A 14th Cross, HSR Layout, 560102
                </div>
              </div>
              <div className="office-card">
                <div className="office-city">🏙️ Delhi</div>
                <div className="office-addr">
                  B-36, Pusa Road, Old Rajinder Nagar, 110005
                </div>
              </div>
              <div className="office-card">
                <div className="office-city">🏙️ Chennai</div>
                <div className="office-addr">
                  C.P. Ramaswamy Road, Alwarpet, 600018
                </div>
              </div>
              <div className="office-card">
                <div className="office-city">🏙️ Hyderabad</div>
                <div className="office-addr">
                  Kalki Plaza, West Maredpalley, 500026
                </div>
              </div>
              <div className="office-card">
                <div className="office-city">🏙️ Nashik</div>
                <div className="office-addr">
                  Nirman Inspire, 2nd Floor, Nashik 422001
                </div>
              </div>
            </div>
          </div>
          <div className="form-box">
            <h3>Book a Free Demo</h3>
            <p>
              Our team will reach out within 24 hours to schedule your
              personalised walkthrough.
            </p>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label><input type="text" placeholder="e.g. Priya Sharma" />
              </div>
              <div className="form-group">
                <label>Mobile Number</label><input type="tel" placeholder="Your WhatsApp number" />
              </div>
            </div>
            <div className="form-group">
              <label>School Email</label><input type="email" placeholder="principal@school.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Your Role</label><select>
                  <option>Select Role</option>
                  <option>School Owner</option>
                  <option>Principal</option>
                  <option>Teacher</option>
                  <option>Coordinator</option>
                </select>
              </div>
              <div className="form-group">
                <label>Board</label><select>
                  <option>Select Board</option>
                  <option>CBSE</option>
                  <option>CBSE Pattern</option>
                  <option>Maharashtra State Board</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>School Name</label><input type="text" placeholder="Full school name" />
              </div>
              <div className="form-group">
                <label>City</label><input type="text" placeholder="e.g. Mumbai" />
              </div>
            </div>
            <div className="form-group">
              <label>I'm interested in</label><select>
                <option>Select Product</option>
                <option>TopSchool LMS</option>
                <option>TopClass</option>
                <option>TopAssess</option>
                <option>TopSeries</option>
                <option>Hardware & IFP</option>
                <option>All Products</option>
              </select>
            </div>
            <div className="form-group">
              <label>Anything else?</label><textarea
                placeholder="Optional — number of students, current setup, goals"></textarea>
            </div>
            <button className="form-submit">Book My Free Demo →</button>
            <p
              style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '10px', textAlign: 'center' }}>
              By submitting, you agree to receive communications from NAVNEET
              TOPTECH.
            </p>
          </div>
        </div>
      </section>
  );
}
