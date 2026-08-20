import ContactForm from '@/components/public/ContactForm';

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

        <ContactForm />
      </div>
    </section>
  );
}