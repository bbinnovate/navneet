export default function White12() {
  const offices = [
    {
      city: "Mumbai",
      address: "1B, Benefice Business House, Mumbai",
    },
    {
      city: "Bengaluru",
      address: "30/A 14th Cross, HSR Layout, 560102",
    },
    {
      city: "Delhi",
      address: "B-36, Pusa Road, Old Rajinder Nagar, 110005",
    },
    {
      city: "Chennai",
      address: "C.P. Ramaswamy Road, Alwarpet, 600018",
    },
    {
      city: "Hyderabad",
      address: "Kalki Plaza, West Maredpalley, 500026",
    },
    {
      city: "Nashik",
      address: "Nirman Inspire, 2nd Floor, Nashik 422001",
    },
  ];

  return (
    <section className="sec sec-white">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <div>
          <p className="tag green-text">Find Us</p>
          <h2 className="heading blue-text mb-3">Across India.</h2>

          <p
            className="subtitle dark-text mb-3"
            style={{ marginBottom: "1.5rem" }}
          >
            Six offices. One mission.
          </p>

          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "20px" }}>📞</span>

              <div>
                <div className="subtitle blue-text">Toll Free</div>

                <a
                  href="tel:18002666676"
                  className="subtitle dark-text"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  1800 266 6676
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "20px" }}>✉️</span>

              <div>
                <div className="subtitle blue-text">Email</div>

                <a
                  href="mailto:info@navneettoptech.com"
                  className="subtitle dark-text"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  info@navneettoptech.com
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
            }}
          >
            {offices.map((office, index) => (
              <div className="office-card" key={index}>
                <div className="title blue-text mb-3">
                  🏙️ {office.city}
                </div>

                <div className="subtitle dark-text">
                  {office.address}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-box">
          <h2 className="heading blue-text mb-3">Book a Free Demo</h2>

         <p
            className="subtitle dark-text" >
            Our team will reach out within 24 hours to schedule your
            personalised walkthrough.
          </p>

          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="e.g. Priya Sharma"
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Your WhatsApp number"
              />
            </div>
          </div>

          <div className="form-group">
            <label>School Email</label>
            <input
              type="email"
              placeholder="principal@school.com"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Your Role</label>
              <select>
                <option>Select Role</option>
                <option>School Owner</option>
                <option>Principal</option>
                <option>Teacher</option>
                <option>Coordinator</option>
              </select>
            </div>

            <div className="form-group">
              <label>Board</label>
              <select>
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
              <label>School Name</label>
              <input
                type="text"
                placeholder="Full school name"
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                placeholder="e.g. Mumbai"
              />
            </div>
          </div>

          <div className="form-group">
            <label>I'm interested in</label>
            <select>
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
            <label>Anything else?</label>
            <textarea
              placeholder="Optional — number of students, current setup, goals"
            ></textarea>
          </div>

         <div className="flex w-full gap-3">
  <button className="btn-gold w-full">
    Book My Free Demo →
  </button>

 
</div>
        <p
            className="subtitle dark-text mb-3" 
            style={{
            
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            By submitting, you agree to receive communications from NAVNEET
            TOPTECH.
          </p>
        </div>
      </div>
    </section>
  );
}