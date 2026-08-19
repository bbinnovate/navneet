
export default function Blue57() {
  return (
    <section className="sec sec-blue">
       <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "center",
  }}
>
  <div>
    <p className="tag sec-tag-gold">About Our Parent</p>

    <h2 className="sec-title sec-title-wh heading">
      Backed by Navneet Education Limited.
    </h2>

    <p
      className="sec-sub sec-sub-wh subtitle"
      style={{ maxWidth: "700px", marginBottom: "2rem" }}
    >
      Founded by the Gala family, Navneet Education Limited is India's
      leading educational content provider in print and digital mediums —
      with 5,000+ heavily endorsed titles in English, Hindi, Marathi,
      Gujarati, and more. NAVNEET TOPTECH is its 100% digital subsidiary,
      extending this legacy into the classroom of tomorrow.
    </p>

    <a
      className="btn-gold"
      href="https://navneet.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit navneet.com ↗
    </a>
  </div>

  <div
    style={{
      width: "100%",
      minHeight: "320px",
      background: "var(--light)",
      border: "2px dashed var(--border)",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "15px",
      color: "var(--muted)",
      fontFamily: "var(--fh)",
      fontWeight: "700",
      textAlign: "center",
    }}
  >
    Video
    <br />
    Placeholder
  </div>
</div>
      </section>
  );
}
