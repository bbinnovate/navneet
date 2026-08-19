const offices = [
  {
    icon: "🏙️",
    imageLabel: "Mumbai Office Photo",
    city: "Mumbai",
    type: "Corporate HQ",
    address:
      "1B, Benefice Business House, Mathuradas Mill Estate, NM Joshi Marg, Lower Parel, Mumbai 400013",
  },
  {
    icon: "🌆",
    imageLabel: "Bengaluru Office Photo",
    city: "Bengaluru",
    type: "South India Office",
    address: "30/A 14th Cross, HSR Layout, Bengaluru 560102",
  },
  {
    icon: "🏛️",
    imageLabel: "Delhi Office Photo",
    city: "Delhi",
    type: "North India Office",
    address:
      "B-36, Pusa Road, Old Rajinder Nagar, New Delhi 110005",
  },
  {
    icon: "🏖️",
    imageLabel: "Chennai Office Photo",
    city: "Chennai",
    type: "Tamil Nadu Office",
    address:
      "C.P. Ramaswamy Road, Alwarpet, Chennai 600018",
  },
  {
    icon: "🕌",
    imageLabel: "Hyderabad Office Photo",
    city: "Hyderabad",
    type: "Telangana Office",
    address:
      "Kalki Plaza, West Maredpalley, Hyderabad 500026",
  },
  {
    icon: "🍇",
    imageLabel: "Nashik Office Photo",
    city: "Nashik",
    type: "Maharashtra Interior",
    address:
      "Nirman Inspire, 2nd Floor, Nashik 422001",
  },
];

export default function White12() {
  return (
    <section className="sec sec-white">
      <p className="tag green-text">Our Offices</p>

      <h2 className="heading blue-text">
        Find Us Near You.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {offices.map((office) => (
          <div
            key={office.city}
            style={{
              background: "var(--white)",
              borderRadius: "14px",
              padding: "1.5rem",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                background: "var(--light)",
                borderRadius: "10px",
                border: "1.5px dashed var(--border)",
                aspectRatio: "16/9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginBottom: "1.25rem",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "28px" }}>
                {office.icon}
              </div>

              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  fontFamily: "var(--fh)",
                  color: "var(--muted)",
                }}
              >
                {office.imageLabel}
              </div>

              <div
                style={{
                  fontSize: "10px",
                  color: "var(--border)",
                }}
              >
                [ 800×450px ]
              </div>
            </div>

            <div  className="title blue-text mb-3"
             
            >
              {office.city}
            </div>

            <div className="tag green-text"
              style={{
                 textTransform: "uppercase",
              
                marginBottom: "8px",
              }}
            >
              {office.type}
            </div>

            <div className="subtitle drak-text"
             
            >
              {office.address}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}